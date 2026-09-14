interface SectionKickerProps {
  label: string;
  className?: string;
}

export default function SectionKicker({ label, className }: SectionKickerProps) {
  return (
    <span
      className={`flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light ${className ?? ""}`}
    >
      <span className="h-px w-8 bg-copper-light/70" />
      {label}
    </span>
  );
}
