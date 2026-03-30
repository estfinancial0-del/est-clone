"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string | null;
  published: boolean;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "est2025admin";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function AdminBlogPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [aiTopic, setAiTopic] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (authed) loadPosts();
  }, [authed]);

  async function loadPosts() {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
  }

  async function handleAiWrite() {
    if (!aiTopic.trim()) return;
    setAiLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/ai-write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic }),
      });
      const data = await res.json();
      if (data.content && editing) {
        setEditing({ ...editing, content: data.content });
        setMessage("AI content generated!");
      }
    } catch {
      setMessage("AI write failed. Check ANTHROPIC_API_KEY env var.");
    }
    setAiLoading(false);
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    const method = isNew ? "POST" : "PUT";
    const url = isNew ? "/api/blog" : `/api/blog/${editing.slug}`;
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setSaving(false);
    setMessage("Saved!");
    setEditing(null);
    setIsNew(false);
    loadPosts();
  }

  async function handleDelete(slug: string) {
    if (!confirm(`Delete "${slug}"?`)) return;
    await fetch(`/api/blog/${slug}`, { method: "DELETE" });
    loadPosts();
  }

  function startNew() {
    setEditing({
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      author: "John Hanna",
      date: new Date().toISOString(),
      image: null,
      published: false,
    });
    setIsNew(true);
    setMessage("");
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black font-['Roboto',sans-serif]">
        <div className="w-full max-w-[380px] rounded-[12px] border border-[#C20000]/40 bg-[#111] p-[40px]">
          <div className="mb-[24px] flex justify-center">
            <Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="object-contain" unoptimized />
          </div>
          <h1 className="mb-[24px] text-center font-['Longhand'] text-[32px] font-bold text-white">Blog Admin</h1>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && password === ADMIN_PASSWORD && setAuthed(true)}
            className="mb-[12px] w-full rounded-[6px] border border-white/20 bg-black px-[16px] py-[12px] text-white placeholder-white/40 outline-none focus:border-[#C20000]"
          />
          <button
            onClick={() => { if (password === ADMIN_PASSWORD) setAuthed(true); else setMessage("Wrong password"); }}
            className="w-full rounded-[6px] bg-[#C20000] py-[12px] font-bold text-white hover:bg-[#a00000]"
          >
            Login
          </button>
          {message && <p className="mt-[10px] text-center text-[14px] text-red-400">{message}</p>}
        </div>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="min-h-screen bg-black font-['Roboto',sans-serif] px-[20px] py-[40px]">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-[24px] flex items-center justify-between">
            <h1 className="font-['Longhand'] text-[32px] font-bold text-white">{isNew ? "New Post" : "Edit Post"}</h1>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-white/60 hover:text-white">← Back</button>
          </div>

          {message && <p className="mb-[16px] rounded bg-[#C20000]/20 px-[16px] py-[10px] text-[14px] text-[#C20000]">{message}</p>}

          <div className="space-y-[16px]">
            <div>
              <label className="mb-[4px] block text-[13px] text-white/60">Title</label>
              <input
                value={editing.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setEditing({ ...editing, title, slug: isNew ? slugify(title) : editing.slug });
                }}
                className="w-full rounded-[6px] border border-white/20 bg-[#111] px-[16px] py-[12px] text-white outline-none focus:border-[#C20000]"
              />
            </div>

            <div>
              <label className="mb-[4px] block text-[13px] text-white/60">Slug</label>
              <input
                value={editing.slug}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="w-full rounded-[6px] border border-white/20 bg-[#111] px-[16px] py-[12px] text-white outline-none focus:border-[#C20000]"
              />
            </div>

            <div>
              <label className="mb-[4px] block text-[13px] text-white/60">Excerpt</label>
              <textarea
                value={editing.excerpt}
                onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                rows={2}
                className="w-full rounded-[6px] border border-white/20 bg-[#111] px-[16px] py-[12px] text-white outline-none focus:border-[#C20000]"
              />
            </div>

            <div>
              <label className="mb-[4px] block text-[13px] text-white/60">Author</label>
              <input
                value={editing.author}
                onChange={(e) => setEditing({ ...editing, author: e.target.value })}
                className="w-full rounded-[6px] border border-white/20 bg-[#111] px-[16px] py-[12px] text-white outline-none focus:border-[#C20000]"
              />
            </div>

            {/* AI Write Section */}
            <div className="rounded-[8px] border border-[#C20000]/30 bg-[#C20000]/10 p-[16px]">
              <p className="mb-[10px] text-[14px] font-bold text-[#C20000]">Write with AI (John Hanna voice)</p>
              <div className="flex gap-[8px]">
                <input
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="e.g. Why Sydney property prices will keep rising"
                  className="flex-1 rounded-[6px] border border-white/20 bg-black px-[14px] py-[10px] text-[14px] text-white outline-none focus:border-[#C20000]"
                />
                <button
                  onClick={handleAiWrite}
                  disabled={aiLoading}
                  className="rounded-[6px] bg-[#C20000] px-[20px] py-[10px] text-[14px] font-bold text-white hover:bg-[#a00000] disabled:opacity-50"
                >
                  {aiLoading ? "Writing..." : "Generate"}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-[4px] block text-[13px] text-white/60">Content (Markdown)</label>
              <textarea
                value={editing.content}
                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                rows={20}
                className="w-full rounded-[6px] border border-white/20 bg-[#111] px-[16px] py-[12px] font-mono text-[14px] text-white outline-none focus:border-[#C20000]"
              />
            </div>

            <div className="flex items-center gap-[12px]">
              <label className="text-[15px] text-white">Published</label>
              <button
                onClick={() => setEditing({ ...editing, published: !editing.published })}
                className={`relative h-[28px] w-[52px] rounded-full transition-all duration-300 ${editing.published ? "bg-[#C20000]" : "bg-white/20"}`}
              >
                <span className={`absolute top-[4px] h-[20px] w-[20px] rounded-full bg-white transition-all duration-300 ${editing.published ? "left-[28px]" : "left-[4px]"}`} />
              </button>
            </div>

            <div className="flex gap-[12px] pt-[8px]">
              <button onClick={handleSave} disabled={saving} className="rounded-[6px] bg-[#C20000] px-[32px] py-[14px] font-bold text-white hover:bg-[#a00000] disabled:opacity-50">
                {saving ? "Saving..." : "Save Post"}
              </button>
              <button onClick={() => { setEditing(null); setIsNew(false); }} className="rounded-[6px] border border-white/20 px-[24px] py-[14px] text-white hover:border-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-['Roboto',sans-serif] px-[20px] py-[40px]">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-[32px] flex items-center justify-between">
          <div>
            <h1 className="font-['Longhand'] text-[40px] font-bold text-white">Blog Admin</h1>
            <p className="text-[15px] text-white/50">{posts.length} published posts</p>
          </div>
          <div className="flex gap-[12px]">
            <a href="/our-blog" target="_blank" className="rounded-[6px] border border-white/20 px-[20px] py-[10px] text-[15px] text-white hover:border-white">View Blog</a>
            <button onClick={startNew} className="rounded-[6px] bg-[#C20000] px-[24px] py-[10px] text-[15px] font-bold text-white hover:bg-[#a00000]">+ New Post</button>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-[12px] border border-white/10 bg-[#111] p-[40px] text-center">
            <p className="text-[17px] text-white/50">No posts yet. Create your first post.</p>
          </div>
        ) : (
          <div className="space-y-[12px]">
            {posts.map((post) => (
              <div key={post.slug} className="flex items-center justify-between rounded-[8px] border border-white/10 bg-[#111] px-[20px] py-[16px]">
                <div>
                  <h3 className="text-[16px] font-semibold text-white">{post.title}</h3>
                  <p className="text-[13px] text-white/40">{post.slug} · {new Date(post.date).toLocaleDateString("en-AU")} · {post.published ? <span className="text-green-400">Published</span> : <span className="text-yellow-400">Draft</span>}</p>
                </div>
                <div className="flex gap-[8px]">
                  <button onClick={() => { setEditing(post); setIsNew(false); setMessage(""); }} className="rounded-[6px] border border-white/20 px-[14px] py-[8px] text-[14px] text-white hover:border-white">Edit</button>
                  <a href={`/our-blog/${post.slug}`} target="_blank" className="rounded-[6px] border border-[#C20000]/40 px-[14px] py-[8px] text-[14px] text-[#C20000] hover:border-[#C20000]">View</a>
                  <button onClick={() => handleDelete(post.slug)} className="rounded-[6px] border border-red-800/40 px-[14px] py-[8px] text-[14px] text-red-400 hover:border-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
