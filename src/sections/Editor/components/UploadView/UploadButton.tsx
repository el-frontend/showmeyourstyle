import { Button } from '@/components/ui/button'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { uploadImage } from '@/lib/server/cloudinary/upload'
import { convertFileToBase64 } from '@/lib/server/utils/file'
import { Plus } from 'lucide-react'
import { useRef, useState } from 'react'

const UploadButton = () => {
  const refInput = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const { createQueryAndNavigate } = useCreateQueryString()
  const handleClick = () => {
    refInput.current?.click()
  }

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true)
    try {
      const file = e.target.files?.[0]
      if (!file) return

      const file64 = await convertFileToBase64(file)
      const uploadedFile = await uploadImage(file64)
      console.log(uploadedFile)
      createQueryAndNavigate([
        { value: uploadedFile.secure_url, name: 'image' },
      ])
      setIsUploading(false)
    } catch (e) {
      setIsUploading(false)
      console.error(e)
    }
  }
  return (
    <Button className="ligth flex gap-2" variant="ghost" onClick={handleClick}>
      <input
        type="file"
        ref={refInput}
        style={{ display: 'none' }}
        onChange={onUpload}
        disabled={isUploading}
      />

      {!isUploading && (
        <div className="p-1 rounded-full bg-white">
          <Plus className="h-5 w-auto  text-background" />
        </div>
      )}

      {isUploading ? 'Uploading...' : 'Add new photo'}
    </Button>
  )
}

export default UploadButton
