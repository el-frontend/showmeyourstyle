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
    <div className="container mx-auto my-24 px-2 lg:px-16">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-bold">Showcase</h2>
        <div className="max-w-[60ch] border-foreground border-4 p-8">
          <p>
            Explore the limitless possibilities of fashion with our AI-powered
            design tool! Each image in our showcase is the result of
            user-uploaded photos, transformed into unique, custom outfits by
            advanced algorithms
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 lg:gap-16 place-content-center">
        {couples.map(({ id, ...couple }) => (
          <Compare key={id} {...couple} />
        ))}
      </div>
    </div>
  )
}
