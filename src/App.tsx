/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { PharaohsSection } from './components/PharaohsSection';
import { PyramidAnatomySection } from './components/PyramidAnatomySection';
import { HieroglyphStudio } from './components/HieroglyphStudio';
import { MythologyMummySection } from './components/MythologyMummySection';
import { NileMapSection } from './components/NileMapSection';
import { QuizSection } from './components/QuizSection';
import { GlossarySection } from './components/GlossarySection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCartouche = () => {
    scrollToSection('cartouche-studio');
  };

  const handleStartQuiz = () => {
    scrollToSection('quiz');
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCartouche={handleOpenCartouche}
        onStartQuiz={handleStartQuiz}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={scrollToSection}
          onOpenCartouche={handleOpenCartouche}
        />

        {/* 1. Historical Chronology & Eras */}
        <TimelineSection />

        {/* 2. Pharaohs Pantheon & Biographies */}
        <PharaohsSection />

        {/* 3. Wonders of Architecture & Pyramid Cross-Section */}
        <PyramidAnatomySection />

        {/* 4. Hieroglyph Studio & Royal Cartouche Builder */}
        <HieroglyphStudio />

        {/* 5. Gods, Pantheon & Mummification Ritual */}
        <MythologyMummySection />

        {/* 6. Interactive Nile Valley Map */}
        <NileMapSection />

        {/* 7. Interactive Historical Quiz & Honor Certificate */}
        <QuizSection />

        {/* 8. Egyptology Glossary */}
        <GlossarySection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenCartouche={handleOpenCartouche}
      />
    </div>
  );
}
