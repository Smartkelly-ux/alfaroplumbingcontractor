import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import EditorialImage from './EditorialImage';
import detailImage from '../assets/images/detail_pipe_manifold_1790983363777.jpg';
import fixtureImage from '../assets/images/frame_fixture_detail_1790983386034.jpg';
import pipeworkImage from '../assets/images/frame_pipework_craft_1790983396507.jpg';
import technicianImage from '../assets/images/frame_technician_work_1790983406265.jpg';
import heroImage from '../assets/images/hero_plumbing_interior_1790983340117.jpg';
import workImage from '../assets/images/work_plumber_craft_1790983353388.jpg';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'drains-clogs',
    name: 'DRAINS & CLOGS',
    category: 'Drain Service',
    description: 'Thorough clearing of kitchen, bathroom, and main floor drains using clean mechanical equipment.',
    image: pipeworkImage,
  },
  {
    id: 'leaks-pipe-repair',
    name: 'LEAKS & PIPE REPAIR',
    category: 'Pipework',
    description: 'Pinpoint leak detection, copper and PEX pipe repair, and valve restoration with zero mess.',
    image: detailImage,
  },
  {
    id: 'sewer-work',
    name: 'SEWER WORK',
    category: 'Sewer Line',
    description: 'Main sewer line inspection, clearing, and scheduled structural repair across residential systems.',
    image: workImage,
  },
  {
    id: 'water-heaters',
    name: 'WATER HEATERS',
    category: 'Water Heating',
    description: 'Diagnostic assessment, element repair, pressure valve replacement, and full tank installations.',
    image: technicianImage,
  },
  {
    id: 'tankless-water-heaters',
    name: 'TANKLESS WATER HEATERS',
    category: 'Efficiency Systems',
    description: 'High-efficiency continuous hot water unit installation, descaling, and precise line sizing.',
    image: technicianImage,
  },
  {
    id: 'water-mains',
    name: 'WATER MAINS',
    category: 'Supply Lines',
    description: 'Dedicated residential main supply line inspection, meter connection repair, and pressure regulation.',
    image: detailImage,
  },
  {
    id: 'gas-piping',
    name: 'GAS PIPING',
    category: 'Fuel Piping',
    description: 'Certified residential gas line runs, appliance shut-offs, and secure pressure-tested joints.',
    image: pipeworkImage,
  },
  {
    id: 'fixtures-faucets',
    name: 'FIXTURES & FAUCETS',
    category: 'Fixtures',
    description: 'Careful installation of kitchen sinks, bathroom faucets, valves, and architectural fixtures.',
    image: fixtureImage,
  },
  {
    id: 'remodel-plumbing',
    name: 'REMODEL PLUMBING',
    category: 'Renovation',
    description: 'Rough-in plumbing, line relocation, and fixture trim work for kitchen and bath renovations.',
    image: heroImage,
  },
  {
    id: 'camera-locating',
    name: 'CAMERA LOCATING',
    category: 'Diagnostic',
    description: 'High-resolution optical camera line locating to accurately identify pipe obstructions without guesswork.',
    image: workImage,
  },
];

interface SectionServicesProps {
  onRequestService?: (serviceName?: string) => void;
}

export default function SectionServices({ onRequestService }: SectionServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMobileId, setOpenMobileId] = useState<string | null>(null);

  const toggleMobileAccordion = (id: string) => {
    setOpenMobileId(openMobileId === id ? null : id);
  };

  const activeDesktopService = hoveredIndex !== null ? SERVICES[hoveredIndex] : SERVICES[0];

  const handleServiceClick = (serviceName: string) => {
    if (onRequestService) {
      onRequestService(serviceName);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="w-full bg-[#F2F0EA] text-[#20211F] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-5 inline-block">
            02 / SERVICES
          </span>
          <h2
            className="font-serif font-normal text-[#20211F] leading-[1.0] tracking-tight"
            style={{
              fontSize: 'clamp(34px, 5vw, 68px)',
            }}
          >
            PLUMBING,
            <br />
            WITHOUT
            <br />
            THE NOISE.
          </h2>
        </div>

        {/* Editorial Service Index - Desktop (min-width: 1025px) */}
        <div className="hidden min-[1025px]:grid grid-cols-12 gap-12 items-start relative">
          {/* Vertical Editorial List */}
          <div className="col-span-8 divide-y divide-[#20211F]/10 border-y border-[#20211F]/10">
            {SERVICES.map((service, index) => {
              const isSelected = hoveredIndex === index;
              const hasHover = hoveredIndex !== null;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleServiceClick(service.name)}
                  className={`py-5 cursor-pointer transition-colors duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'text-[#39443D]'
                      : hasHover
                      ? 'opacity-35 text-[#20211F]'
                      : 'opacity-90 text-[#20211F]'
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-sans text-[11px] tracking-[0.2em] text-[#66716A] w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-serif text-2xl xl:text-3xl tracking-wide transition-colors duration-200 ${
                        isSelected ? 'text-[#39443D] font-medium' : 'text-[#20211F]'
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>

                  <span
                    className={`text-[12px] font-sans tracking-[0.16em] uppercase text-[#B87557] transition-all duration-300 ${
                      isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    BOOK →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Right Thumbnail Panel with lazy-load cross-fade */}
          <div className="col-span-4 sticky top-36 pl-8">
            <div className="w-[180px] xl:w-[210px] ml-auto">
              <div className="aspect-[3/4] overflow-hidden bg-[#DDE2DC] border border-[#20211F]/10 relative">
                <EditorialImage
                  key={activeDesktopService.id}
                  src={activeDesktopService.image}
                  alt={activeDesktopService.name}
                  aspectRatioClass="aspect-[3/4]"
                  className="transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#39443D]/10 pointer-events-none" />
              </div>
              <div className="mt-3.5">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#66716A] mb-1">
                  {activeDesktopService.category}
                </p>
                <p className="font-sans text-[13px] text-[#20211F]/80 leading-snug">
                  {activeDesktopService.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Accordion View with lazy-loading cross-fade */}
        <div className="min-[1025px]:hidden divide-y divide-[#20211F]/10 border-y border-[#20211F]/10">
          {SERVICES.map((service, index) => {
            const isOpen = openMobileId === service.id;

            return (
              <div key={service.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(service.id)}
                  className="w-full text-left flex items-center justify-between py-1 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[11px] tracking-[0.2em] text-[#66716A]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-[#20211F] tracking-wide">
                      {service.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#66716A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#39443D]' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content with lazy loaded EditorialImage */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start pb-2">
                    <div className="w-full sm:w-44 aspect-[4/3] overflow-hidden bg-[#DDE2DC] border border-[#20211F]/10 shrink-0">
                      <EditorialImage
                        src={service.image}
                        alt={service.name}
                        aspectRatioClass="aspect-[4/3]"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#66716A] block mb-1">
                        {service.category}
                      </span>
                      <p className="font-sans text-[14px] text-[#20211F]/80 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <a
                        href="#booking"
                        onClick={() => handleServiceClick(service.name)}
                        className="inline-block text-[12px] font-sans font-medium tracking-wider uppercase text-[#39443D] hover:text-[#B87557] transition-colors cursor-pointer"
                      >
                        Book Service →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
