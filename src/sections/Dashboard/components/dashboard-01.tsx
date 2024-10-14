
import { Transformations } from '../../../lib/server/types/transformations'
import { ModernDashboardComponent } from './modern-dashboard'

type Props = {
  data: Transformations[]
}

export default function Dashboard({ data }: Props) {
  console.log(data)
  return (
    <main className="w-full">
      <div className="grid gap-4 md:gap-8">
        <ModernDashboardComponent/>
      </div>
    </main>
  )
}
