import { Helmet } from "react-helmet-async"
import { useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const certificates = [
  {
    id: 1,
    title: "Допуск СРО на строительство",
    description:
      "Допуск к работам, которые оказывают влияние на безопасность объектов капитального строительства.",
    icon: "Award",
    status: "Действует",
    imageUrl: null,
    mailRequest: true,
  },
  {
    id: 2,
    title: "ISO 9001",
    description:
      "Сертификат системы менеджмента качества. Подтверждает соответствие процессов международным стандартам.",
    icon: "BadgeCheck",
    status: "Действует",
    imageUrl:
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/e54fef4f-73c1-4771-aeb8-2370db844a1f.png",
    mailRequest: false,
  },
  {
    id: 3,
    title: "Допуск СРО на проектирование",
    description:
      "Лицензия на осуществление деятельности по подготовке проектной документации.",
    icon: "FileText",
    status: "Действует",
    imageUrl: null,
    mailRequest: true,
  },
  {
    id: 4,
    title: "Аккредитованная строительная лаборатория",
    description:
      "Собственная лаборатория с аккредитацией для проведения испытаний строительных материалов и конструкций в соответствии с ГОСТ.",
    icon: "FlaskConical",
    status: "Действует",
    imageUrl:
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/aa2f3575-6d52-4f08-a982-8d7efa90a7f0.png",
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
    <main className="min-h-screen bg-[#f4f6fa]">
      <Helmet>
        <title>Сертификаты и лицензии — Центр Строительного Инжиниринга, Пермь</title>
        <meta
          name="description"
          content="Сертификаты и лицензии Центра Строительного Инжиниринга: свидетельство СРО, ISO 9001, лицензия на проектирование. Работаем в полном соответствии с законодательством."
        />
        <meta
          property="og:title"
          content="Сертификаты и лицензии — Центр Строительного Инжиниринга, Пермь"
        />
        <meta
          property="og:description"
          content="Официальные разрешения и сертификаты: СРО, ISO 9001, лицензия на проектирование."
        />
        <link rel="canonical" href="/certificates" />
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
            Сертификаты и документы
          </h1>
          <p className="text-[#8a9bbf] max-w-2xl text-lg leading-relaxed">
            Вся наша деятельность подтверждена официальными разрешениями и
            сертификатами. Работаем прозрачно и в полном соответствии с
            законодательством.
          </p>
        </div>
      </section>

      {/* Certificates grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Наши разрешения
            </span>
          </div>
          <h2 className="font-bold text-[#1a2236] mb-10">
            Лицензии и сертификаты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="border border-[#dde3ef] bg-white p-6 flex flex-col transition-colors duration-200 hover:bg-[#eef1f8]"
              >
                {/* Header row: icon + status badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={cert.icon}
                      fallback="Award"
                      size={22}
                      className="text-white"
                    />
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 flex items-center gap-1">
                    <Icon name="CheckCircle" size={11} />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1a2236] mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[#6b7a99] text-sm leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Actions */}
                <div className="mt-5 flex flex-col gap-2">
                  {cert.imageUrl && (
                    <button
                      onClick={() => openModal(cert.imageUrl!, cert.title)}
                      className="flex items-center gap-2 text-[#1e4d9b] hover:text-[#163d7a] text-sm font-semibold transition-colors"
                    >
                      <Icon name="Eye" size={15} />
                      Посмотреть документ
                    </button>
                  )}
                  {cert.mailRequest && (
                    <a
                      href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1e4d9b] hover:text-[#163d7a] text-sm font-semibold transition-colors"
                    >
                      <Icon name="Mail" size={15} />
                      Запросить документ
                    </a>
                  )}
                </div>
              </div>
            ))}
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
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="block w-1 h-4 bg-[#1e4d9b]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
                  Документация
                </span>
              </div>
              <h2 className="font-bold text-white mb-3">
                Нужны оригиналы документов?
              </h2>
              <p className="text-[#8a9bbf] text-lg leading-relaxed max-w-xl">
                Предоставим заверенные копии сертификатов и лицензий по запросу.
                Свяжитесь с нами удобным способом.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:flex-shrink-0">
              <a
                href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Icon name="Mail" size={16} />
                Запросить документы
              </a>
              <a
                href="tel:+79026405120"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Icon name="Phone" size={16} />
                +7 902 640 51 20
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#dde3ef]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={14} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-[#1a2236] pr-4">
                  {modalTitle}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-[#6b7a99] hover:text-[#1a2236] transition-colors shrink-0 p-1"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            {/* Modal body */}
            <div className="overflow-auto p-5 flex items-center justify-center bg-[#f4f6fa]">
              <img
                src={modalImage}
                alt={modalTitle}
                className="max-w-full max-h-[74vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
