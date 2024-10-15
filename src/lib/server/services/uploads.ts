'use server'

import { eq } from 'drizzle-orm'
import { db } from '../db/db'

import UploadsTable from '../db/schemas/uploads'
import { Uploads } from '../types/uploads'

export const getUploads = async (
  userId: string
): Promise<Uploads[]> => {
  try {
    return await db
      .select()
      .from(UploadsTable)
      .where(eq(UploadsTable.userId, userId))
  } catch (error) {
    console.error(error)
    return []
  }
}

export const saveUpload = async (
  userId: string,
  publicId: string,
  url: string
) => {
  try {
    return await db
      .insert(UploadsTable)
      .values({
        userId,
        publicId,
        url,
      })
      .returning()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create upload')
  }
}

export const saveBulkUploads = async (
  userId: string,
  uploads: { publicId: string; url: string }[]
) => {
  try {
    return await db
      .insert(UploadsTable)
      .values(
        uploads.map(upload => ({
          userId,
          ...upload,
        }))
      )
      .returning()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create upload')
  }
}
