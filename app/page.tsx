"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// ============================================
// SUCCESS STORY CARD DATA
// ============================================
const successCards = [
  {
    name: "Ancy Matthews",
    image: "/images/card-success-stories.png",
    description:
      "with guidance from est team, Ancy moved from feeling overwhelmed and unsure to feeling informed",
    button: "Watch the Video",
    overlayHeading: "She tried doing\nher SMSF alone.",
    overlayAccent: "Big Mistake!",
    overlaySignature: "Ancy M",
  },
  {
    name: "The Jensen Family",
    image: "/images/card-jensen.png",
    description:
      "\u2018est\u2019 helped us save 12 years\u2019 worth of home loan repayments. We\u2019ve trusted Raphael for over 8 years and couldn\u2019t speak more highly of \u2018est\u2019 Financial.",
    button: "Meet the Jensen\u2019s",
    overlayHeading: "We can retire",
    overlayAccent: "10 years",
    overlayAccentSub: "faster",
    overlaySignature: "The Jensen Family",
  },
  {
    name: "Julie Ott",
    image: "/images/card-julie.png",
    description:
      "I spent years focussing on my career and exploring the world. Then it hit me \u2014 I needed a plan. I\u2019m so thankful I found est Financial",
    button: "Watch Julie\u2019s Story",
    overlayHeading: "My path to",
    overlayAccent: "wealth",
    overlaySignature: "Julie",
  },
  {
    name: "Mark",
    image: "/images/card-mark.png",
    description:
      "He felt cautious and overwhelmed at first until est Financial help me in buying 2 Properties in secured the future with est",
    button: "Watch Mark\u2019s Story",
    overlayHeading: "From Uncertainty",
    overlayAccent: "to Equity",
    overlaySignature: "Mark",
  },
];

// ============================================
// CAROUSEL SLIDES DATA
// ============================================
const carouselSlides = [
  {
    title: "Our Trusted Partner",
    text: "We work with our trusted partner, Simon Liddle, who is an authorised representative of Avana Financial Solutions Pty Ltd (AFSL 516325). Simon\u2019s ASIC Authorised Representative number is 431197. You can view his credentials directly below.",
    buttonText: "Moneysmart Financial Advisers Register",
    buttonLink:
      "https://moneysmart.gov.au/financial-advice/financial-advisers-register#!id=000431197",
  },
  {
    title: "Credentials",
    text: "Est Home Loans holds Australian Credit Licence number 387025. Est Home Loans and Est Mortgages are authorised credit representatives of Specialist Finance Group.",
    buttonText: null,
    buttonLink: null,
  },
];

