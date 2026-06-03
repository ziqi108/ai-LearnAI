import type { Lesson } from "../../../lib/content/types";

export const whatIsLlm: Lesson = {
  slug: "what-is-llm",
  level: "beginner",
  title: "What is a Large Language Model?",
  description:
    "Learn what LLMs are, how they work, and why they power AI tools like ChatGPT. A clear beginner-friendly guide.",
  keywords: ["LLM", "large language model", "ChatGPT"],
  heroSubtitle: "Understand how LLMs power tools like ChatGPT.",
  badges: ["Beginner", "Lesson 2", "7 min read"],
  order: 2,
  readMinutes: 7,
  publishedAt: "2026-01-05",
  breadcrumbLabel: "LLM",
  nextLesson: { slug: "how-chatgpt-works", label: "How ChatGPT Works →" },
  sections: [
    {
      type: "heading",
      text: "What is an LLM?",
    },
    {
      type: "paragraph",
      text: "A Large Language Model (LLM) is an AI system trained on massive amounts of text data to understand and generate human language.",
    },
    {
      type: "list",
      items: [
        "Understands user input",
        "Generates contextual responses",
        "Adapts tone and format based on prompts",
      ],
    },
    {
      type: "highlight",
      text: "Think of an LLM as a highly trained “language intelligence system.”",
    },
    {
      type: "heading",
      text: "Why LLMs Are So Powerful",
    },
    {
      type: "paragraph",
      text: "LLMs learn from billions of words and sentences, giving them strong language abilities.",
    },
    {
      type: "list",
      items: [
        "Grammar and structure understanding",
        "Context awareness",
        "Logical relationships between ideas",
        "Flexible expression styles",
      ],
    },
    {
      type: "card",
      title: "Simple Analogy",
      text: "If language is a tool, an LLM is a master who has practiced using that tool across billions of examples.",
    },
    {
      type: "heading",
      text: "Real-World Applications",
    },
    {
      type: "list",
      items: [
        "Content writing",
        "Code generation",
        "Customer support AI",
        "Translation tools",
        "Learning assistants",
        "Summarization systems",
      ],
    },
    {
      type: "heading",
      text: "What You Should Learn Next",
    },
    {
      type: "paragraph",
      text: "Understanding LLMs is only the beginning. The next step is learning how to interact with them effectively.",
    },
    {
      type: "list",
      items: ["Prompt design", "Clear task instructions", "Structured outputs"],
    },
    {
      type: "summary",
      text: "LLMs are AI systems designed to understand and generate language. They are the core technology behind modern AI tools like ChatGPT.",
    },
  ],
};
