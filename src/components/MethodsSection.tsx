import React from 'react';
import { LEARNING_METHODS } from '../data/schoolData';
import codingImg from '../assets/images/santri_coding_robotics_1792641256047.jpg';
import tahfidzImg from '../assets/images/tahfidz_santri_quran_1792641255849.jpg';

export const MethodsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and 4 Approaches */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
              <span>Metodologi Pendidikan</span>
              <span aria-hidden="true">·</span>
              <span>Pendekatan Holistik</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 mb-4 text-balance">
              Metode Pembelajaran Terintegrasi
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Kami menerapkan pendekatan pembelajaran yang terarah, aplikatif, dan berpusat pada pembiasaan adab serta eksplorasi bakat santri.
            </p>

            {/* 4 Approaches List */}
            <div className="space-y-4">
              {LEARNING_METHODS.map((method) => (
                <div
                  key={method.number}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 hover:border-amber-300 hover:shadow-xs transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-bold text-sm text-blue-950 shrink-0">
                    {method.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-blue-950 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 italic">
                      {method.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Composition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3">
              <img
                src={codingImg}
                alt="Praktik dan Proyek Santri di Lab Komputer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-xs font-medium text-white">
                  Praktik eksplorasi logika & robotika santri tingkat SMP
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-16/9">
              <img
                src={tahfidzImg}
                alt="Pembiasaan Karakter dan Tahfidz Al-Qur'an"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-xs font-medium text-white">
                  Pembiasaan talaqqi dan muraja'ah Al-Qur'an secara terarah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
