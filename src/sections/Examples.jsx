import React from 'react';
import EducationChart from '../components/charts/EducationChart';
import TransportationChart from '../components/charts/TransportationChart';
import SecurityChart from '../components/charts/SecurityChart';
import data from '../content/data.json';

const chartsMap = {
  EducationChart: <EducationChart />,
  TransportationChart: <TransportationChart />,
  SecurityChart: <SecurityChart />
};

export default function Examples() {
  return (
    <section id="examples" className="py-24 px-6 section-light minimal-border-t">
      <div className="magazine-col">

        {/* Section header */}
        <div className="mb-20 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#FF6B9E]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#888]">מקרי הבוחן</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
            הלוויתנים שחוסמים את ישראל
          </h2>
          <p className="text-lg text-[#666] leading-[1.8]">
            כדי לפתור את המשבר, חייבים לזהות את הבעיה המבנית האמיתית. אלו דוגמאות בולטות לכשל מבני שמחייב פירוק והרכבה מחדש — ולא רק תוספת תקציב.
          </p>
        </div>

        {/* Examples list */}
        <div className="space-y-20">
          {data.examples.map((ex, i) => (
            <article key={i} className="whale-card p-6 md:p-10 rounded-lg fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              
              {/* Title */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-black text-[#f0f0f0] leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a]">
                  {ex.title}
                </h3>
              </div>
              
              {/* Status Quo */}
              <div className="mb-6">
                <span className="tag tag-neutral mb-3">הסטטוס קוו</span>
                <p className="text-[16px] text-[#444] leading-[1.8] mt-3">{ex.statusQuo}</p>
              </div>
              
              {/* The Whale */}
              <div className="mb-6 border-r-4 border-[#FF6B9E] bg-[#fff5f8] p-5 rounded-l-md">
                <span className="tag tag-pink mb-2">🐋 הלוויתן — הכשל החוסם</span>
                <p className="text-[16px] text-[#1a1a1a] leading-[1.8] font-medium mt-3">{ex.whale}</p>
              </div>

              {/* The Solution */}
              <div className="border-r-4 border-[#5CE1E6] bg-[#f0fcfe] p-5 rounded-l-md">
                <span className="tag tag-blue mb-2">הפתרון המבני</span>
                <p className="text-[16px] text-[#1a1a1a] leading-[1.8] font-bold mt-3">{ex.solution}</p>
              </div>

              {/* Chart */}
              {ex.chart && chartsMap[ex.chart] && (
                <div className="mt-10">
                  {chartsMap[ex.chart]}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
