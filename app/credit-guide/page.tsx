import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about-est-financial" },
  { label: "Our Team", href: "/team" },
  { label: "Our Media", href: "/our-blog" },
  { label: "Success Stories", href: "/#reviews" },
  { label: "Services", href: "/services" },
];

export default function CreditGuidePage() {
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
          <h1 className="mb-[30px] font-['Longhand'] text-[56px] font-bold text-white max-md:text-[36px]">Credit <span className="text-[#C20000]">Guide</span></h1>
          <div className="space-y-[20px] text-[17px] leading-[1.7] text-white/90">
            <p><strong className="text-[#C20000]">Est Home Loans</strong> holds Australian Credit Licence number 387025. Est Home Loans and Est Mortgages are authorised credit representatives of Specialist Finance Group.</p>
            <p>Our credit representatives are licensed to engage in credit activities in accordance with the National Consumer Credit Protection Act 2009.</p>
            <p>This Credit Guide provides you with information about us, the services we provide, and how we are remunerated for those services.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">Our Services</h2>
            <p>We provide credit assistance to consumers seeking finance for investment properties, residential properties, and related financial products. Our team of mortgage brokers work with a panel of lenders to find solutions that suit your circumstances.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">How We Are Paid</h2>
            <p>We receive commissions from lenders when a loan is settled. Upfront commission is typically 0.65% of the loan amount. Trail commission is typically 0.15–0.25% per annum on the outstanding loan balance. We do not charge you a fee for our services.</p>
            <h2 className="font-['Longhand'] text-[32px] font-bold text-[#C20000]">Contact Us</h2>
            <p>For any queries regarding this Credit Guide, please contact us at <a href="mailto:Enquiries@est.com.au" className="text-[#C20000] hover:underline">Enquiries@est.com.au</a> or call <a href="tel:1300123378" className="text-[#C20000] hover:underline">1300 123 378</a>.</p>
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
