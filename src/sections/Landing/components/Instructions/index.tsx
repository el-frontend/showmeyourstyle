'use client'

import { Button } from '@/components/ui/button'
import { CloudUploadIcon, Ghost, ShirtIcon, SparklesIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Step from './Step'

export default function Instructions() {
  const { push } = useRouter()

  const steps = [
    {
      key: 1,
      title: 'Upload your Image',
      icon: <CloudUploadIcon size={75} strokeWidth={1} />,
      description: 'Take a full-body photo or upload an existing one',
      image:
        'https://res.cloudinary.com/dr0ujyp54/image/upload/f_auto,q_auto/v1/assets/skeleton_upload',
      bgColor: '#893780',
    },
    {
      key: 2,
      title: 'Choose your style',
      icon: <ShirtIcon size={75} strokeWidth={1} />,
      description: 'Select an style from our list or define a new one',
      image:
        'https://res.cloudinary.com/dr0ujyp54/image/upload/f_auto,q_auto/v1/assets/skeleton_clothes',
      bgColor: '#A63271',
    },
    {
      key: 3,
      title: 'See the magic',
      icon: <SparklesIcon size={75} strokeWidth={1} />,
      description: 'Our AI will show you wearing the selected outfit',
      image:
        'https://res.cloudinary.com/dr0ujyp54/image/upload/f_auto,q_auto/v1/assets/ai_magic_skeleton',
      bgColor: '#CD2C5F',
    },
  ]

  return (
    <div className="bg-primary p-4 md:py-12 lg:py-24 text-white">
      <div className="container mx-auto mb-8 px-2 lg:px-16">
        <h2 className="text-2xl md:text-5xl font-bold mb-16 text-white font-spooky">
          How Does It Works?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16 mt-4">
          {steps.map(({ key, ...step }) => (
            <Step key={key} {...step} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            className="py-8 px-8 rounded-full text-xl border-white border group hover:shadow-lg hover:shadow-white"
            onClick={() => push('/editor')}
          >
            Start Now !! &nbsp; <Ghost className="group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  )
}
