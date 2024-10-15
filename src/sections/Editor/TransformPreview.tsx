'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function TransformPreview() {
  const [topImageOpacity, setTopImageOpacity] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTopImageOpacity(prev => (prev === 1 ? 0 : 1))
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="aspect-square w-full  rounded-xl relative border-2  hover:opacity-80 hover:cursor-pointer transition-opacity">
      <Image
        src="/images/sys-model-base.webp"
        alt="Bottom Image"
        layout="fill"
        style={{objectFit: 'cover'}}
        className="rounded-lg"
      />

      <Image
        src="/images/sys-model-base (1).webp"
        alt="Top Image"
        layout="fill"
        objectFit="cover"
        className={`rounded-lg transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: topImageOpacity }}
      />
    </div>
  )
}
