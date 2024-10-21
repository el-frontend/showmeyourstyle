import Header from '@/sections/Landing/components/Header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
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
  robots: 'index, follow',
  openGraph: {
    title: 'Show me your style',
    description: 'Unleash your style with AI-driven fashion creations',
    url: 'https://showmeyourstyle.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dr0ujyp54/image/upload/v1729523334/og/bo6wx4v39ds7vsvept01.png',
        width: 800,
        height: 600,
        alt: 'Show me your style',
      },
    ],
  },
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
