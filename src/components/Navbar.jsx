import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fafafa]/95 backdrop-blur-md shadow-[0_1px_0_#e5e5e5]' : 'bg-transparent'}`}>
      <div className="magazine-wide px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-tight text-[#1a1a1a]">
          עלינו.
        </a>
        
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#methodology" className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">
            המתודולוגיה
          </a>
          <a href="#past-whales" className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">
            ניצחונות עבר
          </a>
          <a href="#examples" className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">
            הלוויתנים
          </a>
          <a href="#join" className="text-[13px] font-bold text-[#fafafa] bg-[#1a1a1a] px-5 py-2.5 rounded hover:bg-[#333] transition-colors">
            הצטרפו למאמץ
          </a>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          <div className="space-y-1.5">
            <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fafafa] border-t border-[#e5e5e5] px-6 pb-6 pt-4 space-y-4">
          <a href="#methodology" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium text-[#444]">המתודולוגיה</a>
          <a href="#past-whales" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium text-[#444]">ניצחונות עבר</a>
          <a href="#examples" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium text-[#444]">הלוויתנים</a>
          <a href="#join" onClick={() => setMobileOpen(false)} className="block text-center text-[14px] font-bold text-[#fafafa] bg-[#1a1a1a] px-5 py-3 rounded">הצטרפו למאמץ</a>
        </div>
      )}
    </nav>
  );
}
