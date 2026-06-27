import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: "/services", label: "Услуги" },
    { to: "/equipment", label: "Оборудование" },
    { to: "/certificates", label: "Сертификаты" },
    { to: "/contacts", label: "Контакты" },
  ]

  return (
    <>
      <header className="w-full bg-[#1c1c1c] z-40 sticky top-0">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <img
                src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/favicon-nobg.png"
                alt="ЦСИ"
                className="h-8 w-8 object-contain"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm uppercase tracking-wider">ЦСИ</div>
                <div className="text-[#E8440A] font-semibold text-[10px] uppercase tracking-wider">Строительный инжиниринг</div>
              </div>
            </Link>

            {/* Десктоп навигация */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                    location.pathname === link.to
                      ? "text-[#E8440A] border-[#E8440A]"
                      : "text-gray-300 hover:text-white border-transparent hover:border-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Правая часть: телефон + иконки */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+79026405120"
                className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#E8440A] transition-colors"
              >
                <div className="w-7 h-7 bg-[#E8440A] flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={13} className="text-white" />
                </div>
                +7 902 640 51 20
              </a>
              <div className="flex items-center gap-1.5">
                <a
                  href="mailto:csiperm@yandex.ru"
                  className="w-7 h-7 bg-[#2e2e2e] hover:bg-[#E8440A] flex items-center justify-center transition-colors"
                  title="Email"
                >
                  <Icon name="Mail" size={13} className="text-white" />
                </a>
                <a
                  href="https://t.me/csiperm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-[#2e2e2e] hover:bg-[#E8440A] flex items-center justify-center transition-colors"
                  title="Telegram"
                >
                  <Icon name="Send" size={13} className="text-white" />
                </a>
              </div>
            </div>

            {/* Мобильная кнопка */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-white"
              aria-label="Меню"
            >
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#1c1c1c] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[#2e2e2e]">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Меню</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white">
                <Icon name="X" size={20} />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-0.5">
                <li>
                  <Link
                    to="/"
                    className="block py-3 px-4 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-[#2e2e2e] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`block py-3 px-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
                        location.pathname === link.to
                          ? "text-[#E8440A] bg-[#2e2e2e]"
                          : "text-gray-300 hover:text-white hover:bg-[#2e2e2e]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#2e2e2e] space-y-3">
                <a href="tel:+79026405120" className="flex items-center gap-3 text-white font-bold">
                  <Icon name="Phone" size={14} className="text-[#E8440A]" />
                  +7 902 640 51 20
                </a>
                <a href="mailto:csiperm@yandex.ru" className="flex items-center gap-3 text-gray-400 text-sm">
                  <Icon name="Mail" size={14} className="text-[#E8440A]" />
                  csiperm@yandex.ru
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
