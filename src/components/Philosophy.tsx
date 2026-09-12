import { philosophy } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Philosophy() {
  const [line1, line2] = philosophy.title.split("\n");
  return (
    <section id="philosophy" className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="container-edit grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 xl:col-span-6">
          <Reveal>
            <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
              <span className="h-px w-8 bg-copper-light/70" />
              {philosophy.index} — {philosophy.kicker}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
              {line1}
              <br />
              <span className="text-stone">{line2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-balance text-[15px] leading-relaxed text-linen/75 sm:text-base">
              {philosophy.body}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-6 xl:col-start-7">
          <Reveal delay={0.12} className="h-full">
            <Media
              slot={philosophy.media}
              className="aspect-[4/5] w-full lg:aspect-[3/4] xl:ml-auto xl:max-w-lg"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
