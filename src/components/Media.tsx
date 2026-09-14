import Image from "next/image";
import clsx from "clsx";
import { CSSProperties } from "react";
import { MediaSlot } from "@/lib/content";
import PlaceholderArt from "./PlaceholderArt";

interface MediaProps {
  slot: MediaSlot;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  /** Точка фокуса кропа object-cover, напр. "center bottom" — полезно, когда
   *  главный сюжет фото смещён к одному краю кадра. */
  objectPosition?: string;
}

/**
 * Рендерит реальное фото, если оно уже подставлено в data-слой (`slot.src`).
 * Пока реальных фото нет — показывает атмосферный placeholder того же
 * формата, так что замена на реальные снимки не потребует правок вёрстки.
 */
export default function Media({ slot, className, style, sizes, priority, objectPosition }: MediaProps) {
  if (slot.src) {
    // Если вызывающий код уже передал "absolute" (фон на весь блок), нельзя
    // одновременно навязывать "relative" — в скомпилированном Tailwind CSS
    // оно идёт позже "absolute" и перебивает его, оставляя блок в потоке.
    const hasOwnPosition = /\b(?:absolute|fixed|sticky)\b/.test(className ?? "");
    return (
      <div className={clsx(hasOwnPosition ? "overflow-hidden" : "relative overflow-hidden", className)} style={style}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }
  return (
    <PlaceholderArt
      variant={slot.variant}
      className={className}
      style={style}
      role="img"
      aria-label={slot.alt}
    />
  );
}
