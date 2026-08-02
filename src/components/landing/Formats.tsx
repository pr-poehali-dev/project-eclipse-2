import Icon from "@/components/ui/icon"

const formats = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Строительный контроль",
    desc: "Полное сопровождение строительства — от нулевого цикла до сдачи объекта. Контроль качества работ, материалов и соответствия проекту.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/d72be996-4188-4df6-83d9-3be0e289aee2.jpg",
    cta: "Подробнее",
  },
  {
    id: 2,
    icon: "Eye",
    title: "Технический надзор",
    desc: "Авторский и технический надзор за строительством. Проверка применяемых технологий, соответствия нормам и соблюдения сроков.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/05bf32a1-3259-4c52-9489-2211d922de6f.jpg",
    cta: "Подробнее",
  },
  {
    id: 3,
    icon: "Search",
    title: "Строительная экспертиза",
    desc: "Независимая строительно-техническая экспертиза объектов. Выявление дефектов, оценка качества выполненных работ и ущерба.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/a8a6b6d2-4cd2-431e-b95b-df812e2f845b.jpg",
    cta: "Подробнее",
  },
  {
    id: 4,
    icon: "PenTool",
    title: "Проектирование",
    desc: "Разработка проектной и рабочей документации любой сложности в соответствии с действующими нормами и стандартами.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/90943aa4-425a-434c-af3f-b274e977bd90.jpg",
    cta: "Подробнее",
  },
]

export default function Formats() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="section-label">Форматы работы</div>
        <div className="mb-10">
          <h2 className="text-[#1a1a1a]">Выберите формат сотрудничества</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formats.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white border border-gray-100 hover:border-[#7A7FEE] transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-md">
              {/* Фото */}
              <div className="relative h-48 overflow-hidden bg-[#1c1c1c]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7A7FEE]" />
                <div className="absolute top-4 right-4 w-9 h-9 bg-[#7A7FEE] flex items-center justify-center">
                  <Icon name={item.icon} fallback="Check" size={16} className="text-white" />
                </div>
              </div>
              {/* Текст */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#1a1a1a] font-bold text-base mb-2 group-hover:text-[#7A7FEE] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                <a
                  href="/services"
                  className="mt-4 flex items-center gap-1.5 text-[#7A7FEE] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
                >
                  {item.cta}
                  <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}