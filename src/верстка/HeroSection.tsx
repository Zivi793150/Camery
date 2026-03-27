import { useState, useEffect, useCallback } from "react";
import hero1 from "./hero1.png";
import hero2 from "./2hero.png";
import hero3 from "./3hero.png";
import hero4 from "./4hero.png";
import hero5 from "./5hero.png";
import logo from "./logo.png";
import mailIcon from "./reshot-icon-mail-GX3MTBULVF 1.png";
import phoneIcon from "./phone-call.png";
import localIcon from "./local-two.png";
import whatsappIcon from "./whatsapp.svg";
import tiktokIcon from "./tiktok.svg";
import facebookIcon from "./facebook.svg";
import instagramIcon from "./instagram.svg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "УСТАНОВКА",
    titleAccent: "ВИДЕОНАБЛЮДЕНИЯ",
    badge: "под ключ",
    bullets: [
      "Подберём оборудование",
      "Выполним монтаж",
      "Настроим систему для дома, бизнеса или ЖК",
    ],
  },
  {
    id: 2,
    image: hero2,
    title: "ВИДЕОНАБЛЮДЕНИЕ",
    titleAccent: "для бизнеса",
    badge: "от магазина до завода",
    bullets: [
      "Проектирование",
      "Монтаж",
      "Пусконаладка",
      "Гарантия и сервис",
    ],
  },
  {
    id: 3,
    image: hero3,
    title: "КАТАЛОГ",
    titleAccent: "",
    badge: "Видеонаблюдение для дома и бизнеса",
    bullets: [
      "Широкий выбор видеонаблюдения Hikvision, HiWatch и UNV",
      "Готовые решения для любых задач и бюджета",
    ],
  },
  {
    id: 4,
    image: hero4,
    title: "Профессиональный",
    titleAccent: "МОНТАЖ",
    badge: "видеонаблюдения",
    bullets: [
      "Установка + настройка «под ключ»",
      "Подберем оборудование под любые задачи и бюджет",
    ],
  },
  {
    id: 5,
    image: hero5,
    title: "ВИДЕОНАБЛЮДЕНИЕ",
    titleAccent: "",
    badge: "для дома и дачи",
    bullets: [
      "Установим «под ключ» быстро и недорого",
      "Всегда рядом, даже на расстоянии",
      "Присмотр за детьми и пожилыми",
      "Контроль территории",
    ],
  },
];

