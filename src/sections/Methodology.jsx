import React from 'react';
import data from '../content/data.json';

export default function Methodology() {
  const { priceOfStatusQuo, whatIsWhale, howToIdentify, howToHunt } = data.methodology;

  return (
    <section id="methodology" className="py-20 px-6 minimal-border-t bg-white relative">
      <div className="magazine-container relative">
        <div className="marginalia top-0 hidden lg:block">
          <strong>המתודולוגיה</strong>
          <p className="mt-2 text-sm">הבסיס הרעיוני שמגדיר מהו שינוי מבני ואיך להבדיל בינו לבין קוסמטיקה פוליטית.</p>
        </div>

        <div className="flex justify-center mb-16 fade-in-up">
          <img src="/whale.png" alt="Whale Tail" className="h-48 md:h-64 opacity-90 mix-blend-multiply" />
        </div>
        
        <div className="mb-20 fade-in-up">
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">{priceOfStatusQuo.title}</h2>
          <div className="space-y-6 text-[18px] text-[#444] leading-relaxed">
            {priceOfStatusQuo.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mb-20 fade-in-up">
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">{whatIsWhale.title}</h2>
          <div className="space-y-6 text-[18px] text-[#444] leading-relaxed">
            {whatIsWhale.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mb-20 p-8 bg-[#fafafa] minimal-border fade-in-up">
          <h3 className="text-2xl font-bold text-[#111] mb-8 serif">{howToIdentify.title}</h3>
          <div className="space-y-8">
            {howToIdentify.points.map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-2xl font-black text-[#ccc] serif">0{i + 1}</span>
                <div>
                  <h4 className="text-[17px] font-bold text-[#111] mb-2">{item.title}</h4>
                  <p className="text-[16px] text-[#555] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up">
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">{howToHunt.title}</h2>
          <div className="space-y-6 text-[18px] text-[#444] leading-relaxed">
            <ul className="list-none space-y-5">
              {howToHunt.points.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-brand-pink font-bold">—</span> 
                  <span><strong>{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
