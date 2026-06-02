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
        <h2>What is a Prompt?</h2>
        <p>
          A prompt is the instruction you give to an AI model like ChatGPT.
          The quality of your prompt directly determines the quality of the output.
        </p>

        <Highlight>
          Better prompts → better results. Bad prompts → vague or useless answers.
        </Highlight>

        {/* Section */}
        <h2>Why Prompt Examples Matter</h2>
        <p>
          Many beginners struggle to use AI effectively because they don't know
          how to structure prompts.
        </p>

        <ul>
          <li>Get more accurate results</li>
          <li>Save time</li>
          <li>Control output format</li>
        </ul>

        {/* Writing */}
        <h2>1. Writing Prompt Examples</h2>

        <ul>
          <li>Write a blog post about AI</li>
          <li>
            Write a 100-word blog post about AI for beginners using simple language
          </li>
        </ul>

        <p style={{ color: "#555" }}>
          ✅ The second version is better because it defines audience and style.
        </p>

        {/* 内链 */}
        <p>
          Learn more here:
          <Link href="/learn/prompt-engineering-guide">
            {" "}Prompt Engineering Guide
          </Link>
        </p>

        {/* Learning */}
        <h2>2. Learning Prompt Examples</h2>

        <ul>
          <li>Explain machine learning</li>
          <li>Explain machine learning like I’m 10 years old</li>
        </ul>

        {/* Productivity */}
        <h2>3. Productivity Prompt Examples</h2>

        <ul>
          <li>Summarize this article</li>
          <li>Summarize in bullet points</li>
        </ul>

        {/* 新增内容 */}
        <h2>4. Business Prompt Examples</h2>

        <ul>
          <li>Write a product description</li>
          <li>Create a marketing email</li>
          <li>Generate social media content</li>
        </ul>

        <h2>5. Common Prompt Mistakes</h2>

        <ul>
          <li>Being too vague</li>
          <li>Missing context</li>
          <li>No format specified</li>
        </ul>

        {/* Tips */}
        <h2>Tips for Better Prompts</h2>

        <ul>
          <li>Be specific</li>
          <li>Add context</li>
          <li>Define format</li>
          <li>Use steps</li>
        </ul>

        <Highlight>
          Always tell the AI exactly what you want.
        </Highlight>

        {/* 内链增强 */}
        <p>
          Start here:
          <Link href="/learn/beginner/what-is-ai"> What is AI </Link> and
          <Link href="/learn/beginner/what-is-llm"> What is LLM</Link>
        </p>

        {/* CTA */}
        <div style={ctaBox}>
          <h3>Want to go deeper?</h3>

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

/* ===== Components ===== */

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
