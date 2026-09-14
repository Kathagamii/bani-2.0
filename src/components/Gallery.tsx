"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import PlaceholderArt from "./PlaceholderArt";
import SectionKicker from "./SectionKicker";

const ASPECTS = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]"];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + gallery.items.length) % gallery.items.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % gallery.items.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="relative bg-charcoal py-20 sm:py-28">
      <div className="container-edit">
        <Reveal>
          <SectionKicker label={gallery.kicker} />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-milk sm:text-4xl lg:text-5xl">
            {gallery.title}
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden text-left"
              aria-label={`Открыть фото: ${item.alt}`}
            >
              <Media
                slot={item}
                className={`w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${
                  item.width && item.height ? "" : ASPECTS[i % ASPECTS.length]
                }`}
                style={item.width && item.height ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/97 p-4 sm:p-10"
          >
            <button
              onClick={close}
              aria-label="Закрыть"
              className="absolute right-5 top-5 text-linen/70 hover:text-milk sm:right-8 sm:top-8"
            >
              <X size={30} />
            </button>
            <button
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 text-linen/70 hover:text-milk sm:left-8"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 text-linen/70 hover:text-milk sm:right-8"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-h-[85vh] max-w-[92vw] flex-col items-center"
            >
              {gallery.items[active].src && gallery.items[active].width && gallery.items[active].height ? (
                <Image
                  src={gallery.items[active].src!}
                  alt={gallery.items[active].alt}
                  width={gallery.items[active].width}
                  height={gallery.items[active].height}
                  sizes="92vw"
                  className="max-h-[75vh] w-auto max-w-[92vw] object-contain"
                />
              ) : (
                <PlaceholderArt
                  variant={gallery.items[active].variant}
                  className="aspect-[4/5] w-full max-w-xl sm:aspect-[3/4]"
                  aria-label={gallery.items[active].alt}
                />
              )}
              <p className="mt-4 text-center text-[13px] tracking-[0.08em] uppercase text-linen/50">
                {gallery.items[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
