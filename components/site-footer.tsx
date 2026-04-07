import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--outline)] bg-[var(--surface-low)]">
      <div className="grid-shell-wide grid gap-12 px-2 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="font-[var(--font-headline)] text-xl font-black uppercase tracking-[-0.04em]">
            {siteConfig.companyName}
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Structured, compliant, and long-term energy systems for residential,
            commercial, and project-based clients.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[rgba(64,72,79,0.8)]">
            {siteConfig.footerLegal}
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-[var(--font-headline)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Navigation
          </h2>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            {siteConfig.navigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="font-[var(--font-headline)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Reach Us
          </h2>
          <div className="space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
