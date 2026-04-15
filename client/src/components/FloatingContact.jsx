import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    const phoneNumber = '+917090222227';
    const whatsappNumber = '917090222227';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
            {/* Phone Button */}
            <button
                onClick={handleCall}
                className="group flex items-center justify-center bg-[#2C2C2B] hover:bg-[#FAF9F6] text-[#C5A059] hover:text-[#1A1A1A] p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 relative border border-[#C5A059]/10"
                aria-label="Call us"
            >
                <Phone size={22} />
                <span className="absolute right-full mr-4 bg-[#1A1A1A]/90 backdrop-blur-md text-[#C5A059] text-[10px] font-black tracking-[0.3em] px-5 py-2.5 rounded-full border border-[#C5A059]/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none uppercase shadow-2xl">
                    Call Office
                </span>
            </button>

            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="group flex items-center justify-center bg-[#C5A059] text-[#1A1A1A] p-4 rounded-full shadow-[0_15px_40px_rgba(197,160,89,0.4)] transition-all duration-500 hover:scale-110 relative"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={22} />
                <span className="absolute right-full mr-4 bg-[#1A1A1A]/90 backdrop-blur-md text-[#C5A059] text-[10px] font-black tracking-[0.3em] px-5 py-2.5 rounded-full border border-[#C5A059]/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none uppercase shadow-2xl">
                    Direct WhatsApp
                </span>
            </button>
        </div>

    );
};

export default FloatingContact;
