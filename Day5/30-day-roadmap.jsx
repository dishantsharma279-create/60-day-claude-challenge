import { useState } from "react";

const weeks = [
  {
    id: 1,
    label: "Week 1",
    theme: "Foundation & Fluency",
    tagline: "Learn the grammar of AI. Stop guessing, start directing.",
    color: "#00c8ff",
    milestone: "Write 20 high-quality prompts across 5 different use cases",
    days: [
      { day: 1, task: "Audit your current AI habits — list every tool you use and how", resource: "Your own prompt history", type: "reflect" },
      { day: 2, task: "Learn the anatomy of a prompt: Role + Context + Task + Format + Constraint", resource: "learnprompting.org (free)", type: "learn" },
      { day: 3, task: "Write 5 prompts for your actual work/study — apply the anatomy", resource: "Claude / ChatGPT", type: "build" },
      { day: 4, task: "Explore Claude vs GPT-4 vs Gemini — same prompt, 3 models, note differences", resource: "All three platforms (free tiers)", type: "experiment" },
      { day: 5, task: "Learn about temperature, tokens, and context windows (the 'physics' of LLMs)", resource: "Andrej Karpathy's 'Intro to LLMs' on YouTube", type: "learn" },
      { day: 6, task: "Build a personal prompt library — your top 10 prompts saved & versioned", resource: "Notion or a simple .txt file", type: "build" },
      { day: 7, task: "Weekly review: what worked? What flopped? Document 3 lessons", resource: "Your own notes", type: "reflect" },
    ],
    project: "Prompt Library v1 — 10 reusable prompts for your top use cases",
  },
  {
    id: 2,
    label: "Week 2",
    theme: "AI Workflows & Automation",
    tagline: "Chain prompts into pipelines. Make AI do the repetitive stuff.",
    color: "#7b2fff",
    milestone: "Automate one real task you do every week using AI",
    days: [
      { day: 8, task: "Map a repetitive task you do weekly — describe every step in detail", resource: "Pen + paper", type: "reflect" },
      { day: 9, task: "Learn about chained prompting: output of Prompt A becomes input to Prompt B", resource: "Anthropic Cookbook (docs.anthropic.com)", type: "learn" },
      { day: 10, task: "Build a 3-prompt chain for content creation: Idea → Outline → Draft", resource: "Claude", type: "build" },
      { day: 11, task: "Explore no-code AI tools: Make.com or Zapier + AI actions", resource: "Make.com free tier", type: "experiment" },
      { day: 12, task: "Learn about system prompts — how to give AI a persistent role/persona", resource: "OpenAI Playground or Claude API Docs", type: "learn" },
      { day: 13, task: "Automate your weekly task using Make.com or a multi-step prompt chain", resource: "Make.com / Zapier", type: "build" },
      { day: 14, task: "Document your automation — write it up as if teaching someone else", resource: "Notion / Obsidian", type: "reflect" },
    ],
    project: "Automated Weekly Workflow — one real process running on AI autopilot",
  },
  {
    id: 3,
    label: "Week 3",
    theme: "Build Something Real",
    tagline: "Ship. Even if it's ugly. Completion > perfection.",
    color: "#ff6b35",
    milestone: "Deploy one AI-powered tool or app publicly (even a simple one)",
    days: [
      { day: 15, task: "Pick your build: AI chatbot, content generator, or summarizer — one niche, one pain", resource: "Your Week 1 & 2 notes for ideas", type: "reflect" },
      { day: 16, task: "Learn the basics of calling an API — what is a REST call, what is JSON", resource: "freeCodeCamp 'APIs for Beginners' on YouTube", type: "learn" },
      { day: 17, task: "Set up a simple UI with v0.dev (no-code React builder) or Bolt.new", resource: "v0.dev or bolt.new", type: "build" },
      { day: 18, task: "Connect your UI to Claude or OpenAI API — get a real response appearing in your app", resource: "Anthropic API Docs + Bolt.new", type: "build" },
      { day: 19, task: "Add a system prompt to give your tool a specific personality/expertise", resource: "Your tool from Day 18", type: "experiment" },
      { day: 20, task: "Polish the UI — better copy, a real name, a tagline. Make it feel intentional.", resource: "v0.dev / Bolt.new", type: "build" },
      { day: 21, task: "Deploy it: Vercel (free) or share the Bolt link — post it somewhere public", resource: "vercel.com (free tier)", type: "ship" },
    ],
    project: "Live AI Tool — a deployed, shareable AI-powered app with your name on it",
  },
  {
    id: 4,
    label: "Week 4",
    theme: "Specialize & Go Public",
    tagline: "Pick your lane. Build in public. Compound daily.",
    color: "#00d4aa",
    milestone: "Publish 3 pieces of content documenting what you built & learned",
    days: [
      { day: 22, task: "Choose your AI specialization: Prompt Engineering, AI Products, AI Content, or Automation", resource: "Review your 3 weeks of notes", type: "reflect" },
      { day: 23, task: "Deep-dive your chosen lane: find 3 experts, subscribe, take notes for 2 hours", resource: "Twitter/X, Substack, YouTube", type: "learn" },
      { day: 24, task: "Write a LinkedIn post or tweet thread: '3 things I learned building my first AI app'", resource: "LinkedIn / X", type: "ship" },
      { day: 25, task: "Learn about RAG (Retrieval Augmented Generation) — the next level of AI apps", resource: "LangChain docs intro or YouTube: 'RAG explained in 10 min'", type: "learn" },
      { day: 26, task: "Add one feature to your Week 3 project based on real user feedback", resource: "Your deployed tool", type: "build" },
      { day: 27, task: "Record a 2-minute demo video of your tool — post it publicly", resource: "Loom (free)", type: "ship" },
      { day: 28, task: "Write your 30-day retrospective: what changed in how you think about AI?", resource: "Notion / Substack", type: "reflect" },
    ],
    project: "Public Portfolio — a post, a video, and an updated tool. Your AI footprint exists now.",
  },
];

