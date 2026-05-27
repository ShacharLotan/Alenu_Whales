import React from 'react';
import EducationChart from './charts/EducationChart';
import TransportationChart from './charts/TransportationChart';
import SecurityChart from './charts/SecurityChart';
import data from '../content/data.json';

const chartsMap = {
  EducationChart: <EducationChart />,
  TransportationChart: <TransportationChart />,
  SecurityChart: <SecurityChart />
};

export default function Examples() {
  return (
    <section id="examples" className="py-24 px-6 minimal-border-t bg-white">
      <div className="magazine-container relative">
        <div className="marginalia top-0 hidden lg:block">
          <strong>מקרי הבוחן</strong>
          <p className="mt-2 text-sm">ניתוח של הלוויתנים התשתיתיים שחונקים את הצמיחה הישראלית, עם פתרונות מבוססי שוק.</p>
        </div>

        <div className="mb-20 fade-in-up">
          <span className="text-[12px] font-bold tracking-widest text-brand-pink mb-4 block lg:hidden">מקרי הבוחן</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-6 serif">
            איך נראית המערכת כיום?
          </h2>
          <p className="text-lg text-[#555] leading-relaxed drop-cap">
            כדי לפתור את המשבר, חייבים לזהות את הבעיה המבנית האמיתית (הלוויתן). אלו דוגמאות בולטות לכשל המבני שמחייב פירוק והרכבה, ולא רק תוספת תקציב.
          </p>
        </div>

        <div className="space-y-32">
          {data.examples.map((ex, i) => (
            <div key={i} className="group flex flex-col fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-3xl font-bold text-[#111] mb-8 serif pb-4 minimal-border-b border-black">
                {ex.title}
              </h3>
              
              <div className="space-y-8 text-[17px] leading-relaxed">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#f5f5f5] text-[#555] text-[12px] font-bold mb-3 rounded-sm">הסטטוס קוו</span>
                  <p className="text-[#333]">{ex.statusQuo}</p>
                </div>
                
                <div className="pl-5 border-r-4 border-brand-pink bg-[#fff5f8] p-5">
                  <span className="text-[13px] font-bold text-brand-pink block mb-2">הלוויתן (הכשל החוסם)</span>
                  <p className="text-[#111] font-medium">{ex.whale}</p>
                </div>

                <div className="pl-5 border-r-4 border-brand-blue bg-[#f2fcfe] p-5">
                  <span className="text-[13px] font-bold text-brand-blue block mb-2">הפיתרון המבני</span>
                  <p className="text-[#111] font-bold">{ex.solution}</p>
                </div>
              </div>

              {ex.chart && chartsMap[ex.chart] && (
                <div className="mt-12 w-full max-w-3xl mx-auto">
                  {chartsMap[ex.chart]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
