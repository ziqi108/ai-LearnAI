import type { Lesson } from "../../../lib/content/types";

export const promptSixElements: Lesson = {
  slug: "prompt-six-elements",
  level: "beginner",
  title: "The 6 Core Elements of Effective Prompts",
  description:
    "Master the six building blocks of professional prompt engineering: Role, Requirements, Task, Examples, Constraints, and Process.",
  keywords: ["prompt engineering", "prompt framework", "role prompting", "chain of thought"],
  heroSubtitle:
    "Learn the six components of great prompts — with real case studies and reusable templates.",
  badges: ["Beginner", "Lesson 6", "12 min read"],
  order: 6,
  readMinutes: 12,
  publishedAt: "2026-06-03",
  breadcrumbLabel: "Prompt Elements",
  sections: [
    {
      type: "paragraph",
      text: "Most people treat prompts like search keywords. Professional prompt engineers treat them like structured specification documents. The difference in output quality is enormous.",
    },
    {
      type: "heading",
      text: "Element 1: Role",
    },
    {
      type: "paragraph",
      text: "The Role defines who the AI should embody. It has two layers: persona sets the domain and expertise level; skills refine specific capabilities.",
    },
    {
      type: "card",
      title: "Weak vs Strong Example",
      items: [
        "Weak: \"Explain this code.",
        "Strong: \"You are a senior security-focused code reviewer. Audit this code and identify risks.\"",
      ],
    },
    {
      type: "heading",
      text: "Element 2: Requirements",
    },
    {
      type: "paragraph",
      text: "Requirements define what \"good\" looks like. It has three dimensions:",
    },
    {
      type: "list",
      items: [
        "Content requirements: what topics to include and what to exclude",
        "Format requirements: output structure (bullets, JSON, prose)",
        "Quality requirements: reading level, tone, audience sophistication",
      ],
    },
    {
      type: "heading",
      text: "Element 3: Task",
    },
    {
      type: "paragraph",
      text: "The Task is the core instruction. Use precise verbs: analyze, critique, generate, rewrite, debug, summarize, classify, extract, plan, evaluate.",
    },
    {
      type: "highlight",
      text: "For complex goals, break tasks into numbered steps to force the model to think step-by-step.",
    },
    {
      type: "heading",
      text: "Element 4: Examples",
    },
    {
      type: "paragraph",
      text: "Examples are the most underused element, and often the highest-leverage addition. They work in three ways:",
    },
    {
      type: "list",
      items: [
        "Successful examples: show the expected format and style",
        "Failure examples: explicitly name error patterns to avoid",
        "Format templates: provide a precise output structure",
      ],
    },
    {
      type: "card",
      title: "Few-Shot Prompting",
      text: "This technique is called few-shot prompting. Research shows it produces more consistent outputs than bare instructions, especially for tasks with strict formatting requirements.",
    },
    {
      type: "heading",
      text: "Element 5: Constraints",
    },
    {
      type: "paragraph",
      text: "Constraints define boundaries the model must respect. They serve three purposes:",
    },
    {
      type: "list",
      items: [
        "Hard rules (red lines): non-negotiable constraints like word count or no medical advice",
        "Preferences: soft guidance for when the model has agency, like prefer active voice",
        "Risk avoidance: safeguards against problematic outputs like don't speculate beyond what's provided",
      ],
    },
    {
      type: "heading",
      text: "Element 6: Process",
    },
    {
      type: "paragraph",
      text: "The Process defines the sequence of steps the model should follow before producing the final output. It's the most powerful element for handling complex tasks.",
    },
    {
      type: "highlight",
      text: "This technique is called Chain-of-Thought prompting. Forcing the model to externalize its reasoning step-by-step dramatically reduces errors and makes output verifiable.",
    },
    {
      type: "card",
      title: "With vs Without Process",
      text: "Without process: \"Is this business idea viable?\" — produces opinion without logic.",
      items: [
        "With process Step 1: Identify the target customer and their core problem",
        "Step 2: Assess whether the problem is mainstream or niche",
        "Step 3: Evaluate whether the solution is better than existing alternatives",
        "Step 4: Identify the top three risks",
        "Step 5: Provide a judgment with reasoning based on the above analysis",
      ],
    },
    {
      type: "heading",
      text: "Full Example: Using All 6 Elements",
    },
    {
      type: "list",
      items: [
        "Role: \"You are a content strategist writing for busy professionals.",
        "Requirements: 400 words, H2 section headings, direct tone, each section needs one real case study.",
        "Task: Explain why most people fail to build habits and the three most effective strategies.",
        "Examples: [paste a sample paragraph showing the expected style]",
        "Constraints: Do not reference Atomic Habits; no motivational language; flag unverified claims.",
        "Process: 1) One sentence stating the problem 2) One paragraph explaining the difficulty 3) Three H2 strategies 4) One-sentence summary.",
      ],
    },
    {
      type: "heading",
      text: "When to Use Each Element",
    },
    {
      type: "list",
      items: [
        "Simple tasks (translation, typos): Task alone is enough",
        "Medium tasks (descriptions, concept explanation): Role + Task + Requirements",
        "Complex tasks (strategic analysis, long docs): All six elements",
        "Production systems (real features in a product): All six elements, with special attention to Constraints and Process",
      ],
    },
    {
      type: "summary",
      text: "Start by adding one element you usually skip. Most people skip Examples and Process — just those two will dramatically improve results. Structure your prompts and you'll consistently get outputs that need far less correction.",
    },
  ],
};
