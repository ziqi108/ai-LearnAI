import Link from "next/link";

export default function LearnPage() {
  return (
    <main style={{
      padding: "40px",
      background: "#f5f7fb",
      minHeight: "100vh"
    }}>

      {/* 标题 */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px" }}>
          🚀 Learn AI Step-by-Step
        </h1>

        <p style={{ color: "#666", marginTop: "10px" }}>
          Master AI, LLM, and AGI from beginner to advanced.
        </p>
      </div>

      {/* 卡片区 */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>

        {/* Beginner */}
        <div style={cardStyle}>
          <h2>🟢 Beginner</h2>
          <p>Start from scratch. Learn AI basics.</p>

          <ul>
            <li>What is AI?</li>
            <li>What is LLM?</li>
            <li>How ChatGPT works</li>
          </ul>

          <Link href="/learn/beginner" style={btnStyle}>Start Learning</Link>
        </div>

        {/* Intermediate */}
        <div style={cardStyle}>
          <h2>🟡 Intermediate</h2>
          <p>Understand models and prompting.</p>

          <ul>
            <li>Transformer Models</li>
            <li>Prompt Engineering</li>
            <li>Embeddings</li>
          </ul>

          <Link href="/learn/intermediate" style={btnStyle}>Continue</Link>
        </div>

        {/* Advanced */}
        <div style={cardStyle}>
          <h2>🔴 Advanced</h2>
          <p>Train and fine-tune models.</p>

          <ul>
            <li>Fine-tuning LLM</li>
            <li>LoRA Training</li>
            <li>Deploy AI APIs</li>
          </ul>

          <Link href="/learn/advanced" style={btnStyle}>Explore</Link>
        </div>

        {/* Projects */}
        <div style={cardStyle}>
          <h2>🚀 Projects</h2>
          <p>Build real AI applications.</p>

          <ul>
            <li>AI Chatbot</li>
            <li>Study Assistant</li>
            <li>AI Writing Tool</li>
          </ul>

          <Link href="/learn/projects" style={btnStyle}>Build Now</Link>
        </div>

      </div>
    </main>
  );
}

/* 卡片样式 */
const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
};

/* 按钮样式 */
const btnStyle = {
  marginTop: "15px",
  padding: "8px 14px",
  background: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};