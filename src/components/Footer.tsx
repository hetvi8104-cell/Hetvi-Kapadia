import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkTheme: boolean;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkTheme, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="editorial-colophon-footer"
      className={`relative w-full py-16 px-6 md:px-12 lg:px-20 select-none transition-colors duration-500 ${
        isDarkTheme ? 'bg-[#18020A] text-[#FAF2EE]' : 'bg-[#F7ECEE] text-[#220814]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Colophon Line */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-current/10">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
              ATELIER COLOPHON // ARCHIVE 2026
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold">
              {DESIGNER_INFO.name} • {DESIGNER_INFO.brand}
            </h3>
            <p className="text-xs font-sans-modern opacity-70">
              {DESIGNER_INFO.institution} • {DESIGNER_INFO.location}
            </p>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-full border border-current/20 hover:bg-current/10 transition-all cursor-pointer flex items-center space-x-2 text-xs font-mono uppercase"
          >
            <span>Return to Summit</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Links Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans-modern">
          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase opacity-50 tracking-wider font-bold">
              ARCHIVE SECTIONS
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#6E1A29] dark:hover:text-[#D48B96] transition-colors"
                >
                  About & Manifesto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#6E1A29] dark:hover:text-[#D48B96] transition-colors"
                >
                  Nine Curated Looks
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase opacity-50 tracking-wider font-bold">
              METHODOLOGIES
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-[#6E1A29] dark:hover:text-[#D48B96] transition-colors"
                >
                  Circular Scrap Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cv')}
                  className="hover:text-[#6E1A29] dark:hover:text-[#D48B96] transition-colors"
                >
                  Curriculum Vitae
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase opacity-50 tracking-wider font-bold">
              RESEARCH COORD
            </span>
            <p className="text-[11px] font-mono opacity-80 leading-relaxed">
              Ahmedabad Fashion Atelier<br />
              Indus University Design Lab<br />
              {DESIGNER_INFO.coordinates}
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] font-mono uppercase opacity-50 tracking-wider font-bold">
              COMMISSIONS
            </span>
            <p className="text-[11px] font-mono opacity-80 leading-relaxed">
              Email: {DESIGNER_INFO.email}<br />
              Haute Couture & 3D Garments
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-current/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono opacity-50 gap-2">
          <span>© {new Date().getFullYear()} HETVI KAPADIA. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED IN AHMEDABAD // AUTUMN-WINTER 2026 CAPSULE</span>
        </div>

      </div>
    </footer>
  );
};
