import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-learn-ai-nextjs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Learn Hub | Learn AI, LLM & Prompt Engineering",
    template: "%s | AI Learn Hub",
  },
  description:
    "Free step-by-step courses to learn Artificial Intelligence, Large Language Models, and Prompt Engineering. Beginner to advanced lessons with real-world examples.",
  keywords: [
    "learn AI",
    "AI tutorial",
    "LLM course",
    "prompt engineering",
    "ChatGPT guide",
    "machine learning beginner",
    "artificial intelligence",
    "AI for beginners",
  ],
  authors: [{ name: "AI Learn Hub", url: SITE_URL }],
  creator: "AI Learn Hub",
  publisher: "AI Learn Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AI Learn Hub",
    title: "AI Learn Hub | Learn AI, LLM & Prompt Engineering",
    description:
      "Free step-by-step courses to learn Artificial Intelligence, Large Language Models, and Prompt Engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Learn Hub | Learn AI, LLM & Prompt Engineering",
    description: "Free step-by-step courses to learn AI, LLMs, and Prompt Engineering.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "DeXQONqyH5_mOWI6uWedRrYXl4SPKo5AWyKf-qb6joc",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AI Learn Hub",
      description: "Free AI, LLM, and Prompt Engineering courses for everyone.",
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/learn?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AI Learn Hub",
      url: SITE_URL,
      sameAs: ["https://github.com/ziqi108/ai-LearnAI"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
