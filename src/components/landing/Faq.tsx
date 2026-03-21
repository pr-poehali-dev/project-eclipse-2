import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Какие сертификаты качества предоставляются с приборами?",
    answer:
      "Каждый прибор поставляется с сертификатом соответствия, техническим паспортом и, при необходимости, свидетельством о поверке. Вся документация соответствует требованиям ГОСТ и Росстандарта.",
  },
  {
    id: 2,
    question: "Как можно получить документацию на конкретный прибор?",
    answer:
      "Документацию можно запросить через форму на сайте или по телефону. Мы предоставляем сканы сертификатов и технических паспортов в электронном виде в течение 1 рабочего дня.",
  },
  {
    id: 3,
    question: "Осуществляете ли вы поверку приборов?",
    answer:
      "Да, мы организуем поверку приборов в аккредитованных метрологических лабораториях. Срок поверки зависит от типа прибора — свяжитесь с нами для уточнения деталей.",
  },
  {
    id: 4,
    question: "Возможна ли поставка под заказ?",
    answer:
      "Да, мы работаем под заказ. Если нужного прибора нет в наличии, уточните наименование и мы согласуем сроки и условия поставки.",
  },
  {
    id: 5,
    question: "Каковы условия доставки?",
    answer:
      "Осуществляем доставку по всей России транспортными компаниями или курьерской службой. Хрупкое оборудование упаковывается в защитную тару. Самовывоз также доступен.",
  },
  {
    id: 6,
    question: "Есть ли гарантия на приборы?",
    answer:
      "На всё оборудование предоставляется официальная гарантия производителя. Гарантийный срок указывается в паспорте изделия и составляет от 12 до 24 месяцев в зависимости от типа прибора.",
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
          Отвечаем на самые распространённые вопросы о нашей продукции, сертификатах и условиях работы.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
