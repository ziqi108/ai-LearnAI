import type { CourseLevel } from "./types";
import { courses, getAllLessons } from "./lessons";

export type PathStage = {
  id: string;
  level: CourseLevel;
  title: string;
  summary: string;
  estimatedHours: number;
  lessons: { slug: string; title: string; level: CourseLevel; href: string }[];
};

export type GeneratedPath = {
  goal: string;
  title: string;
  introduction: string;
  stages: PathStage[];
  keywords: string[];
};

type Lang = "en" | "zh";

type StageTemplate = {
  level: CourseLevel;
  titleByLang: Record<Lang, string>;
  summaryByLang: Record<Lang, string>;
  estimatedHours: number;
  picker: { level: CourseLevel; keywordsByLang: Record<Lang, string[]>; count: number };
};

type BucketDef = {
  titleByLang: Record<Lang, string>;
  introByLang: Record<Lang, string>;
  stages: StageTemplate[];
};

// ---- Helper: choose Chinese or English keywords for lesson matching ----
function detectLangBucket(goal: string, lang: Lang): {
  rawLang: Lang;
  enKey: string[];
  zhKey: string[];
  hasZhChars: boolean;
} {
  const hasZh = /[\u4e00-\u9fa5]/.test(goal);
  // Prefer the language the user explicitly set when we can detect a mismatch
  const rawLang: Lang = lang === "en" ? "en" : lang === "zh" ? "zh" : hasZh ? "zh" : "en";
  // Matching keyword sets — we keep both to cover inputs written in a different
  // language than the UI
  const enKey = [
    "ai",
    "large language",
    "llm",
    "chatgpt",
    "claude",
    "gemini",
    "learning",
    "learn",
    "roadmap",
    "prompt",
    "prompt engineer",
    "rag",
    "fine tune",
    "finetune",
    "fine-tuning",
    "build",
    "project",
    "application",
    "agent",
    "product",
    "pm",
    "manager",
  ];
  const zhKey = [
    "ai",
    "人工智能",
    "大模型",
    "大语言模型",
    "llm",
    "chatgpt",
    "克劳德",
    "入门",
    "学习路径",
    "路线",
    "提示词",
    "提示",
    "提示工程",
    "提示词工程",
    "检索增强",
    "rag",
    "微调",
    "做项目",
    "项目",
    "构建",
    "应用",
    "应用开发",
    "开发",
    "产品",
    "产品经理",
    "实战",
  ];
  return { rawLang, enKey, zhKey, hasZhChars: hasZh };
}

type Bucket =
  | "ai-overview"
  | "prompt-user"
  | "prompt-eng"
  | "llm-dev"
  | "fine-tune"
  | "build-project"
  | "pm"
  | "general";

function detectBucket(goal: string, lang: Lang): Bucket {
  const g = goal.toLowerCase();
  const hasZh = /[\u4e00-\u9fa5]/.test(goal);
  const zhContain = (ks: string[]) => ks.some((k) => g.includes(k));
  const zhFineTune = ["微调", "训练模型", "模型训练", "finetune"];
  if (zhContain(zhFineTune) || /fine[- ]?tune|fine[ -]?tuning/.test(g)) return "fine-tune";
  if (hasZh && zhContain(["产品经理", "产品", "pm"])) return "pm";
  if (zhContain(["做项目", "项目实战", "构建", "build", "project", "作品", "动手"])) return "build-project";
  if (zhContain(["开发", "应用", "应用开发", "llm应用", "rag", "向量", "langchain", "工程师", "工程化"])) return "llm-dev";
  if (zhContain(["prompt engineer", "提示工程", "提示词工程", "prompt工程", "提示词进阶"])) return "prompt-eng";
  if (zhContain(["chatgpt", "gpt", "claude", "gemini", "大模型", "llm", "怎么用", "如何使用", "使用技巧"])) return "prompt-user";
  if (zhContain(["ai", "人工智能", "人工智慧", "机器学习", "machine learning", "ml", "学习路径", "怎么学", "路线图", "roadmap", "入门", "零基础", "小白"])) return "ai-overview";

  // English-only heuristics
  if (/fine[ -]?tun(e|ing)/.test(g)) return "fine-tune";
  if (/\b(pm|product manager|product owner)\b/.test(g)) return "pm";
  if (/\b(build|project|portfolio|hands[\s-]?on)\b/.test(g)) return "build-project";
  if (/\b(llm|rag|retrieval|langchain|developer)\b/.test(g)) return "llm-dev";
  if (/prompt engineer/.test(g)) return "prompt-eng";
  if (/\b(chatgpt|gpt[- ]?\d|claude|gemini)\b/.test(g)) return "prompt-user";
  if (/\b(ai|llm|machine learning|ml|learn|learning|roadmap)\b/.test(g)) return "ai-overview";
  if (/how (can i |to )?(use|learn|start|build)/.test(g)) return "ai-overview";

  return "general";
}

