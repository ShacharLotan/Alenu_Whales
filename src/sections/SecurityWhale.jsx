import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const deterrenceData = [
  { country: 'דנמרק', months: 5.5 },
  { country: 'אנגליה', months: 9.5 },
  { country: 'הולנד', months: 13 },
  { country: 'ישראל', months: 33 },
];

const crimeStats = [
  { label: 'נפגעי עבירה', value: '1.1M', sub: 'בשנה (הערכה)' },
  { label: 'דיווח למשטרה', value: '18%', sub: 'מהנפגעים בלבד' },
  { label: 'זינוק ברצח', value: '+85%', sub: '2023-2024' },
  { label: 'אמון במשטרה', value: '37%', sub: 'הוגנות' },
];

export default function SecurityWhale() {
  return (
    <section id="security" className="relative py-32 border-t border-white/5 grid-pattern">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[11px] font-mono text-[#E64C80] tracking-[0.2em] uppercase">לווייתן 01</div>
          <div className="flex-1 h-px bg-gradient-to-l from-[#E64C80]/30 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">ביטחון אישי</h2>
        <p className="text-xl text-[#E64C80] font-semibold mb-8">כלכלת חוסר-הביטחון ומודל עסקי לפשיעה</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded overflow-hidden">
          {crimeStats.map((s, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>{s.value}</div>
              <div className="text-[13px] text-white/60 font-semibold mb-1">{s.label}</div>
              <div className="text-[11px] text-white/30">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <p>מדינת ישראל בשנת 2026 מצויה בצומת דרכים קריטית בתחום הביטחון האישי. התשתיות המוסדיות שפעלו בעבר אינן מצליחות לספק מענה לאתגרי הפשיעה המאורגנת, האלימות הגואה והשחיקה בריבונות.</p>

          <blockquote className="border-r-2 border-[#E64C80] pr-6 my-12 text-xl md:text-2xl font-bold text-white/90 leading-snug" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "כאשר בעל עסק משקלל פרוטקשן במחיר המוצר, כאשר אזרח משלם יותר על ביטוח רכב בגלל גניבות שהריבון אינו מצליח למנוע — זו הפרת חוזה."
          </blockquote>

          <p><strong className="text-white">הלווייתן המרכזי</strong> הוא כלכלת חוסר-הביטחון: מצב שבו הכשל המדינתי הופך לרציונלי ומשתלם. האזרח משלם שלוש פעמים — כמשלם מיסים, כמי שחווה התייקרות שירותים, וכצרכן של תחליפי ביטחון פרטיים.</p>

          <p>בשנתיים האחרונות נגנבים <strong className="text-white">15,000+ רכבים בשנה</strong>. פרמיות ביטוח הרכב עלו ב-37% בשנתיים. רווחי חברות הביטוח הגיעו ל-<strong className="text-white">716 מיליון ש"ח</strong>. יש "מס פשיעה" שקט שנגבה דווקא מהאזרחים שומרי החוק.</p>

          <p><strong className="text-white">סחיטת דמי חסות</strong> אינה רק עבירת רכוש — היא ריבונות חלופית. עבריין שגובה "מס הגנה" מבעל עסק מחליף את המדינה בגביית מס ומתן הגנה. הפשיעה הופכת למס לאומי סמוי.</p>
        </div>

        <div className="glass-card rounded-lg p-8 mb-16">
          <h3 className="text-lg font-bold text-white mb-2">משך הליך פלילי ממוצע (חודשים)</h3>
          <p className="text-sm text-white/30 mb-8">ישראל מובילה בהימשכות הליכים — פי 6 מדנמרק</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deterrenceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 40]} tick={{ fontSize: 12 }} />
                <YAxis dataKey="country" type="category" width={60} tick={{ fontSize: 13, fill: '#e8e6e3' }} />
                <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', direction: 'rtl' }} formatter={(v) => [`${v} חודשים`, 'משך']} />
                <Bar dataKey="months" radius={[0, 4, 4, 0]} barSize={28}>
                  {deterrenceData.map((e, i) => (<Cell key={i} fill={e.country === 'ישראל' ? '#E64C80' : '#1AA3D4'} fillOpacity={e.country === 'ישראל' ? 1 : 0.5} />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>ודאות ומיידיות — עמודי התווך של ההרתעה</h3>
          <p>תיאוריית ההרתעה המודרנית קובעת כי שני הגורמים המשפיעים ביותר הם <strong className="text-white">ודאות התפיסה</strong> ו<strong className="text-white">מיידיות העונש</strong>. לא חומרת הענישה.</p>
        </div>

        <div className="glass-card rounded-lg overflow-hidden mb-16">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/10">
              <th className="p-4 text-right text-white/40 font-medium">מרכיב</th>
              <th className="p-4 text-right text-white/40 font-medium">השפעה</th>
              <th className="p-4 text-right text-white/40 font-medium">המצב בישראל</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="p-4 text-white font-semibold">ודאות</td><td className="p-4 text-white/50">"אני בטוח שאיתפס"</td><td className="p-4 text-[#E64C80]">נמוכה: פחות מ-30% דיווח</td></tr>
              <tr className="border-b border-white/5"><td className="p-4 text-white font-semibold">מיידיות</td><td className="p-4 text-white/50">"העונש מחר בבוקר"</td><td className="p-4 text-[#E64C80]">33 חודשים בממוצע</td></tr>
              <tr><td className="p-4 text-white font-semibold">חומרה</td><td className="p-4 text-white/50">"מאסר ארוך"</td><td className="p-4 text-[#E64C80]">גבוהה בחוק, לא מיושמת</td></tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl space-y-8 text-[16px] text-white/55 leading-[1.9] font-light mb-16">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>הלווייתן הכספי: חילוט נכסים</h3>
          <p>אם הפשיעה המאורגנת היא עסק, המדינה לא יכולה להילחם בה רק דרך האלימות הגלויה. המבחן: <strong className="text-white">כמה כסף פלילי הוקפא, כמה נכסים חולטו, כמה חברות קש נחסמו ממכרזים.</strong></p>

          <blockquote className="border-r-2 border-[#1AA3D4] pr-6 my-10 text-lg text-white/70 leading-relaxed italic">
            "במונחי ציד לווייתנים: לא רודפים אחרי הסנפיר שמעל המים — מכוונים אל גוף הלווייתן שמתחת לפני השטח."
          </blockquote>

          <p>נכון לספטמבר 2025, יותר מ-<strong className="text-white">24,715 כלואים</strong>. שיעור רצידיביזם: <strong className="text-white">41.3%</strong>. לעומת זאת, בעבודות שירות — רק <strong className="text-white">15%</strong>.</p>
        </div>

        <div className="glass-card rounded-lg p-8 border-r-2 border-[#E64C80]">
          <p className="text-white font-bold text-lg mb-2">השורה התחתונה</p>
          <p className="text-white/50 leading-relaxed">משבר הביטחון האישי הוא תוצאה של חידלון רעיוני: מדינה שלמדה לנהל פשיעה במקום להשליט ריבונות. היעד: מדינה שבה אדם יכול לפתוח עסק, לנסוע בכביש, להשאיר רכב ליד הבית — בלי לחשב סיכויים.</p>
        </div>
      </div>
    </section>
  );
}
