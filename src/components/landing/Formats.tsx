import Icon from "@/components/ui/icon"

const formats = [
  {
    id: 1,
    icon: "Layers",
    title: "FDM-печать пластиком",
    desc: "PLA, ABS, PETG — прочные функциональные детали, корпуса, крепёж, прототипы. Оптимальное соотношение цены и качества.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/bdf1a9ab-187a-4c20-82f9-e2ae74190b50.jpg",
    cta: "Заказать печать",
    link: "/print-order",
  },
  {
    id: 2,
    icon: "Sparkles",
    title: "Печать смолой (SLA)",
    desc: "Высокая детализация для миниатюр, ювелирных мастер-моделей и деталей со сложной геометрией.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/75e5b8f6-7bad-4499-bacf-01430925f760.jpg",
    cta: "Заказать печать",
    link: "/print-order",
  },
  {
    id: 3,
    icon: "ScanLine",
    title: "Выезд для 3D-сканирования",
    desc: "Приедем к вам, отсканируем деталь любой формы и подготовим цифровую модель для печати или реставрации.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/6319695e-fbc2-43e0-81c7-ded125d87fcc.jpg",
    cta: "Заказать выезд",
    link: "/scan-order",
  },
  {
    id: 4,
    icon: "MonitorCog",
    title: "Обработка скана и модели",
    desc: "Чистим облако точек, строим полигональную сетку, готовим файл к печати с учётом технологии.",
    image: "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/0a980d5b-70d5-4c9b-968a-2d7035b64de0.jpg",
    cta: "Подробнее",
    link: "/services",
  },
]

export default function Formats() {
  return (
    <section className="py-16 bg-white dark:bg-[#111111]">
      <div className="container">
        <div className="section-label">Форматы работы</div>
        <div className="mb-10">
          <h2 className="text-black dark:text-white">Выберите формат сотрудничества</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formats.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 hover:border-[#E8440A] transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-md rounded-2xl">
              <div className="relative h-48 overflow-hidden bg-[#1c1c1c]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E8440A]" />
                <div className="absolute top-4 right-4 w-9 h-9 bg-[#E8440A] rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} fallback="Check" size={16} className="text-white" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-black dark:text-white font-bold text-base mb-2 group-hover:text-[#E8440A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                <a
                  href={item.link}
                  className="mt-4 flex items-center gap-1.5 text-[#E8440A] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
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
