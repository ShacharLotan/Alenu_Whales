import React from 'react';
import ExpandableSection from '../components/ExpandableSection';
import data from '../content/data.json';

export default function PastWhales() {
  return (
    <section id="past-whales" className="py-24 px-6 section-dark">
      <div className="magazine-col">
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#5CE1E6]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#5CE1E6]">הוכחות היסטוריות</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#f5f5f5]">לוויתני עבר שניצודו</h2>
          <p className="text-[#999] text-lg leading-[1.8] drop-cap">
            ההיסטוריה הישראלית מספקת דוגמאות מוצלחות ללוויתנים שניצודו. אלו היו מהלכים קשים, שנויים במחלוקת ויקרים בטווח הקצר — אך חוללו שינוי עמוק ושיפור ממשי בטווח הארוך.
          </p>
        </div>

        <div className="space-y-0">
          {data.pastWhales.map((whale, i) => (
            <div key={i} className="py-10 border-b border-[#2a2a2a] last:border-b-0 fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-[#222] leading-none">0{i+1}</span>
                <h3 className="text-2xl font-bold text-[#fff]">{whale.title}</h3>
              </div>
              <p className="text-[#999] text-[17px] leading-[1.8] mr-14">
                {whale.desc}
              </p>
              
              <div className="mr-14">
                {whale.expanded && (
                  <ExpandableSection 
                    title={whale.expanded.title} 
                    content={whale.expanded.content} 
                    theme="dark" 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
