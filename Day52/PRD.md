# AI Career Copilot — Product Requirements Document (Recreated)

> **Note:** This document was reconstructed on Day 52 because the original Day 1 PRD was not available in this chat. It reflects the approved AI Career Copilot concept as previously validated. If any detail below doesn't match what was actually approved, flag it and we'll correct it before continuing.

## 1. Problem Statement
Indian college students and fresh graduates struggle to get past ATS (Applicant Tracking System) filters, don't know how to optimize their LinkedIn presence, lack structured interview practice, and can't easily identify which skills are actually blocking them from getting hired. Existing tools (Jobscan, Teal, LinkedIn Premium) are priced in USD and are expensive relative to Indian student budgets, and none of them are built around the Indian campus-to-job pipeline (Internshala, Unstop, campus placements).

## 2. Target Users
- **Primary:** Final-year B.Tech/undergrad students and fresh graduates (0–2 years experience) in India, actively applying to internships/jobs.
- **Secondary:** Career counselors/college placement cells who want to recommend a tool to their students.

## 3. Core Value Proposition
One AI-powered platform, priced in INR, that takes a student from "I don't know why I'm not getting shortlisted" to "I know exactly what to fix and how to prepare" — covering resume, LinkedIn, interview readiness, and skill gaps in one place.

## 4. v1.0 Scope (In)
| # | Feature | Description |
|---|---|---|
| 1 | ATS Resume Scoring | Upload resume (PDF/DOCX) → AI scores it against ATS parsing rules + gives section-by-section feedback |
| 2 | Resume vs Job Description Match | Paste a JD → get a match score + missing keywords/skills |
| 3 | LinkedIn Profile Optimization | Paste/import LinkedIn profile text → AI critique + rewrite suggestions per section |
| 4 | Interview Prep | Role/JD-based question generation + AI feedback on typed/recorded answers |
| 5 | Skill Gap Report | Compares resume skills to target role requirements, outputs a prioritized learning list |
| 6 | Dashboard | Central view of scores, history, and next recommended action |
| 7 | INR Pricing / Freemium | Free tier with limited scans/month; paid tier priced in INR |

## 5. Out of Scope for v1.0 (explicitly deferred)
- Native mobile apps (web-only, responsive, for v1.0)
- Real-time video interview analysis (v1.0 is text/audio-typed answers only)
- Placement-cell/institutional admin dashboards (B2B) — post-v1.0
- Multi-language support beyond English

## 6. User Stories (v1.0)
1. As a student, I can sign up with email or Google so I can save my progress.
2. As a student, I can upload my resume and get an ATS score with specific, actionable feedback.
3. As a student, I can paste a job description and see how well my resume matches it, with missing keywords highlighted.
4. As a student, I can paste my LinkedIn "About" and experience sections and get rewrite suggestions.
5. As a student, I can generate role-specific interview questions and get AI feedback on my answers.
6. As a student, I can see a prioritized list of skills I'm missing for a target role.
7. As a student, I can see my score history over time so I know if I'm improving.
8. As a student, I can upgrade to a paid plan priced in INR to unlock unlimited scans.
9. As a returning user, I land on a dashboard that tells me what to do next.

## 7. Success Metrics
- % of free users who complete at least one full resume scan
- Free-to-paid conversion rate
- Average ATS score improvement (first scan vs. latest scan) per user
- Weekly active users during campus placement season (Aug–Dec, Jan–Apr)

## 8. Constraints
- Solo builder, capstone timeline (finishing within the remaining challenge days)
- Must prefer free/low-cost tools and infrastructure wherever possible
- Must be usable without any paid design/dev tooling
- India-first: currency, tone, and competitive framing all assume Indian job-market context

## 9. Approved Differentiators
- INR pricing as a structural advantage, not just a feature
- Purpose-built for the Indian campus → first job pipeline, not a generic global tool
