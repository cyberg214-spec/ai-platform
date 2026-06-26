import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuralFlow — AI Automation Platform",
  description:
    "Automate workflows, eliminate manual tasks, and scale intelligently with NeuralFlow's enterprise-grade AI platform.",
  keywords: ["AI automation", "data platform", "workflow automation", "enterprise AI"],
  openGraph: {
    title: "NeuralFlow — AI Automation Platform",
    description: "Automate workflows and scale with enterprise-grade AI.",
    url: "https://neuralflow.ai",
    siteName: "NeuralFlow",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralFlow — AI Automation Platform",
    description: "Automate workflows and scale with enterprise-grade AI.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://neuralflow.ai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}