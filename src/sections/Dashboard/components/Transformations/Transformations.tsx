'use client'

import { Button } from '@/components/ui/button'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { Transformations } from '@/lib/server/types/transformations'
import { motion } from 'framer-motion'
import { PlusCircle, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DashboardEmptyImagePlaceholder from '../EmptyImagePlaceholder/EmptyImagePlaceholder'
import ImageDialog from '../Gallery/ImageDialog'

type Props = {
  data: Transformations[]
}

const DashboardTransformations: React.FC<Props> = ({ data }) => {
  const { createQueryAndNavigate } = useCreateQueryString()
  const [activeImage, setActiveImage] = useState<Transformations | null>(null)
  const [openImage, setOpenImage] = useState<boolean>(false)
  const goToUploadFile = () => {
    createQueryAndNavigate([
      { name: 'tab', value: 'uploads' },
      { name: 'upload', value: 'true' },
    ], { scroll: false })
  }

  const onShowImage = (
    image: Transformations,
    isTransformed: boolean = false
  ) => {
    const newImage = { ...image }
    if (!isTransformed) {
      newImage.url = image.baseImageUrl
    }
    setActiveImage(newImage)
    setOpenImage(true)
  }

  const onCloseImageDialog = () => {
    setOpenImage(false)
    setActiveImage(null)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-md md:text-2xl font-semibold text-foreground">
          Transformations Gallery
        </h2>
        <Link href="/editor">
          <Button className="text-foreground">
            <PlusCircle className="mr-0 md:mr-2 h-4 w-4" />
            <span className="hidden md:block">Generate new ideas</span>
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.map(image => (
          <motion.div
            key={image.id}
            className="rounded-xl shadow-lg border text-foreground bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="grid grid-cols-2 gap-4 p-6">
              <div>
                <h3 className="text-sm font-medium mb-2 text-foreground">
                  Original
                </h3>
                <div
                  className="relative group cursor-pointer"
                  onClick={() => onShowImage(image)}
                >
                  <Image
                    src={image.baseImageUrl}
                    alt={`Original ${image.id}`}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 text-foreground">
                  Transformed
                </h3>
                <div
                  className="relative group cursor-pointer"
                  onClick={() => onShowImage(image, true)}
                >
                  <Image
                    src={image.url}
                    alt={`Transformed ${image.id}`}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {activeImage && (
        <ImageDialog
          open={openImage}
          onClose={onCloseImageDialog}
          image={activeImage.url}
          imageId={activeImage.publicId}
          hideTransformation={activeImage.url.includes('e_gen')}
        />
      )}
      {data.length === 0 && (
        <DashboardEmptyImagePlaceholder onClick={goToUploadFile} />
      )}
    </div>
  )
}

export default DashboardTransformations
