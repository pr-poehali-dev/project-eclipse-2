import { Helmet } from "react-helmet-async"
import LandingPage from "@/components/landing"

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Центр Строительного Инжиниринга — экспертиза, проектирование, надзор в Перми</title>
        <meta name="description" content="Профессиональные инжиниринговые решения для строительства в Перми и регионе. Строительная экспертиза, проектирование, технический надзор, инженерные изыскания." />
        <meta property="og:title" content="Центр Строительного Инжиниринга — экспертиза, проектирование, надзор в Перми" />
        <meta property="og:description" content="Профессиональные инжиниринговые решения для строительства в Перми и регионе." />
        <link rel="canonical" href="/" />
      </Helmet>
      <LandingPage />
    </>
  )
}

export default Index