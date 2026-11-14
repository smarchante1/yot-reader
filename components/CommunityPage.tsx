import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  Camera,
  Search,
  SlidersHorizontal,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Heart,
  X,
} from 'lucide-react';
import { FANART, GENERIC_FANART_PLACEHOLDER } from '../constants';
import { NewsPost, Fanart } from '../types';
import { Button } from './Button';
import { FanartGallery } from './FanartGallery';
import { usePosts } from '../usePosts';

type ActiveSection = 'news' | 'gallery';

export const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveSection>('news');
  const [newsFilter, setNewsFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { posts: NEWS_POSTS, loading: newsLoading } = usePosts();

  // News categories list
  const categories = ['All', 'News', 'Event', 'Community'];

  // Filter news posts
  const filteredNews = useMemo(
    () =>
      NEWS_POSTS.filter((post) => {
        const matchesCategory =
          newsFilter === 'All' || post.category === newsFilter;
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [NEWS_POSTS, newsFilter, searchQuery],
  );

  return (
    <div className="min-h-screen bg-[#F8FDFF] pb-24">
      {/* Community Portal Hero Header */}
      <div className="bg-gradient-to-b from-[#E1F6FA]/60 via-[#E1F6FA]/20 to-transparent pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-cinzel text-[#016F93] mb-6 uppercase tracking-tight"
          >
            YOT COMMUNITY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed font-sans"
          >
            The central hub for the latest news, fanart gallery and community
            events for Ye Olde Treehouse.
          </motion.p>
        </div>
      </div>

      {/* Tabs Selector Navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex border-b border-[#E1F6FA] justify-center gap-2 sm:gap-6">
          <button
            onClick={() => setActiveTab('news')}
            className={`
              flex items-center gap-3 px-6 py-4 font-cinzel text-xs uppercase tracking-[0.2em] font-black border-b-2 transition-all duration-300
              ${
                activeTab === 'news'
                  ? 'border-[#1192A3] text-[#016F93] bg-[#E1F6FA]/20'
                  : 'border-transparent text-slate-400 hover:text-[#016F93]'
              }
            `}
          >
            <Newspaper size={16} />
            News
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`
              flex items-center gap-3 px-6 py-4 font-cinzel text-xs uppercase tracking-[0.2em] font-black border-b-2 transition-all duration-300
              ${
                activeTab === 'gallery'
                  ? 'border-[#1192A3] text-[#016F93] bg-[#E1F6FA]/20'
                  : 'border-transparent text-slate-400 hover:text-[#016F93]'
              }
            `}
          >
            <Camera size={16} />
            Fanart Gallery
          </button>
        </div>
      </div>

      {/* Modular Content Display */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'news' ? (
            <motion.div
              key="news-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Filter and Search Bar for News */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-[#E1F6FA] shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setNewsFilter(cat)}
                      className={`
                        px-4 py-2 rounded-xl text-xs font-bold transition-all
                        ${
                          newsFilter === cat
                            ? 'bg-[#016F93] text-white shadow-md'
                            : 'bg-slate-50 text-slate-500 hover:bg-[#E1F6FA]/50 hover:text-[#016F93]'
                        }
                      `}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-72">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search announcements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1192A3]/15 focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of Articles */}
              {newsLoading ? (
                <div className="py-20 text-center bg-white border border-[#E1F6FA] rounded-3xl">
                  <Newspaper
                    size={40}
                    className="text-slate-300 mx-auto mb-4 animate-pulse"
                  />
                  <p className="text-slate-500 font-cinzel font-black uppercase tracking-wider text-sm">
                    Loading News...
                  </p>
                </div>
              ) : filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredNews.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-3xl overflow-hidden border border-[#E1F6FA] hover:border-[#1192A3]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                      {/* Post Thumbnail */}
                      <div className="h-52 overflow-hidden relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span
                          className={`
                          absolute top-4 left-4 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white shadow-sm
                          ${post.category === 'News' ? 'bg-[#1192A3]' : ''}
                          ${post.category === 'Community' ? 'bg-amber-500' : ''}
                          ${post.category === 'Event' ? 'bg-rose-500' : ''}
                          ${post.category === 'Promo' ? 'bg-purple-500' : ''}
                        `}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar size={13} /> {post.date}
                            </span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-xl font-bold font-cinzel text-[#016F93] mb-4 group-hover:text-[#1192A3] transition-colors leading-snug">
                            <Link
                              to={`/news/${post.id}`}
                              className="hover:underline"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6 font-light">
                            {post.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
                          <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                            <span className="w-6 h-6 rounded-full bg-[#E1F6FA] text-[#016F93] font-bold flex items-center justify-center text-[10px] uppercase">
                              {post.author.charAt(0)}
                            </span>
                            {post.author}
                          </span>

                          <Link
                            to={`/news/${post.id}`}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1192A3] hover:text-[#016F93] transition-colors group/link font-cinzel"
                          >
                            Read Article
                            <ArrowRight
                              size={14}
                              className="group-hover/link:translate-x-1.5 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-white border border-[#E1F6FA] rounded-3xl">
                  <Newspaper
                    size={40}
                    className="text-slate-300 mx-auto mb-4"
                  />
                  <p className="text-slate-500 font-cinzel font-black uppercase tracking-wider text-sm">
                    No announcements found
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    Try resetting your filter or searching for another term.
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="gallery-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Embedding custom FanartGallery with clean aesthetic wrapper */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E1F6FA] shadow-sm">
                <FanartGalleryWrapper />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* 
  An elegant sub-wrapper of the FanartGallery that embeds perfectly into the modular hub 
  with creator's social profiles in full view and nice icons.
*/
const FanartGalleryWrapper: React.FC = () => {
  const [submissions] = useState<Fanart[]>(FANART);
  const [selectedImage, setSelectedImage] = useState<Fanart | null>(null);

  // Disable body scrolling when gallery lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div>
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold font-cinzel text-[#016F93]">
          Community Gallery
        </h2>
        <p className="text-[#1192A3] text-xs font-bold uppercase tracking-widest mt-1">
          Independent art & fan creations of the YOT community!
        </p>
      </div>

      {/* Grid gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {submissions.map((art) => {
          return (
            <motion.div
              key={art.id}
              whileHover={{ y: -4 }}
              className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={() => setSelectedImage(art)}
            >
              <img
                src={art.imageUrl}
                alt={art.artist}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[102%]"
                loading="lazy"
              />

              {/* Creator Card Footer always visible/highly readable with elegant links */}
              <div className="p-4 bg-white border-t border-slate-50">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col min-w-0">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                      Artist
                    </span>
                    <span className="text-slate-700 font-medium text-xs truncate max-w-[150px]">
                      {art.artist}
                    </span>
                    {art.socialHandle && (
                      <span className="mt-1 text-[11px] font-semibold text-[#1192A3] truncate max-w-[150px]">
                        {art.socialHandle}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {art.artistUrl && (
                      <a
                        href={art.artistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 bg-[#E1F6FA] text-[#016F93] hover:bg-[#016F93] hover:text-white px-2.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all"
                        title={`Visit ${art.artist}'s socials`}
                      >
                        <span className="font-cinzel text-[9px] tracking-widest">
                          {art.socialHandle || 'Connect'}
                        </span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox for Selected Image */}
      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 overflow-y-auto py-12 px-4 flex flex-col items-center justify-start animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white z-[10000]">
              <X size={32} />
            </button>
            <div
              className="relative max-w-5xl w-full flex flex-col items-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.artist}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center bg-slate-900/60 p-6 rounded-2xl backdrop-blur-md border border-white/10 max-w-xl w-full animate-in fade-in zoom-in-95 duration-200">
                <p className="text-white/80 italic font-semibold mb-2">
                  by {selectedImage.artist}
                </p>
                {selectedImage.socialHandle && selectedImage.artistUrl ? (
                  <a
                    href={selectedImage.artistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                    {selectedImage.socialHandle}
                  </a>
                ) : selectedImage.socialHandle ? (
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                    {selectedImage.socialHandle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
