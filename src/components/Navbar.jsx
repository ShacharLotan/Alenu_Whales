import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'methodology', label: 'המתודולוגיה' },
  { id: 'past-whales', label: 'ניצחונות עבר' },
  { id: 'examples', label: 'הלוויתנים' },
  { id: 'geopolitics', label: 'גיאופוליטיקה' },
  { id: 'hebrew-sovereignty', label: 'ריבונות עברית' },
  { id: 'silicon-dome', label: 'כיפת הסיליקון' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      
      const offset = window.innerHeight / 3;
      let currentIdx = -1;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY + offset) {
          currentIdx = i;
          break;
        }
      }
      setActiveIdx(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fafafa] shadow-sm' : 'bg-transparent'}`}>
        <div className="magazine-wide px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-black tracking-tight text-[#1a1a1a]">
            עלינו.
          </a>
          
          {/* Desktop main nav */}
          <div className="hidden xl:flex gap-6 items-center">
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className="text-[14px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors">
                {sec.label}
              </a>
            ))}
            <a href="#join" className="text-[13px] font-bold text-[#fafafa] bg-[#1a1a1a] px-5 py-2.5 rounded hover:bg-[#333] transition-colors ml-4">
              הצטרפו
            </a>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="xl:hidden p-2 relative z-[60]"
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

        {/* Sub-nav (Desktop & Mobile) when scrolled */}
        <div className={`w-full bg-white/90 backdrop-blur-md border-b border-[#e5e5e5] overflow-hidden transition-all duration-300 ${scrolled ? 'h-[44px] opacity-100' : 'h-0 opacity-0'}`}>
          <div className="magazine-wide px-6 h-full flex items-center overflow-x-auto hide-scrollbar whitespace-nowrap relative">
            <div className="flex gap-6 xl:gap-8 min-w-max mx-auto xl:mx-0 pr-2">
              {sections.map((sec, i) => (
                <a
                  key={`sub-${sec.id}`}
                  href={`#${sec.id}`}
                  className={`text-[13px] font-bold transition-colors py-[11px] border-b-2 ${
                    i === activeIdx ? 'text-[#FF6B9E] border-[#FF6B9E]' : 'text-[#888] border-transparent hover:text-[#1a1a1a]'
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-[#fafafa] z-[45] pt-24 px-6 flex flex-col gap-6 xl:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {sections.map((sec) => (
            <a key={`mob-${sec.id}`} href={`#${sec.id}`} onClick={() => setMobileOpen(false)} className="block text-[18px] font-black text-[#1a1a1a] border-b border-[#eee] pb-4">
              {sec.label}
            </a>
        ))}
        <a href="#join" onClick={() => setMobileOpen(false)} className="block text-center text-[16px] font-bold text-[#fafafa] bg-[#1a1a1a] px-5 py-4 mt-4 rounded-md shadow-md">
          הצטרפו למאמץ
        </a>
      </div>
    </>
  );
}
