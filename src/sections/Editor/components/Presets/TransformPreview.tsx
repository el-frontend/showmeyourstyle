'use client'
import { Check, CircleX } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

export type TransformPreviewProps = {
  transformed: string
  label: string
  active?: boolean
  onClick?: () => void
  onRemove?: () => void
}

export default function TransformPreview({
  transformed,
  label,
  active,
  onClick,
  onRemove,
}: TransformPreviewProps) {
  return (
    <div
      className={`group aspect-square w-full rounded-2xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4  flex flex-col justify-center items-center ${active ? 'border-4 border-pink-gradient shadow-xl' : ''}`}
    >
      <CldImage
        src={transformed}
        alt="Top Image"
        fill
        onClick={onClick}
        preserveTransformations
        className={`rounded-xl transition-opacity duration-1000 ease-in-out`}
        style={{ objectFit: 'cover' }}
      />

      <div className="absolute bg-primary z-10 bottom-0 w-full text-center py-1 rounded-b-xl">
        <span className="z-10 line-clamp-1">{label}</span>
      </div>
      {active && (
        <Check className="absolute top-2 right-2 text-primary border bg-white rounded-full w-8 h-8" />
      )}
      {active && (
        <CircleX
          className="z-50 hidden group-hover:block absolute top-2 left-2 text-primary border border-white rounded-full w-8 h-8 bg-white hover:border-2"
          onClick={onRemove}
        />
      )}
    </div>
  )
}
