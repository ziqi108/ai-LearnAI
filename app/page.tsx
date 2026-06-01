import Link from "next/link";
import type { CSSProperties } from "react";
import { articles } from "../data/articles";

export const metadata = {
  title: "AI Learning Hub | Learn AI, LLM & AGI From Scratch",
  description: "Master artificial intelligence, large language models, and AGI through comprehensive step-by-step guides, tutorials, and real-world projects.",
  keywords: "AI learning, LLM tutorial, machine learning, deep learning, prompt engineering, AI projects",
  openGraph: {
    title: "AI Learning Hub - Learn AI, LLM & AGI",
    description: "Comprehensive courses and tutorials to master AI and build real-world projects.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main style={{
      background: "#f5f7fb",
      minHeight: "100vh"
    }}>

      {/* HERO区域 */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px 80px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff"
      }}>
        <h1 style={{ 
          fontSize: "3rem", 
          lineHeight: "1.2",
          fontWeight: "800",
          marginBottom: "20px"
        }}>
          🚀 Learn AI, LLM & AGI From Scratch
        </h1>

        <p style={{
          marginTop: "20px",
          color: "#e0e7ff",
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "20px auto 0"
        }}>
          Step-by-step guides to master artificial intelligence, large language models, and real-world projects.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link href="/learn">
            <button style={{
              padding: "14px 28px",
              background: "#fff",
              color: "#667eea",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}>
              Start Learning →
            </button>
          </Link>
        </div>
      </section>

      {/* Learn模块 */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px"
      }}>
        <h2 style={{
          fontSize: "2rem",
          marginBottom: "40px",
          color: "#111827"
        }}>
          📘 Learning Paths
        </h2>

        <div style={grid}>

          <Card
            title="🟢 Beginner"
            desc="Understand AI basics and concepts"
            link="/learn/beginner"
          />

          <Card
            title="🟡 Intermediate"
            desc="Learn how models work"
            link="/learn/intermediate"
          />

          <Card
            title="🔴 Advanced"
            desc="Fine-tune and deploy AI models"
            link="/learn/advanced"
          />

          <Card
            title="🚀 Projects"
            desc="Build real AI applications"
            link="/learn/projects"
          />

        </div>
      </section>

      {/* 热门文章（SEO入口） */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        borderTop: "1px solid #e5e7eb"
      }}>
        <h2 style={{
          fontSize: "2rem",
          marginBottom: "40px",
          color: "#111827"
        }}>
          🔥 Latest Articles
        </h2>

        <div style={grid}>
          {articles.slice(0, 4).map(article => (
            <div key={article.slug} style={cardStyle}>
              <div>
                <h3 style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#111827"
                }}>
                  {article.title}
                </h3>
                <p style={{
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {article.description}
                </p>
              </div>

              <div style={buttonRow}>
                <Link href={`/articles/${article.slug}`}>
                  <button style={btnSmall}>Read Article →</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 引导 */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#f8fafc",
        borderTop: "1px solid #e5e7eb"
      }}>
        <h2 style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#111827"
        }}>
          Ready to Build Your Own AI?
        </h2>

        <p style={{ 
          color: "#666",
          fontSize: "1.1rem",
          marginBottom: "30px"
        }}>
          Start learning today and build real AI projects from scratch.
        </p>

        <Link href="/learn">
          <button style={{
            padding: "14px 28px",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600"
          }}>
            Begin Your Journey →
          </button>
        </Link>
      </section>

    </main>
  );
}

/* 卡片组件 */
function Card({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div style={cardStyle}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <div style={buttonRow}>
        <Link href={link}>
          <button style={btnSmall}>Go</button>
        </Link>
      </div>
    </div>
  );
}

/* 样式 */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

const cardStyle: CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "200px"
};

const buttonRow: CSSProperties = {
  marginTop: "20px",
  display: "flex",
  alignItems: "center"
};

const btnPrimary = {
  padding: "12px 20px",
  background: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};

const btnSmall = {
  marginTop: "10px",
  padding: "6px 12px",
  background: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};