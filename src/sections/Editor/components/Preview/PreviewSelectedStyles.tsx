import { Badge } from '@/components/ui/badge'
import { useSearchParams } from 'next/navigation'

const PreviewSelectedStyles = () => {
  const query = useSearchParams()
  const style = query.get('style')
  const background = query.get('background')
  const overlay = query.get('overlay')
  const prompt = query.get('prompt')

  return (
    <div className="flex gap-4 items-center justify-start relative">
      {prompt ? (
        <Badge className='py-2'>✨ Custom Propmt Style ✨</Badge>
      ) : (
        <>
          {style && <Badge className='py-2 bg-green-900'>Style: {style}</Badge>}
          {background && <Badge className='py-2 bg-blue-900'>Background: {background}</Badge>}
          {overlay && <Badge className='py-2 bg-teal-900'>Overlay: {overlay}</Badge>}
        </>
      )}
    </div>
  )
}

export default PreviewSelectedStyles
