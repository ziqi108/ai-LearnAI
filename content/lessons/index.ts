import { beginerLessons } from "./beginner";
import { intermediateLessons } from "./intermediate";
import { advancedLessons } from "./advanced";
import { projectLessons } from "./projects";

export const allLessons = [
  ...beginerLessons,
  ...intermediateLessons,
  ...advancedLessons,
  ...projectLessons,
];