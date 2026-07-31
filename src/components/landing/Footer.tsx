export default function Footer() {
  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="/" className="flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-black dark:text-white leading-tight text-center">
            Центр <span className="text-[#7A7FEE]">Строительного</span> Инжиниринга
          </span>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-2">
          Профессиональные строительные услуги и инжиниринговые решения.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Тел.: +7 902 640 51 20 · csiperm@yandex.ru
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} Центр Строительного Инжиниринга. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
