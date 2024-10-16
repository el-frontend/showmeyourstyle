import { ReactNode } from 'react'

export type StepProps = {
  title: string
  icon: ReactNode
  description: string
  image: string
  bgColor: string
}

export default function Step({
  title,
  icon,
  description,
  image,
  bgColor,
}: StepProps) {
  return (
    <div
      className="aspect-square bg-cover bg-center rounded-xl text-center text-white flex flex-col p-4 hover:bg-right transition-all duration-600 hover:shadow-xl hover:shadow-red-200 step-container"
      id="stylize_you"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
      }}
    >
      <span className="text-lg lg:text-2xl font-medium">{title}</span>
      <div className="flex-grow grid place-content-center">{icon}</div>
      <span>{description}</span>
    </div>
  )
}
