import arrowUpIcon from "./arrow-up.png";
import bankCardIcon from "./bank-card.png";
import clockIcon from "./clock.png";
import localTwoIcon from "./local-two.png";
import logo from "./logo.png";
import mailIcon from "./reshot-icon-mail-GX3MTBULVF 1.png";
import phoneCallIcon from "./phone-call.png";
import truckIcon from "./машина.png";

const requisites = [
  { label: "ТОО «SafeVision»", bold: true },
  { label: "БИН: 051223501917" },
  { label: "Адрес: ул. Розыбакиева 19Б, Алматы" },
  { label: "ИИК: KZ17722S000051523705" },
  { label: "Банк: АО «Kaspi Bank»" },
  { label: "БИК: CASPKZKA" },
];

const contacts = [
  { icon: phoneCallIcon, text: "+7 700 779 68 38", bold: true },
  { icon: mailIcon, text: "zakaz@safeviion.kz" },
  { icon: localTwoIcon, text: "ул. Розыбакиева 19Б, Алматы" },
  { icon: clockIcon, text: "Пн-Пт 9:00-18:00, Сб 10:00-16:00" },
];

const policyLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Условия использования", href: "#" },
  { label: "Условия доставки", href: "#" },
  { label: "Способы оплаты", href: "#" },
];

const deliveryItems = [
  { icon: truckIcon, text: "Доставка по Казахстану", bold: true },
  { icon: localTwoIcon, text: "Офис в Алматы" },
  { icon: bankCardIcon, text: "Kaspi, Visa, наличные" },
  { icon: clockIcon, text: "Срок оказания услуг от 1 дня" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#3e3f3b] py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top row: Logo - Text - Up */}
        <div className="flex items-center justify-between mb-12">
          <img
            src={logo}
            alt="SafeVision"
            className="h-16 w-auto"
            onError={(e) => {
              // Fallback to text if image not found
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-[#e36d24] rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">SV</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-white text-xl font-bold">SafeVision</span>
                    <span class="text-white/70 text-xs">СИСТЕМЫ БЕЗОПАСНОСТИ</span>
                  </div>
                </div>
              `;
            }}
          />

          <h2 className="[font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[32px]">
            Ваше спокойствие — наша работа
          </h2>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[#e36d24] hover:text-[#ff8c4d] transition-colors"
          >
            <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-lg">
              Вверх
            </span>
            <img src={arrowUpIcon} alt="Вверх" className="w-6 h-6" />
          </button>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Реквизиты */}
          <div>
            <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#cfcfce] text-base mb-6">
              Реквизиты
            </h3>
            <div className="w-full h-px bg-white/30 mb-4" />
            <div className="flex flex-col gap-2">
              {requisites.map((item, index) => (
                <div
                  key={index}
                  className={`[font-family:'${item.bold ? "Montserrat-SemiBold" : "Montserrat-Regular"}',Helvetica] ${item.bold ? "font-semibold" : "font-normal"} text-[#dedfdd] text-sm`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#cfcfce] text-base mb-6">
              Контакты
            </h3>
            <div className="w-full h-px bg-white/30 mb-4" />
            <div className="flex flex-col gap-4">
              {contacts.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={item.icon} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span
                    className={`[font-family:'${item.bold ? "Montserrat-SemiBold" : "Montserrat-Regular"}',Helvetica] ${item.bold ? "font-semibold" : "font-normal"} text-[#dedfdd] text-sm`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Политика */}
          <div>
            <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#cfcfce] text-base mb-6">
              Политика
            </h3>
            <div className="w-full h-px bg-white/30 mb-4" />
            <div className="flex flex-col gap-2">
              {policyLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#dedfdd] text-sm underline hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Доставка и оплата */}
          <div>
            <h3 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#cfcfce] text-base mb-6">
              Доставка и оплата
            </h3>
            <div className="w-full h-px bg-white/30 mb-4" />
            <div className="flex flex-col gap-4">
              {deliveryItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={item.icon} alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span
                    className={`[font-family:'${item.bold ? "Montserrat-SemiBold" : "Montserrat-Regular"}',Helvetica] ${item.bold ? "font-semibold" : "font-normal"} text-[#dedfdd] text-sm`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
