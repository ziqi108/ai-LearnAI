import type { Lesson } from "../../../lib/content/types";

// === 新增课程时，只需在此文件中添加 3 行即可 ===
// 1) 在下方 import 列表中添加一行
// 2) 在导出对象中添加对应 entry
// 3) 课程内部的 order 数字决定显示顺序（数字越小越靠前）

import { whatIsAi } from "./what-is-ai";
import { whatIsLlm } from "./what-is-llm";
import { howChatgptWorks } from "./how-chatgpt-works";
import { llmCognition } from "./llm-cognition";
import { promptBasics } from "./prompt-basics";
import { promptBasicsAdvance } from "./prompt-basics-advance";
import { promptSixElements } from "./prompt-six-elements";
import { promptEngineeringComplete } from "./prompt-engineering-complete";
import { howChatgptClaudeGeminiWork } from "./how-chatgpt-claude-gemini-work";
import { promptTemplatePractical } from "./prompt-template-practical";

const lessons: Lesson[] = [
  whatIsAi,
  whatIsLlm,
  howChatgptWorks,
  llmCognition,
  promptBasics,
  promptBasicsAdvance,
  promptSixElements,
  promptEngineeringComplete,
  howChatgptClaudeGeminiWork,
  promptTemplatePractical,
];

export const beginnerLessons: Lesson[] = lessons
  .slice()
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
