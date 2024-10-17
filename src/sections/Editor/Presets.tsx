import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StylesPreset from './components/Presets/StylesPreset'

export default function Presets() {

  return (
    <>
      <Tabs defaultValue="styles" className="w-full">
        <TabsList>
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
        </TabsList>
        <TabsContent value="styles">
          <StylesPreset />
        </TabsContent>
        <TabsContent value="backgrounds">
          Change your password here.
        </TabsContent>
        <TabsContent value="overlays">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
