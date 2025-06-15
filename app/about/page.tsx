import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">Explain This Code</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/examples" className="text-sm font-medium hover:underline">
              Examples
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">About Explain This Code</h1>
              <p className="text-xl text-muted-foreground">Making code understanding accessible to everyone</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                Explain This Code was created to help developers of all skill levels understand code more easily.
                Whether you're a beginner trying to learn programming concepts, an experienced developer diving into
                unfamiliar codebases, or someone reviewing code during interviews, our tool provides clear,
                comprehensive explanations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How It Works</h2>
              <p>
                Our platform uses advanced AI to analyze code snippets and generate detailed explanations. The analysis
                includes:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>General explanation of what the code does</li>
                <li>Input and output examples to demonstrate functionality</li>
                <li>Line-by-line breakdown of the code</li>
                <li>Time and space complexity analysis</li>
                <li>Potential edge cases to consider</li>
                <li>Suggestions for improvements</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Supported Languages</h2>
              <p>We currently support the following programming languages:</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="rounded-md bg-muted p-2 text-center">JavaScript</div>
                <div className="rounded-md bg-muted p-2 text-center">TypeScript</div>
                <div className="rounded-md bg-muted p-2 text-center">Python</div>
                <div className="rounded-md bg-muted p-2 text-center">Java</div>
                <div className="rounded-md bg-muted p-2 text-center">C#</div>
                <div className="rounded-md bg-muted p-2 text-center">C++</div>
                <div className="rounded-md bg-muted p-2 text-center">Go</div>
                <div className="rounded-md bg-muted p-2 text-center">Rust</div>
                <div className="rounded-md bg-muted p-2 text-center">PHP</div>
                <div className="rounded-md bg-muted p-2 text-center">Ruby</div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/">Try It Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Explain This Code. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
