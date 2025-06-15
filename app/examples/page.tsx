"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExamplesPage() {
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
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight">Example Explanations</h1>
              <p className="text-xl text-muted-foreground">See how our tool explains different types of code</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ExampleCard
                title="Bubble Sort Algorithm"
                language="JavaScript"
                description="A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order."
                code={`function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`}
              />

              <ExampleCard
                title="Fibonacci Sequence"
                language="Python"
                description="A recursive function to calculate the nth number in the Fibonacci sequence."
                code={`def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Calculate the 10th Fibonacci number
result = fibonacci(10)
print(result)  # Output: 55`}
              />

              <ExampleCard
                title="Binary Search"
                language="Java"
                description="An efficient search algorithm that finds the position of a target value within a sorted array."
                code={`public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        // Check if target is present at mid
        if (arr[mid] == target)
            return mid;
        
        // If target greater, ignore left half
        if (arr[mid] < target)
            left = mid + 1;
        
        // If target smaller, ignore right half
        else
            right = mid - 1;
    }
    
    // Target not found
    return -1;
}`}
              />

              <ExampleCard
                title="React Component"
                language="TypeScript"
                description="A simple React functional component that manages a counter state."
                code={`import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  initialCount = 0 
}) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;`}
              />
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/">Try With Your Own Code</Link>
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

interface ExampleCardProps {
  title: string
  language: string
  description: string
  code: string
}

function ExampleCard({ title, language, description, code }: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{language}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <pre className="max-h-[200px] overflow-auto rounded-lg bg-muted p-4 text-xs">
          <code>{code}</code>
        </pre>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href="/">Try Similar Example</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
