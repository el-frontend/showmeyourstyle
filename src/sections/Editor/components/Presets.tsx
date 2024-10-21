import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BackgroundPreset from './Backgrounds/BackgroundPreset'
import LayoutPresets from './Layouts/LayoutPresets'
import StylesPreset from './Presets/StylesPreset'

export default function Presets() {
  return (
    <>
      <Tabs defaultValue="styles" className="w-full flex-2 text-center">
        <TabsList className="mb-4">
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
        </TabsList>
        <TabsContent value="styles" className="h-full">
          <StylesPreset />
        </TabsContent>
        <TabsContent value="backgrounds" className="h-full">
          <BackgroundPreset />
        </TabsContent>
        <TabsContent value="layouts" className="h-full">
          <LayoutPresets />
        </TabsContent>
      </Tabs>
    </>
  )
}
