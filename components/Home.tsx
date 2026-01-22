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
                  className="w-full sm:w-auto text-lg px-12 py-6 font-cinzel uppercase tracking-widest shadow-2xl bg-white !text-[#016F93] hover:!bg-[#E1F6FA] transform hover:scale-105 transition-all"
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
                src={latestChapter.thumbnail}
                alt={latestChapter.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
      <section className="w-full bg-[#E1F6FA]/40 border-y border-[#1192A3]/10 relative overflow-hidden flex flex-col md:flex-row items-stretch min-h-[600px]">
        {/* Left Column: Content Container */}
        <div className="flex-grow flex items-center justify-center md:justify-end py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#016F93] text-white text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-none whitespace-nowrap">
                  Arc 1
                </span>
                <div className="h-px w-16 bg-[#1192A3]/30"></div>
                <h3 className="text-[#1192A3] text-[11px] font-black uppercase tracking-[0.5em] font-cinzel">
                  Nosferi Dilemma
                </h3>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter leading-none">
                Story So Far
              </h2>
            </div>

            {/* Minimalist Divider */}
            <div className="h-2 w-28 bg-[#1192A3] rounded-none"></div>

            {/* Synopsis Section */}
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Modular Separation Line */}
        <div className="hidden md:block w-px bg-[#1192A3]/10 self-stretch"></div>

        {/* Right Column: Image strictly fills the container height, resized to give text more space */}
        <div className="w-full md:w-[350px] lg:w-[420px] shrink-0 relative animate-in slide-in-from-right duration-700">
          <img
            src="assets/YOT-CH23_017.png"
            alt="Arc 1 Key Visual"
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>
    </div>
  );
};
