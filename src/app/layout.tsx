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

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'
const twitterCreator = '@chao_cortes'
const twitterSite = 'https://x.com/cortes_chao'
const SITE_NAME = 'Show me your style'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
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
  robots: {
    follow: true,
    index: true,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
      },
    }),
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
