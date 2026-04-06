import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { DataPillar } from "@/components/data-pillar";
import { BlueprintVisual, HeroVisual } from "@/components/visual-panels";
import { siteConfig } from "@/content/site-content";

export default function HomePage() {
  return (
    <main>
      <PageHero
        kicker="Engineering Reliability"
        title="Built on pillars. Built to last."
        description="Australia-based energy solutions brand delivering structured, compliant, and long-term energy systems for residential, commercial, and project-based clients."
        supportingText="立于根基，行至久远"
        actions={[
          { href: "/services", label: "Our Services" },
          { href: "/contact", label: "Contact Us", variant: "secondary" }
        ]}
        visual={<HeroVisual />}
        dark
      />

      <section className="bg-[var(--surface-low)] py-20 md:py-28">
        <div className="grid-shell-wide grid gap-16 px-2 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <SectionHeading
              kicker="Core Philosophy"
              title="Energy systems as structural foundations"
              description="We deliver energy systems designed as long-term foundations, not short-term add-ons. Our focus is not on individual products, but on system structure, compliance, and long-term reliability."
            />
            <div className="mt-10 border-l-[8px] border-[var(--primary)] pl-8 text-lg leading-8 text-[var(--muted)]">
              From planning to delivery, we treat every system as part of a broader project.
            </div>
          </div>
          <div className="grid gap-6">
            <BlueprintVisual />
            <div className="grid grid-cols-2 gap-6 bg-[var(--surface-white)] p-8 shadow-[var(--shadow-soft)]">
              <div>
                <div className="font-[var(--font-headline)] text-4xl font-black uppercase tracking-[-0.04em] text-[var(--foreground)]">
                  100%
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Compliance-led delivery
                </div>
              </div>
              <div>
                <div className="font-[var(--font-headline)] text-4xl font-black uppercase tracking-[-0.04em] text-[var(--foreground)]">
                  24/7
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Structured follow-up
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="grid-shell-wide px-2">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Vertical Integration"
              title="Service Categories"
              description="Long-term energy systems spanning solar, storage, electrical delivery, and project-level coordination."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-[var(--font-headline)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-px border border-[var(--outline)] bg-[var(--outline)] lg:grid-cols-4">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} href={`/services#${service.id}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--hero)] py-20 text-white md:py-28">
        <div className="grid-shell-wide grid gap-12 px-2 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="industrial-panel min-h-[420px] border border-[rgba(255,255,255,0.08)]" />
          <div>
            <SectionHeading
              kicker="Project Integration"
              title="Architectural scale energy delivery"
              description="From planning to delivery, every system is treated as part of a broader project structure with compliance and longevity built in."
              inverse
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <DataPillar label="Compliance rate" value="100%" />
              <DataPillar label="Performance monitoring" value="24/7" />
            </div>
            <div className="mt-10">
              <Link
                href="/projects"
                className="inline-flex min-h-14 items-center justify-center bg-[var(--surface-white)] px-8 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)] transition-all hover:bg-[var(--surface-high)]"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-highest)] py-20 md:py-24">
        <div className="grid-shell px-2 text-center">
          <SectionHeading
            kicker="Consultation"
            title="Ready to build your pillar?"
            description="Discuss an energy system or project with a team that prioritizes structure, compliance, and long-term reliability."
            align="center"
          />
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-8 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-14 items-center justify-center border-2 border-[var(--primary)] px-8 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-[var(--primary)]"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
