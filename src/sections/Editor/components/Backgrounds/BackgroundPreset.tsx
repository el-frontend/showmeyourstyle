'use client'

import useCreateQueryString from '@/hooks/useCreateQueryString'
import { useSearchParams } from 'next/navigation'
import BackgroundPreview from './BackgroundPreview'
import { defaultBackgrounds } from './defaultBackgrounds'

export default function BackgroundPreset() {
  const { createQueryAndNavigate } = useCreateQueryString()
  const searchParams = useSearchParams()
  const background = searchParams.get('background')

  const onSelect = (id: string) => {
    createQueryAndNavigate([{ name: 'background', value: id }])
  }
  return (
    <div className="h-[calc(100vh/2)] grid grid-cols-3 gap-4 overflow-y-scroll">
      {defaultBackgrounds.map(({ id, url, description }) => (
        <BackgroundPreview
          onClick={() => onSelect(id)}
          active={background === id}
          key={id}
          base={url}
          label={description}
        />
      ))}
    </div>
  )
}
