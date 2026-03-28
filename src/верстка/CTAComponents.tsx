import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps): JSX.Element | null => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreed: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-[480px] bg-[#3e3f3b] rounded-[20px] p-6 shadow-2xl">
        <h3 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-xl mb-6 pb-4 border-b border-white/20">
          Оставить заявку
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm">
              Имя*
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-[48px] px-4 rounded-[16px] bg-[#e5e5e5] text-[#262723] [font-family:'Montserrat-Regular',Helvetica] font-normal text-base outline-none focus:ring-2 focus:ring-[#e36d24]"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm">
              Телефон*
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-[48px] px-4 rounded-[16px] bg-[#e5e5e5] text-[#262723] [font-family:'Montserrat-Regular',Helvetica] font-normal text-base outline-none focus:ring-2 focus:ring-[#e36d24]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm">
              Электронная почта*
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-[48px] px-4 rounded-[16px] bg-[#e5e5e5] text-[#262723] [font-family:'Montserrat-Regular',Helvetica] font-normal text-base outline-none focus:ring-2 focus:ring-[#e36d24]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              required
              checked={formData.agreed}
              onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              className="w-5 h-5 mt-0.5 rounded bg-[#e5e5e5] border-none accent-[#e36d24] cursor-pointer"
            />
            <label htmlFor="agree" className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed cursor-pointer">
              Я согласен с <span className="text-[#e36d24]">офертой</span> и <span className="text-[#e36d24]">политикой обработки персональных данных</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 h-[48px] rounded-[16px] bg-[#e36d24] hover:bg-[#d15f20] transition-colors [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base"
          >
            Отправить
          </button>
        </form>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTABlock = ({
  title = "Хотите рассчитать предварительную стоимость проекта?",
  subtitle = "Оставьте заявку, и наш специалист свяжется с вами для консультации",
  buttonText = "Получить консультацию",
}: CTABlockProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#0e0f0a] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div
            className="w-[1152px] h-[327px] mx-auto rounded-[20px] border border-[#E98A50] flex flex-col items-center justify-center text-center"
            style={{
              background: `linear-gradient(97.43deg, rgba(249, 108, 20, 0.6) -48.95%, rgba(129, 62, 19, 0.5) 2.34%, rgba(51, 33, 18, 0.4) 44.78%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
            }}
          >
            <h2 className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[28px] leading-[1.3] mb-3 max-w-[700px]">
              {title}
            </h2>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white/80 text-base mb-6 max-w-[600px]">
              {subtitle}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="h-[48px] px-8 rounded-full bg-[#e36d24] hover:bg-[#eb8532] transition-colors [font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
