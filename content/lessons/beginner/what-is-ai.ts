import type { Lesson } from "../../../lib/content/types";

/** 教案数据：只改此文件即可更新 /learn/beginner/what-is-ai 页面 */
export const whatIsAi: Lesson = {
  slug: "what-is-ai",
  level: "beginner",
  title: "What is Artificial Intelligence?",
  description:
    "Learn what AI is, how it works, and why it matters. A complete beginner guide to artificial intelligence.",
  keywords: ["artificial intelligence", "AI basics", "beginner AI"],
  heroSubtitle: "A complete beginner guide to understanding AI fundamentals.",
  badges: ["Beginner", "Lesson 1", "8 min read"],
  order: 1,
  readMinutes: 8,
  publishedAt: "2026-01-01",
  breadcrumbLabel: "What is AI",
  nextLesson: { slug: "what-is-llm", label: "What is LLM? →" },
  sections: [
    {
      type: "heading",
      text: "What is AI?",
    },
    {
      type: "paragraph",
      text: "Artificial Intelligence (AI) is a system that enables machines to learn, reason, and make decisions based on data instead of fixed rules.",
    },
    {
      type: "heading",
      text: "Core Capabilities of AI",
    },
    {
      type: "paragraph",
      text: "AI systems can perform tasks that typically require human intelligence:",
    },
    {
      type: "list",
      items: [
        "Perception – recognizing images, speech, and text",
        "Understanding – processing and interpreting information",
        "Reasoning – making decisions based on patterns",
        "Action – generating outputs or executing tasks",
      ],
    },
    {
      type: "highlight",
      text: "AI does not “think like humans.” It finds patterns in data and applies them.",
    },
    {
      type: "heading",
      text: "Why AI Matters",
    },
    {
      type: "paragraph",
      text: "Traditional software requires manually written rules. AI learns from data, making it more scalable and powerful.",
    },
    {
      type: "card",
      title: "Real-World Examples",
      items: [
        "Product recommendations on e-commerce platforms",
        "Email spam detection",
        "Navigation apps suggesting optimal routes",
        "AI-powered medical diagnosis",
      ],
    },
    {
      type: "heading",
      text: "AI is Not a Single Technology",
    },
    {
      type: "paragraph",
      text: "AI includes multiple subfields working together:",
    },
    {
      type: "list",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
      ],
    },
    {
      type: "heading",
      text: "How to Think About AI",
    },
    {
      type: "paragraph",
      text: "AI is not about human-like thinking. Instead, it is about identifying patterns in large amounts of data and applying those patterns to solve problems.",
    },
    {
      type: "heading",
      text: "How to Start Learning AI",
    },
    {
      type: "list",
      items: [
        "Understand what AI does and where it is used",
        "Learn basics of machine learning and deep learning",
        "Move to LLMs, prompt engineering, and AI applications",
      ],
    },
    {
      type: "summary",
      text: "AI is about enabling machines to learn patterns from data and make decisions. Understanding AI fundamentals prepares you for learning advanced topics like LLMs and prompt engineering.",
    },
  ],
};
