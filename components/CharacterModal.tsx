import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Character } from '../types';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + character.imageUrls.length) % character.imageUrls.length,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % character.imageUrls.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70] flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-6xl w-full h-[90vh] md:h-[85vh] overflow-hidden flex flex-col md:grid md:grid-cols-2 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-30 bg-black/40 rounded-full p-2 hover:bg-black/60 md:bg-transparent"
        >
          <X size={24} />
        </button>

        {/* Visual Reference Gallery */}
        <div className="relative overflow-hidden shrink-0 flex items-center justify-center bg-white h-[40vh] md:h-full">
          <div className="w-full h-full flex items-center justify-center p-4 md:p-10">
            <img
              key={currentImageIndex}
              src={character.imageUrls[currentImageIndex]}
              alt={character.name}
              className="max-w-full max-h-full transition-all duration-300 object-contain shadow-2xl rounded-sm border border-slate-100"
            />
          </div>

          {character.imageUrls.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-10">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-white text-[10px] md:text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full tabular-nums tracking-widest backdrop-blur-sm">
                {currentImageIndex + 1} / {character.imageUrls.length}
              </span>
              <button
                onClick={handleNextImage}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 flex flex-col flex-1 bg-slate-900 overflow-y-auto">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-6xl font-black font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#E1F6FA] to-[#016F93] mb-2 leading-tight">
              {character.name}
            </h2>
            <p className="text-[#016F93] font-bold text-xl tracking-[0.2em] uppercase font-cinzel mb-10 opacity-90">
              {character.role}
            </p>

            <div className="space-y-12">
              <section>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 font-cinzel border-b border-slate-800 pb-2">
                  Biography
                </h4>
                <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed">
                  {character.bio}
                </p>
              </section>

              <section>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 font-cinzel border-b border-slate-800 pb-2">
                  Personality
                </h4>
                <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed">
                  {character.personality}
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-600 uppercase tracking-[0.5em] font-cinzel text-center">
                Ye Olde Treehouse
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
