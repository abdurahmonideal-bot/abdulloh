import React, { useState } from 'react';
import { WONDERS, Wonder } from '../data/egyptData';
import { Layers, Eye, Compass, Info, Sparkles } from 'lucide-react';

export const PyramidAnatomySection: React.FC = () => {
  const [activeWonderId, setActiveWonderId] = useState<string>('giza-pyramid');
  const [activeHotspot, setActiveHotspot] = useState<number>(0); // 0 = King's chamber

  const selectedWonder: Wonder = WONDERS.find(w => w.id === activeWonderId) || WONDERS[0];
  const pyramidWonder = WONDERS[0];

  return (
    <section id="wonders" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          ME’MORCHILIK VA MUHANDISLIK MO‘JIZALARI
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Ehromlar Kesimi va Qadimgi Yodgorliklar
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          Gizadagi Buyuk Ehrom 3800 yil davomida dunyodagi eng baland inshoot bo‘lib qolgan.
          Uning ichki me’moriy tuzilishi, yashirin xonalari va astronomik mo‘ljallari qanday ishlagan?
        </p>
      </div>

      {/* Wonder Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-stone-900 rounded-xl border border-stone-800 mb-10">
        {WONDERS.map((wonder) => {
          const isActive = wonder.id === activeWonderId;
          return (
            <button
              key={wonder.id}
              onClick={() => setActiveWonderId(wonder.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-md'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              {wonder.name}
            </button>
          );
        })}
      </div>

      {/* If Giza Pyramid selected, show the Interactive Anatomy diagram + chambers */}
      {activeWonderId === 'giza-pyramid' ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            {/* Interactive SVG Diagram */}
            <div className="lg:col-span-7 bg-stone-950/80 rounded-xl p-4 sm:p-6 border border-stone-800/80 relative">
              <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-4">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Layers className="w-4 h-4" />
                  XUFU EHROMINING VERTIKAL KESIMI
                </span>
                <span>Interaktiv nuqtalarni bosing</span>
              </div>

              {/* Cross-section SVG */}
              <div className="w-full aspect-[4/3] relative flex items-center justify-center">
                <svg viewBox="0 0 600 450" className="w-full h-full select-none">
                  <defs>
                    <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#44403c" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#292524" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#292524" />
                      <stop offset="100%" stopColor="#1c1917" />
                    </linearGradient>
                    <radialGradient id="hotspotGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ground bedrock level */}
                  <rect x="0" y="320" width="600" height="130" fill="url(#groundGrad)" />
                  <line x1="0" y1="320" x2="600" y2="320" stroke="#78716c" strokeWidth="2" strokeDasharray="6,4" />
                  <text x="20" y="340" fill="#a8a29e" fontSize="12" fontFamily="sans-serif">
                    Yer / Qoyatosh sathi (Bedrock)
                  </text>

                  {/* Outer Pyramid Triangle */}
                  <polygon
                    points="300,50 540,320 60,320"
                    fill="url(#pyramidGrad)"
                    stroke="#d97706"
                    strokeWidth="3"
                  />

                  {/* Original Casing stones indication */}
                  <line x1="300" y1="50" x2="540" y2="320" stroke="#fbbf24" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="300" y1="50" x2="60" y2="320" stroke="#fbbf24" strokeWidth="1" strokeOpacity="0.6" />

                  {/* Subterranean Descending Corridor & Chamber */}
                  {/* Entrance at North: approx x=200, y=270 */}
                  <polyline
                    points="200,270 380,410"
                    stroke="#a8a29e"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Subterranean chamber: x=380, y=410 */}
                  <rect x="370" y="400" width="40" height="20" fill={activeHotspot === 4 ? "#f59e0b" : "#57534e"} rx="3" />

                  {/* Ascending corridor */}
                  <line x1="255" y1="312" x2="300" y2="250" stroke="#a8a29e" strokeWidth="5" />

                  {/* Horizontal passage to Queen's Chamber */}
                  <line x1="300" y1="250" x2="300" y2="260" stroke="#a8a29e" strokeWidth="4" />
                  {/* Queen's chamber: x=280, y=250 */}
                  <rect x="280" y="240" width="35" height="22" fill={activeHotspot === 1 ? "#f59e0b" : "#78716c"} rx="2" />

                  {/* Grand Gallery */}
                  <line
                    x1="300"
                    y1="250"
                    x2="350"
                    y2="180"
                    stroke={activeHotspot === 2 ? "#fbbf24" : "#e7e5e4"}
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  {/* King's Chamber */}
                  <rect
                    x="355"
                    y="160"
                    width="45"
                    height="26"
                    fill={activeHotspot === 0 ? "#f59e0b" : "#78716c"}
                    stroke="#fbbf24"
                    strokeWidth="2"
                    rx="2"
                  />
                  {/* Relieving chambers above King's */}
                  <line x1="355" y1="154" x2="400" y2="154" stroke="#a8a29e" strokeWidth="3" />
                  <line x1="355" y1="148" x2="400" y2="148" stroke="#a8a29e" strokeWidth="3" />
                  <line x1="355" y1="142" x2="400" y2="142" stroke="#a8a29e" strokeWidth="3" />

                  {/* Air / Star Shafts from King's chamber */}
                  <line x1="400" y1="168" x2="480" y2="110" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,2" />
                  <line x1="355" y1="168" x2="230" y2="105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,2" />

                  {/* Interactive Clickable Hotspots (Pointers) */}
                  {/* Hotspot 0: King's Chamber */}
                  <g className="cursor-pointer" onClick={() => setActiveHotspot(0)}>
                    <circle cx="377" cy="173" r="12" fill={activeHotspot === 0 ? "#f59e0b" : "#d97706"} fillOpacity="0.8" />
                    <circle cx="377" cy="173" r="6" fill="#fff" />
                    <text x="415" y="177" fill="#fbbf24" fontSize="12" fontWeight="bold">01. Qirol Xonasi</text>
                  </g>

                  {/* Hotspot 1: Queen's Chamber */}
                  <g className="cursor-pointer" onClick={() => setActiveHotspot(1)}>
                    <circle cx="297" cy="251" r="10" fill={activeHotspot === 1 ? "#f59e0b" : "#78716c"} fillOpacity="0.8" />
                    <circle cx="297" cy="251" r="5" fill="#fff" />
                    <text x="210" y="245" fill="#e7e5e4" fontSize="11">02. Malika Xonasi</text>
                  </g>

                  {/* Hotspot 2: Grand Gallery */}
                  <g className="cursor-pointer" onClick={() => setActiveHotspot(2)}>
                    <circle cx="325" cy="215" r="10" fill={activeHotspot === 2 ? "#f59e0b" : "#78716c"} fillOpacity="0.8" />
                    <circle cx="325" cy="215" r="5" fill="#fff" />
                    <text x="220" y="200" fill="#e7e5e4" fontSize="11">03. Katta Galereya</text>
                  </g>

                  {/* Hotspot 3: Air Shafts */}
                  <g className="cursor-pointer" onClick={() => setActiveHotspot(3)}>
                    <circle cx="440" cy="139" r="10" fill={activeHotspot === 3 ? "#f59e0b" : "#0284c7"} fillOpacity="0.8" />
                    <circle cx="440" cy="139" r="5" fill="#fff" />
                    <text x="455" y="130" fill="#7dd3fc" fontSize="11">04. Yulduz Shaxtalari</text>
                  </g>

                  {/* Hotspot 4: Subterranean chamber */}
                  <g className="cursor-pointer" onClick={() => setActiveHotspot(4)}>
                    <circle cx="390" cy="410" r="10" fill={activeHotspot === 4 ? "#f59e0b" : "#78716c"} fillOpacity="0.8" />
                    <circle cx="390" cy="410" r="5" fill="#fff" />
                    <text x="420" y="415" fill="#e7e5e4" fontSize="11">05. Yerosti Xonasi</text>
                  </g>
                </svg>
              </div>

              {/* Chamber selector tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mt-4 pt-3 border-t border-stone-800">
                {pyramidWonder.sections?.map((sec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHotspot(idx)}
                    className={`px-2 py-1.5 text-xs rounded transition-all text-center truncate cursor-pointer ${
                      activeHotspot === idx
                        ? 'bg-amber-500 text-stone-950 font-semibold'
                        : 'bg-stone-900 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {sec.name.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Chamber Secret Details View */}
            <div className="lg:col-span-5 space-y-6">
              {pyramidWonder.sections && (
                <div className="bg-stone-950/70 p-6 rounded-xl border border-stone-800">
                  <div className="text-xs uppercase font-mono text-amber-400 tracking-wider mb-1">
                    TANLANGAN QISM: 0{activeHotspot + 1}
                  </div>
                  <h4 className="text-2xl font-cinzel font-bold text-amber-200 mb-3">
                    {pyramidWonder.sections[activeHotspot].name}
                  </h4>
                  <p className="text-stone-300 font-sans text-sm leading-relaxed mb-4">
                    {pyramidWonder.sections[activeHotspot].description}
                  </p>
                  <div className="p-3.5 rounded-lg bg-stone-900/90 border-l-2 border-amber-500 text-xs sm:text-sm text-stone-300">
                    <span className="font-semibold text-amber-300 block mb-1">Arxeologik Tafsilot:</span>
                    {pyramidWonder.sections[activeHotspot].detail}
                  </div>
                </div>
              )}

              {/* Engineering Mystery Card */}
              <div className="bg-stone-950/70 p-6 rounded-xl border border-stone-800">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Muhandislikning Bosh Qotirmasi
                </div>
                <p className="text-stone-300 font-sans text-sm leading-relaxed">
                  {pyramidWonder.architecturalMystery}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-wrap justify-between text-xs text-stone-400">
                  <span>Bloklar soni: <strong className="text-stone-200 tabular-nums">~2,300,000 dona</strong></span>
                  <span>O‘rtacha og‘irlik: <strong className="text-stone-200 tabular-nums">2.5 – 15 tonna</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* If Other Wonder is selected: Karnak, Sphinx, Abu Simbel */
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
          {activeWonderId === 'karnak' && (
            <div className="mb-8 rounded-xl overflow-hidden border border-stone-800 max-h-96">
              <img
                src="/src/assets/images/karnak_temple_hypostyle_1791274277553.jpg"
                alt="Karnak ibodatxonasi gipostil zali"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover object-center"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800 text-xs text-stone-400 font-mono">
            <div>DAVR: <span className="text-stone-200 font-sans font-medium">{selectedWonder.era}</span></div>
            <div>MANZIL: <span className="text-amber-300 font-sans font-medium">{selectedWonder.location}</span></div>
            <div>O‘LCHAMLAR: <span className="text-stone-200 font-sans font-medium">{selectedWonder.heightOrSize}</span></div>
          </div>

          <div className="my-6">
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-200 mb-2">
              {selectedWonder.name}
            </h3>
            <p className="text-stone-300 text-sm font-serif italic text-amber-300/80">
              Vazifasi: {selectedWonder.purpose}
            </p>
          </div>

          <div className="text-stone-300 font-sans text-base leading-relaxed mb-8">
            <p className="first-letter:text-4xl first-letter:font-cinzel first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:font-bold">
              {selectedWonder.description}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-950/80 border border-amber-600/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Tarixiy Sir va Mo‘jiza
            </h4>
            <p className="text-stone-300 text-sm leading-relaxed">
              {selectedWonder.architecturalMystery}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
