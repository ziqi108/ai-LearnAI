import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonLayout } from "@/components/site/LessonLayout";
import {
  getLesson,
  getLessonParams,
} from "@/lib/content/lessons";
import type { CourseLevel } from "@/lib/content/types";
import { breadcrumbJsonLd, lessonJsonLd } from "@/lib/seo/json-ld";

type Props = { params: Promise<{ level: string; slug: string }> };

export async function generateStaticParams() {
  return getLessonParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, slug } = await params;
  const lesson = getLesson(level as CourseLevel, slug);
  if (!lesson) return { title: "Lesson Not Found" };

  return {
    title: lesson.title,
    description: lesson.description,
    keywords: lesson.keywords,
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      type: "article",
    },
    alternates: {
      canonical: `/learn/${lesson.level}/${lesson.slug}`,
    },
  };
}

export default async function LessonPage({ params }: Props) {
  const { level, slug } = await params;
  const lesson = getLesson(level as CourseLevel, slug);
  if (!lesson) notFound();

  const levelLabel =
    lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1);

  const jsonLd = [
    lessonJsonLd(lesson),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: levelLabel, path: `/learn/${lesson.level}` },
      { name: lesson.title, path: `/learn/${lesson.level}/${lesson.slug}` },
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
      <LessonLayout lesson={lesson} />
    </>
  );
}
