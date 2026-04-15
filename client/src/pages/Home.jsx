import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import HeroThree from '../components/HeroThree';


import Kitchen from '../assets/Kitchen.png';
import Bedroom from '../assets/Bedroom.png';
import Livingroom from '../assets/Livingroom.png';
import Diningroom from '../assets/Diningroom.png';

// Animated counter hook
const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);

    return { count, ref };
};

const services = [
    { icon: '🏠', title: 'Home Interiors', desc: 'Bespoke residential interior designs tailored to your lifestyle.' },
    { icon: '🏢', title: 'Residential Apartments', desc: 'Elegant apartment transformations that maximize every inch.' },
    { icon: '🏬', title: 'Commercial Spaces', desc: 'Corporate & retail environments that inspire productivity.' },
    { icon: '🍽️', title: 'Hotels & Restaurants', desc: 'Hospitality interiors that create unforgettable ambience.' },
    { icon: '🍳', title: 'Modular Kitchens', desc: 'Smart, stylish kitchens built for modern living.' },
    { icon: '✨', title: 'False Ceilings', desc: 'Artistic ceiling designs that elevate every room.' },
    { icon: '🎓', title: 'Schools & Colleges', desc: 'Educational spaces designed to inspire and engage.' },
    { icon: '🏥', title: 'Hospitals & Industries', desc: 'Functional, compliant interiors for healthcare and industry.' },
];

const branches = [
    {
        name: 'Mahanthalingapura',
        city: 'Bangalore',
        address: 'Jigani Link Road, Mahanthalingapura, Bangalore',
        mapUrl: 'https://share.google/gnJOByVKC48UzhkId',
        hasMap: true,
    },
    {
        name: 'Hosur Road',
        city: 'Bangalore',
        address: 'Hosur, Bangalore, Karnataka',
        mapUrl: 'https://share.google/TpGLHMfVQMKvzVSrW',
        hasMap: true,
    },
    {
        name: 'Chennai',
        city: 'Tamil Nadu',
        address: 'Chennai, Tamil Nadu',
        hasMap: false,
    },
];

