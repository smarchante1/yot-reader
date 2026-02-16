import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { CHAPTERS } from '../constants';
import { Button } from './Button';

export const Home: React.FC = () => {
  const latestChapter = CHAPTERS[CHAPTERS.length - 1];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Immersive Overlaid Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="assets/cover.JPG"
            alt="Ye Olde Treehouse Immersive Art"
            className="w-full h-full object-cover opacity-100 scale-100 animate-pulse-slow"
          />
          {/* Bare minimum overlay to support text contrast - very light */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 relative z-20">
          <div className="max-w-3xl animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[#E1F6FA] text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/20 shadow-xl">
              <Sparkles size={14} className="text-amber-400" />
              Original Fantasy Adventure Manga
            </div>
            <h1 className="text-6xl md:text-6xl font-black font-cinzel text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
              Ye Olde <br />
              <span className="text-[#E1F6FA]">Treehouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-2xl font-light drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              A epic fantasy adventure where magic runs wild and corruption runs
              deep.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/chapter/1">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-xl px-12 py-6 md:px-20 md:py-10 font-cinzel uppercase tracking-widest shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-white !text-[#016F93] hover:!bg-[#E1F6FA] transform hover:scale-105 transition-all"
                >
                  Start Reading
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release Ticker */}
      <section className="bg-white py-12 relative z-30">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to={`/chapter/${latestChapter.id}`}
            className="group relative flex flex-col md:flex-row items-center justify-between rounded-3xl p-8 lg:p-10 shadow-2xl transform -translate-y-16 border border-white/10 overflow-hidden min-h-[220px] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] block"
          >
            {/* Background Thumbnail */}
            <div className="absolute inset-0 z-0">
              <img
                src={
                  latestChapter.images[latestChapter.heroImagePage || 0] ||
                  latestChapter.thumbnail
                }
                alt={latestChapter.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: latestChapter.heroImagePosition || 'center',
                }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 ease-in-out"></div>
            </div>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#1192A3] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full shadow-inner border border-white/10">
                  <span className="w-2.5 h-2.5 bg-[#E1F6FA] rounded-full animate-led" />
                  Latest Update
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-white font-cinzel mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,1)] filter brightness-110">
                {latestChapter.title}
              </h2>
              <p className="text-[#E1F6FA] text-sm font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4 flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Click to read now{' '}
                <Sparkles size={14} className="animate-pulse text-amber-300" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Story So Far section - Full Width Immersive Banner */}
      <section className="w-full relative overflow-hidden flex items-center min-h-[600px] bg-[#E1F6FA]">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="assets/YOT-CH23_017.png"
            alt="Arc 1 Key Visual"
            className="w-full h-full object-cover grayscale-[40%] opacity-40 mix-blend-multiply"
          />
          {/* Light Blue Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E1F6FA] via-[#E1F6FA]/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#E1F6FA]/40 via-transparent to-transparent"></div>
        </div>

        {/* Content Container aligned with main grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-24">
          <div className="max-w-3xl flex flex-col gap-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#016F93] text-white text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-sm shadow-lg">
                  Arc 1
                </span>
                <div className="h-px w-16 bg-[#016F93]/20"></div>
                <h3 className="text-[#016F93] text-[11px] font-black uppercase tracking-[0.5em] font-cinzel opacity-70">
                  The Nosferi Dilemma
                </h3>
              </div>

              <h2 className="text-5xl md:text-8xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter leading-none drop-shadow-sm">
                Story <br className="md:hidden" /> So Far
              </h2>
            </div>

            {/* Accent Divider */}
            <div className="h-2 w-28 bg-[#1192A3] shadow-[0_0_15px_rgba(17,146,163,0.2)]"></div>

            {/* Synopsis Section */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                In a world where magic is strictly regulated and shadows hide
                ancient deities, a ragtag protection squad led by the impulsive
                Rou Akei finds themselves at the heart of a cosmic conspiracy.
                As the Nosferi circus brings illusions that mask dark truths,
                the roots of the Olde Treehouse begin to tremble with a power
                that could reshape Glory Peak forever.
              </p>

              <Link to="/chapters" className="inline-block">
                <button className="group flex items-center gap-4 text-[#016F93] font-black uppercase text-xs tracking-[0.3em] hover:text-[#1192A3] transition-all">
                  <span className="border-b-2 border-transparent group-hover:border-[#1192A3] pb-1 transition-all">
                    Read All Chapters
                  </span>
                  <div className="p-2 bg-[#016F93]/5 rounded-full group-hover:bg-[#1192A3] group-hover:text-white transition-all text-[#016F93]">
                    <Sparkles size={16} />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
