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

    const handleDownload = (filename) => {
        const link = document.createElement('a');
        link.href = `/uploadpdfs/${encodeURIComponent(filename)}`;
        link.download = filename;
        link.target = '_blank';
        link.click();
    };

    return (
        <div className="min-h-screen bg-[#F4F3F1] pt-28 pb-20">
            {/* Hero */}
            <div className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#9F7730]/10 to-transparent" />
                <div className="relative z-10 px-6">
                    <span className="text-[#9F7730] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Catalogues</span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#061D37] tracking-[0.1em] mb-4 leading-tight uppercase">
                        Explore <span className="gold-text-gradient">Collection</span>
                    </h1>
                    <p className="text-[#061D37]/60 text-sm md:text-lg max-w-xl mx-auto font-medium">
                        Download our premium product catalogues — fluted panels, UV series, WPC, mosaics, ceilings and more.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {/* Search Bar */}
                <div className="relative max-w-lg mx-auto mb-8 md:mb-10 px-4" data-aos="fade-up">
                    <Search className="absolute left-8 md:left-4 top-1/2 -translate-y-1/2 text-[#9F7730]/40 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search collections..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border border-[#9F7730]/20 text-[#061D37] placeholder-[#061D37]/30 rounded-full pl-12 pr-6 py-3.5 md:py-4 text-[10px] md:text-sm focus:outline-none focus:border-[#9F7730]/60 transition-colors shadow-sm"
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
                                    ? 'bg-[#9F7730] text-[#F4F3F1] shadow-[0_10px_25px_rgba(159,119,48,0.3)]'
                                    : 'border border-[#9F7730]/20 text-[#061D37]/50 hover:border-[#9F7730]/60 hover:text-[#9F7730] bg-white'
                                }`}
                        >
                            {cat !== 'All' ? `${categoryIcons[cat] || '📄'} ` : ''}{cat}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <p className="text-[#5D6061] text-xs tracking-widest uppercase mb-8 text-center">
                    Showing {filtered.length} of {collectionData.length} catalogues
                </p>

                {/* PDF Cards Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-20 px-4">
                        <p className="text-[#A1A19C] text-lg">No catalogues match your search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-0">
                        {filtered.map((item, i) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={`${(i % 4) * 60}`}
                                className="group relative bg-white border border-[#9F7730]/10 rounded-2xl overflow-hidden hover:border-[#9F7730]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col"
                            >
                                {/* Top preview area */}
                                <div className="relative h-48 overflow-hidden bg-[#F4F3F1]">
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
                                    <div
                                        className="absolute inset-0 items-center justify-center bg-gradient-to-br from-[#F4F3F1] to-white"
                                        style={{ display: item.preview ? 'none' : 'flex' }}
                                    >
                                        <div className="text-center">
                                            <div className="w-16 h-20 bg-[#9F7730]/10 border border-[#9F7730]/30 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse">
                                                <FileText size={28} className="text-[#9F7730]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F1]/80 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-[#9F7730]/30 px-3 py-1.5 rounded-full">
                                        <span className="text-[8px] text-[#9F7730] font-black tracking-[0.2em] uppercase">
                                            {categoryIcons[item.category] || '📄'} {item.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-[#9F7730] px-2.5 py-1 rounded-full shadow-lg">
                                        <span className="text-[8px] text-[#F4F3F1] font-black tracking-widest uppercase">PDF</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-[#061D37] font-black text-sm mb-2 group-hover:text-[#9F7730] transition-colors leading-snug uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#061D37]/40 text-xs leading-relaxed flex-1 mb-6 font-medium italic">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-2">
                                        <a
                                            href={`/uploadpdfs/${encodeURIComponent(item.filename)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#9F7730]/20 text-[#9F7730] text-[9px] font-black tracking-widest uppercase rounded-full hover:border-[#9F7730]/60 transition-all duration-300"
                                        >
                                            <ExternalLink size={10} /> View
                                        </a>
                                        <button
                                            onClick={() => handleDownload(item.filename)}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#9F7730] text-[#F4F3F1] text-[9px] font-black tracking-widest uppercase rounded-full hover:bg-[#061D37] transition-all duration-300 shadow-lg"
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
