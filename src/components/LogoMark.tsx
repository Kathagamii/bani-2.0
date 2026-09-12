import Image from "next/image";
import clsx from "clsx";

interface LogoMarkProps {
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Логотип без фона (обрезан по контенту из logo-no-bg-HD, реальное соотношение
 * сторон холста ~1244:710) — рендерится прямо на тёмном фоне шапки, без
 * подложки: в отличие от Logo.tsx (бейдж для исходного jpg с белым фоном),
 * здесь подложка не нужна.
 */
export default function LogoMark({ className, sizes = "240px", priority }: LogoMarkProps) {
  return (
    <span className={clsx("relative block aspect-[1244/710] shrink-0", className)}>
      <Image
        src="/logo-mark.png"
        alt="Авторские бани"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}
