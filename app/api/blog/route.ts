import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAllPosts, BlogPost } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const post: BlogPost = await req.json();
  if (!post.slug) return NextResponse.json({ error: "slug required" }, { status: 400 });
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
  const filePath = path.join(BLOG_DIR, `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
  return NextResponse.json({ ok: true });
}
