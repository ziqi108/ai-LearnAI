import { articles } from "../../../data/articles";
import Link from "next/link";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {

  const { category } = await params;
  const filtered = articles.filter(
    (a) => a.category === category
  );

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1>Category: {category}</h1>

      {filtered.length === 0 && <p>No articles found.</p>}

      {filtered.map(article => (
        <div key={article.slug} style={{ marginBottom: "20px" }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>

          <Link href={`/articles/${article.slug}`}>
            <button>Read</button>
          </Link>
        </div>
      ))}

    </main>
  );
}