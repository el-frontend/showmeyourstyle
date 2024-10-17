import { UploadApiResponse } from 'cloudinary'
import { create } from 'zustand'

type StoreType = {
  effect: string
  background: string
  overlay: string
  transformedUrl: string
  clouddinaryImage: UploadApiResponse | null
  setEffect: (effect: string) => void
  setBackground: (background: string) => void
  setOverlay: (overlay: string) => void
  setTransformedUrl: (transformedUrl: string) => void
  setClouddinaryImage: (clouddinaryImage: UploadApiResponse) => void
}

export const useEditorStore = create<StoreType>(set => ({
  effect: '',
  background: '',
  overlay: '',
  transformedUrl: '',
  clouddinaryImage: null,
  setEffect: effect => set({ effect }),
  setBackground: background => set({ background }),
  setOverlay: overlay => set({ overlay }),
  setTransformedUrl: transformedUrl => set({ transformedUrl }),
  setClouddinaryImage: clouddinaryImage => set({ clouddinaryImage }),
}))
