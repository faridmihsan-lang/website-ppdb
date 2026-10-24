import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, MapPin, Calendar, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_gedung_telaga_alkautsar.jpg';
import logoImg from '../assets/logo-telaga-alkautsar.png';
import { IslamicPattern } from './IslamicPattern';

interface HeroSectionProps {
  onOpenPPDB: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPPDB }) => {
  return (
    <section id="beranda" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Dark Navy Scrim for Optimal Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Pesantren Tahfidz Telaga Al Kautsar Pacet Cianjur"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/60" />
        <IslamicPattern className="text-amber-400" opacity={0.06} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Brand Emblem & Label */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400/50 bg-white p-0.5 shadow-lg">
              <img
                src={logoImg}
                alt="Logo Pesantren Telaga Al Kautsar"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="inline-flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-amber-300 tracking-wide uppercase">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Pendidikan Al-Qur'an
              </span>
              <span aria-hidden="true" className="text-amber-500/60 font-bold">•</span>
              <span>Kepemimpinan</span>
              <span aria-hidden="true" className="text-amber-500/60 font-bold">•</span>
              <span>Teknologi</span>
            </div>
          </div>

          {/* Headline - Primary Focal Anchor */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6">
            Menjadi Generasi Qur’ani, Pemimpin Masa Depan.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-normal max-w-2xl mb-8">
            Pesantren Tahfidz Telaga Al Kautsar menghadirkan pendidikan Islam yang memadukan kecintaan terhadap Al-Qur'an, pembentukan karakter kepemimpinan, serta keterampilan teknologi masa depan.
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenPPDB}
              className="px-6 py-3.5 text-sm font-semibold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg hover:shadow-amber-400/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group whitespace-nowrap"
            >
              <span>Daftar PPDB</span>
              <ArrowRight className="w-4 h-4 text-blue-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#program"
              className="px-6 py-3.5 text-sm font-medium text-white hover:text-amber-300 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-amber-400/40 backdrop-blur-sm rounded-lg active:scale-[0.98] transition-all text-center whitespace-nowrap"
            >
              Jelajahi Program
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Tingkat SMP Berasrama
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Tahfidz & Bimbingan Akhlak
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              Coding & Robotika Praktik
            </span>
          </div>
        </div>
      </div>

      {/* Strip Quick Information Row (Below Hero Content) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="bg-blue-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-slate-200">
          <div className="border-r border-white/10 pr-3 last:border-0">
            <div className="text-xs text-slate-400 mb-0.5">Tahun Ajaran</div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              2026 / 2027
            </div>
          </div>

          <div className="border-r border-white/10 pr-3 last:border-0">
            <div className="text-xs text-slate-400 mb-0.5">Status PPDB</div>
            <div className="text-sm font-semibold text-amber-300">
              Gelombang 1 Dibuka
            </div>
          </div>

          <div className="border-r border-white/10 pr-3 last:border-0">
            <div className="text-xs text-slate-400 mb-0.5">Kurikulum Unggulan</div>
            <div className="text-sm font-semibold text-white">
              Tahfidz + STEM + Karakter
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-0.5">Kawasan Belajar</div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">Pacet, Kab. Cianjur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Anchor */}
      <div className="relative z-10 flex justify-center pt-6">
        <a
          href="#profil"
          aria-label="Gulir ke profil pesantren"
          className="text-slate-400 hover:text-amber-300 transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
