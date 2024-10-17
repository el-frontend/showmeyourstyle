const useBuildImages = () => {
  const buildImageObject = (data: {
    effect?: string
    background?: string
    overlay?: string
    prompt?: string
  }) => {
    const { effect, background, overlay, prompt } = data
    const result: Record<string, string> = {}
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
