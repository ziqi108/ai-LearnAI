import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-learn-ai-nextjs.vercel.app";

  const pages = [
    "",
    "/learn",
    "/learn/beginner",
    "/learn/beginner/what-is-ai",
    "/learn/beginner/what-is-llm",
    "/learn/beginner/how-chatgpt-works",
    "/learn/beginner/prompt-basics",
    "/learn/prompt-engineering-guide",
    "/learn/prompt-engineering-examples",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}