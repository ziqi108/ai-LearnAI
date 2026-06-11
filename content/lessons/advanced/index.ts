import type { Lesson } from "../../../lib/content/types";

export { whatIsFineTuning } from "./what-is-fine-tuning";

import { whatIsFineTuning } from "./what-is-fine-tuning";

export const advancedLessons: Lesson[] = [
  whatIsFineTuning,
].sort((a, b) => a.order - b.order);
