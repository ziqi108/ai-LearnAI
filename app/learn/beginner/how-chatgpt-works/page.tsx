import Link from "next/link";

export const metadata = {
  title: "How ChatGPT Works (Beginner Guide 2026)",
  description:
    "Learn how ChatGPT works through training, inference, and prompt engineering. A simple and clear explanation for beginners.",
};

export default function HowChatGPTWorksPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>
      
      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
          How ChatGPT Works
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          Understand how ChatGPT generates answers using training, inference, and prompts.
        </p>

        <div style={{ marginTop: "15px" }}>
          <span style={badge}>Beginner</span>
          <span style={badge}>Lesson 3</span>
          <span style={badge}>6 min read</span>
        </div>
      </section>

      <article style={container}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn">Learn</Link> &gt;{" "}
          <Link href="/learn/beginner">Beginner</Link> &gt; ChatGPT
        </div>

        {/* Back */}
        <Link href="/learn/beginner" style={backBtn}>
          ← Back to Course
        </Link>

        {/* Intro */}
        <Section
          title="What is ChatGPT Really Doing?"
          text="ChatGPT does not 'think' like a human. Instead, it predicts the most likely next word based on patterns learned from data."
        />

        <Highlight>
          ChatGPT is not inventing answers — it is generating responses based on learned language patterns.
        </Highlight>

        {/* Step 1 */}
        <Section
          title="1. Training Phase (Learning Language Patterns)"
          text="Before ChatGPT can answer questions, it is trained on massive amounts of text data."
          list={[
            "Learns grammar and sentence structure",
            "Understands relationships between words",
            "Predicts the next word in a sequence",
          ]}
        />

        <Card title="Key Insight">
          Training teaches the model patterns, not facts. It learns how language works.
        </Card>

        {/* Step 2 */}
        <Section
          title="2. Inference Phase (Generating Answers)"
          text="When you ask a question, the model generates a response based on context and probability."
          list={[
            "Looks at your input (prompt)",
            "Uses learned patterns",
            "Predicts the best possible response",
          ]}
        />

        <Highlight>
          The model is always predicting the “next token” step by step to form a complete answer.
        </Highlight>

        {/* Step 3 */}
        <Section
          title="3. Why Prompts Matter"
          text="The way you ask a question directly affects the quality of the answer."
          list={[
            "Clear prompts → better responses",
            "Structured prompts → more organized answers",
            "Detailed prompts → more accurate results",
          ]}
        />

        <Compare />

        {/* Wrap up */}
        <Section
          title="Putting It All Together"
          text="Now you understand how ChatGPT works:"
          list={[
            "It learns patterns during training",
            "It generates answers during inference",
            "Your prompts guide its responses",
          ]}
        />

        {/* Summary */}
        <div style={summary}>
          <strong>Key Takeaway:</strong> ChatGPT is a language prediction system.
          The better your prompt, the better the output.
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

function Compare() {
  return (
    <div style={compare}>
      <div>
        <strong>❌ Weak Prompt</strong>
        <p>Explain AI</p>
      </div>

      <div>
        <strong>✅ Strong Prompt</strong>
        <p>Explain AI in simple terms for beginners, under 100 words</p>
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

const compare = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
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