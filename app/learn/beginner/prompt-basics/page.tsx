import Link from "next/link";

export const metadata = {
  title: "Prompt Engineering Basics (Beginner Guide 2026)",
  description:
    "Learn what prompt engineering is and how to write better prompts for AI tools like ChatGPT.",
};

export default function PromptBasicsPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>
      
      {/* 顶部 Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "700" }}>
          Prompt Engineering Basics
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          Learn how to write effective prompts and unlock the power of AI.
        </p>

        <div style={{ marginTop: "20px" }}>
          <span style={badge}>Beginner</span>
          <span style={badge}>10 min read</span>
        </div>
      </section>

      {/* 内容区 */}
      <article style={container}>
        
        {/* Breadcrumb */}
        <div style={{ marginBottom: "20px", fontSize: "14px" }}>
          <Link href="/learn">Learn</Link> &gt;{" "}
          <Link href="/learn/beginner">Beginner</Link> &gt; Prompt Basics
        </div>

        {/* 返回 */}
        <Link href="/learn/beginner" style={backBtn}>
          ← Back to Course
        </Link>

        {/* Section */}
        <Section
          title="What is a Prompt?"
          content="A prompt is the instruction you give to an AI model. It defines what the AI should do."
          list={[
            "Ask a question",
            "Give instructions",
            "Provide context",
          ]}
        />

        <Comparison />

        <Section
          title="What is Prompt Engineering?"
          content="Prompt engineering is the process of designing prompts to improve AI results."
          list={[
            "Better prompts → better results",
            "Clear instructions → fewer errors",
            "Good prompts → higher productivity",
          ]}
        />

        {/* 技巧卡片 */}
        <div style={{ marginTop: "40px" }}>
          <h2>Key Prompt Techniques</h2>

          <div style={grid}>
            <Card title="Clear Instructions" desc="Be specific and avoid vague prompts." />
            <Card title="Role Prompting" desc="Assign a role like teacher or expert." />
            <Card title="Output Format" desc="Define structure like JSON or bullet points." />
            <Card title="Examples" desc="Provide examples to guide the model." />
          </div>
        </div>

        {/* 结构 */}
        <div style={{ marginTop: "50px" }}>
          <h2>Best Prompt Structure</h2>

          <pre style={code}>
{`You are a professional assistant.
Task: Explain AI in simple terms.
Output: bullet points.`}
          </pre>
        </div>

        {/* 总结卡 */}
        <div style={highlight}>
          <strong>Key Insight:</strong> Good prompts = better AI results.
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

function Section({ title, content, list }: any) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{title}</h2>
      <p style={{ color: "#555" }}>{content}</p>
      {list && (
        <ul>
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Card({ title, desc }: any) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p style={{ color: "#666" }}>{desc}</p>
    </div>
  );
}

function Comparison() {
  return (
    <div style={compare}>
      <div>
        <strong>❌ Bad Prompt</strong>
        <p>Write something</p>
      </div>

      <div>
        <strong>✅ Good Prompt</strong>
        <p>Write a 4-line poem in Li Bai style</p>
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
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
};

const compare = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "20px",
  padding: "20px",
  background: "#f3f4f6",
  borderRadius: "10px",
};

const highlight = {
  marginTop: "40px",
  padding: "15px",
  background: "#e0f2fe",
  borderRadius: "10px",
};

const code = {
  background: "#111827",
  color: "#fff",
  padding: "15px",
  borderRadius: "10px",
};

const cta = {
  marginTop: "50px",
  textAlign: "center" as const,
};

const btn = {
  padding: "12px 18px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
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