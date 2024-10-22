import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://https://showmeyourstyle.vercel.app'),
  title: 'Show me your style - Editor',
  description: 'Unleash your style with AI-driven fashion creations',
  keywords: [
    'AI fashion',
    'style',
    'fashion creations',
    'personalized fashion',
    'cloudinary',
    'midudev',
  ],
  authors: [
    { name: 'Carlos Chao Cortes', url: 'https://youtube.com/@ElFrontend' },
    { name: 'Abel Rodriguez', url: '' },
  ]
}

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
