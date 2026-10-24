import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Kegiatan' },
    { id: 'tahfidz', label: 'Kegiatan Tahfidz' },
    { id: 'pembelajaran', label: 'Kegiatan Pembelajaran' },
    { id: 'coding', label: 'Coding & Robotik' },
    { id: 'kepemimpinan', label: 'Kepemimpinan' },
    { id: 'pesantren', label: 'Santri & Pesantren' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <span>Dokumentasi Visual</span>
            <span aria-hidden="true">·</span>
            <span>Aktivitas Keseharian</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 text-balance mb-4">
            Galeri Kegiatan Santri
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Potret kegiatan belajar, pembinaan tahfidz Al-Qur'an, praktik teknologi, dan dinamika kebersamaan santri di Pesantren Tahfidz Telaga Al Kautsar.
          </p>
        </div>

        {/* Filter Tabs (Interactive filter controls allowed per frontend design guidelines) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating category text */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold text-amber-300 drop-shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom icon hint */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption on overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-bold leading-snug line-clamp-2 drop-shadow-xs">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 italic">
            * Dokumentasi foto representatif kegiatan santri. Foto diperbarui secara berkala oleh tim humas sekolah.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <LightboxModal
          item={activeLightbox}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  );
};
