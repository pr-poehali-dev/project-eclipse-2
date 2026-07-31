import Icon from "@/components/ui/icon"
import printingImg from "@/assets/qidi-q2-printing.jpg"
import examplesImg from "@/assets/qidi-q2-examples.jpg"
import nozzleImg from "@/assets/qidi-q2-nozzle.jpg"
import scanResultImg from "@/assets/einstar-scan-result.jpg"

const galleryImages = [
  { id: 1, image: printingImg, title: "3D-печать деталей" },
  { id: 2, image: examplesImg, title: "Готовые изделия" },
  { id: 3, image: nozzleImg, title: "Печать пластиком" },
  { id: 4, image: scanResultImg, title: "3D-скан модели" },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      <div className="container">
        <div className="section-label">Наши работы</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-black dark:text-white max-w-xl">
            Примеры напечатанных изделий
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
            Печатаем прототипы, запчасти, сувениры и детали любой сложности
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[420px] md:h-[280px]">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative overflow-hidden group bg-[#1c1c1c] rounded-2xl">
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-white font-semibold text-sm leading-tight">{img.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a href="/print-order" className="btn-outline-orange">
            Заказать свою деталь
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
