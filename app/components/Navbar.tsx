"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-lg shadow">
            🤖
          </span>
          <span className="text-lg font-extrabold text-slate-900">
            AI Learn Hub
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link
              href="/learn"
              className="hover:text-indigo-600 transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/category/learning"
              className="hover:text-indigo-600 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/path"
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              🎯 My Path
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
