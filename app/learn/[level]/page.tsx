import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonListCard } from "@/components/site/LessonListCard";
import { PageShell } from "@/components/site/PageShell";
import { courses, getCourse, getLessonsByLevel } from "@/lib/content/lessons";
import type { CourseLevel } from "@/lib/content/types";
import { breadcrumbJsonLd, courseJsonLd } from "@/lib/seo/json-ld";

const LEVELS = courses.map((c) => c.level);

type Props = { params: Promise<{ level: string }> };

export async function generateStaticParams() {
  return LEVELS.map((level) => ({ level }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const course = getCourse(level as CourseLevel);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} AI Course | AI Learn Hub`,
    description: course.description,
    openGraph: {
      title: `${course.title} — AI Learn Hub`,
      description: course.description,
      type: "website",
    },
  };
}

export default async function CourseLevelPage({ params }: Props) {
  const { level } = await params;
  const course = getCourse(level as CourseLevel);
  if (!course) notFound();

  const lessons = getLessonsByLevel(course.level);
  const emoji =
    course.level === "beginner"
      ? "🟢"
      : course.level === "intermediate"
        ? "🟡"
        : course.level === "advanced"
          ? "🔴"
          : "🚀";

  const jsonLd = [
    courseJsonLd({
      title: course.title,
      description: course.description,
      level: course.level,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: course.title, path: `/learn/${course.level}` },
    ]),
  ];

  return (
    <PageShell>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <header className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          {emoji} {course.title} AI Course
        </h1>
        <p className="mt-4 text-lg text-slate-600">{course.description}</p>
      </header>

      {lessons.length > 0 ? (
        <div className="mx-auto max-w-2xl space-y-5">
          {lessons.map((lesson) => (
            <LessonListCard
              key={lesson.slug}
              title={lesson.title}
              description={lesson.description}
              href={`/learn/${lesson.level}/${lesson.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-xl bg-white p-8 text-center shadow-md">
          <p className="text-slate-600">
            Lessons for this path are coming soon. Check back or start with{" "}
            <a href="/learn/beginner" className="text-blue-600 font-medium hover:underline">
              Beginner
            </a>
            .
          </p>
        </div>
      )}
    </PageShell>
  );
}
