import Icon from "@/components/ui/icon"

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/equipment", label: "Оборудование" },
    { to: "/certificates", label: "Сертификаты" },
    { to: "/contacts", label: "Контакты" },
  ]

  return (
    <footer className="bg-[#111111] border-t border-[#2e2e2e]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Логотип и описание */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/favicon-nobg.png"
                alt="ЦСИ"
                className="h-9 w-9 object-contain"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm uppercase tracking-wider">ЦСИ</div>
                <div className="text-[#E8440A] font-semibold text-[10px] uppercase tracking-wider">Строительный инжиниринг</div>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Профессиональный строительный контроль и технический надзор в Перми. Защищаем интересы заказчика на каждом этапе.
            </p>
            <div className="flex gap-2">
              <a
                href="mailto:csiperm@yandex.ru"
                className="w-8 h-8 bg-[#2e2e2e] hover:bg-[#E8440A] flex items-center justify-center transition-colors"
                title="Email"
              >
                <Icon name="Mail" size={14} className="text-white" />
              </a>
              <a
                href="https://t.me/csiperm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#2e2e2e] hover:bg-[#E8440A] flex items-center justify-center transition-colors"
                title="Telegram"
              >
                <Icon name="Send" size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Разделы</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="text-gray-500 text-sm hover:text-[#E8440A] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#2e2e2e] group-hover:bg-[#E8440A] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+79026405120" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                  <Icon name="Phone" size={13} className="text-[#E8440A] flex-shrink-0" />
                  <span className="text-sm font-semibold">+7 902 640 51 20</span>
                </a>
              </li>
              <li>
                <a href="mailto:csiperm@yandex.ru" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors">
                  <Icon name="Mail" size={13} className="text-[#E8440A] flex-shrink-0" />
                  <span className="text-sm">csiperm@yandex.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-500">
                  <Icon name="MapPin" size={13} className="text-[#E8440A] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">г. Пермь, ул. Целинная, 49</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-500">
                  <Icon name="Clock" size={13} className="text-[#E8440A] flex-shrink-0" />
                  <span className="text-sm">Пн–Пт: 9:00 – 18:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя полоска */}
      <div className="border-t border-[#2e2e2e]">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} Центр Строительного Инжиниринга. Все права защищены.</span>
            <span>г. Пермь</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
