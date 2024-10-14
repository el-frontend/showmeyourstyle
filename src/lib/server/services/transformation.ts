'use server'

import { eq } from 'drizzle-orm'
import { db } from './../db/db'

import { TransformationsTable } from '../db/schemas'
import { Transformations } from '../types/transformations'

export const getTransformations = async (
  userId: string
): Promise<Transformations[]> => {
  try {
    return await db
      .select()
      .from(TransformationsTable)
      .where(eq(TransformationsTable.userId, userId))
  } catch (error) {
    console.error(error)
    return []
  }
}

export const createTransformation = async (
  userId: string,
  prompt: string,
  url: string
) => {
  try {
    return await db
      .insert(TransformationsTable)
      .values({
        userId,
        prompt,
        url,
      })
      .returning()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create transformation')
  }
}
