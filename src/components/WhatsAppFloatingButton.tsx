import React from 'react';
import { MessageCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/schoolData';

export const WhatsAppFloatingButton: React.FC = () => {
  const greeting = encodeURIComponent(
    "Assalamu'alaikum Warahmatullahi Wabarakatuh, saya orang tua calon santri ingin berkonsultasi seputar PPDB dan program di Pesantren Tahfidz Telaga Al Kautsar."
  );
  const waUrl = `${INSTITUTION_INFO.whatsappUrl}?text=${greeting}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip prompt */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700">
        Konsultasi PPDB ({INSTITUTION_INFO.phone})
      </span>

      {/* Floating button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi PPDB melalui WhatsApp resmi"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200 border-2 border-white focus-visible:outline-2 focus-visible:outline-emerald-600"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
