import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from '../assets/logo.png';

const values = [
    { icon: '🏆', title: 'Excellence', desc: 'We deliver nothing short of the finest — in materials, craftsmanship, and experience.' },
    { icon: '🤝', title: 'Trust', desc: 'Over 100 satisfied clients trust us with their most personal spaces.' },
    { icon: '💡', title: 'Innovation', desc: 'Blending the latest design trends with timeless elegance for future-proof spaces.' },
    { icon: '⏱️', title: 'Punctuality', desc: 'We respect your time. Projects are delivered on schedule, every time.' },
];

const services = [
    'Home Interiors', 'Residential Apartments', 'Commercial Spaces',
    'Hotels & Restaurants', 'Modular Kitchens', 'False Ceilings',
    'Schools & Colleges', 'Hospitals & Industries',
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#1A1A1A]">
            {/* Hero */}
            <div className="relative min-h-[55vh] flex items-end overflow-hidden pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#1a1205]" />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(197,160,89,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                {/* Orbs */}
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
                    <div className="flex flex-col md:flex-row items-end gap-12">
                        {/* Logo side */}
                        <div className="flex-shrink-0 mx-auto md:mx-0" data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-6 bg-[#C5A059]/8 rounded-full blur-2xl" />
                                <img src={Logo} alt="RK Royal Interiors" className="relative h-48 md:h-64 lg:h-80 w-auto" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div data-aos="fade-left" className="text-center md:text-left">
                            <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Who We Are</span>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FAF9F6] mb-5 leading-tight uppercase tracking-widest">
                                About <span className="gold-text-gradient">RK Royal</span><br />Interiors
                            </h1>

                            <p className="text-[#A8A29E]/70 text-base md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
                                A legacy of luxury, a promise of excellence. We transform ordinary spaces into extraordinary sanctuaries of style and comfort across Bangalore and beyond.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right" className="text-center lg:text-left">
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#FAF9F6] mb-6 uppercase tracking-wider">
                            A Decade of <span className="gold-text-gradient">Royal Craftsmanship</span>
                        </h2>


                        <div className="space-y-5 text-stone/70 leading-relaxed">
                            <p>
                                Founded in 2015, RK Royal Interiors began with a singular vision — to bring luxury interior design to every home and business in Bangalore. What started as a boutique studio has grown into a full-service interior design company with branches across Bangalore (Mahanthalingapura & Hosur) and Chennai.
                            </p>
                            <p>
                                Over the past 10+ years, we have successfully completed more than 100 projects, ranging from intimate home makeovers to large-scale commercial and hospitality fit-outs. Our team of passionate designers, skilled craftsmen, and project managers work in harmony to deliver spaces that exceed expectations.
                            </p>
                            <p>
                                At RK Royal Interiors, we believe that your space is an extension of your identity. Every project is treated with the same level of dedication, precision, and creative flair — ensuring that each client receives a truly bespoke experience.
                            </p>
                        </div>
                    </div>

                    {/* Stat Grid */}
                    <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { num: '10+', label: 'Years Experience', sub: 'Delivering excellence since 2015' },
                            { num: '100+', label: 'Projects Done', sub: 'Across residential & commercial' },
                            { num: '3', label: 'Branches', sub: 'Bangalore & Chennai' },
                            { num: '100%', label: 'Satisfaction Rate', sub: 'Happy clients, always' },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={`${i * 80}`}
                                className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-7 hover:border-[#C5A059]/40 transition-all duration-500 text-center"
                            >
                                <p className="text-[#C5A059] font-black text-3xl md:text-4xl mb-2">{stat.num}</p>
                                <p className="text-[#FAF9F6] font-bold text-xs md:text-sm mb-1">{stat.label}</p>
                                <p className="text-stone/40 text-[10px] md:text-xs">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Values Section */}
            <div className="py-24 bg-[#2C2C2B]/40 border-y border-[#C5A059]/8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Why Choose Us</span>
                        <h2 className="text-4xl font-black text-[#FAF9F6]">Our Core <span className="gold-text-gradient">Values</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <div
                                key={v.title}
                                data-aos="fade-up"
                                data-aos-delay={`${i * 80}`}
                                className="bg-[#1A1A1A] border border-[#C5A059]/10 rounded-2xl p-7 hover:border-[#C5A059]/50 transition-all duration-500 group"
                            >
                                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform">{v.icon}</div>
                                <h3 className="text-[#FAF9F6] font-bold mb-3 group-hover:text-[#C5A059] transition-colors">{v.title}</h3>
                                <p className="text-stone/50 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What We Offer</span>
                    <h2 className="text-4xl font-black text-[#FAF9F6]">Our <span className="gold-text-gradient">Services</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
                    {services.map((s, i) => (
                        <div
                            key={s}
                            data-aos="fade-up"
                            data-aos-delay={`${(i % 4) * 75}`}
                            className="flex items-center gap-3 bg-[#2C2C2B] border border-[#C5A059]/10 rounded-xl p-4 hover:border-[#C5A059]/40 transition-all group"
                        >
                            <CheckCircle2 size={15} className="text-[#C5A059] shrink-0" />
                            <span className="text-stone/70 text-xs md:text-sm font-medium group-hover:text-[#FAF9F6] transition-colors">{s}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* CTA */}
            <div className="pb-24 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2B] border border-[#C5A059]/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <h2 className="text-2xl md:text-3xl font-black text-[#FAF9F6] mb-4 uppercase tracking-wider">Let's Build Something <span className="gold-text-gradient">Royal</span></h2>
                    <p className="text-stone/60 text-sm md:text-base mb-8 font-medium">Get in touch for a premium consultation and transform your space today.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#C5A059] text-[#1A1A1A] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] rounded-full hover:bg-[#FAF9F6] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Contact Us <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default About;

