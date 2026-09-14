/**
 * Единый источник контента сайта.
 *
 * Все факты о бизнесе здесь подтверждены исследованием (сайт-визитка компании,
 * поисковая выдача). Ничего не выдумано: цены, часы работы, количество
 * проектов и отзывы клиентов в открытых источниках не найдены — поэтому их
 * здесь нет. Как только появятся реальные данные/фото, они подставляются
 * прямо сюда — верстка ничего не потеряет.
 */

export type ArtVariant = "wood" | "stone" | "steam" | "fire" | "interior" | "water";

export interface MediaSlot {
  /** Реальный файл (заполняется позже). Пока пусто — рендерится PlaceholderArt. */
  src?: string;
  /** Настоящие пиксельные размеры src — нужны лайтбоксу, чтобы показать фото
   *  целиком (без принудительного кропа) без сдвига layout. */
  width?: number;
  height?: number;
  alt: string;
  variant: ArtVariant;
}

export const brand = {
  name: "Авторские бани",
  city: "Екатеринбург",
  addressShort: "ул. Мамина-Сибиряка, 2",
  addressFull: "620027, г. Екатеринбург, ул. Мамина-Сибиряка, 2",
  region: "Екатеринбург и Свердловская область",
  phone: "+7 993 509 21 00",
  phoneHref: "tel:+79935092100",
  vkHandle: "avtorskie_bani_ekb",
  vkUrl: "https://vk.ru/avtorskie_bani_ekb",
  // TODO: часы работы офиса не подтверждены в открытых источниках — уточнить у заказчика.
  hours: undefined as string | undefined,
};

export const nav = [
  { label: "О студии", href: "#top" },
  { label: "Проекты", href: "#projects" },
  { label: "Материалы", href: "#materials" },
  { label: "Процесс", href: "#process" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contact" },
];

export const hero = {
  eyebrow: "Авторские бани под ключ",
  headline: "Баня, созданная\nименно для вас.",
  subtitle: "Проектируем и строим авторские бани под ключ.",
  cta: "Рассчитать проект",
  locationTag: brand.region,
  scrollLabel: "SCROLL",
  media: {
    src: "/photos/hero.png",
    width: 1673,
    height: 940,
    alt: "Баня в лесу на закате",
    variant: "interior",
  } satisfies MediaSlot,
};

export const highlights = {
  kicker: "Галерея",
  counter: "01 / 04",
  title: "Вдохновение\nв деталях",
  body: "Каждая баня — это сочетание природных материалов, продуманной архитектуры и атмосферы уюта.",
  linkLabel: "Смотреть все фото",
  linkHref: "#gallery",
  items: [
    { alt: "Интерьер парной с тёплым светом", variant: "wood" },
    { alt: "Вид на лес и озеро от бани", variant: "water" },
    { alt: "Огонь в печи", variant: "fire" },
    { alt: "Спил бревна — фактура дерева", variant: "wood" },
  ] satisfies MediaSlot[],
};

export const projects = {
  kicker: "Проекты",
  title: "Не просто баня.\nАрхитектура ритуала.",
  linkLabel: "Все проекты",
  linkHref: "#gallery",
  items: [
    {
      n: "01",
      title: "Приватная парная",
      description:
        "Компактное решение для дома или квартиры — там, где баня встроена в существующие стены.",
      media: { alt: "Приватная парная", variant: "steam" } satisfies MediaSlot,
    },
    {
      n: "02",
      title: "Баня для участка",
      description:
        "Отдельно стоящий объект во дворе загородного дома — часть общего архитектурного решения участка.",
      media: { alt: "Баня для загородного участка", variant: "wood" } satisfies MediaSlot,
    },
    {
      n: "03",
      title: "Коммерческий комплекс",
      description: "Проект для общественного пространства — сложная инженерия и несколько зон отдыха.",
      media: { alt: "Коммерческий банный комплекс", variant: "stone" } satisfies MediaSlot,
    },
  ],
  note: "Стоимость и сроки зависят от площади, материалов и состава помещений — рассчитываем индивидуально после консультации.",
};

export const materials = {
  kicker: "Материалы",
  title: "Натуральные\nматериалы",
  body: "Мы используем только отборные породы дерева, которые сохраняют свои свойства на долгие годы — а также камень, стекло и металл под задачу конкретного проекта.",
  linkLabel: "Узнать больше",
  linkHref: "#process",
  items: [
    {
      title: "Кедр",
      description: "Тёплый аромат · натуральная фактура",
      media: {
        src: "/photos/cedar.png",
        width: 1536,
        height: 1024,
        alt: "Кедровая отделка парной",
        variant: "wood",
      } satisfies MediaSlot,
    },
    {
      title: "Абаши",
      description: "Мягкое тепло · комфорт полков",
      media: {
        src: "/photos/abashi.png",
        width: 1536,
        height: 1024,
        alt: "Полок из абаши",
        variant: "wood",
      } satisfies MediaSlot,
    },
    {
      title: "Термодерево",
      description: "Глубокий оттенок · устойчивость к влаге",
      media: {
        src: "/photos/thermowood.jpg",
        width: 1024,
        height: 559,
        alt: "Термообработанная древесина",
        variant: "wood",
      } satisfies MediaSlot,
    },
  ],
};

export const process = {
  kicker: "Процесс",
  title: "От замера\nдо готовой бани",
  body: "Один подрядчик отвечает за весь процесс — от замера до финальной отделки. Вы контролируете результат, мы берём на себя всё остальное.",
  linkLabel: "Как мы работаем",
  linkHref: "#contact",
  steps: ["Замер", "Проект", "Материалы", "Строительство", "Отделка", "Инженерия", "Готовая баня"],
  media: {
    src: "/photos/process.jpg",
    width: 1024,
    height: 229,
    alt: "Замер материала перед строительством",
    variant: "wood",
  } satisfies MediaSlot,
};

export const gallery = {
  kicker: "Галерея",
  title: "Дерево, пар, свет",
  items: [
    { src: "/gallery/1.png", width: 682, height: 919, alt: "Парная — потолок из спилов бревна и каменка", variant: "wood" },
    { src: "/gallery/2.png", width: 1134, height: 904, alt: "Круглая парная с гималайской солью", variant: "stone" },
    { src: "/gallery/6.png", width: 784, height: 1065, alt: "Потолок «звёздное небо» из оптоволокна", variant: "wood" },
    { src: "/gallery/4.png", width: 1416, height: 1062, alt: "Полки и печь в парной", variant: "wood" },
    { src: "/gallery/3.png", width: 682, height: 916, alt: "Парная — акцентная стена и дровница", variant: "wood" },
    { src: "/gallery/8.png", width: 1210, height: 912, alt: "Многоярусные полки парной", variant: "wood" },
    { src: "/gallery/5.png", width: 679, height: 913, alt: "Гималайская соль и полукруглые полки", variant: "stone" },
    { src: "/gallery/9.png", width: 781, height: 1057, alt: "Полки и кирпичная кладка печи", variant: "wood" },
    { src: "/gallery/7.png", width: 1366, height: 909, alt: "Полки и веники в парной", variant: "wood" },
  ] satisfies MediaSlot[],
};

export const connect = {
  kicker: "Связь",
  title: "Ваша баня начинается\nс разговора.",
  body: "Расскажите о вашем участке — мы предложим решение.",
  cta: "Обсудить проект",
  media: { alt: "Тёплый свет в бане", variant: "fire" } satisfies MediaSlot,
};
