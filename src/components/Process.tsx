import { process } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  const [line1, line2] = process.title.split("\n");
  return (
    <section id="process" className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
                <span className="h-px w-8 bg-copper-light/70" />
                {process.index} — {process.kicker}
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
              <p className="mt-8 max-w-sm text-balance text-[15px] leading-relaxed text-linen/70">
                {process.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol>
              {process.steps.map((step, i) => (
                <Reveal key={step.n} delay={0.05 * i}>
                  <li className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-linen/12 py-6 transition-colors duration-300 hover:border-copper-light/40 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-7">
                    <span className="font-serif text-2xl text-stone transition-colors duration-300 group-hover:text-copper-light sm:text-3xl">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-milk sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-linen/65 sm:text-[15px]">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
