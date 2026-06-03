import type { Lesson } from "../../../lib/content/types";

export const promptBasicsAdvance: Lesson = {
  slug: "prompt-basics-advance",
  level: "beginner",
  title: "Beginner Guide to Prompt Engineering (2026)",
  description:
    "Learn prompt engineering from scratch with simple examples and clear explanations.",
  keywords: ["prompt engineering beginner", "AI prompts 2026"],
  heroSubtitle:
    "From zero to confident — practical prompt patterns for everyday AI use.",
  badges: ["Beginner", "Lesson 7", "8 min read"],
  order: 7,
  readMinutes: 8,
  publishedAt: "2026-03-01",
  breadcrumbLabel: "Prompt Advance",
  sections: [
    {
      type: "heading",
      text: "Start With the Outcome",
    },
    {
      type: "paragraph",
      text: "Before writing a prompt, define what “good” looks like: length, tone, audience, and must-include points.",
    },
    {
      type: "heading",
      text: "Three Prompt Patterns",
    },
    {
      type: "list",
      items: [
        "Explain like I’m 12 — simplifies complex topics",
        "Critique and improve — paste draft, ask for structured feedback",
        "Outline first — request headings, then expand each section",
      ],
    },
    {
      type: "card",
      title: "Study Workflow",
      items: [
        "Try the problem yourself first",
        "Ask AI to explain your mistake",
        "Rewrite the answer in your own words",
      ],
    },
    {
      type: "summary",
      text: "Prompt engineering grows with practice. Revisit fundamentals (AI, LLM, ChatGPT) as you tackle harder tasks.",
    },
  ],
};
