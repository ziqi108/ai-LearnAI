import Link from "next/link";

export function LessonListCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Start Lesson →
      </Link>
    </div>
  );
}
