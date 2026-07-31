import Icon from "@/components/ui/icon"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <div className="section-label">3D-печать и сканирование</div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Напечатаем деталь
            <span className="block text-[#E8440A]">любой сложности</span>
            на заказ
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Печать пластиком и смолой по вашей 3D-модели или чертежу. А если модели нет — приедем со сканером, снимем деталь и подготовим файл для печати.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/print-order" className="btn-primary">
              Заказать печать
            </a>
            <a href="/scan-order" className="btn-secondary text-black dark:text-white">
              Заказать сканирование
            </a>
          </div>

          <div className="flex gap-8 mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-[#E8440A] text-3xl font-black">0.05мм</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mt-1">точность печати</div>
            </div>
            <div>
              <div className="text-[#E8440A] text-3xl font-black">1-3 дня</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mt-1">срок изготовления</div>
            </div>
            <div>
              <div className="text-[#E8440A] text-3xl font-black">10+</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mt-1">видов материалов</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0">
          <img
            src="https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/files/5c5019b7-8550-498c-8b28-12a8fe21b383.jpg"
            alt="3D-печать"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 dark:to-[#111111]/30" />
        </div>
      </div>

      {/* 3 блока преимуществ */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
          {[
            {
              icon: "FileUp",
              title: "Печать по вашему файлу",
              desc: "Загрузите STL/OBJ — рассчитаем и напечатаем",
            },
            {
              icon: "ScanLine",
              title: "Нет модели — приедем со сканером",
              desc: "Отсканируем деталь и подготовим файл",
            },
            {
              icon: "PackageCheck",
              title: "Доставка по всей России",
              desc: "Отправим готовое изделие в любой город",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 bg-[#E8440A] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} fallback="Check" size={18} className="text-white" />
              </div>
              <div>
                <div className="text-black dark:text-white text-sm font-semibold leading-snug">{item.title}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
