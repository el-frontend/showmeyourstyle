import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StylesPreset from './components/Presets/StylesPreset'

export default function Presets() {
  const base = '/images/sys-model-base.webp'
  const effects = Array.from({ length: 9 }, (_, idx) => ({
    id: idx,
    label: 'Vampire',
    image: '/images/sys-model-base (1).webp',
  }))

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
