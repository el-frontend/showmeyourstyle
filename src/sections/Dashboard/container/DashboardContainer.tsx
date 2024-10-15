import { Dashboard } from '../components/Dashboard'

type Props = {
  gallery: React.ReactNode
  transformations: React.ReactNode
}

const DashboardContainer = ({ gallery, transformations }: Props) => {
  return (
    <div className="grid gap-4 md:gap-8">
      <Dashboard gallery={gallery} transformations={transformations} />
    </div>
  )
}

export default DashboardContainer
