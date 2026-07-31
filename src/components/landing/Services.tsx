import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Каталог приборов",
    description: "Широкий ассортимент измерительных, контрольных и лабораторных приборов для различных отраслей промышленности.",
    icon: "Gauge",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Сертификаты качества",
    description: "Все приборы сопровождаются официальными сертификатами соответствия и техническими паспортами.",
    icon: "BadgeCheck",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Техническая поддержка",
    description: "Консультации по выбору оборудования, помощь с документацией и поддержка на всех этапах сотрудничества.",
    icon: "HeadphonesIcon",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Всё для вашего
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">производства</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Мы поставляем сертифицированные приборы и обеспечиваем полное сопровождение — от выбора оборудования до технической документации.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} fallback="CircleDot" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
