import { UploadApiResponse } from 'cloudinary'
import { create } from 'zustand'
import { Layout } from '../types/layouts'
import { Effect } from '../types/presets'

type StoreType = {
  effect: string
  effectObject: Effect | null
  background: string
  overlay: string
  layout: Layout | null
  transformedUrl: string
  clouddinaryImage: UploadApiResponse | null
  setEffectObject: (effect: Effect) => void
  setEffect: (effect: string) => void
  setBackground: (background: string) => void
  setOverlay: (overlay: string) => void
  setTransformedUrl: (transformedUrl: string) => void
  setClouddinaryImage: (clouddinaryImage: UploadApiResponse) => void
  setLayout: (layout: Layout) => void
}

export const useEditorStore = create<StoreType>(set => ({
  effect: '',
  effectObject: null,
  background: '',
  overlay: '',
  transformedUrl: '',
  clouddinaryImage: null,
  layout: null,
  setEffectObject: effectObject => set({ effectObject }),
  setEffect: effect => set({ effect }),
  setBackground: background => set({ background }),
  setOverlay: overlay => set({ overlay }),
  setTransformedUrl: transformedUrl => set({ transformedUrl }),
  setClouddinaryImage: clouddinaryImage => set({ clouddinaryImage }),
  setLayout: layout => set({ layout }),
}))
