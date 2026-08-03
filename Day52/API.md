# API.md — AI Career Copilot v1.0 API Design

> All endpoints are Next.js API routes under `/api/*`. Authentication uses Supabase session cookies/JWT unless noted. No implementation code — design only.

---

## Auth
Handled primarily by Supabase Auth client SDK (signup, login, Google OAuth, logout, session refresh). No custom `/api/auth/*` routes needed for v1.0 beyond an optional profile-completion endpoint below.

### `POST /api/auth/complete-profile`
- **Purpose:** Save `full_name` and `target_role` after first signup.
- **Auth:** Required (Supabase session)
- **Request:** `{ full_name: string, target_role: string }`
- **Response:** `{ success: true, user: {...} }`
- **Validation:** `full_name` non-empty; `target_role` non-empty
- **Errors:** `401` unauthenticated, `400` invalid input

---

## Resume

### `POST /api/resume/upload`
- **Purpose:** Upload a parsed resume and store it.
- **Auth:** Required
- **Request:** `{ file_type: 'pdf'|'docx', extracted_text: string, file_base64: string }`
- **Response:** `{ resume_id: uuid, uploaded_at: timestamptz }`
- **Validation:** file size ≤ 5MB, file_type in allowed list, extracted_text non-empty
- **Errors:** `401` unauthenticated, `400` invalid file, `413` too large

### `POST /api/resume/score`
- **Purpose:** Score a resume (general ATS or JD-matched).
- **Auth:** Required
- **Request:** `{ resume_id: uuid, job_description?: string }`
- **Response:** `{ ats_score: int, section_feedback: [...], missing_keywords?: [...] }`
- **Validation:** `resume_id` must belong to authenticated user; quota check for free tier
- **Errors:** `401`, `403` (not your resume), `402` (quota exceeded), `422` (AI response malformed)

### `GET /api/resume/history`
- **Purpose:** List all past resumes + scores for the dashboard/history view.
- **Auth:** Required
- **Request:** query params `?limit=20&offset=0`
- **Response:** `{ resumes: [{ resume_id, uploaded_at, latest_score }] }`
- **Errors:** `401`

---

## LinkedIn

### `POST /api/linkedin/analyze`
- **Purpose:** Analyze pasted LinkedIn profile text and return section-by-section suggestions.
- **Auth:** Required
- **Request:** `{ raw_profile_text: string }`
- **Response:** `{ optimization_score: int, section_feedback: [{ section, current, suggested }] }`
- **Validation:** text non-empty, max length (e.g., 10,000 chars); quota check
- **Errors:** `401`, `402`, `400`, `422`

### `GET /api/linkedin/history`
- **Purpose:** Retrieve past LinkedIn analyses.
- **Auth:** Required
- **Response:** `{ analyses: [{ id, optimization_score, analyzed_at }] }`
- **Errors:** `401`

---

## Interview Prep

### `POST /api/interview/start`
- **Purpose:** Generate a set of role-specific interview questions.
- **Auth:** Required
- **Request:** `{ target_role: string, resume_id?: uuid }`
- **Response:** `{ session_id: uuid, questions: [string] }`
- **Validation:** `target_role` non-empty; quota check
- **Errors:** `401`, `402`, `400`

### `POST /api/interview/answer`
- **Purpose:** Submit an answer to a question and receive AI feedback.
- **Auth:** Required
- **Request:** `{ session_id: uuid, question: string, user_answer: string }`
- **Response:** `{ ai_feedback: { strengths, improvements, suggested_answer }, clarity_score: int }`
- **Validation:** `session_id` belongs to user, `user_answer` non-empty
- **Errors:** `401`, `403`, `400`, `422`

### `GET /api/interview/history`
- **Purpose:** List past interview sessions and answers.
- **Auth:** Required
- **Response:** `{ sessions: [{ session_id, target_role, started_at, answer_count }] }`
- **Errors:** `401`

---

## Skill Gap

### `POST /api/skills/analyze`
- **Purpose:** Compare resume skills to target role and return prioritized gaps.
- **Auth:** Required
- **Request:** `{ resume_id: uuid, target_role: string }`
- **Response:** `{ existing_skills: [...], missing_skills: [...], prioritized_learning_path: [{ skill, why, resource_hint }] }`
- **Validation:** `resume_id` belongs to user; quota check
- **Errors:** `401`, `403`, `402`, `422`

### `GET /api/skills/latest`
- **Purpose:** Fetch the most recent skill gap report for the dashboard.
- **Auth:** Required
- **Response:** `{ report: {...} | null }`
- **Errors:** `401`

---

## Payments / Subscription

### `POST /api/payments/create-order`
- **Purpose:** Create a Razorpay order for a plan upgrade.
- **Auth:** Required
- **Request:** `{ plan: 'pro_monthly' | 'pro_annual' }`
- **Response:** `{ razorpay_order_id: string, amount_inr: int, currency: 'INR' }`
- **Validation:** plan must be a valid paid plan
- **Errors:** `401`, `400`

### `POST /api/payments/verify`
- **Purpose:** Verify Razorpay payment signature and activate subscription.
- **Auth:** Required
- **Request:** `{ razorpay_order_id, razorpay_payment_id, razorpay_signature }`
- **Response:** `{ subscription: { plan, status, current_period_end } }`
- **Validation:** signature verified server-side against Razorpay secret
- **Errors:** `401`, `400` (invalid signature), `500` (Razorpay error)

### `POST /api/payments/webhook`
- **Purpose:** Handle Razorpay webhook events (renewals, failures, cancellations).
- **Auth:** Razorpay webhook signature (not user session)
- **Request:** Razorpay event payload
- **Response:** `{ received: true }`
- **Validation:** webhook signature verified
- **Errors:** `400` (invalid signature)

### `GET /api/payments/subscription`
- **Purpose:** Get current user's subscription status (used to gate features/quota).
- **Auth:** Required
- **Response:** `{ plan, status, current_period_end }`
- **Errors:** `401`

---

## Dashboard

### `GET /api/dashboard/summary`
- **Purpose:** Aggregate latest state across all features for the dashboard home screen.
- **Auth:** Required
- **Response:** `{ latest_resume_score, latest_linkedin_score, latest_interview_session, latest_skill_gap_report, subscription_plan, scans_remaining_this_month }`
- **Errors:** `401`

---

## Cross-Cutting Rules
- All endpoints (except `/api/payments/webhook`) require a valid Supabase session; return `401` if absent/expired.
- All ownership checks (`resume_id`, `session_id`, etc. belonging to `auth.uid()`) enforced both at the API layer and via Postgres RLS (defense in depth).
- Free-tier quota (e.g., 3 scans/month across resume/LinkedIn/interview/skills combined — exact number TBD in pricing model) checked before any Claude API call to avoid wasted spend.
- All AI-backed endpoints validate that Claude's JSON response matches the expected schema before saving; malformed responses return `422` and are logged for prompt-tuning.
