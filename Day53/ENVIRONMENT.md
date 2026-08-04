# ENVIRONMENT.md — AI Career Copilot (Day 53)

## Frontend — `frontend/.env.local`
| Variable | Purpose | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public (anon) key — safe for browser, RLS enforces access | Same page as above |
| `NEXT_PUBLIC_BACKEND_URL` | Where the frontend sends API requests | `http://localhost:4000` locally; Render URL in production |

`NEXT_PUBLIC_*` variables are bundled into the browser JS — never put secret keys behind this prefix.

## Backend — `backend/.env`
| Variable | Purpose | Where to get it |
|---|---|---|
| `PORT` | Local port for Express | Default `4000` |
| `FRONTEND_URL` | Used by CORS to allow only our frontend | `http://localhost:3000` locally; Vercel URL in production |
| `SUPABASE_URL` | Same Supabase project URL as frontend | Supabase Dashboard |
| `SUPABASE_SERVICE_ROLE_KEY` | Full-access key — bypasses RLS. **Backend only, never sent to browser.** | Supabase Dashboard → API → service_role |
| `ANTHROPIC_API_KEY` | Authenticates calls to Claude | console.anthropic.com → API Keys |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | Payment processing (not needed until Day 10) | Razorpay Dashboard → API Keys |

## Deployment env vars (set later, not local)
- **Vercel** (frontend): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_BACKEND_URL` (set to the live Render URL)
- **Render** (backend): all of `backend/.env` above, with `FRONTEND_URL` set to the live Vercel URL

## Security notes
- `.env` and `.env.local` are both git-ignored — never commit real keys
- Only `.env.local.example` / `.env.example` (with blank values) are committed, so teammates/future-you know what's needed
