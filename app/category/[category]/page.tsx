import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { getArticlesByCategory, getCategories } from "@/lib/content/articles";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return getCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${category} Articles | AI Learn Hub`,
    description: `Browse AI articles in the ${category} category.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const filtered = getArticlesByCategory(category);

  if (filtered.length === 0 && !getCategories().includes(category)) {
    notFound();
  }

  return (
    <PageShell>
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
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {article.title}
              </h2>
              <p className="mt-2 text-slate-600">{article.description}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:underline"
              >
                Read article →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
