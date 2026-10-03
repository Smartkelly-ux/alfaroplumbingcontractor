import { useEffect, useRef, useState } from 'react';
import EditorialImage from './EditorialImage';
import workImage from '../assets/images/work_plumber_craft_1790983353388.jpg';

export default function SectionTheWork() {
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
      id="about"
      ref={containerRef}
      className="w-full bg-[#FAF9F4] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-6 inline-block">
            01 / THE WORK
          </span>
          <h2
            className="font-serif font-normal text-[#20211F] leading-[1.02] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(34px, 5vw, 68px)',
            }}
          >
            SMALL REPAIR.
            <br />
            BIG DIFFERENCE.
          </h2>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#66716A] leading-relaxed max-w-xl mx-auto">
            From everyday repairs to larger plumbing work, Alfaro handles the system with care.
          </p>
        </div>

        {/* Large Wide Rectangular Photographic Panel with lazy loading & 900ms blur-to-sharp cross-fade */}
        <div className="w-full relative overflow-hidden bg-[#DDE2DC] border border-[#20211F]/10">
          <EditorialImage
            src={workImage}
            alt="Technician performing careful residential plumbing repair under sink"
            aspectRatioClass="aspect-[16/9] sm:aspect-[21/9]"
            className={`transition-[filter,opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inView ? 'blur-0 scale-100 opacity-100' : 'blur-[6px] scale-[1.015] opacity-80'
            }`}
          />
          {/* Subtle natural daylight tint */}
          <div className="absolute inset-0 bg-[#39443D]/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
