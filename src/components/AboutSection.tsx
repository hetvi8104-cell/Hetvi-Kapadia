import React from 'react';
import { Award, Compass, Sparkles, Scissors, CheckCircle2, Bookmark } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  isDarkTheme: boolean;
  onExploreWork: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkTheme, onExploreWork }) => {
  return (
    <section
      id="about"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#22040E] text-[#FAF2EE] border-[#7D1B31]/40'
          : 'bg-[#FDF6F4] text-[#220814] border-[#EAD5D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header Eyebrow */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
            <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
              01 • CREATIVE THESIS & DESIGNER PROFILE
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
          >
            Hetvi Kapadia — Material Explorer
          </h2>
          <p className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase font-medium text-[#6E1A29] dark:text-[#D48B96]">
            {DESIGNER_INFO.institution} • {DESIGNER_INFO.cgpa} • {DESIGNER_INFO.minor}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Designer Studio Portrait & Identity Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative group rounded-3xl overflow-hidden border border-[#DCD0BF] dark:border-white/10 shadow-xl bg-stone-900 aspect-[4/5]">
              <img
                id="about-designer-portrait-img"
                src={DESIGNER_INFO.portraitImage}
                alt={DESIGNER_INFO.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#D48B96]">
                  ATELIER CREATIVE DIRECTOR
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-white tracking-wide">
                  {DESIGNER_INFO.name}
                </h3>
                <p className="text-[11px] font-sans-modern tracking-wider text-stone-300">
                  {DESIGNER_INFO.institution} • Ahmedabad Atelier
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E1A29] dark:text-[#D48B96] font-bold">
                  ACADEMIC MERIT
                </span>
                <p className="text-xl sm:text-2xl font-serif-luxury font-bold mt-1 text-[#221B1C] dark:text-white">
                  9.0 CGPA
                </p>
                <p className="text-[10px] font-sans-modern text-stone-500 dark:text-stone-400 mt-0.5">
                  Indus University Fashion Design
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border transition-colors ${
                  isDarkTheme ? 'bg-white/[0.03] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E1A29] dark:text-[#D48B96] font-bold">
                  SPECIALIZATION
                </span>
                <p className="text-xl sm:text-2xl font-serif-luxury font-bold mt-1 text-[#221B1C] dark:text-white">
                  Grade 9
                </p>
                <p className="text-[10px] font-sans-modern text-stone-500 dark:text-stone-400 mt-0.5">
                  Minor in Sustainable Studies
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Manifesto & 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                DESIGN PHILOSOPHY
              </span>
              <blockquote className="text-xl sm:text-2xl font-serif-luxury italic leading-relaxed text-[#221B1C] dark:text-[#FAF6F0]">
                "Fashion as a dialogue between individuality, craftsmanship, culture and contemporary expression."
              </blockquote>
              <div className="space-y-3 text-xs sm:text-sm font-sans-modern leading-relaxed text-[#221B1C]/80 dark:text-[#FAF4EF]/80">
                <p>
                  I am Hetvi Kapadia, a passionate fashion design student with a strong interest in experimenting with different concepts, techniques, and design elements. I enjoy exploring creativity through fashion and continuously pushing my ideas beyond conventional boundaries.
                </p>
                <p>
                  I am a dedicated and detail-oriented person who prefers completing my work within the given timeline while maintaining quality and creativity. My primary area of interest lies in ethnic wear, where I love combining traditional aesthetics with contemporary design approaches.
                </p>
                <p>
                  Through my work, I aim to create designs that reflect innovation, craftsmanship, and cultural elegance while expressing my individuality as a designer.
                </p>
              </div>
            </div>

            {/* The Atelier Pillars Architecture */}
            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                THE ATELIER PILLARS
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Pillar 01 */}
                <div
                  className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                    isDarkTheme ? 'bg-white/[0.02] border-white/10 hover:border-[#D48B96]/40' : 'bg-[#FAF6F0] border-[#D4C5B0] hover:border-[#6E1A29]/40'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-[#6E1A29] dark:text-[#D48B96]">
                      PILLAR 01 • ETHNIC
                    </span>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#221B1C] dark:text-white">
                      Rooted in Heritage
                    </h4>
                    <p className="text-[11px] font-sans-modern leading-relaxed opacity-75">
                      Ancestral Gujarati craft traditions including double-ikat Patan Patola, Kutch Bandhani, and Mughal Angrakha silhouettes.
                    </p>
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#6E1A29] dark:text-[#D48B96] font-semibold">
                    Double-Ikat & Zardozi →
                  </span>
                </div>

                {/* Pillar 02 */}
                <div
                  className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                    isDarkTheme ? 'bg-white/[0.02] border-white/10 hover:border-[#D48B96]/40' : 'bg-[#FAF6F0] border-[#D4C5B0] hover:border-[#6E1A29]/40'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-[#6E1A29] dark:text-[#D48B96]">
                      PILLAR 02 • WESTERN
                    </span>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#221B1C] dark:text-white">
                      Contemporary Form
                    </h4>
                    <p className="text-[11px] font-sans-modern leading-relaxed opacity-75">
                      Architectural tailoring, pad-stitched horsehair chest canvas, exposed spiral boning, and sculptural bias draping.
                    </p>
                  </div>
                  <span className="text-[9px] font-mono uppercase text-[#6E1A29] dark:text-[#D48B96] font-semibold">
                    Brutalist Tailoring →
                  </span>
                </div>

              </div>
            </div>

            {/* Core Competency Badges */}
            <div className="pt-4 border-t border-[#D4C5B0]/50 dark:border-white/10">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-500 dark:text-stone-400 block mb-3 font-semibold">
                CORE TECHNICAL REPERTOIRE:
              </span>
              <div className="flex flex-wrap gap-2">
                {DESIGNER_INFO.competencies.map((c, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider border border-[#6E1A29]/30 bg-[#6E1A29]/5 text-[#6E1A29] dark:text-[#D48B96] dark:border-[#D48B96]/30 dark:bg-[#D48B96]/5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
