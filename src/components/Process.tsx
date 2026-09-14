import { process } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import SectionKicker from "./SectionKicker";

export default function Process() {
  const [line1, line2] = process.title.split("\n");
  return (
    <section id="process" className="relative bg-ink py-20 sm:py-28">
      <div className="container-edit grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionKicker label={process.kicker} />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-2xl leading-[1.2] text-milk sm:text-3xl lg:text-4xl">
              {line1}
              <br />
              {line2}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-linen/60">{process.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={process.linkHref}
              className="mt-5 inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-copper-light"
            >
              {process.linkLabel}
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-3">
          <ol className="space-y-3.5">
            {process.steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-3 text-[15px]">
                <span className="font-serif text-copper-light">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-linen/80">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.22} className="lg:col-span-5">
          <Media
            slot={process.media}
            className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[280px]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
