import hours24Icon from "./24 часа.png";
import vyezdIcon from "./Выезд и смета.png";
import garantiyaIcon from "./гарантия.png";
import dostupIcon from "./доступ.png";
import montazhIcon from "./монтаж.png";
import obuchenieIcon from "./обучение и настройка.png";
import originalIcon from "./оригинал.png";
import chetkostIcon from "./четкость.png";
import cameraPhoneMockup from "./advantages-camera.png";

const leftItems = [
  {
    icon: vyezdIcon,
    title: "Выезд и смета от 0 т",
    desc: "замер и расчёт в день обращения",
  },
  {
    icon: originalIcon,
    title: "100% Оригинал",
    desc: "Только проверенное оборудование с гарантией",
  },
  {
    icon: obuchenieIcon,
    title: "Обучение и настройка",
    desc: "Покажем, как управлять системой и смотреть архив за 15 минут",
  },
  {
    icon: hours24Icon,
    title: "Монтаж за 24 часа",
    desc: "Чистая установка без пыли и лишних проводов",
  },
];

const rightItems = [
  {
    icon: montazhIcon,
    title: "Эстетичный монтаж",
    desc: "Установка без лишних проводов с сохранением вашего интерьера",
  },
  {
    icon: dostupIcon,
    title: "Доступ в смартфоне",
    desc: "Ваш объект под контролем 24/7 из любой точки мира",
  },
  {
    icon: chetkostIcon,
    title: "Четкость в деталях",
    desc: "Идеальная видимость лиц и госномеров даже в полной темноте",
  },
  {
    icon: garantiyaIcon,
    title: "Гарантия 3 года",
    desc: "Официальный договор и сервисная поддержка",
  },
];

export const InstallationAdvantagesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#121212] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[normal] mb-4">
            Преимущества установки видеонаблюдения
          </h2>
          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white/80 text-lg text-center max-w-[700px] mx-auto">
            Подбираем комплект под вашу защиту и аккуратно устанавливаем - чтобы система работала стабильной была удобной каждый день
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-3 gap-6 items-stretch justify-items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-14 justify-center h-[582px] w-full max-w-[368px] ml-auto">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3e3f3b] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Card */}
          <div className="relative rounded-[20px] overflow-hidden w-[368px] h-[582px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Camera and Phone"
              src={cameraPhoneMockup}
            />
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <button className="px-8 py-3 bg-[#3e3f3b] rounded-xl [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#e7e8e3] text-base hover:bg-[#4a4b47] transition-colors">
                Смотреть каталог
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-14 justify-center h-[582px] w-full max-w-[368px] mr-auto">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3e3f3b] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
