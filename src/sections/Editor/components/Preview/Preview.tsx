import CloudinaryImage from '@/components/image/CloudinaryImage'
import { CldImageProps } from 'next-cloudinary'
import { Layout } from '../../types/layouts'
import { Effect } from '../../types/presets'

export type PreviewProps = {
  image: string
  effect?: Effect
  background?: string
  overlay?: string
  layout?: Layout
  onUrlChange?: (url: string) => void
}

export default function Preview({
  image,
  effect,
  background,
  layout,
  onUrlChange,
}: PreviewProps) {
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
        {image && (
          <CloudinaryImage
            src={image}
            width={layout?.width ? layout?.width : 800}
            height={layout?.height ? layout?.height : 800}
            alt="Transformed Image"
            effect={effect}
            bgEffect={background}
            onUrlChange={onUrlChange}
            objectFit="contain"
            crop={
              {
                ...(layout?.aspectRatio && { aspectRatio: layout.aspectRatio }),
                ...(layout?.gravity && { gravity: layout.gravity }),
                ...(layout?.type && { type: layout.type }),
                ...(layout?.width && { width: layout.width }),
                ...(layout?.height && { height: layout.height }),
              } as CldImageProps['crop']
            }
            enhance={!!layout?.width}
          />
        )}
      </div>
    </>
  )
}
