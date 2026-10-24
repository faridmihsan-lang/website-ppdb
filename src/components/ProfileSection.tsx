import React from 'react';
import { BookOpen, ShieldCheck, Cpu } from 'lucide-react';
import { CORE_VALUES } from '../data/schoolData';
import { IslamicPattern } from './IslamicPattern';

export const ProfileSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="profil" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <IslamicPattern className="text-blue-900" opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <span>Profil Lembaga</span>
            <span aria-hidden="true">·</span>
            <span>Nilai Dasar Pendidikan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 mb-6 text-balance">
            Membangun Generasi Berilmu, Berakhlak, dan Berdaya Saing.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Telaga Al Kautsar merupakan lembaga pendidikan pesantren dan sekolah menengah pertama yang berkomitmen membentuk generasi Muslim yang dekat dengan Al-Qur'an, berakhlak mulia, memiliki jiwa kepemimpinan, serta siap menghadapi perkembangan zaman.
          </p>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={val.name}
              className="group relative bg-slate-50/80 hover:bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-amber-50 border border-slate-200 group-hover:border-amber-200 flex items-center justify-center shadow-xs transition-colors">
                    {getIcon(val.icon)}
                  </div>
                  <span className="text-sm font-mono font-medium text-slate-400 group-hover:text-amber-700 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-blue-950 mb-1">
                  {val.name}
                </h3>
                <div className="text-xs font-medium text-amber-700 mb-4">
                  {val.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-blue-950">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Pilar Utama Telaga Al Kautsar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contextual quote/statement */}
        <div className="mt-16 bg-blue-950 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <IslamicPattern className="text-amber-300" opacity={0.07} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 block">
                Visi Pendidikan Holistik
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                "Kami meyakini bahwa penghafal Al-Qur'an memiliki potensi luar biasa untuk menjadi ilmuwan, inovator teknologi, dan pemimpin berintegritas tinggi."
              </p>
            </div>
            <a
              href="#program"
              className="px-5 py-3 text-xs font-semibold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors shrink-0 shadow-sm"
            >
              Lihat Program Unggulan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
