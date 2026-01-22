import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, X } from 'lucide-react';
import { CHAPTERS } from '../constants';
import { Chapter } from '../types';
import { Button } from './Button';

export const ChapterList: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const openSynopsis = (chapter: Chapter) => setSelectedChapter(chapter);
  const closeSynopsis = () => setSelectedChapter(null);

  return (
    <div className="min-h-screen bg-[#F8FDFF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#016F93] mb-4 font-cinzel">
            Chapter Archive
          </h1>
          <p className="text-gray-600">
            Browse all chapters of YOT Arc 1: The Nosferi Dilemma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white rounded-xl shadow-md border border-[#E1F6FA] overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 group">
                <img
                  src={chapter.thumbnail}
                  alt={chapter.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link to={`/chapter/${chapter.id}`} className="w-full">
                    <Button
                      variant="primary"
                      fullWidth
                      className="text-sm py-2"
                    >
                      Read Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-lg font-bold text-[#016F93] line-clamp-1 font-cinzel"
                    title={chapter.title}
                  >
                    {chapter.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Calendar size={12} />
                  <span>{chapter.dateReleased}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{chapter.pageCount} Pages</span>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => openSynopsis(chapter)}
                    className="flex items-center gap-1 text-sm text-[#1192A3] hover:text-[#016F93] font-medium focus:outline-none transition-colors"
                  >
                    View Synopsis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Synopsis Modal */}
      {selectedChapter && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeSynopsis}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col max-h-[90dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-56 bg-gray-200 flex-shrink-0">
              <img
                src={selectedChapter.thumbnail}
                alt={selectedChapter.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white shadow-sm font-cinzel">
                  {selectedChapter.title}
                </h2>
              </div>
              <button
                onClick={closeSynopsis}
                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 transition-colors z-10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {selectedChapter.dateReleased}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} /> {selectedChapter.pageCount} Pages
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {selectedChapter.synopsis}
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  to={`/chapter/${selectedChapter.id}`}
                  onClick={closeSynopsis}
                  className="w-full"
                >
                  <Button variant="primary" fullWidth>
                    Read Chapter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
