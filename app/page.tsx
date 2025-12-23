import Hero from '@/components/Hero'
import CTAButton from '@/components/CTAButton'
import Info from '@/components/Info'
import Lineup from '@/components/Lineup'
import Photography from '@/components/Photography'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-midnight min-h-screen overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* CTA Button Section */}
      <CTAButton />
      
      {/* Event Info Section */}
      <Info />
      
      {/* Lineup Section */}
      <Lineup />
      
      {/* Photography Section */}
      <Photography />
      
      {/* Footer with Final CTA */}
      <Footer />
    </main>
  )
}

