import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { CVSection } from './components/CVSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GarmentDossierModal } from './components/GarmentDossierModal';
import { PresentationModal } from './components/PresentationModal';
import { Garment } from './types';
import { GARMENTS } from './data/portfolioData';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);

  // Sync theme class to document root
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  // Scroll listener to update active section
  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'sustainability', 'cv', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="portfolio-root-container"
      className={`min-h-screen w-full transition-colors duration-500 selection:bg-[#8A1D34] selection:text-[#FFF7F4] ${
        isDarkTheme ? 'bg-[#2A0613] text-[#FAF2EE]' : 'bg-[#FDF6F4] text-[#220814]'
      }`}
    >
      {/* Editorial Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme(!isDarkTheme)}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content-flow">
        <HeroSection
          isDarkTheme={isDarkTheme}
          onExploreWork={() => handleNavigate('work')}
          onSelectGarment={(g) => setSelectedGarment(g)}
        />

        <AboutSection
          isDarkTheme={isDarkTheme}
          onExploreWork={() => handleNavigate('work')}
        />

        <WorkSection
          isDarkTheme={isDarkTheme}
          onSelectGarment={(g) => setSelectedGarment(g)}
        />

        <SustainabilitySection
          isDarkTheme={isDarkTheme}
        />

        <CVSection
          isDarkTheme={isDarkTheme}
          onContactClick={() => handleNavigate('contact')}
        />

        <ContactSection
          isDarkTheme={isDarkTheme}
        />
      </main>

      {/* Editorial Footer Colophon */}
      <Footer
        isDarkTheme={isDarkTheme}
        onNavigate={handleNavigate}
      />

      {/* Interactive Garment Technical Dossier Modal */}
      <GarmentDossierModal
        garment={selectedGarment}
        isOpen={!!selectedGarment}
        onClose={() => setSelectedGarment(null)}
        onSelectGarment={(g) => setSelectedGarment(g)}
        isDarkTheme={isDarkTheme}
      />

      {/* Full Runway Presentation Modal */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
}
