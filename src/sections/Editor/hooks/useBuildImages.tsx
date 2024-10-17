import { extractEffectAndBackgroundCloudinary } from '@/lib/server/cloudinary/generative'

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
      result.background = `e_gen_background_replace:prompt_${background.replace(' ', '%20')}`
    }

    return result
  }

  return { buildImageObject }
}

export default useBuildImages
