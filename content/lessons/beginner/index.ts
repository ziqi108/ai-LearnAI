import type { Lesson } from "../../../lib/content/types";
import { whatIsAi } from "./what-is-ai";
import { whatIsLlm } from "./what-is-llm";
import { howChatgptWorks } from "./how-chatgpt-works";
import { llmCognition } from "./llm-cognition";
import { promptBasics } from "./prompt-basics";
import { promptBasicsAdvance } from "./prompt-basics-advance";
import { promptSixElements } from "./prompt-six-elements";
import { promptEngineeringComplete } from "./prompt-engineering-complete";

export const beginnerLessons: Lesson[] = [
  whatIsAi,
  whatIsLlm,
  howChatgptWorks,
  llmCognition,
  promptBasics,
    promptBasicsAdvance,
  promptSixElements,
  promptEngineeringComplete,
];
