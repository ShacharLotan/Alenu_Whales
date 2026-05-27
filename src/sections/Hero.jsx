import React from 'react';
import data from '../content/data.json';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="magazine-container relative fade-in-up">
        
        <div className="marginalia top-20 hidden lg:block">
          <strong>מניפסט עלינו</strong>
          <p className="mt-2 text-sm">המסמך המכונן למעבר מניהול משברים כרוני לשינוי מבני ארוך טווח.</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-brand-pink"></div>
          <span className="text-[12px] font-bold tracking-widest text-[#111]">תנועת עלינו</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-[#111] mb-10 leading-[1.05] serif tracking-tight">
          <span className="gradient-brand">{data.heroTitle}</span>
        </h1>
        
        <p className="text-2xl text-[#444] leading-relaxed font-light mb-16 drop-cap">
          {data.heroSubtitle}
        </p>

        <a href="#methodology" className="inline-flex items-center gap-3 text-[16px] font-bold text-[#111] pb-1 border-b-2 border-brand-blue hover:text-brand-pink hover:border-brand-pink transition-colors">
          קראו את המניפסט המלא
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </div>
    </section>
  );
}
