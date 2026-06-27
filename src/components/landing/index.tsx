import Header from "./Header"
import Hero from "./Hero"
import Services from "./Services"
import Gallery from "./Gallery"
import Formats from "./Formats"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero }

export default function LandingPage({ showHeader = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {showHeader && <Header />}
      <Hero />
      <Services />
      <Gallery />
      <Formats />
      <CallToAction />
      <Footer />
    </main>
  )
}
