'use client'
import { Check } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

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
      className={`aspect-square w-full rounded-t-2xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4 ${active ? 'border-4 border-pink-gradient shadow-xl' : ''}`}
    >
      <CldImage
        src={base}
        alt="Bottom Image"
        sizes='33vw'
        width={160}
        height={160}
        style={{ objectFit: 'cover' }}
        className="rounded-t-2xl h-full w-full"
      />

      <div className="relative bg-primary z-10 bottom-0 w-full text-center py-1 rounded-b-2xl">
        <span className="z-10 line-clamp-1">{label}</span>
      </div>
      {active && <Check className="absolute top-2 right-2 text-primary-gradient border border-pink-gradient rounded-full w-8 h-8" />}
    </div>
  )
}
