'use client'

import InteractiveImage from '@/components/image/InteractiveImage'

import { useState } from 'react'
import HeroActionButton from './HeroActionButton'

const Hero = () => {
  const [effect, setEffect] = useState<string>('')

  const changeEffect = (style: string) => {
    setEffect(
      `gen_replace:from_clothes%20and%20head;to_${style};preserve-geometry_true`
    )
  }

  const randomSpookyStyle = () => {
    const spookyStyles = [
      'costume%20of%20a%20witch%20with%20a%20hat',
      'costume%20of%20a%20vampire%20with%20a%20cape',
      'costume%20of%20a%20ghost%20with%20a%20sheet',
      'costume%20of%20a%20pirate%20with%20a%20hat',
      'costume%20of%20a%20werewolf%20with%20a%20mask',
      'costume%20of%20a%20skeleton%20with%20a%20mask',
      'costume%20of%20a%20clown%20with%20a%20mask',
      'costume%20of%20a%20superhero%20with%20a%20cape',
      'costume%20of%20a%20zombie%20with%20a%20makeup',
      'costume%20of%20a%20mummy%20with%20a%20bandage',
    ]
    const randomIndex = Math.floor(Math.random() * spookyStyles.length)
    return spookyStyles[randomIndex]
  }

  return (
    <div className="container mx-auto px-2 py-0 md:px-4 md:pt-12 bg-background relative rounded-none md:rounded-3xl overflow-hidden" id="hero">
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
              onClick={() => changeEffect('casual%20style%20outfit')}
              />
              <HeroActionButton
              text="Chic Style"
              onClick={() => changeEffect('chic%20style%20outfit')}
              />
              <HeroActionButton
              text="Bohemian Style"
              onClick={() => changeEffect('bohemian%20style%20outfit')}
              />
              <HeroActionButton
              text="Streetwear Style"
              onClick={() => changeEffect('streetwear%20style%20outfit')}
              />
              <HeroActionButton
              text="Vintage Style"
              onClick={() => changeEffect('vintage%20style%20outfit')}
              />
              <HeroActionButton
              text="Athleisure Style"
              onClick={() => changeEffect('athleisure%20style%20outfit')}
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
            <InteractiveImage
              src="sys-model-hd"
              width={600}
              height={600}
              alt="Hero Image"
              effect={effect}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
