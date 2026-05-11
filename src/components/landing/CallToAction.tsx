import Icon from "@/components/ui/icon"
import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)" }}
    >
      {/* Декоративный акцент */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#1e4d9b]" />
      <div className="absolute top-0 right-0 w-64 h-full opacity-5">
        <div className="w-full h-full bg-[#2d6fdb] rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Текст */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#2d6fdb]" />
              <span className="text-[#8ab4f8] text-xs font-semibold uppercase tracking-widest">Связаться с нами</span>
            </div>
            <h2 className="text-white mb-4">
              Свяжитесь с нами —{" "}
              <span className="text-[#2d6fdb]">ответим быстро</span>
            </h2>
            <p className="text-[#8a9bbf] text-base max-w-lg leading-relaxed mb-2">
              Нужна консультация, коммерческое предложение или помощь с выбором?
            </p>
            <p className="text-[#8a9bbf] text-base max-w-lg leading-relaxed">
              Оставьте заявку — менеджер свяжется в рабочее время.
            </p>
          </div>

          {/* Контакты + кнопки */}
          <div className="flex flex-col gap-5 lg:min-w-[320px]">
            {/* Контактные данные */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+79026405120"
                className="flex items-center gap-3 bg-[#112040] border border-[#1e3460] px-4 py-3 hover:border-[#2d6fdb] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d6fdb] transition-colors">
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[#8a9bbf] text-xs uppercase tracking-wide">Телефон</div>
                  <div className="text-white font-semibold text-sm">+7 902 640 51 20</div>
                </div>
              </a>

              <a
                href="mailto:csiperm@yandex.ru"
                className="flex items-center gap-3 bg-[#112040] border border-[#1e3460] px-4 py-3 hover:border-[#2d6fdb] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d6fdb] transition-colors">
                  <Icon name="Mail" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[#8a9bbf] text-xs uppercase tracking-wide">Email</div>
                  <div className="text-white font-semibold text-sm">csiperm@yandex.ru</div>
                </div>
              </a>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3">
              <ContactFormButton />
              <a
                href="tel:+79026405120"
                className="flex-1 text-center border-2 border-[#2d6fdb] text-[#8ab4f8] hover:bg-[#1e4d9b] hover:text-white transition-all text-sm font-semibold uppercase tracking-wide px-4 py-3"
              >
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
