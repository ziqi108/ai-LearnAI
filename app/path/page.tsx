"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

type PathStage = {
  id: string;
  level: "beginner" | "intermediate" | "advanced" | "projects";
  title: string;
  summary: string;
  estimatedHours: number;
  lessons: {
    slug: string;
    title: string;
    level: string;
    href: string;
  }[];
};

type GeneratedPath = {
  goal: string;
  title: string;
  introduction: string;
  stages: PathStage[];
  keywords: string[];
};

const STAGE_COLOR: Record<string, { ring: string; badge: string; level: string }> = {
  beginner: {
    ring: "ring-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    level: "Beginner",
  },
  intermediate: {
    ring: "ring-amber-200",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    level: "Intermediate",
  },
  advanced: {
    ring: "ring-rose-200",
    badge: "bg-rose-50 text-rose-700 ring-rose-200",
    level: "Advanced",
  },
  projects: {
    ring: "ring-sky-200",
    badge: "bg-sky-50 text-sky-700 ring-sky-200",
    level: "Projects",
  },
};

export default function PathPage() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [path, setPath] = useState<GeneratedPath | null>(null);
  const [aiAvailable, setAiAvailable] = useState(false);
  const [aiUsed, setAiUsed] = useState(false);
  const [aiProvider, setAiProvider] = useState<string | null>(null);

  useEffect(() => {
    async function checkAIAvailable() {
      try {
        const res = await fetch("/api/path");
        const body = await res.json();
        setAiAvailable(body.aiAvailable ?? false);
        setAiProvider(body.aiProvider ?? null);
      } catch {
        setAiAvailable(false);
      }
    }
    checkAIAvailable();
  }, []);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = goal.trim();
    if (!trimmed) {
      setError("Please enter a learning goal.");
      return;
    }
    setError("");
    setLoading(true);
    setPath(null);
    try {
      const res = await fetch("/api/path", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: trimmed, language: "en", useAI: aiAvailable }),
      });
      const body = await res.json();
      if (!body.ok) {
        setError(body.error ?? "Something went wrong. Please try again.");
      } else {
        setPath(body.data);
        setAiUsed(body.aiUsed ?? false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const exampleGoals = [
    "I want to become a prompt engineer",
    "How do LLMs generate text?",
    "Build an AI chatbot from scratch",
    "Learn AI fundamentals for beginners",
    "Understand RAG and retrieval systems",
    "Fine-tune a model like LoRA",
  ];

  const totalHours = useMemo(
    () => path?.stages.reduce((sum, s) => sum + s.estimatedHours, 0) ?? 0,
    [path]
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero + input area */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-100 ring-1 ring-white/20 mb-6">
            🎯 Personalized Learning
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            AI Learning Path Generator
            <br />
            <span className="text-indigo-200">Made for You</span>
          </h1>
          <p className="mt-6 text-lg text-indigo-100 sm:text-xl leading-relaxed">
            Describe what you want to learn, and we'll build a custom learning plan with the right lessons for your goal.
          </p>

          <form onSubmit={submit} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. I want to become an AI engineer"
                aria-label="Your learning goal"
                className="w-full sm:min-w-[340px] sm:flex-1 rounded-xl border-0 bg-white/95 px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 shadow focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50 transition-all duration-150 active:scale-95 disabled:bg-white/60 disabled:cursor-not-allowed"
              >
                {loading ? "Generating..." : "Generate Path"}
              </button>
            </div>

            {/* AI Status Badge */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {aiAvailable ? (
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-500/30">
                  ✨ Enhanced by AI
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-white/20">
                  🤖 Rule-based matching
                </span>
              )}
            </div>
            
            {error && <p className="mt-4 text-sm text-amber-200">{error}</p>}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {exampleGoals.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setGoal(ex)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-100 ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  {ex}
                </button>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* Path result */}
      {path && (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Your Personalized Plan
              </p>
              {aiUsed && (
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  ✨ {aiProvider || "AI"} Enhanced
                </span>
              )}
            </div>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              {path.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600 leading-relaxed">
              {path.introduction}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Total estimated time: {totalHours}h
            </p>
          </div>

          <ol className="space-y-6">
            {path.stages.map((stage, idx) => {
              const color = STAGE_COLOR[stage.level] ?? STAGE_COLOR.beginner;
              return (
                <li
                  key={stage.id}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${color.badge}`}
                      >
                        {color.level}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-slate-900">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                        {stage.summary}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wider">
                        Stage
                      </div>
                      <div className="text-3xl font-extrabold text-indigo-600">
                        {idx + 1}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        ≈ {stage.estimatedHours}h
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-semibold text-slate-700">
                      Recommended Lessons
                    </h4>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {stage.lessons.map((lesson) => (
                        <li key={lesson.href}>
                          <Link
                            href={lesson.href}
                            className="group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-150 hover:border-indigo-300 hover:bg-indigo-50"
                          >
                            <span className="text-xs uppercase font-semibold text-indigo-600">
                              {lesson.level === "beginner"
                                ? "Beginner"
                                : lesson.level === "intermediate"
                                  ? "Intermediate"
                                  : lesson.level === "advanced"
                                    ? "Advanced"
                                    : "Projects"}
                            </span>
                            <span className="mt-2 text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                              {lesson.title}
                            </span>
                            <span className="mt-3 text-sm font-medium text-indigo-700 group-hover:text-indigo-600">
                              Open Lesson →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Ready to start learning?</h3>
            <p className="mt-2 text-slate-300 leading-relaxed">
              Jump into the beginner course, or explore hands-on projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/learn/beginner"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50 transition-all"
              >
                Beginner Course
              </Link>
              <Link
                href="/learn/projects"
                className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-400 transition-all"
              >
                Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Initial guidance cards (shown before generating) */}
      {!path && (
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Start with the basics</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                If you're new to AI, begin with the Beginner course to understand what AI is and how models work.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Master prompting</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Learn how to write prompts that get reliable, high-quality results from any AI model.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Build real applications</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Project-based learning helps you understand how to architect and deploy AI-powered products.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Go deep into models</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Advanced topics like model fine-tuning and training help you become a well-rounded AI engineer.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
