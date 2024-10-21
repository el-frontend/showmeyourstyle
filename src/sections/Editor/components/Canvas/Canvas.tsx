'use client'
import { useSearchParams } from 'next/navigation'
import { useEditorStore } from '../../store/editor'
import Preview from '../Preview/Preview'
import PreviewActions from '../Preview/PreviewActions'
import UploadView from '../UploadView/UploadView'
import { CanvasHeader } from './CanvasHeader'

export default function Canvas() {
  const q = useSearchParams()
  const image = q.get('image')
  const { effectObject, background, layout, setTransformedUrl } =
    useEditorStore()

  return (
    <div
      className="min-h-[90vh] lg:min-h-max lg:h-full relative w-full lg:w-3/5 overflow-hidden"
      id="canvas"
    >
      <CanvasHeader />
      {image ? (
        <Preview
          image={image}
          effect={effectObject || undefined}
          background={background}
          onUrlChange={setTransformedUrl}
          layout={layout || undefined}
        />
      ) : (
        <UploadView />
      )}
      <PreviewActions />
    </div>
  )
}
