import Icon from "@/components/ui/icon"

const objects = [
  {
    id: 1,
    title: "Жилые комплексы",
    desc: "от 500 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/a8a6b6d2-4cd2-431e-b95b-df812e2f845b.jpg",
  },
  {
    id: 2,
    title: "Офисные здания",
    desc: "от 300 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/8d5e5ee6-875f-4cb6-93e0-ec389d2f9762.jpg",
  },
  {
    id: 3,
    title: "Торговые центры",
    desc: "от 400 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/2d8ac96d-8dea-44aa-915f-9be582da0aff.jpg",
  },
  {
    id: 4,
    title: "Промышленные объекты",
    desc: "от 600 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/d3220a72-26e1-4984-9870-68a8bb9f3db9.jpg",
  },
  {
    id: 5,
    title: "Складские комплексы",
    desc: "от 250 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/ffa19cbc-0975-4a68-9f42-edce14820b34.jpg",
  },
  {
    id: 6,
    title: "Инфраструктура",
    desc: "от 700 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/90943aa4-425a-434c-af3f-b274e977bd90.jpg",
  },
  {
    id: 7,
    title: "Строительная экспертиза",
    desc: "от 80 000 руб.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/d72be996-4188-4df6-83d9-3be0e289aee2.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="section-label">Направления</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-[#1a1a1a] max-w-lg">
            Строительный контроль под любые задачи
          </h2>
          <a
            href="/services"
            className="text-[#E8440A] text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1.5 flex-shrink-0"
          >
            Все услуги
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>

        {/* Сетка объектов */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {objects.map((obj) => (
            <a
              key={obj.id}
              href="/services"
              className="group relative overflow-hidden bg-[#1c1c1c] block"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={obj.image}
                alt={obj.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
              />
              {/* Оверлей снизу */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Иконка */}
              <div className="absolute top-3 left-3 w-7 h-7 bg-[#E8440A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowUpRight" size={14} className="text-white" />
              </div>
              {/* Текст */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-bold text-sm leading-tight">{obj.title}</div>
                <div className="text-gray-300 text-xs mt-1">{obj.desc}</div>
              </div>
            </a>
          ))}

          {/* Оранжевая карточка "30+" */}
          <div className="bg-[#E8440A] flex flex-col items-center justify-center p-6 text-center" style={{ aspectRatio: "4/3" }}>
            <div className="text-white font-black text-5xl leading-none">30+</div>
            <div className="text-white/90 font-semibold text-xs uppercase tracking-wider mt-2 leading-snug">
              вариантов объектов и услуг
            </div>
            <a
              href="/services"
              className="mt-4 flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-wider hover:underline"
            >
              Смотреть все
              <Icon name="ArrowRight" size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
