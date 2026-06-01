import Link from "next/link";

export const metadata = {
  title: "AI Learning Paths | Beginner to Advanced Courses",
  description: "Choose your learning path: Beginner fundamentals, Intermediate model training, Advanced deployment, or hands-on Projects. Master AI step by step.",
  keywords: "AI courses, machine learning tutorial, LLM learning, prompt engineering, AI projects",
  openGraph: {
    title: "AI Learning Paths - Find Your Course Level",
    description: "Learn AI from beginner basics to advanced model deployment.",
    type: "website",
  },
};

export default function LearnPage() {
  return (
    <main style={{
      padding: "20px",
      background: "#f5f7fb",
      minHeight: "100vh"
    }}>

      {/* 标题 */}
      <div style={{ textAlign: "center", marginBottom: "50px", maxWidth: "900px", margin: "0 auto 50px" }}>
        <h1 style={{ 
          fontSize: "2.5rem",
          fontWeight: "800",
          marginBottom: "20px",
          color: "#111827"
        }}>
          🚀 Learn AI Step-by-Step
        </h1>

        <p style={{ 
          color: "#666", 
          marginTop: "10px",
          fontSize: "1.1rem",
          lineHeight: "1.6"
        }}>
          Master AI, LLM, and AGI from beginner to advanced. Choose your learning path and start building AI projects today.
        </p>
      </div>

      {/* 卡片区 */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        margin: "auto"
      }}>

        {/* Beginner */}
        <div style={{...cardStyle, borderTop: "4px solid #22c55e"}}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>🟢 Beginner</h2>
          <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
            Start from scratch. Learn AI basics and fundamentals.
          </p>

          <ul style={{
            color: "#555",
            marginBottom: "20px",
            paddingLeft: "20px",
            lineHeight: "1.8"
          }}>
            <li>What is AI?</li>
            <li>What is LLM?</li>
            <li>How ChatGPT works</li>
            <li>Prompt Basics</li>
          </ul>

          <Link href="/learn/beginner" style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#22c55e",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            transition: "background 0.2s"
          }}>
            Start Learning →
          </Link>
        </div>

        {/* Intermediate */}
        <div style={{...cardStyle, borderTop: "4px solid #f59e0b"}}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>🟡 Intermediate</h2>
          <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
            Understand models and prompting techniques.
          </p>

          <ul style={{
            color: "#555",
            marginBottom: "20px",
            paddingLeft: "20px",
            lineHeight: "1.8"
          }}>
            <li>Transformer Models</li>
            <li>Prompt Engineering</li>
            <li>Embeddings</li>
            <li>RAG Systems</li>
          </ul>

          <Link href="/learn/intermediate" style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#f59e0b",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            transition: "background 0.2s"
          }}>
            Continue →
          </Link>
        </div>

        {/* Advanced */}
        <div style={{...cardStyle, borderTop: "4px solid #ef4444"}}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>🔴 Advanced</h2>
          <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
            Train and fine-tune models for production.
          </p>

          <ul style={{
            color: "#555",
            marginBottom: "20px",
            paddingLeft: "20px",
            lineHeight: "1.8"
          }}>
            <li>Fine-tuning LLM</li>
            <li>LoRA Training</li>
            <li>Deploy AI APIs</li>
            <li>Optimization</li>
          </ul>

          <Link href="/learn/advanced" style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#ef4444",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            transition: "background 0.2s"
          }}>
            Explore →
          </Link>
        </div>

        {/* Projects */}
        <div style={{...cardStyle, borderTop: "4px solid #3b82f6"}}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>🚀 Projects</h2>
          <p style={{ color: "#666", marginBottom: "20px", lineHeight: "1.6" }}>
            Build real AI applications and portfolios.
          </p>

          <ul style={{
            color: "#555",
            marginBottom: "20px",
            paddingLeft: "20px",
            lineHeight: "1.8"
          }}>
            <li>AI Chatbot</li>
            <li>Study Assistant</li>
            <li>AI Writing Tool</li>
            <li>More Projects</li>
          </ul>

          <Link href="/learn/projects" style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#3b82f6",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            transition: "background 0.2s"
          }}>
            Build Now →
          </Link>
        </div>

      </div>
    </main>
  );
}

/* 卡片样式 */
const cardStyle = {
  background: "#ffffff",
  padding: "28px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "transform 0.2s, box-shadow 0.2s"
};