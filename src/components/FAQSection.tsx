import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { FAQ_LIST, INSTITUTION_INFO } from '../data/schoolData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Tanya Jawab Seputar Pesantren</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 text-balance mb-4">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Temukan jawaban lengkap seputar kurikulum tahfidz, program kepemimpinan, coding dan robotika, serta prosedur pendaftaran santri baru.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-950/40 bg-slate-50/80 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-950"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-blue-950">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-950' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="mb-3">{faq.answer}</p>
                    
                    {faq.needsAdminReview && (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-xs text-amber-900 mt-2">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block">Catatan Verifikasi Resmi:</strong>
                          Tahapan administratif detail serta lampiran berkas resmi dapat diperbarui atau dikonfirmasi langsung melalui sekretariat panitia PPDB di 085295125156.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-blue-950 mb-1">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h4>
            <p className="text-xs text-slate-600">
              Tim panitia siap memberikan penjelasan rinci mengenai pendidikan di Telaga Al Kautsar.
            </p>
          </div>

          <a
            href={INSTITUTION_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Chat Panitia PPDB</span>
          </a>
        </div>
      </div>
    </section>
  );
};
