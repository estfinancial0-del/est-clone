"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

// ============================================
// SERVICE STEPS DATA
// ============================================
const serviceSteps = [
  {
    title: "Finance & Mortgage Broking",
    description:
      "We don\u2019t just organise loans, we structure smart finance that works with your bigger picture, not against it.",
    image: "/images/service-finance.webp",
    alt: "Finance & Mortgage Broking",
    href: "/finance-mortgage-broking",
  },
  {
    title: "Investment Acquisition",
    description:
      "We help you find, assess and secure quality investments that fit your goals, not just what\u2019s available, but what\u2019s right.",
    image: "/images/service-investment.webp",
    alt: "Investment Acquisition",
    href: "/investment-acquisition",
  },
  {
    title: "Asset Management",
    description:
      "Managing your portfolio isn\u2019t a task, it\u2019s a strategy. We work to grow your assets while protecting what matters most.",
    image: "/images/service-asset.webp",
    alt: "Asset Management",
    href: "/asset-management",
  },
  {
    title: "Legal Services",
    description:
      "Our legal partners keep your path clear, from contracts to settlements, so you can move forward with confidence.",
    image: "/images/service-legal.webp",
    alt: "Legal Services",
    href: "/legal-services-2",
  },
  {
    title: "Tax Accounting",
    description:
      "We simplify the complex, giving you tax strategies that make sense, save money and support your broader plan.",
    image: "/images/service-tax.webp",
    alt: "Tax Accounting",
    href: "/tax-services",
  },
  {
    title: "Financial Planning",
    description:
      "We don\u2019t just give advice, we walk with you. At every life stage, we build strategies that actually mean something.",
    image: "/images/service-financial.webp",
    alt: "Financial Planning",
    href: "/financial-services",
  },
];

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "About Us", href: "/about-est-financial" },
    { label: "Our Team", href: "/team" },
    { label: "Our Media", href: "/our-blog" },
    { label: "Success Stories", href: "/#reviews" },
    { label: "Services", href: "/services" },
  ];

  // Scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
            {navLinks.map(({ label: link, href: linkHref }) => (
              <a
                key={link}
                href={linkHref}
                className="px-[20px] py-[13px] text-[24px] font-semibold leading-[20px] text-white transition-all duration-[400ms] hover:text-[#C20000]"
              >
                {link}
              </a>
            ))}
            <a
              href="/about-est-financial"
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
              src={mobileMenuOpen ? "/icons/icon-close.svg" : "/icons/icon-menu.svg"}
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
                {navLinks.map(({ label: link, href: linkHref }) => (
                  <a
                    key={link}
                    href={linkHref}
                    className="border-b border-white/20 py-[13px] text-[24px] font-medium leading-[20px] text-white transition-all duration-[400ms] hover:text-[#C20000]"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="/about-est-financial"
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
          HERO SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] pb-[10px] pt-[40px]">
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-['Longhand'] text-[60px] font-bold leading-[60px] text-white max-md:text-[40px] max-md:leading-[42px]"
          >
            Services
          </motion.h2>
          {/* Arrow icon */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-[12px] flex justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/arrow.svg"
              alt="arrow"
              className="h-[40px] w-[40px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SERVICES TIMELINE SECTION
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] pb-[160px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-03-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div
          ref={wrapRef}
          className="relative mx-auto max-w-[1100px] px-[24px] pt-[80px] max-md:px-[16px]"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-[calc(24px+60px)] top-[80px] bottom-[0px] w-[2px] max-md:left-[calc(16px+45px)] max-sm:hidden">
            {/* Dashed background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.18) 0 10px, transparent 10px 20px)",
              }}
            />
            {/* Animated red progress */}
            <motion.div
              className="absolute left-0 top-0 w-full bg-[#e53323]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Service Steps */}
          <div className="flex flex-col gap-[88px] max-md:gap-[64px]">
            {serviceSteps.map((step, index) => (
              <motion.a
                key={step.title}
                href={step.href}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex items-start gap-[20px] max-md:gap-[16px] max-sm:gap-[0px]"
              >
                {/* Dot on the timeline */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    duration: 0.4,
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: 0.1,
                  }}
                  className="absolute left-[60px] top-[50%] z-[1] h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#e53323] bg-black max-md:left-[45px] max-sm:hidden"
                />

                {/* Circular Thumbnail */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full border-[4px] border-[#e53323] bg-[#111] max-md:h-[90px] max-md:w-[90px] max-sm:hidden"
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex-1 rounded-[40px] bg-[#e53323] px-[32px] py-[28px] text-white transition-all duration-300 group-hover:bg-[#cc2e20] max-md:rounded-[32px] max-md:px-[22px] max-md:py-[22px]"
                >
                  <h2 className="mb-[10px] font-['Arial',sans-serif] text-[32px] font-bold uppercase leading-[1.2] tracking-[0.05em] max-md:text-[24px]">
                    {step.title}
                  </h2>
                  <p className="text-[20px] leading-[1.55] max-md:text-[16px]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-black px-[10px] py-[40px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-[30px] border-b border-white/20 pb-[20px]">
            <Image
              src="/images/logo.webp"
              alt="est Financial"
              width={109}
              height={47}
              className="h-[47px] w-[109px] object-contain"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
            {/* Column 1 - Logo & Links */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <a
                  href="/credit-guide"
                  className="text-[17px] font-normal leading-[21px] text-white hover:text-[#C20000]"
                >
                  Credit Guide
                </a>
                <a
                  href="/privacy-policy"
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
