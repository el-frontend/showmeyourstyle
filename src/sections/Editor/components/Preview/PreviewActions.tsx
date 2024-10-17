import { ShareButton } from '@/components/share/ShareButton'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { useState } from 'react'
import { useEditorStore } from '../../store/editor'

const PreviewActions = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const { transformedUrl } = useEditorStore()

  const downloadImage = async () => {
    if (!transformedUrl) return
    setIsDownloading(true)
    try {
      const response = await fetch(transformedUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `showmeyourstyle-${Math.random() * 20}.jpg`
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading the image:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="light z-50 absolute bottom-0 right-0 w-full px-8 py-4 flex justify-end gap-4 items-center">
      <ShareButton data={transformedUrl} />

      <Button
        variant={'outline'}
        className="border-white"
        onClick={downloadImage}
        disabled={isDownloading}
      >
        {isDownloading ? 'Downloading...' : 'Download'}
        <Download className="ml-2 w-5 h-auto" />
      </Button>
    </div>
  )
}

export default PreviewActions
