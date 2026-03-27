import logo from "./logo.png";
import mailIcon from "./reshot-icon-mail-GX3MTBULVF 1.png";
import phoneIcon from "./phone-call.png";
import localIcon from "./local-two.png";
import whatsappIcon from "./whatsapp.svg";
import tiktokIcon from "./tiktok.svg";
import facebookIcon from "./facebook.svg";
import instagramIcon from "./instagram.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 w-full h-[88px] bg-[#1C1D1F] z-50">
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
    </header>
  );
};
