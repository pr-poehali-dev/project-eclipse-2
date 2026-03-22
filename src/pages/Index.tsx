import { Helmet } from "react-helmet-async"
import LandingPage from "@/components/landing"

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Центр Строительного Инжиниринга — строительный контроль в Перми</title>
        <meta name="description" content="Строительный контроль и технический надзор в Перми. Проверяем качество строительства, соблюдение проекта и норм на каждом этапе. Защищаем интересы заказчика." />
        <meta property="og:title" content="Центр Строительного Инжиниринга — строительный контроль в Перми" />
        <meta property="og:description" content="Строительный контроль и технический надзор в Перми. Защищаем интересы заказчика на каждом этапе строительства." />
        <link rel="canonical" href="/" />
      </Helmet>
      <LandingPage />
    </>
  )
}

export default Index