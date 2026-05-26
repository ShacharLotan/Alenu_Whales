import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { name: 'מס קנייה ומכס', value: 12, desc: 'מס על בעלות שמעניש ניידות' },
  { name: 'בלו על דלק', value: 19.5, desc: 'המדינה מרוויחה מכל שעה בפקק' },
  { name: 'אגרות רישוי', value: 5.5, desc: 'הכנסה מובטחת מתלות ברכב' },
  { name: 'מע"מ רכב/דלק', value: 8, desc: 'קופון נוסף על יוקר תחבורתי' },
];

const COLORS = ['#1AA3D4', '#4FD1C5', '#0e6b8c', '#065a7a'];

export default function TransportWhale() {
  return (
    <section id="transport" className="relative py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[11px] font-mono text-[#1AA3D4] tracking-[0.2em] uppercase">לווייתן 02</div>
          <div className="flex-1 h-px bg-gradient-to-l from-[#1AA3D4]/30 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">תחבורה</h2>
        <p className="text-xl text-[#1AA3D4] font-semibold mb-8">מלכודת ההכנסות והתמכרות המדינה למיסי רכב</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded overflow-hidden">
          {[
            { v: '₪45B', l: 'הכנסות ממיסי רכב', s: 'בשנה' },
            { v: '₪50B', l: 'עלות הגודש למשק', s: 'אובדן תוצר שנתי' },
            { v: '336K', l: 'רכבים יובאו ב-2024', s: 'שנה שנייה בגובהה' },
            { v: '80%', l: 'אוליגופול', s: '4 יבואנים שולטים בשוק' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.v}</div>
              <div className="text-[13px] text-white/60 font-semibold mb-1">{s.l}</div>
              <div className="text-[11px] text-white/30">{s.s}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <p>משרד האוצר מצוי בניגוד עניינים מבני חריף. מדינת ישראל "מכורה" להכנסות מענף הרכב, הגובות למעלה מ-<strong className="text-white">45 מיליארד ש"ח בשנה</strong> — כ-10% מכלל גביית המיסים. ככל שהתחבורה הציבורית פחות יעילה, האזרחים קונים יותר רכבים, צורכים יותר דלק, וממלאים את קופת המדינה.</p>

          <blockquote className="border-r-2 border-[#1AA3D4] pr-6 my-12 text-xl md:text-2xl font-bold text-white/90 leading-snug" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "המדינה מרוויחה מכל שעה שאתה עומד בפקק. פתרון אמיתי לגודש יפער בור תקציבי מיידי."
          </blockquote>

          <p>עלות הגודש למשק הגיעה ל-<strong className="text-white">50 מיליארד ש"ח בשנה</strong> — סכום שמתקרב לעלות מיסי הרכב עצמם. זהו "כשל מתוכנן" שבו המדינה שותפה סמויה של אוליגופול היבואנים.</p>
        </div>

        {/* Revenue chart */}
        <div className="glass-card rounded-lg p-8 mb-16">
          <h3 className="text-lg font-bold text-white mb-2">הכנסות המדינה מענף הרכב (מיליארדי ש"ח)</h3>
          <p className="text-sm text-white/30 mb-8">סה"כ ~45 מיליארד — כ-10% מכלל גביית המיסים</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: '#e8e6e3' }} />
                <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', direction: 'rtl' }} formatter={(v) => [`₪${v}B`, '']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
                  {revenueData.map((_, i) => (<Cell key={i} fill={COLORS[i]} />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>ריכוזיות ענף הרכב והשליטה האנכית</h3>
          <p>שוק הרכב הישראלי נשלט על ידי אוליגופול של משפחות הון. היבואנים הפכו למוסדות פיננסיים: <strong className="text-white">הם הבנק</strong> (מימון), <strong className="text-white">הם חברת הביטוח</strong>, <strong className="text-white">הם בעלי הליסינג</strong>, ו<strong className="text-white">הם המוסך</strong>. התוצאה: חסם כניסה בלתי עביר.</p>

          <p>אפילו "המהפכה הסינית" של רכבים חשמליים וזולים נבלמה: המותגים הסיניים <strong className="text-white">"נחטפו" על ידי היבואנים הוותיקים</strong> ותומחרו במכפלות רווח עצומות.</p>

          <h3 className="text-2xl font-bold text-white mt-12" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>סמכות ללא אחריות, אחריות ללא סמכות</h3>
          <p>ישראל מהווה אנומליה ב-OECD ברמת הריכוזיות. פקיד במשרד התחבורה בירושלים קובע מיקום תחנת אוטובוס בחיפה — אבל לא נושא באחריות. מי שסופג את זעם הציבור הוא ראש העיר. ולראש העיר אין סמכות.</p>

          <p>שיטת מכרזי האוטובוסים מתגמלת לפי <strong className="text-white">"קילומטר נסועה" ולא לפי נוסעים</strong>. התוצאה: "קווי רפאים" — מאות קווי אוטובוס עם פחות מחמישה נוסעים בממוצע. מאות מיליוני שקלים בשנה על <strong className="text-white">הסעת אוויר</strong>.</p>
        </div>

        <div className="glass-card rounded-lg p-8 border-r-2 border-[#1AA3D4]">
          <p className="text-white font-bold text-lg mb-2">השורה התחתונה</p>
          <p className="text-white/50 leading-relaxed">משבר התחבורה הוא סימפטום של מערכת הפעלה שחוקה, המעדיפה נוחות פיסקלית ושקט פוליטי על פני שגשוג אזרחי. כמו שדור המייסדים בנה את המוביל הארצי, תורנו לבנות ארכיטקטורת ניידות של המאה ה-21.</p>
        </div>
      </div>
    </section>
  );
}
