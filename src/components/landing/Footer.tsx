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
    <footer className="bg-[#060f1e] border-t border-[#1e3460]">
      {/* Основной блок футера */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Логотип и описание */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/favicon-nobg.png"
                alt="Логотип ЦСИ"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm uppercase tracking-wide">Центр Строительного</div>
                <div className="text-[#2d6fdb] font-bold text-sm uppercase tracking-wide">Инжиниринга</div>
              </div>
            </a>
            <p className="text-[#8a9bbf] text-sm leading-relaxed">
              Профессиональный строительный контроль и технический надзор в Перми. Работаем на стороне заказчика.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Разделы сайта</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="text-[#8a9bbf] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#1e3460] group-hover:bg-[#2d6fdb] transition-colors" />
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
                <a href="tel:+79026405120" className="flex items-start gap-3 text-[#8a9bbf] hover:text-white transition-colors group">
                  <Icon name="Phone" size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#2d6fdb] transition-colors" />
                  <span className="text-sm">+7 902 640 51 20</span>
                </a>
              </li>
              <li>
                <a href="mailto:csiperm@yandex.ru" className="flex items-start gap-3 text-[#8a9bbf] hover:text-white transition-colors group">
                  <Icon name="Mail" size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#2d6fdb] transition-colors" />
                  <span className="text-sm">csiperm@yandex.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#8a9bbf]">
                  <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">г. Пермь, ул. Целинная, 49</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#8a9bbf]">
                  <Icon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Пн–Пт: 9:00 – 18:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя полоска */}
      <div className="border-t border-[#1e3460]">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4a5568]">
            <span>© {new Date().getFullYear()} Центр Строительного Инжиниринга. Все права защищены.</span>
            <span>г. Пермь</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
