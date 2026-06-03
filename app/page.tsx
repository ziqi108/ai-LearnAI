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
  beginner: "Start →",
  intermediate: "Continue →",
  advanced: "Explore →",
  projects: "Build →",
} as const;

export default function Home() {
  const articles = getAllArticles()
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 px-4 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            🚀 Learn AI, LLM & AGI From Scratch
          </h1>
          <p className="mt-6 text-lg text-indigo-100 sm:text-xl">
            Step-by-step guides to master AI, large language models, and
            real-world projects.
          </p>
          <Link
            href="/learn"
            className="mt-10 inline-flex rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-colors"
          >
            Start Learning →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          📘 Learning Paths
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            🔥 Latest Articles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-slate-600">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-100 px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Ready to Build Your Own AI?
        </h2>
        <p className="mt-3 text-slate-600">
          Start learning today and build real AI projects from scratch.
        </p>
        <Link
          href="/learn/beginner"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Begin Your Journey →
        </Link>
      </section>
    </main>
  );
}
