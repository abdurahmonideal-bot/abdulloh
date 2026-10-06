import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/egyptData';
import { BookOpen, Search } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filtered = GLOSSARY_TERMS.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
            ATAMALAR VA MAFKURA
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100">
            Misrshunoslik Qisqacha Lug‘ati
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base mt-2 max-w-2xl">
            Qadimgi Misr sivilizatsiyasining diniy, falsafiy va ijtimoiy hayotiga oid asosiy tushunchalar.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Atamani qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Grid of glossary terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 transition-colors"
          >
            <div className="text-base font-cinzel font-bold text-amber-300 mb-2">
              {item.term}
            </div>
            <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
