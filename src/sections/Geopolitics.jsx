import React from 'react';
import data from '../content/data.json';

export default function Geopolitics() {
  const { title, subtitle, paragraphs, pullQuote } = data.geopolitics;

  return (
    <section id="geopolitics" className="py-24 px-6 section-sand minimal-border-t">
      <div className="magazine-col">
        {/* Illustration */}
        <div className="flex justify-center mb-16 fade-in-up">
          <img src="/geo_globe.png" alt="Geopolitics Globe" className="h-40 md:h-56 mix-blend-multiply opacity-80" />
        </div>

        {/* Header */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#d3bca1]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#8c7457] uppercase">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2a231b] mb-8">{title}</h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-[17px] md:text-[18px] text-[#4a4136] leading-[1.8] fade-in-up stagger-1">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
          ))}
        </div>

        {/* Pull Quote */}
        {pullQuote && (
          <div className="pull-quote my-16 border-r-4 border-[#8c7457] text-[#2a231b] fade-in-up stagger-2">
            {pullQuote}
          </div>
        )}
      </div>
    </section>
  );
}
