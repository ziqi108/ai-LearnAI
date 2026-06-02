import Link from "next/link";

export const metadata = {
  title: "Beginner Guide to Prompt Engineering (2026)",
  description:
    "Learn prompt engineering from scratch with simple examples and clear explanations.",
};

export default function Page() {
  return (
    <main style={layout}>

      {/* Hero */}
      <section style={hero}>
        <h1 style={title}>
          Beginner Guide to Prompt Engineering
        </h1>

        <p style={subtitle}>
          Learn how to talk to AI and get better results step by step.
        </p>

        <div style={badgeRow}>
          <span style={badge}>Beginner</span>
          <span style={badge}>10 min read</span>
        </div>
      </section>

      {/* Content */}
      <article style={container}>

        {/* Breadcrumb */}
        <div style={breadcrumb}>
          <Link href="/learn">Learn</Link> {" > "} Prompt Basics
        </div>

        {/* Intro */}
        <p style={paragraph}>
          Prompt engineering is the skill of writing better instructions for AI.
          Clear prompts produce much better results and reduce errors.
        </p>

        <Highlight>
          Better prompts = better AI outputs.
        </Highlight>

        {/* Sections */}
        <Section title="Introduction">
          <p>
            Prompt engineering is one of the most important skills in the AI era.
            It helps you control how AI responds to your requests.
          </p>
        </Section>

        <Section title="What is Prompt Engineering?">
          <p>
            It is the process of designing clear instructions for AI models.
          </p>

          <CodeBlock>
{`Bad prompt:
Write about AI

Better prompt:
Write a 150-word article about AI for beginners using simple language`}
          </CodeBlock>
        </Section>

        <Section title="Why It Matters">
          <ul>
            <li>Improve output quality</li>
            <li>Reduce errors</li>
            <li>Save time</li>
            <li>Control style</li>
          </ul>
        </Section>

        {/* Cards */}
        <div style={grid}>
          <Card title="Instruction">
            Tell AI what to do clearly.
          </Card>

          <Card title="Context">
            Provide background information.
          </Card>

          <Card title="Constraints">
            Define format and limits.
          </Card>
        </div>

        <Section title="Prompt Workflow">
          <ul>
            <li>Define your goal</li>
            <li>Break into parts</li>
            <li>Write prompt</li>
            <li>Test output</li>
            <li>Improve</li>
          </ul>
        </Section>

        <Section title="Prompt Techniques">
          <h3>Zero-shot</h3>
          <p>No examples provided.</p>

          <h3>Few-shot</h3>
          <p>Provide examples.</p>

          <h3>Chain-of-Thought</h3>
          <p>Ask AI to think step by step.</p>
        </Section>

        <Section title="Tips">
          <ul>
            <li>Be specific</li>
            <li>Add context</li>
            <li>Control output format</li>
            <li>Iterate often</li>
          </ul>
        </Section>

        {/* CTA */}
        <div style={ctaBox}>
          <h3>Next Step</h3>

          <p>Learn advanced prompt techniques.</p>

          <Link href="/learn/prompt-engineering-guide">
            <button style={btn}>Go to Prompt Guide →</button>
          </Link>
        </div>

        {/* Related */}
        <div style={related}>
          <h3>Related Articles</h3>

          <ul>
            <li>
              <Link href="/learn/beginner/what-is-ai">
                What is AI
              </Link>
            </li>

            <li>
              <Link href="/learn/beginner/what-is-llm">
                What is LLM
              </Link>
            </li>

            <li>
              <Link href="/learn/prompt-engineering-guide">
                Prompt Guide
              </Link>
            </li>
          </ul>
        </div>

      </article>
    </main>
  );
}

/* ✅ Components */

function Section({ title, children }: any) {
  return (
    <section style={{ marginTop: "40px" }}>
      <h2 style={h2}>{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, children }: any) {
  return (
    <div style={card}>
      <strong>{title}</strong>
      <p style={{ color: "#555" }}>{children}</p>
    </div>
  );
}

function Highlight({ children }: any) {
  return <div style={highlight}>{children}</div>;
}

function CodeBlock({ children }: any) {
  return <pre style={code}>{children}</pre>;
}

/* ✅ Styles */

const layout = {
  background: "#f9fafb",
  minHeight: "100vh",
};

const hero = {
  textAlign: "center" as const,
  padding: "60px 20px",
};

const title = {
  fontSize: "40px",
  fontWeight: 700,
};

const subtitle = {
  marginTop: "10px",
  color: "#666",
  fontSize: "18px",
};

const badgeRow = {
  marginTop: "15px",
};

const badge = {
  marginRight: "10px",
  background: "#dbeafe",
  padding: "6px 12px",
  borderRadius: "8px",
  fontSize: "12px",
};

const container = {
  maxWidth: "820px",
  margin: "auto",
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const breadcrumb = {
  marginBottom: "20px",
  fontSize: "14px",
};

const paragraph = {
  color: "#444",
  lineHeight: "1.6",
};

const h2 = {
  marginTop: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
  marginTop: "20px",
};

const card = {
  padding: "15px",
  background: "#f3f4f6",
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
};

const ctaBox = {
  marginTop: "50px",
  textAlign: "center" as const,
};

const btn = {
  marginTop: "10px",
  background: "#2563eb",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
};

const related = {
  marginTop: "40px",
};