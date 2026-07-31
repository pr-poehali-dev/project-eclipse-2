import { Helmet } from "react-helmet-async"
import LandingPage from "@/components/landing"

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Центр Строительного Инжиниринга — 3D-печать деталей на заказ и 3D-сканирование</title>
        <meta name="description" content="Печать деталей на 3D-принтере по вашему файлу. Выезд специалиста с 3D-сканером для оцифровки детали и последующей печати." />
        <meta property="og:title" content="Центр Строительного Инжиниринга — 3D-печать деталей на заказ и 3D-сканирование" />
        <meta property="og:description" content="Печать деталей на 3D-принтере на заказ. Выезд на 3D-сканирование для последующей печати." />
        <link rel="canonical" href="/" />
      </Helmet>
      <LandingPage />
    </>
  )
}

export default Index
