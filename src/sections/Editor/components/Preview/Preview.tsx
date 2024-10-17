import InteractiveImage from '@/components/image/InteractiveImage'
import { useEffect, useState } from 'react'

export type PreviewProps = {
  image: string
  effect?: string
  background?: string
  overlay?: string
  onUrlChange?: (url: string) => void
}

export default function Preview({
  image,
  effect,
  background,
  onUrlChange,
}: PreviewProps) {
  const [imageBase, setImageBase] = useState('')

  useEffect(() => {
    const split = image.split('/')
    const base = split.pop()?.split('.')[0] ?? image
    setImageBase(base)
  }, [image])

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
          filter: 'blur(24px)',
          opacity: 0.8,
        }}
      />

      <div className="flex absolute z-10 bottom-0 justify-center right-0 left-0 top-0">
        {imageBase && (
          <InteractiveImage
            src={imageBase}
            width={800}
            height={800}
            alt="Transformed Image"
            effect={effect}
            bgEffect={background}
            onUrlChange={onUrlChange}
            objectFit="contain"
          />
        )}
      </div>
    </>
  )
}
