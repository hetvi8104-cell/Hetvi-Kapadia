import React from 'react';
import { GraduationCap, Code2, Sparkles, BookOpen, Download, Mail, Award, Check } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface CVSectionProps {
  isDarkTheme: boolean;
  onContactClick: () => void;
}

export const CVSection: React.FC<CVSectionProps> = ({ isDarkTheme, onContactClick }) => {
  return (
    <section
      id="cv"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#2A0614] text-[#FAF2EE] border-[#7D1B31]/40'
          : 'bg-[#FDF6F4] text-[#220814] border-[#EAD5D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
              <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
                06 • CURRICULUM VITAE
              </span>
            </div>
            <h2
              id="cv-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
            >
              Academic Background & Masteries
            </h2>
            <p className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75">
              Indus University • B.Des Fashion Design (9.0 CGPA) • Minor in Sustainable Studies
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              id="cv-contact-btn"
              onClick={onContactClick}
              className="px-6 py-2.5 rounded-full bg-[#6E1A29] hover:bg-[#852033] text-white text-[10px] font-mono tracking-widest uppercase font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-md"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire for Commissions</span>
            </button>
          </div>
        </div>

        {/* 3-Column Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Academic Pedigree */}
          <div
            id="cv-card-education"
            className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
              isDarkTheme ? 'bg-[#1D0611] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#6E1A29] dark:text-[#D48B96]">
                <GraduationCap className="w-6 h-6" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                  ACADEMIC PEDIGREE
                </span>
              </div>

              {/* Indus University */}
              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <span className="text-[9px] font-mono uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                  GRADUATION IN PROGRESS
                </span>
                <h4 className="text-base font-serif-luxury font-bold text-[#221B1C] dark:text-white">
                  Indus University, Ahmedabad
                </h4>
                <p className="text-xs font-sans-modern font-semibold opacity-90">
                  {DESIGNER_INFO.degree}
                </p>
                <div className="flex items-center space-x-2 pt-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#6E1A29] text-white font-bold">
                    {DESIGNER_INFO.cgpa}
                  </span>
                  <span className="text-[10px] font-mono opacity-80">
                    Minor: {DESIGNER_INFO.minor}
                  </span>
                </div>
              </div>

              {/* Amicus International */}
              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <span className="text-[9px] font-mono uppercase opacity-60">
                  2021 — 2023
                </span>
                <h4 className="text-base font-serif-luxury font-bold text-[#221B1C] dark:text-white">
                  Amicus International School
                </h4>
                <p className="text-xs font-sans-modern opacity-80">
                  Standard 11th & 12th
                </p>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#6E1A29]/10 text-[#6E1A29] dark:text-[#D48B96] font-bold inline-block mt-1">
                  Academic Result: 80% in 12th
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-4 border-t border-current/10 space-y-2">
              <span className="text-[10px] font-mono uppercase opacity-60 font-bold">
                LANGUAGES SPOKEN:
              </span>
              <div className="flex flex-wrap gap-2">
                {DESIGNER_INFO.languages.map((l, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-current/15 bg-current/5"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Software & Atelier Competencies */}
          <div
            id="cv-card-skills"
            className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
              isDarkTheme ? 'bg-[#1D0611] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#6E1A29] dark:text-[#D48B96]">
                <Code2 className="w-6 h-6" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                  SOFTWARE & TECHNICAL SKILLS
                </span>
              </div>

              {/* Digital Suites */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase opacity-60 font-bold">
                  DIGITAL CREATIVE SUITES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DESIGNER_INFO.software.map((sw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-xs font-mono border border-current/15 bg-current/5"
                    >
                      {sw}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-xl text-xs font-mono border border-[#6E1A29]/40 bg-[#6E1A29]/10 text-[#6E1A29] dark:text-[#D48B96] font-bold">
                    CLO3D Digital Garments
                  </span>
                </div>
              </div>

              {/* Atelier Competencies */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase opacity-60 font-bold">
                  ATELIER MASTERIES:
                </span>
                <div className="space-y-2">
                  {DESIGNER_INFO.competencies.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-xs font-sans-modern"
                    >
                      <Check className="w-3.5 h-3.5 text-[#6E1A29] dark:text-[#D48B96]" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-current/10 bg-current/5 text-[10px] font-mono opacity-70">
              Proficient in both bespoke artisanal craft & modern CAD pattern engineering.
            </div>
          </div>

          {/* Card 3: Artisan Workshops & Experiential Disciplines */}
          <div
            id="cv-card-workshops"
            className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
              isDarkTheme ? 'bg-[#1D0611] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#6E1A29] dark:text-[#D48B96]">
                <Sparkles className="w-6 h-6" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                  WORKSHOPS & DISCIPLINES
                </span>
              </div>

              {/* Workshops */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase opacity-60 font-bold">
                  HANDS-ON ARTISAN WORKSHOPS:
                </span>
                <div className="space-y-1.5">
                  {DESIGNER_INFO.workshops.map((ws, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl border border-current/10 bg-current/5 text-xs font-sans-modern"
                    >
                      • {ws}
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests & Performing Arts */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase opacity-60 font-bold">
                  PERFORMING ARTS & INTERESTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DESIGNER_INFO.interests.map((int, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-current/15 bg-current/5"
                    >
                      {int}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl border border-[#6E1A29]/20 bg-[#6E1A29]/5 text-[10px] font-mono text-[#6E1A29] dark:text-[#D48B96]">
              6 Years Classical Bharatnatyam training informs her kinetic silhouette geometry and garment movement.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
