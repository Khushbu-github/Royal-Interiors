import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Loader, Image as ImageIcon, ZoomIn, X } from 'lucide-react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data } = await axios.get('/gallery');
                setImages(data);
            } catch (error) {
                console.error('Error fetching gallery:', error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="min-h-screen bg-[#F4F3F1] pt-28 pb-20">
            <div className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#9F7730]/10 to-transparent" />
                <div className="relative z-10 px-6">
                    <span className="text-[#9F7730] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Work</span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#061D37] tracking-[0.1em] mb-4 leading-tight uppercase">
                        Design <span className="gold-text-gradient">Gallery</span>
                    </h1>
                    <p className="text-[#061D37]/60 text-sm md:text-lg max-w-xl mx-auto font-medium">
                        Explore our portfolio of luxury interior transformations across Bangalore and beyond.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <Loader className="h-10 w-10 text-[#9F7730] animate-spin" />
                        <p className="text-[#061D37]/40 text-[10px] font-black tracking-[0.3em] uppercase">Refining Royal Portfolios...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed border-[#9F7730]/20 rounded-2xl bg-white/50">
                        <ImageIcon className="h-16 w-16 text-[#9F7730]/30 mb-6" />
                        <p className="text-[#061D37]/40 text-lg font-medium">No images showcased yet.</p>
                        <p className="text-[#061D37]/30 text-[10px] font-black tracking-[0.2em] uppercase mt-2">Beautiful spaces are in development</p>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {images.map((img) => (
                            <div
                                key={img._id}
                                data-aos="fade-up"
                                className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => setLightbox(img)}
                            >
                                <img
                                    src={img.imageUrl}
                                    alt={img.title || 'Interior Design'}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#061D37]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                                    {img.title && <p className="text-[#F4F3F1] text-sm font-black uppercase tracking-widest">{img.title}</p>}
                                </div>
                                <div className="absolute inset-0 ring-1 ring-[#9F7730]/0 group-hover:ring-[#9F7730]/40 rounded-xl transition-all duration-500" />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#9F7730] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 shadow-xl">
                                    <ZoomIn size={16} className="text-[#F4F3F1]" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-[999] bg-[#F4F3F1]/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#9F7730] flex items-center justify-center hover:bg-[#061D37] transition-all duration-300 shadow-xl group z-50"
                        onClick={() => setLightbox(null)}
                    >
                        <X size={18} className="text-[#F4F3F1] group-hover:scale-110 transition-transform" />
                    </button>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={lightbox.imageUrl}
                            alt={lightbox.title || 'Design'}
                            className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-[#9F7730]/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {lightbox.title && (
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-[#9F7730]/30 px-6 py-3 rounded-full shadow-xl whitespace-nowrap">
                                <p className="text-[#061D37] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">{lightbox.title}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
