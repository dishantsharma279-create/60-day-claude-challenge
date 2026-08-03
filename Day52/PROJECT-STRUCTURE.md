# PROJECT-STRUCTURE.md — AI Career Copilot

## Folder Structure (Next.js App Router)

```
ai-career-copilot/
├── app/
│   ├── (marketing)/
│   │   └── page.tsx                # Landing page
│   ├── (auth)/
│   │   ├── signup/page.tsx
│   │   └── login/page.tsx
│   ├── (app)/                      # authenticated area
│   │   ├── layout.tsx              # top nav + auth guard
│   │   ├── dashboard/page.tsx
│   │   ├── resume/
│   │   │   ├── page.tsx            # upload screen
│   │   │   └── result/page.tsx
│   │   ├── linkedin/
│   │   │   ├── page.tsx
│   │   │   └── result/page.tsx
│   │   ├── interview/
│   │   │   ├── page.tsx            # setup
│   │   │   ├── session/[id]/page.tsx
│   │   │   └── summary/[id]/page.tsx
│   │   ├── skills/page.tsx
│   │   ├── history/page.tsx
│   │   ├── pricing/page.tsx
│   │   └── settings/page.tsx
│   └── api/
│       ├── auth/complete-profile/route.ts
│       ├── resume/
│       │   ├── upload/route.ts
│       │   ├── score/route.ts
│       │   └── history/route.ts
│       ├── linkedin/
│       │   ├── analyze/route.ts
│       │   └── history/route.ts
│       ├── interview/
│       │   ├── start/route.ts
│       │   ├── answer/route.ts
│       │   └── history/route.ts
│       ├── skills/
│       │   ├── analyze/route.ts
│       │   └── latest/route.ts
│       ├── payments/
│       │   ├── create-order/route.ts
│       │   ├── verify/route.ts
│       │   ├── webhook/route.ts
│       │   └── subscription/route.ts
│       └── dashboard/summary/route.ts
│
├── components/
│   ├── ui/                         # buttons, cards, inputs (design system)
│   ├── dashboard/                  # dashboard-specific widgets
│   ├── resume/                     # upload dropzone, score display
│   ├── linkedin/
│   ├── interview/
│   └── skills/
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                # browser client
│   │   ├── server.ts                # server-side client
│   │   └── middleware.ts            # session refresh
│   ├── claude/
│   │   ├── client.ts                # Anthropic SDK wrapper
│   │   └── prompts/
│   │       ├── resumeScoring.ts
│   │       ├── linkedinAnalysis.ts
│   │       ├── interviewQuestions.ts
│   │       ├── interviewFeedback.ts
│   │       └── skillGap.ts
│   ├── razorpay/
│   │   └── client.ts
│   ├── parsing/
│   │   ├── pdfParser.ts             # pdf.js wrapper
│   │   └── docxParser.ts            # mammoth wrapper
│   └── validation/
│       └── schemas.ts               # zod schemas for API request/response validation
│
├── types/
│   ├── database.ts                  # generated Supabase types
│   └── api.ts                       # shared request/response types
│
├── styles/
│   └── globals.css                  # Tailwind base + design tokens (navy/cyan/amber)
│
├── public/
│   └── assets/
│
├── supabase/
│   └── migrations/                  # SQL migration files (schema versioned here)
│
├── docs/                            # today's deliverables live here for repo reference
│   ├── PRD.md
│   ├── IMPLEMENTATION-BLUEPRINT.md
│   ├── PITCH-DECK.md
│   ├── ARCHITECTURE.md
│   ├── SCHEMA.md
│   ├── API.md
│   ├── UI-WIREFRAMES.md
│   └── PROJECT-STRUCTURE.md
│
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── package.json
└── README.md
```

## Rationale

| Folder | Responsibility | Why structured this way |
|---|---|---|
| `app/(marketing)` | Public landing page | Route group keeps unauthenticated pages separate from the app shell |
| `app/(auth)` | Signup/login | Isolated so auth layout doesn't inherit the dashboard nav |
| `app/(app)` | Everything behind login | Single `layout.tsx` here enforces the auth guard once, not per-page |
| `app/api/*` | All backend logic | Mirrors the API.md structure 1:1 so any endpoint is easy to locate |
| `components/` | Reusable UI, grouped by feature | Keeps feature-specific components out of generic `ui/` |
| `lib/claude/prompts/` | One file per AI feature prompt | Prompts will need iteration — isolating them makes tuning safe without touching route logic |
| `lib/parsing/` | Client-side file parsing helpers | Matches your approved pdf.js/mammoth choice, kept separate from API logic |
| `supabase/migrations/` | Version-controlled schema | Keeps SCHEMA.md changes traceable in Git rather than made ad hoc in the Supabase dashboard |
| `docs/` | All planning docs live in-repo | Keeps the PRD/blueprint/architecture as living, version-controlled source of truth next to the code that implements them |

## Where Future Code Will Live
- **Day 3–5 (Core Build):** `app/(auth)/*`, `lib/supabase/*`, `app/(app)/resume/*`, `app/api/resume/*`, `lib/claude/prompts/resumeScoring.ts`
- **Day 6–8 (Feature Build):** `app/(app)/linkedin/*`, `interview/*`, `skills/*` and matching `app/api/*` routes + prompts
- **Day 9 (Dashboard/Polish):** `app/(app)/dashboard/*`, `components/dashboard/*`
- **Day 10 (Payments):** `lib/razorpay/*`, `app/(app)/pricing/*`, `app/api/payments/*`
