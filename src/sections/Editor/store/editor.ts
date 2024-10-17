import { create } from 'zustand'

type StoreType = {
  effect: string
  background: string
  overlay: string
  setEffect: (effect: string) => void
  setBackground: (background: string) => void
  setOverlay: (overlay: string) => void
}

export const useEditorStore = create<StoreType>(set => ({
  effect: '',
  background: '',
  overlay: '',
  setEffect: effect => set({ effect }),
  setBackground: background => set({ background }),
  setOverlay: overlay => set({ overlay }),
}))
