import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BlueprintVisual } from "@/components/visual-panels";
import { siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Pillar Energy services spanning solar, storage, electrical installations, and project-based energy delivery."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Precision Engineering"
        title="Energy infrastructure"
        description="Providing robust energy solutions across Australia, from residential solar and storage to structured project-based system delivery."
        visual={<BlueprintVisual className="border border-[rgba(255,255,255,0.08)]" />}
        dark
      />

      <section className="bg-[var(--surface-low)] py-10">
        <div className="grid-shell-wide grid gap-px border border-[var(--outline)] bg-[var(--outline)] px-2 md:grid-cols-4">
          {siteConfig.services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="bg-[var(--surface-white)] p-8 transition-colors duration-200 hover:bg-[var(--primary)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <div className="font-[var(--font-headline)] text-sm font-black uppercase tracking-[0.16em]">
                {service.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {siteConfig.services.map((service, index) => {
        const inverted = service.id === "projects";
        const sectionClass = inverted
          ? "bg-[var(--hero)] text-white"
          : index % 2 === 0
            ? "bg-[var(--surface)]"
            : "bg-[var(--surface-low)]";

        return (
          <section key={service.id} id={service.id} className={`${sectionClass} py-20 md:py-28`}>
            <div className="grid-shell-wide grid gap-14 px-2 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionHeading
                  kicker={service.label}
                  title={service.title}
                  description={service.summary}
                  inverse={inverted}
                />
                <div className="mt-10 grid gap-4">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className={`border-l-[6px] border-[var(--primary)] p-6 ${
                        inverted ? "bg-[rgba(255,255,255,0.04)]" : "bg-[var(--surface-deep)]"
                      }`}
                    >
                      <div
                        className={`font-[var(--font-headline)] text-lg font-black uppercase tracking-[-0.03em] ${
                          inverted ? "text-white" : "text-[var(--foreground)]"
                        }`}
                      >
                        {bullet}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6">
                <div
                  className={`min-h-[280px] border ${
                    inverted
                      ? "industrial-panel border-[rgba(255,255,255,0.08)]"
                      : "blueprint-panel border-[var(--outline)]"
                  }`}
                />
                {service.id === "electrical" ? (
                  <div className="grid gap-3">
                    {[
                      "AS/NZS-aligned compliance",
                      "Residential and commercial delivery",
                      "Energy-related electrical works"
                    ].map((item) => (
                      <div key={item} className="bg-[var(--surface-deep)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em]">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
