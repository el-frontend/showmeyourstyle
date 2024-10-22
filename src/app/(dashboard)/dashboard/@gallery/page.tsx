import { getUploads } from '@/lib/server/services/uploads'
import ImageGallery from '@/sections/Dashboard/components/Gallery/ImageGallery'
import { currentUser } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Show me your style - Dashboard Gallery',
  description: 'Unleash your style with AI-driven fashion creations',
}

export default async function DashboardPage() {
    const user = await currentUser()
    if (!user) {
      redirect('/sign-in')
    }
    const images = await getUploads(user.id)
  
    return (
      <ImageGallery images={images} />
    )
}
