"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function AboutEstFinancialPage() {
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
          HERO SECTION - "About est"
          ============================================ */}
      <section className="relative bg-[#000000] px-[10px] pb-[40px] pt-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-[1240px] text-center"
        >
          <h1 className="mb-[16px] font-['Longhand'] text-[70px] font-bold leading-[70px] text-white max-md:text-[50px] max-md:leading-[52px]">
            About <span className="text-[#C20000]">est</span>
          </h1>

          {/* Red chevron decorative element */}
          <div className="mb-[30px] flex justify-center">
            <span className="text-[28px] font-bold text-[#C20000]">&raquo;</span>
          </div>
        </motion.div>

        {/* Philosophy paragraphs on black background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-[1240px] px-[20px]"
        >
          <div className="space-y-[20px] text-[16px] font-normal leading-[22.4px] text-white">
            <p>
              At <span className="font-bold text-[#C20000]">est</span>, we don&apos;t just manage money, we manage meaning. We understand that your financial life isn&apos;t separate from your real life. It&apos;s deeply connected to your choices, your emotions, your fears, and your dreams. That&apos;s why we don&apos;t see what we do as a single transaction or a one-time event. For us, it&apos;s a lifelong relationship built on trust, honesty, and shared growth. We walk beside you, not in front of you, not behind you, but with you through every season of your life.
            </p>

            <p>
              We know that behind every financial goal is a deeper story: a family trying to find stability, an individual chasing freedom, a couple building a legacy. And we know that most people don&apos;t just need spreadsheets and statements, they need someone who truly listens. Someone who gets how overwhelming, frustrating, and even isolating financial stress can feel. That&apos;s why we take the time to understand your journey, not just your numbers.
            </p>

            <p>
              We&apos;re here to ask better questions. What&apos;s really holding you back? What&apos;s keeping you up at night? What would your life look like if money wasn&apos;t a source of stress, but a tool for clarity, choice, and confidence? That&apos;s where we come in.
            </p>

            <p>
              <span className="font-bold text-[#C20000]">est</span> was built to be the financial services company that changes lives, not just balances. We offer real, practical solutions tailored to your unique challenges, whether that means reducing your debt, improving your tax position, growing your investments, or simply regaining a sense of control. We treat your goals with the same seriousness and care as we treat our own.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          "BECAUSE WHEN YOU WIN, WE WIN" QUOTE
          ============================================ */}
      <section className="bg-[#000000] px-[10px] pb-[20px] pt-[30px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] text-center"
        >
          <h2 className="font-['Longhand'] text-[48px] font-bold leading-[50px] text-[#C20000] max-md:text-[32px] max-md:leading-[36px]">
            Because when you win, we win.
          </h2>
        </motion.div>
      </section>

      {/* ============================================
          CONSULTATION IMAGE SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] pb-[40px] pt-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px]"
        >
          <Image
            src="/images/content-running.webp"
            alt="Financial consultation meeting"
            width={1240}
            height={600}
            className="h-auto w-full"
            unoptimized
          />
        </motion.div>
      </section>

      {/* ============================================
          MEAL ANALOGY SECTION (BLACK BACKGROUND)
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] py-[60px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-02-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-[20px]"
        >
          <div className="space-y-[20px] text-[16px] font-normal leading-[22.4px] text-white">
            <p>
              Choosing financial advice is a lot like choosing a meal. On the surface it might seem like it just needs to be &ldquo;good enough&rdquo;, but the truth is the quality of what you consume, whether it&apos;s food or financial guidance, directly affects how you feel, how you function, and how your future looks.
            </p>

            <p>
              It&apos;s a meaningful? Think of it this way: you wouldn&apos;t eat something that makes you feel sluggish, bloated, or anxious. So why would you accept financial advice that leaves you confused, stressed, or worse off? Good financial advice, like a good meal, should nourish you. It should give you energy, clarity, and confidence to move forward. And most importantly, it should be prepared with care, using the best ingredients, by someone who genuinely wants you to thrive.
            </p>

            <p>
              At <span className="font-bold text-[#C20000]">est</span>, we don&apos;t do fast food finance. We don&apos;t believe in one-size-fits-all solutions or cookie-cutter strategies. We take the time to understand your unique taste, your appetite for risk, and your long-term goals before we serve anything up. Because just like the best chefs, we know that what works for one person may not suit another.
            </p>

            <p>
              Beyond the meal itself, it&apos;s about how it&apos;s delivered. We believe in raw, authentic service, no hidden fees, no fine print surprises, no unnecessary complexity. We keep things simple, transparent, and honest, because that&apos;s how trust is built. And trust, once earned, is what turns a one-time client into a lifelong relationship.
            </p>

            <p>
              We&apos;re not just about transactions, we&apos;re about transformation. We want you to walk away from every interaction with us feeling lighter, more informed, and more empowered. Whether it&apos;s helping you pay off debt faster, grow your investments smarter, or simply reduce the mental load of managing your finances, everything we do is designed to move you forward.
            </p>

            <p>
              Reputation matters to us, deeply. We don&apos;t just want satisfied clients. We want clients who genuinely feel the difference. Clients who refer us to their friends and family, not because we asked, but because they want to. That kind of loyalty isn&apos;t bought, it&apos;s earned. And it&apos;s earned through consistent, high-quality, deeply personal financial guidance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          TEAM HANDS IMAGE SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] pb-[40px] pt-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px]"
        >
          <Image
            src="/images/content-family.webp"
            alt="Team hands together in unity"
            width={1240}
            height={600}
            className="h-auto w-full"
            unoptimized
          />
        </motion.div>
      </section>

      {/* ============================================
          CLOSING PHILOSOPHY + INTEGRITY QUOTE
          ============================================ */}
      <section className="bg-[#000000] px-[10px] py-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-[20px]"
        >
          <div className="space-y-[20px] text-[16px] font-normal leading-[22.4px] text-white">
            <p>
              At <span className="font-bold text-[#C20000]">est</span>, we&apos;re not just in this for the numbers. We&apos;re here about the stories behind them, about the lives we help shape, and about the trust you place in us to do the right thing. Your financial decisions should feel secure, smart, and aligned with your values, and that&apos;s exactly what we deliver.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-[30px] text-center"
          >
            <h2 className="font-['Longhand'] text-[42px] font-bold italic leading-[46px] text-[#C20000] max-md:text-[28px] max-md:leading-[32px]">
              That&apos;s what it means for us to serve with integrity and heart.
            </h2>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          YOUR JOURNEY WITH US SECTION
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] py-[80px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-03-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] text-center"
        >
          <h2 className="mb-[60px] font-['Longhand'] text-[60px] font-bold leading-[60px] text-white max-md:text-[42px] max-md:leading-[44px]">
            Your Journey with Us
          </h2>
        </motion.div>

        {/* Three-step journey */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[40px] px-[20px] md:grid-cols-3"
        >
          {/* Step 1 - Book */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#C20000]">
              <span className="text-[24px] font-bold text-[#C20000]">1</span>
            </div>
            <h3 className="mb-[12px] font-['Longhand'] text-[36px] font-bold leading-[38px] text-[#C20000]">
              Book
            </h3>
            <p className="text-[16px] font-normal leading-[22.4px] text-white">
              Book a free consultation with our friendly team. No pressure, no obligation, just a conversation about your goals.
            </p>
          </motion.div>

          {/* Step 2 - Discuss */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#C20000]">
              <span className="text-[24px] font-bold text-[#C20000]">2</span>
            </div>
            <h3 className="mb-[12px] font-['Longhand'] text-[36px] font-bold leading-[38px] text-[#C20000]">
              Discuss
            </h3>
            <p className="text-[16px] font-normal leading-[22.4px] text-white">
              Share your goals with our team and we&apos;ll assess the best way to support you. We listen first, advise second.
            </p>
          </motion.div>

          {/* Step 3 - Meet */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#C20000]">
              <span className="text-[24px] font-bold text-[#C20000]">3</span>
            </div>
            <h3 className="mb-[12px] font-['Longhand'] text-[36px] font-bold leading-[38px] text-[#C20000]">
              Meet
            </h3>
            <p className="text-[16px] font-normal leading-[22.4px] text-white">
              Meet in-office with a property strategist or mortgage broker for tailored solutions designed around your life.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-[50px] flex justify-center"
        >
          <motion.a
            href="/about-est-financial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="inline-block rounded-full border-[5px] border-[#FC0000] bg-[#FF0000] px-[50px] py-[20px] font-['Open_Sans',sans-serif] text-[17px] font-bold capitalize leading-[17px] text-white"
          >
            Book Your Free Consultation
          </motion.a>
        </motion.div>
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
