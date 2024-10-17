import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { createTransformation } from '@/lib/server/services/transformation'
import { useUser } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useEditorStore } from '../../store/editor'

const PreviewSaveTransformation = () => {
  const [isSaving, setIsSaving] = useState(false)
  const { user } = useUser()
  const { transformedUrl } = useEditorStore()
  const query = useSearchParams()

  const saveTransformation = async () => {
    const baseUrl = query.get('image')
    const prompt = query.get('prompt')
    const effect = query.get('effect')
    const background = query.get('background')

    if (!user || !baseUrl) return
    setIsSaving(true)
    try {
      await createTransformation(
        user.id,
        crypto.randomUUID(),
        prompt ? prompt : (effect?.concat(' ', background ?? '') ?? ''),
        transformedUrl,
        baseUrl
      )
      toast.success('Transformation saved successfully')
    } catch (error) {
      console.error('Error saving the transformation:', error)
      toast.error('Failed to save the transformation')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Button
      className="main-gradient"
      variant="outline"
      onClick={saveTransformation}
    >
      {isSaving ? 'Saving...' : 'Save Transformation'}
    </Button>
  )
}

export default PreviewSaveTransformation
