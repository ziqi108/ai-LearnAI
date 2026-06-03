import type { LessonSection } from "@/lib/content/types";

export function LessonRenderer({ sections }: { sections: LessonSection[] }) {
  return (
    <div className="lesson-content space-y-6 text-slate-700 leading-relaxed">
      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}
    </div>
  );
}

function SectionBlock({ section }: { section: LessonSection }) {
  switch (section.type) {
    case "heading":
      if (section.level === 3) {
        return (
          <h3 className="text-xl font-semibold text-slate-900 mt-8">
            {section.text}
          </h3>
        );
      }
      return (
        <h2 className="text-2xl font-bold text-slate-900 mt-10 first:mt-0">
          {section.text}
        </h2>
      );
    case "paragraph":
      return <p>{section.text}</p>;
    case "list":
      const Tag = section.ordered ? "ol" : "ul";
      return (
        <Tag className={`${section.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2`}>
          {section.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </Tag>
      );
    case "highlight":
      return (
        <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sky-900">
          {section.text}
        </div>
      );
    case "card":
      return (
        <div className="rounded-xl bg-slate-100 p-5">
          <p className="font-semibold text-slate-900">{section.title}</p>
          {section.text && <p className="mt-2 text-slate-600">{section.text}</p>}
          {section.items && (
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-600">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      );
    case "summary":
      return (
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-4 text-blue-900">
          <strong>Key Takeaway:</strong> {section.text}
        </div>
      );
    case "html":
      return (
        <div
          className="lesson-html"
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      );
    default:
      return null;
  }
}
