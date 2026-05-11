import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/equipment", label: "Оборудование" },
    { to: "/certificates", label: "Сертификаты" },
    { to: "/contacts", label: "Контакты" },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Верхняя полоса с контактами */}
      <div className="bg-[#060f1e] border-b border-[#1e3460]">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-xs text-[#8a9bbf]">
            <div className="flex items-center gap-6">
              <a href="tel:+79026405120" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Icon name="Phone" size={12} />
                +7 902 640 51 20
              </a>
              <a href="mailto:csiperm@yandex.ru" className="flex items-center gap-1.5 hover:text-white transition-colors hidden sm:flex">
                <Icon name="Mail" size={12} />
                csiperm@yandex.ru
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="MapPin" size={12} />
              <span>г. Пермь</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной хедер */}
      <header className="sticky top-0 z-40 w-full bg-[#0a1628] shadow-lg border-b border-[#1e3460]">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Логотип */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/favicon-nobg.png"
                alt="Логотип ЦСИ"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-base md:text-lg uppercase tracking-wide font-['Roboto_Condensed',sans-serif]">
                  Центр Строительного
                </div>
                <div className="text-[#2d6fdb] font-bold text-base md:text-lg uppercase tracking-wide font-['Roboto_Condensed',sans-serif]">
                  Инжиниринга
                </div>
              </div>
            </Link>

            {/* Десктоп навигация */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                        location.pathname === link.to
                          ? "text-white bg-[#1e4d9b]"
                          : "text-[#c2cce8] hover:text-white hover:bg-[#112040]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Кнопка связи + бургер */}
            <div className="flex items-center gap-3">
              <a
                href="/contacts"
                className="hidden md:inline-block btn-primary text-xs py-2 px-4"
              >
                Связаться
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white"
                aria-label="Меню"
              >
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a1628] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[#1e3460]">
              <div className="leading-tight">
                <div className="text-white font-bold text-sm uppercase tracking-wide">Центр Строительного</div>
                <div className="text-[#2d6fdb] font-bold text-sm uppercase tracking-wide">Инжиниринга</div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#8a9bbf] hover:text-white"
                aria-label="Закрыть меню"
              >
                <Icon name="X" size={22} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`flex items-center py-3 px-4 text-sm font-medium uppercase tracking-wide transition-colors ${
                        location.pathname === link.to
                          ? "text-white bg-[#1e4d9b]"
                          : "text-[#c2cce8] hover:text-white hover:bg-[#112040]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[#1e3460]">
                <a href="tel:+79026405120" className="flex items-center gap-2 text-[#8a9bbf] hover:text-white text-sm mb-3">
                  <Icon name="Phone" size={14} />
                  +7 902 640 51 20
                </a>
                <a href="mailto:csiperm@yandex.ru" className="flex items-center gap-2 text-[#8a9bbf] hover:text-white text-sm">
                  <Icon name="Mail" size={14} />
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
