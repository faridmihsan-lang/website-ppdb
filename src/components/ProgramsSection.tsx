import React, { useState } from 'react';
import { BookOpen, Award, Cpu, Globe, ArrowRight, Check } from 'lucide-react';
import { PROGRAMS } from '../data/schoolData';
import { Program } from '../types';
import { ProgramModal } from './ProgramModal';

interface ProgramsSectionProps {
  onOpenPPDB: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenPPDB }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-blue-900" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="program" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
              <span>Kurikulum Terintegrasi</span>
              <span aria-hidden="true">·</span>
              <span>SMP & Pesantren</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 text-balance">
              Program Unggulan Telaga Al Kautsar
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Empat pilar program yang dirancang secara sinergis untuk melahirkan generasi yang kuat spiritualitasnya, tangguh kepemimpinannya, serta cakap teknologinya.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenPPDB}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Konsultasi Program PPDB</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container with smooth hover zoom */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    style={prog.imagePosition ? { objectPosition: prog.imagePosition } : undefined}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating category mark */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-2 shadow-xs">
                    {getProgramIcon(prog.iconName)}
                    <span className="text-xs font-bold text-blue-950">{prog.tagline}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-900 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {prog.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-amber-700" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="px-6 sm:px-8 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full py-2.5 text-xs font-semibold text-blue-950 hover:text-amber-800 bg-slate-50 hover:bg-amber-50/70 border border-slate-200 hover:border-amber-300 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pelajari Selengkapnya & Silabus</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onOpenPPDB={() => {
            setSelectedProgram(null);
            onOpenPPDB();
          }}
        />
      )}
    </section>
  );
};
