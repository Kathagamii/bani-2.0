"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import PlaceholderArt from "./PlaceholderArt";

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
    <section id="gallery" className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <Reveal>
          <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
            <span className="h-px w-8 bg-copper-light/70" />
            {gallery.index} — {gallery.kicker}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
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
                className={`${ASPECTS[i % ASPECTS.length]} w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]`}
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
              className="relative aspect-[4/5] w-full max-w-xl sm:aspect-[3/4]"
            >
              <PlaceholderArt
                variant={gallery.items[active].variant}
                className="h-full w-full"
                aria-label={gallery.items[active].alt}
              />
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
