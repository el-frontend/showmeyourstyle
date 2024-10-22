import Header from '@/sections/Landing/components/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://https://showmeyourstyle.vercel.app'),
  title: 'Show me your style',
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
  ],
  robots: 'index, follow'
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      {children}
    </div>
  )
}
