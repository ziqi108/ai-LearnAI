import type { Lesson } from "../../../lib/content/types";

// === 新增课程时，在此文件顶部 import 并在数组中添加即可 ===
// 课程内部的 order 数字决定显示顺序（数字越小越靠前）

import { whatIsFineTuning } from "./what-is-fine-tuning";

const lessons: Lesson[] = [
  whatIsFineTuning,
];

export const advancedLessons: Lesson[] = lessons
  .slice()
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
