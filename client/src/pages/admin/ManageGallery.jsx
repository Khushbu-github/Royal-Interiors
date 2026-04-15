import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { Trash2, ChevronLeft, Loader, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const { data } = await axios.get('/gallery');
            setImages(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            try {
                await axios.delete(`/gallery/${id}`);
                setImages(images.filter(img => img._id !== id));
            } catch (error) {
                console.error(error);
                alert('Failed to delete image');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                <Link to="/admin/dashboard" className="inline-flex items-center text-stone/40 hover:text-[#C5A059] transition-all duration-300 font-bold tracking-widest uppercase text-[10px]">
                    <ChevronLeft className="h-4 w-4 mr-2" /> Back to Dashboard
                </Link>
                <Link to="/admin/gallery/upload" className="inline-flex items-center justify-center bg-[#C5A059] text-[#1A1A1A] px-8 py-3 rounded-full hover:bg-[#FAF9F6] transition-all duration-500 font-black text-[10px] uppercase tracking-[0.2em] shadow-xl">
                    <Plus className="h-4 w-4 mr-2" /> Add New Design
                </Link>
            </div>


            <div className="mb-12 border-l-4 border-[#C5A059] pl-6">
                <h1 className="text-4xl font-black text-[#FAF9F6] tracking-tight uppercase">Portfolio <span className="gold-text-gradient">Manager</span></h1>
                <p className="text-stone/40 mt-2 font-medium tracking-widest uppercase text-[10px]">Curation Hub • Gallery Control</p>
            </div>


            {loading ? (
                <div className="flex flex-col justify-center h-64 items-center gap-4">
                    <Loader className="h-10 w-10 text-[#C5A059] animate-spin" />
                    <p className="text-stone/40 text-[10px] font-black tracking-[0.3em] uppercase">Loading Archives...</p>
                </div>

            ) : images.length === 0 ? (
                <div className="text-center py-32 bg-[#2C2C2B]/50 rounded-3xl border-2 border-dashed border-[#C5A059]/10 shadow-inner">
                    <p className="text-stone/40 text-lg font-medium">Your portfolio is currently empty.</p>
                    <Link to="/admin/gallery/upload" className="text-[#C5A059] hover:text-[#FAF9F6] mt-4 inline-block font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#C5A059] pb-1 transition-all">Begin Customization</Link>
                </div>

            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {images.map((img) => (
                        <div key={img._id} className="group relative bg-[#2C2C2B] rounded-2xl shadow-xl border border-[#C5A059]/10 overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500">
                            <div className="aspect-w-16 aspect-h-12 bg-[#1A1A1A]">
                                <img src={img.imageUrl} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="p-5 flex justify-between items-center bg-[#2C2C2B] border-t border-[#C5A059]/10">
                                <p className="text-xs font-black text-[#FAF9F6] truncate flex-1 mr-4 uppercase tracking-tighter" title={img.title}>{img.title || 'Untitled Space'}</p>
                                <button
                                    onClick={() => handleDelete(img._id)}
                                    className="p-2.5 text-stone/40 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-300 shadow-sm"
                                    title="Delete Image"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};
export default ManageGallery;
