import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code, language } = await req.json();

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful programming assistant that explains code in simple terms.`,
        },
        {
          role: "user",
          content: `Explain the following ${language} code:\n\n${code} in a form of the following json type {
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
          }. Return your answer as a JSON object with double-quoted property names and values , like:
          {
            "summary": "...",
            "steps": ["...", "..."],
            "complexity": "..."
          }`,
        },
      ],
      max_tokens: 500,
    }),
  });

  if (!openaiRes.ok) {
    return NextResponse.json({ error: "Failed to get explanation" }, { status: 500 });
  }

  const data = await openaiRes.json();
  const explanationText = data.choices?.[0]?.message?.content;
  let explanation: any;
  try {
    explanation = JSON.parse(explanationText);
  } catch {
    explanation = { message: explanationText };
  }
  console.log(explanation)

  return NextResponse.json({ explanation });
}