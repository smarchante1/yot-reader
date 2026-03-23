import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onSelect: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={character.imageUrls[0]}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#016F93]/90 via-[#016F93]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-cinzel tracking-widest text-xs font-bold uppercase border-b border-white/30 pb-1">
            View Profile
          </span>
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold font-cinzel text-[#016F93] mb-1 group-hover:text-[#1192A3] transition-colors">
          {character.name}
        </h3>
        <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
          {character.role}
        </p>
      </div>
    </div>
  );
};
