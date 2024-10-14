import { Transformations } from '@/lib/server/types/transformations'
import { ModernDashboardComponent } from '../components/modern-dashboard'

type Props = {
  data: Transformations[]
}

const DashboardContainer = ({ data }: Props) => {
    console.log(data)
  return (
    <main className="w-full">
      <div className="grid gap-4 md:gap-8">
        <ModernDashboardComponent />
      </div>
    </main>
  )
}

export default DashboardContainer
