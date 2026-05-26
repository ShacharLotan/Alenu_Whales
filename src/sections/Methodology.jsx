import React from 'react';

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 px-6 minimal-border-t bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-16 fade-in-up">
          <img src="/whale.png" alt="Whale Tail" className="h-48 md:h-64 opacity-90 mix-blend-multiply" />
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">מחיר הסטטוס קוו</h2>
          <div className="space-y-6 text-[17px] text-[#444] leading-relaxed">
            <p>
              הסטטוס קוו הישראלי הפך למנגנון משמר-כשל. תחת הכותרת של "יציבות", מושקעים סכומי עתק ומאמץ אנושי בלתי נתפס, בעוד התמורה הציבורית הולכת ופוחתת. משלמים יותר ומקבלים פחות.
            </p>
            <p>
              "פשרה כמדיניות" הפכה לכלי שבעזרתו אנחנו מסבסדים את הנוחות בהווה באמצעות שאיבת משאבים מן העתיד. הלוואות, דחיית הכרעות, רפורמות חלקיות – כל אלה מקנים שקט זמני במחיר של הגדלת עומק המשבר שיכה בילדינו. נדרשת תודעה אזרחית שמבינה כי הימנעות מעימותים אינה אחריות, אלא חולשה.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">מהו לוויתן?</h2>
          <div className="space-y-6 text-[17px] text-[#444] leading-relaxed">
            <p>
              לוויתן הוא מהלך עומק רעיוני, מוסדי או מבני שיכול לחולל שינוי שורשי באחד ממוקדי הכשל המרכזיים של המדינה. הוא אינו עוד רפורמה, אלא שינוי בסדר עדיפויות ובעקרונות ההפעלה.
            </p>
            <p>
              ניסיון "לצוד לוויתן" ייתקל בוודאות בהתנגדות מהמערכת ומקבוצות אינטרס. אם צעד כלשהו היה קל, הוא כבר היה קורה. ככל שהמחיר הפוליטי גבוה יותר, כך גדל הסיכוי שמדובר במהלך חיוני.
            </p>
          </div>
        </div>

        <div className="mb-16 p-8 bg-[#fafafa] minimal-border">
          <h3 className="text-2xl font-bold text-[#111] mb-8 serif">כיצד מזהים לוויתן אמיתי?</h3>
          <div className="space-y-8">
            {[
              { title: 'נגיעה בשאלות יסוד', desc: 'חינוך, קרקעות, שירות ציבורי, ביטחון אישי. שדות בהם הרעיון המסדר איבד מתוקפו.' },
              { title: 'השפעה רחבה', desc: 'לא פעולה על סקטור בודד, אלא אירוע לאומי שפוגש את כולם.' },
              { title: 'שינוי מבני', desc: 'הלוויתן אינו מוסיף או גורע משאבים אלא מגדיר מחדש את המערכת בשיטה של פירוק והרכבה.' },
              { title: 'תודעה חדשה', desc: 'יוצר "מבחן המובן מאליו". האם שירות הוא מובן מאליו כמו מים בברז או שהוא מטרד הדורש ניהול פרטי?' },
              { title: 'מחיר מוסדי גבוה', desc: 'התנגדות רועשת לשינוי היא סימן חיובי לכך שהמהלך נוגע בליבת מוקדי הכוח.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-2xl font-black text-[#ccc] serif">0{i + 1}</span>
                <div>
                  <h4 className="text-[17px] font-bold text-[#111] mb-2">{item.title}</h4>
                  <p className="text-[15px] text-[#555] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#111] mb-6 serif">איך צדים לוויתן?</h2>
          <div className="space-y-6 text-[17px] text-[#444] leading-relaxed">
            <ul className="list-none space-y-4">
              <li className="flex gap-3"><span className="text-[#111] font-bold">—</span> <strong>השלב התפיסי:</strong> הכרה כנה בכך שתחום ליבתי הרקיב ואינו בר תיקון.</li>
              <li className="flex gap-3"><span className="text-[#111] font-bold">—</span> <strong>ניסוח מחדש:</strong> לא "איך משפרים", אלא כיצד בונים מחדש מאפס.</li>
              <li className="flex gap-3"><span className="text-[#111] font-bold">—</span> <strong>מריבה עם מוקדי כוח:</strong> ללא התנגדות, לא מדובר בלוויתן. הנהנים מהסדר הישן ייאבקו.</li>
              <li className="flex gap-3"><span className="text-[#111] font-bold">—</span> <strong>חלופה קונקרטית:</strong> הצעה ברורה של מערכת אחרת שתתמודד עם בעיות השורש.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
