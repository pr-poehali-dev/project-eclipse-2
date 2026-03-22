import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    title: "Мультиметры",
    shortDescription: "Цифровые и аналоговые мультиметры для измерения напряжения, тока и сопротивления",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
    badge: "Сертифицировано",
  },
  {
    id: 2,
    title: "Термометры",
    shortDescription: "Контактные и бесконтактные термометры для промышленного и лабораторного контроля температуры",
    mainImage: "/portfolio-images/fintech-dashboard-1.jpg",
    badge: "Сертифицировано",
  },
  {
    id: 3,
    title: "Манометры",
    shortDescription: "Приборы для измерения давления жидкостей и газов, соответствующие ГОСТ",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
    badge: "Сертифицировано",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наш
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">каталог приборов</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Широкий ассортимент измерительного оборудования с действующими сертификатами качества. Вся продукция проходит
        обязательную проверку и поставляется с технической документацией.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.mainImage}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#7A7FEE] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                <Icon name="BadgeCheck" size={12} />
                {product.badge}
              </span>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{product.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{product.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Подробнее{" "}
                <Icon name="ArrowUpRight" size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Запросить полный каталог
        </a>
      </div>
    </section>
  )
}