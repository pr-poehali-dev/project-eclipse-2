import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services"
import Projects from "./Projects"
import Faq from "./Faq"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero }

export default function LandingPage({ showHeader = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-[#f4f6fa]">
      {showHeader && <Header />}
      <Hero />
      <Services />
      <Projects />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
