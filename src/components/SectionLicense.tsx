import { useEffect, useRef, useState } from 'react';

const LICENSE_CHARS = 'CFC1429858'.split('');

export default function SectionLicense() {
  const [inView, setInView] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Character-by-character opacity settle (25–35ms per character)
  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setRevealedChars(current);
      if (current >= LICENSE_CHARS.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#39443D] text-[#FAF9F4] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Small label */}
        <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.3em] text-[#FAF9F4]/70 uppercase mb-8 inline-block">
          FL CERTIFIED PLUMBING CONTRACTOR
        </span>

        {/* Headline */}
        <h2
          className="font-serif font-normal text-[#FAF9F4] leading-[1.0] tracking-tight mb-14 sm:mb-18"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 70px)',
          }}
        >
          A PROFESSIONAL
          <br />
          AT THE JOB.
        </h2>

        {/* License Number with character-by-character opacity settle */}
        <div className="my-8 py-6 border-y border-[#FAF9F4]/15 max-w-xl mx-auto flex items-center justify-center">
          <div
            className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.25em] text-[#FAF9F4] font-light select-all"
            aria-label="Florida License CFC1429858"
          >
            {LICENSE_CHARS.map((char, index) => {
              const isSettled = inView && index < revealedChars;

              return (
                <span
                  key={index}
                  className={`inline-block transition-opacity duration-200 ${
                    isSettled ? 'opacity-100 text-[#FAF9F4]' : 'opacity-15 text-[#FAF9F4]/20'
                  }`}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>

        {/* Secondary Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[12px] sm:text-[13px] font-sans tracking-[0.22em] text-[#FAF9F4]/75 uppercase mt-8">
          <span>LICENSED SINCE 2017</span>
          <span className="text-[#FAF9F4]/30">·</span>
          <span>STATUS: CURRENT & ACTIVE</span>
          <span className="text-[#FAF9F4]/30">·</span>
          <span>EXPIRATION: 08/31/2028</span>
        </div>
      </div>
    </section>
  );
}
