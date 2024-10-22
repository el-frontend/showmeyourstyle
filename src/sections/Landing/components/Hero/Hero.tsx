'use client'

import './hero.css'

import CloudinaryImage from '@/components/image/CloudinaryImage'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { Effect } from '@/sections/Editor/types/presets'
import { useState } from 'react'
import HalloweenTheme from '../Halloween/HalloweenTheme'
import HeroActionButton from './HeroActionButton'

const Hero = () => {
  const [effect, setEffect] = useState<Effect | null>(null)
  const { isLg } = useBreakpoints()

  const changeEffect = (style: string) => {
    setEffect({ from: 'outfit', to: `${style}`, preserveGeometry: true })
  }

  const randomSpookyStyle = () => {
    const spookyStyles = [
      'costume of a witch with a hat',
      'costume of a vampire with a cape',
      'costume of a ghost with a sheet',
      'costume of a pirate with a hat',
      'costume of a werewolf with a mask',
      'costume of a skeleton with a mask',
      'costume of a clown with a mask',
      'costume of a superhero with a cape',
      'costume of a zombie with a makeup',
      'costume of a mummy with a bandage',
    ]
    const randomIndex = Math.floor(Math.random() * spookyStyles.length)
    return spookyStyles[randomIndex]
  }

  return (
    <div className="relative w-full bg-background bg-cover bg-center bg-no-repeat hero-container">
      <div
        className="relative container mx-auto  py-0  md:pt-12  rounded-none md:rounded-3xl overflow-hidden"
        id="hero"
      >
        {isLg && <HalloweenTheme />}
        <div className="relative flex flex-col md:flex-row min-h-[600px] lg:min-h-[650px] overflow-hidden">
          <div className="w-full lg:w-3/5 p-4 lg:p-12 flex flex-col justify-start lg:justify-center">
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 font-spooky text-white text-center md:text-left">
              Unleash Your Style with AI-Driven Fashion Creations
            </h1>
            <p className="text-gray-100 mb-8 text-lg lg:text-2xl hidden md:block">
              Transform your wardrobe by uploading photos and letting AI design
              unique outfits tailored to your preferences.
            </p>
            <div className="w-full mb-8 absolute bottom-0 left-0 right-0 lg:relative z-50">
              <p className="text-white font-semibold mb-6 text-xl hidden md:block">
                Try it now!! ✨
              </p>
              <div className="grid grid-cols-4 lg:grid-cols-3 gap-4 p-2 lg:p-0">
                <HeroActionButton
                  text="Casual Style"
                  onClick={() => changeEffect('casual style outfit')}
                />
                <HeroActionButton
                  text="Chic Style"
                  onClick={() => changeEffect('chic style outfit')}
                />
                <HeroActionButton
                  text="Bohemian Style"
                  onClick={() => changeEffect('bohemian style outfit')}
                />
                <HeroActionButton
                  text="Streetwear Style"
                  onClick={() => changeEffect('streetwear style outfit')}
                />
                <HeroActionButton
                  text="Vintage Style"
                  onClick={() => changeEffect('vintage style outfit')}
                />
                <HeroActionButton
                  text="Athleisure Style"
                  onClick={() => changeEffect('athleisure style outfit')}
                />
                <HeroActionButton
                  text="Special Spooky Style"
                  onClick={() => changeEffect(`${randomSpookyStyle()}`)}
                />
              </div>
            </div>
          </div>
          <div className="w-0 lg:w-2/5">
            <div className="absolute bottom-0 right-0">
              <CloudinaryImage
                src="sys-model-hd"
                width={600}
                height={600}
                alt="Hero Image"
                effect={effect || undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
