'use client'
import { Textarea } from '@/components/ui/textarea'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import useDebounce from '@/hooks/useDebounce'
import React, { useState } from 'react'
import Divider from './Divider'

export type PropmtProps = {
  onSubmit?: (data: string) => void
}

export default function Prompt({ onSubmit }: PropmtProps) {
  const [value, setValue] = useState('')
  const { createQueryAndNavigate } = useCreateQueryString()
  const debouncedSearch = useDebounce(val => {
    createQueryAndNavigate([{ name: 'prompt', value: val }])
  }, 500)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    debouncedSearch(event.target.value)
  }

  return (
    <div className="w-full flex items-end justify-end flex-col flex-1">
      <Divider label="OR" />
      <div className="relative w-full">
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder="Write your own style..."
          rows={4}
          className="w-full resize-none overflow-hidden bg-white text-primary placeholder:text-muted-foreground focus:outline-none py-3 px-4 pr-12 rounded-lg border border-input"
        />
      </div>
    </div>
  )
}
