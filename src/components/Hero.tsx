"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { hero } from "@/lib/content";
import Media from "./Media";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const [line1, line2] = hero.headline.split("\n");

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Media slot={hero.media} className="absolute inset-0 h-full w-full" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-edit pb-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-[12px] tracking-[0.14em] uppercase text-sand/90 sm:text-[13px] sm:tracking-[0.2em]"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-serif font-medium leading-[1.08] text-milk">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-4xl sm:text-5xl lg:text-6xl"
            >
              {line1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="block text-4xl sm:text-5xl lg:text-6xl"
            >
              {line2}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-sm text-[15px] leading-relaxed text-linen/85 sm:text-base"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-milk px-7 py-3.5 text-[13px] tracking-[0.1em] uppercase text-ink transition-colors duration-300 hover:bg-copper-light"
            >
              {hero.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex items-center gap-2 text-[13px] text-linen/70"
          >
            <MapPin size={15} className="text-copper-light" />
            {hero.locationTag}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 sm:flex md:right-10"
      >
        <span className="vertical-text text-[11px] tracking-[0.25em] text-linen/60">
          {hero.scrollLabel}
        </span>
        <span className="h-14 w-px bg-linen/30" />
      </motion.div>
    </section>
  );
}
