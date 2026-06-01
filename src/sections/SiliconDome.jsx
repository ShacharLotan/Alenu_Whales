import React from 'react';
import ExpandableSection from '../components/ExpandableSection';
import data from '../content/data.json';

export default function SiliconDome() {
  const { title, subtitle, paragraphs, pullQuote, marqss } = data.siliconDome;

  return (
    <section id="silicon-dome" className="py-24 px-6 section-tech">
      <div className="magazine-col">
        {/* Illustration */}
        <div className="flex justify-center mb-16 fade-in-up">
          <img src="/silicon_dome.png" alt="Silicon Dome" className="h-40 md:h-56 invert opacity-80" />
        </div>

        {/* Header */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#5CE1E6]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#5CE1E6] uppercase">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{title}</h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-[17px] md:text-[18px] text-[#b0bac5] leading-[1.8] fade-in-up stagger-1 mb-20">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap text-white" : ""}>{p}</p>
          ))}
        </div>

        {/* MARQSS Grid */}
        <div className="mb-20 fade-in-up stagger-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">ששת תחומי MARQSS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marqss.map((item, i) => (
              <div key={i} className="tech-card p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#5CE1E6] to-transparent opacity-50"></div>
                <h4 className="text-[18px] font-bold text-white mb-3">{item.title}</h4>
                <p className="text-[15px] text-[#a0aab5] leading-relaxed mb-4">{item.desc}</p>
                <ExpandableSection 
                  title="משמעות גלובלית" 
                  content={item.expanded} 
                  theme="dark" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        {pullQuote && (
          <div className="pull-quote my-16 border-r-4 border-[#5CE1E6] text-white fade-in-up stagger-3">
            {pullQuote}
          </div>
        )}
      </div>
    </section>
  );
}
