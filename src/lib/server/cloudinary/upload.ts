'use server'
import { UploadApiResponse } from 'cloudinary'
import cloudinary from './client'

export const uploadImage = async (
  file: string,
  options?: { removeBackground: boolean }
): Promise<UploadApiResponse> => {
  try {
    const uploadOptions: Record<string, string> = {}
    if (options?.removeBackground) {
        uploadOptions.background_removal = 'cloudinary_ai'
    }
    const response = await cloudinary.uploader.upload(file, uploadOptions)
    return response
  } catch (e) {
    console.error(e)
    throw new Error('Failed to upload image')
  }
}

export const uploadImageBulk = async (
  files: string[]
): Promise<UploadApiResponse[]> => {
  try {
    return Promise.all(
      files.map(async file => {
        return cloudinary.uploader.upload(file)
      })
    )
  } catch (e) {
    console.error(e)
    throw new Error('Failed to upload image')
  }
}
