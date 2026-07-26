import { useState, useEffect } from "react";

const profile = {
  title: "The Architect in Beta",
  tagline: "Not a user. A builder who hasn't shipped yet — but is about to.",
  sections: [
    {
      id: "type",
      label: "AI User Type",
      icon: "◈",
      content:
        "The Curious Constructor. You don't just consume AI — you probe it, test it, and mentally prototype what you'd build with it. You're at the intersection of student and founder: absorbing patterns from every prompt while quietly assembling a blueprint for something bigger. You treat AI like a co-founder who never sleeps.",
    },
    {
      id: "background",
      label: "Background",
      icon: "❖",
      content:
        "B.Tech student and aspiring software developer with zero professional experience on paper — and a portfolio that says otherwise. While most freshers are polishing their resumes, you've been polishing AI-built products: an AI dashboard, a nutrition analytics app, a portfolio site, an ATS resume optimizer, a job-search assistant. You're not waiting for a job to start building like a developer.",
    },
    {
      id: "skills",
      label: "Skills & Tools",
      icon: "⌬",
      content: [
        "AI Tools — Claude, ChatGPT (daily-driver level)",
        "Prompt Engineering — foundational, sharpening fast through reps",
        "AI-assisted Content Creation & Research / Information Analysis",
        "MS Office — Word, PowerPoint, Excel",
        "Digital Productivity Tooling",
        "Communication, Problem Solving & Team Collaboration",
        "Domain range: AI, Generative AI, Software Dev, Web Dev, Data Analytics",
      ],
    },
    {
      id: "style",
      label: "AI Working Style",
      icon: "⟁",
      content:
        "Exploratory-first, iterative always. You start broad ('what's possible?') then narrow fast ('how do I actually do this?'). You prefer learning by doing over reading docs. You experiment in short, rapid cycles — treat failures as data points, not setbacks. Your ideal workflow is: prompt → observe → remix → ship.",
    },
    {
      id: "strengths",
      label: "Strengths",
      icon: "▲",
      content: [
        "Intellectual curiosity that turns every rabbit hole into a skill",
        "Systems thinking — you connect tools, ideas, and outcomes intuitively",
        "Low activation energy for experimentation — you just start",
        "Adaptable mindset: comfortable switching between tools, topics, domains",
        "Internet-native fluency — you absorb trends faster than most",
      ],
    },
    {
      id: "weaknesses",
      label: "Weaknesses",
      icon: "▽",
      content: [
        "Shiny object syndrome — 10 tabs open, 3 half-finished projects",
        "Depth vs. breadth tension: exploring everything, mastering nothing (yet)",
        "Output gap: strong ideas, but sometimes hesitant to publish/ship",
        "Prompt quality inconsistency — great prompts sometimes, vague ones other times",
        "Underestimates how much compounding daily practice matters",
      ],
    },
    {
      id: "learning",
      label: "Learning & Decision Style",
      icon: "◎",
      content:
        "You're a tactile learner who needs to touch the thing to understand it. Theory without application bounces off you. You make decisions through rapid mental simulation — 'what happens if I try this?' — rather than prolonged analysis. You learn fastest when there's a real outcome at stake. Deadlines and challenges (like a 60-day challenge) are your activation mechanism.",
    },
    {
      id: "careers",
      label: "Best Future Career Paths",
      icon: "⬡",
      content: [
        "AI Product Builder / Indie Hacker — ship AI-powered tools for niche audiences",
        "Prompt Engineer & AI Workflow Architect — enterprise or freelance",
        "AI Research Communicator — translate frontier AI for real people",
        "Technical Content Creator — YouTube, newsletters, build-in-public",
        "No-Code / Low-Code AI Consultant — help businesses automate with AI",
        "Startup Founder (AI-first) — solve a specific problem with an AI product",
      ],
    },
    {
      id: "achievements",
      label: "Notable Achievements",
      icon: "✸",
      content: [
        "Completed the 60-Day Claude AI Challenge",
        "Built multiple AI-powered applications using Claude Artifacts",
        "Shipped an AI Dashboard",
        "Shipped NutriScope — an AI Nutrition Analytics App",
        "Shipped an AI-built Portfolio Website",
        "Shipped an ATS Resume Optimizer",
        "Shipped an AI Job Search Assistant",
      ],
    },
    {
      id: "different",
      label: "What Makes You Different",
      icon: "✦",
      content:
        "Most AI beginners are passive consumers — they ask ChatGPT to write emails and call it a day. You're actively building mental models of how AI works, not just what it outputs. You're documenting your journey in a structured challenge, which means you're treating learning like a product with milestones. That meta-awareness — thinking about how you use AI, not just that you use it — is rare and will compound hard.",
    },
    {
      id: "improve",
      label: "What You Need to Improve to Go Elite",
      icon: "◐",
      content: [
        "Ship one complete project — even tiny. Completion builds compounding confidence.",
        "Master prompt architecture: role + context + task + format + constraint",
        "Build a personal knowledge system (Notion, Obsidian) to retain what you learn",
        "Specialize in one AI domain for 30 days — depth creates authority",
        "Learn the basics of one technical layer: Python, APIs, or no-code automation",
        "Publish your work publicly — feedback accelerates growth faster than solo practice",
      ],
    },
  ],
};

