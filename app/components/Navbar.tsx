import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
        >
          AI Learn Hub
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/learn" className="hover:text-indigo-600 transition-colors">
            Learn
          </Link>
          <Link
            href="/category/learning"
            className="hover:text-indigo-600 transition-colors"
          >
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
