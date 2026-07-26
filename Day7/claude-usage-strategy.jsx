import { useState } from "react";

const CYAN = "#00c8ff";
const PURPLE = "#7b2fff";
const BG = "#080b10";
const CARD = "rgba(255,255,255,0.03)";
const BORDER = "#1a2535";

const models = [
  {
    name: "Haiku",
    emoji: "⚡",
    color: "#f59e0b",
    tagline: "Speed demon for quick tasks",
    when: [
      "Quick grammar / spelling checks on your notes",
      "Summarising a long article fast",
      "Generating simple social media captions",
      "Translating short text snippets",
      "Rapid Q&A while browsing / learning",
    ],
    avoid: "Deep explanations, coding logic, nuanced AI concepts",
  },
  {
    name: "Sonnet",
    emoji: "◈",
    color: CYAN,
    tagline: "Your everyday workhorse — the sweet spot",
    when: [
      "Learning AI & prompt engineering (your core activity)",
      "Writing, editing, and documenting content",
      "Coding help: debugging, explaining, writing scripts",
      "Research synthesis and note-taking",
      "Career prep: resumes, cover letters, mock interviews",
      "Building AI project ideas and workflows",
    ],
    avoid: "Nothing — Sonnet handles 80%+ of your daily needs",
    recommended: true,
  },
  {
    name: "Opus",
    emoji: "✦",
    color: PURPLE,
    tagline: "Elite mode — save for the big moments",
    when: [
      "Deep dives into complex AI/ML concepts you can't crack",
      "Architecting a full product or startup idea",
      "High-stakes writing (applications, thought leadership)",
      "Multi-step technical reasoning & algorithm design",
      "When Sonnet gives you an answer that feels incomplete",
    ],
    avoid: "Don't use for daily learning — save the credits for when it counts",
  },
];

const efforts = [
  {
    level: "Low",
    icon: "◌",
    color: "#64748b",
    desc: "Instant, concise replies",
    use: "Quick lookups, single-sentence answers, vocabulary checks",
    frequency: "Rarely — you're a deep learner, not a skimmer",
  },
  {
    level: "Standard",
    icon: "◎",
    color: "#22c55e",
    desc: "Balanced depth & speed",
    use: "Most of your daily learning, writing, and coding sessions",
    frequency: "80% of your time",
    recommended: true,
  },
  {
    level: "High",
    icon: "◑",
    color: CYAN,
    desc: "Thorough, structured output",
    use: "Complex prompts, learning a new AI concept end-to-end, career docs",
    frequency: "15% — when you need more than a surface answer",
  },
  {
    level: "Max",
    icon: "◉",
    color: PURPLE,
    desc: "Maximum reasoning power",
    use: "Only the hardest problems: architecture decisions, advanced code, deep AI theory",
    frequency: "5% — your secret weapon, not your default",
  },
];

const tasks = [
  { task: "Learning a new AI concept", model: "Sonnet", effort: "High", reason: "Needs depth and clear structure to build real understanding" },
  { task: "Writing & refining prompts", model: "Sonnet", effort: "Standard", reason: "Iterative by nature — speed helps you experiment faster" },
  { task: "Documenting your 60-day journey", model: "Sonnet", effort: "Standard", reason: "Good writing quality without burning credits" },
  { task: "Debugging code errors", model: "Sonnet", effort: "High", reason: "Needs careful reasoning to trace bugs correctly" },
  { task: "Writing new code from scratch", model: "Sonnet", effort: "High", reason: "First-pass code needs to be solid and explained" },
  { task: "Quick grammar / spelling fix", model: "Haiku", effort: "Low", reason: "No brainpower needed — don't waste Sonnet on this" },
  { task: "Summarising an article", model: "Haiku", effort: "Standard", reason: "Fast and efficient for digest-style content" },
  { task: "Career prep (resume, LinkedIn)", model: "Sonnet", effort: "High", reason: "Stakes are high — worth the extra care" },
  { task: "Designing a product / startup idea", model: "Opus", effort: "Max", reason: "This is your big ship moment — give it full power" },
  { task: "Understanding a complex AI paper", model: "Opus", effort: "Max", reason: "Frontier research needs frontier reasoning" },
  { task: "Daily study Q&A", model: "Sonnet", effort: "Standard", reason: "Your most frequent use case — optimise for consistency" },
  { task: "Exploring career paths", model: "Sonnet", effort: "High", reason: "Needs nuance, context, and personalised thinking" },
];

