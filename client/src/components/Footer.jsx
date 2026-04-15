import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, MessageCircle, Facebook } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#FAF9F6]/60 border-t border-[#C5A059]/10">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src={Logo} alt="RK Royal Interiors" className="h-14 md:h-12 w-auto transition-transform group-hover:scale-110" />
                            <div className="flex flex-col">
                                <span className="font-bold text-xl md:text-2xl text-[#FAF9F6] tracking-widest uppercase">
                                    RK Royal <span className="text-[#C5A059]">Interiors</span>
                                </span>
                                <span className="text-[8px] tracking-[0.4em] uppercase text-[#FAF9F6]/30 font-bold -mt-1 group-hover:text-[#C5A059]/50 transition-colors">Crafting Royalty</span>
                            </div>
                        </Link>
                        <p className="text-xs md:text-sm leading-relaxed text-[#FAF9F6]/50 max-w-sm">
                            Transforming spaces into royal living. We specialize in premium residential and commercial interior design solutions that define elegance and sophistication since 2015.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/rk_royal_interiors" target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/40 hover:text-[#C5A059] transition-all duration-300 p-2.5 bg-white/5 hover:bg-[#C5A059]/10 rounded-full border border-white/5 hover:border-[#C5A059]/20">
                                <Instagram size={18} />
                            </a>
                            <a href="https://wa.me/917090222227" target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/40 hover:text-[#C5A059] transition-all duration-300 p-2.5 bg-white/5 hover:bg-[#C5A059]/10 rounded-full border border-white/5 hover:border-[#C5A059]/20">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#FAF9F6] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-xs md:text-sm border-l-4 border-[#C5A059] pl-4">Explore</h3>
                        <ul className="space-y-4 text-[11px] md:text-sm font-medium text-center md:text-left">
                            <li><Link to="/" className="hover:text-[#C5A059] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[#C5A059] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">About Us</Link></li>
                            <li><Link to="/collection" className="hover:text-[#C5A059] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Collections</Link></li>
                            <li><Link to="/gallery" className="hover:text-[#C5A059] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-[#C5A059] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Contact Us</Link></li>
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#FAF9F6] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-xs md:text-sm border-l-4 border-[#C5A059] pl-4">Connect</h3>
                        <ul className="space-y-5 text-[11px] md:text-sm font-medium">
                            <li className="flex items-start gap-4">
                                <MapPin size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                                <span className="opacity-70 text-center md:text-left">Mahanthalingapura, Jigani Link Road, Bangalore</span>
                            </li>
                            <li className="flex flex-col gap-3 items-center md:items-start">
                                <div className="flex items-center gap-4">
                                    <Phone size={18} className="text-[#C5A059] shrink-0" />
                                    <a href="tel:+917090222227" className="hover:text-[#C5A059] transition-colors opacity-70 hover:opacity-100">+91 70902 22227</a>
                                </div>
                                <div className="pl-0 md:pl-8 text-[10px] md:text-xs text-[#FAF9F6]/30 space-y-1 text-center md:text-left">
                                    <p>+91 98451 00617</p>
                                    <p>+91 84949 22229</p>
                                </div>
                            </li>

                            <li className="flex items-center gap-4">
                                <Mail size={18} className="text-[#C5A059] shrink-0" />
                                <a href="mailto:rkroyalinteriors@gmail.com" className="hover:text-[#C5A059] transition-colors break-all opacity-70 hover:opacity-100">rkroyalinteriors@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                    <p className="opacity-40 text-center md:text-left">© {new Date().getFullYear()} RK Royal Interiors. Redefining Royalty with every dimension.</p>
                    <div className="flex gap-10">
                        <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Privacy</a>
                        <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Terms</a>
                        <Link to="/admin/login" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Admin Gateway</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
