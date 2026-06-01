import React from 'react';
import data from '../content/data.json';

export default function HebrewSovereignty() {
  const { title, subtitle, paragraphs, pullQuote } = data.hebrewSovereignty;

  return (
    <section id="hebrew-sovereignty" className="py-24 px-6 section-navy">
      <div className="magazine-col">
        {/* Illustration */}
        <div className="flex justify-center mb-16 fade-in-up">
          <img src="/hebrew_sovereignty.png" alt="Hebrew Sovereignty Symbol" className="h-40 md:h-56 invert opacity-80" />
        </div>

        {/* Header */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#FF6B9E]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#FF6B9E] uppercase">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{title}</h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-[17px] md:text-[18px] text-[#b0bac5] leading-[1.8] fade-in-up stagger-1">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap text-white" : ""}>{p}</p>
          ))}
        </div>

        {/* Pull Quote */}
        {pullQuote && (
          <div className="pull-quote my-16 border-r-4 border-[#FF6B9E] text-white fade-in-up stagger-2">
            {pullQuote}
          </div>
        )}
      </div>
    </section>
  );
}
