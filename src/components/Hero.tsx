"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutTemplate, Leaf, User, Settings, MapPin, LucideIcon } from "lucide-react";
import { hero, HeroBenefitIcon } from "@/lib/content";
import Media from "./Media";

const BENEFIT_ICONS: Record<HeroBenefitIcon, LucideIcon> = {
  layout: LayoutTemplate,
  leaf: Leaf,
  user: User,
  settings: Settings,
  mapPin: MapPin,
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Media slot={hero.media} className="absolute inset-0 h-full w-full" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100svh] flex-col justify-center">
        <div className="container-edit py-32 sm:py-36">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-[12px] tracking-[0.14em] uppercase text-sand/90 sm:text-[13px] sm:tracking-[0.2em]"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-serif leading-[1.12] text-milk">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block max-w-2xl text-3xl font-medium sm:text-4xl lg:text-5xl"
            >
              {hero.headline}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 block max-w-xl text-xl text-linen/85 sm:text-2xl lg:text-[1.7rem]"
            >
              {hero.headlineSecondary}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl"
          >
            <p className="text-[15px] leading-relaxed text-linen/80 sm:text-base">{hero.bodyIntro}</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13px] text-linen/65 sm:text-[14px]">
              {hero.processSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-2.5">
                  {step}
                  {i < hero.processSteps.length - 1 && (
                    <span className="text-copper-light/70">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-linen/80 sm:text-base">
              {hero.bodyClosing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9"
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:mt-16 lg:flex lg:flex-wrap lg:gap-x-10"
          >
            {hero.benefits.map((benefit) => {
              const Icon = BENEFIT_ICONS[benefit.icon];
              return (
                <div key={benefit.label} className="flex max-w-[12rem] items-start gap-3">
                  <Icon size={19} className="mt-0.5 shrink-0 text-copper-light" />
                  <span className="text-[13px] leading-snug text-linen/75">{benefit.label}</span>
                </div>
              );
            })}
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
