import type { Lesson } from "../../../lib/content/types";

export const promptBasics: Lesson = {
  slug: "prompt-basics",
  level: "beginner",
  title: "Prompt Engineering Basics",
  description:
    "Learn what prompt engineering is and how to write better prompts for AI tools like ChatGPT.",
  keywords: ["prompt engineering", "ChatGPT prompts", "AI prompts"],
  heroSubtitle: "Learn how to write effective prompts and unlock the power of AI.",
  badges: ["Beginner", "Lesson 5", "10 min read"],
  order: 5,
  readMinutes: 10,
  publishedAt: "2026-02-01",
  breadcrumbLabel: "Prompt Basics",
  nextLesson: { slug: "prompt-engineering-guide", label: "Prompt Engineering Guide →" },
  sections: [
    {
      type: "heading",
      text: "What is a Prompt?",
    },
    {
      type: "paragraph",
      text: "A prompt is the instruction you give to an AI model. It defines what the AI should do.",
    },
    {
      type: "list",
      items: [
        "Ask a question",
        "Give instructions",
        "Provide context",
        "Specify output format",
      ],
    },
    {
      type: "heading",
      text: "Why Prompt Engineering Matters",
    },
    {
      type: "paragraph",
      text: "Small changes in wording can dramatically change AI output quality, accuracy, and usefulness.",
    },
    {
      type: "list",
      items: [
        "Be specific about the task",
        "Include role, audience, and constraints",
        "Ask for step-by-step reasoning when needed",
        "Iterate based on the first response",
      ],
    },
    {
      type: "card",
      title: "Example: Weak vs Strong",
      text: "Weak: “Write about AI.” — Strong: “Explain what AI is to a high school student in 150 words with 3 bullet takeaways.”",
    },
    {
      type: "highlight",
      text: "Treat prompts like briefs: context + task + format + quality bar.",
    },
    {
      type: "summary",
      text: "Good prompts turn general models into focused assistants. Practice writing clear, structured instructions.",
    },
  ],
};
