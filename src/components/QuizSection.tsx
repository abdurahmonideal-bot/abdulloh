import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/egyptData';
import { Award, CheckCircle, XCircle, RotateCcw, Printer, Sparkles, BookOpen } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  const getRank = (sc: number) => {
    if (sc >= 9) return { title: 'Oliy Misrshunos Daho (Buyuk Saroy Olimi)', color: 'text-amber-400' };
    if (sc >= 7) return { title: 'Shohona Mirzo va Qadimgi Dunyo Bilimdoni', color: 'text-yellow-400' };
    if (sc >= 5) return { title: 'Qiziqqon Tarix Sayyohi va Tadqiqotchi', color: 'text-emerald-400' };
    return { title: 'Yosh Shogird (Bilimlarni mustahkamlash lozim)', color: 'text-stone-400' };
  };

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest font-sans text-amber-500 font-semibold mb-2">
          INTERAKTIV IMTIHON VA SERTIFIKAT
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-100 mb-4">
          Qadimgi Misr Tarixi Bilim Sinovi
        </h2>
        <p className="max-w-3xl text-stone-400 font-sans text-base leading-relaxed">
          10 ta saralangan tarixiy savolga javob bering, natijangizni sinang va 
          shaxsiy «Misrshunoslik Sertifikati»ga ega bo‘ling!
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!isCompleted ? (
          /* Quiz In-Progress Card */
          <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
            {/* Progress header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs font-mono text-stone-400">
              <span className="text-amber-400 font-bold">
                SAVOL {currentIdx + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span>Ball: <strong className="text-stone-200 tabular-nums">{score}</strong></span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-stone-950 h-2 rounded-full my-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-600 to-amber-400 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-stone-100 mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-stone-950/80 border-stone-800 text-stone-200 hover:border-amber-500/60';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                  } else if (idx === selectedOption) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'bg-stone-950/40 border-stone-900 text-stone-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after answering */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300 mb-6 animate-fadeIn">
                <span className="font-semibold text-amber-400 block mb-1">Tarixiy Izoh:</span>
                {currentQ.explanation}
              </div>
            )}

            {/* Next button */}
            {isAnswered && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors cursor-pointer text-sm"
                >
                  {currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Keyingi savol →' : 'Natijani ko‘rish'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Completed & Certificate Card */
          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md space-y-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
                BILIM SINHOVI TUGALLANDI
              </div>
              <h3 className="text-3xl font-cinzel font-bold text-stone-100">
                Sizning Natijangiz: <span className="text-amber-400 tabular-nums">{score}</span> / {QUIZ_QUESTIONS.length} ball
              </h3>
              <p className={`text-base font-semibold mt-2 ${getRank(score).color}`}>
                {getRank(score).title}
              </p>
            </div>

            {/* Certificate Form & Preview */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#1c1917] to-[#0c0a09] border-4 border-amber-600/70 text-center relative shadow-2xl">
              <div className="text-[11px] font-mono tracking-widest text-amber-500 uppercase mb-2">
                QADIMGI MISR TARIXI ILMIY-MA’RIFIY DASTURI
              </div>
              <h4 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 mb-1">
                MISRSHUNOSLIK SERTIFIKATI
              </h4>
              <p className="text-xs text-stone-400 font-serif italic mb-6">
                Ushbu sertifikat Qadimgi Misr tarixi, fir’avnlar va ehromlar merosini muvaffaqiyatli o‘zlashtirganligini tasdiqlaydi
              </p>

              <div className="max-w-md mx-auto mb-6">
                <label className="block text-xs font-mono text-stone-400 mb-1 text-left">
                  Sertifikat egasining ismi-sharifi:
                </label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-2 bg-stone-950 border border-stone-700 rounded-lg text-amber-200 font-cinzel text-center text-lg focus:outline-none focus:border-amber-400"
                />
              </div>

              {studentName && (
                <div className="my-4 py-3 border-y border-amber-600/40 text-amber-200 text-xl font-cinzel font-bold tracking-wide">
                  {studentName.toUpperCase()}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between text-xs text-stone-400 font-mono pt-4 mt-4 border-t border-stone-800">
                <div>
                  To‘plangan natija: <strong className="text-amber-400 tabular-nums">{score * 10}%</strong>
                </div>
                <div>
                  Sana: <span className="tabular-nums">{new Date().toLocaleDateString('uz-UZ')}</span>
                </div>
                <div className="text-amber-500 font-serif italic">
                  Muhr: 𓋹 Shenu Imtiyoz
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 transition-colors cursor-pointer text-sm flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Sertifikatni Chop Etish (PDF)</span>
              </button>
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-lg border border-stone-700 text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer text-sm flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Qayta topshirish</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
