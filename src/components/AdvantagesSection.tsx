import React from 'react';
import { ADVANTAGES } from '../data/schoolData';
import { IslamicPattern } from './IslamicPattern';
import { Sparkles } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <IslamicPattern className="text-blue-900" opacity={0.02} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Kelebihan & Nilai Tambah</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 text-balance mb-4">
            Mengapa Memilih Telaga Al Kautsar?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Kombinasi harmonis antara keteduhan nilai-nilai kepesantrenan tradisional dengan kurikulum sains dan kepemimpinan modern di lereng pegunungan Pacet, Cianjur.
          </p>
        </div>

        {/* Bento-grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, idx) => {
            // First item spans 2 columns on larger screens for asymmetric visual balance
            const isMarquee = idx === 0;
            return (
              <div
                key={item.number}
                className={`relative group bg-slate-50/70 hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isMarquee ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-950 to-blue-900 text-white' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-xs font-semibold tracking-wider uppercase ${
                        isMarquee ? 'text-amber-300' : 'text-amber-700'
                      }`}
                    >
                      {item.category}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isMarquee ? 'text-blue-300' : 'text-slate-400'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 ${
                      isMarquee ? 'text-white' : 'text-blue-950 group-hover:text-blue-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isMarquee ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs font-medium flex items-center justify-between ${
                    isMarquee
                      ? 'border-white/10 text-slate-300'
                      : 'border-slate-200/60 text-slate-500'
                  }`}
                >
                  <span>Pesantren Tahfidz Telaga Al Kautsar</span>
                  <span className="text-amber-500">✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
