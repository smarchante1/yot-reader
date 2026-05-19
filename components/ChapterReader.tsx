import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  List,
  ZoomIn,
  ZoomOut,
  Square,
  Columns,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { CHAPTERS } from '../constants';
import { Button } from './Button';
import { EmojiReactionSection } from './EmojiReactionSection';

type ReadingMode = 'vertical' | 'paged';

const ReaderPage: React.FC<{
  url: string;
  pageNum: number;
  isPaged?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}> = ({ url, pageNum, isPaged, onNext, onPrev, isFirst, isLast }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleZoom = () => setIsZoomed(!isZoomed);

  // Auto-detect double-page spreads based on filename underscores
  const fileName = url.split('/').pop() || '';
  const isSpread = (fileName.match(/_/g) || []).length >= 2;
  const sizingClasses = isSpread ? 'w-full max-w-7xl' : 'w-full max-w-[900px]';

  if (isPaged) {
    return (
      <div className="relative w-full min-h-[80vh] flex items-center justify-center group/reader overflow-hidden py-4 sm:py-8">
        <div className="absolute inset-0 flex z-10">
          <div
            onClick={onNext}
            className={`flex-[3] flex items-center justify-start pl-8 sm:pl-12 cursor-pointer group/nav ${isLast ? 'pointer-events-none' : ''}`}
          >
            {!isLast && (
              <div className="opacity-0 group-hover/nav:opacity-100 bg-black/60 p-4 sm:p-6 rounded-full text-white backdrop-blur-xl transition-all transform group-hover/nav:-translate-x-4 shadow-2xl">
                <ChevronLeft size={48} />
              </div>
            )}
          </div>
          <div
            onClick={onPrev}
            className={`flex-1 flex items-center justify-end pr-8 sm:pr-12 cursor-pointer group/nav ${isFirst ? 'pointer-events-none' : ''}`}
          >
            {!isFirst && (
              <div className="opacity-0 group-hover/nav:opacity-100 bg-black/60 p-3 sm:p-4 rounded-full text-white backdrop-blur-xl transition-all transform group-hover/nav:translate-x-4 shadow-2xl">
                <ChevronRight size={24} />
              </div>
            )}
          </div>
        </div>

        <div
          className={`${sizingClasses} relative z-0 flex items-center justify-center bg-white shadow-[0_0_60px_rgba(0,0,0,0.1)]`}
        >
          <img
            src={url}
            alt={`Page ${pageNum}`}
            className="w-full h-auto object-contain block"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative group transition-all duration-300 ease-in-out cursor-zoom-in my-4 shadow-xl bg-white min-h-[50vh] sm:min-h-[80vh] flex items-center justify-center ${isZoomed ? 'w-full max-w-none' : sizingClasses}`}
      onClick={toggleZoom}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 font-black text-[10px] uppercase tracking-widest animate-pulse z-0 rounded-sm">
        Loading Page {pageNum}
      </div>
      <img
        src={url}
        alt={`Page ${pageNum}`}
        className={`block w-full h-auto relative z-10 bg-white ${isZoomed ? 'cursor-zoom-out' : ''}`}
        loading="lazy"
      />
      <div className="absolute z-20 top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/50 p-2 rounded-full text-white">
        {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
      </div>
    </div>
  );
};

export const ChapterReader: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const chapterId = parseInt(id || '1', 10);

  const chapter = useMemo(
    () => CHAPTERS.find((c) => c.id === chapterId),
    [chapterId],
  );
  const nextChapter = CHAPTERS.find((c) => c.id === chapterId + 1);
  const prevChapter = CHAPTERS.find((c) => c.id === chapterId - 1);

  const [isVisible, setIsVisible] = useState(true);
  const [readingMode, setReadingMode] = useState<ReadingMode>('vertical');
  const [currentPage, setCurrentPage] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage(0);
  }, [chapterId]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) setIsVisible(true);
      else if (currentScrollY > lastScrollY.current) setIsVisible(false);
      else setIsVisible(true);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextPage = () => {
    if (chapter && currentPage < chapter.images.length - 1) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  if (!chapter)
    return (
      <div className="p-20 text-center text-[#016F93] font-cinzel">
        Chapter not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FDFF] pb-20 relative transition-colors duration-500">
      {/* Reader Toolbar - Fixed hiding logic to move past top-16 offset */}
      <div
        className={`fixed top-16 w-full bg-white shadow-sm z-40 border-b border-[#E1F6FA] pt-4 pb-2 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'}`}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/chapters"
              className="p-2 text-[#016F93] hover:bg-[#E1F6FA] rounded-lg transition-colors"
            >
              <List size={20} />
            </Link>
            <h1 className="text-sm font-black text-[#016F93] font-cinzel uppercase tracking-wider truncate max-w-[200px] sm:max-w-none">
              {chapter.title}
            </h1>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setReadingMode('vertical')}
              className={`p-1.5 rounded transition-all ${readingMode === 'vertical' ? 'bg-white text-[#1192A3] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              title="Vertical Scroll"
            >
              <Square size={18} />
            </button>
            <button
              onClick={() => setReadingMode('paged')}
              className={`p-1.5 rounded transition-all ${readingMode === 'paged' ? 'bg-white text-[#1192A3] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              title="Paged Mode"
            >
              <Columns size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Jump Controls (Vertical Mode Only) */}
      {readingMode === 'vertical' && (
        <div className="fixed bottom-10 right-6 sm:right-10 flex flex-col gap-3 z-50 animate-in slide-in-from-right duration-500">
          <button
            onClick={scrollToTop}
            className="p-3 bg-white text-[#016F93] rounded-full shadow-lg border border-[#E1F6FA] hover:bg-[#1192A3] hover:text-white transition-all transform hover:-translate-y-1 active:scale-90"
            aria-label="Jump to Top"
          >
            <ArrowUp size={24} />
          </button>
          <button
            onClick={scrollToBottom}
            className="p-3 bg-white text-[#016F93] rounded-full shadow-lg border border-[#E1F6FA] hover:bg-[#1192A3] hover:text-white transition-all transform hover:translate-y-1 active:scale-90"
            aria-label="Jump to Bottom"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      )}

      {/* Content Area */}
      <div className="pt-24 max-w-full overflow-x-hidden flex flex-col items-center">
        {readingMode === 'vertical' ? (
          <div className="flex flex-col items-center w-full px-4">
            {chapter.images.map((url, index) => (
              <ReaderPage key={index} url={url} pageNum={index + 1} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center">
            <ReaderPage
              url={chapter.images[currentPage]}
              pageNum={currentPage + 1}
              isPaged
              onNext={handleNextPage}
              onPrev={handlePrevPage}
              isFirst={currentPage === 0}
              isLast={currentPage === chapter.images.length - 1}
            />
            {/* Paged Navigation Bar */}
            <div
              className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full border border-[#E1F6FA] z-50 shadow-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-[200%]'}`}
            >
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="text-[#016F93] disabled:opacity-30 hover:text-[#1192A3] transition-colors"
              >
                <ChevronLeft />
              </button>
              <span className="text-[#016F93] font-black text-sm tracking-widest tabular-nums">
                {currentPage + 1} / {chapter.images.length}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === chapter.images.length - 1}
                className="text-[#016F93] disabled:opacity-30 hover:text-[#1192A3] transition-colors"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* End of Chapter Section */}
      <div className="max-w-4xl mx-auto px-6 mt-20 space-y-20">
        <div className="relative p-10 md:p-14 bg-white border border-[#E1F6FA] rounded-[2rem] shadow-2xl overflow-hidden group">
          {/* Subtle decoration */}
          <div className="absolute -right-6 -bottom-6 text-[#E1F6FA] opacity-30 transform -rotate-12 transition-transform duration-1000 group-hover:rotate-0">
            <BookOpen size={160} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#1192A3]"></span>
                <p className="text-[#1192A3] text-[11px] font-black uppercase tracking-[0.4em]">
                  Chapter End
                </p>
              </div>
              <h4 className="text-[#016F93] font-cinzel text-3xl md:text-4xl font-black uppercase leading-tight">
                Finished Reading
                <br />
                <span className="text-[#1192A3]">{chapter.title}</span>
              </h4>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
              {nextChapter && (
                <Link to={`/chapter/${nextChapter.id}`} className="w-full">
                  <button className="w-full bg-[#1192A3] text-white py-5 px-8 rounded-2xl font-cinzel font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#1192A3]/20 hover:bg-[#0E7A88] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                    Next Chapter <ArrowRight size={20} />
                  </button>
                </Link>
              )}
              {prevChapter && (
                <Link to={`/chapter/${prevChapter.id}`} className="w-full">
                  <button className="w-full bg-white border-2 border-[#016F93] text-[#016F93] py-4 px-8 rounded-2xl font-cinzel font-black text-xs uppercase tracking-[0.2em] hover:bg-[#F8FDFF] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <ChevronLeft size={16} /> Previous Chapter
                  </button>
                </Link>
              )}
              {!nextChapter && (
                <Link to="/chapters" className="w-full">
                  <button className="w-full bg-[#016F93] text-white py-4 px-8 rounded-2xl font-cinzel font-black text-xs uppercase tracking-[0.2em] hover:bg-[#015A75] transition-all">
                    Return to Chapters
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* <EmojiReactionSection chapterId={chapterId} /> */}
      </div>
    </div>
  );
};
