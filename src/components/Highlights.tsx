import { highlights } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import SectionKicker from "./SectionKicker";

export default function Highlights() {
  const [line1, line2] = highlights.title.split("\n");
  const [a, b, c, d] = highlights.items;

  return (
    <section className="relative bg-charcoal py-20 sm:py-28">
      <div className="container-edit grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionKicker label={highlights.kicker} />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[13px] tracking-[0.1em] text-linen/45">{highlights.counter}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl leading-[1.1] text-milk sm:text-4xl">
              {line1}
              <br />
              {line2}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-linen/65">{highlights.body}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href={highlights.linkHref}
              className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-copper-light"
            >
              {highlights.linkLabel}
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-12">
          <Reveal delay={0.1} className="col-span-2 lg:col-span-5">
            <Media slot={a} className="aspect-[4/3] w-full lg:aspect-[4/5]" sizes="(min-width: 1024px) 42vw, 100vw" />
          </Reveal>
          <Reveal delay={0.16} className="col-span-2 sm:col-span-1 lg:col-span-4">
            <Media slot={b} className="aspect-[4/3] w-full lg:h-full" sizes="(min-width: 1024px) 34vw, 100vw" />
          </Reveal>
          <div className="col-span-2 grid grid-cols-2 gap-4 sm:col-span-1 sm:grid-cols-1 lg:col-span-3">
            <Reveal delay={0.2}>
              <Media slot={c} className="aspect-square w-full" sizes="(min-width: 1024px) 24vw, 50vw" />
            </Reveal>
            <Reveal delay={0.26}>
              <Media slot={d} className="aspect-square w-full" sizes="(min-width: 1024px) 24vw, 50vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
