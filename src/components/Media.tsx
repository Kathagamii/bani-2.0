import Image from "next/image";
import clsx from "clsx";
import { MediaSlot } from "@/lib/content";
import PlaceholderArt from "./PlaceholderArt";

interface MediaProps {
  slot: MediaSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Рендерит реальное фото, если оно уже подставлено в data-слой (`slot.src`).
 * Пока реальных фото нет — показывает атмосферный placeholder того же
 * формата, так что замена на реальные снимки не потребует правок вёрстки.
 */
export default function Media({ slot, className, sizes, priority }: MediaProps) {
  if (slot.src) {
    return (
      <div className={clsx("relative overflow-hidden", className)}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <PlaceholderArt
      variant={slot.variant}
      className={className}
      role="img"
      aria-label={slot.alt}
    />
  );
}