const typeColors = {
  reflect: { bg: "rgba(255,200,0,0.08)", border: "rgba(255,200,0,0.25)", dot: "#ffc800", label: "Reflect" },
  learn: { bg: "rgba(0,200,255,0.08)", border: "rgba(0,200,255,0.25)", dot: "#00c8ff", label: "Learn" },
  build: { bg: "rgba(123,47,255,0.08)", border: "rgba(123,47,255,0.25)", dot: "#7b2fff", label: "Build" },
  experiment: { bg: "rgba(255,107,53,0.08)", border: "rgba(255,107,53,0.25)", dot: "#ff6b35", label: "Experiment" },
  ship: { bg: "rgba(0,212,170,0.08)", border: "rgba(0,212,170,0.25)", dot: "#00d4aa", label: "Ship" },
};

const finalOutcome = [
  { icon: "◈", text: "A personal prompt library with 10+ reusable, battle-tested prompts" },
  { icon: "⟁", text: "One automated workflow saving you real time every week" },
  { icon: "▲", text: "A live, deployed AI tool with your name attached to it" },
  { icon: "✦", text: "3+ pieces of public content demonstrating your thinking" },
  { icon: "◎", text: "A chosen specialization with a 30-day head start on depth" },
  { icon: "⬡", text: "A mental model for how AI actually works — not just what it outputs" },
];

