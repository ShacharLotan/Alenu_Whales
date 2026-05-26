import React from 'react';

const solutions = [
  {
    num: '01',
    title: 'ביזור ריבוני',
    sub: 'רשויות מטרופוליניות לביטחון, תחבורה ודיור',
    body: 'הקמת 8-10 מרחבי ניהול מטרופוליניים בעלי אחריות ישירה. המשטרה תהפוך לגוף לאומי ממוקד בפשיעה חמורה. הסמכות על חיי היום-יום — תעבור למי שנמצא בשטח. מי שסופג את הכשל חייב לקבל כלים לשנות אותו.',
    color: '#1AA3D4',
  },
  {
    num: '02',
    title: 'מס מ-אפס',
    sub: 'ביטול 94 מיליארד ש"ח בפטורים, הורדת מס ישיר',
    body: 'פישוט רדיקלי של מערכת המס. ביטול הפטורים המעוותים בתמורה להורדת שיעורי מס ההכנסה. הגדלת הנטו של המעמד היצרני. מערכת שקופה ומובנת — ללא חורים שדורשים צבא של יועצי מס.',
    color: '#E64C80',
  },
  {
    num: '03',
    title: 'גמילה ממלכודות הכנסה',
    sub: 'מס שימוש חכם במקום מס בעלות',
    body: 'ביטול הדרגתי של מס הקנייה על רכב. מעבר למס נסועה וגודש דיפרנציאלי. צביעת הכנסות: כל שקל ממס רכב חוזר לתחבורה ציבורית בלבד. הפיכת הדיור בפריפריה לאופציה ריאלית.',
    color: '#f97316',
  },
  {
    num: '04',
    title: 'חוק בכר לענף הרכב',
    sub: 'הפרדה מבנית: יבוא או ליסינג, לא שניהם',
    body: 'חיוב יבואני רכב לבחור: סיטונאים או קמעונאים. פירוק השליטה האנכית. פתיחת השוק ליבוא מקביל ללא חסמים. שקיפות: חיוב כל יבואן מעל 8% נתח שוק לפרסם דוחות כספיים מלאים.',
    color: '#eab308',
  },
  {
    num: '05',
    title: 'SLA שיפוטי',
    sub: 'תיק פלילי — מקסימום 12 חודשים',
    body: 'חוק-מסגרת הקובע אמנת שירות למערכת המשפט. קיצור דרמטי של ההליך. שופטים ותובעים נמדדים על יעילות, לא רק על איכות משפטית. השבת המיידיות ככלי הרתעה מרכזי.',
    color: '#1AA3D4',
  },
  {
    num: '06',
    title: 'אכיפה כלכלית-ריבונית',
    sub: 'מאבק בפשיעה דרך הכסף, לא רק דרך האלימות',
    body: 'זרוע קבועה למאבק כלכלי בפשיעה: חילוט נכסים, חסימת מכרזים, שיתוף מידע בזמן אמת. לא נמדדת במעצרים — אלא בשווי הנכסים שחולטו ובירידה בתזרים הפלילי.',
    color: '#E64C80',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-32 border-t border-white/5 grid-pattern">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-[11px] font-mono text-[#1AA3D4] tracking-[0.2em] uppercase mb-8">המתווה</div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          ציד הלווייתנים:<br/><span className="gradient-text">שישה מהלכים רדיקליים</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed font-light">
          שינוי שורשי אינו דורש "עוד מאותו הדבר", אלא ארגון מחדש של כללי המשחק. 
          אלו אינם קיצוצים רוחביים — אלא החלפה מבנית של המנגנונים הקיימים.
        </p>

        <div className="space-y-px">
          {solutions.map((s) => (
            <div key={s.num} className="glass-card p-8 md:p-10 group hover:bg-white/[0.04] transition-all border-r-2" style={{ borderColor: s.color }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="shrink-0">
                  <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.num}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: s.color }}>{s.sub}</p>
                  <p className="text-[15px] text-white/50 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug max-w-3xl mx-auto" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "ציד לווייתנים אמיתי תמיד מייצר התנגדות רועשת — כי הוא משנה את חלוקת הכוח. ללא התנגדות, ככל הנראה לא מדובר בשינוי שורשי."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
