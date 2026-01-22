
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface Reaction {
  emoji: string;
  label: string;
  count: number;
}

interface EmojiReactionSectionProps {
  chapterId: number;
}

const STORAGE_PREFIX = 'treehouse_reactions_ch_';

export const EmojiReactionSection: React.FC<EmojiReactionSectionProps> = ({ chapterId }) => {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [userReaction, setUserReaction] = useState<string | null>(null);

  useEffect(() => {
    // Load data from localStorage or initialize with 0
    const storageKey = `${STORAGE_PREFIX}${chapterId}`;
    const userKey = `user_reaction_ch_${chapterId}`;
    const savedData = localStorage.getItem(storageKey);
    const savedUserReaction = localStorage.getItem(userKey);

    const initialReactions: Reaction[] = [
      { emoji: '🔥', label: 'Epic', count: 0 },
      { emoji: '🩵', label: 'Love', count: 0 },
      { emoji: '😲', label: 'Wow', count: 0 },
      { emoji: '😭', label: 'Moving', count: 0 },
      { emoji: '😡', label: 'Intense', count: 0 },
      { emoji: '✨', label: 'Magical', count: 0 },
      { emoji: '🌳', label: 'Rooted', count: 0 },
    ];

    if (savedData) {
      const parsed = JSON.parse(savedData);
      // Merge counts into our current emoji list to handle structure changes gracefully
      const merged = initialReactions.map(r => ({
        ...r,
        count: parsed.find((p: any) => p.label === r.label)?.count || 0
      }));
      setReactions(merged);
    } else {
      setReactions(initialReactions);
    }

    setUserReaction(savedUserReaction);
  }, [chapterId]);

  const handleReact = (label: string) => {
    let newReactions: Reaction[] = [];
    let newUserReaction: string | null = null;

    if (userReaction === label) {
      // Untoggle
      newReactions = reactions.map(r => r.label === label ? { ...r, count: Math.max(0, r.count - 1) } : r);
      newUserReaction = null;
    } else {
      // Toggle new
      newReactions = reactions.map(r => {
        if (r.label === label) return { ...r, count: r.count + 1 };
        if (r.label === userReaction) return { ...r, count: Math.max(0, r.count - 1) };
        return r;
      });
      newUserReaction = label;
    }

    setReactions(newReactions);
    setUserReaction(newUserReaction);

    // Save to local storage for persistence
    localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, JSON.stringify(newReactions));
    if (newUserReaction) {
      localStorage.setItem(`user_reaction_ch_${chapterId}`, newUserReaction);
    } else {
      localStorage.removeItem(`user_reaction_ch_${chapterId}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 text-[#016F93] mb-2">
          <Sparkles size={20} className="text-amber-400" />
          <h3 className="text-xl font-black font-cinzel uppercase tracking-widest">Chapter Reaction</h3>
        </div>
        <p className="text-slate-500 text-sm">How did this chapter make you feel?</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {reactions.map((reaction) => (
          <button
            key={reaction.label}
            onClick={() => handleReact(reaction.label)}
            className={`flex flex-col items-center gap-2 p-5 rounded-none transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 ${
              userReaction === reaction.label
                ? 'bg-white border-[#1192A3] shadow-lg shadow-[#1192A3]/10 scale-105'
                : 'bg-white/40 border-transparent hover:bg-white/80 hover:border-[#E1F6FA]'
            }`}
          >
            <span className="text-4xl filter drop-shadow-sm select-none">{reaction.emoji}</span>
            {/* Text labels removed for a cleaner visual as requested */}
            <span className={`text-sm font-black tabular-nums ${
              userReaction === reaction.label ? 'text-[#016F93]' : 'text-slate-500'
            }`}>
              {reaction.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="h-0.5 w-16 bg-[#016F93]/10"></div>
      </div>
    </div>
  );
};
