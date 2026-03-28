import servicesHero from "./услуги_hero.jpg";
import cameraImage from "./2hero.png";
import logo from "./logo_услуги.png";
import bgImage from "./2hero.png";
import vorotaImg from "./привод.png";
import turniketImg from "./турникеты.png";
import shlagbaumImg from "./Шлагбаумы.jpg";
import serviceImg from "./4hero.png";
import { CTABlock } from "./CTAComponents";

const services = [
  {
    title: "Цифровое (IP) видеонаблюдение",
    desc: "Высокая детализация (4K), интеллектуальный поиск в архиве и удаленный доступ через мобильное приложение",
  },
  {
    title: "Аналоговые системы (AHD/TVI)",
    desc: "Экономичное решение для модернизации существующих сетей с сохранением кабельных трасс",
  },
  {
    title: "Проектирование",
    desc: "Грамотный расчет углов обзора, исключение «мертвых зон» и подбор оптимальных хранилищ данных",
  },
];

export const ServicesPage = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen bg-[#0e0f0a]">
      <section className="relative w-full h-[520px] overflow-hidden">
        {/* Фон hero — единое фото */}
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Левая плашка */}
          <div className="w-[700px] h-[410px] rounded-[24px] bg-white/10 backdrop-blur-md border border-white/10 px-8 py-8 shadow-2xl">
            <h1 className="mt-8 [font-family:'Roboto-Bold',Helvetica] font-bold text-[40px] leading-[1.1] tracking-[0]">
              <span className="text-white">КОМПЛЕКСНОЕ ВНЕДРЕНИЕ</span>
              <br />
              <span className="text-[#E98A50]">ИНТЕЛЛЕКТУАЛЬНЫХ</span>
              <br />
              <span className="text-[#E98A50]">СЛАБОТОЧНЫХ</span>
            </h1>

            <div className="mt-4 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/85 text-lg">
              Решений любой сложности
            </div>

            <div className="mt-3 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm max-w-[520px]">
              С глубокой интеграцией в общую - инфраструктуру заказчика
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-black/30 border border-white/10 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/80 text-sm">
                Бесшовный переход
              </span>
              <span className="px-4 py-2 rounded-full bg-black/30 border border-white/10 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/80 text-sm">
                Модернизация
              </span>
              <span className="px-4 py-2 rounded-full bg-black/30 border border-white/10 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/80 text-sm">
                аудит
              </span>
            </div>
          </div>

          {/* Правая плашка с лого */}
          <div className="w-[189px] h-[183px] rounded-[20px] bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center mr-[200px]">
            <img src={logo} alt="SafeVision" className="w-[140px] h-auto opacity-90" />
          </div>
        </div>
      </section>

      {/* Блок Видеонаблюдение и видеоаналитика */}
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Фото и карточки в ряд - по центру */}
          <div className="flex gap-10 justify-center">
            {/* Левая колонка — заголовок и фото камеры */}
            <div className="w-[450px] flex flex-col">
              <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] mb-6 whitespace-nowrap">
                Видеонаблюдение и видеоаналитика
              </h2>
              <div className="rounded-[20px] overflow-hidden flex-1">
                <img
                  src={cameraImage}
                  alt=""
                  className="w-full h-full object-cover scale-x-[-1] object-[100%_center]"
                />
              </div>
            </div>

            {/* Правая колонка — текст, карточки, кнопка */}
            <div className="w-[564px] flex flex-col pt-[52px]">
              {/* Текст над карточками */}
              <p className="mb-6 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-base leading-relaxed">
                Мы проектируем и монтируем системы визуального мониторинга любой сложности. Наша задача — не просто установить камеру, а дать вам инструмент для контроля ситуации в реальном времени.
              </p>

              {/* Карточки */}
              <div className="flex flex-col gap-4">
                {services.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[112px] rounded-[20px] border border-white/20 bg-transparent px-6 py-4 flex flex-col justify-center"
                  >
                    <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Кнопка */}
              <button className="mt-4 self-center h-[48px] px-8 rounded-full bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Блок СКУД */}
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Заголовок и описание по центру */}
          <div className="text-center mb-10">
            <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] mb-4">
              Системы контроля и управления доступом (СКУД)
            </h2>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-base leading-relaxed max-w-[700px] mx-auto">
              Ограничение доступа посторонних и автоматизация пропускного режима. Мы внедряем решения, которые делают объект «умным» и защищённым.
            </p>
          </div>

          {/* Карточки в ряд */}
          <div className="grid grid-cols-3 gap-6 max-w-[1152px] mx-auto mb-10">
            {/* Карточка 1 */}
            <div className="bg-[#565754] rounded-[20px] p-6 h-[200px] flex flex-col">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-lg mb-3">
                Идентификация
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed flex-1">
                Установка считывателей карт, бесконтактных меток и современных биометрических сканеров (лицо, отпечаток, палец)
              </p>
            </div>

            {/* Карточка 2 - средняя с другим цветом */}
            <div className="bg-[#3e3f3b] rounded-[20px] p-6 h-[200px] flex flex-col">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-lg mb-3">
                Учет рабочего времени
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed flex-1">
                Автоматический мониторинг дисциплины персонала, фиксация опозданий и ранних уходов
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-[#565754] rounded-[20px] p-6 h-[200px] flex flex-col">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-lg mb-3">
                Интеграция
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed flex-1">
                Связка СКУД с видеонаблюдением и охранной системой для комплексного отклика на инциденты
              </p>
            </div>
          </div>

          {/* Кнопка */}
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-[20px] bg-[#e36d24] hover:bg-[#d15f20] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* Блок Автоматизация проездов и проходов */}
      <section className="relative w-full py-16 overflow-hidden">
        {/* Фон */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6">
          {/* Заголовок */}
          <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] mb-3">
            Автоматизация проездов и проходов
          </h2>
          <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-base mb-10">
            Оптимизация трафика на территории вашего предприятия, ЖК или парковки
          </p>

          {/* Карточки */}
          <div className="flex flex-col gap-6">
            {/* Верхний ряд — 2 карточки */}
            <div className="flex gap-6">
              {/* Приводы для ворот */}
              <div className="w-[324px] bg-[#3e3f3b] rounded-[20px] overflow-hidden p-3">
                <div className="h-[156px] rounded-[12px] overflow-hidden">
                  <img
                    src={vorotaImg}
                    alt="Приводы для ворот"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 pt-4">
                  <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base mb-2">
                    Приводы для ворот
                  </h3>
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed">
                    Автоматизация распашных и откатных конструкций для комфортного въезда.
                  </p>
                </div>
              </div>

              {/* Турникеты */}
              <div className="w-[324px] bg-[#3e3f3b] rounded-[20px] overflow-hidden p-3">
                <div className="h-[156px] rounded-[12px] overflow-hidden">
                  <img
                    src={turniketImg}
                    alt="Турникеты"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 pt-4">
                  <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base mb-2">
                    Турникеты
                  </h3>
                  <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed">
                    Монтаж полноростовых или поясных моделей для фиксации потока людей на проходных.
                  </p>
                </div>
              </div>
            </div>

            {/* Нижний ряд — широкая карточка */}
            <div className="w-[672px] bg-[#3e3f3b] rounded-[20px] overflow-hidden p-3">
              <div className="h-[156px] rounded-[12px] overflow-hidden">
                <img
                  src={shlagbaumImg}
                  alt="Шлагбаумы и болларды"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 pt-4">
                <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#dedfdd] text-base mb-2">
                  Шлагбаумы и болларды
                </h3>
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a9aaa7] text-sm leading-relaxed">
                  Установка скоростных барьеров с управлением через пульт, телефон или систему распознавания номеров.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок Охранно-Пожарная Безопасность */}
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Заголовок и описание по центру */}
          <div className="text-center mb-10">
            <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] mb-4">
              Охранно-Пожарная Безопасность (ОПС)
            </h2>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-base">
              Защита жизни людей и сохранности имущества — приоритет любого бизнеса
            </p>
          </div>

          {/* Карточки в ряд */}
          <div className="grid grid-cols-3 gap-6 max-w-[1152px] mx-auto mb-10">
            {/* Карточка 1 — боковая с рамкой */}
            <div className="h-[240px] rounded-[20px] border border-[#e36d24] p-6 flex flex-col">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-3">
                Пожарная сигнализация
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed flex-1">
                Монтаж систем обнаружения возгорания, систем оповещения и управления эвакуацией (СОУЭ) согласно действующим ГОСТам.
              </p>
            </div>

            {/* Карточка 2 — средняя с градиентом */}
            <div
              className="h-[240px] rounded-[20px] border border-[#e36d24] p-6 flex flex-col"
              style={{
                background: `linear-gradient(97.43deg, rgba(249, 108, 20, 0.6) -48.95%, rgba(129, 62, 19, 0.5) 2.34%, rgba(51, 33, 18, 0.4) 44.78%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
              }}
            >
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-3">
                Охранный мониторинг
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed flex-1">
                Установка датчиков движения, вибрации и акустических сенсоров для защиты периметра от вторжения.
              </p>
            </div>

            {/* Карточка 3 — боковая с рамкой */}
            <div className="h-[240px] rounded-[20px] border border-[#e36d24] p-6 flex flex-col">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-3">
                Пультовая охрана
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed flex-1">
                Подключение систем к централизованным пультам быстрого реагирования.
              </p>
            </div>
          </div>

          {/* Кнопка */}
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-[20px] bg-[#e36d24] hover:bg-[#d15f20] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* Блок Техническое обслуживание и модернизация */}
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Заголовок и описание по центру */}
          <div className="text-center mb-10">
            <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] mb-4">
              Техническое обслуживание и модернизация
            </h2>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-base">
              Любая сложная система требует профессионального ухода.<br />
              Мы берем на себя «здоровье» вашего оборудования.
            </p>
          </div>

          {/* Фото и карточки в ряд */}
          <div className="flex gap-10 justify-center items-stretch">
            {/* Левая колонка — фото */}
            <div className="w-[450px] rounded-[20px] overflow-hidden flex-shrink-0">
              <img
                src={serviceImg}
                alt=""
                className="w-full h-full object-cover scale-x-[-1] object-[90%_center]"
              />
            </div>

            {/* Правая колонка — карточки */}
            <div className="w-[480px] flex flex-col gap-4">
              {/* Карточка 1 */}
              <div className="rounded-[20px] border border-white/30 p-5 flex flex-col">
                <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base mb-2">
                  Регламентный сервис
                </h3>
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
                  Чистка оптики, проверка ёмкости аккумуляторов, обновление программного обеспечения
                </p>
              </div>

              {/* Карточка 2 */}
              <div className="rounded-[20px] border border-white/30 p-5 flex flex-col">
                <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base mb-2">
                  Реновация
                </h3>
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
                  Замена устаревших компонентов на современные аналоги без полной остановки работы системы
                </p>
              </div>

              {/* Карточка 3 */}
              <div className="rounded-[20px] border border-white/30 p-5 flex flex-col">
                <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base mb-2">
                  Аварийный ремонт
                </h3>
                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
                  Оперативное устранение неисправностей и восстановление работоспособности системы в кратчайшие сроки
                </p>
              </div>

              {/* Кнопка */}
              <button className="mt-4 self-center h-[48px] px-8 rounded-full bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Блок Почему доверяют нам */}
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Заголовок по центру */}
          <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[32px] leading-[1.3] text-center mb-12">
            Почему доверяют нам?
          </h2>

          {/* Колонки с разделителями */}
          <div className="flex justify-center items-stretch max-w-[1100px] mx-auto">
            {/* Колонка 1 */}
            <div className="flex-1 px-8 text-center">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-4">
                Индивидуальное<br />проектирование
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed">
                Мы не предлагаем шаблонных решений. Каждая смета составляется под задачи заказчика.
              </p>
            </div>

            {/* Разделитель */}
            <div className="w-px bg-[#e36d24] self-stretch" />

            {/* Колонка 2 */}
            <div className="flex-1 px-8 text-center">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-4">
                Эстетика<br />монтажа
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed">
                Наши специалисты работают чисто, скрывая коммуникации и соблюдая интерьерные особенности объекта.
              </p>
            </div>

            {/* Разделитель */}
            <div className="w-px bg-[#e36d24] self-stretch" />

            {/* Колонка 3 */}
            <div className="flex-1 px-8 text-center">
              <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#e36d24] text-base mb-4">
                Гарантийные<br />обязательства
              </h3>
              <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed">
                Мы сопровождаем объект после сдачи, обеспечивая полную информационную и техническую поддержку.
              </p>
            </div>

            {/* Разделитель */}
            <div className="w-px bg-[#e36d24] self-stretch" />

            {/* Правая граница */}
            <div className="w-px bg-[#e36d24] self-stretch" />
          </div>
        </div>
      </section>
      {/* CTA блок */}
      <CTABlock />
    </main>
  );
};
