'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { ImageUp, PlusCircle, Sparkle, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import ImageGallery from './Gallery/ImageGalery'

const initialImages = [
  {
    id: 1,
    original:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
    transformed:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_background_replace:prompt_a%20beach/e_gen_replace:from_girl;to_beach%20outfit;preserve-geometry_true/sys-model-hd.jpg',
  },
  {
    id: 2,
    original:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
    transformed:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_background_replace:prompt_a%20city%20in%20fire/e_gen_replace:from_girl;to_zombie;preserve-geometry_true/sys-model-hd.jpg',
  },
  {
    id: 3,
    original:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/sys-model-hd.jpg',
    transformed:
      'https://res.cloudinary.com/dr0ujyp54/image/upload/e_gen_background_replace:prompt_a%20farm/e_gen_replace:from_girl;to_farm%20outfit;preserve-geometry_true/sys-model-hd.jpg',
  },
]

export function ModernDashboardComponent() {
  const [images] = useState(initialImages)

  return (
    <div className="px-8 py-12 bg-background min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-foreground"
      >
        ✨ Explore the Magic You Create ✨
      </motion.h1>
      <motion.div
        className="flex w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs
          defaultValue="transformations"
          className="w-full justify-center items-center flex flex-col"
        >
          <TabsList className="flex w-auto px-6 py-4 h-max">
            <TabsTrigger
              value="transformations"
              className="p-4 w-max text-md font-medium flex gap-2"
            >
              <Sparkle /> Your Transformations
            </TabsTrigger>
            <TabsTrigger
              value="uploads"
              className="p-4 w-max text-md font-medium flex gap-2"
            >
              <ImageUp /> Your images
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transformations" className="w-full">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Image Gallery
                </h2>
                <Button className="text-background">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Generate new ideas
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {images.map(image => (
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
                        <div className="relative group">
                          <Image
                            src={image.original}
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
                        <div className="relative group">
                          <Image
                            src={image.transformed}
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
            </div>
          </TabsContent>
          <TabsContent value="uploads" className="w-full">
            <ImageGallery />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