const BUCKETS: Record<Bucket, BucketDef> = {
  "ai-overview": {
    titleByLang: {
      en: "AI Learning Path from Zero",
      zh: "从 0 到 1 的 AI 学习路径",
    },
    introByLang: {
      en: "Three core things to learn: first understand what AI is, then learn to use it well (prompting), and finally be able to build something yourself. Below is a tailored staged plan, each stage maps directly into our existing course system.",
      zh: "AI 学习最核心的三件事：先理解它是什么、然后学会用它（提示工程）、最后能亲手做一个项目。下面是按目标定制的分阶段计划，每阶段都可以直接进入课程体系学习。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: {
          en: "Stage 1 · Getting started — what is AI / LLMs",
          zh: "阶段 1 · 入门 — AI / LLM 是什么",
        },
        summaryByLang: {
          en: "Spend 1–2 hours on the basics. The goal is to build intuition rather than write code yet.",
          zh: "用 1–2 小时搞清楚基本概念：什么是 AI，什么是 LLM，ChatGPT 这类产品背后的原理。目标是建立直觉而不是立刻上手代码。",
        },
        estimatedHours: 2,
        picker: {
          level: "beginner",
          keywordsByLang: {
            en: ["what is ai", "what is an llm", "llm", "chatgpt works", "chatgpt"],
            zh: ["什么是 ai", "什么是 ai", "大语言模型", "chatgpt"],
          },
          count: 2,
        },
      },
      {
        level: "beginner",
        titleByLang: {
          en: "Stage 2 · Using LLMs — write good prompts",
          zh: "阶段 2 · 会用 LLM — 写好提示词",
        },
        summaryByLang: {
          en: "80% of the value of an LLM comes from prompting. Learn the six elements of a prompt, advanced patterns, and reusable templates.",
          zh: "LLM 的 80% 价值来自 Prompt。这一阶段学全提示词的六大要素、进阶写法，以及如何写稳定可用的 prompt 模板。",
        },
        estimatedHours: 4,
        picker: {
          level: "beginner",
          keywordsByLang: {
            en: ["prompt", "six elements", "prompt engineer"],
            zh: ["提示词", "prompt", "六大要素"],
          },
          count: 4,
        },
      },
      {
        level: "intermediate",
        titleByLang: {
          en: "Stage 3 · Understanding the internals",
          zh: "阶段 3 · 理解模型内部机制",
        },
        summaryByLang: {
          en: "Understand why models hallucinate and how retrieval augmentation (RAG) works.",
          zh: "了解 LLM 的认知过程，理解为什么模型会出错、为什么会有幻觉；学习 RAG 这类核心技术。",
        },
        estimatedHours: 4,
        picker: {
          level: "intermediate",
          keywordsByLang: {
            en: ["rag", "retrieval", "llm cognition"],
            zh: ["rag", "检索", "认知"],
          },
          count: 1,
        },
      },
      {
        level: "projects",
        titleByLang: {
          en: "Stage 4 · Build a complete AI project",
          zh: "阶段 4 · 做一个完整 AI 项目",
        },
        summaryByLang: {
          en: "The most solid way to learn is to build something that actually runs. Start with a chatbot, then move to a knowledge-augmented app.",
          zh: "最扎实的学习方式就是亲手做一个能跑的东西。建议从对话机器人起步，然后升级为带知识库的 RAG 应用。",
        },
        estimatedHours: 8,
        picker: {
          level: "projects",
          keywordsByLang: {
            en: ["chatbot", "project"],
            zh: ["chatbot", "项目"],
          },
          count: 2,
        },
      },
    ],
  },
  "prompt-user": {
    titleByLang: {
      en: "Using ChatGPT / LLMs",
      zh: "ChatGPT / LLM 使用路径",
    },
    introByLang: {
      en: "Using an LLM well isn't magic. Recommended flow: build the right mental model → structured prompts → reusable templates → applied to real tasks.",
      zh: "用好 LLM 不靠灵感。推荐路径：建立正确使用观念 → 结构化提示 → 模板化复用 → 应用到真实任务。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: {
          en: "Stage 1 · First understand how ChatGPT works",
          zh: "阶段 1 · 先理解 ChatGPT 的原理",
        },
        summaryByLang: {
          en: "Know why it generates and what makes answers reliable. This makes all later prompting much more effective.",
          zh: "知道它为什么会生成、哪些回答靠谱。这会让你后面所有 prompt 设计都更有章法。",
        },
        estimatedHours: 1,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["chatgpt"], zh: ["chatgpt"] },
          count: 2,
        },
      },
      {
        level: "beginner",
        titleByLang: {
          en: "Stage 2 · Prompt basics & six elements",
          zh: "阶段 2 · 提示词入门与六要素",
        },
        summaryByLang: {
          en: "A good prompt isn't inspired. Learn the six elements of a stable prompt.",
          zh: "好的提示词不是灵感写出来的。学习提示词的六要素：一句话提问 → 结构化提问。",
        },
        estimatedHours: 2,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["prompt", "six"], zh: ["提示词", "六要素", "prompt"] },
          count: 3,
        },
      },
      {
        level: "beginner",
        titleByLang: {
          en: "Stage 3 · Advanced prompts & templates",
          zh: "阶段 3 · 提示词进阶与模板",
        },
        summaryByLang: {
          en: "Turn common tasks into reusable templates: writing, summarising, translation, coding assistance.",
          zh: "把常用任务抽象成可复用模板：写文案、做总结、翻译、代码助手 —— 每个场景都有成熟的模板可以直接套用。",
        },
        estimatedHours: 3,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["template", "prompt"], zh: ["模板", "template", "prompt 进阶"] },
          count: 2,
        },
      },
      {
        level: "projects",
        titleByLang: {
          en: "Stage 4 · Use LLMs in real work",
          zh: "阶段 4 · 把 LLM 用在真实工作里",
        },
        summaryByLang: {
          en: "Build a reusable prompt workflow around your own real work (documents / data analysis / coding).",
          zh: "围绕自己的真实工作场景（写文档 / 数据分析 / 代码开发）搭一套可复用的 Prompt 工作流。",
        },
        estimatedHours: 4,
        picker: {
          level: "projects",
          keywordsByLang: { en: ["chatbot"], zh: ["chatbot"] },
          count: 1,
        },
      },
    ],
  },
  "prompt-eng": {
    titleByLang: {
      en: "Prompt Engineering",
      zh: "Prompt Engineering 系统学习路径",
    },
    introByLang: {
      en: "Prompt Engineering is a repeatable, evaluable discipline — not an art. Follow the structured path below.",
      zh: "Prompt Engineering 不等于「靠灵感写提示」，它是一套可复现、可评估的工程方法。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · Prompt basics & structured output", zh: "阶段 1 · 基础 Prompt 与结构化输出" },
        summaryByLang: {
          en: "Learn the basics: instruction, context, examples, constraints, role framing, output format.",
          zh: "学习基础提示词写法：指令、上下文、示例、约束、角色设定、输出格式。",
        },
        estimatedHours: 3,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["prompt"], zh: ["prompt 基础", "prompt"] },
          count: 2,
        },
      },
      {
        level: "beginner",
        titleByLang: { en: "Stage 2 · Advanced — let models do their own thinking", zh: "阶段 2 · 进阶 — 让模型自己做决策" },
        summaryByLang: {
          en: "Few-shot / CoT (chain of thought) / self-checking are the three everyday tools of a prompt engineer.",
          zh: "Few-shot / CoT（思维链）/ 自我检验，是 Prompt Engineer 每天都会反复用到的三板斧。",
        },
        estimatedHours: 3,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["prompt engineer"], zh: ["prompt 工程", "prompt 完整"] },
          count: 1,
        },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 3 · Templates & engineering workflows", zh: "阶段 3 · 模板化与工程化" },
        summaryByLang: {
          en: "Turn prompts into reusable templates. Practice splitting tasks into multiple prompt pipelines.",
          zh: "把提示词工程从灵感写作变成稳定可复用的模板系统；练习把任务拆成多个 prompt 组合的流水线。",
        },
        estimatedHours: 3,
        picker: {
          level: "beginner",
          keywordsByLang: { en: ["template"], zh: ["模板", "template"] },
          count: 1,
        },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 4 · Combine with RAG / agents", zh: "阶段 4 · 结合 RAG / Agent 应用" },
        summaryByLang: {
          en: "Moving to what needs programs: retrieval augmentation, multi-step agent reasoning — more realistic engineering practice.",
          zh: "进阶到需要程序配合：检索增强生成、多步 Agent 推理 —— 更真实的工程实践。",
        },
        estimatedHours: 6,
        picker: {
          level: "intermediate",
          keywordsByLang: { en: ["rag"], zh: ["rag"] },
          count: 1,
        },
      },
    ],
  },
  "llm-dev": {
    titleByLang: { en: "LLM Application Development", zh: "LLM 应用开发路径" },
    introByLang: {
      en: "Recommended path for developers: first learn to talk to models → then wire retrieval → then build real applications.",
      zh: "作为应用开发，推荐的路径是：先会用 LLM → 再理解 RAG 与向量检索 → 然后动手把 LLM 接到真实业务数据上。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · LLM basics & prompting", zh: "阶段 1 · LLM 基本观念与提示工程" },
        summaryByLang: {
          en: "You can't write great LLM apps without good prompting. Start with the basics before writing code.",
          zh: "开发之前先学会和模型对话的正确姿势。不会写 prompt 的开发者写不出好的 LLM 应用。",
        },
        estimatedHours: 3,
        picker: { level: "beginner", keywordsByLang: { en: ["chatgpt", "prompt"], zh: ["chatgpt", "prompt"] }, count: 3 },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 2 · RAG & knowledge integration", zh: "阶段 2 · RAG 与知识接入" },
        summaryByLang: {
          en: "Retrieval-augmented generation (RAG) is the #1 way to make LLMs useful. Learn vector retrieval, citation, evaluation.",
          zh: "检索增强生成（RAG）是让 LLM 真正有用的第一手段。学会：向量检索、片段引用、结果评估。",
        },
        estimatedHours: 6,
        picker: { level: "intermediate", keywordsByLang: { en: ["rag"], zh: ["rag"] }, count: 1 },
      },
      {
        level: "projects",
        titleByLang: { en: "Stage 3 · Build a production AI app", zh: "阶段 3 · 做一个能上线的 AI 应用" },
        summaryByLang: {
          en: "Start from a simple chatbot, then upgrade to a knowledge-augmented app. Practice prompt debugging, error handling, deployment.",
          zh: "从最简单的对话机器人开始，再升级为带知识库的应用；过程中练习 prompt 调试、异常处理、工程化。",
        },
        estimatedHours: 10,
        picker: { level: "projects", keywordsByLang: { en: ["chatbot"], zh: ["chatbot"] }, count: 1 },
      },
      {
        level: "advanced",
        titleByLang: { en: "Stage 4 · Model training (optional)", zh: "阶段 4 · 模型训练（可选）" },
        summaryByLang: {
          en: "If your business needs custom trained / fine-tuned models, enter fine-tuning study. Most engineers can skip this first.",
          zh: "如果业务需要自己训练/微调模型，再进入 fine-tuning 学习；大部分工程师可以先跳过，聚焦应用层。",
        },
        estimatedHours: 10,
        picker: { level: "advanced", keywordsByLang: { en: ["fine-tuning"], zh: ["微调", "fine-tuning"] }, count: 1 },
      },
    ],
  },
  "fine-tune": {
    titleByLang: { en: "Model Training / Fine-tuning", zh: "模型训练 / Fine-tuning 路径" },
    introByLang: {
      en: "Training models is a specialist direction. Suggested order: LLM fundamentals → data engineering → fine-tuning methods → evaluation & iteration.",
      zh: "训练模型是很专业的方向。学习建议按：基础 LLM 概念 → 数据工程 → 微调方法 → 评估与迭代。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · Master LLM fundamentals first", zh: "阶段 1 · 先掌握 LLM 基本观念" },
        summaryByLang: { en: "Don't jump straight to training. First learn to use an LLM well.", zh: "不要一上来就训练模型。先从「会用 LLM」开始，理解什么是提示工程。" },
        estimatedHours: 3,
        picker: { level: "beginner", keywordsByLang: { en: ["chatgpt", "llm", "prompt"], zh: ["llm", "chatgpt", "prompt"] }, count: 3 },
      },
      {
        level: "advanced",
        titleByLang: { en: "Stage 2 · Fine-tuning fundamentals & methods", zh: "阶段 2 · Fine-tuning 原理与方法" },
        summaryByLang: {
          en: "Learn the main methods: full-parameter fine-tuning, LoRA, QLoRA, SFT, preference optimisation — and when each is needed.",
          zh: "学习微调的主要方法：全参数微调、LoRA、QLoRA、SFT、偏好优化；理解什么时候需要微调。",
        },
        estimatedHours: 6,
        picker: { level: "advanced", keywordsByLang: { en: ["fine-tuning"], zh: ["微调", "fine-tuning"] }, count: 1 },
      },
      {
        level: "projects",
        titleByLang: { en: "Stage 3 · End-to-end fine-tuning experiment", zh: "阶段 3 · 端到端做一次微调实验" },
        summaryByLang: {
          en: "From data prep → training script → evaluation and deployment, go through the complete pipeline end-to-end.",
          zh: "从数据准备、训练脚本到评估与上线，完整走一遍微调流程。",
        },
        estimatedHours: 12,
        picker: { level: "projects", keywordsByLang: { en: ["chatbot", "project"], zh: ["chatbot", "项目"] }, count: 1 },
      },
    ],
  },
  "build-project": {
    titleByLang: { en: "AI Project Building", zh: "AI 项目实战路径" },
    introByLang: {
      en: "Core principle: start with the simplest thing that can run, then incrementally add capabilities.",
      zh: "实战路径核心原则：先做最简单的能跑起来的东西，再往上加能力。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · Prep — use LLMs first", zh: "阶段 1 · 做好「会用」的准备" },
        summaryByLang: {
          en: "Build intuition for LLMs, prompting, common failure modes. Otherwise you'll waste time fighting the model instead of building.",
          zh: "做项目前，先建立对 LLM 的直觉：提示词、模型能力、常见错误模式。否则写代码会浪费时间。",
        },
        estimatedHours: 3,
        picker: { level: "beginner", keywordsByLang: { en: ["prompt", "chatgpt"], zh: ["prompt", "chatgpt"] }, count: 2 },
      },
      {
        level: "projects",
        titleByLang: { en: "Stage 2 · First project — a chatbot", zh: "阶段 2 · 第一个项目 — 对话机器人" },
        summaryByLang: {
          en: "An AI chatbot you can run: API calls, conversation history, prompt debugging, deployment.",
          zh: "一个可跑起来的 AI Chatbot：从 API 调用、对话历史、prompt 调试到上线部署。",
        },
        estimatedHours: 8,
        picker: { level: "projects", keywordsByLang: { en: ["chatbot"], zh: ["chatbot"] }, count: 1 },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 3 · Add knowledge — a RAG app", zh: "阶段 3 · 接入知识 — 做 RAG 应用" },
        summaryByLang: {
          en: "Make AI answer your own documents. This is the highest-value direction for most real businesses.",
          zh: "让 AI 能回答「公司内部文档」式的问题 —— 这是落地价值最高的方向。",
        },
        estimatedHours: 10,
        picker: { level: "intermediate", keywordsByLang: { en: ["rag"], zh: ["rag"] }, count: 1 },
      },
    ],
  },
  pm: {
    titleByLang: { en: "AI Product Manager", zh: "AI 产品经理路径" },
    introByLang: {
      en: "Three things an AI PM needs: intuition for what LLMs can and can't do, the ability to design stable prompts, and the skill to translate business goals into AI-ready products.",
      zh: "做 AI PM 的三件套：建立对 LLM 能力边界的直觉、能设计稳定的 prompt、把业务需求翻译成可落地的 AI 方案。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · Build intuition for what LLMs can do", zh: "阶段 1 · 建立对 AI / LLM 能力的直觉" },
        summaryByLang: {
          en: "You don't need to write code — but you must be able to tell which problems an LLM can solve and which it can't.",
          zh: "不要求会写代码，但要能判断一个需求是 LLM 能做的、还是现阶段做不到的。",
        },
        estimatedHours: 3,
        picker: { level: "beginner", keywordsByLang: { en: ["what is ai", "what is an llm", "chatgpt works"], zh: ["什么是 ai", "什么是 ai", "llm", "chatgpt"] }, count: 3 },
      },
      {
        level: "beginner",
        titleByLang: { en: "Stage 2 · Write stable prompts yourself", zh: "阶段 2 · 亲手写好提示词 — PM 最重要的技能" },
        summaryByLang: {
          en: "As a PM you need to be able to design stable, reusable prompt templates rather than winging them.",
          zh: "作为 PM，你要能设计出稳定可复用的 prompt 模板，而不是靠灵感。",
        },
        estimatedHours: 4,
        picker: { level: "beginner", keywordsByLang: { en: ["prompt", "six elements", "prompt engineer"], zh: ["prompt 基础", "六要素", "prompt 工程"] }, count: 3 },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 3 · Understand RAG & agents", zh: "阶段 3 · 理解 RAG 与 Agent" },
        summaryByLang: {
          en: "Turning LLMs into data-aware systems is where product value lives. You need to understand what RAG can and can't do.",
          zh: "把 LLM 变成「能拿数据」的系统 —— 产品价值最集中的地方。PM 需要理解 RAG 的能力边界，才能设计可落地方案。",
        },
        estimatedHours: 4,
        picker: { level: "intermediate", keywordsByLang: { en: ["rag"], zh: ["rag"] }, count: 1 },
      },
      {
        level: "projects",
        titleByLang: { en: "Stage 4 · Prototype for your own business", zh: "阶段 4 · 做一个你负责业务的原型" },
        summaryByLang: {
          en: "Take everything above and ship a working prototype. Even a simple demo is worth far more than reading a dozen documents.",
          zh: "把上面的学习直接落地成一个能跑的产品原型；哪怕是一个很简单的 Demo，价值远高于读十份文档。",
        },
        estimatedHours: 6,
        picker: { level: "projects", keywordsByLang: { en: ["chatbot"], zh: ["chatbot"] }, count: 1 },
      },
    ],
  },
  general: {
    titleByLang: { en: "Personalised AI Learning Path", zh: "个性化 AI 学习路径" },
    introByLang: {
      en: "A general, from-zero-to-practice path. Follow the stages in order, or jump straight to whichever level fits you best.",
      zh: "通用入门到实战学习路径。按阶段顺序推进，也可以直接挑你熟悉的级别开始。",
    },
    stages: [
      {
        level: "beginner",
        titleByLang: { en: "Stage 1 · What is AI / an LLM", zh: "阶段 1 · AI / LLM 是什么" },
        summaryByLang: {
          en: "Build intuition: what AI is, what an LLM is, why it suddenly got so good.",
          zh: "建立对 AI 的基本直觉：它是什么、能做什么、为什么突然变得这么厉害。",
        },
        estimatedHours: 2,
        picker: { level: "beginner", keywordsByLang: { en: ["what is ai", "what is an llm", "chatgpt works"], zh: ["什么是 ai", "什么是 ai", "chatgpt"] }, count: 3 },
      },
      {
        level: "beginner",
        titleByLang: { en: "Stage 2 · Write a good prompt", zh: "阶段 2 · 学会写好一个 Prompt" },
        summaryByLang: { en: "Prompting is the language you use to talk to LLMs — and the fastest skill to learn.", zh: "提示词是你和 LLM 对话的语言，也是上手最快的技能。" },
        estimatedHours: 3,
        picker: { level: "beginner", keywordsByLang: { en: ["prompt", "six elements"], zh: ["prompt 基础", "六要素"] }, count: 2 },
      },
      {
        level: "intermediate",
        titleByLang: { en: "Stage 3 · Understand RAG", zh: "阶段 3 · 理解 RAG" },
        summaryByLang: {
          en: "Learn the #1 way to make LLMs useful: retrieval augmentation — this is where most real-world value lives.",
          zh: "学习让 LLM 接入真实知识与数据的方法 —— 这是落地价值最高的方向之一。",
        },
        estimatedHours: 4,
        picker: { level: "intermediate", keywordsByLang: { en: ["rag"], zh: ["rag"] }, count: 1 },
      },
      {
        level: "projects",
        titleByLang: { en: "Stage 4 · Build a project", zh: "阶段 4 · 做一个项目" },
        summaryByLang: { en: "Build something yourself. This ties everything you've learned together.", zh: "亲手做一个 AI 应用，把前面所有内容串起来。" },
        estimatedHours: 8,
        picker: { level: "projects", keywordsByLang: { en: ["chatbot"], zh: ["chatbot"] }, count: 1 },
      },
    ],
  },
};

