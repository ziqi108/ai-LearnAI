import { CourseCard } from "@/components/site/CourseCard";
import { courses } from "@/lib/content/lessons";

export default function LearnPage() {
  const ctaMap: Record<string, string> = {
    beginner: "View Lessons",
    intermediate: "View Lessons",
    advanced: "View Lessons",
    projects: "View Lessons",
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Learn AI — From Basics to Production
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Structured courses covering fundamentals, prompting, model fine-tuning, and real-world AI application building.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard
              key={course.level}
              title={course.title}
              description={course.description}
              topics={course.topics}
              href={`/learn/${course.level}`}
              color={course.color}
              cta={ctaMap[course.level] || "View Lessons"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
