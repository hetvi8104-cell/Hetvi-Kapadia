import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkTheme: boolean;
  onToggleTheme: () => void;
  onOpenPresentation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  isDarkTheme,
  onToggleTheme,
  onOpenPresentation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'WORK' },
    { id: 'sustainability', label: 'SUSTAINABILITY' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-editorial-header"
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-500 flex items-center justify-between select-none ${
        isScrolled
          ? isDarkTheme
            ? 'bg-[#280512]/95 backdrop-blur-xl border-b border-[#7D1B31]/45 shadow-[0_12px_32px_rgba(20,2,8,0.7)] py-3.5'
            : 'bg-[#FDF6F4]/95 backdrop-blur-xl border-b border-[#EAD5D8] shadow-xs py-3.5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Atelier Brand Identity */}
      <button
        id="header-brand-button"
        onClick={() => onNavigate('hero')}
        className="group text-left focus:outline-none flex flex-col justify-center cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
            {DESIGNER_INFO.name}
          </span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span
            id="header-atelier-brand"
            className="text-xs md:text-sm font-serif-luxury font-bold tracking-[0.22em] text-[#221B1C] dark:text-[#F3EBE6] transition-colors group-hover:text-[#6E1A29] dark:group-hover:text-[#D48B96] uppercase"
          >
            {DESIGNER_INFO.brand}
          </span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav id="header-desktop-nav" className="hidden xl:flex items-center space-x-7">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`relative py-1 text-[10px] font-sans-modern tracking-[0.22em] uppercase font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? isDarkTheme
                    ? 'text-white font-bold'
                    : 'text-[#6E1A29] font-bold'
                  : isDarkTheme
                  ? 'text-stone-400 hover:text-white'
                  : 'text-[#221B1C]/70 hover:text-[#6E1A29]'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#6E1A29] dark:bg-[#D48B96] transition-all" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Action Controls: Theme Toggle + Mobile Menu */}
      <div className="flex items-center space-x-3">
        {/* Theme Toggle Button */}
        <button
          id="header-theme-toggle-btn"
          onClick={onToggleTheme}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md active:scale-95 cursor-pointer ${
            isDarkTheme
              ? 'border-[#6E1A29]/60 bg-[#280D1A]/90 text-[#F59E0B] hover:text-[#FBBF24] hover:border-[#D48B96]/60 hover:bg-[#381123]'
              : 'border-[#D4C5B0] bg-[#FAF6F0] text-[#6E1A29] hover:text-[#8B1E34] hover:border-[#6E1A29]/60 hover:bg-white'
          }`}
          title={isDarkTheme ? 'Switch to Studio Light' : 'Switch to Dark Wine Theme'}
          aria-label="Toggle Theme"
        >
          {isDarkTheme ? (
            <Sun id="header-theme-toggle-sun" className="w-4 h-4 text-[#F59E0B]" strokeWidth={2} />
          ) : (
            <Moon id="header-theme-toggle-moon" className="w-4 h-4 text-[#6E1A29]" strokeWidth={2} />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          id="header-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isDarkTheme
              ? 'border-[#6E1A29]/60 bg-[#280D1A] text-white'
              : 'border-[#D4C5B0] bg-[#FAF6F0] text-[#221B1C]'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-drawer"
          className={`xl:hidden absolute top-full left-0 right-0 p-6 border-b shadow-2xl backdrop-blur-2xl transition-all ${
            isDarkTheme
              ? 'bg-[#220814]/98 border-[#6E1A29]/40 text-[#FAF4EF]'
              : 'bg-[#F5F0EB]/98 border-[#D4C5B0] text-[#221B1C]'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-xs font-sans-modern tracking-[0.25em] uppercase font-bold py-2 border-b border-current/10 ${
                  activeSection === item.id ? 'text-[#6E1A29] dark:text-[#D48B96]' : 'opacity-80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
