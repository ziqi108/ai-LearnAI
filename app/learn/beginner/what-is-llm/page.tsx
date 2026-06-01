import Link from "next/link";

export const metadata = {
  title: "What is a Large Language Model (LLM)? Beginner Guide 2026",
  description:
    "Learn what LLMs are, how they work, and why they power AI tools like ChatGPT. A clear beginner-friendly guide.",
};

export default function WhatIsLLMPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>
      
      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
          What is a Large Language Model?
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          Understand how LLMs power tools like ChatGPT.
        </p>

        <div style={{ marginTop: "15px" }}>
          <span style={badge}>Beginner</span>
          <span style={badge}>Lesson 2</span>
          <span style={badge}>7 min read</span>
        </div>
      </section>

      <article style={container}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn">Learn</Link> &gt;{" "}
          <Link href="/learn/beginner">Beginner</Link> &gt; LLM
        </div>

        {/* Back */}
        <Link href="/learn/beginner" style={backBtn}>
          ← Back to Course
        </Link>

        {/* Intro */}
        <Section
          title="What is an LLM?"
          text="A Large Language Model (LLM) is an AI system trained on massive amounts of text data to understand and generate human language."
          list={[
            "Understands user input",
            "Generates contextual responses",
            "Adapts tone and format based on prompts",
          ]}
        />

        <Highlight>
          Think of an LLM as a highly trained “language intelligence system.”
        </Highlight>

        {/* Why powerful */}
        <Section
          title="Why LLMs Are So Powerful"
          text="LLMs learn from billions of words and sentences, giving them strong language abilities."
          list={[
            "Grammar and structure understanding",
            "Context awareness",
            "Logical relationships between ideas",
            "Flexible expression styles",
          ]}
        />

        <Card title="Simple Analogy">
          If language is a tool, an LLM is a master who has practiced using that tool across billions of examples.
        </Card>

        {/* Applications */}
        <Section
          title="Real-World Applications"
          list={[
            "Content writing",
            "Code generation",
            "Customer support AI",
            "Translation tools",
            "Learning assistants",
            "Summarization systems",
          ]}
        />

        {/* Next step */}
        <Section
          title="What You Should Learn Next"
          text="Understanding LLMs is only the beginning. The next step is learning how to interact with them effectively."
          list={[
            "Prompt design",
            "Clear task instructions",
            "Structured outputs",
          ]}
        />

        {/* Summary */}
        <div style={summary}>
          <strong>Key Takeaway:</strong> LLMs are AI systems designed to
          understand and generate language. They are the core technology behind
          modern AI tools like ChatGPT.
        </div>

        {/* CTA */}
        <div style={cta}>
          <h3>Next Lesson</h3>

          <Link href="/learn/beginner/how-chatgpt-works">
            <button style={btn}>How ChatGPT Works →</button>
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
      <p style={{ color: "#666" }}>{children}</p>
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

const highlight = {
  marginTop: "20px",
  padding: "15px",
  background: "#e0f2fe",
  borderRadius: "10px",
};

const card = {
  background: "#f3f4f6",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
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