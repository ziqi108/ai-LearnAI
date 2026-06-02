import Link from "next/link";

export const metadata = {
  title: "Best ChatGPT Prompt Examples (2026 Guide)",
  description:
    "Discover the best ChatGPT prompt examples for beginners. Learn how to write better prompts with real use cases and techniques.",
};

export default function PromptExamplesPage() {
  return (
    <main style={{ background: "#f9fafb", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700 }}>
          Best ChatGPT Prompt Examples
        </h1>

        <p style={{ color: "#666", marginTop: "15px", fontSize: "18px" }}>
          Learn how to write better prompts with real examples you can use today.
        </p>
      </section>

      <article style={container}>

        {/* Breadcrumb */}
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          <Link href="/learn">Learn</Link> {" > "} Prompt Examples
        </div>

        {/* Intro */}
        <Section
          title="What is a Prompt?"
          text="A prompt is the instruction you give to AI. The better your prompt, the better your results."
        />

        <Highlight>
          Good prompts = better results. Bad prompts = vague answers.
        </Highlight>

        {/* Examples */}
        <Section
          title="1. Writing Prompts"
          list={[
            "Write a blog post about AI",
            "Write a 100-word blog post about AI for beginners with simple language",
          ]}
        />

        <Section
          title="2. Learning Prompts"
          list={[
            "Explain machine learning",
            "Explain machine learning like I’m 10 years old using examples",
          ]}
        />

        <Section
          title="3. Productivity Prompts"
          list={[
            "Summarize this article",
            "Summarize this article in bullet points and highlight key insights",
          ]}
        />

        {/* Key Tips */}
        <div style={{ marginTop: "40px" }}>
          <h2>Tips for Better Prompts</h2>
          <ul>
            <li>Be specific</li>
            <li>Provide context</li>
            <li>Use clear structure</li>
            <li>Define output format</li>
          </ul>
        </div>

        <Highlight>
          Always tell the AI exactly what you want.
        </Highlight>

        {/* CTA */}
        <div style={ctaBox}>
          <h3>Want to go deeper?</h3>
          <p>Learn the fundamentals of prompt engineering.</p>

          <Link href="/learn/beginner/prompt-basics">
            <button style={btn}>Learn Prompt Basics →</button>
          </Link>
        </div>

        {/* Related */}
        <div style={related}>
          <h3>Related Articles</h3>

          <ul>
            <li>
              <Link href="/learn/beginner/what-is-ai">What is AI</Link>
            </li>
            <li>
              <Link href="/learn/beginner/what-is-llm">What is LLM</Link>
            </li>
            <li>
              <Link href="/learn/prompt-engineering-guide">
                Prompt Engineering Guide
              </Link>
            </li>
          </ul>
        </div>

      </article>
    </main>
  );
}

/* Components */

function Section({ title, text, list = [] }: any) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{title}</h2>
      {text && <p style={{ color: "#555" }}>{text}</p>}
      {list.length > 0 && (
        <ul>
          {list.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Highlight({ children }: any) {
  return <div style={highlight}>{children}</div>;
}

/* Styles */

const container = {
  maxWidth: "800px",
  margin: "auto",
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
};

const highlight = {
  background: "#e0f2fe",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "20px",
};

const ctaBox = {
  marginTop: "40px",
  padding: "20px",
  background: "#dbeafe",
  borderRadius: "12px",
  textAlign: "center" as const,
};

const related = {
  marginTop: "40px",
};

const btn = {
  background: "#2563eb",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
};