import React from 'react';
import EducationChart from '../components/charts/EducationChart';
import TransportationChart from '../components/charts/TransportationChart';
import SecurityChart from '../components/charts/SecurityChart';

const examples = [
  {
    title: 'חינוך',
    statusQuo: 'תקציב החינוך זינק פי 4 בעשרים השנים האחרונות (ל-92.2 מיליארד ש"ח). שכר המורים גבוה ביחס ל-OECD ומספר התלמידים למורה ירד. אך התוצאה? קיפאון בהישגים הבינלאומיים (PISA) והפערים החברתיים הגדולים במערב.',
    whale: 'משרד החינוך כאופרטור ריכוזי. משרד החינוך הוא המעסיק הישיר והמנהל הבלעדי של מאות אלפי מורים ובתי ספר, מבנה שלא מאפשר תגמול על הישגים או התאמה לצרכים מקומיים, ומנוהל ע"י ארגוני עובדים החוסמים כל גמישות ניהולית.',
    solution: 'פירוק הריכוזיות. הפסקת היות משרד החינוך האופרטור, העברת ניהול בתי הספר והעסקת המורים לרשויות המקומיות (או רשתות), ומעבר מתקצוב של תשומות (שעות) למדידה על בסיס תפוקות (הישגים, צמצום פערים).',
    chart: <EducationChart />
  },
  {
    title: 'ביטחון אישי',
    statusQuo: 'ישראל סובלת מכלכלת חוסר-ביטחון: מאות אלפי נפגעי עבירה, גניבות רכב מזנקות שגוררות התייקרות של 37% בפרמיות הביטוח, ופרוטקשן שמתגלגל למחירי הדיור. האזרח משלם גם למדינה וגם למשפחות הפשע.',
    whale: 'קריסת "פירמידת ההרתעה" (ודאות ומיידיות). התהליך המשפטי נמרח שנים, המשטרה נמדדת לפי מספר תיקים שנפתחו במקום לפי "זמן סגירת מעגל", ולעבריין משתלם כלכלית לקחת את הסיכון כי ההון הפלילי נשאר אצלו.',
    solution: 'ציד ההון הפלילי וביזור. הקמת זרוע אכיפה כלכלית-ריבונית שתתמקד בחילוט נכסים מהיר; מעבר למדידה לאומית של "זמן תגובה וסגירת מעגל"; וביזור משטרתי כך שמפקדי מרחבים יהיו אחראים ישירות כלפי הקהילה.',
    chart: <SecurityChart />
  },
  {
    title: 'תחבורה ציבורית',
    statusQuo: 'השקעות עתק וסבסוד שזינק פי 4 הובילו לתוצאה עגומה: כמות הנסועה בתחבורה ציבורית קפאה במקום. בינתיים, הגודש בכבישים גורם למשק אובדן תוצר של כ-40 מיליארד ש"ח בשנה.',
    whale: 'מלכודת ההכנסות וניהול ריכוזי. המדינה "מכורה" להכנסות ממיסי רכב (כ-45 מיליארד ש"ח בשנה) ומשרד התחבורה מנהל בצורה ריכוזית ובלתי יעילה אלפי קווים, כשחלקם נוסעים ריקים עם סבסוד של מאות שקלים לנוסע.',
    solution: 'ביזור למטרופולינים ולרשויות. ניתוק התלות הפיסקלית, ביטול קווי הרפאים המסובסדים, והעברת הסמכות (והאחריות) לתכנון וניהול התחבורה אל הרשויות המקומיות, שיימדדו ביעילות ובקיצור זמני הנסיעה.',
    chart: <TransportationChart />
  },
  {
    title: 'שירות המדינה והשלטון המקומי',
    statusQuo: 'השירות הציבורי סובל מסרבול אדיר, שבו תהליכי מינוי לוקחים חודשים, מנהלים חסרי גמישות, והקידום מתבצע על פי ותק ולא על פי כישרון או ביצועים.',
    whale: 'תקשי"ר ארכאי ונציבות ריכוזית. המערכת מבוססת על חוקים ישנים שנועדו להגן על העובד אך פוגעים בתוצאה, במקביל לתלות מוחלטת של רשויות מקומיות בתקציבי ממשלה המועברים "בטפטופים".',
    solution: 'פירוק הנציבות לחלוטין. חקיקת חוק שירות מדינה חדש המבוסס על מצוינות, גמישות ניהולית ומדידת ביצועים. במקביל – איחוד רשויות חלשות למרחבים מוניציפליים חזקים ועצמאיים.',
    chart: null
  }
];

export default function Examples() {
  return (
    <section id="examples" className="py-24 px-6 minimal-border-t bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 fade-in-up">
          <span className="text-[12px] font-bold tracking-widest text-brand-pink mb-4 block">מקרי הבוחן</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-6 serif">
            איך נראית המערכת כיום?
          </h2>
          <p className="text-lg text-[#555] max-w-2xl leading-relaxed">
            כדי לפתור את המשבר, חייבים לזהות את הבעיה המבנית האמיתית (הלוויתן). אלו דוגמאות בולטות לכשל המבני שמחייב פירוק והרכבה, ולא רק תוספת תקציב.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {examples.map((ex, i) => (
            <div key={i} className="group flex flex-col h-full fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-3xl font-bold text-[#111] mb-8 serif pb-4 minimal-border-b border-black">
                {ex.title}
              </h3>
              
              <div className="space-y-8 text-[16px] leading-relaxed flex-grow">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#f5f5f5] text-[#555] text-[12px] font-bold mb-3 rounded-sm">הסטטוס קוו</span>
                  <p className="text-[#333]">{ex.statusQuo}</p>
                </div>
                
                <div className="pl-4 border-r-4 border-brand-pink bg-[#fff5f8] p-4">
                  <span className="text-[13px] font-bold text-brand-pink block mb-2">הלוויתן (הכשל החוסם)</span>
                  <p className="text-[#111] font-medium">{ex.whale}</p>
                </div>

                <div className="pl-4 border-r-4 border-brand-blue bg-[#f0fbpc] p-4" style={{ backgroundColor: '#f2fcfe' }}>
                  <span className="text-[13px] font-bold text-brand-blue block mb-2">הפיתרון המבני</span>
                  <p className="text-[#111] font-bold">{ex.solution}</p>
                </div>
              </div>

              {ex.chart && (
                <div className="mt-10 w-full">
                  {ex.chart}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
