import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const revenueData = [
  { year: '2021', taxes: 20.8, rmi: 15.5 },
  { year: '2022', taxes: 25.5, rmi: 18.7 },
  { year: '2023', taxes: 14.1, rmi: 7.8 },
];

export default function HousingWhale() {
  return (
    <section id="housing" className="relative py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[11px] font-mono text-[#eab308] tracking-[0.2em] uppercase">לווייתן 04</div>
          <div className="flex-1 h-px bg-gradient-to-l from-[#eab308]/30 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">דיור ותשתיות</h2>
        <p className="text-xl text-[#eab308] font-semibold mb-8">המדינה כספסר קרקעות — מונופול על 93% מהקרקע</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded overflow-hidden">
          {[
            { v: '168', l: 'חודשי עבודה', s: 'לדירה ממוצעת' },
            { v: '93%', l: 'בעלות מדינה', s: 'בקרקעות ישראל' },
            { v: '234K', l: 'דירות חסומות', s: 'בגלל ביוב בלבד' },
            { v: '₪100B+', l: 'הכנסות מנדל"ן', s: '2021-2023 (מיסים+רמ"י)' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.v}</div>
              <div className="text-[13px] text-white/60 font-semibold mb-1">{s.l}</div>
              <div className="text-[11px] text-white/30">{s.s}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <p>כאשר אזרח נדרש להקדיש <strong className="text-white">168 משכורות</strong> בממוצע לרכישת קורת גג, ובערים מרכזיות אף מעל 400 משכורות, אין כאן "כשל שוק" זמני — אלא <strong className="text-white">קריסה מבנית</strong> של החוזה.</p>

          <blockquote className="border-r-2 border-[#eab308] pr-6 my-12 text-xl md:text-2xl font-bold text-white/90 leading-snug" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "המדינה אינה רק המאסדר — היא המרוויחה הגדולה ביותר מעליית המחירים. כל פתרון אמיתי יפער בור בתקציב."
          </blockquote>

          <p><strong className="text-white">הלווייתן הפיסקלי</strong>: בשנים 2021-2023 הצטברו הכנסות ממיסי נדל"ן ל-<strong className="text-white">53.5 מיליארד ש"ח</strong>. העברות מרמ"י: <strong className="text-white">42 מיליארד נוספים</strong>. כשמחירי הדירות עולים, המדינה גוזרת קופון בכל תחנה.</p>

          <p><strong className="text-white">הלווייתן הריכוזי</strong>: רמ"י מנהלת 93% מהקרקעות — מונופול שאין לו אח ורע ב-OECD. כל החלטת תכנון עוברת מסננת בירוקרטית בירושלים. "פרדוקס ה-80/20": <strong className="text-white">80% מזמן הפרויקט מושקע בניירת, 20% בבנייה בפועל.</strong></p>

          <p><strong className="text-white">הלווייתן המוניציפלי</strong>: שיטת הארנונה הופכת תושב ל"נטל" עבור ראש העיר. ארנונה ממגורים: 40-60 ש"ח למ"ר. ממסחר: 200-400 ש"ח. ראשי ערים מתומרצים <strong className="text-white">לחסום דיור</strong> לטובת שטחי מסחר.</p>
        </div>

        <div className="glass-card rounded-lg p-8 mb-16">
          <h3 className="text-lg font-bold text-white mb-2">הכנסות המדינה מנדל"ן (מיליארדי ש"ח)</h3>
          <p className="text-sm text-white/30 mb-8">תלות תקציבית חריפה בשימור רמת מחירים גבוהה</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#e8e6e3' }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', direction: 'rtl' }} formatter={(v) => [`₪${v}B`, '']} />
                <Legend formatter={(v) => v === 'taxes' ? 'מיסי נדל"ן' : 'העברות רמ"י'} />
                <Bar dataKey="taxes" name="taxes" fill="#eab308" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="rmi" name="rmi" fill="#eab308" fillOpacity={0.4} radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>הלווייתן השקוף: ביוב, חשמל ומים</h3>
          <p>השיח הציבורי מתמקד בקרקע ובקבלנים, אבל הלווייתן השקט חונק את שוק הדיור מתחת לאדמה. <strong className="text-white">234,000 יחידות דיור חסומות</strong> בגלל היעדר תשתיות ביוב. עלות הרחבת מט"ש: 6,000-9,000 ש"ח ליחידה בלבד — סכום שנבלע בפטורי ה-27 מיליארד שהמדינה מבזבזת על הגרלות "מחיר למשתכן".</p>
        </div>

        <div className="glass-card rounded-lg overflow-hidden mb-16">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/10">
              <th className="p-4 text-right text-white/40 font-medium">תשתית</th>
              <th className="p-4 text-right text-white/40 font-medium">חסימה</th>
              <th className="p-4 text-right text-white/40 font-medium">חסם מרכזי</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="p-4 text-white font-semibold">ביוב</td><td className="p-4 text-[#eab308]">234,000 יח"ד</td><td className="p-4 text-white/50">חוסר קיבולת במט"שים ומימון חסר</td></tr>
              <tr className="border-b border-white/5"><td className="p-4 text-white font-semibold">חשמל</td><td className="p-4 text-[#eab308]">עשרות אלפים</td><td className="p-4 text-white/50">היעדר קווי הולכה ובנייה בלתי חוקית</td></tr>
              <tr><td className="p-4 text-white font-semibold">מים</td><td className="p-4 text-[#eab308]">משתנה</td><td className="p-4 text-white/50">תעריפים שלא משקפים עלות פיתוח</td></tr>
            </tbody>
          </table>
        </div>

        <div className="glass-card rounded-lg p-8 border-r-2 border-[#eab308]">
          <p className="text-white font-bold text-lg mb-2">השורה התחתונה</p>
          <p className="text-white/50 leading-relaxed">המדינה חייבת להיגמל מהשימוש בקרקע כמקור להכנסות שוטפות. ביזור סמכויות ל-10-15 מרחבי ניהול, שינוי מודל הארנונה כך שתושב חדש יהיה נכס פיסקלי, ופירוק התמריץ של רמ"י לספסור.</p>
        </div>
      </div>
    </section>
  );
}
