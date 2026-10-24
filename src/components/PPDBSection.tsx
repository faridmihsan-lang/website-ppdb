import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  MessageCircle, 
  AlertCircle, 
  Clock, 
  FileText, 
  CreditCard,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { INSTITUTION_INFO, PPDB_WAVES } from '../data/schoolData';
import { IslamicPattern } from './IslamicPattern';

export const PPDBSection: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [originSchool, setOriginSchool] = useState('');
  const [selectedWave, setSelectedWave] = useState('Gelombang 1 (Okt - Des 2026)');
  const [interestFocus, setInterestFocus] = useState('Tahfidz Al-Qur\'an & Kepemimpinan');
  const [customNotes, setCustomNotes] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Pre-formatted WhatsApp Message generator
  const generateWhatsAppMessage = () => {
    const text = `Assalamu'alaikum Warahmatullahi Wabarakatuh,
Panitia PPDB Pesantren Tahfidz Telaga Al Kautsar,

Saya berminat mendaftarkan putra/putri kami untuk Tahun Ajaran 2026-2027:
- Nama Orang Tua/Wali: ${parentName || '-'}
- Nama Calon Santri: ${studentName || '-'}
- Asal Sekolah/Kota: ${originSchool || '-'}
- Pilihan Gelombang: ${selectedWave}
- Fokus Minat: ${interestFocus}
${customNotes ? `- Catatan/Pertanyaan: ${customNotes}` : ''}

Mohon informasi resmi terkait prosedur alur pendaftaran, jadwal observasi, serta rincian biaya pendidikan. Terima kasih.`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/6285295125156?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = () => {
    const text = `Konsultasi PPDB 2026-2027 Telaga Al Kautsar:
Orang Tua: ${parentName || '-'}
Calon Santri: ${studentName || '-'}
Asal: ${originSchool || '-'}
Gelombang: ${selectedWave}
Fokus: ${interestFocus}`;
    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  return (
    <section id="ppdb" className="py-20 lg:py-28 bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative Islamic Geometric Pattern */}
      <IslamicPattern className="text-amber-400" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Penerimaan Peserta Didik Baru (PPDB)</span>
            <span aria-hidden="true">·</span>
            <span>Tahun Ajaran 2026/2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            Langkah Pertama Menuju Masa Depan yang Lebih Bermakna.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
            Bergabunglah bersama Telaga Al Kautsar dan tumbuh menjadi generasi Qur'ani yang berakhlak, berjiwa pemimpin, serta siap menghadapi tantangan masa depan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#form-konsultasi"
              className="px-6 py-3.5 text-sm font-semibold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-950" />
              <span>Informasi PPDB</span>
            </a>

            <a
              href={INSTITUTION_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Hubungi Admin ({INSTITUTION_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Waves Schedule & Key Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Waves Schedule Cards (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Jadwal Pendaftaran Santri Baru (SMP)</span>
              </h3>
              <span className="text-xs text-amber-300 font-mono">TA 2026-2027</span>
            </div>

            <div className="space-y-3">
              {PPDB_WAVES.map((w, idx) => {
                const isActive = w.status === 'active';
                return (
                  <div
                    key={w.wave}
                    className={`rounded-xl p-5 border transition-all ${
                      isActive
                        ? 'bg-blue-900/80 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                        : 'bg-white/5 border-white/10 opacity-80'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-bold text-amber-300">
                          {w.wave}
                        </span>
                        {isActive ? (
                          <span className="px-2 py-0.5 text-[11px] font-semibold bg-amber-400 text-blue-950 rounded-md">
                            Sedang Dibuka
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400">
                            Akan Datang
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-300">
                        {w.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Address & Official Panitia Info Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-6 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Alamat Kampus:</span>
                  <span>{INSTITUTION_INFO.address}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white mr-2">Kontak Panitia PPDB:</span>
                  <a
                    href={INSTITUTION_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:underline font-mono font-bold"
                  >
                    {INSTITUTION_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Official Data Cards: Alur & Biaya (Clearly labeled for Admin completion as requested) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Alur Pendaftaran Info Box */}
            <div className="bg-white/10 border border-white/15 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Alur Pendaftaran Santri</span>
                </h4>
                <span className="text-[11px] px-2 py-0.5 bg-amber-400/20 text-amber-300 rounded border border-amber-400/30 font-medium">
                  Informasi Resmi Menyusul
                </span>
              </div>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span>Konsultasi & Pengisian Formulir Peminatan Calon Santri</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span>Silaturahmi & Observasi Baca Al-Qur'an serta Wawancara Wali</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                  <span>Pengumuman Hasil Seleksi & Konfirmasi Kelulusan</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                  <span>Daftar Ulang & Orientasi Kehidupan Berasrama</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Petunjuk teknis resmi lengkap akan dikirimkan oleh panitia PPDB.</span>
              </div>
            </div>

            {/* Biaya Pendidikan Info Box (Marked for Admin Completion) */}
            <div className="bg-white/10 border border-white/15 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Biaya Pendidikan & Investasi Masa Depan</span>
                </h4>
                <span className="text-[11px] px-2 py-0.5 bg-blue-500/20 text-sky-300 rounded border border-sky-400/30 font-medium">
                  Tersedia via Panitia
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Pesantren Tahfidz Telaga Al Kautsar mengedepankan transparansi investasi pendidikan yang mencakup asrama, konsumsi higienis bergizi, program tahfidz intensif, laboratorium coding/robotik, serta pembinaan akhlak.
              </p>

              <div className="p-3 bg-blue-900/60 rounded-lg border border-amber-400/20 text-xs text-slate-200">
                <p className="font-medium text-amber-300 mb-1">Dapatkan Rincian Brosur Biaya:</p>
                Hubungi Panitia PPDB di <strong className="font-mono text-white">085295125156</strong> untuk menerima lembar rincian resmi investasi masuk dan SPP bulanan.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Consultation Form to WhatsApp */}
        <div id="form-konsultasi" className="bg-white text-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
              Formulir Peminatan Calon Santri
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
              Konsultasi & Pra-Pendaftaran PPDB 2026/2027
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Isi data awal di bawah ini untuk terhubung langsung dengan Panitia PPDB melalui WhatsApp resmi Telaga Al Kautsar.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Orang Tua / Wali <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bpk. H. Rahmat Hidayat"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Calon Santri <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Farhan"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Asal Sekolah & Kota / Domisili
                </label>
                <input
                  type="text"
                  placeholder="Contoh: SDIT Al-Ihsan, Bandung"
                  value={originSchool}
                  onChange={(e) => setOriginSchool(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Rencana Gelombang PPDB
                </label>
                <select
                  value={selectedWave}
                  onChange={(e) => setSelectedWave(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden bg-white transition-all"
                >
                  <option value="Gelombang 1 (Okt - Des 2026)">Gelombang 1 (Oktober 2026 – Desember 2026)</option>
                  <option value="Gelombang 2 (Jan - Mar 2027)">Gelombang 2 (Januari 2027 – Maret 2027)</option>
                  <option value="Gelombang 3 (Apr - Jun 2027)">Gelombang 3 (April 2027 – Juni 2027)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Fokus Minat Utama Putra/Putri
              </label>
              <select
                value={interestFocus}
                onChange={(e) => setInterestFocus(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden bg-white transition-all"
              >
                <option value="Tahfidz Al-Qur'an & Kepemimpinan">Tahfidz Al-Qur'an & Kepemimpinan</option>
                <option value="Tahfidz Al-Qur'an & Coding/Robotik">Tahfidz Al-Qur'an & Coding/Robotik</option>
                <option value="Pembelajaran Bahasa Inggris & Kepemimpinan">Pembelajaran Bahasa Inggris & Kepemimpinan</option>
                <option value="Kombinasi Semua Program Unggulan">Kombinasi Semua Program Unggulan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Pertanyaan / Catatan Tambahan (Opsional)
              </label>
              <textarea
                rows={3}
                placeholder="Tuliskan jika ada pertanyaan khusus seputar asrama, pola makan, atau jadwal tes..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 outline-hidden transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Konsultasi ke WhatsApp Admin</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-4 py-3 text-xs font-medium text-slate-700 hover:text-blue-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Salin ringkasan data"
                >
                  {copiedSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Data</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs text-slate-500 flex items-center gap-1">
                <span>Panitia Siap Melayani:</span>
                <span className="font-mono font-bold text-slate-800">085295125156</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
