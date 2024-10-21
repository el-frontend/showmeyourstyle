'use client'
import { Effect } from '@/sections/Editor/types/presets'
import { CldImage } from 'next-cloudinary'
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
  onUrlChange?: (url: string) => void
}

const CloudinaryImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  effect,
  bgEffect,
  onUrlChange,
  objectFit = 'cover',
  preserveTransformations = false,
}) => {
  const [loading, setLoading] = useState<boolean>(true)

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

  return (
    <SparkleImage loading={loading}>
      <CldImage
        src={src}
        width={width}
        height={height}
        {...(effect && { replace: effect })}
        {...(bgEffect && { replaceBackground: bgEffect })}
        alt={alt}
        sizes="100vw"
        style={{ objectFit }}
        preserveTransformations={preserveTransformations}
        onLoad={onLoad}
      />
    </SparkleImage>
  )
}

export default CloudinaryImage
