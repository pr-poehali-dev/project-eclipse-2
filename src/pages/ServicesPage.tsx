import { Helmet } from "react-helmet-async"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Строительный контроль",
    description:
      "Комплексный контроль качества строительства на всех этапах: от нулевого цикла до сдачи объекта. Проверяем соответствие работ проекту, нормам и стандартам — защищаем ваши интересы.",
    icon: "ShieldCheck",
    featured: true,
  },
  {
    id: 2,
    title: "Технический надзор",
    description:
      "Авторский и технический надзор за ходом строительства. Контроль применяемых материалов, технологий и сроков выполнения работ.",
    icon: "Eye",
    featured: false,
  },
  {
    id: 3,
    title: "Строительная экспертиза",
    description:
      "Независимая строительно-техническая экспертиза объектов. Оценка качества выполненных работ, выявление дефектов и нарушений.",
    icon: "Search",
    featured: false,
  },
  {
    id: 4,
    title: "Проектирование",
    description:
      "Разработка проектной и рабочей документации для объектов строительства различного назначения в соответствии с нормами и стандартами.",
    icon: "PenTool",
    featured: false,
  },
  {
    id: 5,
    title: "Инженерные изыскания",
    description:
      "Геодезические, геологические и экологические изыскания для подготовки к строительству и проектированию.",
    icon: "MapPin",
    featured: false,
  },
  {
    id: 6,
    title: "Сметное дело",
    description:
      "Составление смет, проверка и экспертиза сметной документации. Ценообразование в строительстве по актуальным нормативам.",
    icon: "Calculator",
    featured: false,
  },
  {
    id: 7,
    title: "Консультации и сопровождение",
    description:
      "Юридическое и техническое сопровождение строительных проектов, консультации по нормативной базе и согласованиям.",
    icon: "MessageSquare",
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f4f6fa]">
      <Helmet>
        <title>Услуги — строительный контроль и надзор в Перми</title>
        <meta
          name="description"
          content="Строительный контроль, технический надзор, экспертиза, проектирование, инженерные изыскания и сметное дело в Перми. Защищаем интересы заказчика."
        />
        <meta
          property="og:title"
          content="Услуги — строительный контроль и надзор в Перми"
        />
        <meta
          property="og:description"
          content="Строительный контроль и технический надзор в Перми. Полный спектр услуг для заказчиков строительства."
        />
        <link rel="canonical" href="/services" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none"
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
            Наши услуги
          </h1>
          <p className="text-[#8a9bbf] max-w-2xl text-lg leading-relaxed">
            Профессиональный строительный контроль и технический надзор в Перми.
            Работаем на стороне заказчика — обеспечиваем качество на каждом
            этапе строительства.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Что мы делаем
            </span>
          </div>
          <h2 className="font-bold text-[#1a2236] mb-10">
            Полный спектр услуг
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) =>
              service.featured ? (
                /* Featured card — full width */
                <div
                  key={service.id}
                  className="col-span-1 md:col-span-2 lg:col-span-3 border border-[#dde3ef] bg-white border-l-4 border-l-[#1e4d9b] p-7 flex flex-col md:flex-row md:items-start gap-6 group transition-colors duration-200 hover:bg-[#eef1f8]"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#1e4d9b] flex items-center justify-center">
                      <Icon
                        name={service.icon}
                        fallback="CircleDot"
                        size={26}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#1a2236]">
                        {service.title}
                      </h3>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 uppercase tracking-wide">
                        Основная услуга
                      </span>
                    </div>
                    <p className="text-[#6b7a99] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ) : (
                /* Regular card */
                <div
                  key={service.id}
                  className="border border-[#dde3ef] bg-white p-6 flex flex-col gap-4 group transition-colors duration-200 hover:bg-[#eef1f8]"
                >
                  <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={service.icon}
                      fallback="CircleDot"
                      size={22}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a2236] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#6b7a99] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            )}
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
              Обратная связь
            </span>
          </div>
          <h2 className="font-bold text-white mb-4">Нужна консультация?</h2>
          <p className="text-[#8a9bbf] mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Свяжитесь с нами — обсудим ваш проект и подберём оптимальное
            решение для защиты ваших интересов.
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
              Написать письмо
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
