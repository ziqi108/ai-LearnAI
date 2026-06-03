import type { Lesson } from "../../../lib/content/types";

export const promptEngineeringGuide: Lesson = {
  slug: "prompt-engineering-guide",
  level: "beginner",
  title: "Prompt Engineering Guide 2026",
  description:
    "Master prompt engineering with techniques, examples, and best practices. Learn how to write better prompts for ChatGPT and AI tools.",
  keywords: ["prompt engineering guide", "ChatGPT techniques", "2026"],
  heroSubtitle:
    "Techniques, examples, and best practices for reliable AI outputs.",
  badges: ["Beginner", "Lesson 6", "12 min read"],
  order: 6,
  readMinutes: 12,
  publishedAt: "2026-02-15",
  breadcrumbLabel: "Prompt Guide",
  nextLesson: { slug: "prompt-basics-advance", label: "Advanced Prompt Basics →" },
  sections: [
    {
      type: "heading",
      text: "Core Prompt Techniques",
    },
    {
      type: "list",
      items: [
        "Zero-shot — direct instruction without examples",
        "Few-shot — provide 1–3 examples of desired output",
        "Chain-of-thought — ask the model to reason step by step",
        "Role prompting — “You are an expert teacher…”",
      ],
    },
    {
      type: "heading",
      text: "Structure for Reliable Results",
    },
    {
      type: "paragraph",
      text: "Use a consistent template: Role + Context + Task + Constraints + Output format.",
    },
    {
      type: "card",
      title: "Template",
      text: "You are a [role]. Context: [facts]. Task: [goal]. Constraints: [limits]. Output: [format].",
    },
    {
      type: "heading",
      text: "Common Mistakes",
    },
    {
      type: "list",
      items: [
        "Vague goals without success criteria",
        "Too many conflicting instructions",
        "No examples when format is strict",
        "Trusting outputs without verification",
      ],
    },
    {
      type: "highlight",
      text: "For production workflows, combine prompting with retrieval (RAG) and evaluation checks.",
    },
    {
      type: "summary",
      text: "Prompt engineering is an iterative skill — test, measure, and refine prompts like product features.",
    },
  ],
};
