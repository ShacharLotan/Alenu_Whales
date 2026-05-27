import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'מניפסט' },
  { id: 'methodology', label: 'מתודולוגיה' },
  { id: 'past-whales', label: 'ניצחונות עבר' },
  { id: 'examples', label: 'מקרי בוחן' },
];

export default function ProgressBar() {
  const [activeId, setActiveId] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalHeight) * 100);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4">
      <div className="h-48 w-[2px] bg-[#e5e5e5] relative rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full bg-brand-pink transition-all duration-300 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="flex flex-col gap-3 items-end w-32 absolute left-6 top-1/2 -translate-y-1/2">
        {sections.map(sec => (
          <a 
            key={sec.id}
            href={`#${sec.id}`}
            className={`text-[12px] font-bold transition-colors text-left w-full ${activeId === sec.id ? 'text-[#111]' : 'text-[#bbb] hover:text-[#888]'}`}
          >
            {sec.label}
          </a>
        ))}
      </div>
    </div>
  );
}
