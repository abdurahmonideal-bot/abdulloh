import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCartouche: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCartouche }) => {
  return (
    <footer className="bg-[#080706] border-t border-stone-800 text-stone-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-cinzel font-bold text-amber-300">
            QADIMGI MISR TARIXI
          </div>
          <p className="text-xs text-stone-500 font-sans mt-1">
            Nil sivilizatsiyasi, fir’avnlar va ehromlar merosiga bag‘ishlangan ilmiy-ta’limiy portal
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-sans">
          <button
            onClick={() => onNavigate('timeline')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Davrlar
          </button>
          <button
            onClick={() => onNavigate('pharaohs')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Fir’avnlar
          </button>
          <button
            onClick={() => onNavigate('wonders')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Ehromlar
          </button>
          <button
            onClick={() => onNavigate('mythology')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Panteon
          </button>
          <button
            onClick={() => onNavigate('nile-map')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            Nil Xaritasi
          </button>
          <button
            onClick={onOpenCartouche}
            className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400 font-medium"
          >
            Ieroglif Laboratoriyasi
          </button>
        </div>

        <div className="text-xs text-stone-500 font-mono">
          Manbalar: Shampolyon, Manefon, Qohira Misr Muzeyi
        </div>
      </div>
    </footer>
  );
};
