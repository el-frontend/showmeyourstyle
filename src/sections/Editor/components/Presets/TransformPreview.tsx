'use client'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type TransformPreviewProps = {
  base: string
  transformed: string
  label: string
  active?: boolean
  onClick?: () => void
}

export default function TransformPreview({
  base,
  transformed,
  label,
  active,
  onClick,
}: TransformPreviewProps) {
  const [topImageOpacity, setTopImageOpacity] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTopImageOpacity(prev => (prev === 1 ? 0 : 1))
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      onClick={onClick}
      className={`aspect-square w-full rounded-2xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4 ${active ? 'border-4 border-pink-gradient shadow-xl' : ''}`}
    >
      <Image
        src={base}
        alt="Bottom Image"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-xl"
      />

      <Image
        src={transformed}
        alt="Top Image"
        fill
        className={`rounded-xl transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: topImageOpacity, objectFit: 'cover' }}
      />

      <div className="absolute bg-black/50 z-10 bottom-0 w-full text-center py-1 rounded-b-lg">
        <span className="z-10 line-clamp-1">{label}</span>
      </div>
      {active && <Check className="absolute top-2 right-2 text-primary-gradient border border-pink-gradient rounded-full w-8 h-8" />}
    </div>
  )
}
