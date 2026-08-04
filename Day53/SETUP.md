# SETUP.md — AI Career Copilot (Day 53)

## Architecture (updated Day 53)
Two separate deployable apps:
- **Frontend**: Next.js 14 + TypeScript + Tailwind → deploys to **Vercel**
- **Backend**: Node.js + Express + TypeScript → deploys to **Render**

They communicate over HTTPS; the frontend never talks to Supabase/Claude/Razorpay directly except where Supabase's client SDK handles auth in-browser.

## Prerequisites (confirmed installed Day 53)
- Node.js ≥ 18.17 + npm
- Git + GitHub account
- VS Code + ESLint, Prettier, Tailwind CSS IntelliSense extensions

## Accounts created Day 53
- Supabase project (DB + Auth + Storage)
- Anthropic Console (Claude API key)
- Render account (backend hosting — not deployed yet)

Vercel + Razorpay accounts assumed from earlier days; not required until later.

## Local setup

```bash
git clone <your-repo-url>
cd ai-career-copilot

cd frontend
npm install
cp .env.local.example .env.local   # fill in Supabase URL/anon key
npm run dev                        # http://localhost:3000

cd ../backend
npm install
cp .env.example .env               # fill in Supabase service role key, Anthropic key
npm run dev                        # http://localhost:4000
```

## Verifying the foundation works
1. `http://localhost:3000` renders the Hello World landing page
2. `http://localhost:4000/health` returns `{"status":"ok",...}`
3. No TypeScript or ESLint errors in either app
4. `git status` shows a clean initial commit after first push

## What's NOT done yet (intentionally)
- Real Supabase Auth wiring (`requireAuth` middleware is a placeholder) — Day 4
- Any AI feature routes (resume scoring, LinkedIn, interview, skills) — Day 4–8
- Payments — Day 10
- Actual Vercel/Render deployment (accounts created, not connected yet)
