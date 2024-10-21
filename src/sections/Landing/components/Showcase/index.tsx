import Compare, { CompareItem } from '@/components/ui/compare'
import Image from 'next/image'

export default function Showcase() {
  const base: CompareItem = {
    src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/w_300,h_300/sys-model-hd.png',
    alt: 'base',
  }

  const couples = [
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_futuristic%20outfit;preserve-geometry_true/w_300,h_300/sys-model-hd.png',
      alt: 'Futuristic Outfit',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_gothic%20attire;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_fantasy%20landscape/sys-model-hd.png',
      alt: 'Gothic Attire',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_casual%20wear;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_colorful%20shapes/sys-model-hd.png',
      alt: 'Casual Wear',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_sporty%20attire;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_mountains/e_gen_background_replace:prompt_soccer%20field/sys-model-hd.png',
      alt: 'Sporty Attire',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_business%20attire;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_city/sys-model-hd.png',
      alt: 'Business Attire',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_punk%20style;preserve-geometry_true/w_300,h_300/sys-model-hd.png',
      alt: 'Punk Style',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_bohemian%20outfit;preserve-geometry_true/w_300,h_300/sys-model-hd.png',
      alt: 'Bohemian Outfit',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_hippie%20attire;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_hell/sys-model-hd.png',
      alt: 'Hippie Attire',
    },
    {
      src: 'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_replace:from_outfit;to_steampunk%20attire;preserve-geometry_true/w_300,h_300/e_gen_background_replace:prompt_steampunk%20overhaul/sys-model-hd.png',
      alt: 'Steampunk Attire',
    },
  ].map((couple, index) => ({ id: index, itemOne: base, itemTwo: couple }))

  return (
    <div className="w-full bg-black/40 relative">
      <Image
        src="/images/spider.svg"
        width={80}
        height={250}
        alt="spider"
        className="absolute right-6 lg:right-12 top-0 animate-elastic"
      />
      <div className="container mx-auto py-24 px-2 lg:px-16 " id="showcase">
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center mb-16">
          <h2 className="text-2xl lg:text-6xl font-bold text-foreground font-spooky">
            Showcase
          </h2>
          <div className="max-w-[60ch]  border-foreground border-4 p-8 text-foreground text-lg">
            <p>
              Explore the limitless possibilities of fashion with our AI-powered
              design tool! Each image in our showcase is the result of
              user-uploaded photos, transformed into unique, custom outfits by
              advanced algorithms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 lg:gap-16 place-content-center">
          {couples.map(({ id, ...couple }) => (
            <Compare key={id} {...couple} />
          ))}
        </div>
      </div>
    </div>
  )
}
