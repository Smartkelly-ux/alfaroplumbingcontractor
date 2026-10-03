import { useEffect, useRef, useState } from 'react';
import EditorialImage from './EditorialImage';
import hialeahImage from '../assets/images/hialeah_residential_warm_1790983375143.jpg';

export default function SectionHialeah() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#20211F] text-[#FAF9F4] py-32 sm:py-40 px-6 sm:px-10 lg:px-16"
    >
      {/* Background Image spanning entire section with subtle 25px horizontal shift and lazy-loading cross-fade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className={`w-[110%] h-full -ml-[5%] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView ? 'translate-x-[25px]' : 'translate-x-0'
          }`}
        >
          <EditorialImage
            src={hialeahImage}
            alt="South Florida residential architecture in Hialeah and Miami-Dade"
            aspectRatioClass="h-full w-full"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Warm dark overlay without clutter */}
        <div className="absolute inset-0 bg-[#20211F]/70 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20211F] via-[#20211F]/40 to-[#20211F]/80 pointer-events-none" />
      </div>

      {/* Stationary Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.3em] text-[#FAF9F4]/75 uppercase mb-8 inline-block">
          HIALEAH / MIAMI-DADE
        </span>

        <h2
          className="font-serif font-normal text-[#FAF9F4] leading-[0.98] tracking-tight mb-8"
          style={{
            fontSize: 'clamp(38px, 6vw, 76px)',
          }}
        >
          LOCAL
          <br />
          KNOWLEDGE.
          <br />
          LOCAL SERVICE.
        </h2>

        <p className="font-sans text-[16px] sm:text-[18px] text-[#FAF9F4]/85 leading-relaxed max-w-xl mx-auto">
          Based in Hialeah and serving residential and light commercial customers in the Miami-Dade area.
        </p>

        <div className="mt-12 text-[12px] font-sans tracking-[0.24em] text-[#FAF9F4]/60 uppercase">
          1751 W 38TH PL, UNIT 1007-A · HIALEAH, FL 33012
        </div>
      </div>
    </section>
  );
}