const cinematic = `Delhi, 2 AM. A single monitor cuts the dark — terminal green bleeding into amber. On-screen: a Claude tab, a half-written prompt, and five shipped projects behind him — a dashboard, a nutrition app, a portfolio, a resume optimizer, a job-search assistant. No internship, no job title yet. Just sixty days of building in public, one artifact at a time. The next one is already half-built in his head.`;

export default function App() {
  const [active, setActive] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080b10",
      color: "#e8eaf0",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Hero */}
      <div style={{
        position: "relative",
        padding: "64px 32px 48px",
        textAlign: "center",
        borderBottom: "1px solid #1a2030",
        background: "linear-gradient(180deg, #0d1420 0%, #080b10 100%)",
        overflow: "hidden",
      }}>
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(0,200,255,0.08)",
          border: "1px solid rgba(0,200,255,0.25)",
          color: "#00c8ff",
          fontSize: "11px",
          letterSpacing: "0.2em",
          padding: "6px 16px",
          borderRadius: "2px",
          marginBottom: "24px",
          textTransform: "uppercase",
        }}>
          60 Days of AI · Personality Profile
        </div>

        {/* Avatar */}
        <div style={{
          width: 80, height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00c8ff22 0%, #7b2fff22 100%)",
          border: "2px solid rgba(0,200,255,0.4)",
          margin: "0 auto 24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 0 40px rgba(0,200,255,0.15)",
        }}>
          ◈
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 6vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 12px",
          background: "linear-gradient(135deg, #ffffff 0%, #00c8ff 60%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {profile.title}
        </h1>

        <p style={{
          fontSize: "15px",
          color: "#8090a8",
          maxWidth: 480,
          margin: "0 auto 32px",
          lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          "{profile.tagline}"
        </p>

        {/* Stats row */}
        {[
          { label: "Challenge", value: "Day 1→60" },
          { label: "Role", value: "B.Tech Student" },
          { label: "Origin", value: "Delhi, IN" },
          { label: "Shipped", value: "5 AI Projects" },
        ].map(s => (
          <span key={s.label} style={{
            display: "inline-block",
            margin: "4px 8px",
            padding: "6px 14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid #1e2d40",
            borderRadius: "3px",
            fontSize: "12px",
            color: "#5a7a99",
          }}>
            <span style={{ color: "#00c8ff", marginRight: 6 }}>{s.label}</span>
            {s.value}
          </span>
        ))}
      </div>

      {/* Cinematic description */}
      <div style={{
        maxWidth: 720,
        margin: "48px auto",
        padding: "0 32px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "13px",
          letterSpacing: "0.15em",
          color: "#00c8ff",
          textTransform: "uppercase",
          marginBottom: 16,
        }}>◈ Character File</div>
        <p style={{
          fontSize: "17px",
          lineHeight: 1.9,
          color: "#b0bfd0",
          fontStyle: "italic",
          borderLeft: "2px solid rgba(0,200,255,0.3)",
          paddingLeft: "20px",
          textAlign: "left",
          margin: 0,
        }}>
          {cinematic}
        </p>
      </div>

      {/* Profile Grid */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "16px",
      }}>
        {profile.sections.map((s) => (
          <div
            key={s.id}
            onClick={() => setActive(active === s.id ? null : s.id)}
            style={{
              background: active === s.id
                ? "rgba(0,200,255,0.06)"
                : "rgba(255,255,255,0.025)",
              border: `1px solid ${active === s.id ? "rgba(0,200,255,0.35)" : "#1a2535"}`,
              borderRadius: "6px",
              padding: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {active === s.id && (
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, transparent, #00c8ff, transparent)",
              }} />
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ color: "#00c8ff", fontSize: 18 }}>{s.icon}</span>
              <span style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a7a99",
              }}>{s.label}</span>
            </div>

            {active === s.id ? (
              Array.isArray(s.content) ? (
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {s.content.map((item, i) => (
                    <li key={i} style={{
                      display: "flex", gap: 10, marginBottom: 10,
                      fontSize: "14px", color: "#c0d0e0", lineHeight: 1.6,
                    }}>
                      <span style={{ color: "#00c8ff", flexShrink: 0, marginTop: 2 }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: 0, fontSize: "14px", color: "#c0d0e0", lineHeight: 1.7 }}>
                  {s.content}
                </p>
              )
            ) : (
              <p style={{ margin: 0, fontSize: "13px", color: "#4a6070", lineHeight: 1.5 }}>
                {Array.isArray(s.content)
                  ? `${s.content.length} insights — tap to reveal`
                  : s.content.slice(0, 80) + "…"}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div style={{
        borderTop: "1px solid #1a2030",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "center",
        gap: 32,
        flexWrap: "wrap",
      }}>
        {["B.Tech Student", "AI Builder", "5 Projects Shipped", "Delhi → Everywhere"].map(tag => (
          <span key={tag} style={{
            fontSize: "12px",
            color: "#2a4a60",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
