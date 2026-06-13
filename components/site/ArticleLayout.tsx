"use client";

import Link from "next/link";
import type { Article } from "@/lib/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageShell } from "./PageShell";

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <PageShell variant="article">
      <article className="mx-auto max-w-3xl">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Articles", href: `/category/${article.category}` },
              { label: article.title },
            ]}
          />

          <Link
            href="/"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            ← Back to home
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">{article.title}</h1>
          <p className="mt-2 text-slate-500">{article.description}</p>

          <div
            className="article-content mt-8 prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </PageShell>
  );
}
