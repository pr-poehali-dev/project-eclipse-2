export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <div className="section-label">Свяжитесь с нами</div>
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Готовы напечатать <span className="text-[#E8440A]">вашу деталь</span>
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Есть готовая 3D-модель или нужно сначала отсканировать деталь?
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Оставьте заявку — мы свяжемся с вами, поможем подобрать материал и рассчитаем стоимость.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/print-order" className="btn-primary">
              Заказать печать
            </a>
            <a href="tel:+79026405120" className="btn-secondary text-black dark:text-white">
              +7 902 640 51 20
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0">
          <img
            src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/04570a30-7d74-40bd-b4f3-fa86691f069e.jpg"
            alt="Готовые изделия"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
