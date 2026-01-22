import React from 'react';
import { Book, User, Award, Mail, Users, Globe } from 'lucide-react';
import { MANGA_TITLE } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FDFF] py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black font-cinzel text-[#016F93] mb-6 tracking-tighter uppercase">
            About the Series
          </h1>
          <div className="h-1 w-24 bg-[#1192A3] mx-auto rounded-full"></div>
        </div>

        <section className="space-y-16">
          {/* Story Overview */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-[#1192A3]">
                <Book size={24} />
                <h2 className="text-xl font-black font-cinzel uppercase tracking-widest">
                  The Story
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                <strong>{MANGA_TITLE}</strong> is a fantasy adventure manga.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://picsum.photos/seed/about_story/600/800"
                alt="Story Concept Art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* The Creator */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center pt-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-[#1192A3]">
                <User size={24} />
                <h2 className="text-xl font-black font-cinzel uppercase tracking-widest">
                  The Creator
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                The series is written and illustrated by SAM, a former engineer
                turned mangaka who decided one day in 2024 that making manga was
                the best way to get this story out of their head. dedicated to
                high-quality storytelling and immersive visual world-building.
                With a background in traditional illustration and a passion for
                character-driven drama, the goal of {MANGA_TITLE} is to provide
                a unique reading experience that blends classic fantasy tropes
                with modern storytelling techniques.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-slate-200 rounded-full overflow-hidden shadow-xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/about_creator/800/800"
                alt="Creator Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Milestones / Future */}
          <div className="bg-[#E1F6FA] p-10 md:p-16 rounded-3xl shadow-inner border border-[#1192A3]/10">
            <div className="flex items-center gap-3 mb-8 text-[#016F93]">
              <Award size={24} />
              <h2 className="text-xl font-black font-cinzel uppercase tracking-widest">
                Milestones
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#1192A3]">
                  <Users size={18} />
                  <h3 className="font-bold text-[#016F93] font-cinzel">
                    Growing Community
                  </h3>
                </div>
                <p className="text-slate-500 text-sm">
                  700+ active readers visiting the site daily, engaging with the
                  world of {MANGA_TITLE}.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#1192A3]">
                  <Globe size={18} />
                  <h3 className="font-bold text-[#016F93] font-cinzel">
                    Global Reach
                  </h3>
                </div>
                <p className="text-slate-500 text-sm">
                  80,000+ reads across global platforms including GlobalComix,
                  Kodansha's DAYSNEO, and Pixiv.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#E1F6FA] mt-8">
            <div className="flex items-center gap-3 mb-4 text-[#1192A3]">
              <Book size={24} />
              <h3 className="font-bold text-[#016F93] font-cinzel uppercase tracking-widest">
                Complete Archive
              </h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              All 28 chapters are now available for free to read online,
              representing a complete story arc with hundreds of pages of
              original art.
            </p>
          </div>

          {/* Contact / Inquiries */}
          <div className="text-center pt-10">
            <div className="inline-flex items-center gap-3 mb-4 text-[#1192A3]">
              <Mail size={20} />
              <h2 className="text-sm font-black font-cinzel uppercase tracking-[0.3em]">
                Business Inquiries
              </h2>
            </div>
            <p className="text-slate-500 mb-8">
              For collaboration, licensing, or press inquiries, please reach out
              via email.
            </p>
            <a
              href="mailto:fifimangaka@gmail.com"
              className="text-[#016F93] font-black font-cinzel text-xl border-b-2 border-[#1192A3]/20 hover:border-[#1192A3] transition-all"
            >
              fifimangaka@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
