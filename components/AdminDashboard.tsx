import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Lock,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  BookOpen,
  Check,
  Copy,
  ChevronLeft,
  Image as ImageIcon,
  Zap,
  AlertCircle,
  Edit3,
  ArrowLeft,
  Monitor,
  FileText,
  Settings,
  Globe,
  Eye,
  ExternalLink,
  Link2,
  Info,
  RefreshCw,
  Download,
} from 'lucide-react';
import {
  CHAPTERS,
  CHARACTERS,
  FANART,
  saveToCMS,
  resetCMS,
  R2_BASE_URL,
} from '../constants';
import { Button } from './Button';
import { Chapter, Character } from '../types';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'chapters' | 'cast'>('chapters');

  // Data State
  const [chapters, setChapters] = useState<Chapter[]>([...CHAPTERS]);
  const [characters, setCharacters] = useState<Character[]>([...CHARACTERS]);

  // UI State
  const [editingChapterId, setEditingChapterId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [chapterCopied, setChapterCopied] = useState(false);
  const [syncStatus, setSyncStatus] = useState<
    'idle' | 'testing' | 'success' | 'error'
  >('idle');

  // Per-Chapter Sync Settings (to handle inconsistent naming)
  const [pageCount, setPageCount] = useState(20);
  const [filenamePattern, setFilenamePattern] = useState(
    'YOT-CH{ch}_{p3}.webp',
  );

  const ADMIN_PASSWORD = '0411';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) setIsAuthenticated(true);
    else alert('Invalid Access Code');
  };

  const saveWork = () => {
    saveToCMS({ chapters, characters, fanart: FANART });
    alert("Draft saved to browser memory! Use 'Export' to get the final code.");
  };

  const copyDataForProduction = () => {
    const data = { chapters, characters, fanart: FANART };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyIndividualChapter = (chapter: Chapter) => {
    navigator.clipboard.writeText(JSON.stringify(chapter, null, 2));
    setChapterCopied(true);
    setTimeout(() => setChapterCopied(false), 2000);
  };

  const updateChapterFields = useCallback(
    (id: number, fields: Partial<Chapter>) => {
      setChapters((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...fields } : c)),
      );
    },
    [],
  );

  const currentChapter = useMemo(
    () => chapters.find((c) => c.id === editingChapterId),
    [chapters, editingChapterId],
  );

  // Load chapter defaults into local editor state
  useEffect(() => {
    if (currentChapter) {
      setPageCount(currentChapter.pageCount || 20);
      // Logic for naming convention defaults
      if (currentChapter.id === 1) {
        setFilenamePattern('YOT-CHAP1_{p3}.webp');
      } else {
        setFilenamePattern('YOT-CH{ch}_{p3}.webp');
      }
    }
  }, [editingChapterId]);

  const runSync = (chId: number) => {
    setSyncStatus('testing');
    const base = R2_BASE_URL.endsWith('/') ? R2_BASE_URL : `${R2_BASE_URL}/`;

    // Generate page list based on user-defined pattern for THIS chapter
    // PRESERVING FOLDER LOGIC: Chapter 1 = root, Chapter 2+ = subfolders
    const generated = Array.from({ length: pageCount }, (_, i) => {
      const pageNum = i + 1;
      const fileName = filenamePattern
        .replace('{ch}', chId.toString())
        .replace('{p}', pageNum.toString())
        .replace('{p3}', pageNum.toString().padStart(3, '0'));

      const folderPrefix = chId > 1 ? `chapter${chId}/` : '';
      return `${base}${folderPrefix}${fileName}`;
    });

    updateChapterFields(chId, {
      images: generated,
      pageCount: generated.length,
      thumbnail: generated[0],
    });

    setTimeout(() => setSyncStatus('success'), 500);
    setTimeout(() => setSyncStatus('idle'), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020810] flex items-center justify-center p-6">
        <div className="bg-white p-10 max-w-md w-full shadow-2xl border border-[#1192A3]/20 text-center">
          <div className="w-20 h-20 bg-[#1192A3]/10 text-[#1192A3] flex items-center justify-center mx-auto mb-6">
            <Lock size={40} />
          </div>
          <h2 className="text-2xl font-black font-cinzel text-[#016F93] uppercase mb-8">
            Studio Gate
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Code"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 text-center font-black text-2xl tracking-[0.5em] outline-none focus:border-[#1192A3]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="primary"
              fullWidth
              type="submit"
              className="py-4 font-cinzel tracking-widest"
            >
              Unlock
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // --- CHAPTER EDITOR VIEW ---
  if (editingChapterId !== null && currentChapter) {
    return (
      <div className="min-h-screen bg-[#F0F7F9] flex flex-col pt-20">
        <header className="bg-white border-b border-slate-200 h-20 px-8 flex items-center justify-between fixed top-20 left-0 right-0 z-40">
          <button
            onClick={() => setEditingChapterId(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-[#016F93] font-bold text-xs uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={18} /> Exit Editor
          </button>
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-black text-slate-800 font-cinzel uppercase">
              Editing Chapter {currentChapter.id}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => copyIndividualChapter(currentChapter)}
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm"
            >
              {chapterCopied ? (
                <Check size={14} className="text-green-600" />
              ) : (
                <Copy size={14} />
              )}
              {chapterCopied ? 'JSON Copied' : 'Export Chapter to Constants'}
            </button>
            <Button
              onClick={saveWork}
              variant="secondary"
              className="!py-2 !px-6 text-xs uppercase"
            >
              Save Draft
            </Button>
          </div>
        </header>

        <div className="flex-grow flex flex-col lg:flex-row mt-20 overflow-hidden">
          <aside className="w-full lg:w-[400px] bg-white border-r border-slate-200 p-8 overflow-y-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[#1192A3]">
                <Settings size={20} />
                <h3 className="text-xs font-black uppercase tracking-widest">
                  Metadata
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Title
                  </label>
                  <input
                    className="w-full bg-slate-50 border border-slate-100 p-3 text-sm font-bold outline-none focus:ring-1 focus:ring-[#1192A3]"
                    value={currentChapter.title}
                    onChange={(e) =>
                      updateChapterFields(currentChapter.id, {
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Synopsis
                  </label>
                  <textarea
                    className="w-full bg-slate-50 border border-slate-100 p-3 text-sm h-32 resize-none outline-none focus:ring-1 focus:ring-[#1192A3]"
                    value={currentChapter.synopsis}
                    onChange={(e) =>
                      updateChapterFields(currentChapter.id, {
                        synopsis: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* VISUAL PREVIEW RESTORED */}
              <div className="pt-6 border-t border-slate-100">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">
                  Thumbnail Preview
                </label>
                <div className="aspect-video bg-slate-100 rounded overflow-hidden border border-slate-200 shadow-inner group relative">
                  <img
                    src={currentChapter.thumbnail}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.currentTarget.src =
                        'https://placehold.co/400x225?text=Invalid+Thumb')
                    }
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
                <p className="text-[9px] text-slate-400 uppercase text-center mt-2 tracking-widest">
                  Visual confirmation (First Page)
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-grow p-8 lg:p-12 bg-slate-50 overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-12">
              <section className="bg-white p-8 border border-[#1192A3]/20 shadow-xl rounded-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1192A3] flex items-center justify-center text-white rounded-lg shadow-lg">
                    <Zap size={20} fill="white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800 font-cinzel uppercase tracking-widest">
                      Custom Filename Sync
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Handle inconsistent naming for this chapter
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* R2 ROOT URL VISIBLE DISPLAY */}
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                      R2 Root URL (Source)
                    </label>
                    <div className="relative group">
                      <input
                        readOnly
                        className="w-full bg-slate-100 border border-slate-200 p-3 text-[10px] font-mono text-slate-500 cursor-not-allowed group-hover:bg-slate-50 transition-colors"
                        value={R2_BASE_URL}
                      />
                      <Globe
                        size={14}
                        className="absolute right-3 top-3.5 text-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                      Pattern Override
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 p-3 text-xs font-mono outline-none focus:border-[#1192A3]"
                      value={filenamePattern}
                      placeholder="e.g. Manga_Ch{ch}_p{p3}.webp"
                      onChange={(e) => setFilenamePattern(e.target.value)}
                    />
                    <div className="mt-2 flex gap-3 text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                      <span>{'{ch}'}=ID</span>
                      <span>{'{p}'}=1,2</span>
                      <span>{'{p3}'}=001,002</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                      Page Count
                    </label>
                    <input
                      type="number"
                      className="w-full bg-slate-50 border border-slate-200 p-3 text-sm font-bold text-[#1192A3] outline-none focus:border-[#1192A3]"
                      value={pageCount}
                      onChange={(e) =>
                        setPageCount(parseInt(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={() => runSync(currentChapter.id)}
                  className="w-full bg-[#1192A3] text-white py-4 font-black uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-[#0E7A88] flex items-center justify-center gap-2 transition-all rounded-lg active:scale-95"
                >
                  {syncStatus === 'testing' ? (
                    <RefreshCw size={14} className="animate-spin" />
                  ) : (
                    <Zap size={14} />
                  )}
                  Generate URLs for this chapter
                </button>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-black font-cinzel text-slate-800 uppercase">
                  Page List ({currentChapter.images.length})
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentChapter.images.length === 0 ? (
                    <div className="bg-slate-100 border border-dashed border-slate-300 p-10 rounded-xl text-center">
                      <p className="text-slate-400 text-sm italic">
                        No pages generated yet. Use the sync engine above.
                      </p>
                    </div>
                  ) : (
                    currentChapter.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 border border-slate-200 flex items-center gap-4 group hover:border-[#1192A3]/30 transition-colors"
                      >
                        <span className="text-[10px] font-black text-slate-300 w-6">
                          #{idx + 1}
                        </span>
                        <input
                          className="flex-grow text-[10px] font-mono text-slate-500 bg-transparent border-none p-1 focus:ring-0"
                          value={img}
                          onChange={(e) => {
                            const next = [...currentChapter.images];
                            next[idx] = e.target.value;
                            updateChapterFields(currentChapter.id, {
                              images: next,
                            });
                          }}
                        />
                        <button
                          onClick={() => {
                            const next = currentChapter.images.filter(
                              (_, i) => i !== idx,
                            );
                            updateChapterFields(currentChapter.id, {
                              images: next,
                              pageCount: next.length,
                            });
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 text-slate-300 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // --- LIBRARY VIEW ---
  return (
    <div className="min-h-screen bg-[#F8FDFF] flex flex-col md:flex-row relative pt-20">
      <aside className="w-full md:w-[320px] bg-[#020810] text-white flex flex-col md:h-[calc(100vh-80px)] md:fixed md:top-20 z-30 overflow-y-auto border-r border-white/5 shadow-2xl">
        <div className="p-10 border-b border-white/5">
          <h2 className="text-3xl font-black font-cinzel text-[#E1F6FA] uppercase tracking-tighter">
            Portal
          </h2>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">
            Workspace Dashboard
          </p>
        </div>

        <nav className="p-6 space-y-2 flex-grow">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`w-full text-left p-4 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 transition-all ${activeTab === 'chapters' ? 'bg-[#1192A3] text-white' : 'text-slate-500 hover:text-white'}`}
          >
            <BookOpen size={16} /> Chapters
          </button>
          <button
            onClick={() => setActiveTab('cast')}
            className={`w-full text-left p-4 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 transition-all ${activeTab === 'cast' ? 'bg-[#1192A3] text-white' : 'text-slate-500 hover:text-white'}`}
          >
            <ImageIcon size={16} /> Cast
          </button>
        </nav>

        <div className="p-6 space-y-3 bg-black/40">
          <Button
            variant="secondary"
            fullWidth
            onClick={saveWork}
            className="!py-4 text-[10px] uppercase tracking-widest"
          >
            Quick Save
          </Button>
          <button
            onClick={copyDataForProduction}
            className="w-full flex items-center justify-center gap-2 py-4 bg-white text-[#020810] font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all shadow-lg active:scale-95"
          >
            {copied ? (
              <Check size={16} className="text-green-600" />
            ) : (
              <Copy size={16} />
            )}
            Export Full Project
          </button>
          <button
            onClick={resetCMS}
            className="w-full text-[9px] text-slate-600 hover:text-red-400 mt-2 text-center transition-colors"
          >
            Reset Session Data
          </button>
        </div>
      </aside>

      <main className="flex-grow p-10 md:p-16 md:ml-[320px]">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-5xl font-black text-[#016F93] font-cinzel uppercase tracking-tighter leading-none">
              Manga Archive
            </h1>
            <p className="text-slate-500 mt-4 font-medium uppercase text-[10px] tracking-widest">
              Managing {chapters.length} Total Modules
            </p>
          </div>
          <Button
            onClick={() => {
              const newId = chapters.length + 1;
              const newCh: Chapter = {
                id: newId,
                title: `Chapter ${newId}`,
                synopsis: 'New chapter draft...',
                thumbnail: '',
                images: [],
                pageCount: 20,
                dateReleased: new Date().toLocaleDateString(),
              };
              setChapters([newCh, ...chapters]);
              setEditingChapterId(newId);
            }}
            icon={<Plus size={20} />}
            className="!py-4 px-8 uppercase text-xs tracking-widest"
          >
            Add Chapter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className="bg-white border border-slate-200 p-6 hover:shadow-2xl transition-all group border-b-4 border-b-[#E1F6FA]"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden mb-6 relative border border-slate-100 rounded-sm">
                {/* PREVIEW IMAGE IN GRID RESTORED */}
                <img
                  src={ch.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) =>
                    (e.currentTarget.src =
                      'https://placehold.co/400x225?text=Awaiting+Visuals')
                  }
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-black text-[#016F93] uppercase shadow-md border border-[#1192A3]/10">
                  CH {ch.id}
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-800 font-cinzel uppercase mb-4 truncate">
                {ch.title}
              </h3>
              <button
                onClick={() => setEditingChapterId(ch.id)}
                className="w-full bg-[#F8FDFF] border border-[#1192A3]/10 py-3 text-[9px] font-black uppercase text-[#016F93] hover:bg-[#1192A3] hover:text-white transition-all tracking-widest"
              >
                Open Editor
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
