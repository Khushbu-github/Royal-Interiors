import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send, ExternalLink } from 'lucide-react';

const branches = [
    {
        name: 'Mahanthalingapura',
        city: 'Bangalore',
        address: 'Jigani Link Road, Mahanthalingapura, Bangalore, Karnataka',
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

const Contact = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const err = {};
        if (!form.name.trim()) err.name = 'Name is required';
        if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
            err.phone = 'Enter a valid 10-digit phone number';
        if (!form.message.trim()) err.message = 'Message is required';
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        if (Object.keys(err).length > 0) { setErrors(err); return; }
        const text = `Hi RK Royal Interiors! 👋%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;
        window.open(`https://wa.me/917090222227?text=${text}`, '_blank');
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
    };

    const inputClass = (field) =>
        `w-full bg-[#1A1A1A] border ${errors[field] ? 'border-red-500/50' : 'border-[#C5A059]/15'} text-[#FAF9F6] placeholder-stone/30 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#C5A059]/60 transition-colors`;

    return (
        <div className="min-h-screen bg-[#1A1A1A] pt-28 pb-20">

            {/* Hero */}
            <div className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent" />
                <div className="relative z-10 px-6">
                    <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Reach Us</span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#FAF9F6] tracking-[0.1em] mb-4 leading-tight uppercase">
                        Contact <span className="gold-text-gradient">Us</span>
                    </h1>

                    <p className="text-stone/60 text-sm md:text-lg max-w-xl mx-auto">
                        Have a project in mind? We'd love to hear about it. Let's create something extraordinary together.
                    </p>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-2 space-y-5" data-aos="fade-right">
                        {/* Phone card */}
                        <div className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-6 hover:border-[#C5A059]/40 transition-all duration-300 group shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                                    <Phone size={18} className="text-[#C5A059]" />
                                </div>
                                <h3 className="text-[#FAF9F6] font-bold text-sm uppercase tracking-widest">Call / WhatsApp</h3>
                            </div>
                            <div className="space-y-2 pl-1">
                                <a href="tel:+917090222227" className="flex items-center gap-2 text-stone/70 hover:text-[#C5A059] transition-colors text-sm font-medium">
                                    <MessageCircle size={13} className="text-[#C5A059]" /> +91 70902 22227 <span className="text-xs text-[#C5A059]/60">(WhatsApp)</span>
                                </a>
                                <a href="tel:+919845100617" className="flex items-center gap-2 text-stone/50 hover:text-[#C5A059] transition-colors text-sm">
                                    <Phone size={13} className="text-stone/30" /> +91 98451 00617
                                </a>
                                <a href="tel:+918494922229" className="flex items-center gap-2 text-stone/50 hover:text-[#C5A059] transition-colors text-sm">
                                    <Phone size={13} className="text-stone/30" /> +91 84949 22229
                                </a>
                            </div>
                        </div>

                        {/* Email card */}
                        <div className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-6 hover:border-[#C5A059]/40 transition-all duration-300 group shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                                    <Mail size={18} className="text-[#C5A059]" />
                                </div>
                                <h3 className="text-[#FAF9F6] font-bold text-sm uppercase tracking-widest">Email</h3>
                            </div>
                            <a href="mailto:rkroyalinteriors@gmail.com" className="text-stone/70 hover:text-[#C5A059] transition-colors text-sm break-all font-medium">
                                rkroyalinteriors@gmail.com
                            </a>
                        </div>

                        {/* Instagram card */}
                        <div className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-6 hover:border-[#C5A059]/40 transition-all duration-300 group shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#C5A059]/10 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                                    <Instagram size={18} className="text-[#C5A059]" />
                                </div>
                                <h3 className="text-[#FAF9F6] font-bold text-sm uppercase tracking-widest">Instagram</h3>
                            </div>
                            <a
                                href="https://www.instagram.com/rk_royal_interiors"
                                target="_blank" rel="noopener noreferrer"
                                className="text-stone/70 hover:text-[#C5A059] transition-colors text-sm flex items-center gap-2 font-medium"
                            >
                                @rk_royal_interiors <ExternalLink size={11} />
                            </a>
                        </div>

                        {/* WhatsApp Quick */}
                        <a
                            href="https://wa.me/917090222227?text=Hi%20RK%20Royal%20Interiors%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-[#C5A059] text-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-[#FAF9F6] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:-translate-y-1"
                        >
                            <MessageCircle size={16} /> Chat on WhatsApp
                        </a>
                    </div>


                    {/* Right: Form */}
                    <div className="lg:col-span-3" data-aos="fade-left">
                        <div className="bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-6 md:p-10 shadow-xl">
                            <h2 className="text-xl md:text-2xl font-black text-[#FAF9F6] mb-2 uppercase tracking-wide">Send Us a Message</h2>
                            <p className="text-stone/40 text-xs md:text-sm mb-8 font-medium italic">Fill out the form and we'll connect with you on WhatsApp.</p>


                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-2 block">Your Name *</label>
                                    <input
                                        type="text" name="name" value={form.name}
                                        onChange={handleChange} placeholder="e.g. Ravi Kumar"
                                        className={inputClass('name')}
                                    />
                                    {errors.name && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-2 block">Phone Number *</label>
                                    <input
                                        type="tel" name="phone" value={form.phone}
                                        onChange={handleChange} placeholder="e.g. 9876543210"
                                        className={inputClass('phone')}
                                    />
                                    {errors.phone && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-2 block">Your Message *</label>
                                    <textarea
                                        name="message" value={form.message}
                                        onChange={handleChange} rows={5}
                                        placeholder="Tell us about your project — space type, requirements, location..."
                                        className={`${inputClass('message')} resize-none`}
                                    />
                                    {errors.message && <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest mt-2">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#C5A059] text-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-[#FAF9F6] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] mt-2"
                                >
                                    <Send size={14} /> Send via WhatsApp
                                </button>

                                <p className="text-stone/20 text-[10px] uppercase font-black tracking-widest text-center">
                                    Official WhatsApp Integration
                                </p>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Branches Map Section */}
                <div className="mt-20 px-4 md:px-0">
                    <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
                        <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Locations</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#FAF9F6] mb-3">
                            Find Our <span className="gold-text-gradient">Branches</span>
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {branches.map((branch, i) => (
                            <div
                                key={branch.name}
                                data-aos="fade-up"
                                data-aos-delay={`${i * 100}`}
                                className="relative bg-[#2C2C2B] border border-[#C5A059]/10 rounded-2xl p-7 hover:border-[#C5A059]/50 transition-all duration-500 group overflow-hidden shadow-lg"
                            >
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C5A059]/30 rounded-tr-2xl" />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                                        <MapPin size={16} className="text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <p className="text-[#FAF9F6] font-bold text-sm tracking-wide">{branch.name}</p>
                                        <p className="text-[#C5A059] text-[10px] font-black tracking-[0.3em] uppercase">{branch.city}</p>
                                    </div>
                                </div>
                                <p className="text-stone/50 text-sm leading-relaxed mb-5 font-medium">{branch.address}</p>
                                {branch.hasMap ? (
                                    <a
                                        href={branch.mapUrl}
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#C5A059] text-[10px] font-black tracking-[0.2em] uppercase hover:text-[#FAF9F6] transition-colors"
                                    >
                                        <ExternalLink size={12} /> Open in Maps
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-stone/20 text-[10px] font-black tracking-[0.2em] uppercase">
                                        📞 Reach for directions
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
