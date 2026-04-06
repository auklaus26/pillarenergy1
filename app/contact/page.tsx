import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { CityVisual } from "@/components/visual-panels";
import { siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pillar Energy to discuss an energy system or project through a structured support and follow-up process."
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="grid-shell-wide grid gap-16 px-2 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="space-y-10">
            <div>
              <p className="section-kicker text-[var(--tertiary)]">Communication Hub</p>
              <h1 className="headline-lg mt-5 font-[var(--font-headline)] font-black uppercase text-[var(--foreground)]">
                Get in touch.
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
                If you would like to discuss an energy system or project, contact us through the structured support pathway below.
              </p>
            </div>

            <div className="space-y-7">
              <InfoItem
                icon={<Mail className="h-5 w-5 text-white" />}
                label="Electronic Mail"
                value={siteConfig.email}
                accent
              />
              <InfoItem
                icon={<Phone className="h-5 w-5 text-[var(--primary)]" />}
                label="Direct Line"
                value="Coming Soon"
              />
              <InfoItem
                icon={<MapPin className="h-5 w-5 text-[var(--primary)]" />}
                label="Operations Base"
                value={siteConfig.location}
              />
            </div>

            <div className="border-l-4 border-[var(--primary)] bg-[var(--surface-low)] p-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                <span className="font-[var(--font-headline)] text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Compliance Protocol
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                All enquiries are processed through our structured support system to ensure technical accuracy and proper follow-up.
              </p>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="industrial-panel min-h-[280px] border border-[var(--outline)]" />
            <div className="bg-[var(--surface-white)] p-8 shadow-[var(--shadow-soft)] md:p-12">
              <SectionHeading
                kicker="Enquiry Form"
                title="Technical project inquiry"
                description="Submit your project scope, system requirements, or technical objectives."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-low)] py-20 md:py-24">
        <div className="grid-shell-wide grid gap-16 px-2 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Location"
              title="Pillar Operations HQ"
              description="Our headquarters serves as the coordination base for project management and structured support across Australia."
            />
            <p className="mt-8 text-lg text-[var(--muted)]">{siteConfig.location}</p>
          </div>
          <CityVisual className="border border-[var(--outline)]" />
        </div>
      </section>
    </main>
  );
}

function InfoItem({
  icon,
  label,
  value,
  accent = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-12 w-12 items-center justify-center ${
          accent ? "bg-[var(--primary-strong)]" : "bg-[var(--surface-highest)]"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="font-[var(--font-headline)] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--tertiary)]">
          {label}
        </div>
        <div className="mt-1 text-lg font-bold text-[var(--foreground)]">{value}</div>
      </div>
    </div>
  );
}
