import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Leaf } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Chapter 1', path: '/chapter/1' },
    { label: 'Chapters', path: '/chapters' },
    { label: 'Cast', path: '/characters' },
    { label: 'Motion Comic', path: '/motion-comic' },
    { label: 'About', path: '/about' },
  ];

  const getLinkClasses = (path: string) => {
    const active = location.pathname === path;
    return `
      group relative transition-all duration-300 py-1 text-xs uppercase tracking-[0.2em] flex items-center
      ${
        active
          ? 'text-[#006E91] font-bold'
          : 'text-[#016F93] font-normal hover:text-[#006E91] hover:font-bold'
      }
    `;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E1F6FA] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="h-16 flex items-center">
              <img
                src="assets/logo.webp"
                alt="Logo Placeholder"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML =
                    '<span class="text-xl font-black text-[#016F93]">TREEHOUSE</span>';
                }}
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={getLinkClasses(link.path)}
                >
                  {/* Unique Leaf Indicator */}
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 transition-all duration-500 transform ${active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-50 group-hover:opacity-60 group-hover:translate-y-0 group-hover:scale-75'}`}
                  >
                    <Leaf size={12} className="text-[#006E91] fill-current" />
                  </div>
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-4">
              <a
                href="https://patreon.com/fifimangaka"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E03C3E] text-white px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#C03234] transition-all flex items-center gap-2 shadow-sm"
              >
                <Heart size={14} className="fill-current" />
                Support
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#016F93] p-2 hover:bg-[#E1F6FA] rounded-xl transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E1F6FA] absolute w-full shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-10 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-8 py-5 transition-all uppercase tracking-widest text-base ${
                  location.pathname === link.path
                    ? 'text-[#006E91] font-bold bg-[#F8FDFF]'
                    : 'text-[#016F93] font-normal hover:bg-slate-50 hover:text-[#006E91]'
                }`}
              >
                {location.pathname === link.path && (
                  <Leaf size={16} className="text-[#006E91] fill-current" />
                )}
                {link.label}
              </Link>
            ))}
            <div className="px-6 mt-6">
              <a
                href={SOCIAL_LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#006E91] text-white px-4 py-5 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl"
              >
                Support on Patreon
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
