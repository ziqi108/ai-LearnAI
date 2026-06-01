import Link from "next/link";

export const metadata = {
  title: "Prompt Engineering Guide 2026: Techniques, Examples & Best Practices",
  description:
    "Master prompt engineering with techniques, examples, and best practices. Learn how to write better prompts for AI tools like ChatGPT.",
};

export default function PromptEngineeringGuidePage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700 }}>
          Prompt Engineering Guide
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          Learn how to design better prompts and get high-quality AI results.
        </p>

        <div style={{ marginTop: "15px" }}>
          <span style={badge}>Guide</span>
          <span style={badge}>10 min read</span>
        </div>
      </section>

      <article style={container}>

        {/* ✅ Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn" style={link}>
            Learn
          </Link>
          {" > "}
          Prompt Engineering Guide
        </div>

        {/* ✅ Back */}
        <Link href="/learn" style={backBtn}>
          ← Back to Learn
        </Link>

        {/* Section */}
        <Section
          title="What is Prompt Engineering?"
          text="Prompt engineering is the process of designing instructions that guide AI models like ChatGPT to produce better outputs."
        />

        <Highlight>
          A prompt is simply the input you give to an AI model to control its behavior and output.
        </Highlight>

        {/* Why */}
        <Section
          title="Why Prompt Engineering Matters"
          list={[
            "Better prompts → better results",
            "Clear instructions → fewer errors",
            "Structured prompts → higher efficiency",
            "Reduces hallucinations",
          ]}
        />

        {/* Principles */}
        <div style={{ marginTop: "40px" }}>
          <h2>Core Principles</h2>

          <Card title="Be Clear and Specific">
            Avoid vague instructions. Define exactly what you want.
          </Card>

          <Card title="Provide Context">
            Give enough background information so the AI understands your goal.
          </Card>

          <Card title="Break Down Tasks">
            Split complex problems into steps.
          </Card>

          <Card title="Use Structure">
            Use lists, formatting, and examples.
          </Card>
        </div>

        {/* Structure */}
        <div style={{ marginTop: "40px" }}>
          <h2>Best Prompt Structure</h2>

          <pre style={code}>
{`Role
Task
Context
Examples
Constraints
Steps`}
          </pre>
        </div>

        {/* Techniques */}
        <div style={{ marginTop: "40px" }}>
          <h2>Advanced Techniques</h2>

          <Tech title="Zero-shot">
            No examples. Works for simple tasks.
          </Tech>

          <Tech title="Few-shot">
            Provide examples to guide output.
          </Tech>

          <Tech title="Chain of Thought">
            Ask the model to reason step by step.
          </Tech>

          <Tech title="Self-Consistency">
            Generate multiple answers and select the best one.
          </Tech>

          <Tech title="Tree of Thought">
            Explore multiple reasoning paths.
          </Tech>

          <Tech title="Self-Reflection">
            Ask the AI to review and improve its answer.
          </Tech>
        </div>

        {/* Example */}
        <div style={{ marginTop: "40px" }}>
          <h2>Prompt Example</h2>

          <pre style={code}>
{`You are an AI expert.

Task: Explain prompt engineering.

Requirements:
- Use simple language
- Provide examples
- Limit to 150 words

Output: bullet points`}
          </pre>
        </div>

        {/* Safety */}
        <div style={{ marginTop: "40px" }}>
          <h2>Prompt Safety</h2>

          <ul>
            <li>Prompt injection attacks</li>
            <li>Data leakage risks</li>
            <li>Jailbreak attempts</li>
          </ul>

          <Highlight>
            Always define roles, constraints, and validate input.
          </Highlight>
        </div>

        {/* Summary */}
        <div style={summary}>
          <strong>Key Takeaway:</strong> Prompt engineering is about designing
          clear and structured instructions to unlock the full power of AI.
        </div>

        {/* CTA */}
        <div style={cta}>
          <h3>Next Step</h3>

          <Link href="/learn/beginner/prompt-basics">
            <button style={btn}>Learn Prompt Basics →</button>
          </Link>
        </div>

      </article>
    </main>
  );
}

/* ===== Components ===== */

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

function Tech({ title, children }: any) {
  return (
    <div style={tech}>
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}

function Highlight({ children }: any) {
  return <div style={highlight}>{children}</div>;
}

/* ===== Styles ===== */

const container = {
  maxWidth: "800px",
  margin: "auto",
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const card = {
  marginTop: "15px",
  padding: "15px",
  background: "#f3f4f6",
  borderRadius: "10px",
};

const tech = {
  marginTop: "15px",
  padding: "15px",
  background: "#eef2ff",
  borderRadius: "10px",
};

const highlight = {
  marginTop: "20px",
  padding: "15px",
  background: "#e0f2fe",
  borderRadius: "10px",
};

const code = {
  background: "#111827",
  color: "#fff",
  padding: "15px",
  borderRadius: "10px",
  overflowX: "auto" as const,
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
  cursor: "pointer",
};

const backBtn = {
  display: "inline-block",
  marginBottom: "20px",
  color: "#2563eb",
  textDecoration: "none",
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
};

const badge = {
  marginRight: "10px",
  background: "#dbeafe",
  padding: "5px 10px",
  borderRadius: "6px",
};