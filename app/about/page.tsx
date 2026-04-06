import type { Metadata } from "next";

import { BlueprintVisual } from "@/components/visual-panels";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pillar Energy, the philosophy behind the name, and the project-led approach to long-term energy systems."
};

const approachItems = [
  "System thinking over individual products",
  "Projects over one-off installations",
  "Compliance as a baseline, not an option"
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="Identity"
        title="Engineering reliability"
        description={`PILLAR ENERGY is an energy services brand operated by ${siteConfig.legalName}, supporting residential and commercial clients with structured, compliant, and project-driven energy systems.`}
        visual={<BlueprintVisual className="border border-[var(--outline)] bg-[var(--surface-white)]" />}
      />

      <section className="py-20 md:py-28">
        <div className="grid-shell-wide grid gap-12 px-2 md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] p-10 text-white md:p-14">
            <p className="section-kicker text-[var(--primary-soft)]">Identity</p>
            <h2 className="mt-12 font-[var(--font-headline)] text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
              Who We Are
            </h2>
          </div>
          <div className="bg-[var(--surface-deep)] p-10 text-lg leading-8 text-[var(--foreground)] md:p-14">
            Operated by <strong>{siteConfig.legalName}</strong>, PILLAR ENERGY supports residential and commercial clients with structured, compliant, and project-driven energy systems.
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-highest)] py-20 md:py-28">
        <div className="grid-shell-wide grid gap-14 px-2 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="01"
              title="Why “Pillar”"
              description="The name reflects the belief that energy systems should be foundations, not short-term solutions. Systems are treated as structural components designed for long-term operation, compliance, and reliability."
            />
          </div>
          <div className="industrial-panel min-h-[420px] border border-[var(--outline)]">
            <div className="relative z-10 ml-8 mt-auto max-w-xs bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] p-8 text-white">
              <div className="font-[var(--font-headline)] text-2xl font-black uppercase tracking-[-0.03em]">
                Foundations over short-term solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="grid-shell-wide px-2">
          <SectionHeading
            kicker="Methodology"
            title="Our Approach"
            description="Well-designed systems should operate quietly and reliably in the background."
          />
          <div className="mt-14 grid gap-px border border-[var(--outline)] bg-[var(--outline)] md:grid-cols-3">
            {approachItems.map((item) => (
              <div key={item} className="bg-[var(--surface-low)] p-10">
                <div className="border-l-[8px] border-[var(--primary)] pl-5">
                  <h3 className="font-[var(--font-headline)] text-2xl font-black uppercase tracking-[-0.03em]">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--hero)] py-24 text-white md:py-32">
        <div className="grid-shell-wide relative px-2">
          <SectionHeading
            kicker="Vision"
            title="To become a trusted pillar for long-term energy systems"
            description="Supporting residential and commercial projects with stability, compliance, and system-level thinking."
            inverse
          />
        </div>
      </section>
    </main>
  );
}
