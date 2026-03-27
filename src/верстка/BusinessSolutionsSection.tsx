const plans = [
  {
    title: "«ЛАЙТ»",
    cameras: "1-2 камеры",
    description: "Квартира, офис",
    price: "от 45 000₸",
    idealFor: "Идеально для: Контроля няни, домашних животных или входной двери в квартиру",
    features: [
      "1-2 внутренние Wi‑Fi или POE камеры с Full HD качеством",
      "Двусторонняя аудиосвязь (можно говорить через камеру)",
      "Запись на карту памяти",
      "Уведомления на смартфон при движении",
    ],
    featured: false,
  },
  {
    title: "«СЕКЬЮРИТИ»",
    cameras: "4 камеры",
    description: "Частный дом",
    price: "от 250 000₸",
    idealFor: "Идеально для: Коттеджей, дач и частных парковок",
    features: [
      "4 уличные камеры с мощной ночной подсветкой (до 30м)",
      "Видеорегистратор с диском на 1 ТБ",
      "Полный охват периметра участка",
      "Защита от влаги и мороза",
      "Архив записей до 2-х недель",
    ],
    featured: true,
  },
  {
    title: "«БИЗНЕС-КОНТРОЛЬ»",
    cameras: "от 8 камер",
    description: "Торговля/склад",
    price: "от 650 000₸",
    idealFor: "Идеально для: Магазинов, кафе, небольших производств в Алматы",
    features: [
      "От 8 камер с высоким разрешением",
      "Микрофоны для записи звука + централизованный монитор",
      "Контроль кассовых зон, складских стеллажей",
      "Детектор саботажа (если камеру закрыли или отвернули)",
    ],
    featured: false,
  },
  {
    title: "«ИНДУСТРИАЛЬНЫЙ / ПРО»",
    cameras: "Камеры",
    description: "Производство/ЖК",
    price: "от 1 000 000₸",
    idealFor: "Идеально для: Жилых комплексов, крупных заводов и логистических центров",
    features: [
      "Неограниченное число камер",
      "Серверная обработка данных + интеграция со шлагбаумами и СКУД",
      "Распознавание госномеров для автопарков, Face ID для проходных",
      "Умный поиск в архиве по событиям",
    ],
    featured: true,
  },
];

export const BusinessSolutionsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#262723] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-[798px] mx-auto text-center mb-14">
          <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal] mb-4">
            Готовые решения: всё под ключ
          </h2>
          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white/80 text-lg tracking-[0] leading-[normal]">
            Выбирайте пакет под ваш объект — мы обеспечим оборудование, монтаж и настройку.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1320px] mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`${plan.featured ? "bg-[#0e0f0a]" : "bg-[#3e3f3b]"} border border-[#e36d24] rounded-[20px] overflow-hidden w-[324px] h-[635px] px-6 pt-8 pb-6 flex flex-col`}
            >
              <div className="h-[116px] flex flex-col items-center text-center justify-start gap-3">
                <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[20px] leading-[26px] whitespace-nowrap">
                  {plan.title}
                </div>
                <div className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#e36d24] text-xl leading-[24px]">
                  {plan.cameras}
                </div>
                <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-base leading-[20px]">
                  {plan.description}
                </div>
              </div>

              <div className="mt-7 h-[164px] flex flex-col items-center justify-start gap-4">
                <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] text-center leading-[40px]">
                  {plan.price}
                </div>
                <div className="w-full bg-[#3c9c601a] rounded-[20px] border border-[#0a8337] px-4 py-2 min-h-[64px] flex items-center justify-center">
                  <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#E7E7E7] text-sm text-center leading-[16px]">
                    {plan.idealFor}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-1 w-full">
                <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#d5d5d5] text-sm leading-[1.6]">
                  {plan.features.map((feature, i) => (
                    <div key={i}>- {feature}</div>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full h-14 bg-[#e36d24] rounded-2xl [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-lg flex items-center justify-center">
                Заказать монтаж
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between max-w-[1320px] mx-auto">
          <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#fefdfd] text-[22px]">
            Каталог Товаров
          </div>
          <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e36d24] text-lg">
            Смотреть все
          </div>
        </div>
      </div>
    </section>
  );
};
