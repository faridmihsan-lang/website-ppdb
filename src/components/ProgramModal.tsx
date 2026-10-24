import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program;
  onClose: () => void;
  onOpenPPDB: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onOpenPPDB }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-64 bg-slate-900 shrink-0">
          <img
            src={program.image}
            alt={program.title}
            style={program.imagePosition ? { objectPosition: program.imagePosition } : undefined}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-1">
              {program.tagline}
            </span>
            <h3 id="modal-title" className="text-2xl font-bold text-white">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Deskripsi Program
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {program.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Fokus Kompetensi & Sasaran Pembelajaran
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 text-blue-950 text-xs font-medium rounded-md border border-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Keunggulan Pendekatan Pembelajaran
            </h4>
            <div className="space-y-3">
              {program.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
            <p className="font-semibold mb-1">Informasi untuk Calon Wali Santri:</p>
            Program ini terintegrasi penuh dalam jadwal harian santri berasrama (boarding school) tingkat SMP Pesantren Tahfidz Telaga Al Kautsar tahun ajaran 2026-2027.
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={onOpenPPDB}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Daftar Santri untuk Program Ini</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
