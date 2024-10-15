import { getUploads } from '@/lib/server/services/uploads'
import ImageGallery from '@/sections/Dashboard/components/Gallery/ImageGallery'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

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
