import avtomatizaciyaVyezda from "./Автоматизация выезда.png";
import group2 from "./group-2.png";
import rectangle2912 from "./rectangle-291-2.png";
import rectangle2913 from "./rectangle-291-3.png";
import rectangle291 from "./rectangle-291.png";

const cards = [
  {
    img: rectangle291,
    title: "Контроль доступа (СКД)",
    description: "Турникеты и считыватели с идентификацией по Face ID, отпечатку пальца или картам",
  },
  {
    img: avtomatizaciyaVyezda,
    title: "Автоматизация въезда",
    description: "Шлагбаумы с распознаванием госномеров и управлением через мобильное приложение для ЖК и паркингов",
  },
  {
    img: rectangle2912,
    title: "Пожарная безопасность",
    description: "Проектирование и монтаж систем оповещения и датчиков дыма согласно всем нормам и стандартам",
  },
  {
    img: rectangle2913,
    title: "Мониторинг территорий",
    description: "Видеонаблюдение для складов, магазинов и производств с функцией распознавания лиц и аналитикой событий",
  },
];

export const SecurityBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#121212] py-16 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex gap-12">
          {/* Left content */}
          <div className="w-[794px]">
            {/* Header */}
            <div className="mb-10">
              <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal] mb-4">
                Решения Для Бизнеса И ЖК
              </h2>
              <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white/80 text-base max-w-[700px]">
                Эффективные решения для безопасности и контроля бизнеса. Минимизируйте риски и автоматизируйте процессы на вашем предприятии, в офисе или жилом комплексе
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-14 mb-10">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#3e3f3b] rounded-[20px] overflow-hidden w-[368px] h-[402px]"
                >
                  <img
                    className="w-full h-[238px] object-cover"
                    alt={card.title}
                    src={card.img}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-lg mb-3">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button centered below cards */}
            <div className="flex justify-center">
              <button className="w-[400px] h-[85px] rounded-[20px] border-2 border-[#e36d24] [font-family:'Inter-Regular',Helvetica] font-normal text-[#e36d24] text-lg hover:bg-[#e36d24]/10 transition-colors flex items-center justify-center">
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right camera image - absolute positioned at right edge */}
      <img
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[499px] h-auto object-contain"
        alt="Camera"
        src={group2}
      />
    </section>
  );
};
