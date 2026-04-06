import type { Metadata } from "next";

import { ProjectTable } from "@/components/project-table";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and planning-stage energy systems presented at status level to protect client privacy."
};

export default function ProjectsPage() {
  return (
    <main className="py-16 md:py-24">
      <section>
        <div className="grid-shell-wide px-2">
          <div className="flex items-start gap-5">
            <div className="mt-1 h-20 w-2 bg-[var(--primary)]" />
            <SectionHeading
              kicker="Project Portfolio"
              title="Selected projects & demonstration cases"
              description="Technical documentation of active energy deployments and future infrastructure planning. Project details are presented at system and status level to protect client privacy."
            />
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="grid-shell-wide px-2">
          <div className="flex items-end justify-between gap-6 border-b border-[var(--outline)] pb-4">
            <h2 className="font-[var(--font-headline)] text-2xl font-black uppercase tracking-[-0.03em]">
              Demonstration Projects
            </h2>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Phase 01: Active Site
            </span>
          </div>
          <div className="mt-8 grid overflow-hidden border border-[var(--outline)] bg-[var(--surface-low)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[var(--primary)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white">
                  Active
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Reference: PE-RES-001
                </span>
              </div>
              <h3 className="mt-8 font-[var(--font-headline)] text-4xl font-black uppercase tracking-[-0.04em]">
                Residential Battery System
              </h3>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="border-l-4 border-[var(--primary-strong)] pl-5">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                    System Scale
                  </div>
                  <div className="mt-2 text-2xl font-bold">10kW Solar + 20kWh Battery</div>
                </div>
                <div className="border-l-4 border-[var(--primary-strong)] pl-5">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Status
                  </div>
                  <div className="mt-2 text-2xl font-bold">Demonstration Project</div>
                </div>
              </div>
              <div className="mt-10 space-y-4 text-sm">
                {[
                  ["System focus", "Structured status display"],
                  ["Monitoring", "Available for reference review"],
                  ["Delivery model", "Project-based system approach"]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-[var(--outline)] pb-3 last:border-b-0">
                    <span className="text-[var(--muted)]">{label}</span>
                    <span className="font-semibold text-[var(--primary)]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="industrial-panel min-h-[360px] border-l border-[var(--outline)]" />
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="grid-shell-wide px-2">
          <div className="flex items-end justify-between gap-6 border-b border-[var(--outline)] pb-4">
            <h2 className="font-[var(--font-headline)] text-2xl font-black uppercase tracking-[-0.03em]">
              Projects in Planning
            </h2>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Phase 02: Planning
            </span>
          </div>
          <div className="mt-8">
            <ProjectTable projects={siteConfig.planningProjects} />
          </div>
        </div>
      </section>
    </main>
  );
}
