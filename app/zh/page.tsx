import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { HeroVisual } from "@/components/visual-panels";
import { siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "中文",
  description: "Pillar Energy 中文简介页面。"
};

export default function ChinesePage() {
  return (
    <main>
      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="grid-shell-wide grid gap-14 px-2 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="section-kicker text-[var(--primary)]">Engineered Integrity</p>
            <h1 className="headline-xl mt-6 font-[var(--font-headline)] font-black text-[var(--foreground)]">
              {siteConfig.chinese.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{siteConfig.chinese.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-8 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-white"
              >
                联系我们
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-14 items-center justify-center border-2 border-[var(--primary)] px-8 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]"
              >
                English
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="bg-[var(--surface-low)] py-20 md:py-24">
        <div className="grid-shell-wide px-2">
          <SectionHeading kicker="关于我们" title="系统结构、合规标准、长期运行" />
          <div className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)]">
            <p>{siteConfig.chinese.philosophy}</p>
          </div>
          <div className="mt-12 grid gap-px border border-[var(--outline)] bg-[var(--outline)] md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.chinese.services.map((service) => (
              <div key={service} className="bg-[var(--surface-white)] p-8 font-[var(--font-headline)] text-xl font-black text-[var(--foreground)]">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="grid-shell-wide px-2">
          <SectionHeading
            kicker="联系"
            title="欢迎联系 PILLAR ENERGY"
            description={siteConfig.chinese.contact}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-[var(--surface-deep)] p-8">
              <div className="section-kicker text-[var(--tertiary)]">Email</div>
              <div className="mt-4 text-xl font-bold text-[var(--foreground)]">{siteConfig.email}</div>
            </div>
            <div className="bg-[var(--surface-deep)] p-8">
              <div className="section-kicker text-[var(--tertiary)]">Location</div>
              <div className="mt-4 text-xl font-bold text-[var(--foreground)]">{siteConfig.location}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
