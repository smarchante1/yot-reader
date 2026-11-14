import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  MessageCircle,
  ChevronLeft,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Button } from './Button';
import { usePosts } from '../usePosts';

export const NewsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts: NEWS_POSTS, loading: newsLoading } = usePosts();

  const post = useMemo(
    () => NEWS_POSTS.find((p) => p.id === id),
    [id, NEWS_POSTS],
  );

  // Find other recent posts excluding current
  const otherPosts = useMemo(() => {
    return NEWS_POSTS.filter((p) => p.id !== id).slice(0, 3);
  }, [id, NEWS_POSTS]);

  if (newsLoading) {
    return (
      <div className="min-h-screen bg-[#F8FDFF] flex items-center justify-center">
        <div className="text-center p-10">
          <BookOpen
            size={40}
            className="text-slate-300 mx-auto mb-4 animate-pulse"
          />
          <p className="text-slate-500 font-cinzel font-black uppercase tracking-wider text-sm">
            Loading News...
          </p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F8FDFF] flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md bg-white p-10 rounded-[2.5rem] border border-[#E1F6FA] shadow-xl">
          <BookOpen className="text-[#016F93] w-16 h-16 mx-auto mb-6 opacity-40 animate-pulse" />
          <h2 className="text-2xl font-black font-cinzel text-[#016F93] mb-4">
            Post Not Found.
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Yikes! Not sure what happened here! Rou?!.
          </p>
          <Link to="/community">
            <Button
              variant="primary"
              className="font-cinzel tracking-widest px-8"
            >
              Return to Community
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FDFF] pb-24 font-sans">
      {/* Top Floating Mini-Nav */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          to="/community"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1192A3] hover:text-[#016F93] hover:-translate-x-1 transition-all font-cinzel group"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to Community Hub
        </Link>
      </div>

      {/* Main Blog Article Container Layout */}
      <article className="max-w-4xl mx-auto px-6">
        {/* Article Header Card */}
        <div className="bg-white rounded-[2.5rem] border border-[#E1F6FA] overflow-hidden shadow-sm mb-12">
          {/* Cover image banner */}
          <div className="h-[25rem] w-full overflow-hidden relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Category badge overlay */}
            <span
              className={`
              absolute top-6 left-6 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider text-white shadow-md
              ${post.category === 'News' ? 'bg-[#1192A3]' : ''}
              ${post.category === 'Community' ? 'bg-amber-500' : ''}
              ${post.category === 'Event' ? 'bg-rose-500' : ''}
              ${post.category === 'Promo' ? 'bg-purple-500' : ''}
            `}
            >
              {post.category}
            </span>
          </div>

          {/* Banner Details Info */}
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-bold font-mono mb-6">
              <span className="flex items-center gap-1.5 bg-[#F8FDFF] px-3 py-1.5 rounded-xl border border-[#E1F6FA]">
                <Calendar size={13} className="text-[#1192A3]" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 bg-[#F8FDFF] px-3 py-1.5 rounded-xl border border-[#E1F6FA]">
                <Clock size={13} className="text-[#1192A3]" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 bg-[#F8FDFF] px-3 py-1.5 rounded-xl border border-[#E1F6FA]">
                <User size={13} className="text-[#1192A3]" /> Author:{' '}
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black font-cinzel text-[#016F93] mb-8 leading-tight uppercase tracking-tight">
              {post.title}
            </h1>

            {/* Rich Text Body Content with elegant line heights and clean layouts */}
            <div className="prose prose-slate max-w-none text-slate-600 leading-8 text-[15px] sm:text-base space-y-6 font-light border-t border-slate-100 pt-8">
              <post.content />
            </div>
          </div>
        </div>

        {/* Other Recent Log Announcements section */}
        <div className="border-t border-[#E1F6FA] pt-12 mt-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase tracking-wide">
              Recent News
            </h3>
            <Link
              to="/community"
              className="text-xs font-black uppercase tracking-widest text-[#1192A3] hover:text-[#016F93] transition-colors font-cinzel border-b border-transparent hover:border-[#016F93]"
            >
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((other, idx) => (
              <Link
                key={other.id}
                to={`/news/${other.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-[#E1F6FA] hover:border-[#1192A3]/30 shadow-sm hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col group p-4"
              >
                <div className="h-40 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={other.imageUrl}
                    alt={other.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest block mb-2">
                      {other.date}
                    </span>
                    <h4 className="text-sm font-bold font-cinzel text-[#016F93] group-hover:text-[#1192A3] transition-colors leading-snug line-clamp-2 uppercase">
                      {other.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-[#1192A3] uppercase mt-4 block font-cinzel group-hover:translate-x-1 transition-transform">
                    Read Post →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
