import { brand, nav } from "@/lib/content";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="border-t border-linen/10 bg-ink py-12">
      <div className="container-edit flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <LogoMark className="h-14 sm:h-16" />
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-linen/55">
            Проектирование и строительство бань под ключ в {brand.region}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[0.06em] uppercase text-linen/55 hover:text-copper-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-[13px] leading-relaxed text-linen/55">
          <a href={brand.phoneHref} className="block hover:text-copper-light">
            {brand.phone}
          </a>
          <p className="mt-1">{brand.addressFull}</p>
          <a
            href={brand.vkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block hover:text-copper-light"
          >
            vk.ru/{brand.vkHandle}
          </a>
        </div>
      </div>

      <div className="container-edit mt-10 border-t border-linen/10 pt-6 text-[12px] text-linen/35">
        © {new Date().getFullYear()} Авторские бани · Екатеринбург
      </div>
    </footer>
  );
}
