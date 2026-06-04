import type { Lesson } from "../../lib/content/types";

export const whatIsFineTuning: Lesson = {
  slug: "what-is-fine-tuning",
  level: "advanced",
  title: "What is Fine-tuning in AI?",
  description:
    "Learn how fine-tuning adapts large language models to specific tasks.",
  keywords: ["fine tuning", "LLM training", "AI model"],
  heroSubtitle:
    "Understand how models are customized for real-world applications.",
  badges: ["Advanced", "Lesson 1", "10 min read"],
  order: 1,
  readMinutes: 10,
  publishedAt: "2026-06-04",
  breadcrumbLabel: "Fine-tuning",
  sections: [
    {
      type: "heading",
      text: "What is Fine-tuning?",
    },
    {
      type: "paragraph",
      text:
        "Fine-tuning is the process of training a pre-trained model on a smaller, task-specific dataset.",
    },
    {
      type: "highlight",
      text:
        "Fine-tuning allows models to specialize in specific domains.",
    },
    {
      type: "summary",
      text:
        "Fine-tuning is essential for building production-level AI systems.",
    },
  ],
};