import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pillarenergy.com.au"),
  title: {
    default: "Pillar Energy",
    template: "%s | Pillar Energy"
  },
  description:
    "Australia-based energy solutions brand delivering structured, compliant, and long-term energy systems for residential, commercial, and project-based clients.",
  openGraph: {
    title: "Pillar Energy",
    description:
      "Built on pillars. Built to last. Structured energy systems for residential, commercial, and project-based clients.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable}`}>
      <body className="font-[var(--font-body)] text-[var(--foreground)] antialiased">
        <SiteHeader navItems={siteConfig.navigation} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
