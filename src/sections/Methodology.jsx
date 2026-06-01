import React from 'react';
import data from '../content/data.json';

export default function Methodology() {
  const { priceOfStatusQuo, whatIsWhale, howToIdentify, howToHunt } = data.methodology;

  return (
    <section id="methodology" className="py-24 px-6 section-light minimal-border-t">
      <div className="magazine-col">

        {/* Whale illustration */}
        <div className="flex justify-center mb-20 fade-in-up">
          <img src="/whale.png" alt="Whale Tail" className="h-40 md:h-56 opacity-85 mix-blend-multiply" />
        </div>

        {/* Price of Status Quo */}
        <div className="mb-24 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-8">{priceOfStatusQuo.title}</h2>
          <div className="space-y-6 text-[17px] md:text-[18px] text-[#444] leading-[1.8]">
            {priceOfStatusQuo.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
            ))}
          </div>
        </div>

        <div className="section-rule mb-24"></div>

        {/* What is a Whale */}
        <div className="mb-24 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-8">{whatIsWhale.title}</h2>
          <div className="space-y-6 text-[17px] md:text-[18px] text-[#444] leading-[1.8]">
            {whatIsWhale.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Pull quote */}
          <div className="pull-quote my-12">
            ככל שהמחיר הפוליטי גבוה יותר, כך גדל הסיכוי שמדובר במהלך חיוני.
          </div>
        </div>

        <div className="section-rule mb-24"></div>

        {/* How to identify */}
        <div className="mb-24 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-10">{howToIdentify.title}</h2>
          <div className="space-y-0">
            {howToIdentify.points.map((item, i) => (
              <div key={i} className="flex gap-5 py-6 border-b border-[#eee] last:border-b-0">
                <span className="text-3xl font-black text-[#e0e0e0] leading-none mt-1 shrink-0 w-10 text-center">{i + 1}</span>
                <div>
                  <h4 className="text-[17px] font-bold text-[#1a1a1a] mb-1">{item.title}</h4>
                  <p className="text-[16px] text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-rule mb-24"></div>

        {/* How to hunt */}
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-10">{howToHunt.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howToHunt.points.map((item, i) => (
              <div key={i} className="p-6 bg-[#fafafa] border border-[#eee] rounded-md">
                <div className="text-[#FF6B9E] font-black text-sm mb-3">שלב {i + 1}</div>
                <h4 className="text-[16px] font-bold text-[#1a1a1a] mb-2">{item.title}</h4>
                <p className="text-[15px] text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
