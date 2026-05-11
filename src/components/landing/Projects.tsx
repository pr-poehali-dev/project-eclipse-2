import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    title: "Мультиметры",
    shortDescription: "Цифровые и аналоговые мультиметры для измерения напряжения, тока и сопротивления",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
    category: "Измерительные приборы",
  },
  {
    id: 2,
    title: "Термометры",
    shortDescription: "Контактные и бесконтактные термометры для промышленного и лабораторного контроля температуры",
    mainImage: "/portfolio-images/fintech-dashboard-1.jpg",
    category: "Контроль температуры",
  },
  {
    id: 3,
    title: "Манометры",
    shortDescription: "Приборы для измерения давления жидкостей и газов, соответствующие ГОСТ",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
    category: "Контроль давления",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        {/* Заголовок секции */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#1e4d9b]" />
          <span className="text-[#1e4d9b] text-xs font-semibold uppercase tracking-widest">Каталог</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-[#1a2236] max-w-lg">
            Наш каталог приборов
          </h2>
          <a href="#contact" className="text-[#1e4d9b] text-sm font-semibold uppercase tracking-wide hover:underline flex items-center gap-1 flex-shrink-0">
            Запросить каталог
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-[#dde3ef] bg-white hover:border-[#1e4d9b] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 bg-[#1e4d9b] px-3 py-1">
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[#1a2236] font-bold text-lg mb-2 group-hover:text-[#1e4d9b] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#6b7a99] text-sm leading-relaxed mb-4">{product.shortDescription}</p>
                <div className="flex items-center gap-1 text-[#1e4d9b] text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                  Подробнее
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="#contact" className="btn-primary">
            Запросить полный каталог
          </a>
        </div>
      </div>
    </section>
  )
}
