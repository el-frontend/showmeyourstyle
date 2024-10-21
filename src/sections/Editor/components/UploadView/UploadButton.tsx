import { Button } from '@/components/ui/button'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import { uploadImage } from '@/lib/server/cloudinary/upload'
import { convertFileToBase64 } from '@/lib/server/utils/file'
import { Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

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

      // check file size not exceed 3mb
      if (file.size > 3 * 1024 * 1024) {
        toast.warning(
          'File size is too big, please upload a file less than 3mb'
        )
        setIsUploading(false)
        return
      }

      const file64 = await convertFileToBase64(file)
      const uploadedFile = await uploadImage(file64)
      console.log(uploadedFile)
      createQueryAndNavigate(
        [{ value: uploadedFile.secure_url, name: 'image' }],
        { scroll: false }
      )
      setIsUploading(false)
    } catch (e) {
      setIsUploading(false)
      console.error(e)
    }
  }
  return (
    <Button
      className="ligth flex gap-2 border-white"
      variant={'outline'}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={refInput}
        style={{ display: 'none' }}
        onChange={onUpload}
        disabled={isUploading}
        accept="image/*"
      />

      {!isUploading && (
        <div className="p-1">
          <Plus className="h-5 w-auto  text-white" />
        </div>
      )}

      {isUploading ? 'Uploading...' : 'Add new photo'}
    </Button>
  )
}

export default UploadButton
