import { materials } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import SectionKicker from "./SectionKicker";

export default function Materials() {
  const [line1, line2] = materials.title.split("\n");
  return (
    <section id="materials" className="relative bg-charcoal py-20 sm:py-28">
      <div className="container-edit">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <SectionKicker label={materials.kicker} />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-2xl leading-[1.15] text-milk sm:text-3xl lg:text-4xl">
                {line1}
                <br />
                {line2}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="max-w-sm">
            <p className="text-[14px] leading-relaxed text-linen/60">{materials.body}</p>
            <a
              href={materials.linkHref}
              className="mt-3 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-copper-light"
            >
              {materials.linkLabel}
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {materials.items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <div className="group relative aspect-[3/4] overflow-hidden">
                <Media
                  slot={item.media}
                  className="absolute inset-0 h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-ink/25" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="font-serif text-xl uppercase tracking-[0.08em] text-milk sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] tracking-[0.04em] text-linen/80">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
