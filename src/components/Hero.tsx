import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_plumbing_interior_1790983340117.jpg';

interface HeroProps {
  onRequestService?: () => void;
}

export default function Hero({ onRequestService }: HeroProps = {}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Choreography sequence triggers after preloader transition
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#20211F]">
      {/* Background Image Container with Cross-Choreography */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroImage}
          alt="Cinematic South Florida residential plumbing interior in Hialeah"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            loaded
              ? 'scale-100 saturate-100 opacity-90'
              : 'scale-[1.03] saturate-40 opacity-60'
          }`}
        />
        {/* Subtle deep moss overlay & bottom gradient */}
        <div className="absolute inset-0 bg-[#39443D]/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-transparent to-[#20211F]/30 pointer-events-none" />
      </div>

      {/* Top spacer for floating navigation */}
      <div className="h-28 sm:h-32" />

      {/* Main Center-Left Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 my-auto py-10 sm:py-16">
        <div className="max-w-3xl">
          {/* Main Headline line-by-line reveal */}
          {/* Desktop: clamp(68px, 7vw, 108px) | Tablet: 58–72px | Mobile: 43–54px */}
          <h1
            className="font-serif font-normal text-[#FAF9F4] leading-[0.93] tracking-tight mb-8"
            style={{
              fontSize: 'clamp(43px, 6.8vw, 108px)',
            }}
          >
            <span className="block overflow-hidden pb-1">
              <span
                className={`block transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  loaded ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                PLUMBING,
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span
                className={`block transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  loaded ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: '350ms' }}
              >
                DONE
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span
                className={`block transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  loaded ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                CAREFULLY.
              </span>
            </span>
          </h1>

          {/* Supporting Text - Opacity + slight tracking reduction */}
          <p
            className={`font-sans text-[16px] sm:text-[18px] md:text-[20px] text-[#FAF9F4]/90 max-w-xl leading-relaxed mb-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              loaded
                ? 'opacity-100 tracking-normal translate-y-0'
                : 'opacity-0 tracking-wide translate-y-4'
            }`}
            style={{ transitionDelay: '650ms' }}
          >
            Residential and light commercial plumbing across Hialeah and Miami-Dade.
          </p>

          {/* CTAs - Enters from opposite side */}
          <div
            className={`flex flex-wrap items-center gap-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              loaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a
              href="tel:7865466487"
              className="tulum-btn-dark inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-sans font-medium tracking-wider text-[#FAF9F4] bg-[#FAF9F4]/10 min-h-[56px]"
            >
              <Phone className="w-4 h-4 mr-2.5 text-[#FAF9F4]" />
              CALL ALFARO
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-sans font-medium tracking-wider text-[#FAF9F4]/90 hover:text-white group py-3 px-3 transition-colors cursor-pointer"
            >
              <span>REQUEST SERVICE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#B87557]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metadata - Appears Last */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 pt-4">
        <div
          className={`flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15 text-[11px] sm:text-[12px] font-sans tracking-[0.24em] text-[#FAF9F4]/75 uppercase transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '950ms' }}
        >
          <div>HIALEAH / FL</div>
          <div>CERTIFIED CONTRACTOR</div>
          <div>CFC1429858</div>
        </div>
      </div>
    </section>
  );
}
