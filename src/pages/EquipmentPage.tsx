import { Helmet } from "react-helmet-async"
import { useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

type EquipmentItem = {
  id: number
  title: string
  type: string
  category: "Геодезия" | "Диагностика"
  icon: string
  description: string
  images: string[]
  mailRequest?: boolean
}

const equipment: EquipmentItem[] = [
  {
    id: 1,
    title: "SINO T80/LU8 Jupiter Laser GPS RTK",
    type: "GNSS-приёмник",
    category: "Геодезия",
    icon: "Satellite",
    description:
      "Высокоточный геодезический GNSS-приёмник с лазерным сканером. Обеспечивает сантиметровую точность измерений в режиме реального времени. Применяется при строительном контроле, исполнительных съёмках и геодезических работах на объектах.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/e97bf6c0-2278-451f-8b18-c98c0f0ed0b6.png",
    ],
    mailRequest: true,
  },
  {
    id: 2,
    title: "Leica DISTO D510",
    type: "Лазерный нивелир",
    category: "Геодезия",
    icon: "Crosshair",
    description:
      "Профессиональный лазерный дальномер с дальностью измерения до 200 м. Оснащён цветным дисплеем, bluetooth-модулем и функцией измерения площадей и объёмов. Незаменим при обмерных работах и строительном контроле.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/e5b5420e-9b65-4353-9355-604a9ac5afa3.png",
    ],
    mailRequest: true,
  },
  {
    id: 3,
    title: "Testo 865",
    type: "Тепловизор",
    category: "Диагностика",
    icon: "Thermometer",
    description:
      "Тепловизионная камера с разрешением матрицы 160×120 пикселей. Диапазон измерений от −20 до +280 °C. Применяется для обследования зданий, поиска тепловых мостов, дефектов утепления и нарушений герметичности.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/3dda6d00-1424-4853-9ea5-57e9f9a1cefb.jpg",
    ],
    mailRequest: true,
  },
  {
    id: 4,
    title: "Topcon GPT-3105N",
    type: "Тахеометр",
    category: "Геодезия",
    icon: "Compass",
    description:
      "Электронный тахеометр с угловой точностью 5'' и дальностью безотражательного измерения до 250 м. Используется при геодезических съёмках, выносе осей, исполнительной документации и строительном контроле.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/d786b61f-c5cb-4c6f-af8f-3f119b2db2ba.jpg",
    ],
    mailRequest: true,
  },
  {
    id: 5,
    title: "ПУЛЬСАР-2.2",
    type: "Дефектоскоп",
    category: "Диагностика",
    icon: "ScanLine",
    description:
      "Ультразвуковой дефектоскоп для неразрушающего контроля строительных конструкций. Определяет прочность бетона, выявляет внутренние дефекты и пустоты. Поставляется с набором преобразователей для работы в различных условиях.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/110bf28f-027f-41d3-8153-a2b851fcc768.jpg",
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/1bb0c828-f7d1-44ef-a265-283d70d820c8.jpg",
    ],
    mailRequest: true,
  },
]

const categoryColors: Record<EquipmentItem["category"], string> = {
  Геодезия: "bg-[#1e4d9b]",
  Диагностика: "bg-[#163d7a]",
}

export default function EquipmentPage() {
  const [modalImages, setModalImages] = useState<string[]>([])
  const [modalTitle, setModalTitle] = useState<string>("")
  const [modalIndex, setModalIndex] = useState(0)

  const openModal = (images: string[], title: string) => {
    setModalImages(images)
    setModalTitle(title)
    setModalIndex(0)
  }

  const closeModal = () => {
    setModalImages([])
    setModalTitle("")
    setModalIndex(0)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setModalIndex((i) => (i + 1) % modalImages.length)
  }

  return (
    <main className="min-h-screen bg-[#f4f6fa]">
      <Helmet>
        <title>Оборудование — Центр Строительного Инжиниринга, Пермь</title>
        <meta
          name="description"
          content="Геодезическое и измерительное оборудование Центра Строительного Инжиниринга. Высокоточные приборы для строительного контроля и геодезических работ."
        />
        <link rel="canonical" href="/equipment" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px)",
          }}
        />
        <div className="container relative py-16 md:py-24">
          <div className="flex items-center gap-2 mb-5">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Центр Строительного Инжиниринга
            </span>
          </div>
          <h1 className="text-white font-bold leading-tight mb-4">
            Оборудование и приборы
          </h1>
          <p className="text-[#8a9bbf] max-w-2xl text-lg leading-relaxed">
            Используем профессиональное геодезическое и измерительное
            оборудование для обеспечения высокой точности строительного
            контроля.
          </p>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Наш парк приборов
            </span>
          </div>
          <h2 className="font-bold text-[#1a2236] mb-10">
            Профессиональная техника
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipment.map((item) => (
              <div
                key={item.id}
                className="border border-[#dde3ef] bg-white flex flex-col transition-colors duration-200 hover:bg-[#eef1f8] group"
              >
                {/* Thumbnail */}
                {item.images.length > 0 && (
                  <button
                    onClick={() => openModal(item.images, item.title)}
                    className="block w-full overflow-hidden bg-[#f4f6fa] border-b border-[#dde3ef] relative"
                    title="Посмотреть фото"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-44 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0a1628]/30">
                      <span className="bg-white text-[#1e4d9b] text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5">
                        <Icon name="Eye" size={13} />
                        Посмотреть фото
                      </span>
                    </span>
                  </button>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={item.icon}
                        fallback="Wrench"
                        size={22}
                        className="text-white"
                      />
                    </div>
                    <span
                      className={`${categoryColors[item.category]} text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Type label */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7a99] mb-1">
                    {item.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1a2236] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6b7a99] text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Action */}
                  {item.mailRequest && (
                    <a
                      href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center gap-2 text-[#1e4d9b] hover:text-[#163d7a] text-sm font-semibold transition-colors"
                    >
                      <Icon name="Mail" size={15} />
                      Запросить информацию
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112040 100%)",
        }}
        className="py-14 md:py-20"
      >
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="block w-1 h-4 bg-[#1e4d9b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1e4d9b]">
              Сотрудничество
            </span>
          </div>
          <h2 className="font-bold text-white mb-4">
            Нужна выездная диагностика?
          </h2>
          <p className="text-[#8a9bbf] mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Наши специалисты выезжают на объект со всем необходимым
            оборудованием. Свяжитесь с нами для уточнения деталей.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79026405120"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 902 640 51 20
            </a>
            <a
              href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Icon name="Mail" size={16} />
              Написать письмо
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Photo Modal */}
      {modalImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#dde3ef]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#1e4d9b] flex items-center justify-center flex-shrink-0">
                  <Icon name="Camera" size={14} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-[#1a2236] pr-4">
                  {modalTitle}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-[#6b7a99] hover:text-[#1a2236] transition-colors shrink-0 p-1"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Modal body */}
            <div className="overflow-auto p-5 flex items-center justify-center bg-[#f4f6fa] relative min-h-[300px]">
              <img
                src={modalImages[modalIndex]}
                alt={modalTitle}
                className="max-w-full max-h-[74vh] object-contain"
              />

              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0a1628]/60 hover:bg-[#0a1628]/80 text-white p-2 transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0a1628]/60 hover:bg-[#0a1628]/80 text-white p-2 transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {modalImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation()
                          setModalIndex(i)
                        }}
                        className={`w-2 h-2 transition-colors ${
                          i === modalIndex ? "bg-[#1e4d9b]" : "bg-[#6b7a99]/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
