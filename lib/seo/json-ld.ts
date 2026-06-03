import type { Article, Lesson } from "../content/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-learn-ai-nextjs.vercel.app";

export function lessonJsonLd(lesson: Lesson) {
  const url = `${SITE_URL}/learn/${lesson.level}/${lesson.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.description,
    url,
    educationalLevel: lesson.level,
    timeRequired: `PT${lesson.readMinutes}M`,
    inLanguage: "en",
    isAccessibleForFree: true,
    learningResourceType: "Lesson",
    datePublished: lesson.publishedAt,
    ...(lesson.updatedAt ? { dateModified: lesson.updatedAt } : {}),
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/articles/${article.slug}`,
    datePublished: article.publishedAt,
    inLanguage: "en",
    isAccessibleForFree: true,
  };
}

export function courseJsonLd(course: { title: string; description: string; level: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/learn/${course.level}`,
    provider: { "@type": "Organization", name: "AI Learn Hub" },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
