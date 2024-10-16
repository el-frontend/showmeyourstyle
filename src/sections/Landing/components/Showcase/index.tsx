import Compare, { CompareItem } from '@/components/ui/compare'

export default function Showcase() {
  const base: CompareItem = {
    src: '/images/sys-model-base.webp',
    alt: 'base',
  }

  const couples = [
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
    { src: '/images/sys-model-base (1).webp', alt: 'transformation 1' },
  ].map((couple, index) => ({ id: index, itemOne: base, itemTwo: couple }))

  return (
    <div className="container mx-auto py-24 px-2 lg:px-16" id="showcase">
      <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center mb-16">
        <h2 className="text-4xl font-bold text-primary">Showcase</h2>
        <div className="max-w-[60ch]  border-primary border-4 p-8 text-primary text-lg">
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
  )
}
