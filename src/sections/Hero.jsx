import React from 'react';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto fade-in-up">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-brand-pink"></div>
          <span className="text-[12px] font-bold tracking-widest text-[#111]">תנועת עלינו</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-[#111] mb-8 leading-[1.1] serif">
          <span className="gradient-brand">ציד לוויתנים.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#444] max-w-2xl leading-relaxed font-light mb-12">
          קריאה לשינויי עומק ברגע מכונן. התשתיות המוסדיות והאזרחיות שפעלו בעבר אינן מספקות מענה. במקום עוד תיקון קוסמטי, נדרש תהליך יסודי המשרטט מחדש את קווי המתאר הלאומיים.
        </p>

        <a href="#methodology" className="inline-flex items-center gap-3 text-[15px] font-bold text-[#111] pb-1 border-b-2 border-[#111] hover:text-[#555] hover:border-[#555] transition-colors">
          למתודולוגיה המלאה
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </div>
    </section>
  );
}
