'use client'

import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'
import SignInUserButton from '@/sections/components/SignInUserButton'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import useBuildImages from '../hooks/useBuildImages'
import { useEditorStore } from '../store/editor'
import Canvas from './Canvas/Canvas'
import Presets from './Presets'
import Prompt from './Prompt'

export default function Editor() {
  const query = useSearchParams()
  const { buildImageObject } = useBuildImages()
  const { setBackground, setEffect } = useEditorStore()

  const isActiveStyle = useMemo(() => {
    const style = query.get('style')
    const background = query.get('background')
    const overlay = query.get('overlay')
    const prompt = query.get('prompt')
    return style || background || overlay || prompt
  }, [query])

  const applyStyle = async () => {
    const style = query.get('style') || undefined
    const backgroundQuery = query.get('background') || undefined
    const overlay = query.get('overlay') || undefined
    const prompt = query.get('prompt') || undefined
    const { effect, background } = await buildImageObject({
      effect: style,
      background: backgroundQuery,
      overlay,
      prompt,
    })
    setBackground(background)
    setEffect(effect)
  }

  return (
    <TooltipProvider>
      <div className="flex h-dvh">
        <Canvas />

        <div className="w-2/5 pb-12 pt-6 px-8 flex flex-col bg-white">
          <div className="w-full flex justify-end pb-6">
            <SignInUserButton />
          </div>
          <Presets />
          <Prompt />
          <Button
            disabled={!isActiveStyle}
            className="mt-4 main-gradient"
            onClick={applyStyle}
          >
            Apply Style
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}