function pickLessons(
  level: CourseLevel,
  keywords: string[],
  count: number
): { slug: string; title: string; level: CourseLevel; href: string }[] {
  const lessons = getAllLessons().filter((l) => l.level === level);
  if (!lessons.length) return [];

  const need = Math.min(count, lessons.length);
  if (!keywords.length) {
    return lessons.slice(0, need).map((l) => ({
      slug: l.slug,
      title: l.title,
      level: l.level,
      href: `/learn/${l.level}/${l.slug}`,
    }));
  }

  const kws = keywords.map((k) => k.toLowerCase());
  const scored = lessons.map((l) => {
    const hay = [l.title, l.description, ...(l.keywords ?? [])]
      .join(" | ")
      .toLowerCase();
    let score = 0;
    for (const kw of kws) {
      if (kw && hay.includes(kw)) score += 1;
    }
    return { l, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const best = scored.filter((s) => s.score > 0).slice(0, need).map((s) => s.l);
  const result = best.length ? best : lessons.slice(0, need);
  return result.map((l) => ({
    slug: l.slug,
    title: l.title,
    level: l.level,
    href: `/learn/${l.level}/${l.slug}`,
  }));
}

export function generatePath(goal: string, lang: Lang = "en"): GeneratedPath {
  const clean = goal.trim();
  const bucket = detectBucket(clean, lang);
  const { rawLang } = detectLangBucket(clean, lang);
  const template = BUCKETS[bucket];
  void courses;

  const stages: PathStage[] = template.stages.map((stage, i) => {
    const keywords = [
      ...stage.picker.keywordsByLang[rawLang],
      ...stage.picker.keywordsByLang[rawLang === "en" ? "zh" : "en"],
    ];
    const lessons = pickLessons(stage.picker.level, keywords, stage.picker.count);
    if (lessons.length === 0) {
      lessons.push({
        slug: "",
        title: courses.find((c) => c.level === stage.level)?.title ?? stage.titleByLang[lang],
        level: stage.level,
        href: `/learn/${stage.level}`,
      });
    }
    return {
      id: `stage-${i + 1}`,
      level: stage.level,
      title: stage.titleByLang[lang],
      summary: stage.summaryByLang[lang],
      estimatedHours: stage.estimatedHours,
      lessons,
    };
  });

  return {
    goal: clean,
    title: template.titleByLang[lang],
    introduction: template.introByLang[lang],
    stages,
    keywords: [bucket],
  };
}

export function exampleGoals(lang: Lang = "en"): string[] {
  if (lang === "zh") {
    return [
      "怎么学 AI？",
      "学习 AI 的路径",
      "ChatGPT 怎么用？",
      "Prompt Engineering 如何系统学？",
      "想做 AI 产品经理",
      "想做 AI 应用开发者",
    ];
  }
  return [
    "How to learn AI?",
    "AI learning roadmap",
    "How to use ChatGPT?",
    "How to learn Prompt Engineering",
    "I want to become an AI Product Manager",
    "I want to build AI applications",
  ];
}

// Keep a reference so tree-shaking doesn't drop courses
export const _courseList = courses;
