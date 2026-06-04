import type { Lesson } from "../../lib/content/types";

export const whatIsRag: Lesson = {
  slug: "what-is-rag",
  level: "intermediate",
  title: "What is RAG (Retrieval-Augmented Generation)?",
  description:
    "Learn how RAG combines retrieval and generation to improve AI accuracy.",
  keywords: ["RAG", "AI retrieval", "LLM architecture"],
  heroSubtitle:
    "Understand how modern AI systems use external knowledge for better results.",
  badges: ["Intermediate", "Lesson 1", "8 min read"],
  order: 1,
  readMinutes: 8,
  publishedAt: "2026-06-04",
  breadcrumbLabel: "RAG",
  sections: [
    {
      type: "heading",
      text: "What is RAG?",
    },
    {
      type: "paragraph",
      text:
        "Retrieval-Augmented Generation (RAG) is a technique that enhances AI by combining external knowledge retrieval with language generation.",
    },
    {
      type: "list",
      items: [
        "Retrieve relevant documents",
        "Use them as context",
        "Generate more accurate answers",
      ],
    },
    {
      type: "highlight",
      text:
        "RAG solves hallucination by grounding AI outputs in real data.",
    },
    {
      type: "summary",
      text:
        "RAG is the foundation of modern AI applications like chatbots, search systems, and enterprise AI tools.",
    },
  ],
};