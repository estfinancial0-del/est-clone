"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// ============================================
// BLOG POSTS DATA
// ============================================
const blogPosts = [
  {
    title: "PPR vs Investment Property",
    date: "3 November 2025",
    slug: "ppr-vs-investment-property",
    link: "https://est.com.au/ppr-vs-investment-property/",
  },
  {
    title: "Fixed vs. Variable: The Ultimate Home Loan Showdown",
    date: "29 October 2025",
    slug: "fixed-vs-variable",
    link: "https://est.com.au/fixed-vs-variable/",
  },
  {
    title:
      "Navigate the Super Storm: What Jim Chalmers\u2019 Tax Overhaul Means for Your Wealth Journey",
    date: "16 October 2025",
    slug: "navigate-jim-chalmers-tax",
    link: "https://est.com.au/navigate-jim-chalmers-tax/",
  },
  {
    title:
      "From Credit Score to NSR: Navigating Sydney\u2019s Mortgage Landscape in 2025",
    date: "7 October 2025",
    slug: "from-credit-score-to-nsr",
    link: "https://est.com.au/from-credit-score-to-nsr-navigating-sydneys-mortgage-landscape-in-2025/",
  },
  {
    title: "Fast Track to Homeownership Trap from 5% Deposit Dream",
    date: "2 October 2025",
    slug: "fast-track-homeownership-trap",
    link: "https://est.com.au/fast-track-homeownership-trap/",
  },
  {
    title: "Why Emergency Funds Matter Before You Invest",
    date: "30 September 2025",
    slug: "why-emergency-funds-matter",
    link: "https://est.com.au/why-emergency-funds-matter/",
  },
  {
    title: "Steps to Navigate the Mortgage Maze for Your Dream Aussie Life",
    date: "25 September 2025",
    slug: "steps-navigate-mortgage-maze",
    link: "https://est.com.au/steps-navigate-mortgage-maze/",
  },
  {
    title: "Few Ways of Protecting Your Super in a Shifting Landscape",
    date: "23 September 2025",
    slug: "few-protecting-your-super",
    link: "https://est.com.au/few-protecting-your-super/",
  },
  {
    title:
      "Navigating the Economic Tides of Australia\u2019s Consumer Sentiment in Focus",
    date: "18 September 2025",
    slug: "navigating-the-consumer-sentiment-focus",
    link: "https://est.com.au/navigating-the-consumer-sentiment-focus/",
  },
];

// ============================================
// CASE STUDIES DATA
// ============================================
const caseStudies = [
  {
    title: "How we helped a high earner to accelerate his portfolio",
    date: "29 January 2026",
    link: "https://est.com.au/how-we-heeped-a-high-earner-to-accelerate-his-portfolio/",
  },
  {
    title:
      "From Valuation Shortfall to Settlement Success: The SMSF Property Reset that Cut Price, Debt and Repayments.",
    date: "4 November 2025",
    link: "https://est.com.au/from-valuation-shortfall-to-settlement-success-the-smsf-property-reset-that-cut-price-debt-and-repayments/",
  },
  {
    title:
      "How One Family Used Smart Debt Restructuring to Kickstart Their Investment Portfolio",
    date: "16 October 2025",
    link: "https://est.com.au/how-one-family-used-smart-debt-restructuring-to-kickstart-their-investment-portfolio/",
  },
  {
    title:
      "How EST Helped a Sydney Family Unlock $885K in Investment Potential Without Selling Their Home",
    date: "29 September 2025",
    link: "https://est.com.au/a-sydney-family-unlock-885k/",
  },
];

// ============================================
// YOUTUBE VIDEOS DATA
// ============================================
const youtubeVideos = [
  { id: "m3NJxzdXJKA" },
  { id: "yZ-O9CEi5SI" },
  { id: "46EXYUH3eRA" },
];

// ============================================
// SORT HELPER
// ============================================
function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

