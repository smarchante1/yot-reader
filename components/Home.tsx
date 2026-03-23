import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { CHAPTERS } from '../constants';
import { Button } from './Button';
import { VideoEpisodes } from './VideoEpisodes';

export const Home: React.FC = () => {
  const latestChapter = CHAPTERS[CHAPTERS.length - 1];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Immersive Overlaid Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/cover.JPG"
            alt="Ye Olde Treehouse Immersive Art"
            className="w-full h-full object-cover opacity-100"
            // Omit loading="lazy" here so this hero image loads instantly
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 relative z-20">
          <div className="max-w-3xl animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[#E1F6FA] text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/20 shadow-xl">
              <Sparkles size={14} className="text-amber-400" />
              Original Fantasy Adventure Manga
            </div>
            <h1 className="text-6xl md:text-9xl font-black font-cinzel text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              Ye Olde <br />
              <span className="text-[#E1F6FA]">Treehouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-2xl font-light drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
              An epic fantasy adventure where magic runs wild and corruption
              runs deep.
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

      {/* Refined Latest Release Section - Magazine Style */}
      <section className="bg-white py-12 lg:py-20 relative z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-[#F8FDFF] border border-[#E1F6FA] rounded-[2rem] p-4 pr-12 group hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Thumbnail Box */}
            <div className="w-full md:w-[320px] lg:w-[420px] shrink-0 aspect-[16/10] rounded-2xl overflow-hidden relative shadow-lg">
              <img
                src={latestChapter.thumbnail}
                alt={latestChapter.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-[#016F93] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                  CH {latestChapter.id}
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="flex-1 py-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-2.5 bg-[#1192A3] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-[#1192A3]/20">
                  <span className="w-2 h-2 bg-white rounded-full animate-led" />
                  Latest Chapter
                </span>
                <span className="hidden md:block w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <Calendar size={12} />
                  {latestChapter.dateReleased}
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-black text-[#016F93] font-cinzel mb-4 uppercase tracking-tight leading-none">
                {latestChapter.title}
              </h2>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl line-clamp-2">
                {latestChapter.synopsis}
              </p>

              <Link to={`/chapter/${latestChapter.id}`}>
                <button className="flex items-center gap-4 text-[#1192A3] font-black uppercase text-xs tracking-[0.2em] group/btn">
                  <span>Read it Now</span>
                  <div className="w-10 h-10 rounded-full bg-[#1192A3]/10 flex items-center justify-center transition-all group-hover/btn:bg-[#1192A3] group-hover/btn:text-white">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Episodes Section */}
      <VideoEpisodes />

      {/* Story So Far section - Full Width Immersive Light Blue Banner */}
      <section className="w-full relative overflow-hidden flex items-center min-h-[600px] bg-[#E1F6FA]">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="assets/YOT-CH23_017.png"
            alt="Arc 1 Key Visual"
            className="w-full h-full object-cover grayscale-[40%] opacity-40 mix-blend-multiply"
            loading="lazy"
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
                In a world where magic flows through powerful flora in the form
                of "Augurs" a ragtag protection squad led by the impulsive Rou
                Akei finds themselves at the heart of a government conspiracy.
                What started as a chase for a rougue Ringmaster grows into a
                search for truth and a test of trust.
              </p>

              <Link to="/chapters" className="inline-block">
                <button className="group flex items-center gap-4 text-[#016F93] font-black uppercase text-xs tracking-[0.3em] hover:text-[#1192A3] transition-all">
                  <span className="border-b-2 border-transparent group-hover:border-[#1192A3] pb-1 transition-all">
                    Explore the Series
                  </span>
                  {/* <div className="p-2 bg-[#016F93]/5 rounded-full group-hover:bg-[#1192A3] group-hover:text-white transition-all text-[#016F93]">
                    <Sparkles size={16} />
                  </div> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
