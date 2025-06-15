"use client"

import type React from "react"
import type { ExplanationResult } from "@/app/explain/page"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CodeEditor } from "@/components/code-editor"
import { ExplainPage } from "@/app/explain/page"
import "./code-input.css"

export function CodeInput() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [explanation, setExplanation] = useState<ExplanationResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!code.trim()) return

    setIsSubmitting(true)
    setExplanation(null)
    setError(null)

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      })
      if (!res.ok) throw new Error("Failed to get explanation")
      const data = await res.json()
      setExplanation(data.explanation)
      setCode("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card className="p-4 overflow-hidden code-editor-scrollable">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">Code Snippet</h3>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="go">Go</SelectItem>
              <SelectItem value="rust">Rust</SelectItem>
              <SelectItem value="php">PHP</SelectItem>
              <SelectItem value="ruby">Ruby</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-full">
          <CodeEditor value={code} onChange={setCode} placeholder="Paste your code here..." />
        </div>
      </Card>
      <div className="flex justify-end pt-2">
        <Button type="submit" disabled={isSubmitting || !code.trim()}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Explain This Code"
          )}
        </Button>
      </div>
      {explanation && (
        <ExplainPage explanation={explanation} />
      )}
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
    </form>
  )
}
