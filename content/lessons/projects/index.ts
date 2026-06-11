import type { Lesson } from "../../../lib/content/types";

export { aiChatbotProject } from "./ai-chatbot-project";

import { aiChatbotProject } from "./ai-chatbot-project";

export const projectLessons: Lesson[] = [
  aiChatbotProject,
].sort((a, b) => a.order - b.order);
