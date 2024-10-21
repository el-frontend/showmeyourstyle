'use client'
import { Check } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

export type TransformPreviewProps = {
  transformed: string
  label: string
  active?: boolean
  onClick?: () => void
}

export default function TransformPreview({
  transformed,
  label,
  active,
  onClick,
}: TransformPreviewProps) {
  return (
    <div
      onClick={onClick}
      className={`aspect-square w-full rounded-2xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4  flex flex-col justify-center items-center ${active ? 'border-4 border-pink-gradient shadow-xl' : ''}`}
    >
      <CldImage
        src={transformed}
        alt="Top Image"
        fill
        preserveTransformations
        className={`rounded-xl transition-opacity duration-1000 ease-in-out`}
        style={{ objectFit: 'cover' }}
      />

      <div className="absolute bg-primary z-10 bottom-[-20px] w-full text-center py-1 rounded-b-lg">
        <span className="z-10 line-clamp-1">{label}</span>
      </div>
      {active && (
        <Check className="absolute top-2 right-2 text-primary-gradient border border-pink-gradient rounded-full w-8 h-8" />
      )}
    </div>
  )
}
