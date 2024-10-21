export type Presets = {
  id: string
  prompt: string
  urlBase: string
  urlTransformation: string
  description: string
}


export type Effect = {
  from: string
  to: string
  preserveGeometry: boolean
}