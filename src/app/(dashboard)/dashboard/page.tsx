import { getTransformations } from '@/lib/server/services/transformation'
import Dashboard from '@/sections/Dashboard/components/dashboard-01'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const transformations = await getTransformations(user.id)
  return (
    <>
      <Dashboard data={transformations} />
    </>
  )
}
