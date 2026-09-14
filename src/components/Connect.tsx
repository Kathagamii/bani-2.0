import { Phone } from "lucide-react";
import { brand, connect } from "@/lib/content";
import Media from "./Media";
import Reveal from "./Reveal";
import SectionKicker from "./SectionKicker";
import LogoMark from "./LogoMark";
import ContactForm from "./ContactForm";

export default function Connect() {
  const [line1, line2] = connect.title.split("\n");
  return (
    <section id="contact" className="relative overflow-hidden bg-ink">
      <Media slot={connect.media} className="absolute inset-0 h-full w-full" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />

      <div className="container-edit relative z-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker label={connect.kicker} />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-3xl leading-[1.12] text-milk sm:text-4xl lg:text-5xl">
                {line1}
                <br />
                {line2}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-linen/75">{connect.body}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="#contact-form"
                className="mt-8 inline-flex items-center gap-3 bg-copper-light px-8 py-4 text-[13px] tracking-[0.1em] uppercase text-ink transition-colors duration-300 hover:bg-milk"
              >
                {connect.cta}
                <span>→</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div id="contact-form" className="border border-linen/15 bg-ink/70 p-6 backdrop-blur-sm sm:p-8">
                <LogoMark className="h-10" />
                <p className="mt-4 font-serif text-lg text-milk">Авторские бани под ключ</p>
                <p className="mt-1 text-[13px] text-linen/60">{brand.region}</p>

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={brand.vkUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="VK"
                    className="flex h-9 w-9 items-center justify-center border border-linen/20 text-[11px] font-bold text-linen/80 transition-colors hover:border-copper-light hover:text-copper-light"
                  >
                    VK
                  </a>
                  <a
                    href={brand.phoneHref}
                    aria-label="Позвонить"
                    className="flex h-9 w-9 items-center justify-center border border-linen/20 text-linen/80 transition-colors hover:border-copper-light hover:text-copper-light"
                  >
                    <Phone size={16} />
                  </a>
                  <span className="text-[13px] text-linen/60">{brand.phone}</span>
                </div>

                <div className="mt-7 border-t border-linen/10 pt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
