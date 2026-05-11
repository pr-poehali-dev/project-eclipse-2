import Icon from "@/components/ui/icon"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #112040 60%, #0f2550 100%)" }}
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2d6fdb] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1e4d9b] blur-2xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Левая часть */}
          <div className="flex-1">
            {/* Метка */}
            <div className="inline-flex items-center gap-2 bg-[#1e4d9b]/40 border border-[#2d6fdb]/40 px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#2d6fdb]" />
              <span className="text-[#8ab4f8] text-xs font-semibold uppercase tracking-widest">
                Строительный контроль · Пермь
              </span>
            </div>

            <h1 className="text-white mb-6 leading-tight">
              Строительный инжиниринг{" "}
              <span className="text-[#2d6fdb]">на высшем уровне</span>
            </h1>

            <p className="text-[#8a9bbf] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Осуществляем строительный контроль и технический надзор на каждом этапе строительства.
              Проверяем соответствие проекту, нормам и стандартам качества — защищаем ваши интересы как заказчика.
            </p>

            {/* CTA кнопки */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/services" className="btn-primary">
                Наши услуги
              </a>
              <a
                href="/contacts"
                className="px-6 py-3 border-2 border-[#2d6fdb] text-[#8ab4f8] hover:bg-[#1e4d9b] hover:text-white transition-all text-sm font-semibold uppercase tracking-wide inline-block"
              >
                Связаться с нами
              </a>
            </div>

            {/* Цифры */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-white font-['Roboto_Condensed',sans-serif]">10+</div>
                <div className="text-xs text-[#8a9bbf] uppercase tracking-wide mt-1">лет на рынке</div>
              </div>
              <div className="w-px bg-[#1e3460]" />
              <div>
                <div className="text-2xl font-bold text-white font-['Roboto_Condensed',sans-serif]">150+</div>
                <div className="text-xs text-[#8a9bbf] uppercase tracking-wide mt-1">объектов</div>
              </div>
              <div className="w-px bg-[#1e3460]" />
              <div>
                <div className="text-2xl font-bold text-white font-['Roboto_Condensed',sans-serif]">100%</div>
                <div className="text-xs text-[#8a9bbf] uppercase tracking-wide mt-1">гарантия качества</div>
              </div>
            </div>
          </div>

          {/* Правая часть — карточки преимуществ */}
          <div className="w-full md:w-80 flex flex-col gap-3">
            {[
              { icon: "ShieldCheck", title: "Защита интересов заказчика", desc: "Работаем только на вашей стороне" },
              { icon: "ClipboardCheck", title: "Контроль на всех этапах", desc: "От фундамента до сдачи объекта" },
              { icon: "FileText", title: "Полная документация", desc: "Акты, заключения, экспертизы" },
              { icon: "Users", title: "Опытная команда", desc: "Сертифицированные специалисты" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-[#112040]/80 border border-[#1e3460] px-4 py-3 hover:border-[#2d6fdb] transition-colors"
              >
                <div className="w-10 h-10 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Check" size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{item.title}</div>
                  <div className="text-[#8a9bbf] text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-[#1e3460] bg-[#060f1e]/60">
        <div className="container py-3">
          <div className="flex flex-wrap gap-6 text-xs text-[#8a9bbf]">
            <span className="flex items-center gap-1.5">
              <Icon name="MapPin" size={12} className="text-[#2d6fdb]" />
              г. Пермь, ул. Целинная, 49
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Clock" size={12} className="text-[#2d6fdb]" />
              Пн–Пт: 9:00 – 18:00
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={12} className="text-[#2d6fdb]" />
              <a href="tel:+79026405120" className="hover:text-white transition-colors">+7 902 640 51 20</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
