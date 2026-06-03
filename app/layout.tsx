import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-learn-ai-nextjs.vercel.app"
  ),
  title: {
    default: "AI Learn Hub | Learn AI, LLM & Prompt Engineering",
    template: "%s | AI Learn Hub",
  },
  description: "Learn AI step by step with structured lessons and SEO-friendly guides.",
  verification: {
    google: "DeXQONqyH5_mOWI6uWedRrYXl4SPKo5AWyKf-qb6joc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}