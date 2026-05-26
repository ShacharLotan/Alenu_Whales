import React from 'react';

export default function Signup() {
  return (
    <section id="signup" className="relative py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] font-mono text-[#1AA3D4] tracking-[0.2em] uppercase mb-8">הצטרפו</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
              האחריות<br/>היא <span className="gradient-text">עלינו</span>.
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed font-light">
              הצטרפו לתנועת הנכדים המייסדים. יחד נאבחן את פערי העומק, נדרוש ריבונות אמיתית 
              ונייצר את הפתרונות הרדיקליים שיכתבו מחדש את החוזה הישראלי.
            </p>
            <div className="space-y-4">
              {[
                'גישה לתיקי ציד הלווייתנים המלאים',
                'עדכונים שוטפים מהשטח ומהמחקר',
                'הזמנה למפגשים, דיונים וסמינרים',
                'השפעה על סדר היום הציבורי',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1AA3D4] shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-lg p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>הרשמה לקהילה</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('תודה על הצטרפותך לתנועת עלינו!'); }}>
              <div>
                <label className="block text-[13px] text-white/40 font-medium mb-2">שם מלא</label>
                <input type="text" required className="w-full px-4 py-3 rounded bg-white/[0.05] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#1AA3D4] focus:ring-1 focus:ring-[#1AA3D4]/30 transition-all" placeholder="ישראל ישראלי" />
              </div>
              <div>
                <label className="block text-[13px] text-white/40 font-medium mb-2">דוא"ל</label>
                <input type="email" required className="w-full px-4 py-3 rounded bg-white/[0.05] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#1AA3D4] focus:ring-1 focus:ring-[#1AA3D4]/30 transition-all" placeholder="israel@example.com" />
              </div>
              <div>
                <label className="block text-[13px] text-white/40 font-medium mb-2">תחום עניין (אופציונלי)</label>
                <select className="w-full px-4 py-3 rounded bg-white/[0.05] border border-white/10 text-white/60 focus:outline-none focus:border-[#1AA3D4] transition-all">
                  <option value="">בחרו תחום</option>
                  <option value="security">ביטחון אישי</option>
                  <option value="transport">תחבורה</option>
                  <option value="housing">דיור ותשתיות</option>
                  <option value="budget">תקציב ומיסוי</option>
                  <option value="education">חינוך</option>
                  <option value="health">בריאות</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-white text-[#0a0a0f] py-4 rounded font-bold text-base hover:bg-[#1AA3D4] hover:text-white transition-all mt-2">
                הצטרפו כנכדים מייסדים
              </button>
              <p className="text-[11px] text-white/20 text-center">ללא עלות. ללא ספאם. רק תוכן שמזיז מחוגים.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
