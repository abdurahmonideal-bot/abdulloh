import React, { useState } from 'react';
import { PHARAOHS, Pharaoh } from '../data/egyptData';
import { Crown, Sparkles, Building2, Swords, Quote, Shield } from 'lucide-react';

export const PharaohsSection: React.FC = () => {
  const [selectedPharaohId, setSelectedPharaohId] = useState<string>('tutankhamun');

  const selectedPharaoh = PHARAOHS.find(p => p.id === selectedPharaohId) || PHARAOHS[0];

  return (
    <section id="pharaohs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Editorial Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          HUKMDORLAR PANTEONI
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Buyuk Fir’avnlar va Ularning Merosi
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          Qadimgi Misrda fir’avn oddiy podshoh emas, balki yer yuzidagi tirik ma’bud (Horus) va xalq bilan xudolar o‘rtasidagi bog‘lovchi bo‘lgan.
          Misr qudratini cho‘qqiga olib chiqqan buyuk shaxslar galereyasi.
        </p>
      </div>

      {/* Main Layout: Left/Top selector list, Right/Center Museum Accession Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Pharaoh selection list */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-mono uppercase text-stone-500 tracking-wider mb-2 px-1">
            Fir’avnni tanlang:
          </div>
          {PHARAOHS.map((pharaoh) => {
            const isSelected = pharaoh.id === selectedPharaohId;
            return (
              <button
                key={pharaoh.id}
                onClick={() => setSelectedPharaohId(pharaoh.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/70 text-amber-200 shadow-md'
                    : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-800/60 hover:text-stone-100'
                }`}
              >
                <div>
                  <div className="text-sm font-cinzel font-bold">
                    {pharaoh.name}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    {pharaoh.dynasty} · <span className="tabular-nums">{pharaoh.regnalYears}</span>
                  </div>
                </div>
                <div className="text-xs font-serif italic text-amber-400/80 text-right max-w-[130px] truncate">
                  {pharaoh.epithet}
                </div>
              </button>
            );
          })}

          {/* Exhibition artwork feature banner */}
          <div className="mt-6 p-4 rounded-xl border border-stone-800 bg-stone-950/80 relative overflow-hidden">
            <img
              src="/src/assets/images/pharaoh_tutankhamun_mask_1791274266314.jpg"
              alt="Tutanxamon oltin niqobi"
              referrerPolicy="no-referrer"
              className="w-full h-44 object-cover rounded-lg mb-3 brightness-90 contrast-105"
            />
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Kurgazma Eksponati
            </div>
            <div className="text-sm font-cinzel font-bold text-stone-200 mt-1">
              Tutanxamonning Sof Oltin Niqobi
            </div>
            <p className="text-xs text-stone-400 font-sans mt-1">
              Og‘irligi 11 kg toza oltin, lojuvard va feruza qadab ishlangan. Qohira Misr muzeyi durdonasi.
            </p>
          </div>
        </div>

        {/* Right Column: Museum Accession Detailed View */}
        <div className="lg:col-span-8 bg-stone-900/70 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
          {/* Header Accession Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-800 text-xs text-stone-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">STATUS:</span>
              <span className="text-stone-200">FIR’AVNLIK XRONIKASI</span>
            </div>
            <div className="flex items-center gap-2">
              <span>SULOLA:</span>
              <span className="text-amber-300 font-semibold">{selectedPharaoh.dynasty}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="tabular-nums">{selectedPharaoh.regnalYears}</span>
            </div>
          </div>

          {/* Pharaoh Name and Royal Titulary */}
          <div className="my-6">
            <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1">
              {selectedPharaoh.title}
            </div>
            <h3 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100">
              {selectedPharaoh.name}
            </h3>
            <div className="text-sm font-serif italic text-amber-300/90 mt-1">
              «{selectedPharaoh.epithet}»
            </div>
          </div>

          {/* Historical Biography */}
          <div className="text-stone-300 font-sans text-base leading-relaxed mb-8">
            <p className="first-letter:text-4xl first-letter:font-cinzel first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:font-bold">
              {selectedPharaoh.biography}
            </p>
          </div>

          {/* Pull quote */}
          <div className="my-6 p-5 rounded-xl bg-amber-950/20 border-l-4 border-amber-500 text-stone-200 font-serif italic text-base">
            <Quote className="w-5 h-5 text-amber-500/60 mb-2 inline-block mr-2" />
            {selectedPharaoh.quote}
          </div>

          {/* Grid: Feats and Built Monuments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-800">
            {/* Feats */}
            <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <Swords className="w-4 h-4 text-amber-400" />
                Tarixiy G‘alabalar va Islohotlar
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {selectedPharaoh.keyFeats.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monuments */}
            <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                Bunyod Etilgan Asosiy Obidalar
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {selectedPharaoh.builtMonuments.map((monument, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{monument}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
