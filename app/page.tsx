import Link from "next/link";
import type { CSSProperties } from "react";
import { articles } from "../data/articles";

export default function Home() {
  return (
    <main style={{
      background: "#f5f7fb",
      minHeight: "100vh"
    }}>

      {/* HERO区域 */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "42px", lineHeight: "1.2" }}>
          🚀 Learn AI, LLM & AGI From Scratch
        </h1>

        <p style={{
          marginTop: "20px",
          color: "#666",
          fontSize: "18px"
        }}>
          Step-by-step guides to master AI, fine-tuning, and real-world projects.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link href="/learn">
            <button style={btnPrimary}>Start Learning</button>
          </Link>
        </div>
      </section>

      {/* Learn模块 */}
      <section style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "40px 20px"
      }}>
        <h2>📘 Learning Paths</h2>

        <div style={grid}>

          <Card
            title="Beginner"
            desc="Understand AI basics and concepts"
            link="/learn/beginner"
          />

          <Card
            title="Intermediate"
            desc="Learn how models work"
            link="/learn/intermediate"
          />

          <Card
            title="Advanced"
            desc="Fine-tune and deploy AI models"
            link="/learn/advanced"
          />

          <Card
            title="Projects"
            desc="Build real AI applications"
            link="/learn/projects"
          />

        </div>
      </section>

      {/* 热门文章（SEO入口） */}
      <section style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "40px 20px"
      }}>
        <h2>🔥 Latest Articles</h2>

        <div style={grid}>
          {articles.slice(0, 4).map(article => (
            <div key={article.slug} style={cardStyle}>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>

              <div style={buttonRow}>
                <Link href={`/articles/${article.slug}`}>
                  <button style={btnSmall}>Read</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 引导 */}
      <section style={{
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2>Ready to Build Your Own AI?</h2>

        <p style={{ color: "#666" }}>
          Start learning today and build real AI projects.
        </p>

        <Link href="/learn">
          <button style={btnPrimary}>Start Now</button>
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