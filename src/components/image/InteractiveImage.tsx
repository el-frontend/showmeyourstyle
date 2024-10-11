'use client'
import { generateImage } from '@/lib/cloudinary/builder'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import SparkleImage from '../loading/SparkImageLoading/SparkImageLoading'

type Props = {
  src: string
  width: number
  height: number
  alt: string
  effect: string
}

const InteractiveImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  effect,
}) => {
  const [url, setUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const getImageUrl = useCallback(async () => {
    setLoading(true)
    const url = await generateImage({ src, width, height, effect })
    const response = await fetch(url)
    console.log(response)
    setUrl(url)
    setTimeout(() => setLoading(false), 1000)
  }, [src, height, width, effect])

  useEffect(() => {
    getImageUrl()
  }, [getImageUrl])

  return (
    <SparkleImage loading={loading}>
      <Image src={url} width={width} height={height} alt={alt} />
    </SparkleImage>
  )
}

export default InteractiveImage
