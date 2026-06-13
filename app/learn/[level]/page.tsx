import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourse, getLessonsByLevel } from "@/lib/content/lessons";
import type { CourseLevel } from "@/lib/content/types";

type Props = { params: Promise<{ level: string }> };

export default async function CourseLevelPage({ params }: Props) {
  const { level } = await params;
  const course = getCourse(level as CourseLevel);
  if (!course) {
    notFound();
    return null;
  }

  const lessons = getLessonsByLevel(course.level as CourseLevel);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200">
            {course.title}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {course.title} Course
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {course.description}
          </p>
        </header>

        {lessons.length > 0 ? (
          <ul className="space-y-5">
            {lessons.map((lesson) => (
              <li
                key={lesson.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-slate-900">
                      {lesson.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {lesson.badges?.map((badge: string) => (
                        <span
                          key={badge}
                          className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/learn/${lesson.level}/${lesson.slug}`}
                    className="shrink-0 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                  >
                    Start Lesson →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
            <p className="text-slate-600">
              More lessons coming soon. In the meantime, check out the{" "}
              <Link
                href="/learn/beginner"
                className="text-indigo-600 font-medium hover:underline"
              >
                Beginner course
              </Link>
              .
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
