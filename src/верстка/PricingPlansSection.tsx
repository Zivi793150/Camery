import frame40 from "./frame-40.png";

export const PricingPlansSection = (): JSX.Element => {
  const cards = [
    {
      title: "Видеонаблюдение 24/7",
      description: "Смотрите за домом, двором или парковкой в реальном времени прямо со смартфона",
    },
    {
      title: "Охранная сигнализация",
      description: "Мгновенные уведомления о проникновении, открытии дверей или движении в комнатах",
    },
    {
      title: "Умный доступ",
      description: "Видеодомофоны и управление замками удаленно — открывайте дверь гостям, не вставая с дивана",
    },
  ];

  return (
    <section className="w-full bg-[#262723]">
      {/* Photo (full width) */}
      <div className="relative w-full h-[460px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Woman with phone"
          src={frame40}
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Overlay title */}
        <div className="absolute inset-0">
          <div className="max-w-[1440px] mx-auto h-full relative">
            <div className="absolute top-[15px] left-[143px] w-[562px] flex flex-col gap-4">
              <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
                Безопасность Вашего Дома
              </h2>
              <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-[normal]">
                Ваше спокойствие, где бы вы ни находились. Мы предлагаем готовые решения для квартир и частных домов
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content below photo */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-6 max-w-[1152px] mx-auto mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${index === 1 ? "bg-[#3e3f3b]" : "bg-[#565754]"} rounded-[20px] p-6 h-[200px] flex flex-col`}
            >
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-lg mb-3">
                {card.title}
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-4 rounded-[20px] bg-[#e36d24] hover:bg-[#d15f20] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-[#262723] text-lg">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};
