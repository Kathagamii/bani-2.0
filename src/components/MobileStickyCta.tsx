"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { brand } from "@/lib/content";

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 flex border-t border-linen/10 bg-ink/95 backdrop-blur-sm transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={brand.phoneHref}
        aria-label="Позвонить"
        className="flex items-center justify-center border-r border-linen/10 px-5 py-4 text-linen/80"
      >
        <Phone size={20} />
      </a>
      <a
        href="#contact"
        className="flex-1 py-4 text-center text-[13px] tracking-[0.1em] uppercase text-milk"
      >
        Обсудить проект
      </a>
    </div>
  );
}
