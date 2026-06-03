import type { Lesson } from "../../../lib/content/types";

export const promptSixElements: Lesson = {
  slug: "prompt-six-elements",
  level: "beginner",
  title: "Prompt 的6 大核心要素",
  description: "掌握专业 Prompt 工程的六大构成要素：角色、要求、任务、示例、约束、流程。",
  keywords: ["prompt engineering", "prompt framework", "role prompting", "chain of thought"],
  heroSubtitle: "学习构建高质量 Prompt 的六大要素，附真实案例和可复用模板。",
  badges: ["Beginner", "Lesson 8", "12 min read"],
  order: 8,
  readMinutes: 12,
  publishedAt: "2026-06-03",
  breadcrumbLabel: "Prompt 6要素",
  sections: [
    {
      type: "paragraph",
      text: "大多数人把 Prompt 当成搜索关键词。专业的 Prompt 工程师把它当成结构化的规范文档。输出质量的差异是巨大的。",
    },
    {
      type: "heading",
      text: "要素 1：角色（Role）",
    },
    {
      type: "paragraph",
      text: "角色定义 AI 应该扮演谁，包含两层：身份设定专业领域，技能细化具体能力。",
    },
    {
      type: "card",
      title: "示例对比",
      items: [
        "弱提示：'解释这段代码。'",
        "强提示：'你是一位专注安全性的资深代码审查员。审查这段代码并识别风险。'",
      ],
    },
    {
      type: "heading",
      text: "要素 2：要求（Requirements）",
    },
    {
      type: "paragraph",
      text: "要求定义'好'的标准，包含三个维度：",
    },
    {
      type: "list",
      items: [
        "内容要求：涵盖哪些内容，排除哪些内容",
        "格式要求：输出结构（列表、JSON、段落等）",
        "质量要求：语言难度、风格、受众水平",
      ],
    },
    {
      type: "heading",
      text: "要素 3：任务（Task）",
    },
    {
      type: "paragraph",
      text: "任务是核心指令。使用精确的动词：分析、批评、生成、重写、调试、总结、分类、提取、规划、评估。",
    },
    {
      type: "highlight",
      text: "对于复杂目标，将任务分解为编号列表，强制模型按步骤思考。",
    },
    {
      type: "heading",
      text: "要素 4：示例（Examples）",
    },
    {
      type: "paragraph",
      text: "示例是最被低估的要素，通常也是最高杠杆的补充。它们通过三种方式发挥作用：",
    },
    {
      type: "list",
      items: [
        "成功示例：展示期望的输出格式和风格",
        "失败示例：明确指出要避免的错误模式",
        "格式模板：提供精确的输出结构定义",
      ],
    },
    {
      type: "card",
      title: "Few-Shot Prompting",
      text: "这种技术叫做少样本提示。研究表明，它比单纯的指令能产生更一致的输出，特别是对于有严格格式要求的任务。",
    },
    {
      type: "heading",
      text: "要素 5：约束（Constraints）",
    },
    {
      type: "paragraph",
      text: "约束定义模型必须遵守的边界，服务于三个目的：",
    },
    {
      type: "list",
      items: [
        "硬性限制（红线）：不可商议的规则，如字数限制、禁止推荐医疗建议",
        "偏好：当模型有自主权时的软规则指导，如优先使用主动语态",
        "风险规避：防止问题输出，如不推测未提供的信息、标记不确定的声明",
      ],
    },
    {
      type: "heading",
      text: "要素 6：流程（Process）",
    },
    {
      type: "paragraph",
      text: "流程定义模型在生成最终输出之前应遵循的步骤序列。这是处理复杂任务最强大的要素。",
    },
    {
      type: "highlight",
      text: "这种技术叫做思维链提示（Chain-of-Thought）。强制模型逐步外化推理过程可以显著减少错误并使输出可验证。",
    },
    {
      type: "card",
      title: "流程示例对比",
      text: "无流程：'这个商业想法可行吗？' — 产生没有逻辑的观点。",
      items: [
        "有流程步骤 1：识别目标客户及其核心问题",
        "步骤 2：评估问题是普遍的还是小众的",
        "步骤 3：评估解决方案是否优于现有替代方案",
        "步骤 4：识别三大风险",
        "步骤 5：基于以上分析给出判断和理由",
      ],
    },
    {
      type: "heading",
      text: "完整示例：使用全部 6 要素",
    },
    {
      type: "list",
      items: [
        "角色：你是一位为忙碌专业人士写作的内容策略师",
        "要求：400 字，每部分 H2 标题，直接语气，每部分需一个真实案例",
        "任务：解释为什么大多数人无法养成习惯，以及三个最有效的策略",
        "示例：[粘贴展示期望风格的示例段落]",
        "约束：不引用《原子习惯》，不用激励性语言，标记未验证声明",
        "流程：1) 一句话指出问题 2) 一段解释难度 3) 三个 H2 策略 4) 一句总结",
      ],
    },
    {
      type: "heading",
      text: "何时使用每个要素",
    },
    {
      type: "list",
      items: [
        "简单任务（翻译、修正错字）：仅任务足够",
        "中等任务（写描述、解释概念）：角色 + 任务 + 要求",
        "复杂任务（战略分析、长文档）：全部六个要素",
        "生产系统（真实产品中的 AI 功能）：全部六要素，特别关注约束和流程",
      ],
    },
    {
      type: "summary",
      text: "从添加一个你通常跳过的要素开始。大多数人跳过示例和流程——仅添加这两个就会显著改善结果。结构化你的提示，你将持续获得需要更少后续修正的输出。",
    },
  ],
};