import { getTransformations } from '@/lib/server/services/transformation'
import DashboardTransformations from '@/sections/Dashboard/components/Transformations/Transformations'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const transformations = await getTransformations(user.id)
  return <DashboardTransformations data={transformations} />
}
