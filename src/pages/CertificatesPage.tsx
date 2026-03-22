import { Helmet } from "react-helmet-async"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const certificates = [
  {
    id: 1,
    title: "Свидетельство СРО",
    description: "Допуск к работам, которые оказывают влияние на безопасность объектов капитального строительства.",
    icon: "Award",
    status: "Действует",
  },
  {
    id: 2,
    title: "ISO 9001",
    description: "Сертификат системы менеджмента качества. Подтверждает соответствие процессов международным стандартам.",
    icon: "BadgeCheck",
    status: "Действует",
  },
  {
    id: 3,
    title: "Лицензия на проектирование",
    description: "Лицензия на осуществление деятельности по подготовке проектной документации.",
    icon: "FileText",
    status: "Действует",
  },
]

export default function CertificatesPage() {
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {certificates.map((cert) => (
              <div key={cert.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="card p-8 shadow-md">
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
                <a href="/contacts" className="btn-primary inline-flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  Запросить документы
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}