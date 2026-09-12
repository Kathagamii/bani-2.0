import { statement } from "@/lib/content";
import Reveal from "./Reveal";

export default function Statement() {
  const lines = statement.quote.split("\n");
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <span className="font-serif text-[40vw] leading-none text-linen">”</span>
      </div>
      <div className="container-edit relative text-center">
        <Reveal>
          <p className="font-serif italic leading-[1.15] text-milk text-[9vw] sm:text-6xl lg:text-7xl text-balance">
            {lines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
