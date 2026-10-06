import React, { useState } from 'react';
import { DEITIES, MUMMIFICATION_STEPS, Deity } from '../data/egyptData';
import { Sparkles, HeartHandshake, ShieldCheck, Scale, Clock, AlertCircle } from 'lucide-react';

export const MythologyMummySection: React.FC = () => {
  const [selectedDeityId, setSelectedDeityId] = useState<string>('anubis');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [weighState, setWeighState] = useState<'pure' | 'heavy' | 'neutral'>('neutral');

  const selectedDeity: Deity = DEITIES.find(d => d.id === selectedDeityId) || DEITIES[0];
  const currentStep = MUMMIFICATION_STEPS[activeStepIndex];

  return (
    <section id="mythology" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          PANTEON VA OXIRAT E’TIQODI
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Xudolar Olamidan Mumiyolash Sirlarigacha
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          Qadimgi misrliklar uchun bu dunyodagi hayot mangulik sari bir tayyorgarlik edi.
          Muqaddas xudolar, ruhning abadiyligi (Ka va Ba) hamda 70 kunlik mumiyolash marosimi falsafasi.
        </p>
      </div>

      {/* Part 1: Pantheon of Gods */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-amber-200 mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Misr Xudolari Panteoni
        </h3>

        {/* Deity quick tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
          {DEITIES.map((deity) => {
            const isActive = deity.id === selectedDeityId;
            return (
              <button
                key={deity.id}
                onClick={() => setSelectedDeityId(deity.id)}
                className={`p-2.5 rounded-lg text-center transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md'
                    : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-stone-100'
                }`}
              >
                <div className="text-xs font-cinzel truncate">{deity.name.split('(')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Deity Showcase Card */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                ILOHIY UNVON VA SOHA
              </div>
              <h4 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-200">
                {selectedDeity.name}
              </h4>
              <p className="text-stone-300 font-serif italic text-base">
                {selectedDeity.role}
              </p>

              <div className="pt-2 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-amber-300 block mb-1">Afsona va Mifologiya:</span>
                {selectedDeity.mythology}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-xs">
                <div>
                  <span className="text-stone-500 block font-mono">Qiyofasi:</span>
                  <span className="text-stone-200">{selectedDeity.appearance}</span>
                </div>
                <div>
                  <span className="text-stone-500 block font-mono">Muqaddas belgisi:</span>
                  <span className="text-stone-200">{selectedDeity.symbol}</span>
                </div>
                <div>
                  <span className="text-stone-500 block font-mono">Muqaddas jonzoti:</span>
                  <span className="text-amber-400 font-medium">{selectedDeity.sacredAnimal}</span>
                </div>
              </div>
            </div>

            {/* Papyrus display card */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-stone-800 bg-stone-950/80 p-3">
              <img
                src="/src/assets/images/egyptian_papyrus_rosetta_1791274295742.jpg"
                alt="Qadimgi Misr papirusidagi Anubis va O‘liklar kitobi"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover rounded-lg mb-2 contrast-105"
              />
              <div className="text-[11px] font-mono text-stone-400 text-center">
                «O‘liklar Kitobi» (Peret Em Heru) — Narigi Dunyo Qo‘llanmasi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Mummification Ritual & Weighing of the Heart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 70-Day Mummification 5-step viewer */}
        <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                70 KUNLIK MAROSIM
              </div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-100">
                Mumiyolashning 5 Bosqichi
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
              <Clock className="w-4 h-4" />
              <span>Bosqich {currentStep.step} / 5</span>
            </div>
          </div>

          {/* Stepper buttons */}
          <div className="flex gap-1.5 mb-6">
            {MUMMIFICATION_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 py-2 text-xs font-semibold rounded transition-all cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-amber-500 text-stone-950'
                    : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                0{s.step}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-cinzel font-bold text-amber-200">
                0{currentStep.step}. {currentStep.title}
              </h4>
              <span className="text-xs font-mono text-stone-400 px-2.5 py-1 rounded bg-stone-950 border border-stone-800">
                Vaqti: {currentStep.duration}
              </span>
            </div>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
              {currentStep.description}
            </p>

            <div className="p-3.5 rounded-lg bg-stone-950/80 border border-stone-800 text-xs sm:text-sm text-stone-300">
              <span className="text-amber-400 font-semibold font-mono block mb-1">
                Kerakli Asboblar va Buyumlar:
              </span>
              {currentStep.tools}
            </div>

            <div className="flex justify-between pt-3 text-xs text-stone-400">
              <button
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeStepIndex === 0}
                className="hover:text-amber-300 disabled:opacity-40 cursor-pointer"
              >
                ← Oldingi bosqich
              </button>
              <button
                onClick={() => setActiveStepIndex((prev) => Math.min(MUMMIFICATION_STEPS.length - 1, prev + 1))}
                disabled={activeStepIndex === MUMMIFICATION_STEPS.length - 1}
                className="hover:text-amber-300 disabled:opacity-40 cursor-pointer"
              >
                Keyingi bosqich →
              </button>
            </div>
          </div>
        </div>

        {/* Right: Weighing of the Heart Simulation */}
        <div className="lg:col-span-5 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-1">
            NARIGI DUNYO SUDI
          </div>
          <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-100 mb-2">
            Qalbni Taroziga Qo‘yish Marosimi
          </h3>
          <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
            Osiris sudida marhumning yuragi (Ib) haqiqat ma’budasi Ma’atning yengil oq pati bilan tortiladi.
            Ezgu insonning yuragi patdan ham yengil bo‘lib, u Iaru (Jannat) dalalariga yo‘l oladi!
          </p>

          {/* Interactive Balance Simulation */}
          <div className="p-5 rounded-xl bg-stone-950/90 border border-stone-800 text-center mb-6">
            <div className="flex items-center justify-center gap-6 my-4">
              {/* Left scale pan: Heart */}
              <div className={`p-4 rounded-xl border flex flex-col items-center transition-all ${
                weighState === 'pure' ? '-translate-y-3 border-emerald-500 bg-emerald-950/20' :
                weighState === 'heavy' ? 'translate-y-3 border-rose-500 bg-rose-950/20' :
                'border-stone-700 bg-stone-900'
              }`}>
                <span className="text-2xl mb-1">🫀</span>
                <span className="text-xs font-semibold text-stone-200">Marhum Yuragi</span>
              </div>

              {/* Center Scale Icon */}
              <Scale className="w-8 h-8 text-amber-400" />

              {/* Right scale pan: Ma'at feather */}
              <div className={`p-4 rounded-xl border flex flex-col items-center transition-all ${
                weighState === 'pure' ? 'translate-y-3 border-emerald-500 bg-emerald-950/20' :
                weighState === 'heavy' ? '-translate-y-3 border-rose-500 bg-rose-950/20' :
                'border-stone-700 bg-stone-900'
              }`}>
                <span className="text-2xl mb-1">🪶</span>
                <span className="text-xs font-semibold text-stone-200">Ma’at Pati</span>
              </div>
            </div>

            {/* Verdict text */}
            <div className="text-sm font-semibold my-2">
              {weighState === 'pure' && (
                <span className="text-emerald-400">
                  ✨ Qalb pokiza va yengil! Marhum abadiy hayot va jannatga yo‘l oldi.
                </span>
              )}
              {weighState === 'heavy' && (
                <span className="text-rose-400">
                  ⚠️ Qalb gunohlarga to‘la va og‘ir! Unga Ammit mahluqi tahdid solmoqda.
                </span>
              )}
              {weighState === 'neutral' && (
                <span className="text-stone-400">
                  Tarozida o‘lchab ko‘rish uchun quyidagi tugmalarni bosing:
                </span>
              )}
            </div>

            {/* Test buttons */}
            <div className="flex gap-2 justify-center mt-4">
              <button
                onClick={() => setWeighState('pure')}
                className="px-3.5 py-1.5 text-xs font-medium rounded bg-emerald-900/60 text-emerald-200 border border-emerald-700 hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Ezgu va Pok Qalb
              </button>
              <button
                onClick={() => setWeighState('heavy')}
                className="px-3.5 py-1.5 text-xs font-medium rounded bg-rose-900/60 text-rose-200 border border-rose-700 hover:bg-rose-800 transition-colors cursor-pointer"
              >
                Og‘ir va Notinch Qalb
              </button>
              <button
                onClick={() => setWeighState('neutral')}
                className="px-3.5 py-1.5 text-xs font-medium rounded bg-stone-800 text-stone-400 hover:text-stone-200 cursor-pointer"
              >
                Qaytarish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
