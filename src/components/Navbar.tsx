import React from 'react';
import { Scroll, Compass, BookOpen, Crown, Award } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCartouche: () => void;
  onStartQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCartouche,
  onStartQuiz
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0c0a09]/90 backdrop-blur-md border-b border-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand single text element */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-wider font-cinzel text-amber-300 group-hover:text-amber-200 transition-colors">
            QADIMGI MISR
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">
          <button
            onClick={() => onNavigate('timeline')}
            className={`transition-colors hover:text-amber-300 cursor-pointer ${
              activeSection === 'timeline' ? 'text-amber-400 font-semibold' : 'text-stone-400'
            }`}
          >
            Davrlar
          </button>
          <button
            onClick={() => onNavigate('pharaohs')}
            className={`transition-colors hover:text-amber-300 cursor-pointer ${
              activeSection === 'pharaohs' ? 'text-amber-400 font-semibold' : 'text-stone-400'
            }`}
          >
            Fir’avnlar
          </button>
          <button
            onClick={() => onNavigate('wonders')}
            className={`transition-colors hover:text-amber-300 cursor-pointer ${
              activeSection === 'wonders' ? 'text-amber-400 font-semibold' : 'text-stone-400'
            }`}
          >
            Ehromlar
          </button>
          <button
            onClick={() => onNavigate('mythology')}
            className={`transition-colors hover:text-amber-300 cursor-pointer ${
              activeSection === 'mythology' ? 'text-amber-400 font-semibold' : 'text-stone-400'
            }`}
          >
            Panteon va E’tiqod
          </button>
          <button
            onClick={() => onNavigate('nile-map')}
            className={`transition-colors hover:text-amber-300 cursor-pointer ${
              activeSection === 'nile-map' ? 'text-amber-400 font-semibold' : 'text-stone-400'
            }`}
          >
            Nil Xaritasi
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCartouche}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-md border border-amber-600/60 bg-amber-950/30 text-amber-200 hover:bg-amber-900/40 hover:border-amber-500 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Scroll className="w-3.5 h-3.5 text-amber-400" />
            <span>Ieroglif Laboratoriyasi</span>
          </button>
          <button
            onClick={onStartQuiz}
            className="hidden sm:flex px-3.5 py-1.5 text-xs font-semibold rounded-md bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 hover:from-amber-500 hover:to-amber-600 transition-colors whitespace-nowrap cursor-pointer items-center gap-1.5 font-medium"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Bilim Sinovi</span>
          </button>
        </div>
      </div>
    </header>
  );
};
