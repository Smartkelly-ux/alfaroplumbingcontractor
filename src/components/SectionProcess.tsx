import { useState, useEffect, useRef } from 'react';

const STAGES = [
  {
    title: 'LISTEN',
    step: '01',
    note: 'We listen to the plumbing symptoms and system history before touching any piping.',
  },
  {
    title: 'DIAGNOSE',
    step: '02',
    note: 'Thorough evaluation to locate the root cause with code-compliant clarity.',
  },
  {
    title: 'REPAIR',
    step: '03',
    note: 'Precise workmanship executed using verified fittings and clean methods.',
  },
  {
    title: 'CLEAR UP',
    step: '04',
    note: 'Pressure testing, complete jobsite cleanup, and walk-through of the completed work.',
  },
];

export default function SectionProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progression: stages become progressively darker and horizontal marker advances
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
        const totalTravel = windowHeight * 0.75 - rect.top;
        const sectionHeight = rect.height;
        const progress = Math.max(0, Math.min(1, totalTravel / (sectionHeight + 100)));
        const step = Math.min(3, Math.floor(progress * 4));
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="w-full bg-[#FAF9F4] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="text-center mb-8">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase">
            HOW WE WORK
          </span>
        </div>

        {/* Large Centered Statement */}
        <h2
          className="font-serif font-normal text-[#20211F] text-center leading-[0.98] tracking-tight mb-20 sm:mb-28"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 76px)',
          }}
        >
          SHOW US
          <br />
          THE PROBLEM.
        </h2>

        {/* Horizontal Traveling Marker Track (No pinned full-screen, user in control) */}
        <div className="relative mb-14">
          <div className="relative w-full h-[1px] bg-[#20211F]/15 mb-10">
            <div
              className="absolute top-0 h-[2px] bg-[#39443D] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: `${(activeStep / 4) * 100}%`,
                width: '25%',
              }}
            />
          </div>

          {/* Four Stages: LISTEN -> DIAGNOSE -> REPAIR -> CLEAR UP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 text-center">
            {STAGES.map((stage, index) => {
              const isCurrent = index === activeStep;
              const isPastOrCurrent = index <= activeStep;

              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveStep(index)}
                  className="cursor-pointer group flex flex-col items-center p-2 transition-transform duration-300"
                >
                  <span
                    className={`font-serif text-2xl sm:text-3xl md:text-4xl tracking-wide transition-all duration-500 ${
                      isCurrent
                        ? 'text-[#20211F] font-semibold scale-105'
                        : isPastOrCurrent
                        ? 'text-[#39443D]/90'
                        : 'text-[#66716A]/40'
                    }`}
                  >
                    {stage.title}
                  </span>

                  <span className="font-sans text-[11px] tracking-[0.22em] text-[#66716A] mt-2 mb-3">
                    {stage.step}
                  </span>

                  {/* Stage Description */}
                  <p
                    className={`text-left sm:text-center text-[13px] sm:text-[14px] font-sans text-[#20211F]/80 leading-relaxed max-w-xs transition-opacity duration-300 ${
                      isCurrent ? 'opacity-100' : 'opacity-0 sm:opacity-40'
                    }`}
                  >
                    {stage.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Supporting Copy */}
        <div className="text-center pt-8 border-t border-[#20211F]/10 max-w-md mx-auto">
          <p className="font-sans text-[14px] sm:text-[15px] text-[#66716A] leading-relaxed">
            Clear communication before the work begins and throughout the job.
          </p>
        </div>
      </div>
    </section>
  );
}
