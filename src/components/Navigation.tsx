import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavigationProps {
  onRequestService?: () => void;
}

export default function Navigation({ onRequestService }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none flex justify-center">
      {/* Outer Floating Shell */}
      <div className="w-full max-w-5xl pointer-events-auto relative">
        {/* Main Floating Bar */}
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-400 shadow-md ${
            scrolled
              ? 'bg-[rgba(32,33,31,0.92)] shadow-xl'
              : 'bg-[rgba(32,33,31,0.82)]'
          } backdrop-blur-md border border-white/10 text-[#FAF9F4]`}
        >
          {/* Left: Brand Wordmark */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl tracking-wider text-[#FAF9F4] hover:text-[#FAF9F4]/80 transition-colors"
            aria-label="Alfaro Plumbing Contractor LLC"
          >
            ALFARO
          </a>

          {/* Desktop Center Links (1025px+) */}
          <nav
            className="hidden min-[1025px]:flex items-center gap-8 text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-[#FAF9F4]/80"
            aria-label="Desktop Navigation"
          >
            <a
              href="#services"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B87557] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#process"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              PROCESS
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B87557] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B87557] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Desktop Right Action (1025px+) */}
          <div className="hidden min-[1025px]:flex items-center gap-5">
            <a
              href="tel:7865466487"
              className="flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase font-sans font-medium text-[#FAF9F4] hover:text-[#B87557] transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87557]" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Tablet (1024px and below) & Mobile Hamburger Controls */}
          <div className="flex min-[1025px]:hidden items-center gap-3">
            <a
              href="tel:7865466487"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-[12px] font-sans tracking-wide text-[#FAF9F4] hover:bg-white/20 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-3 h-3 text-[#B87557]" />
              <span>CALL NOW</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-[#FAF9F4] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Tablet + Mobile Compact Expanding Downward Panel (<= 1024px) */}
        <div
          className={`min-[1025px]:hidden mt-2 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen
              ? 'max-h-80 opacity-100 translate-y-0 pointer-events-auto'
              : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'
          }`}
        >
          <div className="bg-[rgba(32,33,31,0.95)] backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-[#FAF9F4] shadow-2xl">
            <nav className="flex flex-col space-y-3.5">
              <a
                href="#services"
                onClick={closeMenu}
                className="font-serif text-xl tracking-wide hover:text-[#B87557] transition-colors py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>SERVICES</span>
                <span className="text-xs font-sans text-white/30 tracking-widest uppercase">01</span>
              </a>
              <a
                href="#process"
                onClick={closeMenu}
                className="font-serif text-xl tracking-wide hover:text-[#B87557] transition-colors py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>PROCESS</span>
                <span className="text-xs font-sans text-white/30 tracking-widest uppercase">02</span>
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="font-serif text-xl tracking-wide hover:text-[#B87557] transition-colors py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>WHY ALFARO</span>
                <span className="text-xs font-sans text-white/30 tracking-widest uppercase">03</span>
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="font-serif text-xl tracking-wide hover:text-[#B87557] transition-colors py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>CONTACT</span>
                <span className="text-xs font-sans text-white/30 tracking-widest uppercase">04</span>
              </a>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="tel:7865466487"
                  className="font-sans text-xs tracking-widest text-[#FAF9F4]/80 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87557]" />
                  <span>CALL NOW</span>
                </a>
                <a
                  href="#booking"
                  onClick={closeMenu}
                  className="text-xs font-sans uppercase tracking-wider text-[#B87557] hover:underline"
                >
                  Book Service →
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
