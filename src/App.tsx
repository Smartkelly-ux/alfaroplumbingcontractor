/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SectionTheWork from './components/SectionTheWork';
import SectionServices from './components/SectionServices';
import SectionProcess from './components/SectionProcess';
import SectionDetail from './components/SectionDetail';
import SectionTrust from './components/SectionTrust';
import SectionLicense from './components/SectionLicense';
import SectionHialeah from './components/SectionHialeah';
import SectionSignal from './components/SectionSignal';
import SectionFinalImages from './components/SectionFinalImages';
import SectionBooking from './components/SectionBooking';
import SectionContactCTA from './components/SectionContactCTA';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Drains & Clogs');

  const handleSelectService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#20211F] selection:bg-[#B87557]/20 selection:text-[#20211F]">
      {/* Editorial Preloader: "The First Drop" */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Floating Translucent Navigation */}
      <Navigation />

      <main>
        {/* Full-Viewport Hero with Line-by-Line Reveal */}
        <Hero />

        {/* Section 01: The Work (Blur-to-sharp 900ms transition) */}
        <SectionTheWork />

        {/* Section 02: Services (Centered Editorial Index with Hover Thumbnails & Mobile Accordion) */}
        <SectionServices onRequestService={handleSelectService} />

        {/* Section 03: How We Work (Interactive Storytelling Progression: LISTEN -> DIAGNOSE -> REPAIR -> CLEAR UP) */}
        <SectionProcess />

        {/* Section 04: Detail (Split composition with vertical clay-colored rule) */}
        <SectionDetail />

        {/* Section 05: Trust (Understated standards based on customer feedback themes) */}
        <SectionTrust />

        {/* Section 06: Licensed Craft (Dark Moss with character-by-character license settle) */}
        <SectionLicense />

        {/* Section 07: Hialeah (Warm residential context with subtle horizontal shift) */}
        <SectionHialeah />

        {/* Section 08: Customer Signal (Horizontal editorial strip) */}
        <SectionSignal />

        {/* Section 09: Final Image (Asymmetrical 3-frame layout with sharpening) */}
        <SectionFinalImages />

        {/* Simple & Minimalistic In-Page Booking Section (No Popups) */}
        <SectionBooking
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        {/* Contact & Final CTA */}
        <SectionContactCTA />
      </main>

      {/* Soft-Dark Footer with Sequential Vertical Clipping */}
      <Footer />

      {/* Persistent Floating Action Button for Urgent 24/7 WhatsApp */}
      <WhatsAppFAB />
    </div>
  );
}
