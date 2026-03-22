import { useState } from "react"
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
      className="ml-auto p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
    >
      {copied
        ? <Icon name="Check" size={16} className="text-green-500" />
        : <Icon name="Copy" size={16} className="text-gray-400 hover:text-[#7A7FEE]" />
      }
    </button>
  )
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4 pb-16">
        <section className="my-8">
          <h1 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Контактная
            <span className="block text-[#7A7FEE]">информация</span>
          </h1>
          <p className="mb-10 max-w-2xl text-gray-700 dark:text-gray-300">
            Мы находимся в Перми и готовы ответить на все ваши вопросы в рабочее время.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-3">
              <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <Icon name="Phone" size={22} className="text-white" />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Телефон</p>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+79026405120"
                    className="text-lg font-semibold text-black dark:text-white hover:text-[#7A7FEE] transition-colors"
                  >+7 902 640 51 20</a>
                  <CopyButton text="+79026405120" />
                </div>
              </div>
            </div>

            <div className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-3">
              <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <Icon name="Mail" size={22} className="text-white" />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Электронная почта</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://mail.yandex.ru/compose?to=csiperm%40yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-black dark:text-white hover:text-[#7A7FEE] transition-colors"
                  >
                    csiperm@yandex.ru
                  </a>
                  <CopyButton text="csiperm@yandex.ru" />
                </div>
              </div>
            </div>

            <div className="card p-6 shadow-md flex flex-col items-start gap-3">
              <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <Icon name="MapPin" size={22} className="text-white" />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Адрес офиса</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://yandex.ru/maps/50/perm/?mode=routes&rtext=~Пермь, улица Целинная, 49&rtt=auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                      if (isMobile) {
                        e.preventDefault()
                        const fallback = "https://yandex.ru/maps/50/perm/?mode=routes&rtext=~%D0%9F%D0%B5%D1%80%D0%BC%D1%8C%2C+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A6%D0%B5%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F%2C+49&rtt=auto"
                        const isAndroid = /Android/i.test(navigator.userAgent)
                        if (isAndroid) {
                          window.location.href = "intent://build_route_on_map?lat_to=58.0189&lon_to=56.0671#Intent;scheme=yandexmaps;package=ru.yandex.yandexmaps;S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end"
                        } else {
                          window.location.href = "yandexmaps://build_route_on_map?lat_to=58.0189&lon_to=56.0671"
                          setTimeout(() => {
                            window.location.href = fallback
                          }, 1500)
                        }
                      }
                    }}
                    className="text-lg font-semibold text-black dark:text-white hover:text-[#7A7FEE] transition-colors"
                  >
                    г. Пермь, ул. Целинная, 49
                  </a>
                  <CopyButton text="г. Пермь, ул. Целинная, 49" />
                </div>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden shadow-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
              <Icon name="Map" size={18} className="text-[#7A7FEE]" />
              <span className="font-medium text-black dark:text-white">Мы на карте — г. Пермь, ул. Целинная, 49</span>
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
        </section>
      </div>
      <Footer />
    </main>
  )
}