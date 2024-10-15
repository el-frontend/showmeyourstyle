'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
export const revalidatePathAsync = async (url: string) => {
  try {
    await revalidatePath(url)
  } catch (error) {
    console.error(error)
  }
}

export const revalidateTagAsync = async (tag: string) => {
  try {
    await revalidateTag(tag)
  } catch (error) {
    console.error(error)
  }
}
