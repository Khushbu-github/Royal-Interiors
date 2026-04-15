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
                console.log('📡 Fetching gallery from:', axios.defaults.baseURL + '/gallery');
                const { data } = await axios.get('/gallery');
                setImages(data);
            } catch (error) {
                console.error('❌ Error fetching gallery:', {
                    message: error.message,
                    code: error.code,
                    response: error.response?.data,
                    status: error.response?.status,
                    configUrl: error.config?.url
                });
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="min-h-screen bg-[#1A1A1A] pt-28 pb-20">
            {/* Hero */}
            <div className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent" />
                <div className="relative z-10 px-6">
                    <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Work</span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#FAF9F6] tracking-[0.1em] mb-4 leading-tight uppercase">
                        Design <span className="gold-text-gradient">Gallery</span>
                    </h1>

                    <p className="text-stone/60 text-sm md:text-lg max-w-xl mx-auto">
                        Explore our portfolio of luxury interior transformations across Bangalore and beyond.
                    </p>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <Loader className="h-10 w-10 text-[#C5A059] animate-spin" />
                        <p className="text-stone/40 text-[10px] font-black tracking-[0.3em] uppercase">Refining Royal Portfolios...</p>
                    </div>

                ) : images.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed border-[#C5A059]/20 rounded-2xl bg-[#2C2C2B]/50">
                        <ImageIcon className="h-16 w-16 text-[#C5A059]/30 mb-6" />
                        <p className="text-stone/40 text-lg font-medium">No images showcased yet.</p>
                        <p className="text-stone/30 text-[10px] font-black tracking-[0.2em] uppercase mt-2">Beautiful spaces are in development</p>
                    </div>

                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {images.map((img, idx) => (
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
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                                    {img.title && (
                                        <p className="text-[#FAF9F6] text-sm font-black uppercase tracking-widest">{img.title}</p>
                                    )}
                                </div>
                                {/* Brass ring on hover */}
                                <div className="absolute inset-0 ring-1 ring-[#C5A059]/0 group-hover:ring-[#C5A059]/40 rounded-xl transition-all duration-500 shadow-xl" />
                                {/* Zoom icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 shadow-xl">
                                    <ZoomIn size={16} className="text-[#1A1A1A]" />
                                </div>
                            </div>

                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[999] bg-[#1A1A1A]/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C5A059] flex items-center justify-center hover:bg-[#FAF9F6] transition-all duration-300 shadow-2xl group z-50"
                        onClick={() => setLightbox(null)}
                    >
                        <X size={18} className="text-[#1A1A1A] group-hover:scale-110 transition-transform" />
                    </button>
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={lightbox.imageUrl}
                            alt={lightbox.title || 'Design'}
                            className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-[#C5A059]/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {lightbox.title && (
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#1A1A1A]/90 backdrop-blur-md border border-[#C5A059]/30 px-6 py-3 rounded-full shadow-2xl whitespace-nowrap">
                                <p className="text-[#FAF9F6] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">{lightbox.title}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>

    );
};

export default Gallery;
