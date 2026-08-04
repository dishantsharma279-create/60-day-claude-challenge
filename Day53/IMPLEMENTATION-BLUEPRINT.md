# AI Career Copilot — Implementation Blueprint (Updated Day 53)

> Base document recreated Day 52; this revision logs the one architecture change made during Day 53 setup.

## Phase Overview
| Phase | Days | Goal |
|---|---|---|
| Phase 1 — Planning | Day 1 | Problem validation, PRD, pitch deck, high-level blueprint |
| Phase 2 — Technical Blueprint | Day 2 | Tech stack, architecture, schema, API design, wireframes, folder structure |
| Phase 3 — Core Build | Day 3–5 (today = Day 3) | Auth, DB setup, resume upload + ATS scoring engine |
| Phase 4 — Feature Build | Day 6–8 | JD match, LinkedIn optimizer, interview prep, skill gap report |
| Phase 5 — Dashboard & Polish | Day 9 | Dashboard, history, UI polish, empty/error states |
| Phase 6 — Payments & Launch Prep | Day 10 | INR pricing/paywall, Razorpay integration, deploy |
| Phase 7 — Launch | Day 11+ | Public launch, build-in-public posts, feedback loop |

## Changes From Day 52 Blueprint

### Change #1 — Backend architecture (Day 53)
**Before:** All backend logic inside Next.js API Routes (`app/api/*`), single Vercel deployment.
**After:** Separate Node.js + Express backend, deployed independently to Render. Next.js frontend remains on Vercel and calls the backend over HTTPS.

**Justification:** User-directed decision at Day 53 setup. Trade-offs accepted:
- ➕ Clear separation of concerns; backend can scale/redeploy independently of frontend
- ➕ Easier to reason about where secrets live (backend-only `.env`)
- ➖ Added complexity: CORS configuration, two deployments to manage, two sets of environment variables
- ➖ Slightly slower requests (extra network hop frontend → backend vs. same-process API routes)

**Impact on other Day 52 docs:**
- `ARCHITECTURE.md` — component diagram needs Render node + explicit frontend→backend HTTPS arrow (update before Day 4)
- `PROJECT-STRUCTURE.md` — updated Day 53 (see file)
- `API.md` — endpoint contracts (request/response shapes) unchanged; only the serving mechanism changes from Next.js route handlers to Express routers

No other deviations from the Day 52 documents. Feature scope, schema, screens, and pricing model are all unchanged.

## Guiding Principles Carried Forward
- Free/low-cost infrastructure by default (Render + Vercel free tiers still apply)
- India-first product (INR pricing, campus-to-job framing)
- Solo-builder pace: prefer boring, well-documented tech over novel tech
- Ship v1.0 scope only — resist feature creep until launched

## Day 3 Completion Check
| Check | Status |
|---|---|
| Frontend scaffolded and running locally | ✅ |
| Backend scaffolded and running locally | ✅ |
| Git repo initialized | ✅ (push pending your confirmation) |
| Ready for Day 4 (real auth wiring) | ✅ |
