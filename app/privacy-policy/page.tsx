import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about-est-financial" },
  { label: "Our Team", href: "/team" },
  { label: "Our Media", href: "/our-blog" },
  { label: "Success Stories", href: "/#reviews" },
  { label: "Services", href: "/services" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-['Roboto',sans-serif]">
      <nav className="sticky top-0 z-50 border-b-2 border-[#C20000] bg-black px-[10px]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between py-[10px]">
          <a href="/" className="shrink-0"><Image src="/images/logo.webp" alt="est Financial" width={109} height={47} className="h-[47px] w-[109px] object-contain" unoptimized /></a>
          <div className="ml-auto hidden items-center gap-[2px] lg:flex">
            {navLinks.map(({ label, href }) => (<a key={label} href={href} className="px-[20px] py-[13px] text-[20px] font-semibold text-white hover:text-[#C20000] transition-all duration-[400ms]">{label}</a>))}
            <a href="/about-est-financial" className="ml-[8px] rounded-[6px] bg-[#E60000] px-[24px] py-[12px] text-[18px] font-extrabold text-white hover:bg-white hover:text-[#E60000] transition-all duration-[400ms]">Free Consultation</a>
          </div>
        </div>
      </nav>
      <section className="bg-black px-[10px] py-[80px]">
        <div className="mx-auto max-w-[800px]">
          <h1 className="mb-[30px] font-['Longhand'] text-[56px] font-bold text-white max-md:text-[36px]">Privacy <span className="text-[#C20000]">Policy</span></h1>
          <div className="space-y-[20px] text-[17px] leading-[1.7] text-white/90">
            <p><strong className="text-[#C20000]">EST FINANCIAL Pty Ltd</strong> (ABN 30 611 799 850) is committed to protecting your privacy in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">Information We Collect</h2>
            <p>We collect personal information necessary to provide our financial services, including your name, contact details, financial information, and identification documents. This information is collected directly from you or from third parties with your consent.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">How We Use Your Information</h2>
            <p>Your personal information is used to provide financial services, comply with legal obligations, and communicate with you about our services. We do not sell your personal information to third parties.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">Security</h2>
            <p>We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access. Our staff are trained in privacy obligations and data security practices.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">Your Rights</h2>
            <p>You have the right to access and correct your personal information. To make a request or for any privacy-related enquiries, contact us at <a href="mailto:Enquiries@est.com.au" className="text-[#C20000] hover:underline">Enquiries@est.com.au</a>.</p>
          </div>
        </div>
      </section>
      <footer className="bg-black px-[10px] py-[40px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mt-[30px] border-t border-white/20 pt-[20px]"><p className="text-[13px] font-semibold text-white/70">All strategies and information provided on this website are general advice only. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
