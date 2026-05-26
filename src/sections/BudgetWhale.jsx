import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const taxExemptions = [
  { name: 'פנסיוני', value: 25.1, color: '#E64C80' },
  { name: 'נקודות זיכוי', value: 13.7, color: '#FB7185' },
  { name: 'השתלמות', value: 7.6, color: '#f97316' },
  { name: 'מס שבח', value: 6.3, color: '#eab308' },
  { name: 'עידוד השקעות', value: 5.5, color: '#1AA3D4' },
  { name: 'פטור מע"מ', value: 4.7, color: '#4FD1C5' },
  { name: 'ביטוח לאומי', value: 3.7, color: '#0e6b8c' },
  { name: 'שכ"ד מגורים', value: 3.2, color: '#065a7a' },
];

export default function BudgetWhale() {
  return (
    <section id="budget" className="relative py-32 border-t border-white/5 grid-pattern">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[11px] font-mono text-[#f97316] tracking-[0.2em] uppercase">לווייתן 03</div>
          <div className="flex-1 h-px bg-gradient-to-l from-[#f97316]/30 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">התקציב והמיסוי</h2>
        <p className="text-xl text-[#f97316] font-semibold mb-8">94 מיליארד ש"ח בפטורים — תקציב צללים מחוץ לרדאר</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded overflow-hidden">
          {[
            { v: '₪94B', l: 'הטבות מס', s: 'תקציב צללים שנתי' },
            { v: '18%', l: 'מכלל ההכנסות', s: 'ללא בקרה ציבורית' },
            { v: '18%', l: 'מע"מ ב-2025', s: 'עלה כדי לכסות חורים' },
            { v: '₪5K', l: '"מס שקט"', s: 'אובדן נטו שנתי לעובד' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.v}</div>
              <div className="text-[13px] text-white/60 font-semibold mb-1">{s.l}</div>
              <div className="text-[11px] text-white/30">{s.s}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <p>מערכת המס הישראלית רוויה ב"חורים" המכונים "הוצאות מס" — פטורים, זיכויים והנחות בהיקף של כ-<strong className="text-white">94 מיליארד ש"ח בשנה</strong>. אלו "תקציב צללים" שאינו עובר בקרה ציבורית כמו סעיפי ההוצאה הרגילים.</p>

          <blockquote className="border-r-2 border-[#f97316] pr-6 my-12 text-xl md:text-2xl font-bold text-white/90 leading-snug" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "הקפאת מדרגות מס ההכנסה מייצרת 'מס שקט' — משתכר 25,000 ש"ח מאבד כ-5,000 ש"ח בשנה בנטו בלי שהמדינה הצהירה על העלאת מס."
          </blockquote>

          <p>בעוד שבמקור נועדו הפטורים להגן על אוכלוסיות מוגדרות, כיום הם משמשים כמנגנון <strong className="text-white">העברת הון סמויה</strong> בין קבוצות לחץ ו"שבטים", לפי פרמטרים פוליטיים. חלק ממערכת ההטבות מתקצבת אזרחים ש"יכולים אבל לא רוצים" במקום "רוצים אבל לא יכולים".</p>
        </div>

        <div className="glass-card rounded-lg p-8 mb-16">
          <h3 className="text-lg font-bold text-white mb-2">הטבות המס המרכזיות (תחזית 2025, מיליארדי ש"ח)</h3>
          <p className="text-sm text-white/30 mb-8">סה"כ ~94 מיליארד ש"ח — תקציב צללים שנתי</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taxExemptions} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={90} tick={{ fontSize: 12, fill: '#e8e6e3' }} />
                <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', direction: 'rtl' }} formatter={(v) => [`₪${v}B`, '']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                  {taxExemptions.map((e, i) => (<Cell key={i} fill={e.color} />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>המהפכה במשק המים — הוכחה שזה אפשרי</h3>
          <p>עד סוף שנות ה-90, ישראל התמודדה עם שחיקת מקורות מים וניהול כושל. ברגע מכונן חלה תפנית: <strong className="text-white">הקמת רשות המים</strong> (2006), <strong className="text-white">תאגידי מים</strong> שהבטיחו שהכנסות יושקעו רק בתשתיות, ו<strong className="text-white">מעבר לייצור מים</strong> (התפלה, מיחזור 90%).</p>
          <p>התוצאה: ממדינה בבצורת תמידית ל<strong className="text-white">מעצמת מים אזורית</strong>. אותו מודל של ציד לווייתנים — ריכוז סמכויות מקצועי, ניתוק תמריצים פוליטיים, טכנולוגיית קצה — חייב להיות מיושם בתחבורה, חינוך וביטחון אישי.</p>
        </div>

        <div className="glass-card rounded-lg p-8 border-r-2 border-[#f97316]">
          <p className="text-white font-bold text-lg mb-2">השורה התחתונה</p>
          <p className="text-white/50 leading-relaxed">נדרשת עסקת חבילה: מס מ-אפס (Zero-Based Tax) — ביטול פטורים מעוותים בתמורה להורדת שיעורי המס הישיר. פישוט רדיקלי. גמילה ממלכודות הכנסה. וביזור כמנוע פריון.</p>
        </div>
      </div>
    </section>
  );
}
