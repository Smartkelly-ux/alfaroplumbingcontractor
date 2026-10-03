import { useState } from 'react';
import { Check } from 'lucide-react';

const SERVICES = [
  'Drains & Clogs',
  'Leaks & Pipe Repair',
  'Sewer Work',
  'Water Heaters',
  'Tankless Water Heaters',
  'Water Mains',
  'Gas Piping',
  'Fixtures & Faucets',
  'Remodel Plumbing',
  'Camera Locating',
  'Other / Diagnostic Assessment',
];

interface SectionBookingProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
}

export default function SectionBooking({
  selectedService = 'Drains & Clogs',
  onServiceChange,
}: SectionBookingProps) {
  const [service, setService] = useState(selectedService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if selectedService prop updates from clicking a service row
  const activeService = selectedService || service;

  const handleServiceSelect = (val: string) => {
    setService(val);
    if (onServiceChange) onServiceChange(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="booking"
      className="w-full bg-[#F2F0EA] text-[#20211F] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[#20211F]/8 scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto">
        {/* Minimal Header - Very Little Text */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.28em] text-[#66716A] uppercase mb-3 block">
            SCHEDULE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#20211F] font-normal tracking-tight">
            BOOK SERVICE.
          </h2>
        </div>

        {submitted ? (
          <div className="bg-[#FAF9F4] border border-[#20211F]/10 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#39443D] text-[#FAF9F4] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#20211F] mb-2 font-normal">
              Booking Received.
            </h3>
            <p className="font-sans text-[15px] text-[#66716A] mb-6">
              We will call {phone || 'you'} shortly to confirm your visit.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
                setDate('');
                setNotes('');
              }}
              className="text-xs font-sans uppercase tracking-widest text-[#B87557] hover:underline"
            >
              Book Another Visit →
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF9F4] border border-[#20211F]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-5"
          >
            <div>
              <label className="block text-[11px] font-sans uppercase tracking-[0.18em] text-[#66716A] mb-1.5">
                Service
              </label>
              <select
                value={activeService}
                onChange={(e) => handleServiceSelect(e.target.value)}
                className="w-full bg-[#F2F0EA] border border-[#20211F]/15 rounded-xl px-4 py-3 text-sm font-sans text-[#20211F] focus:outline-none focus:border-[#39443D]"
                required
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.18em] text-[#66716A] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-[#F2F0EA] border border-[#20211F]/15 rounded-xl px-4 py-3 text-sm font-sans text-[#20211F] placeholder:text-[#66716A]/50 focus:outline-none focus:border-[#39443D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.18em] text-[#66716A] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(786) 000-0000"
                  className="w-full bg-[#F2F0EA] border border-[#20211F]/15 rounded-xl px-4 py-3 text-sm font-sans text-[#20211F] placeholder:text-[#66716A]/50 focus:outline-none focus:border-[#39443D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-sans uppercase tracking-[0.18em] text-[#66716A] mb-1.5">
                Preferred Date / Time
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. Tomorrow morning or ASAP"
                className="w-full bg-[#F2F0EA] border border-[#20211F]/15 rounded-xl px-4 py-3 text-sm font-sans text-[#20211F] placeholder:text-[#66716A]/50 focus:outline-none focus:border-[#39443D]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-sans uppercase tracking-[0.18em] text-[#66716A] mb-1.5">
                Note (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Brief issue description"
                className="w-full bg-[#F2F0EA] border border-[#20211F]/15 rounded-xl px-4 py-3 text-sm font-sans text-[#20211F] placeholder:text-[#66716A]/50 focus:outline-none focus:border-[#39443D] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="tulum-btn w-full inline-flex items-center justify-center px-8 py-3.5 text-[14px] font-sans font-medium tracking-wider text-[#20211F] min-h-[52px] cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'CONFIRMING...' : 'CONFIRM BOOKING'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
