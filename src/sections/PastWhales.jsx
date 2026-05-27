import React from 'react';
import data from '../content/data.json';

export default function PastWhales() {
  return (
    <section className="py-24 px-6 bg-[#111] text-white minimal-border-t">
      <div className="magazine-container relative">
        <div className="marginalia top-0 hidden lg:block !border-[#5CE1E6] !text-[#888]">
          <strong className="text-white">ניצחונות עבר</strong>
          <p className="mt-2 text-sm text-[#888]">הוכחות לכך שציד לוויתנים אפשרי למרות המחיר הפוליטי.</p>
        </div>

        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 serif text-[#f5f5f5]">לוויתני עבר שניצודו</h2>
          <p className="text-[#aaa] text-lg leading-relaxed drop-cap">
            ההיסטוריה הישראלית מספקת דוגמאות מוצלחות ללוויתנים שניצודו. אלו היו מהלכים קשים, שנויים במחלוקת ויקרים בטווח הקצר, אך חוללו שינוי עמוק ושיפור ממשי בטווח הארוך:
          </p>
        </div>

        <div className="space-y-12">
          {data.pastWhales.map((whale, i) => (
            <div key={i} className="pb-8 border-b border-[#333] fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-brand-blue font-bold mb-2 opacity-80 text-xl serif">0{i+1}</div>
              <h3 className="text-2xl font-bold mb-4 serif text-[#fff]">{whale.title}</h3>
              <p className="text-[#aaa] text-[17px] leading-relaxed">
                {whale.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
