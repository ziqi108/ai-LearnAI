import type { Lesson } from "../../../lib/content/types";

export const promptTemplatePractical: Lesson = {
  slug: "prompt-template-practical",
  level: "beginner",
  title: "Prompt Template Practical Guide",
  description:
    "Learn how to design, manage, and reuse prompt templates with real-world copy-paste examples.",
  keywords: ["prompt template", "prompt engineering", "AI prompts", "LLM usage"],
  heroSubtitle:
    "Build reusable prompt templates and create real AI features with copy-paste examples.",
  badges: ["Beginner", "Lesson", "15 min read"],
  order: 12,
  readMinutes: 15,
  publishedAt: "2026-06-09",
  breadcrumbLabel: "Prompt Templates",

  sections: [
    {
      type: "heading",
      text: "What is a Prompt Template?",
    },
    {
      type: "paragraph",
      text: "A prompt template is a reusable structure that defines how you communicate with an AI model. Instead of writing prompts randomly each time, you standardize them using variables and rules. This makes your AI outputs more stable, consistent, and easier to maintain.",
    },
    {
      type: "paragraph",
      text: "In real applications, prompts are not just text. They are part of your system logic. A well-designed prompt template behaves like a function: it takes input and produces structured output.",
    },

    {
      type: "heading",
      text: "Why Prompt Templates Matter",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Improve consistency across different features",
        "Reduce repetition in code",
        "Make prompts easier to debug and optimize",
        "Enable structured output like JSON",
        "Allow easy scaling of AI features",
      ],
    },
    {
      type: "highlight",
      text: "If you treat prompts like code, your AI application becomes stable and production-ready.",
    },

    {
      type: "heading",
      text: "Core Structure of a Good Prompt Template",
    },
    {
      type: "paragraph",
      text: "A well-designed prompt template usually includes five parts: role, task, rules, input, and output format. This structure helps the model understand exactly what you want.",
    },
    {
      type: "card",
      title: "Standard Template Structure",
      items: [
        "Role: Who the AI should act as",
        "Task: What the AI should do",
        "Rules: Constraints and limitations",
        "Input: User-provided content",
        "Output Format: Required structure (often JSON)",
      ],
    },

    {
      type: "heading",
      text: "Reusable Prompt Template (Copy and Use)",
    },
    {
      type: "paragraph",
      text: "Below is a production-ready template you can reuse in almost any AI application by simply replacing the variables.",
    },
    {
      type: "card",
      title: "Prompt Template (Copy This)",
      text: `
You are a professional assistant.

TASK:
{{task}}

RULES:
- Be clear and concise
- Do not add irrelevant information
- Follow instructions strictly

INPUT:
{{input}}

OUTPUT FORMAT (JSON):
{
  "result": ""
}
`,
    },

    {
      type: "heading",
      text: "Example 1: AI Text Summarizer",
    },
    {
      type: "paragraph",
      text: "This example shows how to build a summarization tool using a prompt template. You can paste this directly into your code and only replace the input text.",
    },
    {
      type: "card",
      title: "Summarization Prompt",
      text: `
You are a professional summarizer.

TASK:
Summarize the following text in 3 sentences.

RULES:
- Keep the original meaning
- Do not add new information

INPUT:
{{text}}

OUTPUT FORMAT (JSON):
{
  "summary": ""
}
`,
    },

    {
      type: "heading",
      text: "Example 2: AI Translation Tool",
    },
    {
      type: "paragraph",
      text: "This template allows you to translate text into any target language. Just change the language variable.",
    },
    {
      type: "card",
      title: "Translation Prompt",
      text: `
You are a translation assistant.

TASK:
Translate the text into {{language}}.

RULES:
- Maintain original meaning
- Keep tone natural

INPUT:
{{text}}

OUTPUT FORMAT:
{
  "translation": ""
}
`,
    },

    {
      type: "heading",
      text: "Example 3: AI Content Rewriter",
    },
    {
      type: "paragraph",
      text: "This template helps rewrite content in a specific tone. It is commonly used in marketing tools.",
    },
    {
      type: "card",
      title: "Rewrite Prompt",
      text: `
You are a professional writer.

TASK:
Rewrite the text in a {{tone}} tone.

RULES:
- Keep the meaning
- Improve readability

INPUT:
{{text}}

OUTPUT FORMAT:
{
  "rewrite": ""
}
`,
    },

    {
      type: "heading",
      text: "Example 4: AI Structured Data Extractor",
    },
    {
      type: "paragraph",
      text: "This template extracts structured information from unstructured text. It is very useful for building automation workflows.",
    },
    {
      type: "card",
      title: "Data Extraction Prompt",
      text: `
You are a data extraction assistant.

TASK:
Extract key information from the text.

INPUT:
{{text}}

OUTPUT FORMAT:
{
  "name": "",
  "email": "",
  "company": ""
}
`,
    },

    {
      type: "heading",
      text: "How to Use Prompt Templates in Code",
    },
    {
      type: "paragraph",
      text: "In real applications, you should wrap prompt templates inside functions. This allows you to dynamically inject user input and reuse the template across features.",
    },
    {
      type: "card",
      title: "Template Function Example",
      text: `
export function buildPrompt(text: string) {
  return \`
You are a helpful assistant.

TASK:
Summarize the text.

INPUT:
\${text}

OUTPUT:
{
  "summary": ""
}
\`;
}
`,
    },

    {
      type: "heading",
      text: "Advanced Tips for Prompt Design",
    },
    {
      type: "list",
      items: [
        "Always define output format explicitly",
        "Use JSON for reliable parsing",
        "Keep instructions simple and clear",
        "Avoid long and confusing prompts",
        "Test prompts with different inputs",
      ],
    },

    {
      type: "heading",
      text: "Common Mistakes to Avoid",
    },
    {
      type: "list",
      items: [
        "Writing prompts without structure",
        "Mixing multiple tasks in one prompt",
        "Not controlling output format",
        "Overcomplicating instructions",
      ],
    },

    {
      type: "highlight",
      text: "A simple and clear prompt often performs better than a complex one.",
    },

    {
      type: "heading",
      text: "Real Application Workflow",
    },
    {
      type: "paragraph",
      text: "In production systems, prompt templates are used together with user input, backend APIs, and frontend UI. The workflow usually looks like this:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "User enters input",
        "Backend builds prompt from template",
        "AI model generates response",
        "Frontend displays result",
      ],
    },

    {
      type: "summary",
      text: "Prompt templates are essential for building scalable AI applications. By structuring prompts properly, you can reuse them, control output quality, and integrate AI into real products. Start with simple templates, test them, and gradually improve them as your application grows.",
    },
  ],
};