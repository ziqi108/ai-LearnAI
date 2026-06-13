export type Lang = "en" | "zh";

export type Dictionary = {
  // Navbar
  navHome: string;
  navLearn: string;
  navArticles: string;
  navBrand: string;
  navBrandTitle: string;
  navGeneratePath: string;
  navPathTitle: string;

  // Home / 首页
  homeHeroBadge: string;
  homeHeroTitle1: string;
  homeHeroTitle2: string;
  homeHeroSubtitle: string;
  homeHeroCtaPrimary: string;
  homeHeroCtaSecondary: string;

  homePathCardBadge: string;
  homePathCardTitle: string;
  homePathCardText: string;
  homePathCardCta: string;

  homePathsTitle: string;
  homePathsSubtitle: string;

  homeArticlesTitle: string;
  homeArticlesSubtitle: string;
  homeReadArticle: string;

  homeCtaTitle: string;
  homeCtaSubtitle: string;
  homeCtaButton: string;

  ctaBeginner: string;
  ctaIntermediate: string;
  ctaAdvanced: string;
  ctaProjects: string;

  // Learn page
  learnTitle: string;
  learnSubtitle: string;

  // Course level page
  courseTitle: string;
  courseSubtitle: string;
  courseComingSoon: string;
  courseBeginner: string;

  // Lesson list card
  lessonStartLesson: string;

  // Lesson detail page
  lessonBackToCourse: string;
  lessonNextLesson: string;
  lessonNextButton: string;

  // Article detail page
  articleBackToHome: string;
  articleHome: string;
  articleArticles: string;

  // Category page
  categoryArticlesLabel: string;
  categoryNoArticles: string;
  categoryReadArticle: string;

  // Path generator page
  pathBadge: string;
  pathHeroTitle1: string;
  pathHeroTitle2: string;
  pathHeroSubtitle: string;
  pathInputPlaceholder: string;
  pathSubmit: string;
  pathGenerating: string;
  pathGoalInputLabel: string;

  pathYourGoal: string;
  pathTotalTime: string;
  pathStageCount: string;
  pathStages: string;
  pathRecommended: string;
  pathEnterCourse: string;
  pathReadyTitle: string;
  pathReadySubtitle: string;
  pathCtaBeginner: string;
  pathCtaProjects: string;

  pathStageOneTitle: string;
  pathStageOneSubtitle: string;
  pathStageTwoTitle: string;
  pathStageTwoSubtitle: string;
  pathStageThreeTitle: string;
  pathStageThreeSubtitle: string;
  pathStageFourTitle: string;
  pathStageFourSubtitle: string;

  pathGoal1: string;
  pathGoal2: string;
  pathGoal3: string;
  pathGoal4: string;
  pathGoal5: string;
  pathGoal6: string;

  pathErrorEmpty: string;
  pathErrorTooLong: string;
  pathErrorFallback: string;

  pathGoalType0Title: string;
  pathGoalType0Intro: string;
  pathGoalType1Title: string;
  pathGoalType1Intro: string;
  pathGoalType2Title: string;
  pathGoalType2Intro: string;
  pathGoalType3Title: string;
  pathGoalType3Intro: string;
  pathGoalType4Title: string;
  pathGoalType4Intro: string;
  pathGoalType5Title: string;
  pathGoalType5Intro: string;

  pathGoalStage0Title: string;
  pathGoalStage0Summary: string;
  pathGoalStage1Title: string;
  pathGoalStage1Summary: string;
  pathGoalStage2Title: string;
  pathGoalStage2Summary: string;
  pathGoalStage3Title: string;
  pathGoalStage3Summary: string;

  // Footer / misc
  languageSwitchLabel: string;
};

