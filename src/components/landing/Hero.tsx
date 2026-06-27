import ContactFormButton from "./ContactFormButton"
import Icon from "@/components/ui/icon"

export default function Hero() {
  return (
    <section id="hero" className="bg-[#1c1c1c] relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row min-h-[520px]">
          {/* Левая часть — текст */}
          <div className="flex-1 py-12 lg:py-16 pr-0 lg:pr-8 flex flex-col justify-center z-10">
            <h1 className="text-white mb-6 leading-tight">
              Строительный инжиниринг
              <span className="block text-[#E8440A]">на высшем уровне</span>
            </h1>

            <ul className="space-y-3 mb-8">
              {[
                "Строительный контроль на каждом этапе",
                "Защита интересов заказчика от и до",
                "Полная документация и отчётность",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 bg-[#E8440A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={11} className="text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <ContactFormButton />
              <a href="/services" className="btn-secondary">
                Наши услуги
              </a>
            </div>

            {/* Статистика */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-[#2e2e2e]">
              <div>
                <div className="text-[#E8440A] text-3xl font-black">10+</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">лет опыта</div>
              </div>
              <div>
                <div className="text-[#E8440A] text-3xl font-black">150+</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">объектов</div>
              </div>
              <div>
                <div className="text-[#E8440A] text-3xl font-black">100%</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">гарантия</div>
              </div>
            </div>
          </div>

          {/* Правая часть — фото */}
          <div className="hidden lg:block w-[480px] relative">
            <img
              src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/59ee99ed-5ad4-488f-8ea3-a991f6dcdc30.png"
              alt="Строительный контроль"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            {/* Карточка поверх фото */}
            <div className="absolute bottom-6 right-6 bg-white p-4 w-52 shadow-xl">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Рядом с вами</div>
              <div className="text-[#1c1c1c] font-bold text-sm">г. Пермь</div>
              <div className="text-gray-600 text-xs mt-1 flex items-center gap-1">
                <Icon name="MapPin" size={11} className="text-[#E8440A]" />
                ул. Целинная, 49
              </div>
              <div className="text-gray-600 text-xs mt-1 flex items-center gap-1">
                <Icon name="Clock" size={11} className="text-[#E8440A]" />
                Пн–Пт: 9:00–18:00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 блока под Hero */}
      <div className="border-t border-[#2e2e2e]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2e2e2e]">
            {[
              {
                icon: "Building2",
                title: "От отдельного здания до вахтового посёлка",
                desc: "Полный цикл контроля любых объектов",
              },
              {
                icon: "BadgeCheck",
                title: "Изготовление по ГОСТ и заводской контроль качества",
                desc: "Все работы — по нормативам",
              },
              {
                icon: "Shield",
                title: "Гарантия на производство и результат",
                desc: "Типовые конструкции и нестандартные проекты",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 px-6 py-5">
                <div className="w-10 h-10 bg-[#E8440A] flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Check" size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-snug">{item.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
