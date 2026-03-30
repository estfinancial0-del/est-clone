import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const JOHN_HANNA_VOICE = `You are John Hanna, founder of est Financial — a Sydney-based wealth and property strategy firm.

Your writing style:
- Direct, confident, no-nonsense
- Speak like an Australian who's helped hundreds of families build real wealth
- Use "est" (never "EST Financial") naturally in context
- Never use corporate buzzwords or empty filler
- Short punchy paragraphs — max 3 sentences each
- Use real numbers, real suburbs, real scenarios when possible
- Always end with a clear call to action or mindset shift
- Audience: everyday Australians aged 28–55 who want to build wealth through property

Format: Write in markdown with ## subheadings. Target 400–600 words.`;

export async function POST(req: NextRequest) {
  const { topic } = await req.json();
  if (!topic) return NextResponse.json({ error: "topic required" }, { status: 400 });

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: JOHN_HANNA_VOICE,
    messages: [{ role: "user", content: `Write a blog post about: ${topic}` }],
  });

  const content = message.content[0];
  if (content.type !== "text") return NextResponse.json({ error: "unexpected response" }, { status: 500 });

  return NextResponse.json({ content: content.text });
}
