import type { Route } from "next";
import Link from "next/link";

type HeroAction = {
  href: Route;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  supportingText?: string;
  actions?: HeroAction[];
  visual?: React.ReactNode;
  dark?: boolean;
};

export function PageHero({
  kicker,
  title,
  description,
  supportingText,
  actions,
  visual,
  dark = false
}: PageHeroProps) {
  const baseClass = dark
    ? "bg-[var(--hero)] text-white"
    : "bg-[var(--surface-low)] text-[var(--foreground)]";
  const bodyClass = dark ? "text-[rgba(232,242,255,0.82)]" : "text-[var(--muted)]";

  return (
    <section className={`${baseClass} relative overflow-hidden`}>
      <div className="absolute inset-0 tech-lines opacity-50" />
      <div className="grid-shell-wide relative grid gap-14 px-2 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <div className="max-w-3xl">
          <p className={`section-kicker ${dark ? "text-[var(--primary-soft)]" : "text-[var(--primary)]"} mb-6`}>
            {kicker}
          </p>
          <h1 className="headline-xl text-balance font-[var(--font-headline)] font-black uppercase">
            {title}
          </h1>
          <p className={`mt-8 max-w-2xl text-lg leading-8 md:text-xl ${bodyClass}`}>{description}</p>
          {supportingText ? (
            <p className="mt-6 font-[var(--font-headline)] text-xl font-bold tracking-[-0.03em] text-[var(--primary-soft)]">
              {supportingText}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => {
                const primary = action.variant !== "secondary";
                return (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`inline-flex min-h-14 items-center justify-center px-8 font-[var(--font-headline)] text-xs font-bold uppercase tracking-[0.18em] transition-all ${
                      primary
                        ? "bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] text-white hover:brightness-105"
                        : dark
                          ? "border-2 border-[var(--primary)] text-white hover:bg-[rgba(0,97,147,0.14)]"
                          : "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--surface-white)]"
                    }`}
                  >
                    {action.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="min-h-[300px]">{visual}</div>
      </div>
    </section>
  );
}