export default function App() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (day) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  const week = weeks.find(w => w.id === activeWeek);
  const totalDays = 28;
  const completedCount = completedDays.size;
  const pct = Math.round((completedCount / totalDays) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080b10",
      color: "#e8eaf0",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      overflowX: "hidden",
    }}>

      {/* Hero */}
      <div style={{
        position: "relative",
        padding: "56px 24px 44px",
        textAlign: "center",
        borderBottom: "1px solid #1a2030",
        background: "linear-gradient(180deg, #0d1420 0%, #080b10 100%)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-block",
          background: "rgba(0,200,255,0.08)",
          border: "1px solid rgba(0,200,255,0.2)",
          color: "#00c8ff",
          fontSize: "10px",
          letterSpacing: "0.2em",
          padding: "5px 14px",
          borderRadius: "2px",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}>
          60 Days of AI · Learning Roadmap
        </div>

        <h1 style={{
          fontSize: "clamp(26px, 5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 10px",
          background: "linear-gradient(135deg, #ffffff 0%, #00c8ff 60%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          30 Days to AI Fluency
        </h1>

        <p style={{
          fontSize: "14px",
          color: "#607080",
          margin: "0 auto 32px",
          maxWidth: 460,
          fontStyle: "italic",
        }}>
          "Not a tutorial. A mission. Four weeks, four transformations, one shipped product."
        </p>

        {/* Progress bar */}
        <div style={{ maxWidth: 480, margin: "0 auto 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: "11px", color: "#3a5a70", letterSpacing: "0.1em", textTransform: "uppercase" }}>Progress</span>
            <span style={{ fontSize: "11px", color: "#00c8ff" }}>{completedCount}/{totalDays} days · {pct}%</span>
          </div>
          <div style={{ height: 4, background: "#111820", borderRadius: 2, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${pct}%`,
              background: "linear-gradient(90deg, #00c8ff, #7b2fff)",
              borderRadius: 2,
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {Object.entries(typeColors).map(([key, val]) => (
            <span key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "11px", color: "#3a5a70" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: val.dot, display: "inline-block" }} />
              {val.label}
            </span>
          ))}
        </div>
      </div>

      {/* Week selector */}
      <div style={{
        display: "flex",
        gap: 0,
        borderBottom: "1px solid #1a2030",
        overflowX: "auto",
      }}>
        {weeks.map(w => (
          <button
            key={w.id}
            onClick={() => setActiveWeek(w.id)}
            style={{
              flex: "1 1 auto",
              minWidth: 140,
              background: activeWeek === w.id ? "rgba(0,200,255,0.06)" : "transparent",
              border: "none",
              borderBottom: activeWeek === w.id ? `2px solid ${w.color}` : "2px solid transparent",
              padding: "18px 16px",
              cursor: "pointer",
              color: activeWeek === w.id ? w.color : "#3a5a70",
              textAlign: "left",
              transition: "all 0.2s",
            }}
          >
            <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{w.label}</div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: activeWeek === w.id ? "#e8eaf0" : "#3a5a70" }}>{w.theme}</div>
          </button>
        ))}
      </div>

      {/* Week content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>

        {/* Week header */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${week.color}30`,
          borderRadius: 8,
          padding: "24px 28px",
          marginBottom: 32,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: `linear-gradient(90deg, transparent, ${week.color}, transparent)`,
          }} />
          <div style={{ fontSize: "11px", color: week.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
            {week.label} · Days {(week.id - 1) * 7 + 1}–{week.id * 7}
          </div>
          <h2 style={{ margin: "0 0 6px", fontSize: "22px", fontWeight: 700, color: "#e8eaf0" }}>{week.theme}</h2>
          <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#607080", fontStyle: "italic" }}>{week.tagline}</p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: `${week.color}10`,
            border: `1px solid ${week.color}30`,
            borderRadius: 4,
            padding: "8px 14px",
          }}>
            <span style={{ fontSize: "16px" }}>◎</span>
            <span style={{ fontSize: "13px", color: "#c0d0e0" }}>
              <span style={{ color: week.color, fontWeight: 600 }}>Milestone: </span>
              {week.milestone}
            </span>
          </div>
        </div>

        {/* Days */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {week.days.map(d => {
            const tc = typeColors[d.type];
            const done = completedDays.has(d.day);
            const expanded = expandedDay === d.day;
            return (
              <div
                key={d.day}
                style={{
                  background: done ? "rgba(0,212,170,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${done ? "rgba(0,212,170,0.25)" : "#1a2535"}`,
                  borderRadius: 6,
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 16px",
                    cursor: "pointer",
                  }}
                  onClick={() => setExpandedDay(expanded ? null : d.day)}
                >
                  {/* Checkbox */}
                  <div
                    onClick={e => { e.stopPropagation(); toggleDay(d.day); }}
                    style={{
                      width: 20, height: 20, borderRadius: 4, flexShrink: 0,
                      border: `1.5px solid ${done ? "#00d4aa" : "#2a3a4a"}`,
                      background: done ? "rgba(0,212,170,0.15)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                  >
                    {done && <span style={{ color: "#00d4aa", fontSize: 12, lineHeight: 1 }}>✓</span>}
                  </div>

                  {/* Day number */}
                  <span style={{
                    fontSize: "11px", color: week.color, fontWeight: 700,
                    letterSpacing: "0.05em", flexShrink: 0, minWidth: 44,
                  }}>
                    DAY {d.day}
                  </span>

                  {/* Type badge */}
                  <span style={{
                    fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: tc.dot, background: tc.bg, border: `1px solid ${tc.border}`,
                    padding: "2px 7px", borderRadius: 2, flexShrink: 0,
                  }}>
                    {tc.label}
                  </span>

                  {/* Task */}
                  <span style={{
                    fontSize: "13px",
                    color: done ? "#4a7060" : "#b0c0d0",
                    textDecoration: done ? "line-through" : "none",
                    flex: 1,
                  }}>
                    {d.task}
                  </span>

                  {/* Expand arrow */}
                  <span style={{ color: "#2a4a60", fontSize: 12, flexShrink: 0 }}>
                    {expanded ? "▲" : "▽"}
                  </span>
                </div>

                {/* Expanded: resource */}
                {expanded && (
                  <div style={{
                    padding: "0 16px 14px 70px",
                    borderTop: "1px solid #111820",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 12 }}>
                      <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a4a60" }}>Resource</span>
                      <span style={{ flex: 1, height: "1px", background: "#1a2535" }} />
                    </div>
                    <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#607080" }}>
                      → {d.resource}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Week project */}
        <div style={{
          background: `linear-gradient(135deg, ${week.color}08 0%, transparent 100%)`,
          border: `1px solid ${week.color}25`,
          borderRadius: 8,
          padding: "20px 24px",
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: week.color, marginBottom: 8 }}>
            ▲ Week {week.id} Project
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#c0d0e0", lineHeight: 1.6 }}>{week.project}</p>
        </div>
      </div>

      {/* Final outcome */}
      <div style={{
        maxWidth: 900,
        margin: "0 auto 80px",
        padding: "0 24px",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid #1a2535",
          borderRadius: 8,
          padding: "32px 28px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, #00c8ff, #7b2fff, #00d4aa)",
          }} />
          <div style={{ fontSize: "11px", color: "#00c8ff", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            ✦ Day 30 — Final Outcome
          </div>
          <h3 style={{ margin: "0 0 24px", fontSize: "20px", fontWeight: 700, color: "#e8eaf0" }}>
            You finish 30 days with proof, not just knowledge.
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {finalOutcome.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 12, alignItems: "flex-start",
                background: "rgba(0,200,255,0.04)",
                border: "1px solid #1a2535",
                borderRadius: 6,
                padding: "12px 14px",
              }}>
                <span style={{ color: "#00c8ff", fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <span style={{ fontSize: "13px", color: "#8090a8", lineHeight: 1.55 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1a2030",
        padding: "20px 32px",
        display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap",
      }}>
        {["Prompt Engineer", "Builder in Beta", "Delhi → Everywhere", "Day 1 of Many"].map(tag => (
          <span key={tag} style={{ fontSize: "11px", color: "#1e3040", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
