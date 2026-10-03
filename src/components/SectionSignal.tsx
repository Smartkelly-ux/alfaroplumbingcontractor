import { useEffect, useRef, useState } from 'react';

const SIGNALS = [
  'RESPONSIVE',
  'CLEAR',
  'TIDY',
  'RELIABLE',
  'KNOWLEDGEABLE',
  'FAIR',
];

export default function SectionSignal() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FAF9F4] py-14 sm:py-18 border-y border-[#20211F]/10 overflow-hidden select-none"
      aria-label="Customer feedback themes"
    >
      <div className="relative w-full flex overflow-hidden">
        {/* Continuous slow editorial loop (22s), paused when out of viewport */}
        <div
          className="editorial-strip-track flex items-center gap-12 sm:gap-20"
          style={{
            animationPlayState: inView ? 'running' : 'paused',
          }}
        >
          {/* Loop Set 1 */}
          {SIGNALS.map((word, i) => (
            <div key={`s1-${i}`} className="flex items-center gap-12 sm:gap-20 shrink-0">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#20211F]/80 tracking-wider font-light">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87557]/45 shrink-0" />
            </div>
          ))}

          {/* Loop Set 2 */}
          {SIGNALS.map((word, i) => (
            <div key={`s2-${i}`} className="flex items-center gap-12 sm:gap-20 shrink-0">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#20211F]/80 tracking-wider font-light">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B87557]/45 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
