'use server'

import { z } from 'zod';
import { generateAIObjectPlain } from '../ai/google';

export const extractEffectAndBackgroundCloudinary = async (
  content: string
): Promise<{ effect: string; background: string }> => {
  try {
    const response = await generateAIObjectPlain(
      `You are a especialist in Cloudinary. You know how to use the platform to create amazing transformations. An effect have this format "gen_replace:from_outfit;to_vintage%20clothing;preserve-geometry_true" the from parameter must be everytime the same and a background have this format "gen_background_replace:prompt_a%20city".`,
      `Extract from the content the effect transformation and background prompt. The effect must be something like a description of a clothes or a outfit. The background must be something like a background description. \n\n ${content} \n I you not identify a effect or a background return empty for the item that you can't identify. Always use the format to define effects and backgrounds.`,
      z.object({ effect: z.string(), background: z.string() })
    )

    return response
  } catch (e) {
    console.error(e)
    return { effect: '', background: '' }
  }
}
