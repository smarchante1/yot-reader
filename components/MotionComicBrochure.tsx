import React from 'react';
import {
  Play,
  Sparkles,
  Youtube,
  Volume2,
  PenTool,
  Film,
  ChevronRight,
  User,
  Video,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Button } from './Button';
import { VoiceActorCarousel } from './VoiceActorCarousel';

export const MotionComicBrochure: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF]">
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://assets.yeoldetreehouse.com/YOT-CHAP1_001.png"
            alt="YOT Volume 1"
            className="w-full h-full object-cover opacity-40 brightness-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-[#E1F6FA] text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-white/20">
            <Sparkles size={16} className="text-amber-400" />
            Under Development
          </div> */}

          <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white mb-6 leading-none tracking-tighter uppercase drop-shadow-2xl">
            THE YE OLDE <br />
            <span className="text-[#1192A3]">MOTION COMIC</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 font-light leading-relaxed">
            The first arc of Ye Olde Treehouse comes to life in an immersive
            motion comic experience. Professional Voice Acting, Original
            Soundtrack, Sound Design and Motion Effects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              variant="primary"
              className="py-6 px-12 text-sm uppercase font-cinzel tracking-widest bg-white !text-[#016F93] hover:!bg-[#E1F6FA]"
              icon={<Play fill="currentColor" size={20} />}
            >
              Preview Coming Soon
            </Button>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="py-6 px-12 text-sm uppercase font-cinzel tracking-widest !text-white !border-white hover:!bg-white hover:!text-black"
                icon={<Youtube size={20} />}
              >
                Subscribe to Channel
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Voice Actor Carousel Section - Moved up */}
      <VoiceActorCarousel />

      {/* The Crew Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#E1F6FA]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter mb-4">
            The <span className="text-[#1192A3]">Crew</span>
          </h2>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
            The super team behind the screen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Director */}
          <div className="bg-white p-8 rounded-[2rem] border border-[#E1F6FA] shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#E1F6FA] group-hover:border-[#1192A3] transition-colors shadow-lg">
              <img
                src="https://pub-c762db5339954ab98813a32e9aaa79ff.r2.dev/other/sam-profile.png"
                alt="Sam - Director"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-1">
              SAM
            </h3>
            <p className="text-[#1192A3] text-[10px] font-black uppercase tracking-[0.2em]">
              Director & Story/Art
            </p>
          </div>

          {/* Music */}
          <div className="bg-white p-8 rounded-[2rem] border border-[#E1F6FA] shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#E1F6FA] group-hover:border-[#1192A3] transition-colors shadow-lg">
              {/* Drew's photo temporarily commented out - placeholder below */}
              {/*
              <img
                src="https://assets.yeoldetreehouse.com/other/drew.JPG"
                alt="Drew - Music Director"
                className="w-full h-full object-cover"
              />
              */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-[#016F93] font-black uppercase">
                <span className="text-sm">Drew</span>
              </div>
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-1">
              Drew
            </h3>
            <p className="text-[#1192A3] text-[10px] font-black uppercase tracking-[0.2em]">
              Music Director
            </p>
          </div>

          {/* Sound Design */}
          <div className="bg-white p-8 rounded-[2rem] border border-[#E1F6FA] shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#E1F6FA] group-hover:border-[#1192A3] transition-colors shadow-lg">
              <img
                src="https://assets.yeoldetreehouse.com/other/pavle.jpg"
                alt="Pavle - Sound Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-1">
              Pavle
            </h3>
            <p className="text-[#1192A3] text-[10px] font-black uppercase tracking-[0.2em]">
              Lead Sound Designer
            </p>
          </div>

          {/* Video Editor */}
          <div className="bg-white p-8 rounded-[2rem] border border-[#E1F6FA] shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#E1F6FA] group-hover:border-[#1192A3] transition-colors shadow-lg">
              <img
                src="https://assets.yeoldetreehouse.com/other/Ethan.jpg"
                alt="Ethan - Lead Video Editor"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-1">
              Ethan
            </h3>
            <p className="text-[#1192A3] text-[10px] font-black uppercase tracking-[0.2em]">
              Lead Video Editor
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid - Moved down */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-[#016F93] font-cinzel text-center uppercase tracking-tighter mb-16">
          A Brand New <span className="text-[#1192A3]">Adventure</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 bg-white rounded-[3rem] border border-[#E1F6FA] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#E1F6FA] text-[#016F93] rounded-3xl flex items-center justify-center mb-8">
              <Volume2 size={32} />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-4">
              Original Soundtrack
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              A custom soundtrack composed by YOTs very own Music Director,{' '}
              <a
                href="https://www.instagram.com/shredberryguitar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#016F93] font-black uppercase tracking-widest text-xs border-b-2 border-[#1192A3]/20 hover:border-[#1192A3] transition-all"
              >
                Shredberry
              </a>
              . With signature horns, guitar solos and whimsical melodies, the
              score captures the YOTs chaotic magic.
            </p>
          </div>

          <div className="p-10 bg-white rounded-[3rem] border border-[#E1F6FA] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#E1F6FA] text-[#1192A3] rounded-3xl flex items-center justify-center mb-8">
              <PenTool size={32} />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-4">
              Remastered Artwork
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Every chapter in Volume 1 has been redrawn with added depth,
              detail and commitiment to professional Manga standards. Simply
              put, it'll look way better!
            </p>
          </div>

          <div className="p-10 bg-white rounded-[3rem] border border-[#E1F6FA] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#E1F6FA] text-[#016F93] rounded-3xl flex items-center justify-center mb-8">
              <Film size={32} />
            </div>
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-4">
              Immersive Experience
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              You won't need to know how to read manga to enjoy YOTs motion
              comic! It's a gripping adventure for both longtime fans and
              newcomers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Production Status */}
      <section className="py-32 bg-[#020810] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-[#1192A3] text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                Current Status
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white font-cinzel uppercase tracking-tighter mb-8 leading-none">
                PRODUCTION <br />{' '}
                <span className="text-[#1192A3]">PHASE 2</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                VA Recording is complete! We are now working on remastering all
                chapters from Volume 1, starting with Chapter 1. We are also
                starting motion editing, sound design and music composition.
              </p>

              <div className="flex flex-col gap-6 max-w-md">
                <div className="flex items-center justify-between text-white/60 text-xs font-black uppercase tracking-widest">
                  <span>Voice Recording</span>
                  <span className="text-[#1192A3]">100%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[100%] bg-[#1192A3]"></div>
                </div>

                <div className="flex items-center justify-between text-white/60 text-xs font-black uppercase tracking-widest">
                  <span>Remastering Chapters</span>
                  <span className="text-[#1192A3]">Chapter 1</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[3%] bg-[#1195%] bg-[#1192A3]"></div>
                </div>

                <div className="flex items-center justify-between text-white/60 text-xs font-black uppercase tracking-widest">
                  <span>Soundtrack Composition</span>
                  <span className="text-[#1192A3]">15%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-[#1192A3]"></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 aspect-square relative">
              <div className="absolute inset-0 bg-[#1192A3]/20 blur-[120px] rounded-full"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                src="https://assets.yeoldetreehouse.com/other/casting-call.mp4"
                className="relative z-10 w-full h-full object-cover rounded-[4rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter mb-8">
            Business Inquiries?
          </h2>
          <p className="text-slate-500 text-lg mb-12 font-light">
            To get in touch for partnerships, media or any other inquiries:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:fifimangaka@gmail.com"
              className="flex items-center gap-3 text-[#016F93] font-black uppercase tracking-widest text-xs border-b-2 border-[#1192A3]/20 hover:border-[#1192A3] pb-2 transition-all group"
            >
              Contact Sam{' '}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
