import { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import EditorialImage from './EditorialImage';
import pipeManifoldImage from '../assets/images/detail_pipe_manifold_1790983363777.jpg';

export default function SectionDetail() {
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
      className="w-full bg-[#F2F0EA] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Vertical Photograph with lazy-load cross-fade */}
          <div className="lg:col-span-6 w-full">
            <div className="border border-[#20211F]/10 relative">
              <EditorialImage
                src={pipeManifoldImage}
                alt="Precision copper piping and residential water manifold craftsmanship"
                aspectRatioClass="aspect-[3/4]"
                containerClassName="max-h-[720px]"
              />
              <div className="absolute inset-0 bg-[#39443D]/10 pointer-events-none" />
            </div>
          </div>

          {/* Right: Text with growing vertical clay rule */}
          <div className="lg:col-span-6 flex items-start gap-6 sm:gap-8">
            {/* Narrow clay-colored rule growing vertically beside the text (700ms) */}
            <div
              className={`w-[2px] bg-[#B87557] shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? 'h-64 sm:h-80 opacity-100' : 'h-0 opacity-0'
              }`}
            />

            <div className="flex-1">
              <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-6 block">
                03 / DETAIL
              </span>

              {/* Stage 1: Headline reveals first */}
              <h2
                className={`font-serif font-normal text-[#20211F] leading-[1.02] tracking-tight mb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  fontSize: 'clamp(34px, 4.8vw, 64px)',
                }}
              >
                KNOWING
                <br />
                WHAT'S WRONG
                <br />
                IS HALF THE JOB.
              </h2>

              {/* Stage 2: Body reveals second */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                <p className="font-sans text-[16px] sm:text-[18px] text-[#66716A] leading-relaxed mb-8 max-w-lg">
                  Alfaro's documented service mix includes drain, sewer, water-heater, gas-piping, water-main and fixture work.
                </p>

                <a
                  href="tel:7865466487"
                  className="inline-flex items-center gap-2 font-sans text-[13px] sm:text-[14px] tracking-[0.18em] uppercase font-medium text-[#20211F] hover:text-[#B87557] group transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87557]" />
                  <span>CALL TO DISCUSS</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
