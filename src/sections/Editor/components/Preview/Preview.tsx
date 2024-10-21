import CloudinaryImage from '@/components/image/CloudinaryImage'
import { Effect } from '../../types/presets'

export type PreviewProps = {
  image: string
  effect?: Effect
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
            width={800}
            height={800}
            alt="Transformed Image"
            effect={effect}
            bgEffect={background}
            onUrlChange={onUrlChange}
            objectFit="contain"
            preserveTransformations
          />
        )}
      </div>
    </>
  )
}
