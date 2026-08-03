# ARCHITECTURE.md — AI Career Copilot

## 1. High-Level Component Diagram

```mermaid
flowchart TB
    subgraph Client["Browser (Next.js Frontend)"]
        UI[React UI - Tailwind]
        PDFJS[pdf.js / mammoth - client-side parsing]
    end

    subgraph Vercel["Vercel (Hosting)"]
        NextApp[Next.js App]
        subgraph API["Next.js API Routes"]
            AuthAPI["/api/auth/*"]
            ResumeAPI["/api/resume/*"]
            LinkedInAPI["/api/linkedin/*"]
            InterviewAPI["/api/interview/*"]
            SkillGapAPI["/api/skills/*"]
            PaymentAPI["/api/payments/*"]
        end
    end

    subgraph Supabase["Supabase"]
        SupaAuth[Supabase Auth]
        SupaDB[(Postgres DB)]
        SupaStorage[Supabase Storage - resume files]
    end

    subgraph External["External Services"]
        Claude[Anthropic Claude API]
        Razorpay[Razorpay API]
    end

    UI --> NextApp
    PDFJS --> UI
    NextApp --> API
    AuthAPI --> SupaAuth
    ResumeAPI --> SupaDB
    ResumeAPI --> SupaStorage
    ResumeAPI --> Claude
    LinkedInAPI --> Claude
    LinkedInAPI --> SupaDB
    InterviewAPI --> Claude
    InterviewAPI --> SupaDB
    SkillGapAPI --> Claude
    SkillGapAPI --> SupaDB
    PaymentAPI --> Razorpay
    PaymentAPI --> SupaDB
```

## 2. Data Flow — Resume ATS Scoring (primary flow)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Next.js Frontend
    participant A as API Route (/api/resume/score)
    participant S as Supabase (DB + Storage)
    participant C as Claude API

    U->>F: Upload resume (PDF/DOCX)
    F->>F: Parse text client-side (pdf.js / mammoth)
    F->>A: POST extracted text + optional JD text
    A->>S: Verify session (Supabase Auth)
    A->>S: Check free-tier scan quota
    A->>C: Send prompt (resume text + scoring rubric)
    C-->>A: Structured JSON score + feedback
    A->>S: Save resume + score record
    A-->>F: Return score + feedback
    F-->>U: Render ATS score report
```

## 3. Request Lifecycle (general pattern for all AI features)

```mermaid
flowchart LR
    A[User Action] --> B[Frontend validates input]
    B --> C[API Route: authenticate via Supabase session]
    C --> D{Within quota?}
    D -- No --> E[Return 402 - upgrade prompt]
    D -- Yes --> F[Call Claude API with structured prompt]
    F --> G[Parse + validate AI JSON response]
    G --> H[Persist result to Supabase]
    H --> I[Return response to frontend]
    I --> J[Render result + update dashboard state]
```

## 4. AI Interaction Design

- All AI calls are server-side only (API routes), never directly from the browser — this protects the Anthropic API key.
- Every AI prompt requests **structured JSON output** (score, feedback array, keywords array, etc.) so the frontend can render consistent UI without parsing free text.
- Model: **Claude Haiku 4.5** for all v1.0 features (cost-optimized). Escalation to a stronger model is a post-v1.0 consideration if feedback quality proves insufficient.
- Each AI call is logged (prompt type, token count, latency) in a lightweight `ai_usage_logs` table for cost monitoring.

## 5. External Services

| Service | Purpose | Free Tier Notes |
|---|---|---|
| Supabase | DB, Auth, File Storage | Free tier: 500MB DB, 1GB file storage, 50k MAUs |
| Anthropic Claude API | Resume scoring, LinkedIn feedback, interview Q&A, skill gap analysis | Pay-per-token — monitor via `ai_usage_logs` |
| Razorpay | INR payments/subscriptions | Free integration, transaction fees only |
| Vercel | Hosting, CI/CD | Free tier sufficient for v1.0 traffic |

## 6. Security Notes
- Supabase Row Level Security (RLS) enabled on all tables — users can only read/write their own rows.
- Anthropic and Razorpay API keys stored as Vercel environment variables, never exposed to the client.
- File uploads restricted to PDF/DOCX, size-capped (e.g., 5MB), scanned for type before parsing.
