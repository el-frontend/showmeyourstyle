import DashboardHeader from '@/sections/Dashboard/components/Header/Header'
import DashboardContainer from '@/sections/Dashboard/container/DashboardContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show me your style - Dashboard',
  description: 'Unleash your style with AI-driven fashion creations',
}

export default function RootLayout({
  gallery,
  transformations,
}: Readonly<{
  gallery: React.ReactNode
  transformations: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
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
