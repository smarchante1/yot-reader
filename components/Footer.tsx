import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MANGA_TITLE, SOCIAL_LINKS } from '../constants';
import { TwitterIcon, YoutubeIcon, InstagramIcon } from './icons/FooterIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020810] border-t border-[#016F93]/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-18 h-24 flex items-center justify-center md:justify-start">
              <img
                src="assets/logo.webp"
                alt="Logo Placeholder"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed text-base font-light">
              Impossible circumstances meet unbreakable bonds. 🌳✨
            </p>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col items-center">
            <h4 className="text-slate-500 font-cinzel text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              Follow YOT socials
            </h4>
            <div className="flex items-center gap-8">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#1DA1F2] transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#E4405F] transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#FF0000] transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Support the Creator Column */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[#E1F6FA] font-cinzel text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              Support the Creator
            </h4>
            <div className="space-y-4 flex flex-col items-center md:items-end">
              <a
                href={SOCIAL_LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#E03C3E] hover:bg-[#C03234] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(224,60,62,0.3)] transform hover:-translate-y-1"
              >
                <Heart size={18} className="fill-current" />
                <span>Become a Patron</span>
              </a>
              <p className="text-slate-500 text-xs tracking-wide">
                Get early access and BTS content!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom section */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} {MANGA_TITLE}. All rights
            reserved.
          </p>
          {/* <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-700 items-center">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
