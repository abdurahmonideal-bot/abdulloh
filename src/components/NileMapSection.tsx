import React, { useState } from 'react';
import { NILE_LOCATIONS, NileLocation } from '../data/egyptData';
import { MapPin, Navigation, Compass, Landmark } from 'lucide-react';

export const NileMapSection: React.FC = () => {
  const [selectedLocId, setSelectedLocId] = useState<string>('giza-memphis');
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const selectedLoc: NileLocation = NILE_LOCATIONS.find(l => l.id === selectedLocId) || NILE_LOCATIONS[1];

  const filteredLocations = filterRegion === 'all'
    ? NILE_LOCATIONS
    : NILE_LOCATIONS.filter(l => l.region.includes(filterRegion));

  return (
    <section id="nile-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          GEOGRAFIYA VA ARXEOLOGIYA
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Nil Vohasi Bo‘ylab Interaktiv Sayohat
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          «Misr — Nilning in’omidir» deb yozgan edi Gerodot. Dunyodagi eng uzun daryolardan biri bo‘lgan Nil
          bo‘ylab Quyi Misrning botqoqli deltasidan to Janubdagi Nubiya chegarasigacha qad rostlagan qadimgi markazlar.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilterRegion('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
            filterRegion === 'all'
              ? 'bg-amber-500 text-stone-950 font-bold'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200'
          }`}
        >
          Barcha Manzillar ({NILE_LOCATIONS.length})
        </button>
        <button
          onClick={() => setFilterRegion('Quyi')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
            filterRegion === 'Quyi'
              ? 'bg-amber-500 text-stone-950 font-bold'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200'
          }`}
        >
          Quyi Misr (Shimoliy Delta)
        </button>
        <button
          onClick={() => setFilterRegion('Yuqori')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
            filterRegion === 'Yuqori'
              ? 'bg-amber-500 text-stone-950 font-bold'
              : 'bg-stone-900 text-stone-400 hover:text-stone-200'
          }`}
        >
          Yuqori Misr (Janub)
        </button>
      </div>

      {/* Main Map + Card Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Schematic Interactive Map Canvas */}
        <div className="lg:col-span-7 bg-stone-950/80 border border-stone-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Compass className="w-4 h-4" />
              NIL OQIMI VA ASOSIY QADIMGI SHAHARLAR
            </span>
            <span className="text-[11px] text-stone-500">Shimoldan Janubga</span>
          </div>

          {/* SVG Map of Nile Course */}
          <div className="relative w-full aspect-[9/14] sm:aspect-[4/3] bg-gradient-to-b from-stone-900/90 via-stone-950 to-stone-900 rounded-xl p-4 border border-stone-800">
            <svg viewBox="0 0 500 650" className="w-full h-full select-none">
              <defs>
                <linearGradient id="nileBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#0369a1" />
                  <stop offset="100%" stopColor="#075985" />
                </linearGradient>
              </defs>

              {/* Mediterranean Sea outline at top */}
              <path
                d="M 50,20 Q 250,55 450,20 L 450,0 L 50,0 Z"
                fill="#0c4a6e"
                opacity="0.6"
              />
              <text x="180" y="28" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
                O‘rta Yer Dengizi
              </text>

              {/* Nile Delta Branches (Lower Egypt) */}
              <path
                d="M 230,140 Q 180,80 140,40"
                stroke="url(#nileBlue)"
                strokeWidth="7"
                fill="none"
              />
              <path
                d="M 230,140 Q 240,75 270,40"
                stroke="url(#nileBlue)"
                strokeWidth="7"
                fill="none"
              />
              <path
                d="M 230,140 Q 300,90 350,45"
                stroke="url(#nileBlue)"
                strokeWidth="6"
                fill="none"
              />

              {/* Nile Main Stem winding south */}
              <path
                d="M 230,140 
                   Q 240,200 245,260 
                   Q 255,340 270,420 
                   Q 330,470 300,530 
                   Q 260,560 270,620"
                stroke="url(#nileBlue)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />

              {/* Surrounding Desert terrain text */}
              <text x="40" y="300" fill="#78716c" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                Liviya Cho‘li (G‘arb)
              </text>
              <text x="360" y="300" fill="#78716c" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                Arab Cho‘li (Sharq)
              </text>
              <text x="380" y="470" fill="#78716c" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                Qizil Dengiz ➔
              </text>

              {/* Map Locations Markers */}
              {NILE_LOCATIONS.map((loc) => {
                const isSelected = loc.id === selectedLocId;
                // Calculate pixel based on coords
                const px = (loc.coordinatesPct.x / 100) * 500;
                const py = (loc.coordinatesPct.y / 100) * 650;

                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedLocId(loc.id)}
                  >
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 10 : 6}
                      fill={isSelected ? "#f59e0b" : "#e7e5e4"}
                      stroke={isSelected ? "#fbbf24" : "#44403c"}
                      strokeWidth={isSelected ? 3 : 2}
                      className="transition-all"
                    />
                    {isSelected && (
                      <circle cx={px} cy={py} r={16} fill="#f59e0b" fillOpacity="0.25" />
                    )}
                    <text
                      x={px + 14}
                      y={py + 4}
                      fill={isSelected ? "#fbbf24" : "#e7e5e4"}
                      fontSize={isSelected ? "12" : "11"}
                      fontWeight={isSelected ? "bold" : "normal"}
                      fontFamily="sans-serif"
                    >
                      {loc.name.split('(')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected City Details Card */}
        <div className="lg:col-span-5 bg-stone-900/70 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs font-mono text-stone-400">
            <span className="text-amber-400 font-semibold">{selectedLoc.region}</span>
            <span>Qadimgi Nomi: {selectedLoc.ancientName}</span>
          </div>

          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-amber-500 mb-1">
              ARXEOLOGIK HUDUD
            </div>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-100 mb-2">
              {selectedLoc.name}
            </h3>
            <div className="text-xs font-serif italic text-amber-300">
              Qadimgi Misrcha nomi: «{selectedLoc.ancientName}»
            </div>
          </div>

          <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            {selectedLoc.description}
          </p>

          <div className="p-4 rounded-xl bg-stone-950/80 border border-amber-600/30">
            <div className="text-xs font-mono uppercase text-amber-400 mb-1 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-amber-400" />
              Eng Mashhur Yodgorlik / Eksponat:
            </div>
            <div className="text-sm font-semibold text-stone-200">
              {selectedLoc.highlightArtifact}
            </div>
          </div>

          {/* Location quick list buttons */}
          <div className="pt-2">
            <div className="text-xs font-mono text-stone-400 mb-2">Boshqa markazlar:</div>
            <div className="flex flex-wrap gap-1.5">
              {NILE_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocId(loc.id)}
                  className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                    loc.id === selectedLocId
                      ? 'bg-amber-500 text-stone-950 font-semibold'
                      : 'bg-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-750'
                  }`}
                >
                  {loc.name.split('(')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
