import type { Lesson } from "../../../lib/content/types";

export { whatIsAi } from "./what-is-ai";
export { whatIsLlm } from "./what-is-llm";
export { howChatgptWorks } from "./how-chatgpt-works";
export { llmCognition } from "./llm-cognition";
export { promptBasics } from "./prompt-basics";
export { promptBasicsAdvance } from "./prompt-basics-advance";
export { promptSixElements } from "./prompt-six-elements";
export { promptEngineeringComplete } from "./prompt-engineering-complete";
export { howChatgptClaudeGeminiWork } from "./how-chatgpt-claude-gemini-work";
export { promptTemplatePractical } from "./prompt-template-practical";

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

export const beginnerLessons: Lesson[] = [
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
].sort((a, b) => a.order - b.order);
