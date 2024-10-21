import {
  extractEffectAndBackgroundCloudinary,
  extractEffectAndBackgroundCloudinaryPlain,
} from '@/lib/server/cloudinary/generative'
import { defaultBackgrounds } from '../components/Backgrounds/defaultBackgrounds'
import { defaultLayouts } from '../components/Layouts/defaultLayouts'
import { Layout } from '../types/layouts'
import { Effect } from '../types/presets'

const useBuildImages = () => {
  const buildImageObject = async (data: {
    effect?: string
    background?: string
    overlay?: string
    prompt?: string
  }) => {
    const { effect, background, prompt } = data
    const result: Record<string, string> = {}

    if (prompt) {
      const { effect, background } =
        await extractEffectAndBackgroundCloudinary(prompt)
      console.log(effect, background)
      result.effect = effect
      result.background = background
      return result
    }

    if (effect) {
      result.effect = `gen_replace:from_apparel;to_apparel%20with%20${effect.replace(' ', '%20')};preserve-geometry_true`
    }
    if (background) {
      const prompt = defaultBackgrounds.find(b => b.id === background)
      if (prompt) {
        result.background = prompt.prompt
      }
    }

    return result
  }

  const buildImageParams = async (data: {
    effect?: string
    background?: string
    overlay?: string
    prompt?: string
    layout?: string
  }) => {
    const { effect, background, prompt, layout } = data
    const result: {effect: Effect | null, background: string, layout: Layout | null} = {
      effect: null,
      background: '',
      layout: null
    }

    if (prompt) {
      const { effect, background } =
        await extractEffectAndBackgroundCloudinaryPlain(prompt)
      result.effect = {from: 'outfit', to: effect, preserveGeometry: true}
      result.background = background
      return result
    }

    if (effect) {
      result.effect = {from: 'outfit', to: effect, preserveGeometry: true}
    }
    if (background) {
      const prompt = defaultBackgrounds.find(b => b.id === background)
      if (prompt) {
        result.background = prompt.plain_prompt
      }
    }

    if(layout){
      const layoutData = defaultLayouts.find(l => l.id === layout)
      if(layoutData){
        result.layout = layoutData
      }
    }

    return result
  }

  return { buildImageObject, buildImageParams }
}

export default useBuildImages
