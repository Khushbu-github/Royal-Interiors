import React, { useState } from 'react';
import axios from '../../utils/axios';
import { Upload, X, Check, Image as ImageIcon, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const UploadGallery = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 5) {
            setMessage('You can only upload up to 5 images at a time.');
            return;
        }

        if (selectedFiles.length > 0) {
            setFiles(selectedFiles);
            const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
            setPreviews(newPreviews);
            setMessage('');
        }
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        const newPreviews = [...previews];

        newFiles.splice(index, 1);
        newPreviews.splice(index, 1);

        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (files.length === 0) return;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('images', file);
        });
        formData.append('title', title);

        setLoading(true);
        setMessage('');

        try {
            await axios.post('/gallery/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage('Upload successful!');
            setFiles([]);
            setTitle('');
            setPreviews([]);
            // Optional: navigate back or stay to upload more
            setTimeout(() => navigate('/admin/gallery/manage'), 1500);
        } catch (error) {
            setMessage('Upload failed. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
            <Link to="/admin/dashboard" className="inline-flex items-center text-stone/40 hover:text-[#C5A059] mb-10 transition-all duration-300 font-bold tracking-widest uppercase text-[10px]">
                <ChevronLeft className="h-4 w-4 mr-2" /> Back to Dashboard
            </Link>


            <div className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-10 border-b border-[#C5A059]/10 bg-[#1A1A1A]/50">
                    <h1 className="text-3xl font-black text-[#FAF9F6] flex items-center gap-3 tracking-tight uppercase">
                        <Upload className="h-8 w-8 text-[#C5A059]" />
                        Upload <span className="gold-text-gradient">Gallery</span> Images
                    </h1>
                    <p className="text-stone/40 text-[10px] font-black tracking-[0.3em] uppercase mt-3 italic">Optimize your visual storytelling • Max 5 images</p>
                </div>


                <div className="p-10">
                    {message && (
                        <div className={`p-5 rounded-2xl mb-8 flex items-center shadow-lg animate-in fade-in duration-300 ${message.includes('success') ? 'bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 font-black text-[10px] uppercase tracking-widest' : 'bg-red-400/10 text-red-400 border border-red-400/20 font-black text-[10px] uppercase tracking-widest'}`}>
                            {message.includes('success') ? <Check className="h-4 w-4 mr-3" /> : <X className="h-4 w-4 mr-3" />}
                            {message}
                        </div>
                    )}


                    <form onSubmit={handleUpload} className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-3">Project Title (Optional)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full px-5 py-4 border border-[#C5A059]/15 bg-[#1A1A1A] text-[#FAF9F6] rounded-xl focus:outline-none focus:border-[#C5A059]/60 sm:text-sm transition-all placeholder-stone/20"
                                placeholder="e.g., Luxury Penthouse Bedroom"
                            />
                        </div>


                        <div>
                            <label className="block text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-3">Selection Assets (Max 5)</label>
                            <div className="mt-1 flex justify-center px-10 pt-12 pb-12 border-2 border-[#C5A059]/10 border-dashed rounded-3xl hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer relative bg-[#1A1A1A] group shadow-inner" onClick={() => document.getElementById('file-upload').click()}>
                                <div className="space-y-4 text-center">
                                    <div className="mx-auto h-16 w-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-500">
                                        <ImageIcon className="h-8 w-8 text-[#C5A059]" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex text-xs text-stone/40 justify-center font-bold tracking-widest uppercase">
                                            <span className="relative cursor-pointer rounded-md text-[#FAF9F6] hover:text-[#C5A059] transition-colors">
                                                <span>Deploy Visuals</span>
                                            </span>
                                            <p className="pl-2">or drag and drop</p>
                                        </div>
                                        <p className="text-[9px] text-stone/30 font-black uppercase tracking-widest">Hi-Res Assets • PNG, JPG • Max 5MB</p>
                                    </div>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Previews */}
                        {previews.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-500">
                                {previews.map((preview, index) => (
                                    <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/10">
                                        <img src={preview} alt={`Preview ${index}`} className="h-40 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-transparent transition-colors" />
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow-xl transition-all hover:scale-110"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        )}


                        <div className="flex justify-end pt-8">
                            <button
                                type="submit"
                                disabled={files.length === 0 || loading}
                                className={`inline-flex items-center px-10 py-4 border border-transparent text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl text-[#1A1A1A] bg-[#C5A059] hover:bg-[#FAF9F6] transition-all duration-500 transform hover:-translate-y-1 ${loading || files.length === 0 ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                            >
                                <Upload className="h-3 w-3 mr-3" />
                                {loading ? 'Committing Visuals...' : `Publish ${files.length > 0 ? files.length : ''} Portfolio Asset${files.length !== 1 ? 's' : ''}`}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default UploadGallery;
