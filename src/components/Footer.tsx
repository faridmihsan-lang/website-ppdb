import React from 'react';
import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/schoolData';
import logoImg from '../assets/logo-telaga-alkautsar.png';

interface FooterProps {
  onOpenPPDB: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPPDB }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Identity & Description (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-700 bg-white p-0.5 shadow-md flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Logo Pesantren SMP Islam Terpadu Telaga Al Kautsar"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  {INSTITUTION_INFO.name}
                </span>
                <span className="text-xs text-slate-400 block">
                  {INSTITUTION_INFO.tagline} • Tingkat SMP Berasrama
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Lembaga pendidikan Islam pesantren dan sekolah menengah pertama yang berorientasi pada pembinaan hafalan Al-Qur'an, pembentukan integritas kepemimpinan, dan kecakapan teknologi masa depan.
            </p>

            {/* Official Social Media Links (Strictly only the 2 requested: Instagram & Facebook, NO FICTITIOUS ACCOUNTS) */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                Media Sosial Resmi:
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={INSTITUTION_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: @tak_leadershipschool</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={INSTITUTION_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook: Telaga Al Kautsar</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-amber-300 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-amber-300 transition-colors">
                  Profil Pesantren
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-amber-300 transition-colors">
                  Program Unggulan
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-amber-300 transition-colors">
                  Keunggulan Sekolah
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-300 transition-colors">
                  Fasilitas Kampus
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-amber-300 transition-colors">
                  Galeri Foto Santri
                </a>
              </li>
              <li>
                <a href="#ppdb" className="hover:text-amber-300 transition-colors">
                  Pendaftaran PPDB 2026/2027
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Pertanyaan Sering Diajukan (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Address (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kontak & Lokasi Pesantren
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {INSTITUTION_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">WhatsApp Panitia PPDB:</span>
                  <a
                    href={INSTITUTION_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-white hover:text-amber-300 transition-colors"
                  >
                    {INSTITUTION_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenPPDB}
                  className="w-full py-2.5 text-xs font-semibold text-center text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Daftar Santri Baru Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Pesantren Tahfidz Telaga Al Kautsar. Hak cipta dilindungi.
          </div>
          <div className="text-slate-400 flex items-center gap-2">
            <span>Pendidikan Al-Qur'an</span>
            <span>·</span>
            <span>Kepemimpinan</span>
            <span>·</span>
            <span>Teknologi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
