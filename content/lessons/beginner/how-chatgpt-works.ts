import type { Lesson } from "../../../lib/content/types";

export const howChatgptWorks: Lesson = {
  slug: "how-chatgpt-works",
  level: "beginner",
  title: "How ChatGPT Works",
  description:
    "Learn how ChatGPT works through training, inference, and prompt engineering. A simple and clear explanation for beginners.",
  keywords: ["ChatGPT", "how ChatGPT works", "AI inference"],
  heroSubtitle:
    "Understand how ChatGPT generates answers using training, inference, and prompts.",
  badges: ["Beginner", "Lesson 3", "6 min read"],
  order: 3,
  readMinutes: 6,
  publishedAt: "2026-01-10",
  breadcrumbLabel: "ChatGPT",
  nextLesson: { slug: "llm-cognition", label: "LLM Cognition →" },
  sections: [
    {
      type: "heading",
      text: "What is ChatGPT Really Doing?",
    },
    {
      type: "paragraph",
      text: "ChatGPT does not 'think' like a human. Instead, it predicts the most likely next word based on patterns learned from data.",
    },
    {
      type: "highlight",
      text: "ChatGPT is not inventing answers — it is generating responses based on learned language patterns.",
    },
    {
      type: "heading",
      text: "1. Training Phase (Learning Language Patterns)",
    },
    {
      type: "paragraph",
      text: "Before ChatGPT can answer questions, it is trained on massive amounts of text data.",
    },
    {
      type: "list",
      items: [
        "Learns grammar and sentence structure",
        "Understands relationships between words",
        "Predicts the next word in a sequence",
      ],
    },
    {
      type: "card",
      title: "Key Insight",
      text: "Training teaches the model patterns, not facts. It learns how language works.",
    },
    {
      type: "heading",
      text: "2. Inference Phase (Generating Answers)",
    },
    {
      type: "paragraph",
      text: "When you ask a question, the model generates a response based on context and probability.",
    },
    {
      type: "list",
      items: [
        "Looks at your input (prompt)",
        "Uses learned patterns",
        "Predicts the best possible response",
      ],
    },
    {
      type: "highlight",
      text: "The model is always predicting the “next token” step by step to form a complete answer.",
    },
    {
      type: "heading",
      text: "3. Why Prompts Matter",
    },
    {
      type: "paragraph",
      text: "The way you ask a question directly affects the quality of the answer.",
    },
    {
      type: "list",
      items: [
        "Clear prompts → better responses",
        "Structured prompts → more organized answers",
        "Detailed prompts → more accurate results",
      ],
    },
    {
      type: "html",
      html: `<div class="grid gap-4 sm:grid-cols-2 rounded-xl bg-gray-100 p-5 mt-4">
<div><strong>❌ Weak Prompt</strong><p class="text-gray-600 mt-1">Explain AI</p></div>
<div><strong>✅ Strong Prompt</strong><p class="text-gray-600 mt-1">Explain AI in simple terms for beginners, under 100 words</p></div>
</div>`,
    },
    {
      type: "heading",
      text: "Putting It All Together",
    },
    {
      type: "list",
      items: [
        "It learns patterns during training",
        "It generates answers during inference",
        "Your prompts guide its responses",
      ],
    },
    {
      type: "summary",
      text: "ChatGPT is a language prediction system. The better your prompt, the better the output.",
    },
  ],
};