const mistakes = [
  { icon: "✗", title: "Using Opus for everything", fix: "Opus is a scalpel, not a kitchen knife. Overuse dulls the experience and drains your limits fast." },
  { icon: "✗", title: "Using Max effort by default", fix: "Max effort on a simple question is overkill. Standard covers most of your day." },
  { icon: "✗", title: "Vague prompts", fix: "You know this: Role + Context + Task + Format + Constraint. Apply it every single time." },
  { icon: "✗", title: "One-shot learning", fix: "Don't ask once and move on. Ask Claude to explain differently, give an example, and quiz you." },
  { icon: "✗", title: "Not saving your best prompts", fix: "You're building a prompt library whether you know it or not. Start a Notion doc for keepers." },
  { icon: "✗", title: "Skipping the output layer", fix: "Reading Claude's answer is passive. Re-explain it in your own words — that's where learning sticks." },
];

export default function App() {
  const [activeModel, setActiveModel] = useState(null);
  const [activeTab, setActiveTab] = useState("models");

  const tabs = [
    { id: "models", label: "Models" },
    { id: "effort", label: "Effort Levels" },
    { id: "tasks", label: "Task Table" },
    { id: "mistakes", label: "Mistakes" },
    { id: "final", label: "Final Pick" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: "#e8eaf0", fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: "hidden" }}>

      {/* Hero */}
      <div style={{ position: "relative", padding: "52px 24px 40px", textAlign: "center", borderBottom: `1px solid ${BORDER}`, background: "linear-gradient(180deg, #0d1420 0%, #080b10 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none" }} />

        <div style={{ display: "inline-block", background: "rgba(0,200,255,0.08)", border: "1px solid rgba(0,200,255,0.25)", color: CYAN, fontSize: "11px", letterSpacing: "0.2em", padding: "6px 16px", borderRadius: "2px", marginBottom: "20px", textTransform: "uppercase" }}>
          Architect in Beta · Claude Usage Strategy
        </div>

        <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 10px", background: `linear-gradient(135deg, #ffffff 0%, ${CYAN} 60%, ${PURPLE} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Your Personal Claude Playbook
        </h1>
        <p style={{ fontSize: "14px", color: "#8090a8", maxWidth: 460, margin: "0 auto", fontStyle: "italic" }}>
          "Use the right tool at the right moment — that's elite prompting."
        </p>

        {/* Summary chips */}
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {[
            { label: "Primary Model", value: "Sonnet" },
            { label: "Default Effort", value: "Standard" },
            { label: "Power Mode", value: "Opus + Max" },
            { label: "Daily Usage", value: "80% Sonnet" },
          ].map(c => (
            <span key={c.label} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, borderRadius: 3, fontSize: "12px", color: "#5a7a99" }}>
              <span style={{ color: CYAN, marginRight: 6 }}>{c.label}</span>{c.value}
            </span>
          ))}
        </div>
      </div>

      {/* Tab Nav */}
      <div style={{ display: "flex", justifyContent: "center", gap: 4, padding: "20px 16px 0", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ padding: "8px 18px", borderRadius: 4, border: `1px solid ${activeTab === t.id ? CYAN : BORDER}`, background: activeTab === t.id ? "rgba(0,200,255,0.1)" : "transparent", color: activeTab === t.id ? CYAN : "#5a7a99", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.15s" }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px 80px" }}>

        {/* MODELS TAB */}
        {activeTab === "models" && (
          <div>
            <SectionHeader icon="◈" title="Which Model to Use When" sub="Tap a model card to expand its usage guide" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {models.map(m => (
                <div key={m.name} onClick={() => setActiveModel(activeModel === m.name ? null : m.name)}
                  style={{ background: activeModel === m.name ? `rgba(${hexToRgb(m.color)}, 0.07)` : CARD, border: `1px solid ${activeModel === m.name ? m.color + "66" : BORDER}`, borderRadius: 8, padding: 24, cursor: "pointer", transition: "all 0.2s", position: "relative", overflow: "hidden" }}>
                  {m.recommended && <div style={{ position: "absolute", top: 12, right: 12, background: `rgba(${hexToRgb(m.color)},0.15)`, border: `1px solid ${m.color}44`, color: m.color, fontSize: "10px", padding: "3px 8px", borderRadius: 2, letterSpacing: "0.1em" }}>★ RECOMMENDED</div>}
                  {activeModel === m.name && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }} />}

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 28, filter: `drop-shadow(0 0 8px ${m.color})` }}>{m.emoji}</span>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: m.color }}>Claude {m.name}</div>
                      <div style={{ fontSize: 12, color: "#5a7a99" }}>{m.tagline}</div>
                    </div>
                  </div>

                  {activeModel === m.name ? (
                    <div>
                      <div style={{ fontSize: 11, color: m.color, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 10 }}>Use when…</div>
                      {m.when.map((w, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#c0d0e0", lineHeight: 1.5 }}>
                          <span style={{ color: m.color, flexShrink: 0 }}>›</span>{w}
                        </div>
                      ))}
                      <div style={{ marginTop: 14, padding: "10px 14px", background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: 4, fontSize: 12, color: "#ff6060" }}>
                        ⚠ Avoid: {m.avoid}
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontSize: 12, color: "#3a5570" }}>{m.when.length} use cases — tap to reveal</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EFFORT TAB */}
        {activeTab === "effort" && (
          <div>
            <SectionHeader icon="◎" title="Effort Level Guide" sub="Think of effort like fuel — match it to the distance you need to travel" />
            <div style={{ display: "grid", gap: 12 }}>
              {efforts.map(e => (
                <div key={e.level} style={{ background: e.recommended ? `rgba(${hexToRgb(e.color)},0.06)` : CARD, border: `1px solid ${e.recommended ? e.color + "44" : BORDER}`, borderRadius: 8, padding: 20, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{ minWidth: 100, textAlign: "center" }}>
                    <div style={{ fontSize: 32, color: e.color, filter: `drop-shadow(0 0 6px ${e.color})` }}>{e.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: e.color, marginTop: 4 }}>{e.level}</div>
                    {e.recommended && <div style={{ fontSize: 10, color: e.color, marginTop: 2, opacity: 0.8 }}>★ DEFAULT</div>}
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#c0d0e0", marginBottom: 6 }}>{e.desc}</div>
                    <div style={{ fontSize: 13, color: "#7090a8", marginBottom: 8 }}><span style={{ color: CYAN }}>Use for:</span> {e.use}</div>
                    <div style={{ fontSize: 12, color: "#4a6070" }}><span style={{ color: "#f59e0b" }}>Frequency:</span> {e.frequency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TASK TABLE */}
        {activeTab === "tasks" && (
          <div>
            <SectionHeader icon="⬡" title="Task → Model → Effort Table" sub="Your complete daily decision guide at a glance" />
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr>
                    {["Task", "Best Model", "Best Effort", "Reason"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: CYAN, borderBottom: `1px solid ${BORDER}`, background: "#0d1420" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t, i) => {
                    const modelColor = t.model === "Haiku" ? "#f59e0b" : t.model === "Opus" ? PURPLE : CYAN;
                    const effortColor = t.effort === "Max" ? PURPLE : t.effort === "High" ? CYAN : t.effort === "Standard" ? "#22c55e" : "#64748b";
                    return (
                      <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                        <td style={{ padding: "12px 16px", color: "#c0d0e0", borderBottom: `1px solid #111820` }}>{t.task}</td>
                        <td style={{ padding: "12px 16px", borderBottom: `1px solid #111820` }}>
                          <span style={{ color: modelColor, fontWeight: 600, background: `rgba(${hexToRgb(modelColor)},0.1)`, padding: "3px 10px", borderRadius: 3 }}>{t.model}</span>
                        </td>
                        <td style={{ padding: "12px 16px", borderBottom: `1px solid #111820` }}>
                          <span style={{ color: effortColor, fontWeight: 600, background: `rgba(${hexToRgb(effortColor)},0.1)`, padding: "3px 10px", borderRadius: 3 }}>{t.effort}</span>
                        </td>
                        <td style={{ padding: "12px 16px", color: "#7090a8", borderBottom: `1px solid #111820`, maxWidth: 260 }}>{t.reason}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MISTAKES TAB */}
        {activeTab === "mistakes" && (
          <div>
            <SectionHeader icon="▽" title="Biggest Mistakes to Avoid" sub="These are the exact traps that slow down builders like you" />
            <div style={{ display: "grid", gap: 12 }}>
              {mistakes.map((m, i) => (
                <div key={i} style={{ background: "rgba(255,60,60,0.04)", border: "1px solid rgba(255,60,60,0.15)", borderRadius: 8, padding: 20, display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 20, color: "#ff4444", flexShrink: 0, marginTop: 2 }}>{m.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#ff6060", marginBottom: 6 }}>{m.title}</div>
                    <div style={{ fontSize: 13, color: "#7090a8", lineHeight: 1.6 }}><span style={{ color: CYAN }}>Fix: </span>{m.fix}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINAL PICK */}
        {activeTab === "final" && (
          <div>
            <SectionHeader icon="✦" title="Final Recommendation" sub="If you could use only ONE model and ONE effort level for most of your work…" />

            <div style={{ background: `linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(123,47,255,0.08) 100%)`, border: `1px solid rgba(0,200,255,0.3)`, borderRadius: 12, padding: 32, textAlign: "center", marginBottom: 24, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${CYAN}, ${PURPLE})` }} />

              <div style={{ fontSize: 48, marginBottom: 12 }}>◈</div>
              <div style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 700, background: `linear-gradient(135deg, #fff 0%, ${CYAN} 50%, ${PURPLE} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 8 }}>
                Claude Sonnet + Standard Effort
              </div>
              <div style={{ fontSize: 14, color: "#8090a8", marginBottom: 28 }}>Your highest-leverage daily combo</div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, textAlign: "left" }}>
                {[
                  { icon: "◈", label: "Smart enough", desc: "Handles AI concepts, coding, writing, research — all of it" },
                  { icon: "⟁", label: "Fast enough", desc: "Won't slow your learning flow or make you wait" },
                  { icon: "▲", label: "Deep enough", desc: "Standard effort gives you structured, quality output every time" },
                  { icon: "✦", label: "Scalable", desc: "When you need more, step up to Opus + Max for the big moments" },
                ].map(p => (
                  <div key={p.label} style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${BORDER}`, borderRadius: 6, padding: 14 }}>
                    <span style={{ color: CYAN, fontSize: 16, display: "block", marginBottom: 6 }}>{p.icon}</span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#c0d0e0", marginBottom: 4 }}>{p.label}</div>
                    <div style={{ fontSize: 12, color: "#5a7a99", lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 24 }}>
              <div style={{ fontSize: 11, color: CYAN, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>◈ The Architect's Daily Workflow</div>
              {[
                { time: "Morning", action: "Use Sonnet + Standard to review yesterday's notes and set learning goals for today" },
                { time: "Learning", action: "Use Sonnet + High when studying a new AI concept — ask for examples, then ask Claude to quiz you" },
                { time: "Building", action: "Use Sonnet + High for coding or prompt engineering sessions — iterate fast" },
                { time: "Creating", action: "Use Sonnet + Standard for content, documentation, and your 60-day journey posts" },
                { time: "Big Decisions", action: "Switch to Opus + Max when architecting ideas, tackling hard papers, or planning your first ship" },
                { time: "Quick Checks", action: "Drop to Haiku + Low for grammar fixes, quick definitions, and one-line answers" },
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 14, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 80, fontSize: 11, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginTop: 1 }}>{step.time}</div>
                  <div style={{ fontSize: 13, color: "#c0d0e0", lineHeight: 1.6 }}>{step.action}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 24px", textAlign: "center" }}>
        {["Sonnet = Daily Driver", "Opus = Power Mode", "Standard = Default Gear", "Max = Secret Weapon"].map(t => (
          <span key={t} style={{ display: "inline-block", margin: "4px 12px", fontSize: "11px", color: "#2a4a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ icon, title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 11, color: CYAN, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>{icon} {title}</div>
      <p style={{ fontSize: 13, color: "#5a7a99", margin: 0 }}>{sub}</p>
    </div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
