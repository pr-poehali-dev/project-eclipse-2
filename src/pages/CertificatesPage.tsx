import { Helmet } from "react-helmet-async"
import { useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const certificates = [
  {
    id: 1,
    title: "Допуск СРО на строительство",
    description: "Допуск к работам, которые оказывают влияние на безопасность объектов капитального строительства.",
    icon: "Award",
    status: "Действует",
    imageUrl: null,
    mailRequest: true,
  },
  {
    id: 2,
    title: "ISO 9001",
    description: "Сертификат системы менеджмента качества. Подтверждает соответствие процессов международным стандартам.",
    icon: "BadgeCheck",
    status: "Действует",
    imageUrl: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/e54fef4f-73c1-4771-aeb8-2370db844a1f.png",
    mailRequest: false,
  },
  {
    id: 3,
    title: "Допуск СРО на проектирование",
    description: "Лицензия на осуществление деятельности по подготовке проектной документации.",
    icon: "FileText",
    status: "Действует",
    imageUrl: null,
    mailRequest: true,
  },
  {
    id: 4,
    title: "Аккредитованная строительная лаборатория",
    description: "Собственная лаборатория с аккредитацией для проведения испытаний строительных материалов и конструкций в соответствии с ГОСТ.",
    icon: "FlaskConical",
    status: "Действует",
    imageUrl: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/aa2f3575-6d52-4f08-a982-8d7efa90a7f0.png",
    mailRequest: false,
  },
]

export default function CertificatesPage() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string>("")

  const openModal = (imageUrl: string, title: string) => {
    setModalImage(imageUrl)
    setModalTitle(title)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalTitle("")
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Helmet>
        <title>Сертификаты и лицензии — Центр Строительного Инжиниринга, Пермь</title>
        <meta name="description" content="Сертификаты и лицензии Центра Строительного Инжиниринга: свидетельство СРО, ISO 9001, лицензия на проектирование. Работаем в полном соответствии с законодательством." />
        <meta property="og:title" content="Сертификаты и лицензии — Центр Строительного Инжиниринга, Пермь" />
        <meta property="og:description" content="Официальные разрешения и сертификаты: СРО, ISO 9001, лицензия на проектирование." />
        <link rel="canonical" href="/certificates" />
      </Helmet>
      <Header />
      <div className="container pt-4 pb-16">
        <section className="my-8">
          <h1 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Сертификаты
            <span className="block text-[#7A7FEE]">и документы</span>
          </h1>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Вся наша деятельность подтверждена официальными разрешениями и сертификатами. Работаем прозрачно и в полном соответствии с законодательством.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certificates.map((cert) => (
              <div key={cert.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                    <Icon name={cert.icon} fallback="Award" size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center gap-1">
                    <Icon name="CheckCircle" size={12} />
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{cert.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">{cert.description}</p>
                {cert.imageUrl && (
                  <button
                    onClick={() => openModal(cert.imageUrl!, cert.title)}
                    className="mt-4 flex items-center gap-2 text-[#7A7FEE] hover:text-[#5a5fd4] text-sm font-medium transition-colors"
                  >
                    <Icon name="Eye" size={16} />
                    Посмотреть документ
                  </button>
                )}
                {cert.mailRequest && (
                  <a
                    href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-[#7A7FEE] hover:text-[#5a5fd4] text-sm font-medium transition-colors"
                  >
                    <Icon name="Mail" size={16} />
                    Запросить документ
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="card p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-[#7A7FEE]/10 dark:bg-[#7A7FEE]/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Icon name="Info" size={22} className="text-[#7A7FEE]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Нужны оригиналы документов?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Предоставим заверенные копии сертификатов и лицензий по запросу. Свяжитесь с нами удобным способом.
                </p>
                <a
                  href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  Запросить документы
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-base font-semibold text-black dark:text-white pr-4">{modalTitle}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors shrink-0"
              >
                <Icon name="X" size={22} />
              </button>
            </div>
            <div className="overflow-auto p-4 flex items-center justify-center">
              <img
                src={modalImage}
                alt={modalTitle}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
