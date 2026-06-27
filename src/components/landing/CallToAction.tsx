import Icon from "@/components/ui/icon"
import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <section id="contact" className="bg-[#1c1c1c] relative overflow-hidden">
      {/* Оранжевая полоса слева */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E8440A]" />

      <div className="container py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Левая часть — текст */}
          <div className="flex-1">
            <div className="section-label" style={{ color: "#E8440A" }}>Свяжитесь с нами</div>
            <h2 className="text-white mb-4">
              Предложим решение задачи и пришлём расчёт с планом работ за 1 день
            </h2>
            <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
              Оставьте заявку — менеджер перезвонит в рабочее время, уточнит детали и подготовит коммерческое предложение.
            </p>
          </div>

          {/* Правая часть — контакты и кнопки */}
          <div className="flex flex-col gap-4 lg:min-w-[320px]">
            <a
              href="tel:+79026405120"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#E8440A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c93a08] transition-colors">
                <Icon name="Phone" size={18} className="text-white" />
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">Телефон</div>
                <div className="text-white font-bold text-lg">+7 902 640 51 20</div>
              </div>
            </a>

            <a
              href="mailto:csiperm@yandex.ru"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#2e2e2e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8440A] transition-colors">
                <Icon name="Mail" size={18} className="text-white" />
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">Email</div>
                <div className="text-white font-semibold">csiperm@yandex.ru</div>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <ContactFormButton />
              <a href="tel:+79026405120" className="btn-secondary text-center justify-center">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
