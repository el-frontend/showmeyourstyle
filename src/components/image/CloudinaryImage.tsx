'use client'
import { Effect } from '@/sections/Editor/types/presets'
import { CldImage, CldImageProps } from 'next-cloudinary'
import { SyntheticEvent, useEffect, useState } from 'react'
import SparkleImage from '../loading/SparkImageLoading/SparkImageLoading'

type Props = {
  src: string
  width?: number
  height?: number
  alt: string
  effect?: Effect
  bgEffect?: string
  objectFit?: 'cover' | 'contain'
  preserveTransformations?: boolean
  enhance?: boolean
  onUrlChange?: (url: string) => void
  crop?: CldImageProps['crop']
}

const CloudinaryImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  effect,
  bgEffect,
  onUrlChange,
  crop,
  objectFit = 'cover',
  preserveTransformations = false,
  enhance=false
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)
  const [retries, setRetries] = useState<number>(0)

  useEffect(() => {
    setLoading(true)
  }, [src, effect, bgEffect])

  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const data = e.currentTarget.currentSrc
    if (data) {
      onUrlChange?.(data)
    }
    setLoading(false)
  }

  const onError = () => {
    if (retries < 3) {
      setHasError(true)
      setRetries((r) => r + 1)
      setTimeout(() => {
        setHasError(false)
        setLoading(true)
      }, 500)
    } else {
      setLoading(false)
      setHasError(false)
    }

  }

  return (
    <SparkleImage loading={loading}>
      {!hasError && (
        <CldImage
          src={src}
          width={width}
          height={height}
          onError={onError}
          {...(effect && { replace: effect })}
          {...(bgEffect && { replaceBackground: bgEffect })}
          alt={alt}
          sizes="100vw"
          format='auto'
          style={{ objectFit }}
          preserveTransformations={preserveTransformations}
          onLoad={onLoad}
          crop={crop}
          enhance={enhance}
        />
      )}
    </SparkleImage>
  )
}

export default CloudinaryImage
