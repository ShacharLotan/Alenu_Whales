import React from 'react';
import data from '../content/data.json';

export default function Hero() {
  return (
    <section id="hero" className="pt-36 md:pt-44 pb-20 px-6 section-cream">
      <div className="magazine-col fade-in-up">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-[#FF6B9E]"></div>
          <span className="text-[12px] font-bold tracking-[0.15em] text-[#888] uppercase">תנועת עלינו — הנכדים המייסדים</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] mb-10 leading-[1.05] tracking-tight">
          <span className="gradient-brand">{data.heroTitle}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#444] leading-relaxed font-light mb-16 max-w-xl">
          {data.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#methodology" className="inline-flex items-center justify-center gap-3 text-[15px] font-bold text-[#1a1a1a] pb-1 border-b-2 border-[#5CE1E6] hover:border-[#FF6B9E] transition-colors">
            קראו את המניפסט
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
