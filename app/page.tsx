import Link from "next/link"
import { CodeInput } from "@/components/code-input"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold ml-[20px]">
            <span className="text-xl">Explain This Code</span>
          </Link>
          <nav className="flex items-center gap-4 pr-[20px]">
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/examples" className="text-sm font-medium hover:underline">
              Examples
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Understand Any Code Instantly</h1>
            <p className="text-lg text-muted-foreground">
              Paste your code snippet below and get a detailed explanation, examples, complexity analysis, and more.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <CodeInput />
          </div>
        </section>
        <section className="container py-12 border-t">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold text-center">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-medium">Paste Your Code</h3>
                <p className="text-sm text-muted-foreground">
                  Paste any code snippet in our editor with syntax highlighting support.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-medium">Submit for Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your code to understand its purpose and functionality.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-medium">Get Detailed Explanation</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a comprehensive breakdown with examples, complexity analysis, and suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        </div>
      </footer>
    </div>
  )
}
