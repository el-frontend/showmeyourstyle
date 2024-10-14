'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Facebook, Linkedin, Twitter, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const images = [
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-base.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-black-hair.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-base.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-black-hair.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-base.jpg',
  'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-black-hair.jpg',
]

export default function ImageGallery() {
  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:columns-2 md:columns-3">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full bg-background">
              <div className="relative">
                <Image
                  src={image}
                  width={400}
                  height={400}
                  alt={`Zoomed image ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
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
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
