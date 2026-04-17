import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload, Image, LogOut, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#C5A059]/10 pb-8">
                <div>
                    <h1 className="text-4xl font-black text-[#FAF9F6] flex items-center gap-3 tracking-tight">
                        <LayoutDashboard className="h-10 w-10 text-[#C5A059]" />
                        Admin <span className="gold-text-gradient">Portal</span>
                    </h1>
                    <p className="text-stone/40 mt-2 font-medium tracking-widest uppercase text-[10px]">Command Center • RK Royal Interiors</p>
                </div>
                <button onClick={handleLogout} className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-xl text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] bg-[#C5A059] hover:bg-[#FAF9F6] transition-all duration-300">
                    <LogOut className="h-4 w-4 mr-2" /> End Session
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link to="/admin/gallery/manage" className="group block p-10 bg-[#2C2C2B] border border-[#C5A059]/10 rounded-3xl shadow-2xl hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Image className="h-40 w-40 text-[#C5A059] transform -rotate-12" />
                    </div>
                    <div className="flex flex-col relative z-10">
                        <div className="w-14 h-14 bg-[#1A1A1A] border border-[#C5A059]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#C5A059]/50 transition-all">
                            <Image className="h-6 w-6 text-[#C5A059]" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-[#FAF9F6] tracking-tight mb-3">Portfolio Manager</h2>
                            <p className="text-stone/50 text-sm leading-relaxed font-medium">Curate the public gallery by adding, editing, or removing your luxury design transformations.</p>
                        </div>
                        <div className="mt-8 flex items-center text-[#C5A059] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                            Manage Gallery →
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
};
export default Dashboard;
