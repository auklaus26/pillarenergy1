"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import type { NavItem } from "@/content/site-content";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--outline)] bg-[rgba(247,249,255,0.94)] backdrop-blur">
      <div className="grid-shell-wide flex items-center justify-between gap-6 px-2 py-5">
        <Link href="/" className="font-[var(--font-headline)] text-xl font-black uppercase tracking-[-0.04em]">
          Pillar Energy
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[var(--font-headline)] text-[0.76rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "border-b-2 border-[var(--primary)] pb-1 text-[var(--primary)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/zh"
            className="border border-[var(--outline)] px-3 py-2 font-[var(--font-headline)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--primary)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--surface-low)]"
          >
            中文
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--outline)] text-[var(--foreground)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-[var(--outline)] bg-[var(--surface-white)] md:hidden">
          <div className="grid-shell space-y-3 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block font-[var(--font-headline)] text-sm font-semibold uppercase tracking-[0.16em] ${
                    active ? "text-[var(--primary)]" : "text-[var(--muted)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
