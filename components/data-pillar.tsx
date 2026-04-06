type DataPillarProps = {
  label: string;
  value: string;
};

export function DataPillar({ label, value }: DataPillarProps) {
  return (
    <div className="border-l-[6px] border-[var(--primary)] pl-5">
      <div className="font-[var(--font-headline)] text-3xl font-black uppercase tracking-[-0.04em] text-white">
        {value}
      </div>
      <div className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgba(232,242,255,0.7)]">
        {label}
      </div>
    </div>
  );
}
