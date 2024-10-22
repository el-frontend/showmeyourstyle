'use client'
import { Check, CircleX } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

export type TransformPreviewProps = {
  base: string
  label: string
  active?: boolean
  onClick?: () => void
  onRemove?: () => void
}

export default function LayoutPreview({
  base,
  label,
  active,
  onClick,
  onRemove,
}: TransformPreviewProps) {
  return (
    <div
      className={`group aspect-square w-full rounded-2xl relative hover:opacity-80 hover:cursor-pointer transition-opacity mb-4 ${active ? 'border-4 border-pink-gradient shadow-lg' : ''}`}
    >
      <CldImage
        src={base}
        alt="Bottom Image"
        sizes="33vw"
        width={160}
        height={160}
        onClick={onClick}
        style={{ objectFit: 'cover' }}
        className="rounded-t-2xl h-full w-full"
      />

      <div className="relative bg-primary z-10 bottom-0 w-full text-center py-1 rounded-b-xl">
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
