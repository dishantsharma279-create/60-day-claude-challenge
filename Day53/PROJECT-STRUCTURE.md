# PROJECT-STRUCTURE.md — AI Career Copilot (Updated Day 53)

> Updated from the Day 52 version to reflect the Day 53 architecture decision:
> a separate Express backend (Render) instead of Next.js API Routes only.
> Everything else (features, schema, screens) is unchanged.

```
ai-career-copilot/
├── frontend/                       # Next.js app → deploys to Vercel
│   ├── app/
│   │   ├── (marketing)/page.tsx    # Landing page
│   │   ├── (auth)/
│   │   │   ├── signup/page.tsx
│   │   │   └── login/page.tsx
│   │   ├── (app)/                  # authenticated area
│   │   │   ├── layout.tsx          # top nav + auth guard (placeholder Day 53)
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── resume/{page.tsx,result/page.tsx}
│   │   │   ├── linkedin/{page.tsx,result/page.tsx}
│   │   │   ├── interview/{page.tsx,session/[id]/page.tsx,summary/[id]/page.tsx}
│   │   │   ├── skills/page.tsx
│   │   │   ├── history/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   └── settings/page.tsx
│   │   └── api/                    # thin proxy routes only (optional) —
│   │                                # primary logic now lives in backend/
│   ├── components/{ui,dashboard,resume,linkedin,interview,skills}/
│   ├── lib/
│   │   ├── supabase/{client.ts,server.ts}
│   │   ├── claude/prompts/         # NOTE: moved to backend/ — see below
│   │   └── parsing/{pdfParser.ts,docxParser.ts}
│   ├── types/{database.ts,api.ts}
│   ├── styles/globals.css
│   ├── .env.local.example
│   └── package.json
│
├── backend/                        # Express app → deploys to Render
│   ├── src/
│   │   ├── routes/
│   │   │   ├── health.ts           # created Day 53
│   │   │   ├── auth.ts             # Day 4
│   │   │   ├── resume.ts           # Day 4-5
│   │   │   ├── linkedin.ts         # Day 6
│   │   │   ├── interview.ts        # Day 6-7
│   │   │   ├── skills.ts           # Day 7-8
│   │   │   └── payments.ts         # Day 10
│   │   ├── middleware/auth.ts      # Supabase JWT verification
│   │   ├── lib/
│   │   │   ├── supabase.ts         # service-role client
│   │   │   ├── claude.ts           # Anthropic SDK wrapper
│   │   │   ├── razorpay.ts         # Day 10
│   │   │   └── prompts/            # one file per AI feature prompt
│   │   └── index.ts                # app entry, CORS, route mounting
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
├── supabase/
│   └── migrations/                 # SQL migration files (schema versioned here)
│
├── docs/                           # planning docs live in-repo
│   ├── PRD.md
│   ├── PITCH-DECK.md
│   ├── IMPLEMENTATION-BLUEPRINT.md
│   ├── ARCHITECTURE.md
│   ├── SCHEMA.md
│   ├── API.md
│   ├── UI-WIREFRAMES.md
│   ├── PROJECT-STRUCTURE.md        # this file
│   ├── SETUP.md
│   ├── ENVIRONMENT.md
│   └── DAY3-SUMMARY.md
│
└── README.md
```

## What changed from the Day 52 version
| Before (Day 52) | After (Day 53) | Why |
|---|---|---|
| Single Next.js app with `app/api/*` handling all backend logic | Two apps: `frontend/` (Next.js) + `backend/` (Express) | User decision to separate concerns and deploy backend independently on Render |
| `lib/claude/`, `lib/razorpay/` inside the Next.js app | Moved into `backend/src/lib/` | AI and payment secrets should only ever live on the server that's never exposed to the browser bundle |
| One deployment target (Vercel) | Two deployment targets (Vercel + Render) | Matches the updated stack decision |

`API.md` endpoint paths conceptually stay the same (e.g. `/resume/score`) but are now served by Express on the Render domain instead of Next.js API routes — request/response shapes are unchanged.
