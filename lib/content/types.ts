export type CourseLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "projects";

export type LessonSection =
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "highlight"; text: string }
  | { type: "card"; title: string; text?: string; items?: string[] }
  | { type: "summary"; text: string }
  | { type: "html"; html: string }
  | {
      type: "code";
      code: string;
      language?: "ts" | "js" | "python" | "json" | "bash" | "text";
    };

export type Lesson = {
  slug: string;
  level: CourseLevel;
  title: string;
  description: string;
  keywords?: string[];
  heroSubtitle: string;
  badges: string[];
  order: number;
  readMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  sections: LessonSection[];
  nextLesson?: { slug: string; label: string };
  breadcrumbLabel?: string;
};

export type Course = {
  level: CourseLevel;
  title: string;
  description: string;
  color: "green" | "amber" | "red" | "blue";
  topics: string[];
  lessons: Pick<Lesson, "slug" | "title" | "description" | "order">[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords?: string[];
  publishedAt: string;
  content: string;
};