import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Что такое строительный контроль и зачем он нужен?",
    answer:
      "Строительный контроль — это проверка соответствия строительных работ проекту, нормативам и стандартам качества. Он защищает заказчика от некачественного строительства, экономит деньги и помогает избежать скрытых дефектов, которые дорого устранять после сдачи объекта.",
  },
  {
    id: 2,
    question: "На каких этапах строительства вы работаете?",
    answer:
      "Мы осуществляем контроль на всех этапах: от проверки проектной документации и инженерных изысканий до контроля фундамента, несущих конструкций, инженерных сетей и финальной приёмки объекта.",
  },
  {
    id: 3,
    question: "Чем технический надзор отличается от строительного контроля?",
    answer:
      "Строительный контроль — это надзор со стороны подрядчика или технического заказчика за соответствием работ проекту. Технический надзор — это независимая проверка от лица инвестора или заказчика. Мы оказываем оба вида услуг.",
  },
  {
    id: 4,
    question: "Как быстро вы можете приступить к работе?",
    answer:
      "После согласования договора мы можем приступить к работе в течение 1–3 рабочих дней. Оставьте заявку — менеджер свяжется с вами и уточнит детали.",
  },
  {
    id: 5,
    question: "Работаете ли вы за пределами Перми?",
    answer:
      "Основная зона работы — Пермь и Пермский край. По крупным объектам готовы обсудить выезд в другие регионы — свяжитесь с нами для уточнения условий.",
  },
  {
    id: 6,
    question: "Какие документы вы предоставляете по итогам контроля?",
    answer:
      "По итогам работы предоставляем акты скрытых работ, журналы строительного контроля, заключения о соответствии, предписания об устранении нарушений и итоговый отчёт для заказчика.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые распространённые вопросы о строительном контроле, техническом надзоре и нашей работе.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center text-left gap-4"
              >
                <span className="font-medium text-black dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#7A7FEE] shrink-0 transition-transform duration-200 ${
                    openItem === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItem === faq.id && (
                <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
