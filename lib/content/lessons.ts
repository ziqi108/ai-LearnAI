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
  return [...(lessonsByLevel[level] ?? [])].sort((a, b) => a.order - b.order);
}

export function getLesson(level: CourseLevel, slug: string): Lesson | undefined {
  return lessonsByLevel[level]?.find((l) => l.slug === slug);
}

export function getLessonParams(): { level: CourseLevel; slug: string }[] {
  return getAllLessons().map((l) => ({ level: l.level, slug: l.slug }));
}

export const courses: Course[] = [
  {
    level: "beginner",
    title: "Beginner",
    description: "Start from scratch. Learn AI basics and fundamentals.",
    color: "green",
    topics: ["What is AI?", "What is LLM?", "How ChatGPT works", "Prompt Basics"],
    lessons: getLessonsByLevel("beginner").map(({ slug, title, description, order }) => ({
      slug,
      title,
      description,
      order,
    })),
  },
  {
    level: "intermediate",
    title: "Intermediate",
    description: "Understand models and prompting techniques.",
    color: "amber",
    topics: ["Transformer Models", "Prompt Engineering", "Embeddings", "RAG Systems"],
    lessons: [],
  },
  {
    level: "advanced",
    title: "Advanced",
    description: "Train and fine-tune models for production.",
    color: "red",
    topics: ["Fine-tuning LLM", "LoRA Training", "Deploy AI APIs", "Optimization"],
    lessons: [],
  },
  {
    level: "projects",
    title: "Projects",
    description: "Build real AI applications and portfolios.",
    color: "blue",
    topics: ["AI Chatbot", "Study Assistant", "AI Writing Tool", "More Projects"],
    lessons: [],
  },
];

export function getCourse(level: CourseLevel): Course | undefined {
  return courses.find((c) => c.level === level);
}
