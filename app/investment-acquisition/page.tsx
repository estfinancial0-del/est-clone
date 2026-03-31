"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function InvestmentAcquisitionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about-est-financial" },
    { label: "Our Team", href: "/team" },
    { label: "Our Media", href: "/our-blog" },
    { label: "Success Stories", href: "/#reviews" },
    { label: "Services", href: "/services" },
  ];

  const formula = [
    { num: "01", title: "Mindset", desc: "Build the right financial mindset to make smart, confident decisions about your money and investments." },
    { num: "02", title: "Income", desc: "Maximise your income streams through strategic career moves, side income, and passive revenue channels." },
    { num: "03", title: "Debt", desc: "Use debt strategically — eliminate bad debt fast and leverage good debt to build wealth." },
    { num: "04", title: "Assets", desc: "Acquire high-quality assets that grow in value and generate income, including property and equities." },
    { num: "05", title: "Freedom", desc: "Reach a point where your assets work for you — financial independence on your own timeline." },
  ];

  const criteria = [
    "Location & suburb growth trajectory", "Infrastructure & development pipeline",
    "Rental yield vs capital growth balance", "Property condition & maintenance history",
    "Vacancy rates & tenant demand", "Comparable sales data",
    "Legal & title due diligence", "Exit strategy viability",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-['Roboto',sans-serif]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b-2 border-[#C20000] bg-black px-[10px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between py-[10px]">
          <a href="/" className="shrink-0"><Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="h-[47px] w-[109px] object-contain" unoptimized /></a>
          <div className="ml-auto hidden items-center gap-[2px] lg:flex">
            {navLinks.map(({ label: link, href: linkHref }) => (
              <a key={link} href={linkHref} className="px-[20px] py-[13px] text-[20px] font-semibold text-white transition-all duration-[400ms] hover:text-[#C20000]">{link}</a>
            ))}
            <a href="/about-est-financial" className="ml-[8px] rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[18px] font-extrabold text-white hover:bg-white hover:text-[#E60000] transition-all duration-[400ms]">Free Consultation</a>
          </div>
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Image src={mobileMenuOpen ? "/icons/icon-close.svg" : "/icons/icon-menu.svg"} alt="" width={30} height={30} className="h-[30px] w-[30px] invert" unoptimized /></button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden bg-black lg:hidden">
              <div className="flex flex-col px-[20px] py-[20px]">
                {navLinks.map(({ label: link, href: linkHref }) => (<a key={link} href={linkHref} className="border-b border-white/20 py-[13px] text-[20px] font-medium text-white hover:text-[#C20000]">{link}</a>))}
                <a href="/about-est-financial" className="mt-[16px] self-start rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[18px] font-extrabold text-white">Free Consultation</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-black px-[10px] py-[80px]">
        <div className="absolute inset-0">
          <Image src="/images/service-investment.webp" alt="" fill className="object-cover object-center opacity-25" unoptimized />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-[900px] text-center">
          <h1 className="mb-[20px] font-['Longhand'] text-[63px] font-bold leading-[1.1] text-white max-md:text-[40px]">
            Investment <span className="text-[#C20000]">Acquisition</span>
          </h1>
          <p className="text-[20px] leading-[1.6] text-white/80">More Than Advice. A Lifetime Strategy with <span className="text-[#C20000]">est</span>.</p>
          <Image src="/images/arrow.svg" alt="" width={60} height={30} className="mx-auto mt-[20px] brightness-0 invert" unoptimized />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="bg-black px-[10px] py-[70px]">
        <div className="mx-auto max-w-[900px]">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-[24px] text-[18px] leading-[1.7] text-white/90">
            Choosing the right investment property is one of the most important financial decisions you'll ever make. At <span className="text-[#C20000] font-semibold">est</span>, we don't just point you toward a property — we guide you through a rigorous, data-driven process to identify assets that align with your goals and timeline.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="text-[18px] leading-[1.7] text-white/90">
            The <span className="text-[#C20000] font-semibold">est 8-Step Property Selection Criteria</span> provides a comprehensive foundation for every investment recommendation we make, designed to assess not just the location, but the full opportunity.
          </motion.p>
        </div>
      </section>

      {/* 8-STEP CRITERIA */}
      <section className="bg-[#0a0a0a] px-[10px] py-[70px]">
        <div className="mx-auto max-w-[1100px]">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-[40px] text-center font-['Longhand'] text-[46px] font-bold text-white max-md:text-[32px]">
            The <span className="text-[#C20000]">8-Step</span> Property Selection Criteria
          </motion.h2>
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
            {criteria.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
                className="flex items-start gap-[14px] rounded-[8px] border border-white/10 bg-white/5 p-[20px]">
                <span className="mt-[2px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#C20000] text-[13px] font-bold text-white">{i + 1}</span>
                <p className="text-[16px] leading-[1.5] text-white/90">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIAL FREEDOM FORMULA */}
      <section className="relative px-[10px] py-[80px]" style={{ backgroundImage: "url('/images/wave-graphics-02-2880x1800.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-[12px] text-center font-['Longhand'] text-[46px] font-bold text-white max-md:text-[32px]">
            The <span className="text-[#C20000]">5</span> Financial Freedom Formula
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="mb-[50px] text-center text-[17px] text-white/70">
            A simple framework to help everyday Australians take control of their finances.
          </motion.p>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-5">
            {formula.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="flex flex-col items-center rounded-[12px] border border-[#C20000]/40 bg-black/60 p-[24px] text-center">
                <span className="mb-[10px] font-['Longhand'] text-[40px] font-bold text-[#C20000]">{item.num}</span>
                <h3 className="mb-[8px] font-['Longhand'] text-[22px] font-bold text-white">{item.title}</h3>
                <p className="text-[14px] leading-[1.5] text-white/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-[10px] py-[80px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2 className="mb-[20px] font-['Longhand'] text-[48px] font-bold text-white max-md:text-[32px]">Start Your Investment <span className="text-[#C20000]">Journey</span></h2>
          <p className="mx-auto mb-[40px] max-w-[600px] text-[18px] leading-[1.7] text-white/80">Book a free session and let est help you build a property portfolio that works for your future.</p>
          <a href="/about-est-financial" className="inline-block rounded-full border-[3px] border-[#C20000] bg-[#C20000] px-[50px] py-[16px] text-[20px] font-bold text-white transition-all duration-300 hover:bg-transparent">Book Free Consultation</a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-[10px] py-[40px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-[30px] border-b border-white/20 pb-[20px]">
            <Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="h-[47px] w-[109px] object-contain" unoptimized />
          </div>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <a href="/credit-guide" className="text-[17px] text-white hover:text-[#C20000]">Credit Guide</a>
                <a href="/privacy-policy" className="text-[17px] text-white hover:text-[#C20000]">Privacy Policy</a>
              </div>
              <div className="flex gap-[10px]">
                {[{ icon: "/icons/icon-facebook.svg", label: "Facebook" }, { icon: "/icons/icon-youtube.svg", label: "YouTube" }, { icon: "/icons/icon-instagram.svg", label: "Instagram" }, { icon: "/icons/icon-tiktok.svg", label: "TikTok" }].map((s) => (
                  <a key={s.label} href="#" className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#C20000] hover:opacity-80" aria-label={s.label}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt="" className="h-[18px] w-[18px] brightness-0 invert" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-[12px] text-[18px] font-semibold text-[#C20000]">HEAD OFFICE</h4>
              <p className="text-[17px] text-white">Level 18, 1 Castlereagh St,<br />Sydney, NSW 2000</p>
            </div>
            <div>
              <h4 className="mb-[12px] text-[18px] font-semibold text-[#C20000]">CONTACT US</h4>
              <a href="mailto:Enquiries@est.com.au" className="block text-[17px] text-white hover:text-[#C20000]">Enquiries@est.com.au</a>
              <a href="tel:1300123378" className="block text-[17px] text-white hover:text-[#C20000]">1300 123 378</a>
            </div>
          </div>
          <div className="mt-[30px] border-t border-white/20 pt-[20px]">
            <p className="text-[13px] font-semibold text-white/70">All strategies and information provided on this website are general advice only. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
