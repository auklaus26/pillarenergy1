import { ArrowRight, BatteryCharging, Bolt, BriefcaseBusiness, SunMedium } from "lucide-react";

import type { ServiceItem } from "@/content/site-content";

const icons = {
  solar: SunMedium,
  storage: BatteryCharging,
  electrical: Bolt,
  projects: BriefcaseBusiness
} as const;

type ServiceCardProps = {
  service: ServiceItem;
  href?: string;
};

export function ServiceCard({ service, href }: ServiceCardProps) {
  const Icon = icons[service.id as keyof typeof icons] ?? BriefcaseBusiness;

  return (
    <article className="group flex h-full flex-col justify-between bg-[var(--surface-white)] p-8 transition-all duration-200 hover:bg-[var(--primary)]">
      <div>
        <Icon className="h-8 w-8 text-[var(--primary)] transition-colors group-hover:text-white" />
        <h3 className="mt-8 font-[var(--font-headline)] text-xl font-black uppercase tracking-[-0.03em] text-[var(--foreground)] transition-colors group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] transition-colors group-hover:text-[rgba(255,255,255,0.82)]">
          {service.summary}
        </p>
      </div>
      {href ? (
        <div className="mt-8 flex items-center gap-2 font-[var(--font-headline)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] transition-colors group-hover:text-white">
          View detail
          <ArrowRight className="h-4 w-4" />
        </div>
      ) : null}
    </article>
  );
}
