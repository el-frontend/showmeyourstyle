'use client'
import { generateImage } from '@/lib/server/cloudinary/builder'
import Image from 'next/image'
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
    getImageUrl()
  }, [getImageUrl])

  return (
    <SparkleImage loading={loading}>
      <Image
        src={url}
        {...(!width || !height ? { fill: true } : { width, height })}
        alt={alt}
        style={{ objectFit }}
      />
    </SparkleImage>
  )
}

export default InteractiveImage
