import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Info,
  Sparkles,
  Bell,
  Clock,
  X,
  Youtube,
  Star,
} from 'lucide-react';
import { EPISODES, SOCIAL_LINKS, COLORS } from '../constants';

export const VideoEpisodes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInlinePlaying, setIsInlinePlaying] = useState(false);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const featuredEpisode = EPISODES[0];

  if (!featuredEpisode) return null;

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="bg-white py-24 w-full overflow-hidden border-y border-[#E1F6FA] relative">
      {/* Background Decorative Pattern - Ultra Subtle for White BG */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#016F93 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px',
        }}
      ></div>

      {/* Section Header - Centered */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 text-[#016F93] mb-4">
            <div className="h-px w-8 bg-current opacity-30"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.5em] font-cinzel">
              Motion Comic Series
            </span>
            <div className="h-px w-8 bg-current opacity-30"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter leading-none">
            Trailer 1
          </h2>
        </div>
      </div>

      {/* Featured Card Wrapper */}
      <div className="flex justify-center px-6 relative z-10">
        <div className="w-full max-w-[1000px] group relative">
          {/* Main Cinematic Card with Enhanced Drop Shadow */}
          <div
            onClick={toggleModal}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.25)] bg-black group-hover:border-[#1192A3]/40 transition-all duration-700 cursor-pointer"
          >
            <video
              ref={inlineVideoRef}
              src="/assets/Trailer.mov"
              poster="/assets/Trailer-thumbnail.jpg"
              controls
              preload="none"
              playsInline
              onClick={(event) => event.stopPropagation()}
              onPlay={() => setIsInlinePlaying(true)}
              onEnded={() => setIsInlinePlaying(false)}
              className="absolute inset-0 w-full h-full object-cover"
              aria-label={featuredEpisode.title}
            />

            {!isInlinePlaying && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  void inlineVideoRef.current?.play();
                }}
                aria-label={`Play ${featuredEpisode.title}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 md:w-32 md:h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1192A3]/30 group-hover:border-[#1192A3]/50"
              >
                <Play
                  size={48}
                  className="text-white fill-current ml-2 transition-transform duration-500"
                />
              </button>
            )}

          </div>

          {/* Static Content Below the Video Card (Always Visible) */}
          <div className="mt-12 max-w-3xl mx-auto text-center md:text-left">
            {/* Status / Metadata */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="bg-[#1192A3] text-white text-[10px] font-black px-4 py-1.5 rounded-sm shadow-xl">
                EPISODE {featuredEpisode.id}
              </span>
              {featuredEpisode.duration && (
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold font-mono">
                  <Clock size={14} />
                  {featuredEpisode.duration}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-6xl font-black text-[#016F93] font-cinzel mb-6 leading-[0.9] tracking-tighter uppercase">
              {featuredEpisode.title}
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-light mb-10 line-clamp-2">
              {featuredEpisode.description}
            </p>

            {/* Action Controls */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
              {featuredEpisode.comingSoon ? (
                <a
                  href={SOCIAL_LINKS.youtubeSubscribe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#016F93] text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-[#1192A3] hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Bell size={18} /> Notify Me
                </a>
              ) : (
                <button
                  onClick={toggleModal}
                  className="flex items-center gap-3 bg-[#016F93] text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-[#1192A3] hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Play size={18} fill="currentColor" /> Watch Now
                </button>
              )}

              <Link
                to="/motion-comic"
                className="flex items-center gap-3 p-5 bg-white text-[#016F93] border border-[#E1F6FA] rounded-2xl hover:bg-[#F8FDFF] transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <div className="bg-[#E1F6FA] p-1.5 rounded-lg">
                  <Info size={18} />
                </div>
                <span className="hidden sm:inline text-xs font-black uppercase tracking-widest">
                  About Project
                </span>
              </Link>
            </div>
          </div>

          {/* Section Glow - Softened for White BG */}
          <div className="absolute -inset-10 bg-[#1192A3] blur-[140px] opacity-[0.05] -z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Info Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-[2.5rem] max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-6 right-6 p-3 bg-slate-100 text-slate-400 hover:text-slate-900 rounded-full transition-all z-50"
            >
              <X size={24} />
            </button>

            <div className="relative aspect-video bg-black">
              <video
                src="/assets/Trailer.mov"
                poster="/assets/Trailer-thumbnail.jpg"
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                preload="metadata"
                aria-label={featuredEpisode.title}
              />
            </div>

            <div className="p-10">
              <h4 className="text-3xl font-black font-cinzel text-[#016F93] uppercase mb-8">
                {featuredEpisode.title}
              </h4>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-[#016F93]">
                    {featuredEpisode.duration || 'TBA'}
                  </span>
                </div>
                <div className="h-8 w-px bg-slate-100"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Status
                  </span>
                  <span className="text-sm font-bold text-[#1192A3] uppercase tracking-tighter">
                    In PRODUCTION
                  </span>
                </div>
                <div className="h-8 w-px bg-slate-100"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Format
                  </span>
                  <span className="text-sm font-bold text-[#016F93]">
                    Motion Comic
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#016F93] mb-3">
                    Episode Summary
                  </h5>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {featuredEpisode.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <p className="text-slate-400 text-xs italic">
                    Created by SAM. Featuring original original OST, SFX, motion
                    and professional voice talent.
                  </p>
                </div>

                <a
                  href={SOCIAL_LINKS.youtubeSubscribe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs shadow-xl hover:bg-red-700 transition-all hover:-translate-y-1"
                >
                  <Youtube size={20} fill="currentColor" />
                  Subscribe to the Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
};
