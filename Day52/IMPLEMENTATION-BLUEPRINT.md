# AI Career Copilot — Implementation Blueprint (Recreated & Updated)

> Recreated on Day 52 to serve as source of truth alongside the recreated PRD. Day numbering below is illustrative — adjust if your actual challenge day-mapping differs.

## Phase Overview

| Phase | Days | Goal |
|---|---|---|
| Phase 1 — Planning | Day 1 | Problem validation, PRD, pitch deck, high-level blueprint |
| Phase 2 — Technical Blueprint | Day 2 (today) | Tech stack, architecture, schema, API design, wireframes, folder structure |
| Phase 3 — Core Build | Day 3–5 | Auth, DB setup, resume upload + ATS scoring engine |
| Phase 4 — Feature Build | Day 6–8 | JD match, LinkedIn optimizer, interview prep, skill gap report |
| Phase 5 — Dashboard & Polish | Day 9 | Dashboard, history, UI polish, empty/error states |
| Phase 6 — Payments & Launch Prep | Day 10 | INR pricing/paywall, Razorpay integration, deploy |
| Phase 7 — Launch | Day 11+ | Public launch, build-in-public posts, feedback loop |

## Day 2 (Today) — Deliverables
1. Finalized tech stack with justification
2. System architecture (Mermaid diagrams)
3. Database schema
4. Full v1.0 API design
5. User flow, screen flow, navigation, low-fidelity wireframes
6. Project folder structure
7. Day 3 readiness check

## Guiding Principles Carried Forward From PRD
- Free/low-cost infrastructure by default
- India-first product (INR pricing, campus-to-job framing)
- Solo-builder pace: prefer boring, well-documented tech over novel tech
- Ship v1.0 scope only — resist feature creep until launched

## Changes From Original Blueprint (if any)
None yet — today's technical decisions are consistent with the recreated PRD. Any deviation discovered during today's design work will be listed here with justification before proceeding.

## Finalized Tech Stack (Day 2)
Next.js (React + Tailwind) on Vercel · Next.js API Routes as backend · Supabase (Postgres + Auth + Storage) · Anthropic Claude Haiku 4.5 for all AI features · Razorpay for INR payments · pdf.js/mammoth for client-side resume parsing.

Full justification in `ARCHITECTURE.md`. This is a step up from the usual single-file/no-backend build style — a deliberate, confirmed decision, since v1.0 requires real accounts, saved history, and payments.

## Day 3 Readiness Check

| Check | Status | Notes |
|---|---|---|
| Can the project realistically finish in remaining days? | ✅ Yes, if scope stays fixed | Phases 3–6 (core build → payments) are each 2–3 days of focused work; achievable for a solo builder given the challenge pace already demonstrated (5 shipped projects in prior days) |
| Has scope crept? | ✅ No | v1.0 feature set is unchanged from the recreated PRD: resume score, JD match, LinkedIn optimizer, interview prep, skill gap, dashboard, INR pricing |
| Can Day 3 start implementation immediately? | ✅ Yes | Repo structure, schema, and API contracts are fully specified — Day 3 can begin with Supabase project setup + auth wiring with zero additional design decisions needed |
| Any recommended simplifications? | ⚠️ Two flagged below | See below |

### Recommended Simplifications (flagged for your approval, not yet applied)
1. **Interview Prep audio/recording:** PRD already scoped this out for v1.0 (text-only answers) — confirmed correct, no change needed, just noting the guardrail held.
2. **Free-tier quota number:** API.md left the exact free-scan limit as "TBD in pricing model." Recommend locking this to a specific number (e.g., 3 scans/month total) before Day 10 (Payments) so the quota-check logic in `/api/resume/score` etc. isn't left ambiguous. This doesn't block Day 3–9 work, but should be decided before Day 10.

### Overall Verdict
**Ready to begin implementation on Day 3.** No blocking issues. One small open decision (free-tier quota number) to resolve before Day 10, not before Day 3.