const Home = () => {
    const years = useCounter(10);
    const projects = useCounter(100);
    const since = useCounter(2015, 2500);

    const [hoveredRoom, setHoveredRoom] = useState(null);
    const rooms = [
        { id: 'kitchen', name: 'KITCHEN', image: Kitchen },
        { id: 'bedroom', name: 'BEDROOM', image: Bedroom },
        { id: 'living', name: 'LIVING', image: Livingroom },
        { id: 'dining', name: 'DINING', image: Diningroom },
    ];

    return (
        <div className="bg-[#0b0b0b] overflow-x-hidden">
            {/* ===== HERO SECTION ===== */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* 3D Showroom Background */}
                <HeroThree />

                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent z-10 pointer-events-none" />


                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 md:pb-16 text-center">

                    {/* Hero Glass Container */}
                    <div className="inline-block relative">
                        <div className="absolute -inset-8 bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] md:rounded-[4rem] border border-white/[0.08] -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                        
                        {/* Tag line above title */}
                        <div data-aos="fade-up">
                            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full mb-8 md:mb-10 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                ✦ Premium Interior Design Excellence ✦
                            </span>
                        </div>


                        {/* Main heading */}
                        <h1
                            data-aos="fade-up" data-aos-delay="200"
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-widest mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] uppercase"
                        >

                            Transforming Spaces<br />
                            <span className="gold-text-gradient">into Royal Living</span>
                        </h1>


                        <p
                            data-aos="fade-up" data-aos-delay="300"
                            className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-4"
                        >
                            RK Royal Interiors crafts bespoke luxury environments — where every detail tells a story of elegance, comfort, and timeless sophistication since 2015.
                        </p>


                        {/* CTA Buttons */}
                        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 w-full max-w-xs sm:max-w-none mx-auto">
                            <Link
                                to="/gallery"
                                id="hero-explore-btn"
                                className="group inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto px-10 md:px-12 py-4 md:py-5.5 bg-[#D4AF37] text-[#0b0b0b] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-105"
                            >
                                Explore Designs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                id="hero-contact-btn"
                                className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto px-10 md:px-12 py-4 md:py-5.5 border border-[#D4AF37]/40 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/5"
                            >
                                Contact Us
                            </Link>
                        </div>

                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center gap-2 text-[#D4AF37]/50 animate-bounce">
                            <span className="text-xs tracking-widest uppercase">Scroll</span>
                            <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== HIGHLIGHTS / STATS SECTION ===== */}
            <div className="relative py-20 bg-[#1A1A1A] border-y border-[#C5A059]/10">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div ref={years.ref} data-aos="fade-up" data-aos-delay="100" className="group">
                            <div className="text-6xl font-black text-[#C5A059] mb-2">
                                {years.count}+
                            </div>
                            <div className="w-12 h-px bg-[#C5A059]/40 mx-auto my-3" />
                            <p className="text-[#FAF9F6] font-bold tracking-widest uppercase text-sm">Years Experience</p>
                            <p className="text-stone font-medium text-xs mt-2 opacity-60">A decade of transforming spaces</p>
                        </div>

                        <div ref={since.ref} data-aos="fade-up" data-aos-delay="200" className="group border-y md:border-y-0 md:border-x border-[#C5A059]/10 py-10 md:py-0">
                            <div className="text-6xl font-black text-[#C5A059] mb-2">
                                {since.count}
                            </div>
                            <div className="w-12 h-px bg-[#C5A059]/40 mx-auto my-3" />
                            <p className="text-[#FAF9F6] font-bold tracking-widest uppercase text-sm">Est. Year</p>
                            <p className="text-stone font-medium text-xs mt-2 opacity-60">Trusted since the beginning</p>
                        </div>

                        <div ref={projects.ref} data-aos="fade-up" data-aos-delay="300" className="group">
                            <div className="text-6xl font-black text-[#C5A059] mb-2">
                                {projects.count}+
                            </div>
                            <div className="w-12 h-px bg-[#C5A059]/40 mx-auto my-3" />
                            <p className="text-[#FAF9F6] font-bold tracking-widest uppercase text-sm">Projects Completed</p>
                            <p className="text-stone font-medium text-xs mt-2 opacity-60">Across Bangalore & beyond</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ===== ABOUT SECTION ===== */}
            <div className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Content */}
                    <div data-aos="fade-right" className="text-center lg:text-left">
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">About Us</span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#FAF9F6] mb-6 leading-tight uppercase tracking-wider">
                            Crafting <span className="gold-text-gradient">Royal Spaces</span><br className="hidden md:block" />With Purpose
                        </h2>

                        <p className="text-stone/70 text-sm md:text-base leading-relaxed mb-6">
                            RK Royal Interiors is a premium interior design company based in Bangalore, dedicated to transforming living and working environments into extraordinary spaces. With over a decade of expertise and more than 100 completed projects, we deliver unmatched craftsmanship in every detail.
                        </p>
                        <p className="text-stone/70 text-sm md:text-base leading-relaxed mb-8">
                            From modular kitchens and false ceilings to full-scale commercial and hospitality fit-outs, our team of expert designers brings your vision to life using the finest materials and the latest design trends — always with a royal touch.
                        </p>
                        <ul className="space-y-3 mb-10 text-left inline-block">
                            {['Premium quality materials', 'On-time delivery, always', '100% customer satisfaction', 'Transparent pricing & consultation'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-xs md:text-sm text-[#FAF9F6]/80">
                                    <CheckCircle2 size={16} className="text-[#C5A059] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="block mt-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-7 md:px-8 py-3.5 md:py-4 border border-[#C5A059]/50 text-[#C5A059] font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all duration-300"
                            >
                                Get a Free Consultation <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Stats card grid */}
                    <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: '🏆', label: '100+ Projects', sub: 'Delivered successfully' },
                            { icon: '⭐', label: 'Premium Quality', sub: 'Best-in-class materials' },
                            { icon: '🔨', label: 'Expert Team', sub: 'Skilled craftsmen & designers' },
                            { icon: '📍', label: '3 Branches', sub: 'Bangalore & Chennai' },
                        ].map((card, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={`${i * 100}`}
                                className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-6 md:p-8 hover:border-[#C5A059]/40 hover:shadow-[0_0_30px_rgba(197,160,89,0.08)] transition-all duration-500 group flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                <div className="text-3xl md:text-4xl mb-4 transform group-hover:rotate-12 transition-transform">{card.icon}</div>
                                <p className="text-[#FAF9F6] font-bold text-sm md:text-base mb-1">{card.label}</p>
                                <p className="text-stone font-medium text-[10px] md:text-xs opacity-50">{card.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ===== ROOM CATEGORIES SECTION ===== */}
            <section className="bg-[#FAF9F6]/5 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-y border-[#C5A059]/10">
                {/* Desktop Layout */}
                <div className="hidden md:block w-full max-w-[1400px] mx-auto">
                    <div className="relative overflow-hidden group cursor-pointer h-[400px] lg:h-[500px] mb-4 rounded-2xl"
                        onMouseEnter={() => setHoveredRoom('kitchen')}
                        onMouseLeave={() => setHoveredRoom(null)}>
                        <img src={Kitchen} alt="KITCHEN" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === 'kitchen' ? 'bg-[#C5A059]/20 backdrop-blur-[2px]' : 'bg-[#1A1A1A]/40'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className={`text-5xl lg:text-8xl font-black text-[#FAF9F6] tracking-[0.3em] transition-all duration-700 ${hoveredRoom === 'kitchen' ? 'scale-110 opacity-100' : 'scale-100 opacity-90'}`}
                                style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.6)' }}>KITCHEN</h3>
                        </div>
                        {hoveredRoom === 'kitchen' && <div className="absolute inset-6 border border-[#C5A059]/30 rounded-xl pointer-events-none animate-pulse" />}
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full">
                        {[
                            { id: 'bedroom', name: 'BEDROOM', img: Bedroom },
                            { id: 'living', name: 'LIVING', img: Livingroom },
                            { id: 'dining', name: 'DINING', img: Diningroom }
                        ].map((room) => (
                            <div key={room.id} className="relative overflow-hidden group cursor-pointer h-[350px] lg:h-[450px] rounded-2xl"
                                onMouseEnter={() => setHoveredRoom(room.id)}
                                onMouseLeave={() => setHoveredRoom(null)}>
                                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === room.id ? 'bg-[#C5A059]/20 backdrop-blur-[2px]' : 'bg-[#1A1A1A]/40'}`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className={`text-2xl lg:text-4xl font-black text-[#FAF9F6] tracking-[0.2em] transition-all duration-700 ${hoveredRoom === room.id ? 'scale-110 opacity-100' : 'scale-100 opacity-90'}`}
                                        style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.6)' }}>{room.name}</h3>
                                </div>
                                {hoveredRoom === room.id && <div className="absolute inset-4 border border-[#C5A059]/30 rounded-xl pointer-events-none animate-pulse" />}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col w-full max-w-[1400px] mx-auto gap-4">
                    {rooms.map((room) => (
                        <div key={room.id} className="relative overflow-hidden h-[280px] rounded-2xl"
                            onClick={() => setHoveredRoom(hoveredRoom === room.id ? null : room.id)}>
                            <img src={room.image} alt={room.name} className={`w-full h-full object-cover transition-transform duration-1000 ${hoveredRoom === room.id ? 'scale-110' : 'scale-100'}`} />
                            <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === room.id ? 'bg-[#D4AF37]/20' : 'bg-black/40'}`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className={`text-4xl font-black text-white tracking-[0.2em] transition-all duration-700 ${hoveredRoom === room.id ? 'scale-110' : 'scale-100'}`}
                                    style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.8)' }}>{room.name}</h3>
                            </div>
                            {hoveredRoom === room.id && <div className="absolute inset-4 border border-[#D4AF37]/30 rounded-xl pointer-events-none" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <div className="py-20 md:py-28 bg-[#2C2C2B]/40 border-y border-[#C5A059]/8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 md:mb-20" data-aos="fade-up">
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What We Offer</span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#FAF9F6] uppercase tracking-widest">Our Services</h2>

                        <p className="text-[#FAF9F6]/60 text-sm md:text-base max-w-xl mx-auto mt-4 px-4">End-to-end interior design solutions for every space and budget.</p>
                    </div>



                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, i) => (
                            <div
                                key={service.title}
                                data-aos="fade-up"
                                data-aos-delay={`${(i % 4) * 75}`}
                                className="group bg-[#1A1A1A] border border-[#C5A059]/10 rounded-2xl p-7 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/5 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-500 cursor-default"
                            >
                                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h3 className="text-[#FAF9F6] font-bold text-sm tracking-wide mb-3 uppercase group-hover:text-[#C5A059] transition-colors duration-300">{service.title}</h3>
                                <p className="text-[#FAF9F6]/50 text-xs leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <div className="py-20 md:py-28 bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 md:mb-20" data-aos="fade-up">
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Client Stories</span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#FAF9F6] uppercase tracking-widest">Royal <span className="gold-text-gradient">Experiences</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Arjun Reddy",
                                location: "Indiranagar, Bangalore",
                                text: "The attention to detail in our modular kitchen is simply world-class. RK Royal Interiors truly understands luxury.",
                                stars: 5
                            },
                            {
                                name: "Priya Sharma",
                                location: "Koramangala, Bangalore",
                                text: "Exceptional design and timely execution. Our 3BHK was transformed into a royal sanctuary within the promised timeline.",
                                stars: 5
                            },
                            {
                                name: "Sandeep Hegde",
                                location: "Whitefield, Bangalore",
                                text: "Quiet luxury at its best. Their choice of materials like the HD UV marble panels gave our home a unique, premium feel.",
                                stars: 5
                            },
                            {
                                name: "Ananya Roy",
                                location: "HSR Layout, Bangalore",
                                text: "Professional, creative, and transparent. The false ceiling designs for our living room are the highlight of our home.",
                                stars: 5
                            }
                        ].map((t, i) => (
                            <div 
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={`${i * 100}`}
                                className="group bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-8 hover:border-[#C5A059]/40 transition-all duration-500 relative flex flex-col"
                            >
                                <div className="absolute top-4 right-6 text-4xl text-[#C5A059]/10 font-serif group-hover:text-[#C5A059]/20 transition-colors">"</div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <span key={j} className="text-[#C5A059] text-[10px]">★</span>
                                    ))}
                                </div>
                                <p className="text-[#FAF9F6]/80 text-xs md:text-sm italic mb-8 leading-relaxed flex-1">
                                    "{t.text}"
                                </p>
                                <div>
                                    <p className="text-[#FAF9F6] font-bold text-xs uppercase tracking-widest">{t.name}</p>
                                    <p className="text-[#C5A059] text-[9px] font-medium tracking-widest uppercase mt-1">{t.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== BRANCHES SECTION ===== */}
            <div className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Find Us</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#FAF9F6] mb-4">Our <span className="gold-text-gradient">Branches</span></h2>
                    <p className="text-[#FAF9F6]/60 text-sm md:text-base max-w-xl mx-auto px-4">Visit us at any of our showrooms across South India.</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {branches.map((branch, i) => (
                        <div
                            key={branch.name}
                            data-aos="fade-up"
                            data-aos-delay={`${i * 100}`}
                            className="relative group bg-[#1A1A1A] border border-[#C5A059]/10 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gold corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C5A059]/30 rounded-tr-2xl" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#C5A059]/20 rounded-bl-2xl" />

                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                                    <MapPin size={18} className="text-[#C5A059]" />
                                </div>
                                <div>
                                    <p className="text-[#FAF9F6] font-bold text-sm">{branch.name}</p>
                                    <p className="text-[#C5A059] text-xs tracking-widest uppercase">{branch.city}</p>
                                </div>
                            </div>

                            <p className="text-[#FAF9F6]/60 text-sm leading-relaxed mb-6">
                                {branch.address}
                            </p>

                            {branch.hasMap ? (
                                <a
                                    href={branch.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-widest uppercase hover:text-[#FAF9F6] transition-colors duration-300"
                                >
                                    <ExternalLink size={12} /> View on Maps
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-2 text-[#FAF9F6]/30 text-xs font-bold tracking-widest uppercase">
                                    📞 Contact for address
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== CTA BANNER ===== */}
            <div className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#1A1A1A]" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#C5A059,transparent_70%)]" />
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-black text-[#FAF9F6] mb-6 leading-tight uppercase tracking-tight">
                        Ready to Transform Your <span className="gold-text-gradient">Space?</span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-[#FAF9F6]/60 text-sm md:text-lg mb-10 max-w-2xl mx-auto font-medium">
                        Let's create something extraordinary together. Book a free consultation today.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
                        <a
                            href="https://wa.me/917090222227?text=Hi%20RK%20Royal%20Interiors%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0b0b0b] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
                        >
                            💬 WhatsApp Us Now
                        </a>
                        <Link
                            to="/collection"
                            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 border border-[#D4AF37]/40 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                        >
                            Browse Catalogue <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
