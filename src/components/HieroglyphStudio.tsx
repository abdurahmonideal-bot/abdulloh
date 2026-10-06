import React, { useState } from 'react';
import { HIEROGLYPH_ALPHABET, HieroglyphChar } from '../data/egyptData';
import { Scroll, Copy, Check, Sparkles, BookOpen, Crown } from 'lucide-react';

interface HieroglyphStudioProps {
  initialName?: string;
}

export const HieroglyphStudio: React.FC<HieroglyphStudioProps> = ({ initialName = 'ABDURAHMON' }) => {
  const [inputText, setInputText] = useState<string>(initialName);
  const [copied, setCopied] = useState<boolean>(false);

  // Clean and parse uppercase chars
  const normalized = inputText.trim().toUpperCase();

  // Map letters to hieroglyphs
  const mappedChars: HieroglyphChar[] = [];
  let i = 0;
  while (i < normalized.length) {
    // Check 2-letter digraphs first: SH, CH, O', G'
    const two = normalized.slice(i, i + 2);
    if (two === 'SH' && HIEROGLYPH_ALPHABET['SH']) {
      mappedChars.push(HIEROGLYPH_ALPHABET['SH']);
      i += 2;
      continue;
    }
    if (two === 'CH' && HIEROGLYPH_ALPHABET['CH']) {
      mappedChars.push(HIEROGLYPH_ALPHABET['CH']);
      i += 2;
      continue;
    }
    if ((two === "O'" || two === "O‘") && HIEROGLYPH_ALPHABET["Oʻ"]) {
      mappedChars.push(HIEROGLYPH_ALPHABET["Oʻ"]);
      i += 2;
      continue;
    }
    if ((two === "G'" || two === "G‘") && HIEROGLYPH_ALPHABET["Gʻ"]) {
      mappedChars.push(HIEROGLYPH_ALPHABET["Gʻ"]);
      i += 2;
      continue;
    }

    const single = normalized[i];
    if (HIEROGLYPH_ALPHABET[single]) {
      mappedChars.push(HIEROGLYPH_ALPHABET[single]);
    } else if (single === ' ') {
      // space
      mappedChars.push({ letter: ' ', glyph: '·', symbolName: 'Bo‘shliq', transliteration: ' ', meaning: 'Oraliq' });
    } else {
      // fallback
      mappedChars.push({ letter: single, glyph: single, symbolName: 'Belgi', transliteration: single, meaning: single });
    }
    i++;
  }

  const glyphsString = mappedChars.map(c => c.glyph).join(' ');

  const handleCopy = () => {
    navigator.clipboard.writeText(`${inputText}: ${glyphsString}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sampleNames = ['ABDURAHMON', 'MISR', 'TUTANXAMON', 'NEFERTITI', 'RAMZES', 'TOSHKENT'];

  return (
    <section id="cartouche-studio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          INTERAKTIV TIZIM
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Ierogliflar va Shaxsiy Kartush Laboratoriyasi
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          Qadimgi Misrda faqat fir’avnlar va ma’budalarning ismlari yovuzlikdan asrovchi muqaddas 
          «Kartush» (Shenu) halqasi ichiga ierogliflar bilan yozilgan.
          O‘z ismingizni yozing va qadimgi misrlik mirzalar singari shaxsiy shohona kartushingizni yarating!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input and Customizer */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 backdrop-blur-md">
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Ismingiz yoki so‘zni kiriting (Lotin alifbosida):
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Masalan: ABDURAHMON"
              maxLength={24}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-700 rounded-lg text-amber-200 font-cinzel text-lg focus:outline-none focus:border-amber-400 transition-colors uppercase tracking-wider"
            />

            {/* Quick samples */}
            <div className="mt-4">
              <span className="text-xs text-stone-400 block mb-2 font-mono">
                Misollar:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {sampleNames.map((name) => (
                  <button
                    key={name}
                    onClick={() => setInputText(name)}
                    className="px-2.5 py-1 text-xs rounded bg-stone-800 text-stone-300 hover:text-amber-300 hover:bg-stone-750 transition-colors cursor-pointer border border-stone-700"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Nusxalandi!' : 'Ierogliflarni nusxalash'}</span>
              </button>
              <span className="text-xs text-stone-400 font-mono">
                {mappedChars.length} ta ieroglif
              </span>
            </div>
          </div>

          {/* Educational Note: How Cartouche works */}
          <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800 text-xs sm:text-sm text-stone-300 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs uppercase">
              <Crown className="w-4 h-4 text-amber-400" />
              «Kartush» (Shenu) Nima?
            </div>
            <p className="leading-relaxed">
              Kartush — bu fir’avn nomini o‘rab turgan ovalsimon ilmoq halqa. U «Shen» (cheksizlik, koinotni qamrab olish) 
              ma’nosini beradi. Fir’avn nomi bu halqa ichida bo‘lsa, uni quyosh nuri kabi barcha yomonliklardan saqlaydi deb ishonilgan.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Royal Cartouche Display */}
        <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md flex flex-col items-center">
          <div className="text-xs uppercase font-mono tracking-widest text-amber-400/90 mb-4 text-center">
            SHOHONA KARTUSH VA IEROGLIFLAR TAHLILI
          </div>

          {/* The Royal Cartouche Graphic */}
          <div className="my-4 relative flex flex-col items-center">
            {/* Cartouche Outer Oval Gold Frame */}
            <div className="min-w-[240px] max-w-full px-8 py-10 rounded-[60px] border-4 border-amber-500 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 shadow-2xl shadow-amber-500/10 flex flex-col items-center justify-center relative">
              {/* Top loop ring tie */}
              <div className="absolute -top-3 w-8 h-3 border-2 border-amber-400 rounded-full bg-stone-950" />
              
              {/* Hieroglyphic characters row / column */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2">
                {mappedChars.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <span className="text-3xl sm:text-4xl text-amber-300 font-serif drop-shadow-md transition-transform group-hover:scale-110">
                      {item.glyph}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400 mt-1 uppercase">
                      {item.letter}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom tied base bar */}
              <div className="absolute -bottom-3.5 w-24 h-3 bg-amber-500 rounded-sm shadow-md" />
            </div>

            <div className="mt-8 text-center">
              <div className="text-lg sm:text-xl font-cinzel font-bold text-amber-200">
                « {inputText.toUpperCase() || 'FIR’AVN'} »
              </div>
              <div className="text-xs text-stone-400 font-serif italic mt-0.5">
                Muqaddas qirollik nomi
              </div>
            </div>
          </div>

          {/* Breakdown of each hieroglyph in the word */}
          <div className="w-full mt-8 pt-6 border-t border-stone-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
              Harflarning Ramziy Ma’nosi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {mappedChars.filter(c => c.letter !== ' ').map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-stone-950/70 border border-stone-800 text-xs">
                  <span className="text-2xl text-amber-400 w-8 text-center font-serif">
                    {c.glyph}
                  </span>
                  <div>
                    <div className="font-semibold text-stone-200">
                      {c.letter} — {c.symbolName}
                    </div>
                    <div className="text-stone-400 text-[11px]">
                      {c.meaning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
