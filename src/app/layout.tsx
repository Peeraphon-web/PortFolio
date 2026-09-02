import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: "Peeraphon Laoha - Software Engineer & Full-stack Developer",
  description:
    "Software Engineer and Full-stack Developer building practical web, desktop, data, integration, and automation experiences with Next.js, TypeScript, Electron, and Supabase.",
  applicationName: "Peeraphon Laoha Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: "Peeraphon Laoha - Software Engineer & Full-stack Developer",
    description:
      "Modern portfolio for Peeraphon Laoha, focused on practical web and cross-platform software products.",
    url: siteUrl?.toString(),
    siteName: "Peeraphon Laoha Portfolio",
    type: "website",
    images: [{
      url: siteUrl ? new URL("/opengraph-image", siteUrl) : "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Peeraphon Laoha - Software Engineer and Full-stack Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peeraphon Laoha - Software Engineer & Full-stack Developer",
    description:
      "Next.js, TypeScript, React, Supabase, Electron, and practical product engineering.",
    images: [siteUrl ? new URL("/opengraph-image", siteUrl) : "/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