const en: Dictionary = {
  navHome: "Home",
  navLearn: "Learn",
  navArticles: "Articles",
  navBrand: "AI Learn Hub",
  navBrandTitle: "AI Learn Hub",
  navGeneratePath: "My Path",
  navPathTitle: "AI Learning Path Generator",

  homeHeroBadge: "Free AI Courses",
  homeHeroTitle1: "Learn AI, LLM & AGI",
  homeHeroTitle2: "From Scratch",
  homeHeroSubtitle:
    "Step-by-step guides to master AI, large language models, and real-world projects — no experience required.",
  homeHeroCtaPrimary: "🎯 Generate My Learning Path",
  homeHeroCtaSecondary: "Browse All Courses",

  homePathCardBadge: "✨ Recommended by AI Teacher",
  homePathCardTitle: "Tell me your goal, and I'll design a learning path for you",
  homePathCardText:
    "Whether it's 'how to learn AI', 'how to use ChatGPT', or 'want to be an AI PM' — one click generates a staged plan mapped directly into our existing courses.",
  homePathCardCta: "Generate now →",

  homePathsTitle: "Learning Paths",
  homePathsSubtitle: "Choose your level and start learning today.",

  homeArticlesTitle: "Latest Articles",
  homeArticlesSubtitle: "Insights and guides from our team.",
  homeReadArticle: "Read Article →",

  homeCtaTitle: "Ready to Build Your Own AI?",
  homeCtaSubtitle: "Start learning today and build real AI projects from scratch.",
  homeCtaButton: "Begin Your Journey →",

  ctaBeginner: "Start Learning →",
  ctaIntermediate: "Continue →",
  ctaAdvanced: "Explore →",
  ctaProjects: "Start Building →",

  learnTitle: "🚀 Learn AI Step-by-Step",
  learnSubtitle:
    "Master AI, LLM, and AGI from beginner to advanced. Choose your path and start building today.",

  courseTitle: "AI Course",
  courseSubtitle: "Dive deep into this level and start learning.",
  courseComingSoon:
    "Lessons for this path are coming soon. Check back or start with",
  courseBeginner: "Beginner",

  lessonStartLesson: "Start Lesson →",

  lessonBackToCourse: "← Back to course",
  lessonNextLesson: "Next Lesson",
  lessonNextButton: "Next Lesson →",

  articleBackToHome: "← Back to home",
  articleHome: "Home",
  articleArticles: "Articles",

  categoryArticlesLabel: "Articles",
  categoryNoArticles: "No articles in this category yet.",
  categoryReadArticle: "Read article →",

  pathBadge: "AI Learning Path Generator",
  pathHeroTitle1: "Tell me what you want to learn",
  pathHeroTitle2: "I'll design a path for you",
  pathHeroSubtitle:
    "Enter a goal — like 'How to learn AI', 'How to use ChatGPT', or 'AI Product Manager' — and I'll generate a staged plan mapped to our existing courses.",
  pathInputPlaceholder: "e.g. How to use ChatGPT?",
  pathSubmit: "Generate My Learning Path →",
  pathGenerating: "Generating…",
  pathGoalInputLabel: "Learning goal",

  pathYourGoal: "Your Goal",
  pathTotalTime: "≈ Total estimated time",
  pathStageCount: "stages",
  pathStages: "Stage",
  pathRecommended: "Recommended Lessons",
  pathEnterCourse: "Enter course →",

  pathReadyTitle: "Ready to begin?",
  pathReadySubtitle:
    "Learn stage by stage, or jump straight to the level you're comfortable with — pick the courses that interest you.",
  pathCtaBeginner: "Start from Beginner",
  pathCtaProjects: "Build a Project",

  pathStageOneTitle: "Step 1: Clarify your goal",
  pathStageOneSubtitle:
    "First decide whether you want to 'use' AI or 'build' AI. The two paths are very different.",
  pathStageTwoTitle: "Step 2: Move through stages",
  pathStageTwoSubtitle:
    "Each stage has a clear objective. Finish one stage before moving to the next to avoid skipping levels.",
  pathStageThreeTitle: "Step 3: Build something real",
  pathStageThreeSubtitle:
    "The fastest way to learn AI is to build a real project. Spend a week on basics then two weeks on a project.",
  pathStageFourTitle: "Step 4: Iterate continuously",
  pathStageFourSubtitle:
    "Once you finish the basics, revisit one new tool or case study every month.",

  pathGoal1: "How to learn AI?",
  pathGoal2: "AI learning roadmap",
  pathGoal3: "How to use ChatGPT?",
  pathGoal4: "How to learn Prompt Engineering systematically?",
  pathGoal5: "I want to be an AI Product Manager",
  pathGoal6: "I want to be an AI Application Developer",

  pathErrorEmpty: "Please enter what you want to learn 🙂",
  pathErrorTooLong: "That's too long — try something shorter.",
  pathErrorFallback: "Generation failed. Please try again later.",

  pathGoalType0Title: "AI learning from zero",
  pathGoalType0Intro:
    "Three core things to learn: first understand what AI is, then learn to use it well (prompting), and finally be able to build something yourself. Below is a tailored, staged plan. Each stage leads directly into our courses.",
  pathGoalType1Title: "Using ChatGPT / LLMs",
  pathGoalType1Intro:
    "Using an LLM well isn't magic — it's about clear prompting. Recommended flow: build the right mental model → structured prompts → reusable templates → applied to real tasks.",
  pathGoalType2Title: "Prompt Engineering",
  pathGoalType2Intro:
    "Prompt Engineering is a repeatable, evaluable discipline — not an art. Follow the structured path below.",
  pathGoalType3Title: "LLM Application Development",
  pathGoalType3Intro:
    "Developing LLM applications follows a clear path: first learn to talk to models → then wire retrieval → then build real applications.",
  pathGoalType4Title: "AI Product Manager",
  pathGoalType4Intro:
    "An AI PM needs three skills: an intuition for what LLMs can and can't do, the ability to design stable prompts, and the ability to translate business goals into AI products.",
  pathGoalType5Title: "AI Project Builder",
  pathGoalType5Intro:
    "The fastest way to learn is to build. Start with the simplest possible working demo and incrementally add capabilities.",

  pathGoalStage0Title: "Stage 1: What is AI / LLM",
  pathGoalStage0Summary:
    "Spend 1–2 hours getting the basics. The goal is to build intuition, not write code yet.",
  pathGoalStage1Title: "Stage 2: Using LLMs — prompting",
  pathGoalStage1Summary:
    "80% of the value of an LLM comes from prompting. Learn to write structured, reusable prompts.",
  pathGoalStage2Title: "Stage 3: Understanding the internals",
  pathGoalStage2Summary:
    "Understand why models hallucinate, and how retrieval augmentation (RAG) works.",
  pathGoalStage3Title: "Stage 4: Build a full AI project",
  pathGoalStage3Summary:
    "The most solid way to learn is to build something that actually runs. Start with a chatbot, then move to a knowledge-augmented app.",

  languageSwitchLabel: "Language",
};

