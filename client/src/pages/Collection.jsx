import React, { useState } from 'react';
import { FileText, Download, Search, ExternalLink } from 'lucide-react';
import collectionData from '../data/collectionData';

const categories = ['All', ...Array.from(new Set(collectionData.map((p) => p.category)))];

const categoryIcons = {
    'UV Panels': '💎',
    'Wall Panels': '🧱',
    'Fluted Panels': '🏛️',
    'Specialty Panels': '✨',
    'Specialty': '🌟',
    'PVC Panels': '🔷',
    'Ceilings': '🏠',
    'UV Stickers': '🎨',
    'WPC Panels': '🌿',
};

const Collection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = collectionData.filter((item) => {
        const matchCat = activeCategory === 'All' || item.category === activeCategory;
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    /**
     * Handles the download and viewing of PDF files from the public folder.
     * Ensure Git LFS is correctly configured on the hosting provider to serve the full files.
     */
    const handleDownload = (filename) => {
        const link = document.createElement('a');
        // PDFs served from public/uploadpdfs
        link.href = `/uploadpdfs/${encodeURIComponent(filename)}`;
        link.download = filename;
        link.target = '_blank';
        link.click();
    };

    return (
        <div className="min-h-screen bg-[#1A1A1A] pt-28 pb-20">

            {/* Hero */}
            <div className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent" />
                <div className="relative z-10 px-6">
                    <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Catalogues</span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#FAF9F6] tracking-[0.1em] mb-4 leading-tight uppercase">
                        Explore <span className="gold-text-gradient">Collection</span>
                    </h1>

                    <p className="text-stone/60 text-sm md:text-lg max-w-xl mx-auto">
                        Download our premium product catalogues — fluted panels, UV series, WPC, mosaics, ceilings and more.
                    </p>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {/* Search Bar */}
                <div className="relative max-w-lg mx-auto mb-8 md:mb-10 px-4" data-aos="fade-up">
                    <Search className="absolute left-8 md:left-4 top-1/2 -translate-y-1/2 text-[#C5A059]/40 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search collections..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-[#C5A059]/20 text-[#FAF9F6] placeholder-stone/30 rounded-full pl-12 pr-6 py-3.5 md:py-4 text-[10px] md:text-sm focus:outline-none focus:border-[#C5A059]/60 transition-colors shadow-inner"
                    />
                </div>



                {/* Category Filter */}
                <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12 px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500
                                ${activeCategory === cat
                                    ? 'bg-[#C5A059] text-[#1A1A1A] shadow-[0_10px_25px_rgba(197,160,89,0.3)]'
                                    : 'border border-[#C5A059]/20 text-stone/50 hover:border-[#C5A059]/60 hover:text-[#C5A059] bg-[#FAF9F6]/5'
                                }`}
                        >
                            {cat !== 'All' ? `${categoryIcons[cat] || '📄'} ` : ''}{cat}
                        </button>
                    ))}
                </div>



                {/* Count */}
                <p className="text-gray-600 text-xs tracking-widest uppercase mb-8 text-center">
                    Showing {filtered.length} of {collectionData.length} catalogues
                </p>

                {/* PDF Cards Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-20 px-4">
                        <p className="text-gray-500 text-lg">No catalogues match your search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-0">

                        {filtered.map((item, i) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={`${(i % 4) * 60}`}
                                className="group relative bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col"
                            >
                                {/* Top preview area */}
                                <div className="relative h-48 overflow-hidden bg-[#1A1A1A]">
                                    {item.preview ? (
                                        <img
                                            src={item.preview}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    {/* Fallback icon (hidden unless image fails) */}
                                    <div
                                        className="absolute inset-0 items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2B]"
                                        style={{ display: item.preview ? 'none' : 'flex' }}
                                    >
                                        <div className="text-center">
                                            <div className="w-16 h-20 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse">
                                                <FileText size={28} className="text-[#C5A059]" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dark gradient overlay on bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent pointer-events-none" />
                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md border border-[#C5A059]/30 px-3 py-1.5 rounded-full">
                                        <span className="text-[8px] text-[#C5A059] font-black tracking-[0.2em] uppercase">
                                            {categoryIcons[item.category] || '📄'} {item.category}
                                        </span>
                                    </div>
                                    {/* PDF label badge top-right */}
                                    <div className="absolute top-3 right-3 bg-[#C5A059] px-2.5 py-1 rounded-full shadow-lg">
                                        <span className="text-[8px] text-[#1A1A1A] font-black tracking-widest uppercase">PDF</span>
                                    </div>
                                </div>


                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-[#FAF9F6] font-black text-sm mb-2 group-hover:text-[#C5A059] transition-colors leading-snug uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-stone/40 text-xs leading-relaxed flex-1 mb-6 font-medium italic">
                                        {item.description}
                                    </p>

                                    <div className="flex gap-2">
                                        {/* View */}
                                        <a
                                            href={`/uploadpdfs/${encodeURIComponent(item.filename)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#C5A059]/20 text-[#C5A059] text-[9px] font-black tracking-widest uppercase rounded-full hover:border-[#C5A059]/60 transition-all duration-300"
                                        >
                                            <ExternalLink size={10} /> View
                                        </a>
                                        {/* Download */}
                                        <button
                                            onClick={() => handleDownload(item.filename)}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#C5A059] text-[#1A1A1A] text-[9px] font-black tracking-widest uppercase rounded-full hover:bg-[#FAF9F6] transition-all duration-300 shadow-lg"
                                        >
                                            <Download size={10} /> Get PDF
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collection;
