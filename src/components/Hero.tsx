import React from 'react';
import { Compass, Sparkles, BookOpen, Scroll, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: (sectionId: string) => void;
  onOpenCartouche: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenCartouche }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden border-b border-stone-800">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_ancient_egypt_giza_1791274241052.jpg"
          alt="Qadimgi Misr Giza ehromlari va Nil sahrosi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/70 to-[#0c0a09]/40" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#0c0a09]/30 to-[#0c0a09]/90" />
      </div>

      {/* Top spacing */}
      <div className="relative z-10 pt-16" />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        <div className="text-xs uppercase tracking-[0.3em] font-sans text-amber-400/90 mb-4 font-semibold">
          KMT (KEMET) · QORA TUPROQ SIVILIZATSIYASI · MIL. AVV. 3100 – 30
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-bold text-stone-100 tracking-tight leading-[1.1] mb-6 drop-shadow-xl max-w-4xl mx-auto text-balance">
          Nil Sivilizatsiyasi va <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">Ehromlar Saltanati</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-sans leading-relaxed mb-10 text-balance">
          Insoniyat tarixidagi eng ulug‘vor, sirli va uzoq umr ko‘rgan sivilizatsiyasiga sayohat. 
          Buyuk fir’avnlar shon-shuhrati, ehromlar muhandisligi, ierogliflar kaliti va oxirat e’tiqodi olami.
        </p>

        {/* Primary and secondary interactive CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onExplore('timeline')}
            className="px-6 py-3 rounded-lg bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 text-sm whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Xronologik Sayohat</span>
          </button>

          <button
            onClick={onOpenCartouche}
            className="px-6 py-3 rounded-lg border border-amber-500/40 bg-stone-900/80 text-amber-200 hover:bg-stone-800/90 hover:border-amber-400 transition-all text-sm whitespace-nowrap cursor-pointer flex items-center gap-2 backdrop-blur-sm"
          >
            <Scroll className="w-4 h-4 text-amber-400" />
            <span>Ieroglifda Ism Yozish</span>
          </button>

          <button
            onClick={() => onExplore('wonders')}
            className="px-6 py-3 rounded-lg border border-stone-700 bg-stone-900/60 text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-all text-sm whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Ehromlar Anatomiyasi</span>
          </button>
        </div>
      </div>

      {/* Operational Utility Strip (Archival metadata - clean unboxed text) */}
      <div className="relative z-10 w-full border-t border-stone-800/80 bg-[#0c0a09]/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-400 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium">Bosh Manzil</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Nil Vohasi va Deltasi</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="tabular-nums">6,650 km</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium">Davomiylik</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="tabular-nums">3,000+ yil</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="tabular-nums">31 sulola</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium">Kashfiyotlar</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Rozetta Toshi (1799)</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>KV62 Daxmasi (1922)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
