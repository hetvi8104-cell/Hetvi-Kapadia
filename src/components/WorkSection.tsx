import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import { GARMENTS } from '../data/portfolioData';
import { Garment, CategoryType } from '../types';

interface WorkSectionProps {
  isDarkTheme: boolean;
  onSelectGarment: (garment: Garment) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ isDarkTheme, onSelectGarment }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategoryType>('all');

  const filteredGarments = GARMENTS.filter((g) => {
    if (selectedCategory === 'all') return true;
    return g.category === selectedCategory;
  });

  return (
    <section
      id="work"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#2A0614] text-[#FAF2EE] border-[#7D1B31]/40'
          : 'bg-[#FDF6F4] text-[#220814] border-[#EAD5D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-[#D4C5B0]/50 dark:border-white/10">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
              <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
                02 • CURATED GARMENT ARCHIVE
              </span>
            </div>
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
            >
              Nine Curated Master Ensembles
            </h2>
            <p id="work-section-subtitle" className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75">
              4 Western Silhouettes + 5 Ethnic Ancestral Creations
            </p>
          </div>

          {/* Filter Pills */}
          <div
            id="work-category-filters"
            className={`flex items-center space-x-2 p-1.5 rounded-full border backdrop-blur-md shadow-xs ${
              isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <button
              id="work-filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-[10px] font-sans-modern tracking-[0.2em] uppercase font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#6E1A29] text-white shadow-sm'
                  : 'opacity-65 hover:opacity-100 text-[#221B1C] dark:text-white'
              }`}
            >
              ALL (0{GARMENTS.length})
            </button>
            <button
              id="work-filter-western"
              onClick={() => setSelectedCategory('western')}
              className={`px-4 py-2 rounded-full text-[10px] font-sans-modern tracking-[0.2em] uppercase font-bold transition-all cursor-pointer ${
                selectedCategory === 'western'
                  ? 'bg-[#6E1A29] text-white shadow-sm'
                  : 'opacity-65 hover:opacity-100 text-[#221B1C] dark:text-white'
              }`}
            >
              WESTERN RIGOR ({GARMENTS.filter((g) => g.category === 'western').length})
            </button>
            <button
              id="work-filter-ethnic"
              onClick={() => setSelectedCategory('ethnic')}
              className={`px-4 py-2 rounded-full text-[10px] font-sans-modern tracking-[0.2em] uppercase font-bold transition-all cursor-pointer ${
                selectedCategory === 'ethnic'
                  ? 'bg-[#6E1A29] text-white shadow-sm'
                  : 'opacity-65 hover:opacity-100 text-[#221B1C] dark:text-white'
              }`}
            >
              ETHNIC HERITAGE ({GARMENTS.filter((g) => g.category === 'ethnic').length})
            </button>
          </div>
        </div>

        {/* Garments Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredGarments.map((garment) => {
            const lookIndex = GARMENTS.indexOf(garment) + 1;
            return (
              <div
                key={garment.id}
                id={`garment-card-${garment.id}`}
                onClick={() => onSelectGarment(garment)}
                className={`group relative rounded-3xl overflow-hidden border flex flex-col justify-between transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${
                  isDarkTheme
                    ? 'bg-[#1A050F] border-white/10 hover:border-[#D48B96]/50'
                    : 'bg-[#FAF6F0] border-[#D4C5B0] hover:border-[#6E1A29]/50'
                }`}
              >
                {/* Visual Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-900">
                  <img
                    src={garment.heroImage}
                    alt={garment.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Look Index Chip */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-black/60 text-white backdrop-blur-md border border-white/20 font-bold">
                      LOOK 0{lookIndex} • {garment.category.toUpperCase()}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#6E1A29] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Key Color Bar Floating Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      {garment.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 rounded-full border border-black/50 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                          title={`${c.name} (${c.hex})`}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                      {garment.materials[0]?.weight || 'Couture Spec'}
                    </span>
                  </div>
                </div>

                {/* Garment Information Dossier Footer */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                      {garment.subtitle}
                    </span>
                    <h3 className="text-xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-white group-hover:text-[#6E1A29] dark:group-hover:text-[#D48B96] transition-colors">
                      {garment.title}
                    </h3>
                    <p className="text-xs font-sans-modern leading-relaxed opacity-75 line-clamp-2">
                      {garment.concept}
                    </p>
                  </div>

                  {/* Key Techniques / Materials */}
                  <div className="pt-3 border-t border-current/10 flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="opacity-60 uppercase">SILHOUETTE:</span>
                      <span className="font-semibold text-right truncate max-w-[180px]">
                        {garment.silhouette.split('with')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="opacity-60 uppercase">PRIMARY FABRIC:</span>
                      <span className="font-semibold text-right truncate max-w-[180px]">
                        {garment.materials[0]?.name}
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#6E1A29] dark:text-[#D48B96] font-bold uppercase group-hover:underline">
                    <span>Inspect Full Dossier</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
