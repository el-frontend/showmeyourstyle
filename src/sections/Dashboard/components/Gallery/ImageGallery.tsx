'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { saveBulkUploads } from '@/lib/server/services/uploads'
import { Uploads } from '@/lib/server/types/uploads'
import { revalidatePathAsync } from '@/lib/server/utils/revalidate'
import { useUser } from '@clerk/nextjs'
import { UploadApiResponse } from 'cloudinary'
import { motion } from 'framer-motion'
import {
  Facebook,
  Linkedin,
  Sparkle,
  Twitter,
  UploadIcon,
  ZoomIn,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DashboardEmptyImagePlaceholder from '../EmptyImagePlaceholder/EmptyImagePlaceholder'
import CloudinaryUploadImage from '../Upload/UploadImage'

type Props = {
  images: Uploads[]
}

export default function ImageGallery({ images }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const { user } = useUser()

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

  return (
    <motion.div
      className="p-4 bg-background text-foreground"
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
          <Button className="text-foreground" onClick={() => setOpen(true)}>
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload Images
          </Button>
        </CloudinaryUploadImage>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:columns-2 md:columns-3">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div
                className="relative group cursor-pointer w-auto h-80"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
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
            </DialogTrigger>

            <DialogContent className="max-w-3xl w- bg-background max-h-[90%]">
              <div className="relative w-full h-96">
                <Image
                  src={image.url}
                  fill
                  alt={`Zoomed image ${index + 1}`}
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center">
                <Link href="/editor">
                  <Button className="text-foreground">
                    <Sparkle className="mr-2 h-4 w-4" />
                    Transform
                  </Button>
                </Link>
                <div className="flex justify-center items-center space-x-4">
                  <span>Share On:</span>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {images.length === 0 && <DashboardEmptyImagePlaceholder />}
    </motion.div>
  )
}
