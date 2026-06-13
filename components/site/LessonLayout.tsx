"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { LessonRenderer } from "./LessonRenderer";
import { PageHero } from "./PageHero";
import { PageShell } from "./PageShell";

export function LessonLayout({ lesson }: { lesson: Lesson }) {
  const levelLabel =
    lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1);

  return (
    <PageShell variant="article" className="!p-0">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <PageHero title={lesson.title} subtitle={lesson.heroSubtitle} badges={lesson.badges} />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 -mt-6">
        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
          <Breadcrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: levelLabel, href: `/learn/${lesson.level}` },
              { label: lesson.breadcrumbLabel ?? lesson.title },
            ]}
          />

          <Link
            href={`/learn/${lesson.level}`}
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline mb-6"
          >
            ← Back to course
          </Link>

          <LessonRenderer sections={lesson.sections} />

          {lesson.nextLesson && (
            <div className="mt-12 text-center border-t border-slate-100 pt-10">
              <h3 className="text-lg font-semibold text-slate-900">Next Lesson</h3>
              <Link
                href={`/learn/${lesson.level}/${lesson.nextLesson.slug}`}
                className="mt-4 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                {lesson.nextLesson.label}
              </Link>
            </div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
