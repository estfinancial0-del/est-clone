import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

const navLinks = [
  { label: "About Us", href: "/about-est-financial" },
  { label: "Our Team", href: "/team" },
  { label: "Our Media", href: "/our-blog" },
  { label: "Success Stories", href: "/#reviews" },
  { label: "Services", href: "/services" },
];

function renderMarkdown(md: string): string {
  return md
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-white mb-4 font-[\'Longhand\']">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#C20000] mt-8 mb-3 font-[\'Longhand\']">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#C20000]">$1</strong>')
    .replace(/\n\n/g, '</p><p class="text-[17px] leading-[1.7] text-white/90 mb-4">')
    .replace(/^/, '<p class="text-[17px] leading-[1.7] text-white/90 mb-4">')
    .replace(/$/, '</p>');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const dateStr = new Date(post.date).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-['Roboto',sans-serif]">
      <nav className="sticky top-0 z-50 border-b-2 border-[#C20000] bg-black px-[10px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between py-[10px]">
          <a href="/" className="shrink-0">
            <Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="h-[47px] w-[109px] object-contain" unoptimized />
          </a>
          <div className="ml-auto hidden items-center gap-[2px] lg:flex">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="px-[20px] py-[13px] text-[20px] font-semibold text-white hover:text-[#C20000] transition-all duration-[400ms]">{label}</a>
            ))}
            <a href="/about-est-financial" className="ml-[8px] rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[18px] font-extrabold text-white hover:bg-white hover:text-[#E60000] transition-all duration-[400ms]">Free Consultation</a>
          </div>
        </div>
      </nav>

      <section className="bg-black px-[10px] py-[60px]">
        <div className="mx-auto max-w-[800px]">
          <a href="/our-blog" className="mb-[30px] inline-block text-[#C20000] hover:underline">← Back to Media</a>
          <h1 className="mb-[16px] font-['Longhand'] text-[46px] font-bold leading-[1.1] text-white max-md:text-[32px]">{post.title}</h1>
          <p className="mb-[8px] text-[15px] text-white/50">{dateStr} · By {post.author}</p>
          <hr className="mb-[40px] border-[#C20000]/30" />
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
        </div>
      </section>

      <footer className="bg-black px-[10px] py-[40px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-[30px] flex flex-wrap items-center justify-center gap-[8px] border-b border-white/20 pb-[20px] md:justify-between">
            <Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="h-[47px] w-[109px] object-contain" unoptimized />
            <div className="flex flex-wrap items-center gap-[4px]">
              {navLinks.map(({ label, href }) => (<a key={label} href={href} className="px-[12px] py-[8px] text-[16px] font-semibold text-white hover:text-[#C20000]">{label}</a>))}
              <a href="/about-est-financial" className="ml-[8px] rounded-[6px] bg-[#E60000] px-[20px] py-[10px] text-[16px] font-extrabold text-white hover:bg-white hover:text-[#E60000]">Free Consultation</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            <div className="flex flex-col gap-[8px]"><a href="/credit-guide" className="text-[17px] text-white hover:text-[#C20000]">Credit Guide</a><a href="/privacy-policy" className="text-[17px] text-white hover:text-[#C20000]">Privacy Policy</a></div>
            <div><h4 className="mb-[12px] text-[18px] font-semibold text-[#C20000]">HEAD OFFICE</h4><p className="text-[17px] text-white">Level 18, 1 Castlereagh St,<br />Sydney, NSW 2000</p></div>
            <div><h4 className="mb-[12px] text-[18px] font-semibold text-[#C20000]">CONTACT US</h4><a href="mailto:Enquiries@est.com.au" className="block text-[17px] text-white hover:text-[#C20000]">Enquiries@est.com.au</a><a href="tel:1300123378" className="block text-[17px] text-white hover:text-[#C20000]">1300 123 378</a></div>
          </div>
          <div className="mt-[30px] border-t border-white/20 pt-[20px]"><p className="text-[13px] font-semibold text-white/70">All strategies and information provided on this website are general advice only. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
