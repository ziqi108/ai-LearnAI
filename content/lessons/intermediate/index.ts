import type { Lesson } from "../../../lib/content/types";

// === 新增课程时，在此文件顶部 import 并在数组中添加即可 ===
// 课程内部的 order 数字决定显示顺序（数字越小越靠前）

import { whatIsRag } from "./what-is-rag";

const lessons: Lesson[] = [
  whatIsRag,
];

export const intermediateLessons: Lesson[] = lessons
  .slice()
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