const zh: Dictionary = {
  navHome: "首页",
  navLearn: "学习",
  navArticles: "文章",
  navBrand: "AI Learn Hub",
  navBrandTitle: "AI Learn Hub",
  navGeneratePath: "生成学习路径",
  navPathTitle: "AI 学习路径生成器",

  homeHeroBadge: "免费 AI 课程",
  homeHeroTitle1: "学习 AI、LLM 与 AGI",
  homeHeroTitle2: "从零开始",
  homeHeroSubtitle:
    "通过循序渐进的课程，掌握人工智能、大语言模型以及真实项目实战，无需任何前置基础。",
  homeHeroCtaPrimary: "🎯 生成我的学习路径",
  homeHeroCtaSecondary: "直接浏览所有课程",

  homePathCardBadge: "✨ AI 老师推荐",
  homePathCardTitle: "告诉我你的目标，我为你定制学习路径",
  homePathCardText:
    "无论是「怎么学 AI」「ChatGPT 怎么用」还是「想做 AI 产品经理」，都能一键生成分阶段学习计划，并直接接入现有课程。",
  homePathCardCta: "立即生成 →",

  homePathsTitle: "学习路径",
  homePathsSubtitle: "选择你的级别，今天就开始学习。",

  homeArticlesTitle: "最新文章",
  homeArticlesSubtitle: "来自团队的见解与指南。",
  homeReadArticle: "阅读文章 →",

  homeCtaTitle: "准备好打造属于你自己的 AI 了吗？",
  homeCtaSubtitle: "今天就开始学习，从零构建真实的 AI 项目。",
  homeCtaButton: "开启你的旅程 →",

  ctaBeginner: "开始学习 →",
  ctaIntermediate: "继续学习 →",
  ctaAdvanced: "深入探索 →",
  ctaProjects: "开始构建 →",

  learnTitle: "🚀 循序渐进学习 AI",
  learnSubtitle:
    "从入门到精通，掌握 AI、LLM 与 AGI。选择适合你的路径，今天就开始动手。",

  courseTitle: "AI 课程",
  courseSubtitle: "深入这一级别的内容，开始学习。",
  courseComingSoon: "该路径的课程即将上线，欢迎稍后查看，或先从",
  courseBeginner: "入门级",

  lessonStartLesson: "开始学习 →",

  lessonBackToCourse: "← 返回课程列表",
  lessonNextLesson: "下一课",
  lessonNextButton: "进入下一课 →",

  articleBackToHome: "← 返回首页",
  articleHome: "首页",
  articleArticles: "文章",

  categoryArticlesLabel: "文章",
  categoryNoArticles: "该分类下暂未收录文章。",
  categoryReadArticle: "阅读文章 →",

  pathBadge: "AI 学习路径生成器",
  pathHeroTitle1: "告诉我你想学什么",
  pathHeroTitle2: "我帮你设计路径",
  pathHeroSubtitle:
    "输入一个目标 — 例如「怎么学 AI」「ChatGPT 怎么用」或「AI 产品经理」 — 我会为你生成一条分阶段学习计划，并直接接入我们的现有课程。",
  pathInputPlaceholder: "例如：ChatGPT 怎么用？",
  pathSubmit: "生成我的学习路径 →",
  pathGenerating: "正在生成…",
  pathGoalInputLabel: "学习目标",

  pathYourGoal: "你的目标",
  pathTotalTime: "预计总耗时",
  pathStageCount: "个阶段",
  pathStages: "阶段",
  pathRecommended: "推荐学习内容",
  pathEnterCourse: "进入课程 →",

  pathReadyTitle: "准备好开始了吗？",
  pathReadySubtitle:
    "按阶段顺序学习，也可以直接跳到熟悉的级别，挑感兴趣的课程开始吧。",
  pathCtaBeginner: "从 Beginner 开始",
  pathCtaProjects: "直接做项目",

  pathStageOneTitle: "第一步：理清目标",
  pathStageOneSubtitle:
    "先想清楚你是想「会用 AI」还是「会做 AI」。两条路差异很大。",
  pathStageTwoTitle: "第二步：按阶段推进",
  pathStageTwoSubtitle:
    "每个阶段都有明确的目标。按阶段学完一个再进入下一个，避免跳级。",
  pathStageThreeTitle: "第三步：马上动手",
  pathStageThreeSubtitle:
    "学 AI 最快的方法是做一个真实项目。先花一周入门，再花两周做一个自己的项目。",
  pathStageFourTitle: "第四步：持续迭代",
  pathStageFourSubtitle:
    "学完基础后，每月挑一个新工具或新案例做一次实战复盘。",

  pathGoal1: "怎么学 AI？",
  pathGoal2: "学习 AI 的路径",
  pathGoal3: "ChatGPT 怎么用？",
  pathGoal4: "Prompt Engineering 如何系统学？",
  pathGoal5: "想做 AI 产品经理",
  pathGoal6: "想做 AI 应用开发者",

  pathErrorEmpty: "请输入你想学习的目标 🙂",
  pathErrorTooLong: "目标太长啦，写简短一些试试。",
  pathErrorFallback: "生成失败，请稍后重试。",

  pathGoalType0Title: "从 0 到 1 的 AI 学习路径",
  pathGoalType0Intro:
    "AI 学习最核心的三件事：先理解它是什么、然后学会用它（提示工程）、最后能亲手做一个项目。下面是按你目标定制的分阶段计划，每阶段都可以直接进入课程体系学习。",
  pathGoalType1Title: "ChatGPT / LLM 使用路径",
  pathGoalType1Intro:
    "用好 LLM 不靠灵感。推荐路径：建立正确使用观念 → 结构化提示 → 模板化复用 → 做任务链。",
  pathGoalType2Title: "Prompt Engineering 系统学习路径",
  pathGoalType2Intro:
    "Prompt Engineering 不等于「靠灵感写提示，而是一套可复现、可评估的工程方法。",
  pathGoalType3Title: "LLM 应用开发路径",
  pathGoalType3Intro:
    "作为应用开发，推荐的路径是：先会用 LLM → 再理解 RAG 与向量检索 → 然后动手把 LLM 接到真实业务数据上。",
  pathGoalType4Title: "AI 产品经理路径",
  pathGoalType4Intro:
    "做 AI PM 的三件套：建立对 LLM 能力的直觉、学会设计稳定的 prompt、能把业务需求翻译成可落地的 AI 方案。",
  pathGoalType5Title: "AI 项目实战路径",
  pathGoalType5Intro:
    "实战路径的核心原则：先做最简单的能跑起来的东西，再往上加能力。",

  pathGoalStage0Title: "阶段 1：入门 — AI / LLM 是什么",
  pathGoalStage0Summary:
    "用 1~2 小时搞清楚基本概念：什么是 AI，什么是 LLM，ChatGPT 这类产品背后的原理。目标是建立直觉而不是立刻写代码。",
  pathGoalStage1Title: "阶段 2：会用 LLM — 写好提示词",
  pathGoalStage1Summary:
    "LLM 的 80% 价值来自 Prompt。这一阶段学全提示词的六大要素、进阶写法，以及如何写稳定可用的 prompt 模板。",
  pathGoalStage2Title: "阶段 3：理解模型内部机制",
  pathGoalStage2Summary:
    "了解 LLM 的认知过程，理解为什么有时候模型会出错、为什么会有幻觉；学习 RAG 这类核心技术。",
  pathGoalStage3Title: "阶段 4：做一个完整 AI 项目",
  pathGoalStage3Summary:
    "最扎实的学习方式就是亲手做一个能跑的东西。建议从对话机器人起步，然后升级为带知识库的 RAG 应用。",

  languageSwitchLabel: "语言",
};

export const dictionaries: Record<Lang, Dictionary> = { en, zh };

export function normalizeLang(value: string | null | undefined): Lang {
  if (value === "zh" || value === "en") return value;
  return "en";
}
