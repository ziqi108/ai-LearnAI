import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import { getArticle, getArticleSlugs } from "@/lib/content/articles";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | AI Learn Hub`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
    alternates: { canonical: `/articles/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = [
    articleJsonLd(article),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: article.category, path: `/category/${article.category}` },
      { name: article.title, path: `/articles/${article.slug}` },
    ]),
  ];

  return (
    <>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <ArticleLayout article={article} />
    </>
  );
}
