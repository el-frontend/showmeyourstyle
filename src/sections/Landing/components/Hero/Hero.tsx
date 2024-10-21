'use client'

import CloudinaryImage from '@/components/image/CloudinaryImage'
import { Effect } from '@/sections/Editor/types/presets'
import { useState } from 'react'
import HeroActionButton from './HeroActionButton'

const Hero = () => {
  const [effect, setEffect] = useState<Effect | null>(null)

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
    <div
      className="container mx-auto px-2 py-0 md:px-4 md:pt-12 bg-background relative rounded-none md:rounded-3xl overflow-hidden"
      id="hero"
    >
      <div className="relative flex flex-col md:flex-row min-h-[650px] overflow-hidden">
        <div className="w-full lg:w-3/5 p-4 lg:p-12 flex flex-col justify-start lg:justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Unleash Your Style with AI-Driven Fashion Creations
          </h1>
          <p className="text-gray-300 mb-8">
            Transform your wardrobe by uploading photos and letting AI design
            unique outfits tailored to your preferences.
          </p>
          <div className="w-full mb-8 absolute bottom-0 left-0 right-0 lg:relative z-50">
            <p className="text-white font-semibold mb-6 text-xl hidden md:block">
              Try it now!! ✨
            </p>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-4">
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
  )
}

export default Hero
