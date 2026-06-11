import type { Lesson } from "../../../lib/content/types";

export { whatIsRag } from "./what-is-rag";

import { whatIsRag } from "./what-is-rag";

export const intermediateLessons: Lesson[] = [
  whatIsRag,
].sort((a, b) => a.order - b.order);
