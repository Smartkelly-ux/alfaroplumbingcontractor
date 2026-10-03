import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  // Sequence stages:
  // 0: Initial background with typography
  // 1: Dot appears near center (200ms delay)
  // 2: Dot expands into soft ring (700–900ms)
  // 3: Ring grows into large translucent circle + inside wordmark reveal (500–700ms)
  // 4: Circle gently fades while hero is revealed behind it (800ms)
  // 5: Final transition complete (600ms)
  const [stage, setStage] = useState<number>(0);
  const [fadedOut, setFadedOut] = useState<boolean>(false);

  useEffect(() => {
    // 200ms: Dot appears near center
    const t1 = setTimeout(() => {
      setStage(1);
    }, 200);

    // 200ms + 800ms = 1000ms: Ring expands
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1000);

    // +700ms = 1700ms: Large translucent circle + ALFARO wordmark inside
    const t3 = setTimeout(() => {
      setStage(3);
    }, 1700);

    // +700ms = 2400ms: Circle gently fades while hero is revealed
    const t4 = setTimeout(() => {
      setStage(4);
    }, 2400);

    // +800ms = 3200ms: Final transition completes
    const t5 = setTimeout(() => {
      setFadedOut(true);
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (fadedOut) return null;

  return (
    <aside
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F2F0EA] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        stage >= 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Alfaro Plumbing Contractor presentation"
      role="status"
    >
      {/* Background initial centered typography */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          stage >= 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <span className="font-sans text-[11px] tracking-[0.28em] text-[#66716A] uppercase mb-4">
          HIALEAH / FL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#20211F] tracking-wide font-normal mb-3">
          ALFARO
        </h1>
        <p className="font-sans text-[12px] tracking-[0.24em] text-[#66716A] uppercase">
          PLUMBING CONTRACTOR LLC
        </p>
      </div>

      {/* The First Drop Abstract Sequence */}
      <div className="relative flex items-center justify-center pointer-events-none">
        {/* Stage 1: The Tiny Circular Dot */}
        <div
          className={`absolute rounded-full bg-[#39443D] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            stage === 1
              ? 'w-2.5 h-2.5 opacity-90 scale-100'
              : stage > 1
              ? 'opacity-0 scale-150'
              : 'w-0 h-0 opacity-0 scale-0'
          }`}
        />

        {/* Stage 2 & 3: Soft Expanding Ring -> Large Translucent Circle */}
        <div
          className={`rounded-full border border-[#39443D]/25 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center ${
            stage === 2
              ? 'w-24 h-24 sm:w-28 sm:h-28 opacity-75 scale-100 bg-[#39443D]/5'
              : stage >= 3
              ? 'w-72 h-72 sm:w-96 sm:h-96 opacity-95 scale-100 bg-[#FAF9F4]/95 shadow-sm border-[#39443D]/20'
              : 'w-0 h-0 opacity-0 scale-0'
          }`}
        >
          {/* Inside wordmark reveal: ALFARO */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              stage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <span className="font-serif text-4xl sm:text-5xl text-[#20211F] tracking-wider font-normal">
              ALFARO
            </span>
            <span className="font-sans text-[10px] tracking-[0.26em] text-[#39443D]/80 uppercase mt-2">
              CARE IN THE DETAILS
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
