import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Свяжитесь с нами — <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">ответим</span> быстро
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Нужен строительный контроль или технический надзор на вашем объекте?
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Оставьте заявку — специалист свяжется с вами в рабочее время, уточнит детали и предложит оптимальное решение.
          </p>
          <div className="flex flex-wrap gap-4">
            <ContactFormButton />
            <a href="tel:+79026405120" className="btn-secondary text-black dark:text-white">
              +7 (902) 640-51-20
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 items-center justify-center p-8">
          <div className="text-[#7A7FEE]/10 dark:text-[#7A7FEE]/5 text-[200px] font-black leading-none select-none">
            ЦСИ
          </div>
        </div>
      </div>
    </section>
  )
}
