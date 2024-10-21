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
      className="z-30 relative aspect-square bg-cover border-white border-2 bg-center rounded-xl  bg-black/90 text-center text-white flex flex-col p-4 hover:bg-right transition-all duration-600 hover:shadow-xl hover:shadow-gray-600 step-container"
      id="stylize_you"
    >
      <div
        className="z-30 absolute top-0 left-0 w-full h-full opacity-20 rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: bgColor,
          backgroundSize: 'cover',
        }}
      />

      <span className="text-lg lg:text-2xl font-medium">{title}</span>
      <div className="flex-grow grid place-content-center">{icon}</div>
      <span className='text-base lg:text-lg'>{description}</span>
    </div>
  )
}
