import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Jolly_Lodger, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'], // Specify the subsets you want
})

const jollyLodger = Jolly_Lodger({
  subsets: ['latin'], // Specify the subsets you want
  weight: '400',
  variable: '--font-spooky',
})

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${montserrat.className} ${jollyLodger.variable} antialiased dark`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
