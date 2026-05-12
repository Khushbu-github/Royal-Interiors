import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, MessageCircle, Facebook } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#F4F3F1] text-[#061D37]/60 border-t border-[#9F7730]/10">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start mb-4">
                            <Link to="/" className="group/logo relative outline-none flex items-center justify-center transition-all duration-500 hover:-translate-y-2">
                                <img 
                                    src={Logo} 
                                    alt="RK Royal Interiors" 
                                    className="h-32 md:h-40 w-auto transition-all duration-500 group-hover/logo:scale-105" 
                                />
                            </Link>
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed text-[#061D37]/50 max-w-sm">
                            Transforming spaces into royal living. We specialize in premium residential and commercial interior design solutions that define elegance and sophistication since 2015.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/rk_royal_interiors" target="_blank" rel="noopener noreferrer" className="text-[#061D37]/40 hover:text-[#9F7730] transition-all duration-300 p-2.5 bg-[#061D37]/5 hover:bg-[#9F7730]/10 rounded-full border border-[#061D37]/5 hover:border-[#9F7730]/20">
                                <Instagram size={18} />
                            </a>
                            <a href="https://wa.me/917090222227" target="_blank" rel="noopener noreferrer" className="text-[#061D37]/40 hover:text-[#9F7730] transition-all duration-300 p-2.5 bg-[#061D37]/5 hover:bg-[#9F7730]/10 rounded-full border border-[#061D37]/5 hover:border-[#9F7730]/20">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#061D37] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-xs md:text-sm border-l-4 border-[#9F7730] pl-4">Explore</h3>
                        <ul className="space-y-4 text-[11px] md:text-sm font-medium text-center md:text-left">
                            <li><Link to="/" className="hover:text-[#9F7730] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[#9F7730] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">About Us</Link></li>
                            <li><Link to="/collection" className="hover:text-[#9F7730] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Collections</Link></li>
                            <li><Link to="/gallery" className="hover:text-[#9F7730] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-[#9F7730] transition-colors tracking-widest uppercase opacity-70 hover:opacity-100">Contact Us</Link></li>
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#061D37] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-xs md:text-sm border-l-4 border-[#9F7730] pl-4">Connect</h3>
                        <ul className="space-y-5 text-[11px] md:text-sm font-medium">
                            <li className="flex items-start gap-4">
                                <MapPin size={18} className="text-[#CFA45A] shrink-0 mt-0.5" />
                                <span className="opacity-70 text-center md:text-left">Mahanthalingapura, Jigani Link Road, Bangalore</span>
                            </li>
                            <li className="flex flex-col gap-3 items-center md:items-start">
                                <div className="flex items-center gap-4">
                                    <Phone size={18} className="text-[#9F7730] shrink-0" />
                                    <a href="tel:+917090222227" className="hover:text-[#9F7730] transition-colors opacity-70 hover:opacity-100">+91 70902 22227</a>
                                </div>
                                <div className="pl-0 md:pl-8 text-[10px] md:text-xs text-[#F4F3F1]/30 space-y-1 text-center md:text-left">
                                    <p>+91 90366 88777</p>
                                    <p>+91 84949 22229</p>
                                </div>
                            </li>

                            <li className="flex items-center gap-4">
                                <Mail size={18} className="text-[#9F7730] shrink-0" />
                                <a href="mailto:rkroyalinteriors@gmail.com" className="hover:text-[#9F7730] transition-colors break-all opacity-70 hover:opacity-100">rkroyalinteriors@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-20 pt-10 border-t border-[#061D37]/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                    <p className="opacity-40 text-center md:text-left">© {new Date().getFullYear()} RK Royal Interiors. Redefining Royalty with every dimension.</p>
                    <div className="flex gap-10">
                        <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#9F7730] transition-all">Privacy</a>
                        <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#9F7730] transition-all">Terms</a>
                        <Link to="/admin/login" className="opacity-40 hover:opacity-100 hover:text-[#9F7730] transition-all">Admin Gateway</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
