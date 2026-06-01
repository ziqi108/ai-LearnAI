import Link from "next/link";

export default function BeginnerPage() {
  return (
    <main
      style={{
        padding: "40px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h1>🟢 Beginner AI Course</h1>

        <p style={{ color: "#666" }}>
          Start your journey and understand the fundamentals of AI.
        </p>

        <div style={{ marginTop: "30px" }}>

          <CourseCard
            title="What is Artificial Intelligence?"
            desc="Understand the basics of AI and why it matters."
            link="/learn/beginner/what-is-ai"
          />

          <CourseCard
            title="What is LLM?"
            desc="Learn what Large Language Models are."
            link="/learn/beginner/what-is-llm"
          />

          <CourseCard
            title="How ChatGPT Works"
            desc="A simple explanation of GPT models."
            link="/learn/beginner/how-chatgpt-works"
          />

          <CourseCard
            title="Understanding Large Language Models (LLM Cognition)"
            desc="Learn what Large Language Models are, how they work, their evolution, and real-world applications."
            link="/learn/beginner/llm-cognition"
          />

          <CourseCard
            title="Prompt Basics ✅"
            desc="Learn how to write effective prompts and use AI correctly."
            link="/learn/beginner/prompt-basics"
          />

        </div>
      </div>
    </main>
  );
}

/* 课程卡片组件 */
function CourseCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{title}</h3>
      <p style={{ color: "#555" }}>{desc}</p>

      <Link href={link}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 14px",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Start Lesson →
        </button>
      </Link>
    </div>
  );
}