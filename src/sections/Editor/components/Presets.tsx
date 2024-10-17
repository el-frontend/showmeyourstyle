import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BackgroundPreset from './Backgrounds/BackgroundPreset'
import StylesPreset from './Presets/StylesPreset'

export default function Presets() {
  return (
    <>
      <Tabs defaultValue="styles" className="w-full flex-2 text-center">
        <TabsList className="mb-4">
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
          {/* <TabsTrigger value="overlays">Overlays</TabsTrigger> */}
        </TabsList>
        <TabsContent value="styles" className="h-full">
          <StylesPreset />
        </TabsContent>
        <TabsContent value="backgrounds" className="h-full">
          <BackgroundPreset />
        </TabsContent>
        {/* <TabsContent value="overlays" className="h-full">
          Change your password here.
        </TabsContent> */}
      </Tabs>
    </>
  )
}
