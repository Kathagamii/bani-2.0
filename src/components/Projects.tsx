import { projects } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import SectionKicker from "./SectionKicker";

export default function Projects() {
  const [line1, line2] = projects.title.split("\n");
  return (
    <section id="projects" className="relative bg-ink py-20 sm:py-28">
      <div className="container-edit">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <SectionKicker label={projects.kicker} />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-xl font-serif text-2xl uppercase leading-[1.2] tracking-tight text-milk sm:text-3xl lg:text-4xl">
                {line1}
                <br />
                {line2}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <a
              href={projects.linkHref}
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-copper-light"
            >
              {projects.linkLabel}
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {projects.items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <article className="group">
                <div className="overflow-hidden">
                  <Media
                    slot={item.media}
                    className="aspect-[4/5] w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-serif text-sm text-copper-light">{item.n}</span>
                  <h3 className="font-serif text-lg text-milk">{item.title}</h3>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-linen/60">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 max-w-lg text-[13px] leading-relaxed text-linen/45">{projects.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
