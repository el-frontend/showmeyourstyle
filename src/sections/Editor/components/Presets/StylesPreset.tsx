'use client'

import useCreateQueryString from '@/hooks/useCreateQueryString'
import { useSearchParams } from 'next/navigation'
import TransformPreview from './TransformPreview'
import { defaultStyles } from './defaultStyles'

export default function StylesPreset() {
  const { createQueryAndNavigate, removeQueryAndNavigate } = useCreateQueryString()
  const searchParams = useSearchParams()
  const style = searchParams.get('style')

  const onSelect = (id: string) => {
    createQueryAndNavigate([{ name: 'style', value: id }], { scroll: false })
  }

  const onRemove = () => {
    removeQueryAndNavigate('style', { scroll: false })
  }
  
  return (
    <div className="h-[calc(100vh/2)] grid grid-cols-3 gap-4 overflow-y-scroll">
      {defaultStyles.map(({ id, urlTransformation, description }) => (
        <TransformPreview
          onClick={() => onSelect(id)}
          onRemove={onRemove}
          active={style === id}
          key={id}
          transformed={urlTransformation}
          label={description}
        />
      ))}
    </div>
  )
}
