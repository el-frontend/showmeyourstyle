'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type TransformPreviewProps = {
  base: string
  transformed: string
  label: string
}

export default function TransformPreview({
  base,
  transformed,
  label,
}: TransformPreviewProps) {
  const [topImageOpacity, setTopImageOpacity] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTopImageOpacity(prev => (prev === 1 ? 0 : 1))
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="aspect-square w-full rounded-xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4">
      <Image
        src={base}
        alt="Bottom Image"
        layout="fill"
        style={{ objectFit: 'cover' }}
        className="rounded-lg"
      />

      <Image
        src={transformed}
        alt="Top Image"
        layout="fill"
        objectFit="cover"
        className={`rounded-lg transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: topImageOpacity }}
      />

      <div className="absolute bg-black/50 z-10 bottom-0 w-full text-center py-1">
        <span className="z-10">{label}</span>
      </div>
    </div>
  )
}
