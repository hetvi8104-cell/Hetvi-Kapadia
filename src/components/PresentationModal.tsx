import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize, Minimize, Compass, Quote } from 'lucide-react';
import { PRESENTATION_SLIDES, DESIGNER_INFO } from '../data/portfolioData';
import { PresentationSlide } from '../types';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkTheme: boolean;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  isDarkTheme,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = PRESENTATION_SLIDES[currentSlideIndex] || PRESENTATION_SLIDES[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlideIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex(
          (prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div
      id="presentation-deck-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 backdrop-blur-2xl bg-black/90 select-none overflow-hidden"
    >
      {/* Slide Canvas Container */}
      <div
        id="presentation-slide-card"
        className="relative w-full max-w-7xl aspect-[16/10] max-h-[92vh] rounded-3xl border border-[#7D1B31]/70 shadow-[0_25px_70px_rgba(50,5,18,0.9)] flex flex-col justify-between overflow-hidden transition-all duration-300 bg-gradient-to-br from-[#38091B] via-[#280512] to-[#1A030A] text-[#FAF2EE]"
      >
        {/* Slide Deck Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-[#7D1B31]/30 bg-[#280512]/50 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#E59CA8]">
              {slide.sectionTitle}
            </span>
            <span className="text-[10px] font-mono text-white/50">
              • SLIDE {currentSlideIndex + 1} OF {PRESENTATION_SLIDES.length}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              id="presentation-fullscreen-btn"
              onClick={toggleFullscreen}
              className="p-2 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-all cursor-pointer"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
            <button
              id="presentation-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-[#7D1B31] text-white hover:bg-[#96213B] transition-all cursor-pointer ml-2 shadow-md shadow-[#4A0B1A]/60"
              title="Close Presentation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Slide Content Area */}
        <div className="flex-1 p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-y-auto">
          
          {/* Left Text Block */}
          <div className={`space-y-6 ${slide.heroImage ? 'lg:col-span-7' : 'lg:col-span-12 max-w-3xl mx-auto'}`}>
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#E59CA8] font-bold">
                {slide.subtitle}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold tracking-tight text-[#FFF7F4]">
                {slide.title}
              </h2>
            </div>

            {/* Quote if exists */}
            {slide.quote && (
              <blockquote className="text-sm sm:text-base font-serif-luxury italic border-l-2 border-[#942036] pl-4 py-1 text-[#F3D5DB]">
                {slide.quote}
              </blockquote>
            )}

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm font-sans-modern leading-relaxed text-[#F5EBE6]/90">
              {slide.bodyText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bullet Points */}
            {slide.bulletPoints && (
              <div className="space-y-2 pt-2">
                {slide.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs font-sans-modern">
                    <span className="text-[#E59CA8] font-bold mt-0.5">•</span>
                    <span className="text-[#F5EBE6]/90">{bp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Visual if exists */}
          {slide.heroImage && (
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden border border-[#7D1B31]/40 shadow-2xl bg-black/50">
                <img
                  src={slide.heroImage}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                {slide.caption && (
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-white/95 bg-black/70 p-2.5 rounded-lg border border-white/10 backdrop-blur-xs">
                    {slide.caption}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Slide Deck Bottom Control Bar */}
        <div className="px-6 sm:px-10 py-4 border-t border-[#7D1B31]/30 bg-[#280512]/50 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              id="presentation-prev-slide-btn"
              onClick={() =>
                setCurrentSlideIndex(
                  (prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length
                )
              }
              className="px-4 py-2 rounded-full border border-white/20 text-white/90 text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>
            <button
              id="presentation-next-slide-btn"
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length)
              }
              className="px-5 py-2 rounded-full bg-[#7D1B31] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#96213B] transition-all cursor-pointer flex items-center space-x-1 shadow-md shadow-[#4A0B1A]/50"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="hidden sm:flex items-center space-x-1.5">
            {PRESENTATION_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlideIndex === i
                    ? 'w-6 bg-[#E59CA8]'
                    : 'w-2.5 bg-white/25 hover:bg-white/50'
                }`}
                title={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-[10px] font-mono text-white/50 uppercase">
            Arrow Keys to Navigate
          </span>
        </div>

      </div>
    </div>
  );
};
