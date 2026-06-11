import type { Course, CourseLevel, Lesson } from "./types";
import { beginnerLessons } from "../../content/lessons/beginner";
import { intermediateLessons } from "../../content/lessons/intermediate";
import { advancedLessons } from "../../content/lessons/advanced";
import { projectLessons } from "../../content/lessons/projects";

const lessonsByLevel: Record<CourseLevel, Lesson[]> = {
  beginner: beginnerLessons,
  intermediate: intermediateLessons,
  advanced: advancedLessons,
  projects: projectLessons,
};

export function getAllLessons(): Lesson[] {
  return Object.values(lessonsByLevel).flat();
}

export function getLessonsByLevel(level: CourseLevel): Lesson[] {
  return lessonsByLevel[level] ?? [];
}

export function getLesson(level: CourseLevel, slug: string): Lesson | undefined {
  return lessonsByLevel[level]?.find((l) => l.slug === slug);
}

export function getLessonParams(): { level: CourseLevel; slug: string }[] {
  return getAllLessons().map((l) => ({ level: l.level, slug: l.slug }));
}

const courseMetadata: Record<CourseLevel, Pick<Course, "title" | "description" | "color">> = {
  beginner: {
    title: "Beginner",
    description: "Start from scratch. Learn AI basics and fundamentals.",
    color: "green",
  },
  intermediate: {
    title: "Intermediate",
    description: "Understand models and prompting techniques.",
    color: "amber",
  },
  advanced: {
    title: "Advanced",
    description: "Train and fine-tune models for production.",
    color: "red",
  },
  projects: {
    title: "Projects",
    description: "Build real AI applications and portfolios.",
    color: "blue",
  },
};

function generateCourse(level: CourseLevel): Course {
  const lessons = getLessonsByLevel(level);
  const metadata = courseMetadata[level];
  
  const topics = lessons.slice(0, 4).map((l) => l.title);
  
  return {
    level,
    ...metadata,
    topics,
    lessons: lessons.map(({ slug, title, description, order }) => ({
      slug,
      title,
      description,
      order,
    })),
  };
}

export const courses: Course[] = [
  generateCourse("beginner"),
  generateCourse("intermediate"),
  generateCourse("advanced"),
  generateCourse("projects"),
];

export function getCourse(level: CourseLevel): Course | undefined {
  return courses.find((c) => c.level === level);
}
