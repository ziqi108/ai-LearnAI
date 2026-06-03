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

  return paths.map((path) => {
    let priority = 0.8;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

    if (path === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (path === "/learn") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (path.startsWith("/learn/") && path.split("/").length === 3) {
      priority = 0.85;
      changeFrequency = "weekly";
    } else if (path.startsWith("/learn/") && path.split("/").length > 3) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (path.startsWith("/articles/")) {
      priority = 0.75;
      changeFrequency = "monthly";
    } else if (path.startsWith("/category/")) {
      priority = 0.7;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
