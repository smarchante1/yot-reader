import React from 'react';
import { CharacterCard } from './CharacterCard';
import { Character } from '../types';

interface CharacterGridProps {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export const CharacterGrid: React.FC<CharacterGridProps> = ({
  characters,
  onSelectCharacter,
}) => {
  return (
    <section id="characters" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 text-[#016F93]">
              <div className="h-px w-8 md:w-16 bg-current opacity-30"></div>
              <h2 className="text-3xl md:text-5xl font-bold font-cinzel tracking-wider uppercase">
                Season 1 Cast
              </h2>
              <div className="h-px w-8 md:w-16 bg-current opacity-30"></div>
            </div>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
            The characters thrusted together by the whims of fate in the shadow of the Treehouse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={() => onSelectCharacter(character)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};