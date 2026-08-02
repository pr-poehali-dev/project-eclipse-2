import Icon from "@/components/ui/icon"

const galleryImages = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/d72be996-4188-4df6-83d9-3be0e289aee2.jpg",
    title: "Строительный контроль",
    wide: true,
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/05bf32a1-3259-4c52-9489-2211d922de6f.jpg",
    title: "Технический надзор",
    wide: false,
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/ffa19cbc-0975-4a68-9f42-edce14820b34.jpg",
    title: "Экспертиза объектов",
    wide: false,
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/d3220a72-26e1-4984-9870-68a8bb9f3db9.jpg",
    title: "Промышленные объекты",
    wide: false,
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/8d5e5ee6-875f-4cb6-93e0-ec389d2f9762.jpg",
    title: "Офисные здания",
    wide: false,
  },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container">
        <div className="section-label">Наши объекты</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-[#1a1a1a] max-w-xl">
            Индивидуальный подход к каждому объекту
          </h2>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Работаем с объектами любой сложности — от частных домов до крупных промышленных комплексов
          </p>
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[480px] md:h-[420px]">
          {/* Большое фото слева */}
          <div className="col-span-2 row-span-2 relative overflow-hidden group bg-[#1c1c1c]">
            <img
              src={galleryImages[0].image}
              alt={galleryImages[0].title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="text-white font-bold text-base">{galleryImages[0].title}</div>
              <div className="flex items-center gap-1 text-gray-300 text-xs mt-1">
                <Icon name="MapPin" size={11} className="text-[#7A7FEE]" />
                г. Пермь
              </div>
            </div>
          </div>

          {/* 4 маленьких фото справа */}
          {galleryImages.slice(1).map((img) => (
            <div key={img.id} className="relative overflow-hidden group bg-[#1c1c1c]">
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white font-semibold text-xs leading-tight">{img.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a href="/services" className="btn-outline-orange">
            Смотреть все объекты
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}