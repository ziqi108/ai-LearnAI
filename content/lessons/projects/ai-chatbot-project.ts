import type { Lesson } from "../../lib/content/types";

export const aiChatbotProject: Lesson = {
  slug: "ai-chatbot-project",
  level: "projects",
  title: "Build an AI Chatbot",
  description:
    "Step-by-step guide to building a real AI chatbot application.",
  keywords: ["AI project", "chatbot", "application"],
  heroSubtitle:
    "Learn how to build and deploy your own AI chatbot.",
  badges: ["Project", "Lesson 1", "15 min read"],
  order: 1,
  readMinutes: 15,
  publishedAt: "2026-06-04",
  breadcrumbLabel: "Chatbot Project",
  sections: [
    {
      type: "heading",
      text: "Project Overview",
    },
    {
      type: "paragraph",
      text:
        "In this project, you will build a functional AI chatbot using modern tools.",
    },
    {
      type: "list",
      items: [
        "Design prompt system",
        "Connect API",
        "Deploy application",
      ],
    },
    {
      type: "summary",
      text:
        "Projects turn theory into real-world skills.",
    },
  ],
};