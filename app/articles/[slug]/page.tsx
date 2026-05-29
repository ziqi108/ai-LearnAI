import { articles } from "../../../data/articles";
import Link from "next/link";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div>Article Not Found</div>;
  }

  return (
    <main style={{
      maxWidth: "800px",
      margin: "auto",
      padding: "40px",
      lineHeight: 1.8
    }}>

      <Link href="/">
        <span style={{ color: "#0070f3", cursor: "pointer" }}>
          ⬅ Back
        </span>
      </Link>

      <h1 style={{ marginTop: "20px" }}>{article.title}</h1>

      <div style={{
        marginTop: "20px",
        fontSize: "16px",
        color: "#333",
        lineHeight: "1.6"
      }} dangerouslySetInnerHTML={{ __html: article.content }} />

    </main>
  );
}