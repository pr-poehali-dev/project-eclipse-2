import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services"
import Faq from "./Faq"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero }

export default function LandingPage({ showHeader = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      {showHeader && <Header />}
      <div className="container pt-4">
        <Hero />
        <Services />
        <Faq />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