export const HeroSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Автопереключение каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full h-[620px] relative overflow-hidden">
      {/* Слайды */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full overflow-hidden bg-[#abaea9]">
            <img
              className={`absolute inset-0 w-full h-full object-cover ${
                index === 1 ? "object-[85%_center]" : ""
              }`}
              alt={`Hero ${s.id}`}
              src={s.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,245,0.92)_0%,rgba(245,245,245,0.82)_42%,rgba(245,245,245,0)_65%)]" />
          </div>
        </div>
      ))}

      {/* Шапка */}
      <div className="absolute top-0 left-0 w-full h-[88px] bg-[#1C1D1F] z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[88px] px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-[160px] h-[90px] bg-[#E4E4E4] opacity-30 blur-[28px] rounded-full" />
              <img className="relative h-[52px] w-auto" alt="SafeVision" src={logo} />
            </div>
          </div>

          <nav className="flex items-center gap-8 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#cfcfce] text-sm tracking-[0] leading-[normal]">
            <a className="hover:text-white" href="#">Главная</a>
            <a className="hover:text-white" href="#">Услуги</a>
            <a className="hover:text-white" href="#">Каталог</a>
            <a className="hover:text-white" href="#">О Компании</a>
            <a className="hover:text-white" href="#">Контакты</a>
          </nav>

          <div className="flex flex-col gap-2">
            {/* Верхний ряд: почта и телефон */}
            <div className="flex items-center gap-4">
              {/* Почта 24x24 */}
              <div className="flex items-center gap-2 w-[200px]">
                <img src={mailIcon} alt="" className="w-6 h-6" />
                <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#dedfdd] text-sm tracking-[0] leading-[normal]">
                  zakaz@safevision.kz
                </div>
              </div>

              {/* Телефон */}
              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="" className="w-4 h-4" />
                <div className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base tracking-[0] leading-[normal]">
                  +7 700 779 68 38
                </div>
              </div>
            </div>

            {/* Нижний ряд: соцсети и адрес */}
            <div className="flex items-center gap-4">
              {/* Соцсети 30x30 */}
              <div className="flex items-center gap-3 w-[200px]">
                <a 
                  className="w-[30px] h-[30px] rounded-full bg-[#1e1e1e]/50 flex items-center justify-center overflow-hidden" 
                  href="#" 
                  aria-label="WhatsApp"
                >
                  <img src={whatsappIcon} alt="" className="w-full h-full" />
                </a>
                <a 
                  className="w-[30px] h-[30px] rounded-full bg-[#1e1e1e]/50 flex items-center justify-center overflow-hidden" 
                  href="#" 
                  aria-label="TikTok"
                >
                  <img src={tiktokIcon} alt="" className="w-full h-full" />
                </a>
                <a 
                  className="w-[30px] h-[30px] rounded-full bg-[#1e1e1e]/50 flex items-center justify-center overflow-hidden" 
                  href="#" 
                  aria-label="Facebook"
                >
                  <img src={facebookIcon} alt="" className="w-full h-full" />
                </a>
                <a 
                  className="w-[30px] h-[30px] rounded-full bg-[#1e1e1e]/50 flex items-center justify-center overflow-hidden" 
                  href="#" 
                  aria-label="Instagram"
                >
                  <img src={instagramIcon} alt="" className="w-full h-full" />
                </a>
              </div>

              {/* Адрес */}
              <div className="flex items-center gap-2">
                <img src={localIcon} alt="" className="w-4 h-4" />
                <div className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#cfcfce] text-xs tracking-[0] leading-[normal]">
                  ул. Розыбакиева 19Б, Алматы
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Контент слайда */}
      <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-6 z-20">
        {currentSlide === 1 ? (
          // Специальный layout для 2-го слайда (hero2)
          <div className="w-full flex justify-between items-start">
            {/* Левая колонка */}
            <div className="w-[680px] flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4">
                <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[56px] tracking-[0] leading-[1.05]">
                  <span className="text-[#2b2c2d]">Видеонаблюдение</span>
                  <br />
                  <span className="text-[#2b2c2d]">для бизнеса</span>
                </p>

                <div className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#e36d24] rounded-[20px]">
                  <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#e36d24] text-xl tracking-[0] leading-[normal]">
                    от магазина до завода
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                {slide.bullets.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2e2c2c] rounded-full" />
                    <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-xl tracking-[0] leading-[1.2]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <button className="h-[56px] px-8 rounded-[20px] bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                Получить консультацию
              </button>
            </div>

            {/* Правая колонка с плашками у камеры */}
            <div className="relative w-[500px] h-[400px]">
              {/* Верхняя плашка - ещё левее (в 1.5 раза) */}
              <div className="absolute top-[80px] right-[545px] bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-sm leading-snug whitespace-nowrap">
                  Работаем<br />с юридическими<br />лицами
                </p>
              </div>
              {/* Линия от плашки к камере (верхняя) - намного короче */}
              <div className="absolute top-[110px] right-[445px] w-[100px] h-[1px] bg-[#999]" />
              
              {/* Нижняя плашка - ещё левее (в 1.5 раза) */}
              <div className="absolute top-[220px] right-[490px] bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-sm leading-snug whitespace-nowrap">
                  Рассчитаем<br />смету и сроки по<br />вашему объекту
                </p>
              </div>
              {/* Линия от плашки к камере (нижняя) - намного короче */}
              <div className="absolute top-[250px] right-[389px] w-[100px] h-[1px] bg-[#999]" />
            </div>
          </div>
        ) : currentSlide === 2 ? (
          // Специальный layout для 3-го слайда (hero3 - Каталог)
          <div className="w-[680px] flex flex-col items-start gap-6">
            <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[56px] tracking-[0] leading-[1.05] text-[#4a4a4a]">
              КАТАЛОГ
            </p>

            <div className="inline-flex items-center justify-center px-6 py-2 bg-[#3e3f3b] rounded-[20px]">
              <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#dedfde] text-base tracking-[0] leading-[normal]">
                Видеонаблюдение для дома и бизнеса
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 mt-2">
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-lg tracking-[0] leading-[1.3]">
                Широкий выбор видеонаблюдения<br />
                Hikvision, HiWatch и UNV:
              </p>
              
              <div className="flex flex-col items-start gap-2">
                {slide.bullets.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2e2c2c] rounded-full mt-2" />
                    <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-base tracking-[0] leading-[1.3]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="h-[56px] px-8 rounded-[20px] bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              Получить консультацию
            </button>
          </div>
        ) : currentSlide === 3 ? (
          // Специальный layout для 4-го слайда (hero4 - Монтаж)
          <div className="w-[720px] flex flex-col items-start gap-6">
            {/* Заголовок */}
            <div className="flex flex-col items-start gap-1">
              <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[48px] tracking-[0] leading-[1.1] text-[#4a4a4a]">
                Профессиональный <span className="text-[#e36d24]">МОНТАЖ</span>
              </p>
              <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[48px] tracking-[0] leading-[1.1] text-[#4a4a4a]">
                видеонаблюдения
              </p>
            </div>

            {/* Две карточки в ряд - 350px высота */}
            <div className="flex gap-5 mt-2">
              {/* Карточка 1 */}
              <div className="w-[328px] h-[160px] bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
                <div className="h-[3px] bg-[#e36d24]" />
                <div className="p-6 flex-1">
                  <p className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#262723] text-base leading-snug">
                    Установка + настройка<br />«под ключ»
                  </p>
                </div>
              </div>
              
              {/* Карточка 2 */}
              <div className="w-[328px] h-[160px] bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
                <div className="h-[3px] bg-[#e36d24]" />
                <div className="p-6 flex-1">
                  <p className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#262723] text-base leading-snug">
                    Подберем оборудование<br />под любые задачи и бюджет
                  </p>
                </div>
              </div>
            </div>

            <button className="h-[56px] px-8 rounded-[20px] bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] mt-4">
              Получить консультацию
            </button>
          </div>
        ) : currentSlide === 4 ? (
          // Специальный layout для 5-го слайда (hero5 - Для дома и дачи)
          <div className="w-[560px] flex flex-col items-start gap-5">
            {/* Заголовок */}
            <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[56px] tracking-[0] leading-[1.05] text-[#e36d24]">
              Видеонаблюдение
            </p>

            {/* Бейдж */}
            <div className="inline-flex items-center justify-center px-5 py-2 bg-[#3e3f3b] rounded-[12px]">
              <div className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfde] text-base tracking-[0] leading-[normal]">
                для дома и дачи
              </div>
            </div>

            {/* Стеклянная карточка с описанием */}
            <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl mt-2 border border-white/40">
              <p className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#262723] text-lg mb-6">
                Установим «под ключ» быстро и недорого
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2e2c2c] rounded-full mt-2" />
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-base">
                    всегда рядом, даже на расстоянии
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2e2c2c] rounded-full mt-2" />
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-base">
                    присмотр за детьми и пожилыми
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2e2c2c] rounded-full mt-2" />
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-base">
                    контроль территории
                  </p>
                </div>
              </div>

              <button className="h-[56px] px-8 rounded-[20px] bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] mt-8">
                Получить консультацию
              </button>
            </div>
          </div>
        ) : (
          // Стандартный layout для остальных слайдов
          <div className="w-[680px] flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-4">
              <p className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[56px] tracking-[0] leading-[1.05]">
                <span className="text-[#2b2c2d]">{slide.title}</span>
                {slide.titleAccent && (
                  <>
                    <br />
                    <span className="text-[#e36d24]">{slide.titleAccent}</span>
                  </>
                )}
              </p>

              <div className="inline-flex items-center justify-center px-6 py-2 bg-[#3e3f3b] rounded-[20px]">
                <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#dedfde] text-xl tracking-[0] leading-[normal]">
                  {slide.badge}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              {slide.bullets.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#2e2c2c] rounded-full mt-2" />
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#262723] text-xl tracking-[0] leading-[1.2]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <button className="h-[56px] px-8 rounded-[20px] bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-[#262723] text-base tracking-[0] leading-[normal]">
              Получить консультацию
            </button>
          </div>
        )}
      </div>

      {/* Навигация точками */}
      <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-6 flex items-center justify-center z-20">
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentSlide ? "bg-[#e36d24]" : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
