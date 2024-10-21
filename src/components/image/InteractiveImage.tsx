'use client'
import { generateImage } from '@/lib/server/cloudinary/builder'
import { CldImage } from 'next-cloudinary'
import { useCallback, useEffect, useState } from 'react'
import SparkleImage from '../loading/SparkImageLoading/SparkImageLoading'

type Props = {
  src: string
  width?: number
  height?: number
  alt: string
  effect?: string
  bgEffect?: string
  objectFit?: 'cover' | 'contain'
  preserveTransformations?: boolean
  onUrlChange?: (url: string) => void
}

const InteractiveImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  effect,
  bgEffect,
  onUrlChange,
  objectFit = 'cover',
  preserveTransformations,
}) => {
  const [url, setUrl] = useState<string>('')
  const [retry, setRetry] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const getImageUrl = useCallback(async () => {
    try {
      setRetry(retry => retry + 1)
      setLoading(true)
      const url = await generateImage({ src, effect, bgEffect })
      const response = await fetch(url)
      console.log(response)
      setUrl(url)
      onUrlChange?.(url)
      setTimeout(() => setLoading(false), 1000)
      setRetry(0)
    } catch (e) {
      if (retry < 3) {
        getImageUrl()
        return
      }
      setUrl(src)
      console.error(e)
    }
  }, [src, height, width, effect, bgEffect])

  useEffect(() => {
    if (preserveTransformations) {
      setUrl(src)
      return
    } else {
      getImageUrl()
    }
  }, [getImageUrl, src, preserveTransformations])

  return (
    <SparkleImage loading={loading}>
      <CldImage
        src={url}
        width={width}
        height={height}
        alt={alt}
        sizes="100vw"
        style={{ objectFit }}
        preserveTransformations={preserveTransformations}
      />
    </SparkleImage>
  )
}

export default InteractiveImage
