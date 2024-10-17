'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import Canvas from './Canvas'
import Presets from './Presets'
import Prompt from './Prompt'

export default function Editor() {
  const query = useSearchParams()

  const isActiveStyle = useMemo(() => {
    const style = query.get('style')
    const background = query.get('background')
    const overlay = query.get('overlay')
    const prompt = query.get('prompt')
    return style || background || overlay || prompt
  }, [query])

  return (
    <div className="flex h-dvh">
      <Canvas />

      <div className="w-2/5 py-12 px-8 flex flex-col bg-white">
        <Presets />
        <Prompt />
        <Button disabled={!isActiveStyle} className="mt-4 main-gradient">
          Apply Style
        </Button>
      </div>
    </div>
  )
}
