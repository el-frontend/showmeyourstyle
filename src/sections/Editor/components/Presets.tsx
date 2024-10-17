import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StylesPreset from './Presets/StylesPreset'

export default function Presets() {
  const base = '/images/sys-model-base.webp'
  const effects = Array.from({ length: 9 }, (_, idx) => ({
    id: idx,
    label: 'Vampire',
    image: '/images/sys-model-base (1).webp',
  }))

  return (
    <>
      <Tabs defaultValue="styles" className="w-full flex-2 text-center">
        <TabsList className="mb-4">
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
        </TabsList>
        <TabsContent value="styles" className="h-full">
          <StylesPreset />
        </TabsContent>
        <TabsContent value="backgrounds" className="h-full">
          Change your password here.
        </TabsContent>
        <TabsContent value="overlays" className="h-full">
          Change your password here.
        </TabsContent>
      </Tabs>
    </>
  )
}
