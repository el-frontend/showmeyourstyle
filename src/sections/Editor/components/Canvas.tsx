'use client'
import { useSearchParams } from 'next/navigation'
import Preview from './Preview'
import UploadView from './UploadView/UploadView'

export default function Canvas() {
  const q = useSearchParams()
  const image = q.get('image')

  return (
    <div className="flex-grow h-full relative">
      {image ? <Preview image={image} /> : <UploadView />}
    </div>
  )
}
