import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Collection from './pages/Collection';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import UploadGallery from './pages/admin/UploadGallery';
import ManageGallery from './pages/admin/ManageGallery';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import About from './pages/About';
import Contact from './pages/Contact';
import Logo from './assets/logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 50,
    });

    // Premium loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#F4F3F1] flex flex-col items-center justify-center z-50">
        {/* Logo Shield */}
        <div className="relative mb-10" data-aos="zoom-in">
          <div className="absolute -inset-16 bg-[#9F7730]/5 rounded-full blur-3xl animate-pulse" />
          <div className="relative flex items-center justify-center">
            <img
              src={Logo}
              alt="RK Royal Interiors"
              className="h-32 md:h-40 w-auto transition-transform duration-1000 animate-pulse"
            />
          </div>
        </div>
        {/* Brand name */}
        <div className="text-center mb-10">
          <p className="text-[#061D37] font-black text-2xl tracking-[0.6em] uppercase mb-2">
            RK Royal <span className="text-[#9F7730]">Interiors</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-[#9F7730]/30" />
            <p className="text-[#061D37]/40 text-[10px] tracking-[0.4em] uppercase font-bold">Crafting Royalty</p>
            <div className="h-px w-8 bg-[#9F7730]/30" />
          </div>
        </div>
        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-transparent via-[#9F7730] to-transparent shadow-[0_0_15px_rgba(159,119,48,0.5)]"
            style={{
              animation: 'loadBar 2.5s ease-in-out forwards',
            }}
          />
        </div>
        <style>{`
          @keyframes loadBar {
            from { width: 0%; transform: translateX(-100%); }
            to { width: 100%; transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }


  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F3F1] text-[#061D37]">
        <Navbar />

        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin/login" element={<Login />} />

            {/* Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/gallery/upload" element={<UploadGallery />} />
              <Route path="/admin/gallery/manage" element={<ManageGallery />} />
            </Route>
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
