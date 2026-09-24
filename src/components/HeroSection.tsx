import React, { useState } from 'react';
import { ArrowRight, Compass, Layers } from 'lucide-react';
import { DESIGNER_INFO, GARMENTS } from '../data/portfolioData';
import { Garment } from '../types';

interface HeroSectionProps {
  isDarkTheme: boolean;
  onExploreWork: () => void;
  onSelectGarment: (garment: Garment) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkTheme,
  onExploreWork,
  onSelectGarment,
}) => {
  const [activeGarmentIndex, setActiveGarmentIndex] = useState(0);
  const featuredGarment = GARMENTS[activeGarmentIndex] || GARMENTS[0];

  return (
    <section
      id="hero"
      className={`relative w-full min-h-screen select-none overflow-hidden flex flex-col justify-between transition-colors duration-700 pt-24 pb-12 ${
        isDarkTheme ? 'bg-gradient-to-b from-[#340718] via-[#2A0613] to-[#22040E] text-[#FAF2EE]' : 'bg-[#FDF6F4] text-[#220814]'
      }`}
    >
      {/* Background Big Typographic Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.035] overflow-hidden select-none">
        <span className="text-[26vw] font-serif-luxury font-black tracking-tighter uppercase whitespace-nowrap text-[#6E1A29]">
          DUALITY
        </span>
      </div>

      {/* Editorial Grid Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`w-full h-full ${
            isDarkTheme ? 'opacity-[0.04]' : 'opacity-[0.035]'
          } bg-editorial-dots`}
        />
        <div className="absolute bottom-16 right-8 sm:right-12 text-[9px] font-mono tracking-widest opacity-40 text-current">
          + THESIS_SPECIMEN_MATRIX_AW26
        </div>
      </div>

      {/* Main Center Editorial Stage */}
      <div className="relative z-20 flex-1 px-6 md:px-12 lg:px-16 flex items-center justify-center my-auto py-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Title & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
                HAUTE COUTURE & TEXTILE ARCHIVE
              </span>
            </div>

            <div className="space-y-2">
              <h1
                id="hero-main-title"
                className="text-5xl sm:text-7xl lg:text-8xl font-serif-luxury font-bold tracking-tight leading-[0.92] text-[#5C1322] dark:text-[#FAF6F0]"
              >
                DUALITY
              </h1>
              <p className="text-xs sm:text-sm font-sans-modern tracking-[0.18em] font-medium text-[#221B1C]/80 dark:text-[#F3EBE6]/80 pt-2 max-w-xl">
                Nine curated garments where contemporary Western silhouettes meet the essence of Indian tradition.
              </p>
            </div>

            <p className="text-xs sm:text-sm font-serif-luxury italic leading-relaxed text-[#221B1C]/85 dark:text-[#F3EBE6]/85 border-l-2 border-[#6E1A29]/50 pl-4 max-w-xl py-1">
              "A visual dialogue between two design languages — the refined character of Western fashion and the expressive character of ethnic wear."
            </p>

            {/* CTA & Explore Button */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-view-archive-btn"
                onClick={onExploreWork}
                className="px-8 py-3.5 rounded-full bg-[#6E1A29] hover:bg-[#802031] text-[#FAF6F0] text-[11px] font-sans-modern tracking-[0.22em] uppercase font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <span>Explore Full Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-inspect-current-look-btn"
                onClick={() => onSelectGarment(featuredGarment)}
                className={`px-6 py-3.5 rounded-full border text-[11px] font-sans-modern tracking-[0.2em] uppercase font-semibold flex items-center space-x-2 transition-all cursor-pointer ${
                  isDarkTheme
                    ? 'border-[#6E1A29]/50 hover:bg-white/5 text-[#FAF6F0]'
                    : 'border-[#D4C5B0] hover:bg-[#EFE8DE] text-[#221B1C]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#6E1A29] dark:text-[#D48B96]" />
                <span>Inspect Current Dossier</span>
              </button>
            </div>

            {/* Mini Specimen Selector Row */}
            <div className="pt-6 border-t border-[#D4C5B0]/50 dark:border-white/10 flex items-center space-x-3 overflow-x-auto pb-2">
              <span className="text-[9px] font-mono tracking-widest uppercase opacity-60 flex-shrink-0">
                SELECT LOOK:
              </span>
              {GARMENTS.map((g, idx) => (
                <button
                  key={g.id}
                  id={`hero-garment-tab-${g.id}`}
                  onClick={() => setActiveGarmentIndex(idx)}
                  className={`px-3 py-1 rounded-lg text-[9px] font-mono tracking-wider transition-all flex-shrink-0 cursor-pointer ${
                    activeGarmentIndex === idx
                      ? 'bg-[#6E1A29] text-white font-bold'
                      : isDarkTheme
                      ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                      : 'bg-[#EFE8DE] hover:bg-[#E2D8CC] text-[#221B1C]'
                  }`}
                >
                  LOOK 0{GARMENTS.indexOf(g) + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Featured Garment Card with Image Spotlight */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              id={`featured-garment-card-${featuredGarment.id}`}
              onClick={() => onSelectGarment(featuredGarment)}
              className="group relative w-full aspect-[3/4] max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#DCD0BF] dark:border-white/15 cursor-pointer bg-black/40 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img
                src={featuredGarment.heroImage}
                alt={featuredGarment.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if local asset hasn't mounted
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85';
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Look Tag Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full backdrop-blur-md bg-black/50 text-[9px] font-mono tracking-widest text-white/90 border border-white/20 uppercase font-bold">
                  {featuredGarment.category === 'western' ? 'WESTERN RIGOR' : 'ETHNIC HERITAGE'}
                </span>
                <span className="px-2.5 py-1 rounded-full backdrop-blur-md bg-[#6E1A29]/80 text-[9px] font-mono tracking-widest text-[#FAF6F0] border border-white/20 uppercase font-bold">
                  LOOK 0{GARMENTS.indexOf(featuredGarment) + 1}
                </span>
              </div>

              {/* Bottom Details Drawer on Card */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#E5DAC8]">
                  {featuredGarment.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-tight text-[#FAF6F0] group-hover:text-[#E5DAC8] transition-colors">
                  {featuredGarment.title}
                </h3>
                <p className="text-[11px] font-sans-modern line-clamp-2 opacity-80 leading-relaxed font-light">
                  {featuredGarment.concept}
                </p>

                {/* Color Swatch Preview Bar */}
                <div className="flex items-center space-x-2 pt-2">
                  <div className="flex -space-x-1">
                    {featuredGarment.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/40 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono opacity-75 uppercase tracking-wider pl-1">
                    View Technical Dossier →
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="relative z-20 px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-widest opacity-60 border-t border-current/10 pt-4">
        <div>
          ARCHIVE REF: HK-DUALITY-AW26 // 06 MASTER ENSEMBLES
        </div>
        <div className="flex items-center space-x-4 pt-2 sm:pt-0">
          <span>CURATED BY HETVI KAPADIA</span>
          <span>•</span>
          <span>B.DES FASHION DESIGN</span>
        </div>
      </div>
    </section>
  );
};
