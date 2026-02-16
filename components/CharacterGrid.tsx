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
