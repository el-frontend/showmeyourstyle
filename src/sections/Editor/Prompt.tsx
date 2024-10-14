'use client'
import { Send } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export default function Prompt() {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    console.log('Submitted:', value)
    setValue('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-background">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Write your own style..."
          rows={1}
          className="w-full resize-none overflow-hidden bg-background text-foreground placeholder:text-muted-foreground focus:outline-none py-3 px-4 pr-12 rounded-lg border border-input"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 bottom-3 p-2 rounded-md bg-foreground text-accent hover:bg-foreground/90 transition-colors"
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Press Enter to send, Shift + Enter for a new line.
      </p>
    </div>
  )
}
