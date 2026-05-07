import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, X, Layers } from 'lucide-react';
import { CHAPTERS } from '../constants';
import { Chapter } from '../types';
import { Button } from './Button';

export const ChapterList: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const openSynopsis = (chapter: Chapter) => setSelectedChapter(chapter);
  const closeSynopsis = () => setSelectedChapter(null);

  // Grouping chapters by volume for a much cleaner library experience
  const volumes = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Volume 1',
        chapters: CHAPTERS.filter((c) => c.id >= 1 && c.id <= 7),
      },
      {
        id: 2,
        title: 'Volume 2',
        chapters: CHAPTERS.filter((c) => c.id >= 8 && c.id <= 15),
      },
      {
        id: 3,
        title: 'Volume 3',
        chapters: CHAPTERS.filter((c) => c.id >= 16 && c.id <= 23),
      },
      {
        id: 4,
        title: 'Volume 4',
        chapters: CHAPTERS.filter((c) => c.id >= 24 && c.id <= 31),
      },
      {
        id: 5,
        title: 'Volume 5+',
        chapters: CHAPTERS.filter((c) => c.id >= 32),
      },
    ].filter((v) => v.chapters.length > 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FDFF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#016F93] mb-4 font-cinzel uppercase tracking-tighter">
            Chapter List
          </h1>
          <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">
            Browse all Chapters of Arc 1: The Nosferi Dilemma
          </p>
          <div className="h-1 w-20 bg-[#1192A3] mx-auto mt-6"></div>
        </div>

        <div className="space-y-20">
          {volumes.map((volume) => (
            <div
              key={volume.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              {/* Volume Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#016F93] p-2 rounded-lg text-white shadow-lg">
                  <Layers size={20} />
                </div>
                <h2 className="text-2xl font-black text-[#016F93] font-cinzel uppercase tracking-wider">
                  {volume.title}
                </h2>
                <div className="flex-grow h-px bg-[#016F93]/10"></div>
              </div>

              {/* Horizontal Card Layout - 2 columns on tablet/desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {volume.chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className="bg-white rounded-2xl shadow-sm border border-[#E1F6FA] overflow-hidden hover:shadow-xl transition-all duration-300 flex group"
                  >
                    {/* Portrait Thumbnail Container - Standard size for all chapters */}
                    <div
                      className={`relative shrink-0 overflow-hidden bg-slate-100 flex items-center justify-center w-40 md:w-48 thumb-container-standard ${[1, 8, 16, 24].includes(chapter.id) ? 'cover-thumb-container' : ''}`}
                      style={
                        [1, 8, 16, 24].includes(chapter.id)
                          ? ({
                              '--blur-bg': `url(${chapter.thumbnail})`,
                              backgroundImage: `url(${chapter.thumbnail})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            } as React.CSSProperties)
                          : undefined
                      }
                    >
                      <div
                        className={`w-full h-full ${[1, 8, 16, 24].includes(chapter.id) ? 'bg-transparent cover-image-wrapper' : ''}`}
                      >
                        <img
                          src={chapter.thumbnail}
                          alt={chapter.title}
                          className={`w-full h-full ${[1, 8, 16, 24].includes(chapter.id) ? 'cover-thumbnail' : 'manga-thumbnail'}`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://placehold.co/400x600?text=Wait';
                          }}
                        />
                      </div>

                      {/* Hover Overlay - Clickable but without the redundant button */}
                      <Link
                        to={`/chapter/${chapter.id}`}
                        className="absolute inset-0 z-10 bg-[#016F93]/0 group-hover:bg-[#016F93]/5 transition-colors"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between overflow-hidden">
                      <div>
                        <h3
                          className="text-base md:text-lg font-black text-[#016F93] font-cinzel mb-1 truncate"
                          title={chapter.title}
                        >
                          {chapter.title}
                        </h3>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} /> {chapter.dateReleased}
                          </span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span>{chapter.pageCount} Pages</span>
                        </div>
                        <p className="text-slate-500 text-[11px] line-clamp-3 md:line-clamp-2 font-light leading-relaxed">
                          {chapter.synopsis}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <button
                          onClick={() => openSynopsis(chapter)}
                          className="text-[10px] font-black uppercase tracking-widest text-[#1192A3] hover:text-[#016F93] transition-colors"
                        >
                          Synopsis
                        </button>
                        <Link to={`/chapter/${chapter.id}`}>
                          <Button
                            variant="primary"
                            className="!py-2 !px-4 md:!px-5 text-[10px] uppercase tracking-widest font-black"
                          >
                            Read
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 relative flex flex-col max-h-[85dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 bg-slate-100 flex-shrink-0">
              <img
                src={selectedChapter.thumbnail}
                alt={selectedChapter.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-white font-cinzel leading-tight uppercase tracking-tight">
                    {selectedChapter.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={closeSynopsis}
                className="absolute top-6 right-6 bg-black/20 hover:bg-black/50 text-white rounded-full p-2 transition-all backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 flex-1 overflow-y-auto">
              <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#1192A3]" />{' '}
                  {selectedChapter.dateReleased}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={14} className="text-[#1192A3]" />{' '}
                  {selectedChapter.pageCount} Pages
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                {selectedChapter.synopsis}
              </p>

              <div className="mt-10">
                <Link
                  to={`/chapter/${selectedChapter.id}`}
                  onClick={closeSynopsis}
                >
                  <Button
                    variant="primary"
                    fullWidth
                    className="py-5 font-cinzel tracking-widest uppercase"
                  >
                    Start Reading
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
