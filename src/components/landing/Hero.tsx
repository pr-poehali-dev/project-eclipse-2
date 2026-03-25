import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-flex items-center gap-2 bg-[#7A7FEE]/10 text-[#7A7FEE] text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7A7FEE] inline-block"></span>
            Строительный контроль · Технический надзор
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Защищаем интересы
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">заказчика</span>
            на стройке
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Осуществляем строительный контроль и технический надзор на каждом этапе — от фундамента до сдачи объекта. Проверяем соответствие проекту, нормам и стандартам качества.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="/services" className="btn-secondary text-black dark:text-white">
              Наши услуги
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black dark:text-white text-base">10+</span> лет опыта
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black dark:text-white text-base">200+</span> объектов
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black dark:text-white text-base">Пермь</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <img
            src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/099d839b-5a65-4306-b92a-b861bb716812.jpg"
            alt="Строительный контроль — инспектор на объекте"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
