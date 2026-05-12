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
            <div className={`w-full transition-all duration-500 ${isOpen ? 'overflow-visible' : 'overflow-hidden'} ${scrolled ? 'max-w-6xl' : 'lg:max-w-full max-w-7xl'} mx-auto px-2 lg:px-4`}>
                <div className={`transition-all duration-500 px-4 sm:px-10 bg-[#F4F3F1]/95 backdrop-blur-md border-b border-[#9F7730]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] ${scrolled ? 'rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#9F7730]/20' : 'lg:rounded-none rounded-2xl'}`}>
                    <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-500">


                        <div className="flex items-center md:mr-8 lg:mr-12">
                            <Link to="/" className={`flex-shrink-0 flex items-center group/logo transition-all duration-500 hover:-translate-y-1 ${scrolled ? 'h-20 md:h-24' : 'h-28 md:h-32'}`}>
                               <img 
                                  src={Logo} 
                                  alt="RK Royal Interiors" 
                                  className={`transition-all duration-500 w-auto group-hover/logo:scale-105 ${scrolled ? 'h-20 md:h-24' : 'h-28 md:h-32'}`} 
                                />
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-10">
                            {navs.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`${
                                        location.pathname === item.path 
                                            ? 'text-[#9F7730]' 
                                            : 'text-[#061D37]/70 hover:text-[#061D37]'
                                    } transition-all duration-300 text-[11px] md:text-xs font-black uppercase tracking-[0.3em] relative group font-heading`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9F7730] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/admin/login" className="text-[#061D37]/30 hover:text-[#9F7730] transition-colors p-2.5 hover:bg-[#9F7730]/5 rounded-full">
                                <User className="h-5 w-5" />
                            </Link>
                        </div>


                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#061D37] hover:text-[#9F7730] focus:outline-none p-2 transition-colors"
                            >
                                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out border-x border-b border-[#9F7730]/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-b-2xl ${isOpen ? 'max-h-[85vh] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'} overflow-y-auto`}>
                    <div className="px-6 pt-16 pb-12 space-y-2 bg-[#F4F3F1]/95 backdrop-blur-xl">
                        {navs.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${location.pathname === item.path ? 'bg-[#9F7730]/10 text-[#9F7730]' : 'text-[#061D37]/70 hover:text-[#9F7730] hover:bg-[#9F7730]/5'} block px-5 py-4 rounded-2xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 opacity-0`}
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
                            className="block px-5 py-4 text-xs font-black tracking-[0.2em] uppercase text-[#061D37]/30 hover:text-[#9F7730] hover:bg-[#9F7730]/5 rounded-2xl transition-all duration-300"
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
