import React from 'react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-[11px] font-mono text-[#1AA3D4] tracking-[0.2em] uppercase mb-8">המניפסט</div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
          מדינת ישראל מצויה ב<span className="gradient-text">רגע מכונן</span>.
        </h2>

        <div className="space-y-8 text-lg text-white/60 leading-[1.9] font-light">
          <p>
            העוצמה החומרית של ישראל הגיעה לשיאים חסרי תקדים — תוצר לאומי העולה על חצי טריליון דולר, 
            יתרות מטבע חוץ שעוברות את רף 200 מיליארד הדולר. אבל התשתיות המוסדיות, הכלכליות והאזרחיות 
            שפעלו בעבר אינן מצליחות לספק מענה לאתגרים הנוכחיים.
          </p>

          <blockquote className="border-r-2 border-[#1AA3D4] pr-6 my-12 text-2xl md:text-3xl font-bold text-white leading-snug" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "תקציב המדינה אינו מסמך חשבונאי. הוא המוצר המשמעותי ביותר שאזרחי ישראל רוכשים כקולקטיב בכל שנה — מכספם, ולטובתם."
          </blockquote>

          <p>
            במסגרת רעיונית זו, <strong className="text-white">המיסוי הוא המחיר</strong> — הכסף שיורד בתלוש, המע"מ בסופר, 
            וגם <em>מס האזרחות</em>: כל הזמן, הכסף ומשאבי החיים המושקעים בבירוקרטיה. <strong className="text-white">המוצרים הציבוריים הם התמורה</strong> — חינוך, בריאות, תשתיות, תחבורה וביטחון אישי.
          </p>

          <p>
            <strong className="text-white">מבחן המובן מאליו</strong>: מוצר תקין הוא מוצר שפשוט עובד. אם אזרח נדרש לשלם פעמיים — 
            פעם במיסים ופעם בביטוח פרטי, מורה פרטי, או זמן יקר בפקקים — מדובר 
            ב<span className="gradient-text-rose font-semibold">חוזה מופר</span> ובמוצר פגום.
          </p>

          <div className="glass-card rounded-lg p-8 my-12">
            <p className="text-white/40 text-sm font-medium mb-6 tracking-wide">חמשת המוצרים הציבוריים — ומבחן המובן מאליו</p>
            <div className="space-y-4">
              {[
                { name: 'ביטחון אישי', fail: 'אזרח בונה חומות, משלם פרוטקשן, ומתקין מערכות איתור — כי הריבון אינו מגן.' },
                { name: 'תחבורה', fail: 'אזרח מבזבז 4 שעות ביום בפקקים ומשלם 45 מיליארד ₪ בשנה על מיסי רכב — כי אין חלופה.' },
                { name: 'דיור', fail: 'אזרח מקדיש 168 משכורות לדירה — כי המדינה מתנהגת כספסר קרקעות.' },
                { name: 'חינוך', fail: 'אזרח משלם למורה פרטי כי המערכת לא מלמדת — כי הכשל מתוגמל.' },
                { name: 'בריאות', fail: 'אזרח ממתין חודשים לניתוח ורץ לפרטי — כי המערכת הציבורית עמוסה.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start py-3 border-b border-white/5 last:border-0">
                  <span className="text-[#E64C80] text-lg mt-0.5">✕</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.name}</span>
                    <span className="text-white/40 text-sm mr-2">— {item.fail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            השיח הציבורי תקוע ב<strong className="text-white">ריב אופקי</strong> — שבט נגד שבט, ימין נגד שמאל, חילונים נגד דתיים — 
            בזמן שהלוויתנים המבניים ממשיכים לטרוף את המדינה מבפנים. 
            תנועת <strong className="text-white">עלינו</strong> מציעה <span className="gradient-text font-semibold">ריב אנכי</span>: 
            האזרח מול שיטה שבורה. לא נגד קבוצה. נגד מנגנון.
          </p>

          <p className="text-2xl font-bold text-white mt-12" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            האחריות היא עלינו. הציד מתחיל עכשיו.
          </p>
        </div>
      </div>
    </section>
  );
}
