import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  variant?: "default" | "hero" | "article";
  className?: string;
};

export function PageShell({
  children,
  variant = "default",
  className = "",
}: PageShellProps) {
  const base =
    variant === "hero"
      ? "min-h-screen bg-gradient-to-br from-indigo-600 to-violet-700 text-white"
      : variant === "article"
        ? "min-h-screen bg-slate-50"
        : "min-h-screen bg-slate-50";

  return (
    <main className={`${base} ${className}`}>
      <div
        className={
          variant === "hero"
            ? ""
            : "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
    </main>
  );
}
