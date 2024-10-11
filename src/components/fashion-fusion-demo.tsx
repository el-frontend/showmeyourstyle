"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Instagram, Upload } from 'lucide-react'

export function FashionFusionDemoComponent() {
  const [selectedOutfit, setSelectedOutfit] = useState('sweater')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleOutfitChange = (outfit: string) => {
    setSelectedOutfit(outfit)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">FashionFusion</div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">How It Works</Button>
            <Button variant="ghost">About Us</Button>
            <Button variant="outline">Try Now</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 relative overflow-hidden rounded-3xl bg-pink-300">
          <div className="absolute top-4 left-4 flex space-x-2">
            <Button size="sm" variant="outline" className="bg-white/80 hover:bg-white">
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button size="sm" variant="outline" className="bg-white/80 hover:bg-white">
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
          <div className="flex items-center p-12">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-white">Virtual Fitting Room</h1>
              <p className="text-xl mb-6 text-white">Try on the latest styles without leaving your home!</p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your Virtual Try-On
              </Button>
            </div>
            <div className="w-1/2">
              <img
                src={`/placeholder.svg?height=600&width=600&text=Virtual+Model`}
                alt="Virtual model wearing selected outfit"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <Tabs defaultValue="outfits" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="outfits">Choose Outfits</TabsTrigger>
                  <TabsTrigger value="upload">Upload Your Photo</TabsTrigger>
                </TabsList>
                <TabsContent value="outfits">
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {['Sweater', 'Dress', 'Jacket', 'Shirt', 'Pants', 'Skirt'].map((item) => (
                      <Card key={item} className={`cursor-pointer transition-all ${selectedOutfit === item.toLowerCase() ? 'ring-2 ring-purple-500' : ''}`} onClick={() => handleOutfitChange(item.toLowerCase())}>
                        <CardContent className="p-4 text-center">
                          <img
                            src={`/placeholder.svg?height=150&width=150&text=${item}`}
                            alt={item}
                            className="w-full h-auto rounded-lg mb-2"
                          />
                          <p className="font-semibold">{item}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Upload Your Photo</h2>
                    <p className="mb-4">To get the most accurate virtual try-on experience, upload a full-body photo of yourself.</p>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <Input id="dropzone-file" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      </label>
                    </div>
                    {uploadedImage && (
                      <div className="mt-4">
                        <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto rounded-lg" />
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Upload Your Photo", description: "Take a full-body photo or upload an existing one." },
              { title: "Choose Your Outfit", description: "Browse our extensive collection of virtual clothes." },
              { title: "See the Magic", description: "Our AI will show you wearing the selected outfit!" }
            ].map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FashionFusion</h3>
              <p className="text-sm text-gray-600">Experience the future of fashion with our virtual try-on technology.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}