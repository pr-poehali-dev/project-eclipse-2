import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero, Footer }

export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      {showHeader && <Header />}
      <div className="container pt-4">
        <Hero />
      </div>
      {showFooter && <Footer />}
    </main>
  )
}
