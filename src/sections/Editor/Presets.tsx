import TransformPreview from './TransformPreview'

export default function Presets() {
  const base = '/images/sys-model-base.webp'
  const effects = Array.from({ length: 9 }, (_, idx) => ({
    id: idx,
    label: 'Vampire',
    image: '/images/sys-model-base (1).webp',
  }))

  return (
    <>
      <h2 className="font-bold mb-4 text-black">Select style</h2>

      <div className="flex-grow overflow-y-auto">
        <div className="h-fit columns-[200px]">
          {effects.map(({ id, image, label }) => (
            <TransformPreview
              key={id}
              base={base}
              transformed={image}
              label={label}
            />
          ))}
        </div>
      </div>
    </>
  )
}
