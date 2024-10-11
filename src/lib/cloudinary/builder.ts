'use server'

import cloudinary from './client'

type ImageGenConfig = {
  src: string
  width: number
  height: number
  quality?: number
  effect?: string
}
export const generateImage = async (config: ImageGenConfig) => {
  const { src, effect, width, height } = config
  const url = cloudinary.url(src, {
    transformation: [
      {
        effect,
      },
      {
        width,
        height,
      },
      {
        quality: '100',
      },
      {
        fetch_format: 'auto',
      },
    ],
  })
  console.log(url)
  return url
}
