import React from 'react';

const pastWhales = [
  {
    title: 'רשות השידור ותאגיד "כאן"',
    desc: 'הפירוק של רשות השידור היה מהלך נועז שזכה להתנגדות רבה. התוצאה: קמה מערכת תקשורת עצמאית ויעילה בהרבה, חפה משחיתות כרונית, שהביאה לקפיצת מדרגה באמון הציבורי ובאיכות התוכן.'
  },
  {
    title: 'משק המים והקמת רשות המים',
    desc: 'העברת ניהול המים מידי הרשויות לגוף מקצועי הובילה למהפכה. מהלכים אמיצים כמו העלאת התעריף והשקעה אדירה בהתפלה הפכו את ישראל ממדינה במשבר מים למעצמה אזורית.'
  },
  {
    title: 'חוק ביטוח בריאות ממלכתי',
    desc: 'ויכוח חריף בשנות ה-90 עם קופת חולים כללית וההסתדרות, שעלה במחיר פוליטי עצום, הוביל למערכת בריאות שוויונית ואיתנה מהיעילות בעולם, שמוכיחה את עצמה כבר עשרות שנים.'
  }
];

export default function PastWhales() {
  return (
    <section className="py-24 px-6 bg-[#111] text-white minimal-border-t">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 serif text-[#f5f5f5]">לוויתני עבר שניצודו</h2>
          <p className="text-[#aaa] text-lg max-w-2xl leading-relaxed">
            ההיסטוריה הישראלית מספקת דוגמאות מוצלחות ללוויתנים שניצודו. אלו היו מהלכים קשים, שנויים במחלוקת ויקרים בטווח הקצר, אך חוללו שינוי עמוק ושיפור ממשי בטווח הארוך:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastWhales.map((whale, i) => (
            <div key={i} className="p-8 border border-[#333] hover:border-brand-blue transition-colors rounded-sm fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-brand-blue font-bold mb-4 opacity-50 text-2xl serif">0{i+1}</div>
              <h3 className="text-xl font-bold mb-3 serif text-[#fff]">{whale.title}</h3>
              <p className="text-[#888] text-[15px] leading-relaxed">
                {whale.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
