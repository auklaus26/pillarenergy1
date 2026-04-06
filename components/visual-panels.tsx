export function HeroVisual() {
  return (
    <div className="industrial-panel flex h-full min-h-[360px] items-end justify-start border border-[rgba(255,255,255,0.08)] p-8 shadow-[var(--shadow-soft)]">
      <div className="relative z-10 max-w-xs bg-[rgba(9,29,46,0.72)] p-6 backdrop-blur">
        <div className="section-kicker text-[var(--primary-soft)]">Engineering Reliability</div>
        <div className="mt-4 font-[var(--font-headline)] text-3xl font-black uppercase tracking-[-0.04em] text-white">
          Structured systems for long-term energy delivery
        </div>
      </div>
    </div>
  );
}

export function BlueprintVisual({ className = "" }: { className?: string }) {
  return <div className={`blueprint-panel h-full min-h-[320px] ${className}`} />;
}

export function CityVisual({ className = "" }: { className?: string }) {
  return <div className={`city-panel h-full min-h-[320px] ${className}`} />;
}
