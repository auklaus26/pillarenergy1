"use client";

import { useState, useTransition } from "react";

import { siteConfig } from "@/content/site-content";
import { contactSchema } from "@/lib/contact";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const initialState: FormState = { status: "idle" };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-8"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
          setState(initialState);
          const payload = {
            fullName: String(formData.get("fullName") ?? ""),
            organization: String(formData.get("organization") ?? ""),
            email: String(formData.get("email") ?? ""),
            category: String(formData.get("category") ?? ""),
            message: String(formData.get("message") ?? ""),
            consent: formData.get("consent") === "on"
          };

          const parsed = contactSchema.safeParse(payload);

          if (!parsed.success) {
            setState({
              status: "error",
              message: parsed.error.issues[0]?.message ?? "Invalid submission."
            });
            return;
          }

          const subject = encodeURIComponent(`Pillar Energy enquiry: ${parsed.data.category}`);
          const body = encodeURIComponent(
            [
              `Name: ${parsed.data.fullName}`,
              `Organisation: ${parsed.data.organization || "-"}`,
              `Email: ${parsed.data.email}`,
              `Category: ${parsed.data.category}`,
              "",
              "Project detail:",
              parsed.data.message
            ].join("\n")
          );

          window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

          setState({
            status: "success",
            message: "Your email client should open with the enquiry prefilled."
          });
        });
      }}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Full Name">
          <input name="fullName" required className={fieldClassName} placeholder="Engineering Lead / Manager" />
        </Field>
        <Field label="Company Organisation">
          <input name="organization" className={fieldClassName} placeholder="Corporate entity name" />
        </Field>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Email Address">
          <input name="email" type="email" required className={fieldClassName} placeholder="corporate@domain.com.au" />
        </Field>
        <Field label="Inquiry Category">
          <select name="category" required defaultValue="" className={fieldClassName}>
            <option value="" disabled>
              Select category
            </option>
            {siteConfig.contactCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Detailed Specifications">
        <textarea
          name="message"
          required
          rows={5}
          className={fieldClassName}
          placeholder="Outline system requirements, load parameters, timeline, or technical objectives..."
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded-none border-[var(--outline)] text-[var(--primary)] focus:ring-[var(--primary)]"
        />
        <span>I acknowledge the processing of data through PILLAR ENERGY&apos;s structured support framework.</span>
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-14 items-center justify-center bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-10 font-[var(--font-headline)] text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:brightness-105 disabled:cursor-wait disabled:opacity-70"
        >
          {isPending ? "Submitting..." : "Submit Engineering Request"}
        </button>
        {state.status !== "idle" ? (
          <p className={`max-w-md text-sm ${state.status === "success" ? "text-[var(--primary)]" : "text-[#ba1a1a]"}`}>
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-[var(--font-headline)] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[rgba(64,72,79,0.86)]">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClassName =
  "w-full border-0 border-b-2 border-transparent bg-[var(--surface-high)] px-4 py-4 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[rgba(64,72,79,0.55)] focus:border-[var(--primary)]";
