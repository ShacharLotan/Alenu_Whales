import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'פתיח' },
  { id: 'methodology', label: 'המתודולוגיה' },
  { id: 'past-whales', label: 'ניצחונות עבר' },
  { id: 'examples', label: 'הלוויתנים' },
  { id: 'geopolitics', label: 'גיאופוליטיקה' },
  { id: 'hebrew-sovereignty', label: 'ריבונות עברית' },
  { id: 'silicon-dome', label: 'כיפת הסיליקון' },
  { id: 'join', label: 'הצטרפות' },
];

export default function ProgressBar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min((scrollY / totalHeight) * 100, 100));
      
      // Show after scrolling past hero
      setVisible(scrollY > 300);

      // Determine active section
      const offset = window.innerHeight / 3;
      let currentIdx = 0;
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
    <nav 
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
      aria-label="מעקב קריאה"
    >
      <div className="flex items-start gap-4">
        {/* Section labels */}
        <div className="flex flex-col gap-0 items-end pt-0.5">
          {sections.map((sec, i) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`block py-2 text-[12px] font-bold transition-all duration-300 leading-none ${
                i === activeIdx 
                  ? 'text-[#1a1a1a]' 
                  : 'text-[#c0c0c0] hover:text-[#888]'
              }`}
            >
              {sec.label}
            </a>
          ))}
        </div>

        {/* Vertical progress track */}
        <div className="relative flex flex-col items-center pt-1">
          <div className="w-[2px] bg-[#e5e5e5] relative" style={{ height: `${(sections.length - 1) * 32 + 12}px` }}>
            <div 
              className="absolute top-0 right-0 w-full bg-brand-pink transition-all duration-300 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          {/* Dots */}
          {sections.map((sec, i) => (
            <div
              key={sec.id}
              className={`absolute w-2 h-2 rounded-full border-2 transition-all duration-300 -right-[3px] ${
                i <= activeIdx
                  ? 'bg-[#FF6B9E] border-[#FF6B9E] scale-100'
                  : 'bg-white border-[#d0d0d0] scale-75'
              }`}
              style={{ top: `${i * 32 + 2}px` }}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
