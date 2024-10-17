'use client'

import { Button } from '@/components/ui/button'
import { saveBulkUploads } from '@/lib/server/services/uploads'
import { Uploads } from '@/lib/server/types/uploads'
import { revalidatePathAsync } from '@/lib/server/utils/revalidate'
import { useUser } from '@clerk/nextjs'
import { UploadApiResponse } from 'cloudinary'
import { motion } from 'framer-motion'
import { UploadIcon, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DashboardEmptyImagePlaceholder from '../EmptyImagePlaceholder/EmptyImagePlaceholder'
import CloudinaryUploadImage from '../Upload/UploadImage'
import ImageDialog from './ImageDialog'

type Props = {
  images: Uploads[]
}

export default function ImageGallery({ images }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<Uploads | null>(null)
  const [openImage, setOpenImage] = useState<boolean>(false)

  const { user } = useUser()
  const query = useSearchParams()
  const upload = query.get('upload')

  useEffect(() => {
    if (upload === 'true') {
      setOpen(true)
    }
  }, [upload])

  const handleUploadComplete = async (data: UploadApiResponse[]) => {
    if (!user) return
    try {
      await saveBulkUploads(
        user.id,
        data.map(({ public_id, url }) => ({ publicId: public_id, url }))
      )
      await revalidatePathAsync('/dashboard')
    } catch (e) {
      console.error(e)
    }
  }

  const onShowImage = (image: Uploads) => {
    setActiveImage(image)
    setOpenImage(true)
  }

  const onCloseImageDialog = () => {
    setOpenImage(false)
    setActiveImage(null)
  }

  return (
    <motion.div
      className="bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between align-middle mb-8">
        <h1 className="text-2xl font-bold mb-6">Image Gallery</h1>
        <CloudinaryUploadImage
          open={open}
          onClose={() => setOpen(false)}
          onUploadComplete={handleUploadComplete}
        >
          <Button
            className="text-foreground"
            id="upload-images"
            onClick={() => setOpen(true)}
          >
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload Images
          </Button>
        </CloudinaryUploadImage>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:columns-2 md:columns-3">
        {images.map((image, index) => (
          <motion.div
            key={`${index}-${image.publicId}`}
            className="relative group cursor-pointer w-auto h-96"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => onShowImage(image)}
          >
            <Image
              src={image.url}
              fill
              alt={`Zoomed image ${index + 1}`}
              style={{ objectFit: 'cover', aspectRatio: '1/1' }}
              className="rounded-lg transition-opacity duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </motion.div>
        ))}
        {activeImage && (
          <ImageDialog
            open={openImage}
            onClose={onCloseImageDialog}
            image={activeImage.url}
            imageId={activeImage.publicId}
          />
        )}
      </div>
      {images.length === 0 && (
        <DashboardEmptyImagePlaceholder onClick={() => setOpen(true)} />
      )}
    </motion.div>
  )
}
