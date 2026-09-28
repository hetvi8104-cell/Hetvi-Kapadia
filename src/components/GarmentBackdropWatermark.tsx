import React from 'react';
import { Garment } from '../types';

interface GarmentBackdropWatermarkProps {
  garment: Garment;
}

export const GarmentBackdropWatermark: React.FC<GarmentBackdropWatermarkProps> = ({ garment }) => {
  const patternType = garment.backdropStyle?.patternType || 'architectural-grid';
  const accentColor = garment.backdropStyle?.accentColor || '#E0B069';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Dynamic Ambient Color Mesh */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 transition-all duration-700"
        style={{ backgroundColor: garment.colors[0]?.hex || accentColor }}
      />

      {/* Garment Hero Image Ghost Backdrop */}
      {garment.heroImage && (
        <div
          className="absolute inset-0 opacity-10 mix-blend-screen bg-cover bg-center filter blur-xl scale-110 transition-all duration-1000"
          style={{ backgroundImage: `url(${garment.heroImage})` }}
        />
      )}

      {/* Pattern Type Specific SVG Watermarks */}
      {patternType === 'architectural-grid' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="currentColor" />
              <circle cx="60" cy="60" r="1.5" fill="currentColor" />
              <path d="M 0 60 L 60 0" fill="none" strokeWidth="0.3" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      )}

      {patternType === 'corduroy-rib' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="cord-ribs" width="16" height="40" patternUnits="userSpaceOnUse">
              <line x1="4" y1="0" x2="4" y2="40" strokeWidth="2" />
              <line x1="12" y1="0" x2="12" y2="40" strokeWidth="0.6" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cord-ribs)" />
        </svg>
      )}

      {patternType === 'industrial-lattice' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="leather-lattice" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 0 24 L 24 0 L 48 24 L 24 48 Z" fill="none" strokeWidth="1" />
              <circle cx="24" cy="24" r="3" fill="none" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="currentColor" />
              <circle cx="48" cy="48" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leather-lattice)" />
        </svg>
      )}

      {patternType === 'minimalist-waves' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 C300,50 600,350 1100,180"
            fill="none"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M-100,380 C300,230 600,530 1100,360"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M-100,560 C300,410 600,710 1100,540"
            fill="none"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
        </svg>
      )}

      {patternType === 'bandhani-dots' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.09] fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="bandhani-matrix" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2.5" />
              <circle cx="20" cy="20" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="5" cy="5" r="1.5" />
              <circle cx="35" cy="5" r="1.5" />
              <circle cx="5" cy="35" r="1.5" />
              <circle cx="35" cy="35" r="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bandhani-matrix)" />
        </svg>
      )}

      {patternType === 'patola-ikat' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="patola-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <rect x="14" y="14" width="28" height="28" fill="none" strokeWidth="0.8" />
              <path d="M 28 0 L 56 28 L 28 56 L 0 28 Z" fill="none" strokeWidth="0.8" strokeDasharray="3 2" />
              <circle cx="28" cy="28" r="3.5" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#patola-grid)" />
        </svg>
      )}

      {patternType === 'jaali-lattice' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="jaali-lattice-patt" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="16" fill="none" strokeWidth="0.8" />
              <path d="M 0 25 C 12 25, 25 12, 25 0 M 25 50 C 25 38, 38 25, 50 25 M 0 25 C 12 25, 25 38, 25 50 M 25 0 C 25 12, 38 25, 50 25" fill="none" strokeWidth="0.6" />
              <circle cx="25" cy="25" r="4" fill="none" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jaali-lattice-patt)" />
        </svg>
      )}

      {patternType === 'warli-tribal' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="warli-patt" width="64" height="64" patternUnits="userSpaceOnUse">
              {/* Warli Triangular Figure */}
              <polygon points="32,24 24,34 40,34" fill="currentColor" />
              <polygon points="32,44 24,34 40,34" fill="currentColor" />
              <circle cx="32" cy="20" r="3" fill="currentColor" />
              <line x1="26" y1="29" x2="18" y2="25" strokeWidth="1.2" />
              <line x1="38" y1="29" x2="46" y2="25" strokeWidth="1.2" />
              <line x1="28" y1="44" x2="24" y2="52" strokeWidth="1.2" />
              <line x1="36" y1="44" x2="40" y2="52" strokeWidth="1.2" />
              {/* Sun/Mirror Symbol */}
              <circle cx="10" cy="10" r="4" fill="none" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warli-patt)" />
        </svg>
      )}

      {patternType === 'botanical-leaves' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.09] stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="botanical-leaf-patt" width="70" height="70" patternUnits="userSpaceOnUse">
              <path
                d="M 35 10 C 20 25, 20 45, 35 60 C 50 45, 50 25, 35 10 Z"
                fill="none"
                strokeWidth="1"
              />
              <line x1="35" y1="10" x2="35" y2="60" strokeWidth="0.8" />
              <line x1="35" y1="25" x2="26" y2="32" strokeWidth="0.6" />
              <line x1="35" y1="35" x2="44" y2="42" strokeWidth="0.6" />
              <line x1="35" y1="45" x2="27" y2="51" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#botanical-leaf-patt)" />
        </svg>
      )}

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};
