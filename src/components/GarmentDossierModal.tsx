import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Layers, Sliders, ShieldCheck, Ruler, Palette } from 'lucide-react';
import { Garment } from '../types';
import { GARMENTS } from '../data/portfolioData';

interface GarmentDossierModalProps {
  garment: Garment | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectGarment: (garment: Garment) => void;
  isDarkTheme: boolean;
}

type TabType = 'concept' | 'textile' | 'notes';

export const GarmentDossierModal: React.FC<GarmentDossierModalProps> = ({
  garment,
  isOpen,
  onClose,
  onSelectGarment,
  isDarkTheme,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('concept');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !garment) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currIdx = GARMENTS.findIndex((g) => g.id === garment.id);
        const nextIdx = (currIdx + 1) % GARMENTS.length;
        onSelectGarment(GARMENTS[nextIdx]);
        setSelectedImageIndex(0);
      }
      if (e.key === 'ArrowLeft') {
        const currIdx = GARMENTS.findIndex((g) => g.id === garment.id);
        const prevIdx = (currIdx - 1 + GARMENTS.length) % GARMENTS.length;
        onSelectGarment(GARMENTS[prevIdx]);
        setSelectedImageIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, garment, onClose, onSelectGarment]);

  if (!isOpen || !garment) return null;

  const allImages = [garment.heroImage, ...(garment.galleryImages || [])].filter(
    (val, idx, self) => self.indexOf(val) === idx
  );
  const safeIndex = selectedImageIndex >= allImages.length ? 0 : selectedImageIndex;
  const currentImage = allImages[safeIndex] || garment.heroImage;
  const currentIndex = GARMENTS.findIndex((g) => g.id === garment.id);
  const prevGarment = GARMENTS[(currentIndex - 1 + GARMENTS.length) % GARMENTS.length];
  const nextGarment = GARMENTS[(currentIndex + 1) % GARMENTS.length];

  return (
    <div
      id="garment-dossier-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 backdrop-blur-2xl bg-black/80 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="garment-dossier-modal-container"
        className="relative w-full max-w-6xl max-h-[92vh] rounded-3xl border border-[#7D1B31]/70 shadow-[0_25px_70px_rgba(50,5,18,0.9)] overflow-hidden flex flex-col my-auto transition-all duration-300 bg-gradient-to-br from-[#38091B] via-[#280512] to-[#1A030A] text-[#FAF2EE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-current/10">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#6E1A29] text-white font-bold">
              LOOK 0{currentIndex + 1}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
              {garment.category.toUpperCase()} SILHOUETTE • YEAR {garment.year}
            </span>
          </div>

          {/* Controls: Prev/Next & Close */}
          <div className="flex items-center space-x-2">
            <button
              id="dossier-prev-btn"
              onClick={() => {
                onSelectGarment(prevGarment);
                setSelectedImageIndex(0);
              }}
              className="p-1.5 rounded-full border border-current/20 hover:bg-current/10 transition-all cursor-pointer"
              title="Previous Look"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="dossier-next-btn"
              onClick={() => {
                onSelectGarment(nextGarment);
                setSelectedImageIndex(0);
              }}
              className="p-1.5 rounded-full border border-current/20 hover:bg-current/10 transition-all cursor-pointer"
              title="Next Look"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              id="dossier-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#6E1A29] text-white hover:bg-[#852033] transition-all cursor-pointer ml-2"
              title="Close Dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left Column: Image Viewer & Gallery Strip */}
          <div className="lg:col-span-6 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-current/10 bg-black/10">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-current/10 bg-black/40 shadow-inner group">
              <img
                src={currentImage}
                alt={garment.title}
                className="w-full h-full object-cover object-top transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white/90 backdrop-blur-xs">
                FRAME {selectedImageIndex + 1} OF {allImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex items-center space-x-2 pt-4 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    id={`dossier-thumb-${idx}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-14 h-18 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-[#6E1A29] scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Deep Technical & Editorial Content */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
            
            {/* Title & Tagline */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-white">
                {garment.title}
              </h2>
              <p className="text-xs font-sans-modern italic opacity-85 leading-relaxed text-[#6E1A29] dark:text-[#D48B96]">
                "{garment.tagline}"
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-2 border-b border-current/10 pb-2 overflow-x-auto">
              <button
                id="dossier-tab-concept"
                onClick={() => setActiveTab('concept')}
                className={`text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'concept'
                    ? 'bg-[#6E1A29] text-white font-bold'
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                Concept & Mood
              </button>
              <button
                id="dossier-tab-textile"
                onClick={() => setActiveTab('textile')}
                className={`text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'textile'
                    ? 'bg-[#6E1A29] text-white font-bold'
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                Textile & Palette
              </button>
              <button
                id="dossier-tab-notes"
                onClick={() => setActiveTab('notes')}
                className={`text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'notes'
                    ? 'bg-[#6E1A29] text-white font-bold'
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                Atelier Notes
              </button>
            </div>

            {/* Tab 1: Concept & Mood */}
            {activeTab === 'concept' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                    CONCEPTUAL THESIS
                  </span>
                  <p className="text-xs sm:text-sm font-sans-modern leading-relaxed opacity-90">
                    {garment.concept}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                    INSPIRATION ROOTS
                  </span>
                  <p className="text-xs sm:text-sm font-sans-modern leading-relaxed opacity-90">
                    {garment.inspiration}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Textile & Palette */}
            {activeTab === 'textile' && (
              <div className="space-y-6">
                
                {/* Color Swatches */}
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                    COLOR FORMULATION & RATIOS
                  </span>
                  <div className={`${garment.colors.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} grid gap-3`}>
                    {garment.colors.map((c, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl border border-current/10 flex items-start space-x-3.5 bg-current/5"
                      >
                        <span
                          className="w-8 h-8 rounded-lg border border-black/30 shadow-xs flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="flex flex-col text-[10px] font-mono leading-relaxed">
                          <span className="font-bold text-xs">{c.name}</span>
                          <span className="opacity-75">
                            {c.hex} • {c.proportion}% {c.pantone ? `• Pantone: ${c.pantone}` : ''}
                          </span>
                          <span className="text-[10px] opacity-70">
                            Usage: {c.usage}
                          </span>
                          {c.placement && (
                            <span className="text-[9px] opacity-60 pt-0.5">
                              Placement: {c.placement}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material Specs */}
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                    MATERIAL SPECIFICATIONS
                  </span>
                  <div className="space-y-2">
                    {garment.materials.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl border border-current/10 bg-current/5 space-y-1 text-xs font-sans-modern"
                      >
                        <div className="font-bold">
                          <span>{m.name}</span>
                        </div>
                        {m.description ? (
                          <p className="text-[11px] leading-relaxed opacity-85 pt-0.5 font-sans-modern">
                            {m.description.startsWith('Description: ') ? (
                              <>
                                <span className="font-semibold opacity-75">Description: </span>
                                <span>{m.description.replace('Description: ', '')}</span>
                              </>
                            ) : (
                              m.description
                            )}
                          </p>
                        ) : (
                          <>
                            <p className="text-[11px] opacity-80">Comp: {m.composition}</p>
                            <p className="text-[10px] opacity-70">Texture: {m.texture} | Drape: {m.drape}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Textile Techniques */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                    SURFACE TECHNIQUES
                  </span>
                  <ul className="list-disc list-inside text-xs font-sans-modern space-y-1.5 opacity-90">
                    {garment.textileTechniques.map((t, i) => {
                      const divider = t.includes(' — ') ? ' — ' : (t.includes(' - ') ? ' - ' : null);
                      if (divider) {
                        const [title, ...rest] = t.split(divider);
                        return (
                          <li key={i} className="leading-relaxed">
                            <span className="font-semibold text-[#6E1A29] dark:text-[#D48B96]">{title}</span>
                            <span className="opacity-75"> — </span>
                            <span>{rest.join(divider)}</span>
                          </li>
                        );
                      }
                      return (
                        <li key={i} className="leading-relaxed">{t}</li>
                      );
                    })}
                  </ul>
                </div>

              </div>
            )}

            {/* Tab 3: Atelier Notes */}
            {activeTab === 'notes' && (
              <div className="space-y-4">
                <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                  DEVELOPMENT MILESTONES & PROTOTYPING
                </span>
                <div className="space-y-3">
                  {garment.developmentNotes.map((note, i) => {
                    const matchEntry = note.match(/^(Entry\s+\d+\s*[-—:]\s*[^:]+):\s*(.*)$/i);
                    let label = `ATELIER RECORD • ENTRY 0${i + 1}`;
                    let content = note;

                    if (matchEntry) {
                      label = matchEntry[1];
                      content = matchEntry[2];
                    }

                    return (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-[#6E1A29]/20 bg-[#6E1A29]/5 dark:bg-[#D48B96]/5 space-y-1 text-xs font-sans-modern"
                      >
                        <span className="text-[9px] font-mono text-[#6E1A29] dark:text-[#D48B96] font-bold uppercase tracking-wider">
                          {label}
                        </span>
                        <p className="leading-relaxed opacity-90 whitespace-pre-line">{content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Footer Atelier Tag */}
            <div className="pt-4 border-t border-current/10 flex justify-between items-center text-[9px] font-mono opacity-60">
              <span>DESIGNED BY HETVI KAPADIA</span>
              <span>AHMEDABAD ATELIER // AW26</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
