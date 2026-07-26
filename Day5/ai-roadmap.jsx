import { useState } from "react";

const WEEKS = [
  {
    id: 1,
    label: "Week 1",
    theme: "Python for AI & ML Foundations",
    color: "#00c8ff",
    milestone: "Write & understand ML code from scratch — no copy-paste",
    days: [
      {
        day: 1,
        title: "Python for Data Science",
        tasks: ["NumPy arrays & operations (2h)", "Pandas DataFrames — load, clean, explore a CSV (1h)", "Mini-exercise: analyze a dataset of your choice (1h)"],
        resource: "Kaggle: Python & Pandas micro-courses (free)",
        tag: "Foundations",
      },
      {
        day: 2,
        title: "Data Visualization",
        tasks: ["Matplotlib & Seaborn basics (1.5h)", "Plot distributions, correlations, heatmaps (1h)", "Visualize the dataset from Day 1 (1h)"],
        resource: "YouTube: Corey Schafer – Matplotlib Playlist",
        tag: "Foundations",
      },
      {
        day: 3,
        title: "ML Concepts — Supervised Learning",
        tasks: ["Linear & logistic regression theory (1h)", "scikit-learn pipeline: fit → predict → evaluate (1.5h)", "Build a house price predictor (1h)"],
        resource: "StatQuest with Josh Starmer (YouTube)",
        tag: "ML Core",
      },
      {
        day: 4,
        title: "Classification & Model Evaluation",
        tasks: ["Decision trees, KNN, SVM overview (1h)", "Confusion matrix, precision, recall, F1 (1h)", "Iris flower classifier project (2h)"],
        resource: "scikit-learn official docs + Kaggle notebooks",
        tag: "ML Core",
      },
      {
        day: 5,
        title: "Neural Networks Intro",
        tasks: ["Perceptron & backprop intuition (1h)", "Build a 2-layer NN in pure NumPy (2h)", "Watch 3Blue1Brown: Neural Networks series (1h)"],
        resource: "3Blue1Brown 'Neural Networks' YouTube playlist",
        tag: "Deep Learning",
      },
      {
        day: 6,
        title: "PyTorch Basics",
        tasks: ["Tensors, autograd, basic ops (1.5h)", "Rewrite Day 5 NN in PyTorch (1.5h)", "Train on MNIST digits dataset (1h)"],
        resource: "PyTorch official 60-minute blitz tutorial",
        tag: "Deep Learning",
      },
      {
        day: 7,
        title: "Week 1 Project",
        tasks: ["Build an end-to-end ML classifier (any dataset from Kaggle)", "Write a short README explaining your approach", "Push to GitHub — your first AI repo"],
        resource: "Kaggle Datasets (choose one you're curious about)",
        tag: "Project",
        isProject: true,
      },
    ],
  },
  {
    id: 2,
    label: "Week 2",
    theme: "Deep Learning & LLM Fundamentals",
    color: "#7b2fff",
    milestone: "Fine-tune a model and understand transformer architecture",
    days: [
      {
        day: 8,
        title: "CNNs for Computer Vision",
        tasks: ["Conv layers, pooling, feature maps (1.5h)", "Build image classifier with PyTorch CNN (2h)", "Train on CIFAR-10 dataset (30m)"],
        resource: "fast.ai Practical Deep Learning – Lesson 1",
        tag: "Deep Learning",
      },
      {
        day: 9,
        title: "Transfer Learning",
        tasks: ["Concept: pretrained models & fine-tuning (1h)", "Fine-tune ResNet18 on custom image dataset (2h)", "Export & run inference locally (1h)"],
        resource: "PyTorch Transfer Learning Tutorial (official docs)",
        tag: "Deep Learning",
      },
      {
        day: 10,
        title: "Transformers & Attention",
        tasks: ["Read 'Attention is All You Need' (abstract + intro only) (1h)", "Watch 'The Illustrated Transformer' video (1h)", "Use HuggingFace pipeline for text classification (2h)"],
        resource: "Jay Alammar's 'The Illustrated Transformer' blog",
        tag: "LLMs",
      },
      {
        day: 11,
        title: "HuggingFace Deep Dive",
        tasks: ["HuggingFace Hub: models, datasets, spaces (1h)", "Load & run 3 different models (NLP, vision, audio) (1.5h)", "Push a model card to HuggingFace Hub (1.5h)"],
        resource: "HuggingFace Course – Chapter 1 & 2 (free, huggingface.co/learn)",
        tag: "LLMs",
      },
      {
        day: 12,
        title: "Fine-tuning LLMs",
        tasks: ["LoRA & PEFT concepts (1h)", "Fine-tune a small LLM (GPT-2 or distilBERT) on custom data (2h)", "Test & evaluate outputs (1h)"],
        resource: "HuggingFace PEFT docs + Colab notebooks",
        tag: "LLMs",
      },
      {
        day: 13,
        title: "Prompt Engineering for Engineers",
        tasks: ["System prompts, few-shot, chain-of-thought (1h)", "OpenAI/Anthropic API calls in Python (1.5h)", "Build a prompt-testing script that logs & compares outputs (1.5h)"],
        resource: "Anthropic Prompt Engineering Guide (docs.anthropic.com)",
        tag: "Prompt Eng",
      },
      {
        day: 14,
        title: "Week 2 Project",
        tasks: ["Build an AI Text Classifier for a real problem (spam, sentiment, topic)", "Use HuggingFace + fine-tuned model", "Deploy as a simple Gradio demo — share the link"],
        resource: "Gradio.app docs (get a live demo URL instantly)",
        tag: "Project",
        isProject: true,
      },
    ],
  },
  {
    id: 3,
    label: "Week 3",
    theme: "RAG, Agents & AI App Development",
    color: "#ff6b35",
    milestone: "Ship a working AI app that uses real-world data",
    days: [
      {
        day: 15,
        title: "Vector Databases & Embeddings",
        tasks: ["Embeddings concept — semantic search (1h)", "ChromaDB or FAISS: store & query embeddings (2h)", "Build a semantic search over 100 documents (1h)"],
        resource: "LangChain docs + ChromaDB quickstart",
        tag: "RAG",
      },
      {
        day: 16,
        title: "RAG Pipeline from Scratch",
        tasks: ["Retrieval-Augmented Generation architecture (1h)", "Build RAG: PDF → chunks → embeddings → LLM (2h)", "Query your own notes/textbook with AI (1h)"],
        resource: "LangChain RAG tutorial + llamaindex.ai",
        tag: "RAG",
      },
      {
        day: 17,
        title: "LangChain & Orchestration",
        tasks: ["Chains, prompts, output parsers (1.5h)", "Memory & conversation history (1h)", "Build a chatbot with persistent memory (1.5h)"],
        resource: "LangChain Python docs (python.langchain.com)",
        tag: "RAG",
      },
      {
        day: 18,
        title: "AI Agents",
        tasks: ["ReAct agent pattern: Reason + Act (1h)", "Tool use: calculator, search, code executor (1.5h)", "Build a research agent that Googles + summarizes (1.5h)"],
        resource: "LangGraph docs + CrewAI GitHub (beginner examples)",
        tag: "Agents",
      },
      {
        day: 19,
        title: "FastAPI for AI Backends",
        tasks: ["FastAPI setup, routes, Pydantic models (1.5h)", "Wrap your RAG pipeline as a REST API (1.5h)", "Test with Postman or curl (1h)"],
        resource: "FastAPI official tutorial (fastapi.tiangolo.com)",
        tag: "Backend",
      },
      {
        day: 20,
        title: "Streamlit / Gradio UI",
        tasks: ["Streamlit components: input, output, chat (1.5h)", "Connect Streamlit frontend → FastAPI backend (1.5h)", "Style your app — add a logo, header, instructions (1h)"],
        resource: "Streamlit docs + Streamlit Community Cloud (free hosting)",
        tag: "Frontend",
      },
      {
        day: 21,
        title: "Week 3 Project",
        tasks: ["Build 'Chat with Your PDF' app — full stack", "Stack: LangChain + ChromaDB + FastAPI + Streamlit", "Deploy on Streamlit Cloud — live URL ready to share"],
        resource: "Streamlit Cloud (free), HuggingFace Spaces (free)",
        tag: "Project",
        isProject: true,
      },
    ],
  },
  {
    id: 4,
    label: "Week 4",
    theme: "Ship, Polish & Go Public",
    color: "#00e88f",
    milestone: "One polished, deployed AI project in your portfolio — with real users",
    days: [
      {
        day: 22,
        title: "MLOps Basics",
        tasks: ["Model versioning with MLflow or W&B (1.5h)", "Logging experiments, metrics, artifacts (1h)", "Version your Week 2 fine-tuned model (1.5h)"],
        resource: "Weights & Biases quickstart (wandb.ai/quickstart)",
        tag: "MLOps",
      },
      {
        day: 23,
        title: "Docker for AI Apps",
        tasks: ["Docker basics: images, containers, Dockerfiles (1.5h)", "Containerize your FastAPI + model app (1.5h)", "Run locally, test endpoints (1h)"],
        resource: "Docker official 'Getting Started' tutorial",
        tag: "MLOps",
      },
      {
        day: 24,
        title: "Cloud Deployment",
        tasks: ["Railway or Render: deploy FastAPI app free (1.5h)", "Environment variables, secrets management (1h)", "Live URL — your AI app is on the internet (1.5h)"],
        resource: "railway.app or render.com (both have free tiers)",
        tag: "Deployment",
      },
      {
        day: 25,
        title: "Evaluation & Safety",
        tasks: ["LLM evaluation metrics: BLEU, ROUGE, human eval (1h)", "Prompt injection & jailbreak awareness (1h)", "Add basic guardrails to your app (2h)"],
        resource: "LMSYS Chatbot Arena + Anthropic safety papers",
        tag: "Safety",
      },
      {
        day: 26,
        title: "Portfolio Project Planning",
        tasks: ["Choose your capstone project (see list below)", "Write a 1-page spec: problem, solution, stack, milestones", "Set up GitHub repo with proper structure + README skeleton"],
        resource: "GitHub README templates (matiassingers/awesome-readme)",
        tag: "Planning",
      },
      {
        day: 27,
        title: "Build Capstone — Core Features",
        tasks: ["Code the main AI logic (4h)", "Focus on function over form — get it working first"],
        resource: "Use all tools from Weeks 1–3",
        tag: "Capstone",
        isProject: true,
      },
      {
        day: 28,
        title: "Build Capstone — UI & Polish",
        tasks: ["Connect frontend to backend (1.5h)", "Error handling, loading states, edge cases (1h)", "Write tests for core functions (1.5h)"],
        resource: "pytest docs, Streamlit session state docs",
        tag: "Capstone",
        isProject: true,
      },
      {
        day: 29,
        title: "Deploy & Document",
        tasks: ["Deploy capstone to cloud (1h)", "Write a full README: what, why, how, demo GIF (1.5h)", "Record a 2-min Loom demo video (30m)", "Write a LinkedIn post or Twitter/X thread about what you built (1h)"],
        resource: "Loom (free screen recorder), Shields.io (README badges)",
        tag: "Ship",
      },
      {
        day: 30,
        title: "Reflection & Next 30 Days",
        tasks: ["Review all 4 GitHub repos — are they presentable?", "Update LinkedIn headline + add projects", "Write your '30-day retrospective' — publish it publicly", "Map your next 30 days: go deeper on one track"],
        resource: "LinkedIn, Dev.to, or Hashnode for publishing your story",
        tag: "Launch",
      },
    ],
  },
];

