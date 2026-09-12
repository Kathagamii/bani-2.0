import { materials } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const RATIOS = ["aspect-[16/10]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[16/10]"];

export default function Materials() {
  const [line1, line2] = materials.title.split("\n");
  return (
    <section id="materials" className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <Reveal>
          <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
            <span className="h-px w-8 bg-copper-light/70" />
            {materials.index} — {materials.kicker}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
            {line1}
            <br />
            <span className="text-stone">{line2}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {materials.items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i} className={SPANS[i]}>
              <article className="group">
                <div className="overflow-hidden">
                  <Media
                    slot={item.media}
                    className={`${RATIOS[i]} w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]`}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-milk">{item.title}</h3>
                <p className="mt-2 max-w-md text-[14px] leading-relaxed text-linen/65">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
