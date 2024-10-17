'use server'

import cloudinary from './client'

type ImageGenConfig = {
  src: string
  width?: number
  height?: number
  quality?: number
  effect?: string
  bgEffect?: string
}
export const generateImage = async (config: ImageGenConfig) => {
  const { src, effect, width, height, bgEffect } = config
  console.log('bgEffect', bgEffect)
  const url = cloudinary.url(src, {
    transformation: [
      { effect: bgEffect },
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
  console.log('url', url)
  return url
}
