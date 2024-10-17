import DashboardHeader from '@/sections/Dashboard/components/Header/Header'
import DashboardContainer from '@/sections/Dashboard/container/DashboardContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show me your style - Dashboard',
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
        url: '/images/logo.svg',
        width: 800,
        height: 600,
        alt: 'Show me your style',
      },
    ],
  },
}

export default function RootLayout({
  gallery,
  transformations,
}: Readonly<{
  gallery: React.ReactNode
  transformations: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden w-screen">
      <DashboardHeader />
      <main className="w-full overflow-auto mt-16">
        <DashboardContainer
          gallery={gallery}
          transformations={transformations}
        />
      </main>
    </div>
  )
}
