'use client'

import { Button } from '@/components/ui/button'
import { TooltipProvider } from '@/components/ui/tooltip'
import SignInUserButton from '@/sections/components/SignInUserButton'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import useBuildImages from '../hooks/useBuildImages'
import { useEditorStore } from '../store/editor'
import { Effect } from '../types/presets'
import Canvas from './Canvas/Canvas'
import Presets from './Presets'
import Prompt from './Prompt'

export default function Editor() {
  const query = useSearchParams()
  const { buildImageParams } = useBuildImages()
  const { setBackground, setEffectObject, setLayout } = useEditorStore()

  const isActiveStyle = useMemo(() => {
    const style = query.get('style')
    const background = query.get('background')
    const overlay = query.get('overlay')
    const prompt = query.get('prompt')
    const layout = query.get('layout')
    const image = query.get('image')
    return (style || background || overlay || prompt || layout) && image
  }, [query])

  const applyStyle = async () => {
    const style = query.get('style') || undefined
    const backgroundQuery = query.get('background') || undefined
    const overlay = query.get('overlay') || undefined
    const prompt = query.get('prompt') || undefined
    const layoutParams = query.get('layout') || undefined
    const { effect, background, layout } = await buildImageParams({
      effect: style,
      background: backgroundQuery,
      overlay,
      prompt,
      layout: layoutParams,
    })
    setBackground(background as string)
    setEffectObject(effect as Effect)
    if (layout) {
      setLayout(layout)
    }

    // scroll to canvas with id canvas
    const canvas = document.getElementById('canvas')
    if (canvas) {
      canvas.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <TooltipProvider>
      <div className="flex h-dvh flex-col lg:flex-row w-screen">
        <Canvas />
        <div className="w-full lg:w-2/5 h-auto flex-1 lg:h-full pb-12 pt-6 px-8 flex flex-col bg-white">
          <div className="w-full flex justify-center lg:justify-end pb-6">
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
