import Link from "next/link";

const borderColor = {
  green: "border-t-green-500",
  amber: "border-t-amber-500",
  red: "border-t-red-500",
  blue: "border-t-blue-500",
} as const;

const btnColor = {
  green: "bg-green-600 hover:bg-green-700",
  amber: "bg-amber-500 hover:bg-amber-600",
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-600 hover:bg-blue-700",
} as const;

type CourseCardProps = {
  title: string;
  description: string;
  topics: string[];
  href: string;
  color: keyof typeof borderColor;
  cta: string;
};

export function CourseCard({
  title,
  description,
  topics,
  href,
  color,
  cta,
}: CourseCardProps) {
  return (
    <div
      className={`rounded-xl border-t-4 bg-white p-7 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${borderColor[color]}`}
    >
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
      <ul className="mt-4 list-disc pl-5 text-slate-600 space-y-1">
        {topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-6 inline-block rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${btnColor[color]}`}
      >
        {cta}
      </Link>
    </div>
  );
}
