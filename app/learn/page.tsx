import type { Metadata } from "next";
import { CourseCard } from "@/components/site/CourseCard";
import { PageShell } from "@/components/site/PageShell";
import { courses } from "@/lib/content/lessons";

export const metadata: Metadata = {
  title: "AI Learning Paths | Beginner to Advanced Courses",
  description:
    "Choose your learning path: Beginner fundamentals, Intermediate model training, Advanced deployment, or hands-on Projects.",
  keywords: [
    "AI courses",
    "machine learning tutorial",
    "LLM learning",
    "prompt engineering",
  ],
  openGraph: {
    title: "AI Learning Paths - Find Your Course Level",
    description: "Learn AI from beginner basics to advanced model deployment.",
    type: "website",
  },
};

const ctaMap = {
  beginner: "Start Learning →",
  intermediate: "Continue →",
  advanced: "Explore →",
  projects: "Build Now →",
} as const;

export default function LearnPage() {
  return (
    <PageShell>
      <header className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          🚀 Learn AI Step-by-Step
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Master AI, LLM, and AGI from beginner to advanced. Choose your path
          and start building today.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {courses.map((course) => (
          <CourseCard
            key={course.level}
            title={course.title}
            description={course.description}
            topics={course.topics}
            href={`/learn/${course.level}`}
            color={course.color}
            cta={ctaMap[course.level]}
          />
        ))}
      </div>
    </PageShell>
  );
}
