import { Image as ImageIcon, Upload } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ImprovedImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = event => {
      setSelectedImage(event.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  })

  const handleExampleClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Upload an image to apply the styles
        </h1>

        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ease-in-out
            ${
              isDragActive
                ? 'border-purple-500 bg-purple-500 bg-opacity-10'
                : 'border-gray-600 hover:border-purple-400 hover:bg-gray-800'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            {isDragActive ? (
              <Upload className="w-12 h-12 text-purple-500 animate-bounce" />
            ) : (
              <Upload className="w-12 h-12 text-gray-400" />
            )}
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                {isDragActive
                  ? 'Drop the image here'
                  : 'Drag & Drop your image here'}
              </p>
              <p className="text-sm text-gray-400">or</p>
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-700 hover:to-purple-900 transition-colors">
                Select Image
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Supports: JPG, PNG, GIF (Max 5MB)
            </p>
          </div>
        </div>
        {selectedImage && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full rounded-lg"
            />
          </div>
        )}
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-3">
            No image? Try one of these:
          </p>
          <div className="flex justify-between">
            {[
              '/images/sys-model-base.webp',
              '/images/sys-model-base-2.webp',
              '/images/sys-model-base.webp',
              '/images/sys-model-base-2.webp',
            ].map((src, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleExampleClick(src)}
              >
                <img
                  src={src}
                  alt={`Example ${index + 1}`}
                  className="w-14 h-14 rounded-full transition-transform transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}