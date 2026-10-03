import { Phone, MapPin, ArrowRight } from 'lucide-react';

interface SectionContactCTAProps {
  onRequestService?: () => void;
}

export default function SectionContactCTA({ onRequestService }: SectionContactCTAProps) {
  return (
    <section
      id="contact"
      className="w-full bg-[#FAF9F4] text-[#20211F] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Inquiry Callout */}
        <div className="mb-24 pb-20 border-b border-[#20211F]/10">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-6 inline-block">
            INQUIRY
          </span>

          <h2
            className="font-serif font-normal text-[#20211F] leading-[1.0] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(34px, 5vw, 68px)',
            }}
          >
            NEED A PLUMBER?
          </h2>

          <p className="font-sans text-[16px] sm:text-[18px] text-[#66716A] leading-relaxed max-w-md mx-auto mb-10">
            Call Alfaro Plumbing Contractor to discuss your plumbing problem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:7865466487"
              className="tulum-btn inline-flex items-center justify-center px-9 py-4 text-[14px] sm:text-[15px] min-h-[56px] min-w-[220px]"
            >
              <Phone className="w-4 h-4 mr-2.5 text-[#B87557]" />
              (786) 546-6487
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-sans font-medium tracking-wider text-[#20211F] hover:text-[#B87557] py-3.5 px-6 border-b border-[#20211F]/20 hover:border-[#B87557] transition-all cursor-pointer"
            >
              <span>BOOK SERVICE</span>
              <ArrowRight className="w-4 h-4 text-[#B87557]" />
            </a>
          </div>
        </div>

        {/* Spacious Final CTA */}
        <div>
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-8 inline-block">
            ALFARO PLUMBING CONTRACTOR
          </span>

          <h2
            className="font-serif font-normal text-[#20211F] leading-[0.96] tracking-tight mb-8"
            style={{
              fontSize: 'clamp(44px, 6.8vw, 88px)',
            }}
          >
            LET'S TAKE
            <br />
            CARE OF IT.
          </h2>

          <div className="mb-12">
            <p className="font-sans text-[15px] sm:text-[16px] text-[#66716A] font-medium tracking-wide">
              Alfaro Plumbing Contractor LLC
            </p>
            <p className="font-sans text-[14px] text-[#66716A]/80 mt-1">
              Hialeah, Florida
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:7865466487"
              className="tulum-btn inline-flex items-center justify-center px-10 py-4 text-[14px] sm:text-[15px] min-h-[58px] min-w-[200px]"
            >
              <Phone className="w-4 h-4 mr-2.5 text-[#B87557]" />
              CALL NOW
            </a>

            <a
              href="https://maps.google.com/?q=1751+W+38th+Pl+Unit+1007-A+Hialeah+FL+33012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-sans font-medium tracking-wider text-[#66716A] hover:text-[#20211F] transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2 text-[#B87557]" />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
