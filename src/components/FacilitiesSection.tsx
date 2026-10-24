import React from 'react';
import { Home, Moon, Monitor, BookOpen, Activity, Library } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';
import { IslamicPattern } from './IslamicPattern';

export const FacilitiesSection: React.FC = () => {
  const getFacilityIcon = (icon: string) => {
    switch (icon) {
      case 'Home':
        return <Home className="w-5 h-5 text-blue-900" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-amber-600" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-sky-600" />;
      case 'Book':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-600" />;
      case 'Library':
        return <Library className="w-5 h-5 text-amber-700" />;
      default:
        return <Home className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <IslamicPattern className="text-blue-950" opacity={0.02} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <span>Sarana & Prasarana</span>
            <span aria-hidden="true">·</span>
            <span>Kampus Pacet Cianjur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 text-balance mb-4">
            Fasilitas Penunjang Pembelajaran Santri
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dirancang untuk memberikan kenyamanan tinggal, kekhusyukan beribadah, serta kelancaran proses pembelajaran akademik dan teknologi setiap santri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {facility.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-blue-950 mb-2">
                  {facility.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                <span className="w-1 h-1 rounded-full bg-amber-600" />
                <span>Terawat & Terjaga</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
