import Icon from "@/components/ui/icon"

const materials = [
  { id: 1, name: "PLA пластик", desc: "Базовый материал, экологичный, для прототипов и сувениров", price: "от 5 ₽/г", icon: "Box" },
  { id: 2, name: "ABS пластик", desc: "Прочный и термостойкий, для функциональных деталей", price: "от 6 ₽/г", icon: "Shield" },
  { id: 3, name: "PETG пластик", desc: "Ударопрочный, устойчив к влаге и химии", price: "от 7 ₽/г", icon: "Droplet" },
  { id: 4, name: "Фотополимерная смола", desc: "Максимальная детализация, гладкая поверхность", price: "от 12 ₽/г", icon: "Sparkles" },
]

const services = [
  { id: 1, name: "Выезд на 3D-сканирование", desc: "В пределах города, обработка результата", price: "от 3 000 ₽", icon: "ScanLine" },
  { id: 2, name: "Доработка 3D-модели", desc: "Исправление геометрии, подготовка к печати", price: "от 1 000 ₽", icon: "PenTool" },
  { id: 3, name: "Постобработка изделия", desc: "Шлифовка, покраска, склейка деталей", price: "от 500 ₽", icon: "Wand2" },
]

export default function PriceList() {
  return (
    <section className="py-16 bg-white dark:bg-[#111111]">
      <div className="container">
        <div className="section-label">Цены</div>
        <h2 className="text-black dark:text-white mb-10 max-w-xl">Материалы и услуги</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-black dark:text-white font-bold text-lg mb-4">Материалы для печати</h3>
            <div className="space-y-3">
              {materials.map((m) => (
                <div key={m.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-[#E8440A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={m.icon} fallback="Box" size={18} className="text-[#E8440A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-black dark:text-white font-semibold text-sm">{m.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{m.desc}</div>
                  </div>
                  <div className="text-[#E8440A] font-bold text-sm whitespace-nowrap">{m.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-black dark:text-white font-bold text-lg mb-4">Дополнительные услуги</h3>
            <div className="space-y-3">
              {services.map((s) => (
                <div key={s.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-[#E8440A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={s.icon} fallback="Box" size={18} className="text-[#E8440A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-black dark:text-white font-semibold text-sm">{s.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{s.desc}</div>
                  </div>
                  <div className="text-[#E8440A] font-bold text-sm whitespace-nowrap">{s.price}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#E8440A]/5 border border-[#E8440A]/20">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Точную стоимость печати вашей детали рассчитаем после получения файла — зависит от объёма, материала и сложности геометрии.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
