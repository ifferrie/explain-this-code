"use client"

import Link from "next/link"
import { ArrowLeft, Clock, FileCode, Lightbulb, List, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export function ExplainPage({explanation}: {explanation: ExplanationResult}) {
  console.log(explanation)
  const language = explanation?.language || "javascript"
  const code = explanation?.code || ""

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="mx-auto max-w-5xl">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Code Analysis</CardTitle>
                <CardDescription>Detailed explanation and analysis of your {language} code</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>{code}</code>
                </pre>
              </CardContent>
            </Card>

            <Tabs defaultValue="summary" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="lineByLine">Line by Line</TabsTrigger>
                  <TabsTrigger value="complexity">Complexity</TabsTrigger>
                  <TabsTrigger value="edgeCases">Edge Cases</TabsTrigger>
                  <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{explanation?.summary}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <List className="h-5 w-5" />
                        Input/Output Examples
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {explanation?.examples?.map((example, index) => (
                          <div key={index} className="space-y-2 rounded-lg border p-4">
                            <div>
                              <h4 className="font-medium">Input:</h4>
                              <pre className="mt-1 rounded bg-muted p-2 text-sm">{example.input}</pre>
                            </div>
                            <div>
                              <h4 className="font-medium">Output:</h4>
                              <pre className="mt-1 rounded bg-muted p-2 text-sm">{example.output}</pre>
                            </div>
                            {example.explanation && (
                              <div>
                                <h4 className="font-medium">Explanation:</h4>
                                <p className="text-sm">{example.explanation}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="lineByLine" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <List className="h-5 w-5" />
                        Line by Line Explanation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {explanation?.lineByLine?.map((line, index) => (
                          <div key={index} className="space-y-1">
                            <pre className="rounded bg-muted p-2 text-sm">{line.code}</pre>
                            <p className="text-sm">{line.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="complexity" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Time & Space Complexity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium">Time Complexity</h3>
                          <p className="mt-1">{explanation?.complexity?.time?.complexity}</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {explanation?.complexity?.time?.explanation}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Space Complexity</h3>
                          <p className="mt-1">{explanation?.complexity?.space?.complexity}</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {explanation?.complexity?.space?.explanation}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="edgeCases" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Edge Cases to Consider
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {explanation?.edgeCases?.map((edgeCase, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{edgeCase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="suggestions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Improvement Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {explanation?.suggestions?.map((suggestion, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-medium">{suggestion.title}</h3>
                            <p className="text-sm">{suggestion.description}</p>
                            {suggestion.code && <pre className="rounded bg-muted p-2 text-sm">{suggestion.code}</pre>}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function ExplanationSkeleton() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="lineByLine">Line by Line</TabsTrigger>
          <TabsTrigger value="complexity">Complexity</TabsTrigger>
          <TabsTrigger value="edgeCases">Edge Cases</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-3/4" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export interface ExplanationResult {
  summary: string
  language: string
  code: string
  examples: Array<{
    input: string
    output: string
    explanation?: string
  }>
  lineByLine: Array<{
    code: string
    explanation: string
  }>
  complexity: {
    time: {
      complexity: string
      explanation: string
    }
    space: {
      complexity: string
      explanation: string
    }
  }
  edgeCases: string[]
  suggestions: Array<{
    title: string
    description: string
    code?: string
  }>
}