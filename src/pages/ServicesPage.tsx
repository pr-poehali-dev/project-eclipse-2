import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Строительная экспертиза",
    description: "Проведение независимой строительно-технической экспертизы объектов. Оценка качества строительных работ, материалов и конструкций.",
    icon: "Search",
  },
  {
    id: 2,
    title: "Проектирование",
    description: "Разработка проектной и рабочей документации для объектов строительства различного назначения в соответствии с нормами и стандартами.",
    icon: "PenTool",
  },
  {
    id: 3,
    title: "Технический надзор",
    description: "Авторский и технический надзор за строительством. Контроль качества выполняемых работ на всех этапах реализации проекта.",
    icon: "Eye",
  },
  {
    id: 4,
    title: "Инженерные изыскания",
    description: "Геодезические, геологические и экологические изыскания для подготовки к строительству и проектированию.",
    icon: "MapPin",
  },
  {
    id: 5,
    title: "Сметное дело",
    description: "Составление смет, проверка и экспертиза сметной документации. Ценообразование в строительстве по актуальным нормативам.",
    icon: "Calculator",
  },
  {
    id: 6,
    title: "Консультации и сопровождение",
    description: "Юридическое и техническое сопровождение строительных проектов, консультации по нормативной базе и согласованиям.",
    icon: "MessageSquare",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4 pb-16">
        <section className="my-8">
          <h1 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Наши
            <span className="block text-[#7A7FEE]">услуги</span>
          </h1>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Центр Строительного Инжиниринга предоставляет полный спектр услуг в области строительства и проектирования. Работаем профессионально и в срок.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={service.icon} fallback="CircleDot" size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 shadow-md text-center">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Нужна консультация?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Свяжитесь с нами — обсудим ваш проект и подберём оптимальное решение.
            </p>
            <a
              href="/contacts"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              Связаться с нами
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
