import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getPostBySlug, BlogPost } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post: BlogPost = await req.json();
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  return NextResponse.json({ ok: true });
}
