import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Tutup pratinjau"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 bg-white">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            {item.categoryLabel}
          </div>
          <h3 className="text-lg font-bold text-blue-950 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
