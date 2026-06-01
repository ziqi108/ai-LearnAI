import Link from "next/link";

export const metadata = {
  title: "What is Artificial Intelligence? Beginner Guide (2026)",
  description:
    "Learn what AI is, how it works, and why it matters. A complete beginner guide to artificial intelligence.",
};

export default function WhatIsAIPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>
      
      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
          What is Artificial Intelligence?
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          A complete beginner guide to understanding AI fundamentals.
        </p>

        <div style={{ marginTop: "15px" }}>
          <span style={badge}>Beginner</span>
          <span style={badge}>Lesson 1</span>
          <span style={badge}>8 min read</span>
        </div>
      </section>

      <article style={container}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn">Learn</Link> &gt;{" "}
          <Link href="/learn/beginner">Beginner</Link> &gt; What is AI
        </div>

        {/* Back */}
        <Link href="/learn/beginner" style={backBtn}>
          ← Back to Course
        </Link>

        {/* Intro */}
        <Section
          title="What is AI?"
          text="Artificial Intelligence (AI) is a system that enables machines to learn, reason, and make decisions based on data instead of fixed rules."
        />

        {/* Core abilities */}
        <Section
          title="Core Capabilities of AI"
          text="AI systems can perform tasks that typically require human intelligence:"
          list={[
            "Perception – recognizing images, speech, and text",
            "Understanding – processing and interpreting information",
            "Reasoning – making decisions based on patterns",
            "Action – generating outputs or executing tasks",
          ]}
        />

        {/* Highlight box */}
        <Highlight>
          AI does not “think like humans.” It finds patterns in data and applies them.
        </Highlight>

        {/* Why AI matters */}
        <Section
          title="Why AI Matters"
          text="Traditional software requires manually written rules. AI learns from data, making it more scalable and powerful."
        />

        <Card title="Real-World Examples">
          <ul>
            <li>Product recommendations on e-commerce platforms</li>
            <li>Email spam detection</li>
            <li>Navigation apps suggesting optimal routes</li>
            <li>AI-powered medical diagnosis</li>
          </ul>
        </Card>

        {/* AI is not one thing */}
        <Section
          title="AI is Not a Single Technology"
          text="AI includes multiple subfields working together:"
          list={[
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Reinforcement Learning",
          ]}
        />

        {/* Thinking framework */}
        <Section
          title="How to Think About AI"
          text="AI is not about human-like thinking. Instead, it is about identifying patterns in large amounts of data and applying those patterns to solve problems."
        />

        {/* Learning path */}
        <Section
          title="How to Start Learning AI"
          list={[
            "Understand what AI does and where it is used",
            "Learn basics of machine learning and deep learning",
            "Move to LLMs, prompt engineering, and AI applications",
          ]}
        />

        {/* Summary */}
        <div style={summary}>
          <strong>Key Takeaway:</strong> AI is about enabling machines to learn
          patterns from data and make decisions. Understanding AI fundamentals
          prepares you for learning advanced topics like LLMs and prompt engineering.
        </div>

        {/* CTA */}
        <div style={cta}>
          <h3>Next Lesson</h3>

          <Link href="/learn/beginner/what-is-llm">
            <button style={btn}>What is LLM? →</button>
          </Link>
        </div>

      </article>
    </main>
  );
}

/* ===== 组件 ===== */

function Section({ title, text, list = [] }: any) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{title}</h2>
      {text && <p style={{ color: "#555" }}>{text}</p>}
      {list.length > 0 && (
        <ul>
          {list.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div style={card}>
      <strong>{title}</strong>
      <div style={{ color: "#666" }}>{children}</div>
    </div>
  );
}

function Highlight({ children }: any) {
  return (
    <div style={highlight}>
      {children}
    </div>
  );
}

/* ===== 样式 ===== */

const container = {
  maxWidth: "800px",
  margin: "auto",
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const card = {
  background: "#f3f4f6",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
};

const highlight = {
  marginTop: "20px",
  padding: "15px",
  background: "#e0f2fe",
  borderRadius: "10px",
};

const summary = {
  marginTop: "40px",
  padding: "15px",
  background: "#dbeafe",
  borderRadius: "10px",
};

const cta = {
  textAlign: "center" as const,
  marginTop: "50px",
};

const btn = {
  padding: "12px 18px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
};

const backBtn = {
  display: "inline-block",
  marginBottom: "20px",
  color: "#2563eb",
};

const badge = {
  marginRight: "10px",
  background: "#dbeafe",
  padding: "5px 10px",
  borderRadius: "6px",
};