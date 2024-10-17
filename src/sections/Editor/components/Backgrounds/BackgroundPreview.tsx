'use client'
import { Check } from 'lucide-react'
import Image from 'next/image'

export type TransformPreviewProps = {
  base: string
  label: string
  active?: boolean
  onClick?: () => void
}

export default function BackgroundPreview({
  base,
  label,
  active,
  onClick,
}: TransformPreviewProps) {
  return (
    <div
      onClick={onClick}
      className={`aspect-square w-full rounded-xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4 ${active ? 'border-2 border-primary shadow-md' : ''}`}
    >
      <Image
        src={base}
        alt="Bottom Image"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-xl"
      />

      <div className="absolute bg-black/50 z-10 bottom-0 w-full text-center py-1 rounded-b-lg">
        <span className="z-10 line-clamp-1">{label}</span>
      </div>
      {active && <Check className="absolute top-2 right-2 text-accent" />}
    </div>
  )
}
