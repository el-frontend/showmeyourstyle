import { getTransformations } from '@/lib/server/services/transformation'
import DashboardTransformations from '@/sections/Dashboard/components/Transformations/Transformations'
import { currentUser } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Show me your style - Dashboard Transformations',
  description: 'Unleash your style with AI-driven fashion creations',
}

export default async function DashboardPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const transformations = await getTransformations(user.id)
  return <DashboardTransformations data={transformations} />
}
