"use client";

import { useLang } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-semibold"
    >
      <button
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "zh"
            ? "bg-white text-indigo-700 shadow ring-1 ring-slate-200"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        中文
      </button>
      <span className="h-4 w-px bg-slate-200 mx-0.5" />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "en"
            ? "bg-white text-indigo-700 shadow ring-1 ring-slate-200"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        English
      </button>
    </div>
  );
}
