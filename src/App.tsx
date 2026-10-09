import { Routes, Route } from 'react-router'
import { Nav } from '@/sections/Nav'
import { Hero } from '@/sections/Hero'
import { LogoMarquee } from '@/sections/LogoMarquee'
import { LiveDemo } from '@/sections/LiveDemo'
import { UseCases } from '@/sections/UseCases'
import { Security } from '@/sections/Security'
import { Pricing } from '@/sections/Pricing'
import { FinalCta } from '@/sections/FinalCta'
import { Footer } from '@/sections/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <LiveDemo />
        <UseCases />
        <Security />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