const CAPSTONE_IDEAS = [
  { title: "AI Study Buddy", desc: "Upload lecture notes → get flashcards, quizzes, and summaries generated automatically", stack: "LangChain + GPT-4 + Streamlit" },
  { title: "Job Application Screener", desc: "Paste a job description → AI rewrites your resume bullet points to match", stack: "OpenAI API + FastAPI + React" },
  { title: "Code Review Bot", desc: "GitHub PR reviewer that gives inline AI feedback on your pull requests", stack: "GitHub API + LangChain + FastAPI" },
  { title: "News Digest Agent", desc: "Daily agent that scrapes headlines, clusters topics, and emails you a summary", stack: "CrewAI + Serper API + SendGrid" },
  { title: "Local RAG Assistant", desc: "Chat with your Obsidian/Notion notes — fully local with Ollama", stack: "Ollama + LlamaIndex + Gradio" },
];

const TAG_COLORS = {
  Foundations: "#3a6080",
  "ML Core": "#2a5070",
  "Deep Learning": "#4a3070",
  LLMs: "#6a2a80",
  "Prompt Eng": "#2a6060",
  RAG: "#5a4020",
  Agents: "#6a3020",
  Backend: "#204060",
  Frontend: "#205040",
  MLOps: "#404020",
  Deployment: "#203050",
  Safety: "#502030",
  Planning: "#304040",
  Capstone: "#403020",
  Ship: "#205030",
  Launch: "#203040",
  Project: "#1a3a1a",
};

