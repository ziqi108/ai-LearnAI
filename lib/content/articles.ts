import type { Article } from "./types";
import { articles as articleData } from "../../content/articles";

export function getAllArticles(): Article[] {
  return articleData;
}

export function getArticle(slug: string): Article | undefined {
  return articleData.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articleData.filter((a) => a.category === category);
}

export function getArticleSlugs(): string[] {
  return articleData.map((a) => a.slug);
}

export function getCategories(): string[] {
  return [...new Set(articleData.map((a) => a.category))];
}
