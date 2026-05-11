import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    id: 1,
    question: "Какие сертификаты качества предоставляются с приборами?",
    answer: "Каждый прибор поставляется с сертификатом соответствия, техническим паспортом и, при необходимости, свидетельством о поверке. Вся документация соответствует требованиям ГОСТ и Росстандарта.",
  },
  {
    id: 2,
    question: "Как можно получить документацию на конкретный прибор?",
    answer: "Документацию можно запросить через форму на сайте или по телефону. Мы предоставляем сканы сертификатов и технических паспортов в электронном виде в течение 1 рабочего дня.",
  },
  {
    id: 3,
    question: "Осуществляете ли вы поверку приборов?",
    answer: "Да, мы организуем поверку приборов в аккредитованных метрологических лабораториях. Срок поверки зависит от типа прибора — свяжитесь с нами для уточнения деталей.",
  },
  {
    id: 4,
    question: "Возможна ли поставка под заказ?",
    answer: "Да, мы работаем под заказ. Если нужного прибора нет в наличии, уточните наименование и мы согласуем сроки и условия поставки.",
  },
  {
    id: 5,
    question: "Каковы условия доставки?",
    answer: "Осуществляем доставку по всей России транспортными компаниями или курьерской службой. Хрупкое оборудование упаковывается в защитную тару. Самовывоз также доступен.",
  },
  {
    id: 6,
    question: "Есть ли гарантия на приборы?",
    answer: "На всё оборудование предоставляется официальная гарантия производителя. Гарантийный срок составляет от 12 до 24 месяцев в зависимости от типа прибора.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 bg-[#f4f6fa]">
      <div className="container">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#1e4d9b]" />
          <span className="text-[#1e4d9b] text-xs font-semibold uppercase tracking-widest">Вопросы и ответы</span>
        </div>
        <h2 className="text-[#1a2236] mb-10">Часто задаваемые вопросы</h2>

        <div className="border border-[#dde3ef]">
          {faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className={`bg-white ${idx < faqs.length - 1 ? "border-b border-[#dde3ef]" : ""}`}
            >
              <button
                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#eef1f8] transition-colors group"
              >
                <span className={`text-sm font-semibold pr-4 ${openItem === faq.id ? "text-[#1e4d9b]" : "text-[#1a2236]"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border transition-all ${
                  openItem === faq.id
                    ? "border-[#1e4d9b] bg-[#1e4d9b] text-white rotate-45"
                    : "border-[#dde3ef] text-[#6b7a99] group-hover:border-[#1e4d9b]"
                }`}>
                  <Icon name="Plus" size={14} />
                </div>
              </button>
              {openItem === faq.id && (
                <div className="px-6 pb-5 border-t border-[#eef1f8]">
                  <p className="text-[#6b7a99] text-sm leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
