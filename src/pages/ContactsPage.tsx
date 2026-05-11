import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handle}
      title="Копировать"
      className="p-1.5 rounded-sm hover:bg-[#eef1f8] transition-colors flex-shrink-0"
    >
      {copied ? (
        <Icon name="Check" size={16} className="text-green-600" />
      ) : (
        <Icon name="Copy" size={16} className="text-[#6b7a99] hover:text-[#1e4d9b]" />
      )}
    </button>
  )
}

function openRoute() {
  const fallback =
    "https://yandex.ru/maps/50/perm/?mode=routes&rtext=~%D0%9F%D0%B5%D1%80%D0%BC%D1%8C%2C+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A6%D0%B5%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F%2C+49&rtt=auto"
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isMobile) {
    const isAndroid = /Android/i.test(navigator.userAgent)
    if (isAndroid) {
      window.location.href =
        "intent://build_route_on_map?lat_to=58.05165&lon_to=56.349485#Intent;scheme=yandexmaps;package=ru.yandex.yandexmaps;S.browser_fallback_url=" +
        encodeURIComponent(fallback) +
        ";end"
    } else {
      window.location.href =
        "yandexmaps://build_route_on_map?lat_to=58.05165&lon_to=56.349485"
      setTimeout(() => {
        window.location.href = fallback
      }, 1500)
    }
  } else {
    window.open(fallback, "_blank")
  }
}

function RouteButton() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        openRoute()
      }}
      title="Построить маршрут"
      className="p-1.5 rounded-sm hover:bg-[#eef1f8] transition-colors flex-shrink-0"
    >
      <Icon
        name="Navigation"
        size={16}
        className="text-[#6b7a99] hover:text-[#1e4d9b]"
      />
    </button>
  )
}

const contactCards = [
  {
    icon: "Phone",
    label: "Телефон",
    content: (
      <div className="flex items-center gap-2 w-full">
        <a
          href="tel:+79026405120"
          className="text-lg font-bold text-[#1a2236] hover:text-[#1e4d9b] transition-colors"
        >
          +7 902 640 51 20
        </a>
        <div className="ml-auto flex items-center gap-0.5">
          <a
            href="tel:+79026405120"
            title="Позвонить"
            className="p-1.5 rounded-sm hover:bg-[#eef1f8] transition-colors flex-shrink-0"
          >
            <Icon
              name="Phone"
              size={16}
              className="text-[#6b7a99] hover:text-[#1e4d9b]"
            />
          </a>
          <CopyButton text="+79026405120" />
        </div>
      </div>
    ),
  },
  {
    icon: "Mail",
    label: "Электронная почта",
    content: (
      <div className="flex items-center gap-2 w-full">
        <a
          href="https://mail.yandex.ru/compose?to=csiperm%40yandex.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-[#1a2236] hover:text-[#1e4d9b] transition-colors"
        >
          csiperm@yandex.ru
        </a>
        <div className="ml-auto flex items-center gap-0.5">
          <a
            href="https://mail.yandex.ru/compose?to=csiperm%40yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            title="Написать письмо"
            className="p-1.5 rounded-sm hover:bg-[#eef1f8] transition-colors flex-shrink-0"
          >
            <Icon
              name="Mail"
              size={16}
              className="text-[#6b7a99] hover:text-[#1e4d9b]"
            />
          </a>
          <CopyButton text="csiperm@yandex.ru" />
        </div>
      </div>
    ),
  },
  {
    icon: "MapPin",
    label: "Адрес офиса",
    content: (
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={openRoute}
          className="text-lg font-bold text-[#1a2236] hover:text-[#1e4d9b] transition-colors text-left"
        >
          г. Пермь, ул. Целинная, 49
        </button>
        <div className="ml-auto flex items-center gap-0.5">
          <RouteButton />
          <CopyButton text="г. Пермь, ул. Целинная, 49" />
        </div>
      </div>
    ),
  },
]

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#f4f6fa]">
      <Helmet>
        <title>Контакты — Центр Строительного Инжиниринга, Пермь</title>
        <meta
          name="description"
          content="Контакты Центра Строительного Инжиниринга в Перми. Телефон: +7 902 640 51 20, email: csiperm@yandex.ru. Адрес: г. Пермь, ул. Целинная, 49."
        />
        <meta
          property="og:title"
          content="Контакты — Центр Строительного Инжиниринга, Пермь"
        />
        <meta
          property="og:description"
          content="Свяжитесь с нами: +7 902 640 51 20, csiperm@yandex.ru. г. Пермь, ул. Целинная, 49."
        />
        <link rel="canonical" href="/contacts" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px)",
          }}
        />
        <div className="container relative py-16 md:py-24">
          <div className="flex items-center gap-2 mb-5">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Центр Строительного Инжиниринга
            </span>
          </div>
          <h1 className="text-white font-bold leading-tight mb-4">
            Контакты
          </h1>
          <p className="text-[#8a9bbf] max-w-2xl text-lg leading-relaxed">
            Мы находимся в Перми и готовы ответить на все ваши вопросы в рабочее
            время. Пн–Пт: 9:00–18:00.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Как с нами связаться
            </span>
          </div>
          <h2 className="font-bold text-[#1a2236] mb-10">
            Контактная информация
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="border border-[#dde3ef] bg-white p-6 flex flex-col items-start gap-4 group transition-colors duration-200 hover:bg-[#eef1f8]"
              >
                <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={card.icon}
                    fallback="CircleDot"
                    size={22}
                    className="text-white"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7a99] mb-2">
                    {card.label}
                  </p>
                  {card.content}
                </div>
              </div>
            ))}
          </div>

          {/* Work hours strip */}
          <div className="border border-[#dde3ef] bg-white p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={22} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7a99] mb-1">
                Режим работы
              </p>
              <p className="text-lg font-bold text-[#1a2236]">
                Пн–Пт: 9:00–18:00
              </p>
            </div>
            <div className="sm:ml-auto">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                Открыто сегодня
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="border border-[#dde3ef] bg-white overflow-hidden">
            <div className="px-5 py-4 border-b border-[#dde3ef] flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                <Icon name="Map" size={16} className="text-white" />
              </div>
              <span className="font-semibold text-[#1a2236] text-sm">
                Мы на карте — г. Пермь, ул. Целинная, 49
              </span>
            </div>
            <div className="w-full h-[450px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=56.18910%2C57.99010&z=16&pt=56.18910,57.99010,pm2rdm&text=%D0%9F%D0%B5%D1%80%D0%BC%D1%8C%2C+%D1%83%D0%BB.+%D0%A6%D0%B5%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F+49&source=constructorLink"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
                title="Офис на Яндекс Картах"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)",
        }}
        className="py-14 md:py-20"
      >
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Готовы помочь
            </span>
          </div>
          <h2 className="font-bold text-white mb-4">Есть вопросы?</h2>
          <p className="text-[#8a9bbf] mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Позвоните или напишите нам — ответим на все вопросы и проконсультируем
            по вашему проекту бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79026405120"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 902 640 51 20
            </a>
            <a
              href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Icon name="Mail" size={16} />
              csiperm@yandex.ru
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
