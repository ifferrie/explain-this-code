"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  minHeight?: string
}

export function CodeEditor({
  value,
  onChange,
  placeholder,
  className,
  minHeight = "300px",
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const adjustHeight = () => {
      textarea.style.height = "auto"
      const minHeightPx = Number.parseInt(minHeight, 10) || 300
      textarea.style.height = `${Math.max(textarea.scrollHeight, minHeightPx)}px`
    }
    adjustHeight()
    window.addEventListener("resize", adjustHeight)

    return () => {
      window.removeEventListener("resize", adjustHeight)
    }
  }, [value, minHeight])

  return (
    <div className={cn("relative font-mono", className)}>
      <pre
        className="absolute inset-0 overflow-hidden whitespace-pre-wrap break-words p-4 text-transparent"
        style={{ minHeight }}
      >
        {value || placeholder}
      </pre>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, Number.parseInt(minHeight, 10) || 300)}px`
          }
        }}
        placeholder={placeholder}
        className={cn(
          "absolute inset-0 resize-none overflow-hidden whitespace-pre-wrap break-words bg-transparent p-4 font-inherit text-inherit outline-none",
          "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
        style={{ minHeight }}
      />
    </div>
  )
}
