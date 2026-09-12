"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { brand, nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "bg-ink/90 backdrop-blur-md border-b border-linen/10 py-3"
            : "bg-gradient-to-b from-black/50 to-transparent py-5 md:py-7"
        )}
      >
        <div className="container-edit flex items-center justify-between">
          <a
            href="#top"
            className="font-serif text-lg md:text-xl tracking-wide text-milk"
          >
            Авторские бани
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-[0.08em] uppercase text-linen/80 hover:text-copper-light transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center border border-copper-light/60 px-5 py-2.5 text-[13px] tracking-[0.08em] uppercase text-milk hover:bg-copper-light hover:text-ink hover:border-copper-light transition-colors duration-300"
            >
              Обсудить проект
            </a>
          </div>

          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-milk p-2 -mr-2"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink lg:hidden"
          >
            <div className="h-full flex flex-col justify-center container-edit">
              <nav className="flex flex-col gap-2">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl sm:text-5xl py-3 text-milk hover:text-copper-light transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 inline-flex w-fit items-center border border-copper-light/60 px-6 py-3 text-sm tracking-[0.08em] uppercase text-milk"
              >
                Обсудить проект
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 text-sm text-linen/60"
              >
                <div>{brand.phone}</div>
                <div>{brand.city} · {brand.addressShort}</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