export default function ClonePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCarouselIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  }, []);

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
                    href="#"
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
          HERO SECTION
          ============================================ */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-[#000000] px-[10px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.png"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[800px] text-center"
        >
          <h1 className="mb-[30px] font-['Longhand'] text-[63px] font-bold leading-[63px] text-white max-md:text-[40px] max-md:leading-[42px]">
            Are <span className="text-[#C20000]">You</span> Dreaming of a Better Future?
          </h1>
          <p className="mx-auto max-w-[800px] text-[16px] font-normal leading-[22.4px] text-white">
            Dreaming of paying off your home faster, retiring comfortably,
            helping the kids in the future, or just want to take more holidays?
            Let est help turn your financial plans and goals into reality. est
            provides sensible, strategic financial steps with life-changing
            results. With over twenty years of experience, est helps keep more of
            your hard-earned cash in your pocket to spend on things you actually
            enjoy, rather than wasting it on crippling loans and tax.
          </p>
        </motion.div>
      </section>

      {/* ============================================
          WAVE TRANSITION + "A FASTER WAY" SECTION
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] pb-[120px] pt-[50px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-02-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[40px] md:grid-cols-2">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/content-running.webp"
              alt="Running"
              width={600}
              height={415}
              className="h-auto w-full"
              unoptimized
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-[20px] text-right"
          >
            <h2 className="font-['Longhand'] text-[60px] font-bold leading-[60px] text-[#FC1212] max-md:text-[36px] max-md:leading-[38px]">
              A faster way
            </h2>
            <h2 className="font-['Longhand'] text-[60px] font-bold leading-[60px] text-[#FC1212] max-md:text-[36px] max-md:leading-[38px]">
              to financial freedom
            </h2>
            <p className="text-left text-[16px] font-normal leading-[22.4px] text-white">
              <span className="font-bold text-[#FC1212]">est</span> keep the big
              picture in mind and manage every step along the journey. Our
              industry-leading, personalised investment strategies effectively
              grow your capital and minimise tax and loan payments to put more
              cash in your pocket.{" "}
              <span className="font-bold text-[#FC1212]">est</span> make wealth
              management accessible and affordable so every Australian can turn
              their aspirations into reality by achieving better financial
              outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SVG SERVICES DIAGRAM SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-combine.svg"
              alt="est Services Diagram"
              className="h-auto w-full max-w-[900px]"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-[40px] text-center font-['Longhand'] text-[48px] font-bold leading-[45px] text-white max-md:text-[32px] max-md:leading-[34px]"
          >
            est brings all the pieces together
          </motion.h2>
        </div>
      </section>

      {/* ============================================
          SUCCESS STORIES SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-[8px]"
          >
            <p className="text-center text-[16px] font-extrabold uppercase leading-[17.6px] tracking-[2px] text-white">
              Success Stories
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-[40px] text-center font-['Longhand'] text-[63px] font-bold leading-[63px] text-white max-md:text-[40px] max-md:leading-[42px]"
          >
            Success Stories
          </motion.h2>

          {/* 2x2 Card Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 gap-[20px] sm:grid-cols-2"
          >
            {successCards.map((card) => (
              <motion.div
                key={card.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative flex cursor-pointer flex-col overflow-hidden transition-all duration-500"
              >
                {/* TOP: Hero image area with promotional text overlay */}
                <div className="relative min-h-[300px] flex-1 overflow-hidden sm:min-h-[350px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Promotional text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center p-[30px] sm:p-[40px]">
                    <h3 className="text-[28px] font-bold leading-[1.1] text-white sm:text-[34px] md:text-[38px]">
                      {card.overlayHeading.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.overlayHeading.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className="mt-[4px] font-['Longhand'] text-[36px] font-bold italic leading-[1.1] text-[#FF0000] sm:text-[44px] md:text-[50px]">
                      {card.overlayAccent}
                    </p>
                    {card.overlayAccentSub && (
                      <p className="font-['Longhand'] text-[28px] font-bold italic leading-[1.1] text-[#FF0000] sm:text-[36px]">
                        {card.overlayAccentSub}
                      </p>
                    )}
                    {/* Decorative line + Signature */}
                    <div className="mt-[10px]">
                      <div className="mb-[6px] h-[1px] w-[80px] bg-white" />
                      <p className="font-['Nothing_You_Could_Do',cursive] text-[22px] text-white sm:text-[26px]">
                        {card.overlaySignature}
                      </p>
                    </div>
                  </div>
                </div>

                {/* BOTTOM: Person details - always visible */}
                <div className="flex flex-col items-center bg-black/90 px-[30px] py-[25px] text-center sm:px-[40px] sm:py-[30px]">
                  <h4 className="mb-[10px] font-['Longhand'] text-[34px] font-bold leading-[34px] text-white max-md:text-[26px]">
                    {card.name}
                  </h4>
                  <p className="mb-[15px] text-[16px] font-normal leading-[23.8px] text-white sm:text-[20px]">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="rounded-[30px] border-2 border-white bg-transparent px-[24px] py-[12px] text-[15px] font-medium leading-[15px] text-white/[0.99] transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    {card.button}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          "DO YOU LOOK BACK" SECTION (GRAY)
          ============================================ */}
      <section className="bg-[#999999] py-[40px]">
        <div className="mx-auto max-w-[1240px] px-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-[30px] text-center font-['Longhand'] text-[56px] font-bold leading-[56px] text-[#000000] max-md:text-[34px] max-md:leading-[36px]">
              Do you look back &amp; wish you had invested?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-[12px]"
          >
            <Image
              src="/images/content-ways.webp"
              alt="Investment growth"
              width={1300}
              height={900}
              className="h-auto w-full"
              unoptimized
            />
          </motion.div>

          <p className="text-[13px] font-semibold leading-[13px] text-[#000000]">
            *ABS 6% annual growth in Australian property
          </p>
        </div>
      </section>

      {/* ============================================
          CTA SECTIONS - TWO COLUMNS SIDE BY SIDE
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] py-[80px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-03-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[40px] md:grid-cols-2">
          {/* Left CTA - Speak with an expert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <p className="mb-[12px] text-[16px] font-extrabold uppercase leading-[17.6px] tracking-[2px] text-white">
              Speak with an expert
            </p>
            <h2 className="mb-[30px] font-['Longhand'] text-[40px] font-medium capitalize leading-[48px] tracking-[-2px] text-[#F90000] max-md:text-[30px] max-md:leading-[36px]">
              Start the Conversation
            </h2>
            <motion.a
              href="tel:1300123378"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mb-[20px] inline-block rounded-full border-[5px] border-[#FC0000] bg-[#FF0000] px-[50px] py-[20px] font-['Open_Sans',sans-serif] text-[17px] font-bold capitalize leading-[17px] text-white"
            >
              📞 Call Now 1300 123 EST
            </motion.a>
            <p className="max-w-[400px] text-[16px] font-normal leading-[22.4px] text-white">
              Speak with our expert team today. Give us a quick call and get the
              answers you need
            </p>
          </motion.div>

          {/* Right CTA - Prefer to chat later */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center text-center"
          >
            <p className="mb-[12px] font-['Poppins',sans-serif] text-[16px] font-extrabold uppercase leading-[17.6px] tracking-[2px] text-white">
              get in touch
            </p>
            <h2 className="mb-[30px] font-['Longhand'] text-[41px] font-extrabold capitalize leading-[49.2px] tracking-[-2px] text-[#FF0000] max-md:text-[30px] max-md:leading-[36px]">
              Prefer to chat later?
            </h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mb-[20px] inline-block rounded-full border-[5px] border-[#FC0000] bg-[#FF0000] px-[50px] py-[20px] font-['Open_Sans',sans-serif] text-[17px] font-bold capitalize leading-[17px] text-white"
            >
              Secure Your Booking
            </motion.a>
            <p className="max-w-[400px] text-[16px] font-normal leading-[22.4px] text-white">
              Schedule a free consultation with our experienced team, based in
              Sydney.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CREDENTIALS CAROUSEL SECTION
          ============================================ */}
      <section
        className="relative bg-[#000000] px-[10px] py-[60px]"
        style={{
          backgroundImage: "url(/images/wave-graphics-03-2880x1800.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="mx-auto max-w-[600px]">
          <div className="relative flex items-center">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-[50px] z-10 flex h-[25px] w-[25px] items-center justify-center text-[rgba(237,237,237,0.9)] transition-colors hover:text-white max-md:-left-[35px]"
              aria-label="Previous slide"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/icon-chevron-left.svg"
                alt=""
                className="h-[25px] w-[25px] opacity-90 invert"
              />
            </button>

            {/* Carousel Content */}
            <div className="w-full overflow-hidden text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="mb-[20px] font-['Longhand'] text-[40px] font-bold leading-[40px] text-[#FF0000] max-md:text-[28px]">
                    {carouselSlides[carouselIndex].title}
                  </h3>
                  <p className="mb-[24px] text-[16px] font-normal leading-[22.4px] text-white">
                    {carouselSlides[carouselIndex].text}
                  </p>
                  {carouselSlides[carouselIndex].buttonText && (
                    <a
                      href={carouselSlides[carouselIndex].buttonLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[4px] border-2 border-[#FF0F0F] bg-transparent px-[30px] py-[15px] text-[18px] font-medium leading-[18px] text-white transition-all duration-300 hover:bg-[#FF0F0F] hover:text-white"
                    >
                      {carouselSlides[carouselIndex].buttonText}
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-[50px] z-10 flex h-[25px] w-[25px] items-center justify-center text-[rgba(237,237,237,0.9)] transition-colors hover:text-white max-md:-right-[35px]"
              aria-label="Next slide"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/icon-chevron-right.svg"
                alt=""
                className="h-[25px] w-[25px] opacity-90 invert"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT FORM SECTION
          ============================================ */}
      <section className="bg-[#000000] px-[10px] py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-[20px] text-center font-['Longhand'] text-[48px] font-bold leading-[48px] text-[#FF0000] max-md:text-[32px] max-md:leading-[34px]">
              Book A Free Discovery Session
            </h2>
            <p className="mx-auto mb-[40px] max-w-[900px] text-center text-[16px] font-normal leading-[22.4px] text-white">
              The friendly team of{" "}
              <span className="font-bold text-[#FF0000]">est</span> experts will
              discuss your current financial situation and learn more about your
              future goals. They explain a bit more about how you can get your
              money working harder. There&apos;s no obligation and regardless of
              whether you decide to work with us or not, you&apos;ll still get a
              ton of value from the call.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-[1240px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b-2 border-[#697289] bg-transparent px-[2px] py-[10px] text-[16px] font-normal leading-[22.4px] text-white placeholder-white/60 outline-none transition-colors focus:border-white"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border-b-2 border-[#697289] bg-transparent px-[2px] py-[10px] text-[16px] font-normal leading-[22.4px] text-white placeholder-white/60 outline-none transition-colors focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 border-[#697289] bg-transparent px-[2px] py-[10px] text-[16px] font-normal leading-[22.4px] text-white placeholder-white/60 outline-none transition-colors focus:border-white"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="border-b-2 border-[#697289] bg-transparent px-[2px] py-[10px] text-[16px] font-normal leading-[22.4px] text-white placeholder-white/60 outline-none transition-colors focus:border-white"
              />

              {/* SMS Consent */}
              <label className="flex items-start gap-[10px] text-[14px] leading-[20px] text-white/80">
                <input
                  type="checkbox"
                  className="mt-[3px] h-[14px] w-[14px] shrink-0 accent-[#FF0000]"
                />
                <span>
                  I Consent to Recieve SMS Notification. Alerts &amp; Occasional
                  Marketing Communication from est Financial{" "}
                  <a
                    href="https://est.com.au/privacy-policy/"
                    className="text-white/80 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://est.com.au/privacy-policy/
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-[40px] flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-[29px] border-[5px] border-[#FF0000] bg-[#FF0202] px-[100px] py-[10px] text-[30px] font-medium leading-[30px] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#FF0000] max-md:px-[50px] max-md:text-[22px]"
              >
                Submit
              </motion.button>
            </div>
          </motion.form>
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
