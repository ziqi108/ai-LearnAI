"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-4 py-24 text-center text-white sm:py-28">
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
            Step-by-step courses to master artificial intelligence, large language models, and practical prompt engineering.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/path"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-all duration-150 active:scale-95"
            >
              Generate My Path
            </Link>
            <Link
              href="/learn"
              className="rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/25 hover:bg-white/20 transition-all duration-150"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Path Generator Callout */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <Link
          href="/path"
          className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-8 text-white shadow-xl ring-1 ring-indigo-600 transition-all duration-200 hover:shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
                🎯 Personalized Path
              </span>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Tell us your goal — we'll build your learning plan
              </h3>
              <p className="mt-2 max-w-2xl text-indigo-100 leading-relaxed">
                Whether you want to become a prompt engineer, build AI applications, or understand LLMs deeply, our path generator maps out the right lessons for you.
              </p>
            </div>
            <div className="inline-flex shrink-0 rounded-xl bg-white px-5 py-3 text-base font-semibold text-indigo-700 shadow ring-1 ring-white/30 group-hover:bg-indigo-50">
              Start Now →
            </div>
          </div>
        </Link>
      </section>

      {/* Learning Paths */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Course Levels</h2>
          <p className="mt-2 text-sm text-slate-500">Choose a level to start your AI journey.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              level: "beginner",
              color: "emerald",
              title: "Beginner",
              desc: "Understand what AI is — and what it isn't. Perfect for people starting from zero.",
            },
            {
              level: "intermediate",
              color: "amber",
              title: "Intermediate",
              desc: "Dive into how models work and practical techniques like RAG and prompting.",
            },
            {
              level: "advanced",
              color: "rose",
              title: "Advanced",
              desc: "Model training and fine-tuning (LoRA, QLoRA) — build production-ready systems.",
            },
            {
              level: "projects",
              color: "sky",
              title: "Projects",
              desc: "Build real AI applications from scratch: chatbots, knowledge bases, agents.",
            },
          ].map((level) => {
            const colorMap: Record<string, string> = {
              emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
              amber: "bg-amber-50 text-amber-700 ring-amber-200",
              rose: "bg-rose-50 text-rose-700 ring-rose-200",
              sky: "bg-sky-50 text-sky-700 ring-sky-200",
            };
            const badge = colorMap[level.color] ?? colorMap.emerald;
            return (
              <Link
                href={`/learn/${level.level}`}
                key={level.level}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`inline-flex items-center self-start rounded-full px-3 py-1 text-xs font-semibold ring-1 ${badge}`}
                >
                  {level.title}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {level.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {level.desc}
                </p>
                <span className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-500">
                  View Lessons →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Articles</h2>
            <p className="mt-2 text-sm text-slate-500">
              Explore in-depth guides on AI, LLMs, and practical engineering.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "How do LLMs generate text?",
                desc: "A plain-English walkthrough from tokens and embeddings to next-token prediction.",
                href: "/articles/llm-works",
              },
              {
                title: "10 golden rules of prompting",
                desc: "Curated patterns for writing effective prompts — with examples and pitfalls.",
                href: "/articles/prompting-10",
              },
              {
                title: "What is RAG and why it matters",
                desc: "Retrieval-augmented generation is the key to giving LLMs access to private knowledge.",
                href: "/articles/rag-intro",
              },
              {
                title: "Building a production chatbot from scratch",
                desc: "From API calls and conversation history to prompt debugging and deployment.",
                href: "/articles/chatbot",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500 leading-relaxed">
                  {article.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Read Article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-950 px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start your AI journey?
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Generate a personalized learning path and start learning today — free.
          </p>
          <Link
            href="/path"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-all duration-150 active:scale-95"
          >
            Generate My Path →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} AI Learn Hub — All courses are free.
        </div>
      </footer>
    </main>
  );
}
