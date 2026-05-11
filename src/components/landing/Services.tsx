import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Строительный контроль",
    description: "Комплексный контроль качества на всех этапах строительства. Проверяем соответствие работ проекту и нормам.",
    icon: "ShieldCheck",
  },
  {
    id: 2,
    title: "Технический надзор",
    description: "Авторский и технический надзор за ходом строительства, контроль материалов и технологий.",
    icon: "Eye",
  },
  {
    id: 3,
    title: "Строительная экспертиза",
    description: "Независимая строительно-техническая экспертиза объектов, выявление дефектов и нарушений.",
    icon: "Search",
  },
  {
    id: 4,
    title: "Проектирование",
    description: "Разработка проектной и рабочей документации в соответствии с нормами и стандартами.",
    icon: "PenTool",
  },
  {
    id: 5,
    title: "Инженерные изыскания",
    description: "Геодезические, геологические и экологические изыскания для строительства.",
    icon: "MapPin",
  },
  {
    id: 6,
    title: "Сметное дело",
    description: "Составление и экспертиза сметной документации по актуальным нормативам.",
    icon: "Calculator",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-[#f4f6fa]">
      <div className="container">
        {/* Заголовок секции */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#1e4d9b]" />
          <span className="text-[#1e4d9b] text-xs font-semibold uppercase tracking-widest">Что мы делаем</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-[#1a2236] max-w-lg">
            Наши услуги
          </h2>
          <a href="/services" className="text-[#1e4d9b] text-sm font-semibold uppercase tracking-wide hover:underline flex items-center gap-1 flex-shrink-0">
            Все услуги
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#dde3ef]">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white p-6 hover:bg-[#eef1f8] transition-colors group border-[#dde3ef]
                ${idx % 3 !== 2 ? "lg:border-r" : ""}
                ${idx % 2 !== 1 ? "sm:border-r lg:border-r-0" : "sm:border-r-0"}
                ${Math.floor(idx / 3) < Math.floor((services.length - 1) / 3) ? "lg:border-b" : ""}
                ${Math.floor(idx / 2) < Math.floor((services.length - 1) / 2) ? "sm:border-b lg:border-b-0" : "sm:border-b-0"}
                ${idx < services.length - (services.length % 3 === 0 ? 3 : services.length % 3) ? "lg:border-b" : ""}
              `}
            >
              <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center mb-4 group-hover:bg-[#2d6fdb] transition-colors">
                <Icon name={service.icon} fallback="CircleDot" size={20} className="text-white" />
              </div>
              <h3 className="text-[#1a2236] font-bold text-base mb-2 group-hover:text-[#1e4d9b] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
