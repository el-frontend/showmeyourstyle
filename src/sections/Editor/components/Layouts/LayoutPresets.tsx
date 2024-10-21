'use client'

import useCreateQueryString from '@/hooks/useCreateQueryString'
import { useSearchParams } from 'next/navigation'
import LayoutPreview from './LayoutPreview'
import { defaultLayouts } from './defaultLayouts'

export default function LayoutPresets() {
  const { createQueryAndNavigate } = useCreateQueryString()
  const searchParams = useSearchParams()
  const layout = searchParams.get('layout')

  const onSelect = (id: string) => {
    createQueryAndNavigate([{ name: 'layout', value: id }], { scroll: false })
  }
  return (
    <div className="h-[calc(100vh/2)] grid grid-cols-3 gap-4 overflow-y-scroll">
      {defaultLayouts.map(({ id, name, previewImage   }) => (
        <LayoutPreview
          onClick={() => onSelect(id)}
          active={layout === id}
          key={id}
          base={previewImage}
          label={name}
        />
      ))}
    </div>
  )
}
