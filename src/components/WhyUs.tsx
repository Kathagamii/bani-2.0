import { whyUs } from "@/lib/content";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <Reveal>
          <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
            <span className="h-px w-8 bg-copper-light/70" />
            {whyUs.index} — {whyUs.kicker}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
            {whyUs.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="border-t border-linen/12 pt-6">
                <span className="font-serif text-sm text-copper-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-xl text-milk">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-linen/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
