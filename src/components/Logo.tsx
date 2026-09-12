import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  className?: string;
  boxClassName?: string;
  sizes?: string;
}

/**
 * Растровый логотип студии — на белой подложке (jpg без альфа-канала).
 * Показываем его на светлой "плашке", а не поверх тёмного фона напрямую:
 * так белый фон читается как осознанная деталь (клеймо/бирка), а не баг.
 */
export default function Logo({ className, boxClassName, sizes = "64px" }: LogoProps) {
  return (
    <span
      className={clsx(
        "relative block shrink-0 overflow-hidden rounded-md bg-milk shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
        boxClassName ?? "h-11 w-14 sm:h-12 sm:w-16",
        className
      )}
    >
      <Image
        src="/logo.jpg"
        alt="Авторские бани — логотип"
        fill
        sizes={sizes}
        className="object-contain p-1"
      />
    </span>
  );
}
