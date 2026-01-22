import React, { useState } from 'react';
import { CharacterGrid } from './CharacterGrid';
import { CharacterModal } from './CharacterModal';
import { CHARACTERS } from '../constants';
import { Character } from '../types';

export const CastPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FDFF] pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-black font-cinzel text-[#016F93] mb-4 uppercase tracking-tighter">Meet The Cast</h1>
          <p className="text-slate-500 max-w-xl mx-auto">The individuals bound together by the secret of the Olde Treehouse.</p>
        </div>
      </div>

      <CharacterGrid 
        characters={CHARACTERS} 
        onSelectCharacter={setSelectedCharacter} 
      />

      {selectedCharacter && (
        <CharacterModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </div>
  );
};