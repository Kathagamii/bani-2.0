import { MapPin, Phone } from "lucide-react";
import { brand, location } from "@/lib/content";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Location() {
  const [line1, line2] = location.title.split("\n");
  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-edit">
        <Reveal>
          <span className="flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase text-copper-light">
            <span className="h-px w-8 bg-copper-light/70" />
            {location.index} — {location.kicker}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-milk sm:text-5xl lg:text-6xl">
            {line1}
            <br />
            <span className="text-stone">{line2}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal delay={0.12} className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-copper-light" size={20} />
                <div>
                  <p className="text-milk">{brand.city}</p>
                  <p className="text-linen/70">{brand.addressShort}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-copper-light" size={20} />
                <a href={brand.phoneHref} className="text-milk transition-colors hover:text-copper-light">
                  {brand.phone}
                </a>
              </div>
              <div className="flex gap-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[11px] font-bold text-copper-light">
                  VK
                </span>
                <a
                  href={brand.vkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-milk transition-colors hover:text-copper-light"
                >
                  vk.ru/{brand.vkHandle}
                </a>
              </div>

              <div className="border-t border-linen/12 pt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2} className="h-full min-h-[360px]">
              <div className="h-full min-h-[360px] overflow-hidden grayscale-[0.3] contrast-[1.05] saturate-[0.7]">
                <iframe
                  src={location.mapEmbedUrl}
                  className="h-full min-h-[360px] w-full border-0"
                  loading="lazy"
                  title="Карта — Авторские бани"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
