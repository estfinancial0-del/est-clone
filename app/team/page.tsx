"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// ============================================
// TEAM MEMBER DATA
// ============================================
const teamMembers = [
  {
    name: "Paul Hanna",
    title: "Chief Executive Officer",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/untitled-design-4-2.webp",
  },
  {
    name: "Victoria Holsten",
    title: "Client Relationship Manager",
    image:
      "https://est.com.au/wp-content/uploads/2025/10/untitled-design-13.webp",
  },
  {
    name: "Raphael Bove",
    title: "Senior Strategist",
    image: "https://est.com.au/wp-content/uploads/2025/09/8.webp",
  },
  {
    name: "Samuel Hanna",
    title: "Operations Manager",
    image: "https://est.com.au/wp-content/uploads/2025/09/4-1.webp",
  },
  {
    name: "Cassandra Hanna",
    title: "QLD General Manager",
    image:
      "https://est.com.au/wp-content/uploads/2025/03/19-1-e1757632539343.webp",
  },
  {
    name: "Chris Vaughan",
    title: "Senior Strategist",
    image:
      "https://est.com.au/wp-content/uploads/2025/10/untitled-design-11.webp",
  },
  {
    name: "Michael Gee",
    title: "Head of Finance",
    image: "https://est.com.au/wp-content/uploads/2025/09/9-1.webp",
  },
  {
    name: "Dominic Carbone",
    title: "Head of Law",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/untitled-design-5.webp",
  },
  {
    name: "James Peach",
    title: "Asset Acquisition Manager",
    image:
      "https://est.com.au/wp-content/uploads/2025/10/untitled-design-7.webp",
  },
  {
    name: "Hans Schmid",
    title: "Marketing Strategist",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/untitled-design-4.webp",
  },
  {
    name: "Justin Immanuelle",
    title: "Digital Media Designer",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/marketing-manger-justin-imanuelle-1.webp",
  },
  {
    name: "Simon Liddle",
    title: "Financial Advisor",
    image: "https://est.com.au/wp-content/uploads/2025/09/6.webp",
  },
  {
    name: "Jim Calagis",
    title: "Financial Needs Analyst",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/financial-needs-analysis-consultant-jim-calagis.webp",
  },
  {
    name: "Caitlin Sager",
    title: "Paralegal",
    image: "https://est.com.au/wp-content/uploads/2025/03/14-2.webp",
  },
  {
    name: "Martin Fiay",
    title: "Sales Specialist",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/untitled-design-3.webp",
  },
  {
    name: "Karim Hallal",
    title: "Broker Assistant",
    image:
      "https://est.com.au/wp-content/uploads/2025/09/karim-hallal-1.webp",
  },
  {
    name: "Umar Khan",
    title: "Financial Needs Analyst",
    image:
      "https://est.com.au/wp-content/uploads/2025/10/untitled-design-5.webp",
  },
];

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about-est-financial" },
    { label: "Our Team", href: "/team" },
    { label: "Our Media", href: "/our-blog" },
    { label: "Success Stories", href: "/#reviews" },
    { label: "Services", href: "/services" },
  ];

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
                href={link === "Our Team" ? "/clone/team" : "#"}
                className={`px-[20px] py-[13px] text-[24px] font-semibold leading-[20px] transition-all duration-[400ms] ${
                  link === "Our Team"
                    ? "border border-[#C20000] text-[#C20000]"
                    : "text-white hover:text-[#C20000]"
                }`}
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
              src={
                mobileMenuOpen
                  ? "/icons/icon-close.svg"
                  : "/icons/icon-menu.svg"
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
                {navLinks.map(({ label: link, href: linkHref }) => (
                  <a
                    key={link}
                    href={link === "Our Team" ? "/clone/team" : "#"}
                    className={`border-b border-white/20 py-[13px] text-[24px] font-medium leading-[20px] transition-all duration-[400ms] ${
                      link === "Our Team"
                        ? "text-[#C20000]"
                        : "text-white hover:text-[#C20000]"
                    }`}
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
          HERO / TEAM INTRO SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] pb-[40px] pt-[60px]">
        <div className="mx-auto max-w-[1240px] text-center">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-[30px] font-['Longhand'] text-[63px] font-bold leading-[63px] text-white max-md:text-[40px] max-md:leading-[42px]"
          >
            Our Team
          </motion.h1>

          {/* Decorative Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-[30px] flex justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/arrow.svg"
              alt=""
              className="h-[40px] w-[40px]"
            />
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-[800px] text-[16px] font-normal leading-[22.4px] text-white"
          >
            At{" "}
            <span className="text-[#C20000] font-semibold">est</span>, we
            bring the right people together. Investment specialists, mortgage
            experts, property advisors, and a team who keeps things moving.
            We&apos;re more than just advisors. We work together as your
            strategy team, focused on helping you make smart, practical moves
            that actually lead somewhere. We focus on the essentials, making
            sure your plans stay on track and everything&apos;s taken care of.
          </motion.p>
        </div>
      </section>

      {/* ============================================
          TEAM MEMBERS GRID
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] pb-[80px] pt-[40px]"
        style={{
          backgroundImage:
            "url(/images/wave-graphics-03-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden bg-white"
              >
                {/* Member Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Member Info */}
                <div className="bg-white px-[20px] py-[14px]">
                  <h3 className="font-['Longhand'] text-[20px] font-bold leading-[26px] text-[#333333]">
                    {member.name}
                  </h3>
                  <p className="mt-[2px] font-['Longhand'] text-[16px] font-normal leading-[22px] text-[#C20000]">
                    {member.title}
                  </p>
                </div>
              </motion.div>
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
              {navLinks.map(({ label: link, href: linkHref }) => (
                <a
                  key={link}
                  href={linkHref}
                  className="px-[12px] py-[8px] text-[16px] font-semibold leading-[20px] text-white transition-all duration-[400ms] hover:text-[#C20000]"
                >
                  {link}
                </a>
              ))}
              <a
                href="/about-est-financial"
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
