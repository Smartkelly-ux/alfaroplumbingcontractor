import { useState } from 'react';
import EditorialImage from './EditorialImage';
import fixtureImage from '../assets/images/frame_fixture_detail_1790983386034.jpg';
import pipeworkImage from '../assets/images/frame_pipework_craft_1790983396507.jpg';
import technicianImage from '../assets/images/frame_technician_work_1790983406265.jpg';

const FRAMES = [
  {
    id: 1,
    title: 'FRAME 01 / FIXTURE DETAIL',
    src: fixtureImage,
    alt: 'Brushed metal kitchen and bathroom fixture detail',
    aspect: 'aspect-[4/3] sm:aspect-[3/4]',
    colSpan: 'col-span-1 sm:col-span-4',
  },
  {
    id: 2,
    title: 'FRAME 02 / PIPEWORK',
    src: pipeworkImage,
    alt: 'Carefully aligned copper plumbing pipework and brass valves',
    aspect: 'aspect-[4/3] sm:aspect-[4/5]',
    colSpan: 'col-span-1 sm:col-span-5',
    offset: 'sm:translate-y-8',
  },
  {
    id: 3,
    title: 'FRAME 03 / TECHNICIAN AT WORK',
    src: technicianImage,
    alt: 'Technician carefully testing residential water heating setup',
    aspect: 'aspect-[4/3] sm:aspect-[3/4]',
    colSpan: 'col-span-1 sm:col-span-3',
    offset: 'sm:-translate-y-4',
  },
];

export default function SectionFinalImages() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F2F0EA] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8">
      <div className="max-w-6xl mx-auto">
        {/* Caption Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-4 block">
            WORKMANSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#20211F] font-normal tracking-tight">
            THE DETAILS MATTER.
          </h2>
        </div>

        {/* Asymmetrical 3-Frame Layout with lazy-loading cross-fade */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
          {FRAMES.map((frame) => {
            const isHovered = activeHover === frame.id;
            const hasHover = activeHover !== null;

            return (
              <div
                key={frame.id}
                onMouseEnter={() => setActiveHover(frame.id)}
                onMouseLeave={() => setActiveHover(null)}
                className={`${frame.colSpan} ${frame.offset || ''} transition-all duration-500`}
              >
                <div className="relative overflow-hidden bg-[#DDE2DC] border border-[#20211F]/10 group cursor-pointer">
                  <EditorialImage
                    src={frame.src}
                    alt={frame.alt}
                    aspectRatioClass={frame.aspect}
                    className={`transition-all duration-500 ease-out ${
                      isHovered
                        ? 'scale-[1.025] contrast-[1.04] brightness-100'
                        : hasHover
                        ? 'scale-100 opacity-75'
                        : 'scale-100 opacity-95'
                    }`}
                  />
                  <div className="absolute inset-0 bg-[#39443D]/5 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
