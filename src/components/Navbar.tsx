import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/schoolData';
import logoImg from '../assets/logo-telaga-alkautsar.png';

interface NavbarProps {
  onOpenPPDB: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPPDB }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Program Unggulan', href: '#program' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Official Circular Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-blue-900 rounded-md"
            aria-label="Pesantren Tahfidz Telaga Al Kautsar Beranda"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src={logoImg}
                alt="Logo Pesantren SMP Islam Terpadu Telaga Al Kautsar"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-blue-950 group-hover:text-blue-900 transition-colors whitespace-nowrap">
                Telaga Al Kautsar
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                Pesantren Tahfidz & SMP
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPPDB}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-950 rounded-lg hover:bg-blue-900 active:scale-[0.98] transition-all duration-150 shadow-sm border border-blue-900 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Daftar Sekarang</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenPPDB}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-950 rounded-md"
            >
              Daftar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-950 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-900"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-950 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPPDB();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center text-white bg-blue-950 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Daftar PPDB 2026/2027</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <a
                href={INSTITUTION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 text-xs font-medium text-center text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hubungi Panitia ({INSTITUTION_INFO.phone})
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
