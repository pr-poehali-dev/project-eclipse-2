import { Helmet } from "react-helmet-async"
import { useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

type EquipmentItem = {
  id: number
  title: string
  type: string
  description: string
  images: string[]
  mailRequest?: boolean
}

const equipment: EquipmentItem[] = [
  {
    id: 1,
    title: "SINO T80/LU8 Jupiter Laser GPS RTK",
    type: "GNSS приёмник",
    description: "Высокоточный геодезический GNSS-приёмник с лазерным сканером. Обеспечивает сантиметровую точность измерений в режиме реального времени. Применяется при строительном контроле, исполнительных съёмках и геодезических работах на объектах.",
    images: ["https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/332dec3e-a360-4b36-8369-d5a5a8ac998e.jpg"],
    mailRequest: true,
  },
  {
    id: 2,
    title: "Leica DISTO D510",
    type: "Лазерный дальномер",
    description: "Профессиональный лазерный дальномер с дальностью измерения до 200 м. Оснащён цветным дисплеем, bluetooth-модулем и функцией измерения площадей и объёмов. Незаменим при обмерных работах и строительном контроле.",
    images: ["https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/e5b5420e-9b65-4353-9355-604a9ac5afa3.png"],
    mailRequest: true,
  },
  {
    id: 3,
    title: "Testo 865",
    type: "Тепловизор",
    description: "Тепловизионная камера с разрешением матрицы 160×120 пикселей. Диапазон измерений от −20 до +280 °C. Применяется для обследования зданий, поиска тепловых мостов, дефектов утепления и нарушений герметичности.",
    images: ["https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/3dda6d00-1424-4853-9ea5-57e9f9a1cefb.jpg"],
    mailRequest: true,
  },
  {
    id: 4,
    title: "Topcon GPT-3105N",
    type: "Тахеометр",
    description: "Электронный тахеометр с угловой точностью 5'' и дальностью безотражательного измерения до 250 м. Используется при геодезических съёмках, выносе осей, исполнительной документации и строительном контроле.",
    images: ["https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/d786b61f-c5cb-4c6f-af8f-3f119b2db2ba.jpg"],
    mailRequest: true,
  },
  {
    id: 5,
    title: "ПУЛЬСАР-2.2",
    type: "Дефектоскоп",
    description: "Ультразвуковой дефектоскоп для неразрушающего контроля строительных конструкций. Определяет прочность бетона, выявляет внутренние дефекты и пустоты. Поставляется с набором преобразователей для работы в различных условиях.",
    images: [
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/110bf28f-027f-41d3-8153-a2b851fcc768.jpg",
      "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/1bb0c828-f7d1-44ef-a265-283d70d820c8.jpg",
    ],
    mailRequest: true,
  },
]

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
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Helmet>
        <title>Оборудование — Центр Строительного Инжиниринга, Пермь</title>
        <meta name="description" content="Геодезическое и измерительное оборудование Центра Строительного Инжиниринга. Высокоточные приборы для строительного контроля и геодезических работ." />
        <link rel="canonical" href="/equipment" />
      </Helmet>
      <Header />
      <div className="container pt-4 pb-16">
        <section className="my-8">
          <h1 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Оборудование
            <span className="block text-[#7A7FEE]">и приборы</span>
          </h1>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Используем профессиональное геодезическое и измерительное оборудование для обеспечения высокой точности строительного контроля.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipment.map((item) => (
              <div key={item.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="13" y1="2" x2="13" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                        <circle cx="13" cy="1.5" r="1.5" fill="white"/>
                        <path d="M8 11 Q8 7 13 7 Q18 7 18 11" fill="white" opacity="0.9"/>
                        <rect x="8" y="11" width="10" height="7" rx="1.5" fill="white"/>
                        <rect x="10" y="12.5" width="6" height="3.5" rx="0.8" fill="#7A7FEE"/>
                        <line x1="13" y1="18" x2="7" y2="24" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                        <line x1="13" y1="18" x2="13" y2="24" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                        <line x1="13" y1="18" x2="19" y2="24" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium bg-[#7A7FEE]/10 text-[#7A7FEE] border border-[#7A7FEE]/30 rounded-full px-3 py-1 whitespace-nowrap">
                      {item.type}
                    </span>
                  </div>
                  {item.images.length > 0 && (
                    <button
                      onClick={() => openModal(item.images, item.title)}
                      className="text-[#7A7FEE] hover:text-[#5a5fd4] transition-colors p-1 shrink-0"
                      title="Посмотреть фото"
                    >
                      <Icon name="Eye" size={20} />
                    </button>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">{item.description}</p>
                {item.mailRequest && (
                  <a
                    href="https://mail.yandex.ru/compose?to=csiperm@yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-[#7A7FEE] hover:text-[#5a5fd4] text-sm font-medium transition-colors"
                  >
                    <Icon name="Mail" size={16} />
                    Запросить документ
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      {modalImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-base font-semibold text-black dark:text-white pr-4">{modalTitle}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors shrink-0"
              >
                <Icon name="X" size={22} />
              </button>
            </div>
            <div className="overflow-auto p-4 flex items-center justify-center relative">
              <img
                src={modalImages[modalIndex]}
                alt={modalTitle}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {modalImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setModalIndex(i) }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === modalIndex ? "bg-[#7A7FEE]" : "bg-white/50"}`}
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
