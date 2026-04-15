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
            <div className={`w-full transition-all duration-500 overflow-hidden ${scrolled ? 'bg-[#FAF9F6]/90 backdrop-blur-xl border border-[#C5A059]/30 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl max-w-6xl' : 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#C5A059]/10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] lg:max-w-full lg:rounded-none rounded-2xl max-w-7xl'} mx-auto`}>
                <div className="px-4 sm:px-10">
                    <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-500">


                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group/logo">
                               <img 
                                  src={Logo} 
                                  alt="RK Royal Interiors" 
                                  className="transition-all duration-500 h-16 md:h-20 w-auto group-hover/logo:scale-105" 
                                />
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-10">
                            {navs.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`${location.pathname === item.path ? 'text-[#C5A059]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'} transition-all duration-300 text-[10px] font-black uppercase tracking-[0.4em] relative group font-heading`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
                                </Link>


                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/admin/login" className="text-[#1A1A1A]/40 hover:text-[#C5A059] transition-colors p-2.5 hover:bg-[#C5A059]/10 rounded-full">
                                <User className="h-5 w-5" />
                            </Link>
                        </div>


                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#1A1A1A] hover:text-[#C5A059] focus:outline-none p-2 transition-colors"
                            >
                                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out border-t border-[#C5A059]/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pt-4 pb-10 space-y-2 bg-[#FAF9F6]">
                        {navs.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${location.pathname === item.path ? 'bg-[#C5A059]/10 text-[#C5A059]' : 'text-[#1A1A1A]/70 hover:text-[#C5A059] hover:bg-[#C5A059]/5'} block px-5 py-4 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300 opacity-0`}
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
                            className="block px-5 py-4 text-[10px] font-black tracking-[0.3em] uppercase text-[#1A1A1A]/40 hover:text-[#C5A059] hover:bg-[#C5A059]/5 rounded-2xl transition-all duration-300"
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
