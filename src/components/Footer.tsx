import { useEffect, useRef, useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#20211F] text-[#FAF9F4] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/10">
          {/* First: Company name & address (vertical clip reveal) */}
          <div className="md:col-span-5 overflow-hidden">
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="font-serif text-2xl sm:text-3xl tracking-wider text-[#FAF9F4] mb-2 font-normal">
                ALFARO
              </h3>
              <p className="font-sans text-[12px] tracking-[0.24em] text-[#FAF9F4]/70 uppercase mb-6">
                PLUMBING CONTRACTOR LLC
              </p>
              <div className="flex items-start gap-2.5 text-[14px] font-sans text-[#FAF9F4]/70 leading-relaxed max-w-xs">
                <MapPin className="w-4 h-4 text-[#B87557] shrink-0 mt-1" />
                <span>
                  1751 W 38th Pl, Unit 1007-A<br />
                  Hialeah, FL 33012
                </span>
              </div>
            </div>
          </div>

          {/* Then: Contact & Quick Links */}
          <div className="md:col-span-4 overflow-hidden">
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <h4 className="font-sans text-[11px] tracking-[0.26em] text-[#FAF9F4]/50 uppercase mb-5">
                DIRECT INQUIRY
              </h4>
              <div className="mb-6">
                <a
                  href="tel:7865466487"
                  className="font-serif text-2xl text-[#FAF9F4] hover:text-[#B87557] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B87557]" />
                  <span>(786) 546-6487</span>
                </a>
              </div>

              {/* Small navigation */}
              <nav className="flex items-center gap-6 text-[12px] tracking-[0.2em] font-sans uppercase text-[#FAF9F4]/75">
                <a href="#services" className="hover:text-white transition-colors">
                  SERVICES
                </a>
                <span className="text-white/20">/</span>
                <a href="#process" className="hover:text-white transition-colors">
                  PROCESS
                </a>
                <span className="text-white/20">/</span>
                <a href="#contact" className="hover:text-white transition-colors">
                  CONTACT
                </a>
              </nav>
            </div>
          </div>

          {/* Then: License information */}
          <div className="md:col-span-3 overflow-hidden">
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h4 className="font-sans text-[11px] tracking-[0.26em] text-[#FAF9F4]/50 uppercase mb-4">
                CERTIFICATION
              </h4>
              <p className="font-sans text-[13px] font-medium text-[#FAF9F4] mb-1">
                FL CERTIFIED PLUMBING CONTRACTOR
              </p>
              <p className="font-sans text-[14px] text-[#B87557] tracking-wider mb-2 font-mono">
                CFC1429858
              </p>
              <p className="font-sans text-[12px] text-[#FAF9F4]/60 leading-relaxed">
                Status: Current / Active<br />
                Licensure: 07/12/2017<br />
                Expiration: 08/31/2028
              </p>
            </div>
          </div>
        </div>

        {/* Then: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden">
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <p className="font-sans text-[12px] text-[#FAF9F4]/50 tracking-wider">
              © 2026 Alfaro Plumbing Contractor LLC. All rights reserved.
            </p>
          </div>

          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            <p className="font-sans text-[11px] tracking-[0.18em] text-[#FAF9F4]/40 uppercase">
              HIALEAH & MIAMI-DADE COUNTY, FLORIDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
