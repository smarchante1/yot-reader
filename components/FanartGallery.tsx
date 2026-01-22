import React, { useState } from 'react';
import { Camera, Send, Heart, ExternalLink, X, Plus, Upload, CheckCircle2 } from 'lucide-react';
import { FANART } from '../constants';
import { Fanart } from '../types';
import { Button } from './Button';

export const FanartGallery: React.FC = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedImage, setSelectedImage] = useState<Fanart | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setTimeout(() => {
      setSubmissionStatus('success');
      setTimeout(() => {
        setIsSubmitModalOpen(false);
        setSubmissionStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FDFF] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E1F6FA] text-[#016F93] text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6 border border-[#1192A3]/20">
            <Camera size={14} />
            Community Collection
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-cinzel text-[#016F93] mb-6 tracking-tighter uppercase">
            Fanart Gallery
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
            A celebration of the incredible art inspired by the roots of Ye Olde Treehouse.
          </p>
          <Button 
            variant="primary" 
            onClick={() => setIsSubmitModalOpen(true)}
            className="font-cinzel tracking-widest py-4 px-10 shadow-xl"
            icon={<Plus size={20} />}
          >
            Submit Your Art
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {FANART.map((art) => (
            <div 
              key={art.id} 
              className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              onClick={() => setSelectedImage(art)}
            >
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-cinzel font-bold text-lg">{art.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-300 text-sm italic">by {art.artist}</span>
                  <div className="flex gap-3">
                    <Heart size={18} className="text-white/50 hover:text-red-500 transition-colors" />
                    {art.artistUrl && (
                      <a href={art.artistUrl} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsSubmitModalOpen(false)} 
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-10">
              {submissionStatus === 'success' ? (
                <div className="text-center py-12 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold font-cinzel text-[#016F93] mb-2">Submission Received!</h3>
                  <p className="text-slate-500">Your artwork is being reviewed by the roots. Thank you for contributing!</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-black font-cinzel text-[#016F93] mb-2 uppercase">Submit Fanart</h2>
                  <p className="text-slate-500 mb-8">Share your vision of Ye Olde Treehouse with the community.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">Artist Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="How should we credit you?" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1192A3]/20 focus:border-[#1192A3] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">Artwork Title</label>
                      <input 
                        required
                        type="text" 
                        placeholder="What's this piece called?" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1192A3]/20 focus:border-[#1192A3] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">Image Link or File</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-slate-400" />
                            <p className="mb-2 text-sm text-slate-500">Click to upload or drag and drop</p>
                          </div>
                          <input type="file" className="hidden" accept="image/*" />
                        </label>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth 
                      disabled={submissionStatus === 'submitting'}
                      className="py-4 font-cinzel tracking-widest"
                    >
                      {submissionStatus === 'submitting' ? 'Submitting...' : 'Send to the Treehouse'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white">
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-screen p-2" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <h2 className="text-2xl font-black font-cinzel">{selectedImage.title}</h2>
              <p className="text-white/60 italic">by {selectedImage.artist}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};