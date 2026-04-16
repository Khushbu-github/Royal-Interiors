import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navs = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Explore Collection', path: '/collection' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className={`fixed z-50 flex justify-center w-full transition-all duration-500 ${scrolled ? 'lg:top-2 px-4' : 'lg:top-0 px-0'} top-2 px-2`}>
            <div className={`w-full transition-all duration-500 ${isOpen ? 'overflow-visible' : 'overflow-hidden'} ${scrolled ? 'bg-[#1A1A1A]/90 backdrop-blur-xl border border-[#C5A059]/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-2xl max-w-6xl' : 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#C5A059]/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] lg:max-w-full lg:rounded-none rounded-2xl max-w-7xl'} mx-auto`}>
                <div className="px-4 sm:px-10">
                    <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-500">


                        <div className="flex items-center -ml-4 md:-ml-10">
                            <Link to="/" className="flex-shrink-0 flex items-center group/logo relative bg-[#C5A059] px-3 py-3 md:px-10 md:py-8 rounded-b-3xl shadow-[0_10px_30px_rgba(197,160,89,0.3)]">
                               <img 
                                  src={Logo} 
                                  alt="RK Royal Interiors" 
                                  className="transition-all duration-500 h-14 md:h-36 w-auto group-hover/logo:scale-110 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" 
                                />
                                <div className="absolute inset-0 border-b-2 border-x-2 border-black/5 rounded-b-3xl pointer-events-none" />
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-10">
                            {navs.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`${location.pathname === item.path ? 'text-[#C5A059]' : 'text-[#FAF9F6]/70 hover:text-[#FAF9F6]'} transition-all duration-300 text-[11px] md:text-xs font-black uppercase tracking-[0.3em] relative group font-heading`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
                                </Link>


                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/admin/login" className="text-[#FAF9F6]/40 hover:text-[#C5A059] transition-colors p-2.5 hover:bg-[#C5A059]/10 rounded-full">
                                <User className="h-5 w-5" />
                            </Link>
                        </div>


                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#FAF9F6] hover:text-[#C5A059] focus:outline-none p-2 transition-colors"
                            >
                                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out border-t border-[#C5A059]/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'} overflow-y-auto`}>
                    <div className="px-6 pt-44 pb-12 space-y-2 bg-[#1A1A1A]">
                        {navs.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${location.pathname === item.path ? 'bg-[#C5A059]/10 text-[#C5A059]' : 'text-[#FAF9F6]/70 hover:text-[#C5A059] hover:bg-[#C5A059]/5'} block px-5 py-4 rounded-2xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 opacity-0`}
                                style={isOpen ? {
                                    animationName: 'fadeInUp',
                                    animationDuration: '0.6s',
                                    animationTimingFunction: 'ease-out',
                                    animationFillMode: 'forwards',
                                    animationDelay: `${index * 0.08}s`
                                } : {}}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/admin/login"
                            className="block px-5 py-4 text-xs font-black tracking-[0.2em] uppercase text-[#FAF9F6]/40 hover:text-[#C5A059] hover:bg-[#C5A059]/5 rounded-2xl transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Admin Access
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