export default function OurBlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");

  const navLinks = [
    "About Us",
    "Our Team",
    "Our Media",
    "Success Stories",
    "Services",
  ];

  const sortedPosts = useMemo(() => {
    const sorted = [...blogPosts];
    switch (sortOrder) {
      case "newest":
        sorted.sort(
          (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
        );
        break;
      case "oldest":
        sorted.sort(
          (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
        );
        break;
      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    return sorted;
  }, [sortOrder]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-['Roboto',sans-serif]">
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <nav className="sticky top-0 z-50 border-b-2 border-[#C20000] bg-[#000000] px-[10px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between py-[10px]">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/images/logo.webp"
              alt="est Financial"
              width={109}
              height={47}
              className="h-[47px] w-[109px] object-contain"
              unoptimized
            />
          </a>

          {/* Desktop Nav Links - grouped to the right */}
          <div className="ml-auto hidden items-center gap-[2px] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === "Our Media" ? "/clone/our-blog" : "#"}
                className={`px-[20px] py-[13px] text-[24px] font-semibold leading-[20px] transition-all duration-[400ms] ${
                  link === "Our Media"
                    ? "rounded-full bg-[#E60000] text-white hover:bg-white hover:text-[#E60000]"
                    : "text-white hover:text-[#C20000]"
                }`}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="ml-[8px] rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[22px] font-extrabold leading-[22px] text-white transition-all duration-[400ms] hover:bg-white hover:text-[#E60000]"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src={
                mobileMenuOpen ? "/icons/icon-close.svg" : "/icons/icon-menu.svg"
              }
              alt=""
              width={30}
              height={30}
              className="h-[30px] w-[30px] invert"
              unoptimized
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-black lg:hidden"
            >
              <div className="flex flex-col px-[20px] py-[20px]">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={link === "Our Media" ? "/clone/our-blog" : "#"}
                    className="border-b border-white/20 py-[13px] text-[24px] font-medium leading-[20px] text-white transition-all duration-[400ms] hover:text-[#C20000]"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#"
                  className="mt-[16px] self-start rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[22px] font-extrabold leading-[22px] text-white transition-all duration-[400ms] hover:bg-white hover:text-[#E60000]"
                >
                  Free Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============================================
          HERO / BLOG INTRO SECTION
          ============================================ */}
      <section className="bg-black px-[10px] pb-[40px] pt-[60px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-['Longhand'] text-[60px] font-bold leading-[1.2] text-white md:text-[70px]"
          >
            New<span className="text-[#C20000]">est</span> Media Post
          </motion.h2>
        </div>
      </section>

      {/* ============================================
          BLOG POSTS SECTION
          ============================================ */}
      <section className="bg-white px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-[30px] text-center font-['Longhand'] text-[36px] font-bold text-[#3D3A34]"
          >
            Blog Posts
          </motion.h2>

          {/* Sort / Filter */}
          <div className="mb-[30px] flex flex-wrap items-end gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] text-[#3D3A34]">Sort</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="min-w-[180px] rounded-[6px] border-2 border-black bg-white px-[12px] py-[10px] text-[14px] text-black"
              >
                <option value="newest">Newest &rarr; Oldest</option>
                <option value="oldest">Oldest &rarr; Newest</option>
                <option value="az">A &rarr; Z</option>
                <option value="za">Z &rarr; A</option>
              </select>
            </div>
            <button
              onClick={() => setSortOrder("newest")}
              className="rounded-[8px] bg-[#C20000] px-[16px] py-[10px] text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#a00000]"
            >
              Apply
            </button>
          </div>

          {/* Blog Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3"
          >
            {sortedPosts.map((post, i) => (
              <motion.a
                key={post.slug}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-[4px] border-[3px] border-[#ddd] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:border-[#999] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Thumbnail Placeholder - grey box matching screenshot */}
                <div className="aspect-[16/9] w-full bg-[#e0e0e0]" />

                {/* Card Content */}
                <div className="flex flex-1 flex-col items-center px-[20px] py-[20px] text-center">
                  <h3 className="mb-[12px] text-[20px] font-bold leading-[1.3] text-[#C20000]">
                    {post.title}
                  </h3>
                  <p className="mb-[16px] text-[14px] font-semibold tracking-[0.5px] text-[#3D3A34]">
                    READ MORE &raquo;
                  </p>
                </div>

                {/* Date & Comments Footer */}
                <div className="border-t border-[#eee] px-[20px] py-[12px]">
                  <p className="font-['Longhand'] text-[14px] font-normal italic text-[#69727D]">
                    {post.date} &bull; No Comments
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SOCIALS POSTS / YOUTUBE SECTION
          ============================================ */}
      <section className="bg-black px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-[40px] text-center font-['Longhand'] text-[36px] font-bold text-white"
          >
            Socials Posts
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 gap-[24px] md:grid-cols-3"
          >
            {youtubeVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative aspect-video w-full overflow-hidden rounded-[4px] bg-[#1a1a1a]"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CASE STUDIES SECTION
          ============================================ */}
      <section className="bg-white px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-[40px] text-center font-['Longhand'] text-[36px] font-bold text-[#3D3A34]"
          >
            Case Studies
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudies.map((study) => (
              <motion.a
                key={study.link}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-[4px] border-[3px] border-[#ddd] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:border-[#999] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Thumbnail Placeholder */}
                <div className="aspect-[16/9] w-full bg-[#e0e0e0]" />

                {/* Card Content */}
                <div className="flex flex-1 flex-col items-center px-[20px] py-[20px] text-center">
                  <h3 className="mb-[12px] text-[18px] font-bold leading-[1.3] text-[#C20000]">
                    {study.title}
                  </h3>
                  <p className="mb-[8px] text-[14px] font-semibold tracking-[0.5px] text-[#3D3A34]">
                    READ MORE &raquo;
                  </p>
                </div>

                {/* Date Footer */}
                <div className="border-t border-[#eee] px-[20px] py-[12px]">
                  <p className="font-['Longhand'] text-[14px] font-normal italic text-[#69727D]">
                    {study.date} &bull; No Comments
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-black px-[10px] py-[40px]">
        <div className="mx-auto max-w-[1240px]">
          {/* Footer Nav Links */}
          <div className="mb-[30px] flex flex-wrap items-center justify-center gap-[8px] border-b border-white/20 pb-[20px] md:justify-between">
            <Image
              src="/images/logo.webp"
              alt="est Financial"
              width={109}
              height={47}
              className="h-[47px] w-[109px] object-contain"
              unoptimized
            />
            <div className="flex flex-wrap items-center gap-[4px]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-[12px] py-[8px] text-[16px] font-semibold leading-[20px] text-white transition-all duration-[400ms] hover:text-[#C20000]"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="ml-[8px] rounded-[6px] bg-[#E60000] px-[20px] py-[10px] text-[16px] font-extrabold leading-[16px] text-white transition-all duration-[400ms] hover:bg-white hover:text-[#E60000]"
              >
                Free Consultation
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            {/* Column 1 - Logo & Links */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <a
                  href="#"
                  className="text-[17px] font-normal leading-[21px] text-white hover:text-[#C20000]"
                >
                  Credit Guide
                </a>
                <a
                  href="#"
                  className="text-[17px] font-normal leading-[21px] text-white hover:text-[#C20000]"
                >
                  Privacy Policy
                </a>
              </div>

              {/* Social Icons */}
              <div className="mt-[8px] flex gap-[10px]">
                {[
                  { icon: "/icons/icon-facebook.svg", label: "Facebook" },
                  { icon: "/icons/icon-youtube.svg", label: "YouTube" },
                  { icon: "/icons/icon-instagram.svg", label: "Instagram" },
                  { icon: "/icons/icon-tiktok.svg", label: "TikTok" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#C20000] transition-all duration-300 hover:opacity-80"
                    aria-label={social.label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={social.icon}
                      alt=""
                      className="h-[18px] w-[18px] brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Head Office */}
            <div>
              <h4 className="mb-[12px] text-[18px] font-semibold leading-[18px] text-[#C20000]">
                HEAD OFFICE
              </h4>
              <p className="text-[17px] font-normal leading-[21px] text-white">
                Level 18, 1 Castlereagh St,
                <br />
                Sydney, NSW 2000
              </p>
            </div>

            {/* Column 3 - Contact Us */}
            <div>
              <h4 className="mb-[12px] text-[18px] font-semibold leading-[18px] text-[#C20000]">
                CONTACT US
              </h4>
              <div className="flex flex-col gap-[4px]">
                <a
                  href="mailto:Enquiries@est.com.au"
                  className="text-[17px] font-normal leading-[21px] text-white hover:text-[#C20000]"
                >
                  Enquiries@est.com.au
                </a>
                <a
                  href="tel:1300123378"
                  className="text-[17px] font-normal leading-[21px] text-white hover:text-[#C20000]"
                >
                  1300 123 378
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-[30px] border-t border-white/20 pt-[20px]">
            <p className="text-[13px] font-semibold leading-[18px] text-white/70">
              All strategies and information provided on this website are general
              advice only and does not take into consideration any of your
              personal circumstances. Please arrange an appointment to seek
              personal financial and taxation advice prior to acting on this
              information. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799
              850. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
