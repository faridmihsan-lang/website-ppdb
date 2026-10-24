import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { ProgramsSection } from './components/ProgramsSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { MethodsSection } from './components/MethodsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { PPDBSection } from './components/PPDBSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isPPDBModalOpen, setIsPPDBModalOpen] = useState(false);

  const handleOpenPPDB = () => {
    setIsPPDBModalOpen(true);
  };

  const handleClosePPDB = () => {
    setIsPPDBModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Navigation */}
      <Navbar onOpenPPDB={handleOpenPPDB} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenPPDB={handleOpenPPDB} />

        {/* Profil Pesantren & 3 Nilai Utama */}
        <ProfileSection />

        {/* Program Unggulan */}
        <ProgramsSection onOpenPPDB={handleOpenPPDB} />

        {/* Keunggulan: Mengapa Memilih Telaga Al Kautsar */}
        <AdvantagesSection />

        {/* Metode Pembelajaran: 4 Pendekatan */}
        <MethodsSection />

        {/* Fasilitas Kampus */}
        <FacilitiesSection />

        {/* Galeri Kegiatan Santri */}
        <GallerySection />

        {/* PPDB 2026/2027 Section */}
        <PPDBSection />

        {/* Pertanyaan yang Sering Diajukan (FAQ) */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenPPDB={handleOpenPPDB} />

      {/* Interactive PPDB Modal */}
      {isPPDBModalOpen && <RegistrationModal onClose={handleClosePPDB} />}

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
