type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  inverse = false
}: SectionHeadingProps) {
  const tone = inverse ? "text-white" : "text-[var(--foreground)]";
  const body = inverse ? "text-[rgba(232,242,255,0.76)]" : "text-[var(--muted)]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`section-kicker mb-4 ${inverse ? "text-[var(--primary-soft)]" : "text-[var(--tertiary)]"}`}>
        {kicker}
      </p>
      <h2 className={`headline-lg font-[var(--font-headline)] font-black uppercase ${tone}`}>{title}</h2>
      {description ? <p className={`mt-6 text-lg leading-8 ${body}`}>{description}</p> : null}
    </div>
  );
}
