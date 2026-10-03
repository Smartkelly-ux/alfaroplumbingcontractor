import { useState } from 'react';

const TRUST_POINTS = [
  {
    title: 'CLEAR COMMUNICATION',
    note: 'Upfront explanations of diagnostic findings and transparent repair scope before any work starts.',
  },
  {
    title: 'TIDY WORK',
    note: 'Respect for home interiors, utilizing surface coverings and leaving work areas thoroughly clean.',
  },
  {
    title: 'STRAIGHTFORWARD SERVICE',
    note: 'Code-compliant craft and dependable plumbing solutions without unnecessary sales pressure.',
  },
];

export default function SectionTrust() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FAF9F4] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="text-center mb-8">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase">
            STANDARDS
          </span>
        </div>

        {/* Large Statement */}
        <h2
          className="font-serif font-normal text-[#20211F] text-center leading-[0.98] tracking-tight mb-20 sm:mb-28"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
          }}
        >
          CLEAR.
          <br />
          PROMPT.
          <br />
          PROFESSIONAL.
        </h2>

        {/* Three Understated Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-8 border-t border-[#20211F]/10">
          {TRUST_POINTS.map((point, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={point.title}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group cursor-default py-2"
              >
                {/* Number index */}
                <span className="font-sans text-[11px] tracking-[0.22em] text-[#66716A] block mb-4">
                  0{index + 1}
                </span>

                {/* Point Title with 2–4px max movement and underline growth */}
                <div className="relative inline-block mb-3">
                  <h3
                    className={`font-serif text-xl sm:text-2xl tracking-wide transition-all duration-300 ${
                      isHovered
                        ? 'text-[#39443D] -translate-y-[3px]'
                        : 'text-[#20211F] translate-y-0'
                    }`}
                  >
                    {point.title}
                  </h3>
                  {/* Subtle underline grows */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B87557] transition-all duration-300 ease-out ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] text-[#66716A] leading-relaxed">
                  {point.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
