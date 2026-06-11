import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/site/CourseCard";
import { getAllArticles } from "@/lib/content/articles";
import { courses } from "@/lib/content/lessons";

export const metadata: Metadata = {
  title: "AI Learning Hub | Learn AI, LLM & AGI From Scratch",
  description:
    "Master artificial intelligence, large language models, and AGI through step-by-step guides, tutorials, and real-world projects.",
  keywords: [
    "AI learning",
    "LLM tutorial",
    "machine learning",
    "prompt engineering",
    "AI projects",
  ],
  openGraph: {
    title: "AI Learning Hub - Learn AI, LLM & AGI",
    description:
      "Comprehensive courses and tutorials to master AI and build real-world projects.",
    type: "website",
  },
};

const ctaMap = {
  beginner: "Start Learning",
  intermediate: "Continue",
  advanced: "Explore",
  projects: "Start Building",
} as const;

export default function Home() {
  const articles = getAllArticles()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-4 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-100 ring-1 ring-white/20 mb-6">
            Free AI Courses
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Learn AI, LLM &amp; AGI
            <br />
            <span className="text-indigo-200">From Scratch</span>
          </h1>
          <p className="mt-6 text-lg text-indigo-100 sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Step-by-step guides to master AI, large language models, and
            real-world projects — no experience required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/learn"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-all duration-150 active:scale-95"
            >
              Start Learning →
            </Link>
            <Link
              href="/learn/beginner"
              className="rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 transition-all duration-150"
            >
              Beginner Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Learning Paths
          </h2>
          <p className="mt-2 text-slate-500 text-sm">Choose your level and start learning today.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard
              key={course.level}
              title={course.title}
              description={course.description}
              topics={course.topics.slice(0, 4)}
              href={`/learn/${course.level}`}
              color={course.color}
              cta={ctaMap[course.level]}
            />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Latest Articles
            </h2>
            <p className="mt-2 text-slate-500 text-sm">Insights and guides from our team.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500 leading-relaxed">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-950 px-4 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Build Your Own AI?
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Start learning today and build real AI projects from scratch.
          </p>
          <Link
            href="/learn/beginner"
            className="mt-8 inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-150 active:scale-95"
          >
            Begin Your Journey →
          </Link>
        </div>
      </section>
    </main>
  );
}
