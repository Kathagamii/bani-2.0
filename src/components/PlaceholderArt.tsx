import { ArtVariant } from "@/lib/content";
import clsx from "clsx";

/** Небольшой детерминированный хэш строки -> [0, 1), чтобы одинаковые варианты
 *  (например несколько "wood") получали разное положение блика, но не мигали
 *  между рендерами. */
function seedFromString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
}

function buildGradient(variant: ArtVariant, seed: number): string {
  const x1 = Math.round(15 + seed * 65);
  const y1 = Math.round(10 + ((seed * 7) % 1) * 60);
  const x2 = Math.round(20 + ((seed * 3.1) % 1) * 60);
  const y2 = Math.round(15 + ((seed * 5.3) % 1) * 60);
  const angle = Math.round(120 + seed * 100);

  switch (variant) {
    case "wood":
      return `radial-gradient(120% 100% at ${x1}% ${y1}%, #7a5636 0%, #4a3521 42%, #241a10 78%),
              linear-gradient(${angle}deg, rgba(205,154,99,0.28) 0%, rgba(0,0,0,0) 45%)`;
    case "stone":
      return `radial-gradient(130% 110% at ${100 - x1}% ${y1}%, #a49a89 0%, #6f6659 40%, #23201a 80%),
              linear-gradient(${angle}deg, rgba(245,240,230,0.12) 0%, rgba(0,0,0,0) 50%)`;
    case "steam":
      return `radial-gradient(70% 60% at ${x1}% ${y1}%, rgba(245,240,230,0.32) 0%, rgba(245,240,230,0) 60%),
              radial-gradient(80% 55% at ${x2}% ${y2}%, rgba(245,240,230,0.22) 0%, rgba(245,240,230,0) 65%),
              radial-gradient(100% 45% at 50% 88%, rgba(245,240,230,0.16) 0%, rgba(245,240,230,0) 70%),
              linear-gradient(180deg, #1c1712 0%, #0d0b09 100%)`;
    case "fire":
      return `radial-gradient(85% 80% at ${65 + seed * 20}% ${75 + seed * 12}%, #cd9a63 0%, #ab7443 26%, #3c2416 58%, #120d09 82%),
              linear-gradient(${angle}deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)`;
    case "interior":
      return `radial-gradient(85% 70% at ${x2}% ${y1}%, rgba(205,154,99,0.35) 0%, rgba(57,44,32,0.65) 35%, #14110d 75%),
              linear-gradient(${angle}deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 55%)`;
    case "water":
      return `repeating-linear-gradient(${105 + seed * 20}deg, rgba(245,240,230,0.10) 0px, rgba(245,240,230,0.10) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 14px),
              radial-gradient(120% 90% at ${x1}% 100%, #3a3126 0%, #1a1611 55%, #0d0b09 85%)`;
  }
}

interface PlaceholderArtProps {
  variant: ArtVariant;
  className?: string;
  role?: string;
  "aria-label"?: string;
}

export default function PlaceholderArt({
  variant,
  className,
  role,
  ...rest
}: PlaceholderArtProps) {
  const ariaLabel = rest["aria-label"];
  const seed = seedFromString(`${variant}:${ariaLabel ?? ""}`);

  return (
    <div
      role={ariaLabel ? role ?? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={clsx("relative overflow-hidden grain", className)}
      style={{ backgroundImage: buildGradient(variant, seed) }}
    >
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 120px 30px rgba(0,0,0,0.55)" }}
      />
    </div>
  );
}
