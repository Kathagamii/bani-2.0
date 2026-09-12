import { formats } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Formats() {
  const [line1, line2] = formats.title.split("\n");
  return (
    <section id="formats" className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
                <span className="h-px w-8 bg-copper-light/70" />
                {formats.index} — {formats.kicker}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
                {line1}
                <br />
                <span className="text-stone">{line2}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="max-w-sm">
            <p className="text-balance text-[14px] leading-relaxed text-linen/60">
              {formats.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {formats.items.map((item, i) => (
            <Reveal key={item.title} delay={0.1 * i}>
              <article className="group">
                <div className="overflow-hidden">
                  <Media
                    slot={item.media}
                    className="aspect-[4/5] w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-milk">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-linen/65">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-copper-light"
                >
                  Обсудить формат
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
