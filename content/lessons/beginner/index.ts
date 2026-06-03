import type { Lesson } from "../../../lib/content/types";
import { whatIsAi } from "./what-is-ai";
import { whatIsLlm } from "./what-is-llm";
import { howChatgptWorks } from "./how-chatgpt-works";
import { llmCognition } from "./llm-cognition";
import { promptBasics } from "./prompt-basics";
import { promptEngineeringGuide } from "./prompt-engineering-guide";
import { promptBasicsAdvance } from "./prompt-basics-advance";

export const beginnerLessons: Lesson[] = [
  whatIsAi,
  whatIsLlm,
  howChatgptWorks,
  llmCognition,
  promptBasics,
  promptEngineeringGuide,
  promptBasicsAdvance,
];
