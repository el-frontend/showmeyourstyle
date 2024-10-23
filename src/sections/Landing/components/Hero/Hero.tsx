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
    setEffect({ from: 'all_clothes', to: `${style}`, preserveGeometry: true })
  }

  const randomSpookyStyle = () => {
    const spookyStyles = [
      'costume of a witch with flowing black robes and a broomstick',
      'costume of a vampire with a cape elegant evening wear and fangs',
      'costume of a ghost with a sheet ethereal gown and chains',
      'costume of a pirate with rugged pirate attire and a cutlass',
      'costume of a werewolf with tattered clothing and claws',
      'costume of a skeleton with bone-patterned suit and gloves',
      'costume of a clown with colorful jumpsuit and oversized shoes',
      'costume of a superhero with a spandex suit and mask',
      'costume of a zombie with makeup ripped dirty clothes and fake blood',
      'costume of a mummy with bandages ancient wrappings and amulets',
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
                  onClick={() => changeEffect('a casual style outfit featuring a comfortable plain t-shirt jeans and sneakers perfect for everyday wear')}
                />
                <HeroActionButton
                  text="Chic Style"
                  onClick={() => changeEffect('a chic style outfit with a tailored blazer over a silk blouse and high-heeled shoes ideal for a sophisticated look')}
                />
                <HeroActionButton
                  text="Bohemian Style"
                  onClick={() => changeEffect('a bohemian style outfit with a flowy maxi dress a wide-brimmed hat and layered necklaces inspired by boho fashion')}
                />
                <HeroActionButton
                  text="Streetwear Style"
                  onClick={() => changeEffect('a streetwear style outfit with a graphic hoodie ripped jeans and high-top sneakers reflecting modern street fashion')}
                />
                <HeroActionButton
                  text="Vintage Style"
                  onClick={() => changeEffect('a vintage style outfit with a polka dot dress cat-eye sunglasses and retro pumps reminiscent of past fashion eras')}
                />
                <HeroActionButton
                  text="Athleisure Style"
                  onClick={() => changeEffect('an athleisure style outfit combining a fitted sports t-shirt leggings and a zip-up hoodie perfect for a sporty yet casual look')}
                />
                <HeroActionButton
                  text="Special Spooky Style"
                  onClick={() => changeEffect(`${randomSpookyStyle()} with intricate details and accessories to complete the spooky transformation`)}
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
