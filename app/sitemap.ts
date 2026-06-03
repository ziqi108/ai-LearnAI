import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content/articles";
import { getAllLessons, courses } from "@/lib/content/lessons";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-learn-ai-nextjs.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/learn"];
  const coursePaths = courses.map((c) => `/learn/${c.level}`);
  const lessonPaths = getAllLessons().map(
    (l) => `/learn/${l.level}/${l.slug}`
  );
  const articlePaths = getAllArticles().map((a) => `/articles/${a.slug}`);
  const categoryPaths = [...new Set(getAllArticles().map((a) => a.category))].map(
    (c) => `/category/${c}`
  );

  const paths = [
    ...staticPaths,
    ...coursePaths,
    ...lessonPaths,
    ...articlePaths,
    ...categoryPaths,
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("/learn/") && path.split("/").length > 3
      ? "monthly"
      : "weekly",
    priority: path === "" ? 1 : path === "/learn" ? 0.9 : 0.8,
  }));
}
