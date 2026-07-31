import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services"
import Formats from "./Formats"
import Gallery from "./Gallery"
import PriceList from "./PriceList"
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
      </div>
      <Formats />
      <Gallery />
      <PriceList />
      <div className="container">
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
