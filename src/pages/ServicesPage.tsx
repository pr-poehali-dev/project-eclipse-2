import { Helmet } from "react-helmet-async"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "3D-печать по вашему файлу",
    description: "Печатаем детали по готовой 3D-модели в формате STL или OBJ. Подберём материал, цвет и параметры печати под вашу задачу — от прототипов до функциональных деталей.",
    icon: "FileUp",
    featured: true,
    link: "/print-order",
  },
  {
    id: 2,
    title: "Выезд на 3D-сканирование",
    description: "Приедем к вам со сканером, снимем точную цифровую копию детали любой формы и подготовим файл для последующей печати или реставрации.",
    icon: "ScanLine",
    featured: false,
    link: "/scan-order",
  },
  {
    id: 3,
    title: "FDM-печать пластиком",
    description: "PLA, ABS, PETG — прочные и доступные материалы для прототипов, корпусов, крепежа и функциональных деталей на принтере QIDI Q2.",
    icon: "Layers",
    featured: false,
    link: "/print-order",
  },
  {
    id: 4,
    title: "Печать инженерными пластиками",
    description: "Нейлон (PA), поликарбонат и композиты — для нагруженных деталей, печать при температуре сопла до 370°C в подогреваемой камере.",
    icon: "Flame",
    featured: false,
    link: "/print-order",
  },
  {
    id: 5,
    title: "Доработка 3D-моделей",
    description: "Исправляем геометрию, устраняем ошибки сетки и готовим файл к печати с учётом выбранной технологии.",
    icon: "PenTool",
    featured: false,
    link: "/services",
  },
  {
    id: 6,
    title: "Постобработка изделий",
    description: "Шлифовка, покраска, склейка деталей и удаление поддержек — доводим готовое изделие до презентабельного вида.",
    icon: "Wand2",
    featured: false,
    link: "/services",
  },
  {
    id: 7,
    title: "Консультация по печати",
    description: "Поможем выбрать технологию, материал и параметры печати, если вы не уверены, что подойдёт для вашей задачи.",
    icon: "MessageSquare",
    featured: false,
    link: "/contacts",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Helmet>
        <title>Услуги — 3D-печать и сканирование Центр Строительного Инжиниринга</title>
        <meta name="description" content="3D-печать деталей на заказ на принтере QIDI Q2, выезд на 3D-сканирование, доработка моделей и постобработка изделий." />
        <meta property="og:title" content="Услуги — 3D-печать и сканирование Центр Строительного Инжиниринга" />
        <meta property="og:description" content="3D-печать деталей на заказ и выезд на 3D-сканирование. Полный спектр услуг." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Header />
      <div className="container pt-4 pb-16">
        <section className="my-8">
          <div className="section-label">Услуги</div>
          <h1 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Наши
            <span className="block text-[#E8440A]">услуги</span>
          </h1>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Центр Строительного Инжиниринга — печать деталей на заказ и выезд на 3D-сканирование. От готового файла до цифровой копии физического объекта — берём на себя весь процесс.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <a
                href={service.link}
                key={service.id}
                className={`card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 block ${service.featured ? "md:col-span-2 lg:col-span-3 border-2 border-[#E8440A]" : ""}`}
              >
                <div className="bg-[#E8440A] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={service.icon} fallback="CircleDot" size={22} className="text-white" />
                </div>
                {service.featured && (
                  <span className="inline-block text-xs font-semibold text-[#E8440A] border border-[#E8440A] rounded-full px-3 py-1 mb-3 uppercase tracking-wide">
                    Основная услуга
                  </span>
                )}
                <h3 className={`font-semibold mb-2 text-black dark:text-white ${service.featured ? "text-2xl" : "text-xl"}`}>{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 card p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Нужна консультация?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Свяжитесь с нами — поможем подобрать технологию и материал под вашу задачу.
            </p>
            <a
              href="/contacts"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Mail" size={16} />
              Связаться с нами
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}