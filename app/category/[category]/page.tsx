import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { getArticlesByCategory, getCategories } from "@/lib/content/articles";

type Props = { params: Promise<{ category: string }> };

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const filtered = category ? getArticlesByCategory(category) : [];

  if (filtered.length === 0 && category && !getCategories().includes(category)) {
    notFound();
    return null;
  }

  return (
    <PageShell>
      <div className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Articles</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 capitalize">
        {category} Articles
      </h1>

      {filtered.length === 0 ? (
        <p className="mt-6 text-slate-600">No articles in this category yet.</p>
      ) : (
        <ul className="mt-8 space-y-6">
          {filtered.map((article) => (
            <li
              key={article.slug}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-900">{article.title}</h2>
              <p className="mt-2 text-slate-600">{article.description}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:underline"
              >
                Read Article →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
