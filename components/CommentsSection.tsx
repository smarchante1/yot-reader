
import React, { useEffect } from 'react';

interface CommentsSectionProps {
  chapterId: number;
  chapterTitle: string;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({ chapterId, chapterTitle }) => {
  useEffect(() => {
    const renderCusdis = () => {
      if ((window as any).CUSDIS && typeof (window as any).CUSDIS.initial === 'function') {
        (window as any).CUSDIS.initial();
      }
    };

    const SCRIPT_ID = 'cusdis-js-sdk';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://cusdis.com/js/cusdis.es.js';
      script.async = true;
      script.defer = true;
      script.onload = renderCusdis;
      document.body.appendChild(script);
    } else {
      // Re-initialize for SPA navigation
      setTimeout(renderCusdis, 200);
    }
  }, [chapterId]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-20 px-4 relative z-0">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 overflow-hidden">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-black font-cinzel text-[#016F93] uppercase tracking-[0.2em]">
            Chapter Discussion
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Join the conversation for Chapter {chapterId}
          </p>
        </div>

        {/* 
          Standard container for the widget. 
          We use simple styling to prevent interaction bugs.
        */}
        <div 
          id="cusdis_thread"
          data-host="https://cusdis.com"
          data-app-id="76f80905-f932-45e0-8208-5f2129783f94" 
          data-page-id={`ch-${chapterId}`}
          data-page-url={`${window.location.origin}/#/chapter/${chapterId}`}
          data-page-title={chapterTitle}
          className="min-h-[300px] w-full pointer-events-auto"
        ></div>

        <div className="mt-10 pt-6 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Show some love, have a chat!
          </p>
        </div>
      </div>
    </div>
  );
};
