import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Palette,
  Sparkles,
  Compass,
  FileText,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { Garment } from '../types';
import { GARMENTS } from '../data/portfolioData';
import { GarmentBackdropWatermark } from './GarmentBackdropWatermark';

interface GarmentDossierModalProps {
  garment: Garment | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectGarment: (garment: Garment) => void;
  isDarkTheme: boolean;
}

type TabType = 'concept' | 'theme' | 'inspiration' | 'textile';

export const GarmentDossierModal: React.FC<GarmentDossierModalProps> = ({
  garment: garmentProp,
  isOpen,
  onClose,
  onSelectGarment,
}) => {
  const garment = garmentProp ? GARMENTS.find((g) => g.id === garmentProp.id) || garmentProp : null;
  const [activeTab, setActiveTab] = useState<TabType>('concept');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<{
    url: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !garment) return;
      if (e.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(null);
          return;
        }
        onClose();
        return;
      }
      if (fullscreenImage) return;
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
  }, [isOpen, garment, onClose, onSelectGarment, fullscreenImage]);

  if (!isOpen || !garment) return null;

  const currentIndex = GARMENTS.findIndex((g) => g.id === garment.id);
  const prevGarment = GARMENTS[(currentIndex - 1 + GARMENTS.length) % GARMENTS.length];
  const nextGarment = GARMENTS[(currentIndex + 1) % GARMENTS.length];

  const accentColor = garment.backdropStyle?.accentColor || '#E0B069';
  const containerGradient =
    garment.backdropStyle?.gradient || 'from-[#14060C] via-[#0D0307] to-[#060103]';

  // Extract exactly ONE featured image for Theme Board and ONE for Inspiration Board
  // Prioritize dedicated mood/inspiration visuals over duplicate hero runway photos
  const nonHeroTheme = garment.themeBoard?.visualElements?.find(
    (v) => v.url && v.url !== garment.heroImage && !garment.galleryImages?.includes(v.url)
  );
  const featuredThemeImage = nonHeroTheme
    ? {
        url: nonHeroTheme.url,
        caption: nonHeroTheme.caption || garment.themeBoard?.title || 'Theme Atmosphere',
        tag: nonHeroTheme.tag || 'THEME BOARD',
      }
    : garment.moodboard?.image
    ? {
        url: garment.moodboard.image,
        caption: garment.moodboard.description || garment.themeBoard?.title || 'Curated Moodboard',
        tag: 'THEME MOODBOARD',
      }
    : garment.themeBoard?.visualElements?.[0]
    ? {
        url: garment.themeBoard.visualElements[0].url,
        caption: garment.themeBoard.visualElements[0].caption,
        tag: garment.themeBoard.visualElements[0].tag || 'THEME ATMOSPHERE',
      }
    : null;

  const nonHeroInspo = garment.inspirationBoard?.visualReferences?.find(
    (r) => r.url && r.url !== garment.heroImage && !garment.galleryImages?.includes(r.url)
  );
  const featuredInspoImage = nonHeroInspo
    ? {
        url: nonHeroInspo.url,
        label: nonHeroInspo.label || garment.inspirationBoard?.title || 'Inspiration Specimen',
        context: nonHeroInspo.context || '',
      }
    : garment.inspirationBoard?.visualReferences && garment.inspirationBoard.visualReferences.length > 1
    ? {
        url: garment.inspirationBoard.visualReferences[1].url,
        label: garment.inspirationBoard.visualReferences[1].label,
        context: garment.inspirationBoard.visualReferences[1].context,
      }
    : garment.moodboard?.image
    ? {
        url: garment.moodboard.image,
        label: garment.inspirationBoard?.title || garment.moodboard.title || 'Inspiration Board Archive',
        context: garment.moodboard.description || '',
      }
    : garment.inspirationBoard?.visualReferences?.[0]
    ? {
        url: garment.inspirationBoard.visualReferences[0].url,
        label: garment.inspirationBoard.visualReferences[0].label,
        context: garment.inspirationBoard.visualReferences[0].context,
      }
    : null;

  // Media items for the stage viewer: Garment runway photos ONLY (strictly no theme or inspiration visuals in the stage frame)
  const allStageImages = [garment.heroImage, ...(garment.galleryImages || [])].filter(
    (val, idx, self): val is string => Boolean(val) && self.indexOf(val) === idx
  );

  const safeIndex = selectedImageIndex >= allStageImages.length ? 0 : selectedImageIndex;
  const currentImage = allStageImages[safeIndex] || garment.heroImage;

  return (
    <div
      id="garment-dossier-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 backdrop-blur-2xl bg-black/85 overflow-hidden"
      onClick={onClose}
    >
      <div
        id="garment-dossier-modal-container"
        className={`relative w-full max-w-6xl max-h-[94vh] h-[94vh] rounded-3xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col transition-all duration-500 bg-gradient-to-br ${containerGradient} text-[#FAF2EE]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Unique Garment Atmospheric Background Watermark */}
        <GarmentBackdropWatermark garment={garment} />

        {/* Modal Top Bar - Permanently Pinned */}
        <div className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-3 border-b border-white/15 backdrop-blur-md bg-black/45 flex-shrink-0">
          <div className="flex items-center space-x-3 overflow-hidden">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold text-black shadow-sm flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            >
              LOOK 0{currentIndex + 1}
            </span>
            <div className="flex items-baseline space-x-2 truncate">
              <h2 className="text-sm sm:text-base md:text-lg font-serif-luxury font-bold text-white tracking-wide truncate">
                {garment.title}
              </h2>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider text-white/70 truncate">
                • {garment.subtitle}
              </span>
            </div>
          </div>

          {/* Controls: Prev/Next & Close */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              id="dossier-prev-btn"
              onClick={() => {
                onSelectGarment(prevGarment);
                setSelectedImageIndex(0);
              }}
              className="p-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-all cursor-pointer text-white/80 hover:text-white"
              title="Previous Look (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="dossier-next-btn"
              onClick={() => {
                onSelectGarment(nextGarment);
                setSelectedImageIndex(0);
              }}
              className="p-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-all cursor-pointer text-white/80 hover:text-white"
              title="Next Look (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              id="dossier-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-full text-black hover:scale-105 transition-all cursor-pointer ml-2 shadow-md"
              style={{ backgroundColor: accentColor }}
              title="Close Dossier (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two Column Responsive Layout with Independent Scrolling */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-hidden">
          
          {/* Left Column: Garment Runway & Archive Stage Viewer */}
          <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto border-b lg:border-b-0 lg:border-r border-white/10 bg-black/25">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl group flex-shrink-0">
              <img
                src={currentImage}
                alt={garment.title}
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80';
                }}
              />

              {/* Top Image Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[9px] font-mono text-white/90 border border-white/10 flex items-center space-x-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
                <span>FRAME {safeIndex + 1} OF {allStageImages.length}</span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allStageImages.length > 1 && (
              <div className="pt-3 space-y-2 flex-shrink-0">
                <div className="flex items-center justify-between text-[9px] font-mono opacity-70 px-1">
                  <span>SPECIMEN FRAMES</span>
                  <span>{allStageImages.length} VIEWS</span>
                </div>
                <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
                  {allStageImages.map((img, idx) => {
                    const isSelected = safeIndex === idx;
                    return (
                      <button
                        key={idx}
                        id={`dossier-thumb-${idx}`}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-12 h-16 sm:w-14 sm:h-18 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                          isSelected
                            ? 'scale-105 shadow-lg'
                            : 'border-white/15 opacity-60 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: isSelected ? accentColor : undefined,
                        }}
                      >
                        <img
                          src={img}
                          alt={`Thumb ${idx}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {isSelected && (
                          <div
                            className="absolute bottom-0 inset-x-0 h-1"
                            style={{ backgroundColor: accentColor }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Deep Content with ALWAYS VISIBLE Sticky Header and Tab Navigation */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-0 overflow-hidden bg-black/10">
            
            {/* Pinned Sticky Header: Look Title, Subtitle, Tagline, Palette & Tab Nav (NEVER HIDES) */}
            <div className="flex-shrink-0 p-5 sm:p-6 border-b border-white/15 bg-black/50 backdrop-blur-xl space-y-3 z-20">
              
              {/* Title & Tagline Row */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1 max-w-lg">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-bold tracking-tight text-white leading-tight">
                    {garment.title}
                  </h2>
                  <p
                    className="text-xs sm:text-sm font-sans-modern italic font-medium leading-relaxed"
                    style={{ color: accentColor }}
                  >
                    "{garment.tagline}"
                  </p>
                </div>

                {/* Palette Quick Row */}
                <div className="flex items-center space-x-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                  <span className="text-[9px] font-mono text-white/70 mr-1">PALETTE:</span>
                  {garment.colors.map((col, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-xs"
                      style={{ backgroundColor: col.hex }}
                      title={`${col.name} (${col.hex})`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Tabs (Concept & Form, Theme Board, Inspiration Board, Textile & Specs) */}
              <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pt-1 pb-1">
                <button
                  id="dossier-tab-concept"
                  onClick={() => setActiveTab('concept')}
                  className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase py-2 px-3 sm:px-3.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                    activeTab === 'concept'
                      ? 'text-black font-bold shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'concept' ? accentColor : undefined,
                  }}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Concept & Form</span>
                </button>

                <button
                  id="dossier-tab-theme"
                  onClick={() => setActiveTab('theme')}
                  className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase py-2 px-3 sm:px-3.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                    activeTab === 'theme'
                      ? 'text-black font-bold shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'theme' ? accentColor : undefined,
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Theme Board</span>
                </button>

                <button
                  id="dossier-tab-inspiration"
                  onClick={() => setActiveTab('inspiration')}
                  className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase py-2 px-3 sm:px-3.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                    activeTab === 'inspiration'
                      ? 'text-black font-bold shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'inspiration' ? accentColor : undefined,
                  }}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Inspiration Board</span>
                </button>

                <button
                  id="dossier-tab-textile"
                  onClick={() => setActiveTab('textile')}
                  className={`text-[10px] sm:text-[11px] font-mono tracking-wider uppercase py-2 px-3 sm:px-3.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                    activeTab === 'textile'
                      ? 'text-black font-bold shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'textile' ? accentColor : undefined,
                  }}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Textile & Specs</span>
                </button>
              </div>

            </div>

            {/* Scrollable Tab Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 scrollbar-thin">
              
              {/* TAB 1: CONCEPT & SILHOUETTE ARCHITECTURE */}
              {activeTab === 'concept' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Prominent High-Visibility Section Banner */}
                  <div
                    className="p-3.5 rounded-2xl border bg-black/40 flex items-center justify-between"
                    style={{ borderColor: `${accentColor}40` }}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Layers className="w-4 h-4" style={{ color: accentColor }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        CONCEPT & SILHOUETTE ARCHITECTURE
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold" style={{ color: accentColor }}>
                      {garment.title}
                    </span>
                  </div>

                  {/* Conceptual Thesis */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      CONCEPTUAL THESIS & DESIGN INTENT
                    </span>
                    <p className="text-xs sm:text-sm font-sans-modern leading-relaxed text-white/95 bg-white/5 p-4 rounded-xl border border-white/10">
                      {garment.concept}
                    </p>
                  </div>

                  {/* Inspiration Genesis */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      INSPIRATION GENESIS
                    </span>
                    <p className="text-xs sm:text-sm font-sans-modern leading-relaxed text-white/90 bg-white/5 p-4 rounded-xl border border-white/10">
                      {garment.inspiration}
                    </p>
                  </div>

                  {/* Silhouette Architecture */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      SILHOUETTE GEOMETRY & DRAPE
                    </span>
                    <div
                      className="p-4 rounded-xl border bg-black/40 space-y-1.5"
                      style={{ borderColor: `${accentColor}30` }}
                    >
                      <span className="text-xs sm:text-sm font-serif-luxury font-bold text-white block">
                        {garment.subtitle}
                      </span>
                      <p className="text-xs font-sans-modern leading-relaxed text-white/85">
                        {garment.silhouette}
                      </p>
                    </div>
                  </div>

                  {/* Tech Flats Annotations */}
                  {garment.techFlats?.annotations?.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                        TECHNICAL FLAT & PATTERN ANNOTATIONS
                      </span>
                      <ul className="space-y-2 text-xs font-sans-modern">
                        {garment.techFlats.annotations.map((ann, aIdx) => (
                          <li key={aIdx} className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-lg border border-white/5">
                            <span className="font-mono text-[10px] font-bold mt-0.5" style={{ color: accentColor }}>
                              [{aIdx + 1}]
                            </span>
                            <span className="text-white/90 leading-relaxed">{ann}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}

              {/* TAB 2: THEME BOARD (JUST IMAGE WITH CLICK OPTION - NO TEXTS) */}
              {activeTab === 'theme' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Top Bar Header */}
                  <div
                    className="p-3 sm:p-3.5 rounded-2xl border bg-black/40 flex items-center justify-between"
                    style={{ borderColor: `${accentColor}40` }}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        THEME BOARD
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded border uppercase"
                      style={{ borderColor: `${accentColor}50`, color: accentColor }}
                    >
                      CLICK IMAGE TO ENLARGE / PREVIEW
                    </span>
                  </div>

                  {/* Clean Visual Board: Just the Image with Click Option */}
                  {featuredThemeImage ? (
                    <div
                      id="theme-board-card"
                      onClick={() => {
                        setFullscreenImage({
                          url: featuredThemeImage.url,
                          title: `${garment.title} // THEME BOARD`,
                          subtitle: `LOOK 0${currentIndex + 1} ATMOSPHERIC SPECIMEN`,
                        });
                      }}
                      className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-white/40 bg-black/60 shadow-2xl cursor-pointer transition-all duration-300"
                    >
                      {/* Main Image Frame */}
                      <div className="w-full max-h-[58vh] min-h-[340px] flex items-center justify-center bg-black/50 overflow-hidden relative p-2 sm:p-3">
                        <img
                          src={featuredThemeImage.url}
                          alt="Theme Board"
                          className="w-full h-full max-h-[55vh] object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />

                        {/* Center Hover Prompt Indicator */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div
                            className="px-4 py-2 rounded-full backdrop-blur-md bg-black/85 border text-xs font-mono font-bold tracking-wider flex items-center space-x-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform"
                            style={{ borderColor: accentColor, color: accentColor }}
                          >
                            <Maximize2 className="w-4 h-4" />
                            <span>CLICK TO VIEW FULL BOARD</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Interactive Toolbar */}
                      <div className="p-3 sm:p-3.5 bg-gradient-to-t from-black/95 via-black/85 to-black/70 border-t border-white/10 flex items-center justify-between gap-2.5">
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-white">
                            THEME BOARD SPECIMEN
                          </span>
                        </div>
                        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => {
                              setFullscreenImage({
                                url: featuredThemeImage.url,
                                title: `${garment.title} // THEME BOARD`,
                                subtitle: `LOOK 0${currentIndex + 1} ATMOSPHERIC SPECIMEN`,
                              });
                            }}
                            className="text-[10px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-lg font-bold shadow-md transition-all flex items-center space-x-1.5 cursor-pointer text-black hover:opacity-90"
                            style={{ backgroundColor: accentColor }}
                            title="Open full-resolution lightbox view"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>VIEW FULLSCREEN</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-xs font-mono opacity-70 border border-dashed border-white/20 rounded-2xl">
                      Theme board specimen being indexed.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: INSPIRATION BOARD (JUST IMAGE WITH CLICK OPTION - NO TEXTS) */}
              {activeTab === 'inspiration' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Top Bar Header */}
                  <div
                    className="p-3 sm:p-3.5 rounded-2xl border bg-black/40 flex items-center justify-between"
                    style={{ borderColor: `${accentColor}40` }}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Compass className="w-4 h-4" style={{ color: accentColor }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        INSPIRATION BOARD
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded border uppercase"
                      style={{ borderColor: `${accentColor}50`, color: accentColor }}
                    >
                      CLICK IMAGE TO ENLARGE / PREVIEW
                    </span>
                  </div>

                  {/* Clean Visual Board: Just the Image with Click Option */}
                  {featuredInspoImage ? (
                    <div
                      id="inspiration-board-card"
                      onClick={() => {
                        setFullscreenImage({
                          url: featuredInspoImage.url,
                          title: `${garment.title} // INSPIRATION BOARD`,
                          subtitle: `LOOK 0${currentIndex + 1} ARCHIVAL SPECIMEN`,
                        });
                      }}
                      className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-white/40 bg-black/60 shadow-2xl cursor-pointer transition-all duration-300"
                    >
                      {/* Main Image Frame */}
                      <div className="w-full max-h-[58vh] min-h-[340px] flex items-center justify-center bg-black/50 overflow-hidden relative p-2 sm:p-3">
                        <img
                          src={featuredInspoImage.url}
                          alt="Inspiration Board"
                          className="w-full h-full max-h-[55vh] object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />

                        {/* Center Hover Prompt Indicator */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div
                            className="px-4 py-2 rounded-full backdrop-blur-md bg-black/85 border text-xs font-mono font-bold tracking-wider flex items-center space-x-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform"
                            style={{ borderColor: accentColor, color: accentColor }}
                          >
                            <Maximize2 className="w-4 h-4" />
                            <span>CLICK TO VIEW FULL BOARD</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Interactive Toolbar */}
                      <div className="p-3 sm:p-3.5 bg-gradient-to-t from-black/95 via-black/85 to-black/70 border-t border-white/10 flex items-center justify-between gap-2.5">
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-white">
                            INSPIRATION BOARD SPECIMEN
                          </span>
                        </div>
                        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => {
                              setFullscreenImage({
                                url: featuredInspoImage.url,
                                title: `${garment.title} // INSPIRATION BOARD`,
                                subtitle: `LOOK 0${currentIndex + 1} ARCHIVAL SPECIMEN`,
                              });
                            }}
                            className="text-[10px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-lg font-bold shadow-md transition-all flex items-center space-x-1.5 cursor-pointer text-black hover:opacity-90"
                            style={{ backgroundColor: accentColor }}
                            title="Open full-resolution lightbox view"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>VIEW FULLSCREEN</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-xs font-mono opacity-70 border border-dashed border-white/20 rounded-2xl">
                      Inspiration board specimen being indexed.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: TEXTILE & MATERIAL SPECIFICATIONS */}
              {activeTab === 'textile' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Prominent High-Visibility Section Banner */}
                  <div
                    className="p-3.5 rounded-2xl border bg-black/40 flex items-center justify-between"
                    style={{ borderColor: `${accentColor}40` }}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Palette className="w-4 h-4" style={{ color: accentColor }} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        TEXTILE & MATERIAL SPECIFICATIONS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold" style={{ color: accentColor }}>
                      {garment.title}
                    </span>
                  </div>

                  {/* Color Swatches */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      COLOR FORMULATION & RATIOS
                    </span>
                    <div className={`${garment.colors.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} grid gap-3`}>
                      {garment.colors.map((c, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl border border-white/15 flex items-start space-x-3.5 bg-black/40"
                        >
                          <span
                            className="w-9 h-9 rounded-lg border border-white/30 shadow-sm flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: c.hex }}
                          />
                          <div className="flex flex-col text-[10px] font-mono leading-relaxed">
                            <span className="font-bold text-xs text-white">{c.name}</span>
                            <span className="text-white/80">
                              {c.hex} • {c.proportion}% {c.pantone ? `• Pantone: ${c.pantone}` : ''}
                            </span>
                            <span className="text-white/70 pt-0.5">
                              Usage: {c.usage}
                            </span>
                            {c.placement && (
                              <span className="text-white/60 pt-0.5 text-[9px]">
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
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      MATERIAL SPECIFICATIONS & COMPOSITION
                    </span>
                    <div className="space-y-2.5">
                      {garment.materials.map((m, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl border border-white/15 bg-white/5 space-y-1.5 text-xs font-sans-modern"
                        >
                          <div className="font-bold flex items-center justify-between">
                            <span className="text-white text-xs">{m.name}</span>
                            {m.weight && (
                              <span className="font-mono text-[9px] px-2.5 py-0.5 rounded bg-black/40 border border-white/10" style={{ color: accentColor }}>
                                {m.weight}
                              </span>
                            )}
                          </div>
                          {m.description ? (
                            <p className="text-[11px] leading-relaxed text-white/85 pt-0.5 font-sans-modern">
                              {m.description.startsWith('Description: ')
                                ? m.description.replace('Description: ', '')
                                : m.description}
                            </p>
                          ) : (
                            <>
                              <p className="text-[11px] text-white/80">Comp: {m.composition}</p>
                              <p className="text-[10px] text-white/70 font-mono">
                                Texture: {m.texture} | Drape: {m.drape}
                              </p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Surface Techniques */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      SURFACE TECHNIQUES & ORNAMENTATION
                    </span>
                    <ul className="space-y-2 text-xs font-sans-modern">
                      {garment.textileTechniques.map((t, i) => {
                        const divider = t.includes(': ') ? ': ' : (t.includes(' — ') ? ' — ' : (t.includes(' - ') ? ' - ' : null));
                        if (divider) {
                          const [title, ...rest] = t.split(divider);
                          return (
                            <li key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 leading-relaxed">
                              <span className="font-bold text-xs" style={{ color: accentColor }}>{title}</span>
                              <span className="opacity-60">{divider === ': ' ? ': ' : ' — '}</span>
                              <span className="text-white/90">{rest.join(divider)}</span>
                            </li>
                          );
                        }
                        return (
                          <li key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 leading-relaxed text-white/90">
                            {t}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal for Theme & Inspiration Boards */}
      {fullscreenImage && (
        <div
          id="board-lightbox-overlay"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-6 animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Lightbox Header Bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl bg-black/70 border border-white/20 backdrop-blur-md z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-serif-luxury font-bold text-white tracking-wide">
                {fullscreenImage.title}
              </h3>
              {fullscreenImage.subtitle && (
                <p className="text-[10px] font-mono tracking-wider uppercase text-white/70">
                  {fullscreenImage.subtitle}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline-block text-[10px] font-mono text-white/50">
                ESC or click backdrop to exit
              </span>
              <button
                type="button"
                id="close-lightbox-btn"
                onClick={() => setFullscreenImage(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white cursor-pointer transition-all hover:scale-105"
                title="Close Fullscreen View (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Full Size Specimen Image */}
          <div
            className="flex-1 w-full max-w-6xl flex items-center justify-center p-2 sm:p-4 min-h-0 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.title}
              className="max-h-[78vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Lightbox Footer Note */}
          <div className="text-[10px] font-mono text-white/60 text-center py-1 z-20">
            HAUTE COUTURE ARCHIVE • CURATED BY HETVI KAPADIA
          </div>
        </div>
      )}
    </div>
  );
};
