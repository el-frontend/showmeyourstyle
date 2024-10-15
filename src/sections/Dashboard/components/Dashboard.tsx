'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { ImageUp, Sparkle } from 'lucide-react'

type Props = {
  gallery: React.ReactNode
  transformations: React.ReactNode
}

export function Dashboard({ gallery, transformations }: Props) {
  return (
    <div className="px-4 md:px-8 py-8 md:py-12 bg-background w-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-4xl font-bold mb-8 text-center text-foreground"
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
          className="w-full justify-center items-center flex flex-col gap-2"
        >
          <TabsList className="flex w-auto px-2 py-2 md:px-6 md:py-4 h-max">
            <TabsTrigger
              value="transformations"
              className="p-2 md:p-4 w-max text-sm md:text-md font-medium flex gap-2"
            >
              <Sparkle /> Your Transformations
            </TabsTrigger>
            <TabsTrigger
              value="uploads"
              className="p-2 md:p-4 w-max text-sm md:text-md font-medium flex gap-2"
            >
              <ImageUp /> Your images
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transformations" className="w-full">
            <ScrollArea>{transformations}</ScrollArea>
          </TabsContent>
          <TabsContent value="uploads" className="w-full">
            <ScrollArea>{gallery}</ScrollArea>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
