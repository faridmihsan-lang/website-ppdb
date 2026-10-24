import React, { useState } from 'react';
import { X, MessageCircle, Calendar, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/schoolData';
import logoImg from '../assets/logo-telaga-alkautsar.png';

interface RegistrationModalProps {
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolOrigin, setSchoolOrigin] = useState('');
  const [selectedWave, setSelectedWave] = useState('Gelombang 1 (Oktober – Desember 2026)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalamu'alaikum Panitia PPDB Pesantren Tahfidz Telaga Al Kautsar,

Saya ingin mendaftarkan calon santri baru Tahun Ajaran 2026-2027:
- Nama Orang Tua: ${parentName}
- No. WhatsApp: ${phone}
- Nama Calon Santri: ${studentName}
- Asal Sekolah: ${schoolOrigin || '-'}
- Pilihan Gelombang: ${selectedWave}

Mohon panduan langkah pendaftaran selanjutnya. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/6285295125156?text=${encoded}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-blue-950 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-amber-400/40 bg-white p-0.5 shadow-sm">
              <img
                src={logoImg}
                alt="Logo Telaga Al Kautsar"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>PPDB Tahun Ajaran 2026-2027</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Formulir Pendaftaran Santri Baru
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300">
            Pesantren Tahfidz Telaga Al Kautsar (SMP Islam Terpadu Berasrama)
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-blue-950">
                Mengarahkan ke WhatsApp Panitia...
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Formulir pendaftaran Anda telah disiapkan. Panitia kami di nomor <strong>085295125156</strong> akan segera menindaklanjuti.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                <span>
                  <strong>Gelombang 1:</strong> Oktober 2026 – Desember 2026
                </span>
                <span className="font-semibold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded text-[10px]">
                  Aktif
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Lengkap Calon Santri <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama calon santri (anak)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Orang Tua / Wali <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama ayah/ibu"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Asal Sekolah (SD/MI) & Kota
                </label>
                <input
                  type="text"
                  placeholder="Contoh: SDIT Al-Madinah, Jakarta"
                  value={schoolOrigin}
                  onChange={(e) => setSchoolOrigin(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gelombang Pendaftaran
                </label>
                <select
                  value={selectedWave}
                  onChange={(e) => setSelectedWave(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 bg-white"
                >
                  <option value="Gelombang 1 (Oktober – Desember 2026)">Gelombang 1 (Okt – Des 2026)</option>
                  <option value="Gelombang 2 (Januari – Maret 2027)">Gelombang 2 (Jan – Mar 2027)</option>
                  <option value="Gelombang 3 (April – Juni 2027)">Gelombang 3 (Apr – Jun 2027)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Kirim & Hubungi Panitia (WhatsApp)</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Pacet, Cianjur • Kontak Resmi: 085295125156</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
