import { brand, finalCta } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";

export default function FinalCta() {
  const [line1, line2] = finalCta.title.split("\n");
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
      <Media slot={finalCta.media} className="absolute inset-0 h-full w-full" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-black/25" />

      <div className="container-edit relative z-10 py-24">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-[12vw] leading-[1.02] text-milk sm:text-6xl lg:text-7xl">
            {line1}
            <br />
            <span className="text-copper-light">{line2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-copper-light/60 bg-copper-light px-8 py-4 text-[13px] tracking-[0.1em] uppercase text-ink transition-colors duration-300 hover:bg-transparent hover:text-milk"
            >
              {finalCta.cta}
            </a>
            <a href={brand.phoneHref} className="text-[15px] text-linen/85 hover:text-copper-light">
              {brand.phone}
            </a>
            <a
              href={brand.vkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] text-linen/85 hover:text-copper-light"
            >
              VK
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
