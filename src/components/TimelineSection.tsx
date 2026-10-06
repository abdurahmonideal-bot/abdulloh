import React, { useState } from 'react';
import { PERIODS, Period } from '../data/egyptData';
import { Calendar, Landmark, CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface TimelineSectionProps {
  onSelectPeriodPharaoh?: (pharaohName: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onSelectPeriodPharaoh }) => {
  const [selectedPeriodId, setSelectedPeriodId] = useState<string>(PERIODS[1].id); // default to Old Kingdom

  const currentPeriod: Period = PERIODS.find(p => p.id === selectedPeriodId) || PERIODS[0];
  const currentIndex = PERIODS.findIndex(p => p.id === selectedPeriodId);

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Editorial Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          DAVRLAR VA XRONOLOGIYA
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Qadimgi Misr Tarixining 5 Buyuk Bosqichi
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          Nil sohilidagi ilk qabilalar birlashuvidan to Rim zabt etishigacha bo‘lgan 3 ming yillik sivilizatsiya davrlari.
          Har bir davr o‘zining yuksalishi, qadriyatlari va abadiy yodgorliklariga ega.
        </p>
      </div>

      {/* Segmented Timeline Controls (Functional button elements) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-stone-900/90 rounded-xl border border-stone-800 mb-10">
        {PERIODS.map((period, idx) => {
          const isActive = period.id === selectedPeriodId;
          return (
            <button
              key={period.id}
              onClick={() => setSelectedPeriodId(period.id)}
              className={`p-3 text-left rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-stone-800 text-amber-300 shadow-md border border-amber-600/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
              }`}
            >
              <div className="text-xs font-mono text-stone-500 mb-1">
                0{idx + 1}. Bosqich
              </div>
              <div className="text-sm font-semibold truncate">
                {period.name}
              </div>
              <div className="text-[11px] text-stone-400 truncate mt-0.5 tabular-nums">
                {period.years.split('(')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Current Period Detailed Presentation Card */}
      <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-sm">
        {/* Top Meta info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800 text-xs text-stone-400 font-sans">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-medium font-mono">DAVR XRONOLOGIYASI</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-200 font-medium tabular-nums">{currentPeriod.years}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-stone-400">Poytaxt:</span>
            <span className="text-stone-200 font-medium">{currentPeriod.capital}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="my-6">
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-200 mb-2">
            0{currentIndex + 1}. {currentPeriod.name}
          </h3>
          <p className="text-stone-300 text-base italic font-serif">
            {currentPeriod.subTitle}
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          <div className="lg:col-span-7 space-y-5 text-stone-300 font-sans text-base leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-cinzel first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:font-bold">
              {currentPeriod.overview}
            </p>
            <div className="p-4 rounded-lg bg-stone-950/60 border-l-2 border-amber-500 text-sm text-stone-300">
              <span className="font-semibold text-amber-300 block mb-1">Tarixiy Ahamiyati:</span>
              {currentPeriod.significance}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Key Achievements */}
            <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800/80">
              <h4 className="text-xs uppercase tracking-wider font-mono text-amber-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Asosiy Yutuqlar va Voqealar
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {currentPeriod.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-mono text-xs mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key figures */}
            <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800/80">
              <h4 className="text-xs uppercase tracking-wider font-mono text-amber-400 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                Davrning Buyuk Shaxslari
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentPeriod.keyFigures.map((person, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded bg-stone-800 text-stone-200 border border-stone-700/60 font-medium"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Nav step buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-800 text-xs text-stone-400">
          <button
            onClick={() => {
              const prev = (currentIndex - 1 + PERIODS.length) % PERIODS.length;
              setSelectedPeriodId(PERIODS[prev].id);
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer py-1 px-2"
          >
            ← Oldingi davr ({PERIODS[(currentIndex - 1 + PERIODS.length) % PERIODS.length].name})
          </button>
          <button
            onClick={() => {
              const next = (currentIndex + 1) % PERIODS.length;
              setSelectedPeriodId(PERIODS[next].id);
            }}
            className="hover:text-amber-300 transition-colors cursor-pointer py-1 px-2"
          >
            Keyingi davr ({PERIODS[(currentIndex + 1) % PERIODS.length].name}) →
          </button>
        </div>
      </div>
    </section>
  );
};
