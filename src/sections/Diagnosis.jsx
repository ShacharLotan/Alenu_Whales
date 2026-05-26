import React from 'react';

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="relative py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-[11px] font-mono text-[#1AA3D4] tracking-[0.2em] uppercase mb-8">האבחנה</div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          מריב אופקי ל<span className="gradient-text">ריב אנכי</span>
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed font-light">
          השיח הפוליטי נלכד במשך עשורים בתוך ארכיטקטורת ריב אופקית — קרבות סכום-אפס בין קבוצות זהות. 
          המעבר לריב אנכי חושף את הפער בין התשומות הגבוהות שהמדינה דורשת לבין התפוקות הדלות שהיא מספקת.
        </p>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-0 mb-20 overflow-hidden rounded-lg border border-white/5">
          {/* Horizontal */}
          <div className="p-8 md:p-10 bg-[#E64C80]/[0.04] border-b md:border-b-0 md:border-l border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#E64C80]" />
              <span className="text-[#E64C80] text-sm font-bold tracking-wide">הריב האופקי — המודל הישן</span>
            </div>
            <div className="space-y-6 text-[15px] text-white/50 leading-relaxed">
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מוקד המאבק</div>
                <div>שבט נגד שבט: "הפשיעה שלהם", "השוטרים שלנו", "השופטים ההם"</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">השפה השלטת</div>
                <div>שפת תשומות — "כמה תקציב הוקצה למגזר שלי?"</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מנגנון התקיעות</div>
                <div>וטו הדדי בין קבוצות אינטרס ומשרדי ממשלה</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מדד ההצלחה</div>
                <div>כמה פעילות נעשתה. כמה כסף הושקע.</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">המטרה הפוליטית</div>
                <div>שקט רגעי, מבצע תקשורתי, עוד "תכנית למיגור הפשיעה"</div>
              </div>
            </div>
          </div>

          {/* Vertical */}
          <div className="p-8 md:p-10 bg-[#1AA3D4]/[0.04]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#1AA3D4]" />
              <span className="text-[#1AA3D4] text-sm font-bold tracking-wide">הריב האנכי — המודל החדש</span>
            </div>
            <div className="space-y-6 text-[15px] text-white/50 leading-relaxed">
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מוקד המאבק</div>
                <div>אזרח נגד שיטה: ריבון שאינו מספק את המוצר הבסיסי ביותר</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">השפה השלטת</div>
                <div>שפת תפוקות — "מהו זמן ההגעה דלת לדלת?" "האם אני בטוח?"</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מנגנון התקיעות</div>
                <div>תלות פיסקלית ופוליטית של המדינה בכשל שהיא אמורה לפתור</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">מדד ההצלחה</div>
                <div>מבחן המובן מאליו: האם האזרח נדרש להתעסק ולממן את ביטחונו?</div>
              </div>
              <div>
                <div className="text-white/30 text-[11px] font-mono mb-1">המטרה הפוליטית</div>
                <div>שינוי רדיקלי של מבנה האחריות, המדידה והסמכות</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6" style={{ fontFamily: 'Frank Ruhl Libre, serif' }}>
            "פשרה כמדיניות הפכה לכלי שבעזרתו אנחנו מסבסדים את הנוחות בהווה באמצעות שאיבת משאבים מן העתיד."
          </blockquote>
          <p className="text-white/30 text-sm">— תנועת עלינו, הנכדים המייסדים</p>
        </div>
      </div>
    </section>
  );
}
