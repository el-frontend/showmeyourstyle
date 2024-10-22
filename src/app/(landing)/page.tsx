import Footer from '@/sections/Landing/components/Footer'
import Hero from '@/sections/Landing/components/Hero/Hero'
import Instructions from '@/sections/Landing/components/Instructions'
import Showcase from '@/sections/Landing/components/Showcase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show me your style',
  description: 'Unleash your style with AI-driven fashion creations',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Instructions />
      <Showcase />
      <Footer />
    </>
  )
}
