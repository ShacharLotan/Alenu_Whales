import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fafafa]/90 backdrop-blur-md minimal-border-b">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tight serif text-[#111]">
          עלינו.
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#methodology" className="text-[14px] font-medium text-[#666] hover:text-[#111] transition-colors">
            המתודולוגיה
          </a>
          <a href="#examples" className="text-[14px] font-medium text-[#666] hover:text-[#111] transition-colors">
            מקרי בוחן
          </a>
          <a href="#join" className="text-[13px] font-bold text-[#fafafa] bg-[#111] px-5 py-2.5 rounded-sm hover:bg-[#333] transition-colors">
            הצטרפו למאמץ
          </a>
        </div>
      </div>
    </nav>
  );
}
