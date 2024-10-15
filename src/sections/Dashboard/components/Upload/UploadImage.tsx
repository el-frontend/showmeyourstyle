'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { uploadImageBulk } from '@/lib/server/cloudinary/upload'
import { convertFileToBase64 } from '@/lib/server/utils/file'
import { UploadApiResponse } from 'cloudinary'
import { AlertCircle, CheckCircle, File, Upload } from 'lucide-react'
import Image from 'next/image'
import { RefObject, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileWithPreview extends File {
  preview: string | null
}

type Props = {
  open: boolean
  onClose: () => void
  onUploadComplete: (data: UploadApiResponse[]) => void
  children: React.ReactNode
}

export default function CloudinaryUploadImage({
  children,
  onClose,
  onUploadComplete,
  open,
}: Props) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [uploading, setUploading] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [uploadComplete, setUploadComplete] = useState<boolean>(false)
  const fileInputRef: RefObject<HTMLInputElement> = useRef(null)

  const onDrop = (acceptedFiles: File[]) => {
    console.log('Accepted files:', acceptedFiles)
    console.log('Files:', files)
    setFiles(files => [
      ...files,
      ...acceptedFiles.map(file =>
        Object.assign(file, {
          preview: file.type.startsWith('image/')
            ? URL.createObjectURL(file)
            : null,
        })
      ),
    ])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/webp': ['.webp'],
    },
    maxFiles: 5,
    maxSize: 5000000, // 5MB
    noClick: true, // Disable the default click behavior
  })

  const uploadFiles = async () => {
    console.log('Uploading files:', files)
    setUploading(true)
    setUploadProgress(0)
    // Simulating upload process
    try {
      const textFiles = await Promise.all(
        files.map(async file => await convertFileToBase64(file))
      )
      const response = await uploadImageBulk(textFiles)
      console.log('Response:', response)
      setUploadProgress(100)
      setUploadComplete(true)
      onUploadComplete(response)
      setUploading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const resetUpload = () => {
    setFiles([])
    setUploadProgress(0)
    setUploadComplete(false)
    setUploading(false)
    onClose()
  }

  const handleClick = () => {
    fileInputRef?.current?.click() // This will open the file dialog
  }

  const onHandleClose = () => {
    resetUpload()
    onClose()
  }

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={onHandleClose}>
        {children}
        <DialogContent className="sm:max-w-[425px] md:max-w-[620px]">
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {!uploadComplete && (
              <div
                {...getRootProps({ refKey: 'innerRef' })}
                onClick={handleClick}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-300 hover:border-primary'
                }`}
              >
                <input {...getInputProps()} ref={fileInputRef} />
                <Upload className="mx-auto h-8 w-8 text-foreground" />
                <p className="mt-2 text-sm text-foreground">
                  Drag and drop some files here, or click to select files
                </p>
                <p className="mt-1 text-xs text-foreground">
                  (Up to 5 files, 5MB each. Images and PDFs only)
                </p>
              </div>
            )}

            {files.length > 0 && !uploadComplete && (
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {files.map(file => (
                    <div
                      key={file.name}
                      className="flex items-center space-x-4"
                    >
                      {file.preview ? (
                        <Image
                          width={40}
                          height={40}
                          src={file.preview}
                          alt={file.name}
                          className="h-10 w-10 object-cover rounded"
                        />
                      ) : (
                        <File className="h-10 w-10 text-primary" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate max-w-fit">
                          {file.name.length > 50
                            ? `${file.name.slice(0, 47)}...`
                            : file.name}
                        </p>
                        <p className="text-xs text-foreground">
                          {(file.size / 1000000).toFixed(2)} MB
                        </p>
                      </div>
                      {uploading ? (
                        <Progress value={uploadProgress} className="w-20" />
                      ) : uploadProgress === 100 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AlertCircle className="h-5 w-5 text-yellow-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>This file is not uploaded yet</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}

            {uploadComplete && (
              <div className="text-center space-y-4">
                <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                <p className="text-lg font-medium text-foreground">
                  Upload Complete!
                </p>
                <p className="text-sm text-foreground">
                  {files.length} file{files.length > 1 ? 's' : ''} uploaded
                  successfully.
                </p>
              </div>
            )}

            {files.length > 0 && !uploading && !uploadComplete && (
              <Button onClick={uploadFiles} className="w-full">
                Upload Files
              </Button>
            )}

            {uploading && (
              <div className="text-center space-y-2">
                <Progress value={uploadProgress} className="w-full" />
                <p className="text-sm text-foreground">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}

            {uploadComplete && (
              <Button onClick={resetUpload} className="w-full">
                Done
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}
