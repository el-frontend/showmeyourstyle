'use client'
import { Textarea } from '@/components/ui/textarea'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import useDebounce from '@/hooks/useDebounce'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Divider from './Divider'


export default function Prompt() {
  const [value, setValue] = useState('')
  const query = useSearchParams()

  const { createQueryAndNavigate } = useCreateQueryString()
  const debouncedSearch = useDebounce(val => {
    createQueryAndNavigate([{ name: 'prompt', value: val as string }], { scroll: false })
  }, 500)

  useEffect(() => {
    const prompt = query.get('prompt')
    if (prompt) {
      setValue(prompt)
    }
  }, [query])

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
