import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Camera, ExternalLink, X, Plus, Upload } from 'lucide-react';
import { FANART } from '../constants';
import { Fanart } from '../types';
import { Button } from './Button';

export const FanartGallery: React.FC = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Fanart | null>(null);

  // Disable body scrolling when modal or gallery lightbox is open
  useEffect(() => {
    if (selectedImage || isSubmitModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage, isSubmitModalOpen]);

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
            A celebration of the incredible art inspired by the roots of Ye Olde
            Treehouse.
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
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-300 text-sm italic">
                    by {art.artist}
                  </span>
                  <div className="flex gap-3">
                    {art.artistUrl && (
                      <a
                        href={art.artistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-white"
                      >
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
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              <>
                <h2 className="text-3xl font-black font-cinzel text-[#016F93] mb-2 uppercase">
                  Submit Fanart
                </h2>
                <p className="text-slate-500 mb-8">
                  Share your vision of Ye Olde Treehouse with the community.
                </p>

                <form
                  name="fanart-submission"
                  method="POST"
                  action="/thank-you.html"
                  data-netlify="true"
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="fanart-submission"
                  />
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">
                      Artist Name
                    </label>
                    <input
                      name="artist-name"
                      required
                      type="text"
                      placeholder="How should we credit you?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1192A3]/20 focus:border-[#1192A3] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">
                      Artwork Title
                    </label>
                    <input
                      name="artwork-title"
                      required
                      type="text"
                      placeholder="What's this piece called?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1192A3]/20 focus:border-[#1192A3] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">
                      Image URL (Optional)
                    </label>
                    <input
                      name="image-url"
                      type="url"
                      placeholder="Paste a link to your artwork"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1192A3]/20 focus:border-[#1192A3] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-cinzel">
                      Or Upload File
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-slate-400" />
                          <p className="mb-2 text-sm text-slate-500">
                            Click to upload or drag and drop
                          </p>
                        </div>
                        <input
                          name="artwork-file"
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    className="py-4 font-cinzel tracking-widest"
                  >
                    Submit Artwork
                  </Button>
                </form>
              </>
            </div>
          </div>
        </div>
      )}

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
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center text-white bg-slate-900/60 p-6 rounded-2xl backdrop-blur-md border border-white/10 max-w-xl w-full animate-in fade-in zoom-in-95 duration-200">
                <p className="text-white/80 italic font-semibold">
                  by {selectedImage.artist}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
