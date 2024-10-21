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
  const url = cloudinary.url(src, {
    force_version: true,
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
