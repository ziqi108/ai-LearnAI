import Link from "next/link";

export const metadata = {
  title: "Understanding Large Language Models (LLM Guide 2026)",
  description:
    "Learn what Large Language Models are, how they work, their evolution, and real-world applications.",
};

export default function LLMPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
          Understanding Large Language Models
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          A complete beginner guide to AI's most important technology.
        </p>

        <div style={{ marginTop: "15px" }}>
          <span style={badge}>Beginner</span>
          <span style={badge}>Core Concept</span>
        </div>
      </section>

      <article style={container}>

        {/* Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn">Learn</Link> &gt;{" "}
          <Link href="/learn/beginner">Beginner</Link> &gt; LLM Cognition
        </div>

        <Link href="/learn/beginner" style={backBtn}>
          ← Back to Course
        </Link>

        {/* Intro */}
        <Section
          title="What is a Large Language Model?"
          text="A Large Language Model (LLM) is an AI system trained on massive amounts of text data to understand and generate human language."
          list={[
            "Learns from billions of text examples",
            "Understands language patterns",
            "Generates human-like responses",
          ]}
        />

        <Highlight>
          Base models (GPT, LLaMA, Qwen) provide core capabilities, while products (ChatGPT, Claude)
          are built on top of them.
        </Highlight>

        {/* AI evolution */}
        <Section title="AI 1.0 vs AI 2.0" text="AI has evolved from rule-based systems to data-driven intelligent systems." />

        <Compare />

        {/* AGI */}
        <Section title="LLM vs AGI" text="LLM is current technology. AGI (Artificial General Intelligence) is a future goal." />

        <Highlight type="yellow">
          AGI aims to match human-level intelligence across all domains. LLMs are a step toward that goal.
        </Highlight>

        {/* GPT history */}
        <div style={{ marginTop: "40px" }}>
          <h2>GPT Evolution</h2>

          <ul>
            <li><strong>GPT-1:</strong> Introduced pretraining concept</li>
            <li><strong>GPT-2:</strong> Powerful text generation</li>
            <li><strong>GPT-3:</strong> Few-shot learning</li>
            <li><strong>GPT-4:</strong> Strong reasoning ability</li>
          </ul>
        </div>

        {/* Core principles */}
        <div style={{ marginTop: "40px" }}>
          <h2>How LLMs Work</h2>

          <Card title="Transformer">
            Uses attention mechanisms to understand relationships between words.
          </Card>

          <Card title="Tokens">
            Text is broken into tokens, the smallest processing units.
          </Card>

          <Card title="Training">
            Pre-training → Fine-tuning → RLHF (Human feedback learning).
          </Card>
        </div>

        {/* Limitations */}
        <div style={{ marginTop: "40px" }}>
          <h2>Limitations of LLMs</h2>

          <ul>
            <li>May produce incorrect answers</li>
            <li>Limited math reasoning</li>
            <li>Knowledge cutoff</li>
            <li>Hallucinations</li>
          </ul>
        </div>

        {/* Applications */}
        <div style={{ marginTop: "40px" }}>
          <h2>Real-World Applications</h2>

          <ul>
            <li>Healthcare diagnosis support</li>
            <li>Legal document drafting</li>
            <li>Government AI services</li>
            <li>Content creation</li>
          </ul>
        </div>

        {/* Future */}
        <div style={{ marginTop: "40px" }}>
          <h2>Future Trends</h2>

          <ul>
            <li>More powerful models</li>
            <li>Better efficiency</li>
            <li>Multi-modal AI</li>
            <li>Specialized domain models</li>
          </ul>
        </div>

        {/* Summary */}
        <div style={summary}>
          <strong>Key Takeaway:</strong> Understanding LLM fundamentals helps you
          better use AI tools and prepare for the AI-driven future.
        </div>

        {/* CTA */}
        <div style={cta}>
          <h3>Next Lesson</h3>

          <Link href="/learn/beginner/prompt-basics">
            <button style={btn}>Prompt Engineering →</button>
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
      <p style={{ color: "#555" }}>{text}</p>
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

function Highlight({ children, type = "blue" }: any) {
  return (
    <div
      style={{
        background: type === "yellow" ? "#fef3c7" : "#e0f2fe",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      {children}
    </div>
  );
}

function Compare() {
  return (
    <div style={compare}>
      <div>
        <strong>AI 1.0</strong>
        <p>Rule-based systems</p>
      </div>
      <div>
        <strong>AI 2.0</strong>
        <p>Deep learning & large models</p>
      </div>
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
  padding: "15px",
  marginTop: "10px",
  background: "#f3f4f6",
  borderRadius: "10px",
};

const compare = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  padding: "20px",
  background: "#f3f4f6",
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