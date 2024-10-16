'use client'

import { Button } from '@/components/ui/button'
import { CloudUploadIcon, ShirtIcon, SparklesIcon } from 'lucide-react'
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
      image: '/images/upload-image.png',
      bgColor: '#893780',
    },
    {
      key: 2,
      title: 'Choose your style',
      icon: <ShirtIcon size={75} strokeWidth={1} />,
      description: 'Select an style from our list or define a new one',
      image: '/images/style-image.png',
      bgColor: '#A63271',
    },
    {
      key: 3,
      title: 'See the magic',
      icon: <SparklesIcon size={75} strokeWidth={1} />,
      description: 'Our AI will show you wearing the selected outfit',
      image: '/images/result-image.png',
      bgColor: '#CD2C5F',
    },
  ]

  return (
    <div className="bg-gray-100 p-4 md:py-12 lg:py-24">
      <div className="container mx-auto mb-8 px-2 lg:px-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-background">How Does It Works?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16 mt-4">
          {steps.map(({ key, ...step }) => (
            <Step key={key} {...step} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button className="py-8 px-8 rounded-full text-xl" onClick={() => push('/editor')}>
            Style Your Photos!
          </Button>
        </div>
      </div>
    </div>
  )
}
