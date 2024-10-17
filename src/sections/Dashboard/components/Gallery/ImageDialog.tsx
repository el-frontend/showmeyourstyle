import { ShareButton } from '@/components/share/ShareButton'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Download, Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  image: string
  imageId: string
  hideTransformation?: boolean
}

const ImageDialog: React.FC<Props> = ({
  onClose,
  open,
  image,
  imageId,
  hideTransformation,
}) => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false)
  const downloadImage = async () => {
    if (!image) return
    setIsDownloading(true)
    try {
      const response = await fetch(image)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `showmeyourstyle-${Math.random() * 20}.jpg`
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading the image:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle>Image Details</DialogTitle>
      <DialogDescription>The details of a image</DialogDescription>
      <DialogContent className="max-w-3xl md:max-w-5xl bg-background h-full md:h-auto max-h-full md:max-h-[95%]">
        <div
          className="relative w-full"
          style={{ height: 'calc(100vh - 220px)' }}
        >
          <Image
            src={image}
            fill
            alt={imageId}
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex gap-2 flex-1 justify-start">
            {!hideTransformation && (
              <Link href={`/editor?image=${image}`}>
                <Button className="border-white" variant="outline">
                  <Sparkle className="mr-2 h-4 w-4" />
                  Transform
                </Button>
              </Link>
            )}
          </div>
          <div className="flex gap-2 flex-1 justify-end">
            <Button
              variant={'outline'}
              className="border-white"
              onClick={downloadImage}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download'}
              <Download className="ml-2 w-5 h-auto" />
            </Button>
            <div className="flex justify-center items-center space-x-4">
              <ShareButton data={image} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageDialog
