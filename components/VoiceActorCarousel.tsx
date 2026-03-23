import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Mic2,
  Twitter,
  Instagram,
} from 'lucide-react';
import { VOICE_ACTORS } from '../constants';

export const VoiceActorCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % VOICE_ACTORS.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + VOICE_ACTORS.length) % VOICE_ACTORS.length,
    );
  };

  return (
    <div className="relative w-full py-20 overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
        <div className="flex items-center gap-3 text-[#1192A3] mb-4">
          <Mic2 size={24} />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] font-cinzel">
            Meet the actors bringing YOT to life
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#016F93] font-cinzel text-center uppercase tracking-tighter">
          SEASON 1 <span className="text-[#1192A3]">CAST</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-[#E1F6FA] relative overflow-hidden group">
          {/* Decorative background number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-slate-50 pointer-events-none select-none -z-0">
            {activeIndex + 1}
          </div>

          {/* Voice Actor Panel */}
          <div className="relative z-10 flex-1 flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-xl mb-6 transform transition-transform duration-700 hover:scale-105">
              <img
                key={VOICE_ACTORS[activeIndex].vaImageUrl}
                src={VOICE_ACTORS[activeIndex].vaImageUrl}
                alt={VOICE_ACTORS[activeIndex].name}
                className="w-full h-full object-cover object-[50%_15%]"
                loading="lazy"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter mb-2">
              {VOICE_ACTORS[activeIndex].name}
            </h3>
            <p className="text-[#1192A3] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              Voice Actor
            </p>
            <div className="flex gap-3 justify-center lg:justify-end">
              {VOICE_ACTORS[activeIndex].twitter && (
                <a
                  href={`https://twitter.com/${VOICE_ACTORS[activeIndex].twitter
                    .replace('@', '')
                    .trim()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#1DA1F2] transition-colors"
                >
                  <Twitter size={24} />
                </a>
              )}
              {VOICE_ACTORS[activeIndex].instagram && (
                <a
                  href={`https://instagram.com/${VOICE_ACTORS[
                    activeIndex
                  ].instagram
                    .replace('@', '')
                    .trim()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#E1306C] transition-colors"
                >
                  <Instagram size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Separator / VS line */}
          <div className="relative z-10 h-px w-20 bg-[#E1F6FA] lg:h-40 lg:w-px mx-4 opacity-50"></div>

          {/* Character Panel */}
          <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-xl mb-6 transform transition-transform duration-700 hover:scale-105 rotate-2">
              <img
                key={VOICE_ACTORS[activeIndex].charImageUrl}
                src={VOICE_ACTORS[activeIndex].charImageUrl}
                alt={VOICE_ACTORS[activeIndex].characterName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter mb-2">
              {VOICE_ACTORS[activeIndex].characterName}
            </h3>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              Character
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white text-[#016F93] rounded-full shadow-lg hover:bg-[#1192A3] hover:text-white transition-all z-20 active:scale-90"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white text-[#016F93] rounded-full shadow-lg hover:bg-[#1192A3] hover:text-white transition-all z-20 active:scale-90"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {VOICE_ACTORS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-[#1192A3]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
