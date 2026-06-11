import Link from "next/link";

const borderColor = {
  green: "border-t-emerald-500",
  amber: "border-t-amber-500",
  red: "border-t-rose-500",
  blue: "border-t-blue-500",
} as const;

const levelBadge = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-rose-50 text-rose-700",
  blue: "bg-blue-50 text-blue-700",
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
      className={`flex flex-col rounded-2xl border-t-4 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${borderColor[color]}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelBadge[color]}`}>
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      <ul className="mt-4 space-y-1.5 flex-1">
        {topics.map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            {t}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-700 hover:shadow-md active:scale-95"
      >
        {cta}
      </Link>
    </div>
  );
}