export default function App() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState(null);

  const week = WEEKS.find(w => w.id === activeWeek);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07090f",
      color: "#d8e4f0",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #111c2a",
        padding: "32px 32px 28px",
        background: "linear-gradient(180deg, #0a0f1a 0%, #07090f 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Blueprint grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00c8ff",
              boxShadow: "0 0 12px #00c8ff",
            }} />
            <span style={{ fontSize: 10, letterSpacing: "0.25em", color: "#00c8ff", textTransform: "uppercase" }}>
              30-Day AI Engineer Roadmap · Delhi, IN
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 800,
            margin: "0 0 8px",
            letterSpacing: "-0.03em",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            background: "linear-gradient(90deg, #fff 0%, #00c8ff 50%, #7b2fff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            From Student → AI Engineer
          </h1>
          <p style={{ margin: 0, fontSize: 13, color: "#4a6a80", lineHeight: 1.5 }}>
            3–4 hrs/day · 4 shipped projects · 1 portfolio-ready capstone · 0 fluff
          </p>
          {/* Stats */}
          <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
            {[
              ["30", "Days"],
              ["4", "Projects Shipped"],
              ["~100h", "Hands-on Time"],
              ["1", "Capstone"],
            ].map(([val, lbl]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#00c8ff", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 10, color: "#2a4a60", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>

        {/* Week tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {WEEKS.map(w => (
            <button
              key={w.id}
              onClick={() => { setActiveWeek(w.id); setActiveDay(null); }}
              style={{
                padding: "8px 18px",
                border: `1px solid ${activeWeek === w.id ? w.color : "#1a2535"}`,
                borderRadius: 3,
                background: activeWeek === w.id ? `${w.color}18` : "transparent",
                color: activeWeek === w.id ? w.color : "#3a5060",
                fontSize: 12,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.05em",
                transition: "all 0.15s",
              }}
            >
              {w.label}: {w.theme.split(" ").slice(0, 3).join(" ")}…
            </button>
          ))}
        </div>

        {/* Week header */}
        <div style={{
          border: `1px solid ${week.color}40`,
          borderRadius: 6,
          padding: "20px 24px",
          marginBottom: 20,
          background: `${week.color}08`,
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
          flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 10, color: week.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
              Week {week.id} Theme
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#e8f0f8", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
              {week.theme}
            </div>
          </div>
          <div style={{
            background: "#0a1020",
            border: `1px solid ${week.color}30`,
            borderRadius: 4,
            padding: "12px 16px",
            maxWidth: 380,
          }}>
            <div style={{ fontSize: 9, color: week.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>
              Weekly Milestone
            </div>
            <div style={{ fontSize: 13, color: "#90a8c0", lineHeight: 1.5 }}>
              {week.milestone}
            </div>
          </div>
        </div>

        {/* Days list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {week.days.map((d) => {
            const isOpen = activeDay === d.day;
            const tagColor = TAG_COLORS[d.tag] || "#2a3a4a";
            return (
              <div
                key={d.day}
                style={{
                  border: `1px solid ${isOpen ? week.color + "50" : d.isProject ? "#1a3020" : "#111c2a"}`,
                  borderRadius: 5,
                  background: isOpen ? `${week.color}06` : d.isProject ? "#0a1a0e" : "#0a0d14",
                  overflow: "hidden",
                  transition: "all 0.15s",
                }}
              >
                {/* Day row */}
                <div
                  onClick={() => setActiveDay(isOpen ? null : d.day)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 20px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{
                    fontSize: 11,
                    color: week.color,
                    fontWeight: 700,
                    minWidth: 40,
                    letterSpacing: "0.05em",
                  }}>
                    D{String(d.day).padStart(2, "0")}
                  </span>
                  <span style={{
                    flex: 1,
                    fontSize: 14,
                    color: "#c0d8e8",
                    fontFamily: "'Segoe UI', system-ui, sans-serif",
                    fontWeight: 600,
                  }}>
                    {d.title}
                  </span>
                  <span style={{
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    padding: "3px 8px",
                    borderRadius: 2,
                    background: tagColor,
                    color: "#7090a8",
                    textTransform: "uppercase",
                    display: d.isProject ? "block" : "none",
                  }}>
                    {d.isProject ? "⚡ PROJECT" : ""}
                  </span>
                  <span style={{
                    fontSize: 9,
                    color: "#2a4a60",
                    letterSpacing: "0.1em",
                  }}>{isOpen ? "▲ CLOSE" : "▼ EXPAND"}</span>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div style={{ padding: "0 20px 20px 20px", borderTop: `1px solid ${week.color}20` }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginTop: 16,
                    }}>
                      {/* Tasks */}
                      <div>
                        <div style={{ fontSize: 9, color: "#2a5060", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>
                          Today's Tasks
                        </div>
                        {d.tasks.map((t, i) => (
                          <div key={i} style={{
                            display: "flex", gap: 10, marginBottom: 10,
                            alignItems: "flex-start",
                          }}>
                            <span style={{ color: week.color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
                            <span style={{ fontSize: 13, color: "#90a8b8", lineHeight: 1.5, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>{t}</span>
                          </div>
                        ))}
                      </div>
                      {/* Resource */}
                      <div>
                        <div style={{ fontSize: 9, color: "#2a5060", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>
                          Primary Resource
                        </div>
                        <div style={{
                          background: "#080c14",
                          border: "1px solid #1a2535",
                          borderRadius: 4,
                          padding: "12px 14px",
                        }}>
                          <span style={{ fontSize: 9, color: week.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>📚 </span>
                          <span style={{ fontSize: 13, color: "#6a90a8", fontFamily: "'Segoe UI', system-ui, sans-serif", lineHeight: 1.5 }}>{d.resource}</span>
                        </div>
                        <div style={{
                          marginTop: 10,
                          fontSize: 10,
                          color: "#2a4050",
                          fontFamily: "'Segoe UI', system-ui, sans-serif",
                        }}>
                          Spend ~3–4 hours total. Prioritize doing over reading.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Capstone section */}
        {activeWeek === 4 && (
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 10, color: "#00e88f", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
              ⚡ Choose Your Capstone Project (Day 26)
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
              {CAPSTONE_IDEAS.map((c, i) => (
                <div key={i} style={{
                  border: "1px solid #1a2a1a",
                  borderRadius: 5,
                  padding: "16px 18px",
                  background: "#080f0a",
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#c0e8c8", marginBottom: 6, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
                    {c.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#4a6a50", lineHeight: 1.5, marginBottom: 10, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
                    {c.desc}
                  </div>
                  <div style={{
                    fontSize: 10,
                    color: "#2a5030",
                    background: "#0a1a0c",
                    padding: "4px 8px",
                    borderRadius: 2,
                    border: "1px solid #1a3020",
                    letterSpacing: "0.05em",
                  }}>
                    {c.stack}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final outcome */}
        <div style={{
          marginTop: 40,
          border: "1px solid #1a2a3a",
          borderRadius: 6,
          padding: "24px 28px",
          background: "linear-gradient(135deg, #0a0f1a 0%, #080b10 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, #00c8ff, #7b2fff, #00e88f)",
          }} />
          <div style={{ fontSize: 10, color: "#00c8ff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>
            Day 30 Outcome — What You'll Have
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "◈", title: "4 GitHub Repos", desc: "ML classifier, text classifier, RAG app, capstone — all deployed & public" },
              { icon: "⟁", title: "Core AI Stack", desc: "Python, PyTorch, HuggingFace, LangChain, FastAPI, Docker — hands-on experience" },
              { icon: "▲", title: "Live Demos", desc: "Deployed apps on Streamlit Cloud or Railway — shareable URLs for job applications" },
              { icon: "◎", title: "Public Presence", desc: "LinkedIn updated, retrospective published, demo video recorded — you're visible" },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 18, color: "#00c8ff", marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#c0d8e8", marginBottom: 4, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#3a5a70", lineHeight: 1.5, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 32,
          paddingTop: 20,
          borderTop: "1px solid #0e1820",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <span style={{ fontSize: 10, color: "#1a3040", letterSpacing: "0.1em" }}>
            RULE 01 — BUILD SOMETHING EVERY DAY
          </span>
          <span style={{ fontSize: 10, color: "#1a3040", letterSpacing: "0.1em" }}>
            RULE 02 — SHIP BEFORE IT'S PERFECT
          </span>
          <span style={{ fontSize: 10, color: "#1a3040", letterSpacing: "0.1em" }}>
            RULE 03 — PUBLISH YOUR WORK PUBLICLY
          </span>
        </div>
      </div>
    </div>
  );
}
