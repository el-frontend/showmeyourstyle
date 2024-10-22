import Editor from '@/sections/Editor/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show me your style - Editor',
  description: 'Unleash your style with AI-driven fashion creations',
}

export default function EditorPage() {
  return <Editor />
}
