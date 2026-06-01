import React from 'react';

export default function Footer() {
  return (
    <footer id="join" className="section-dark py-24 px-6">
      <div className="magazine-col text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">זה עלינו.</h2>
          <p className="text-[#999] text-lg leading-[1.8] mb-12 max-w-lg mx-auto">
            "ציד לוויתנים" הוא לא מאבק לשם המאבק, אלא נקודת מבחן לאומץ ולעומק הרעיוני והערכי של חברה במשבר. ההזדמנות הנוכחית נובעת מתוך הבנה שישראל יכולה יותר.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); alert('תודה על הצטרפותך.'); }}>
            <input 
              type="email" 
              placeholder="הזינו דוא״ל להצטרפות למאמץ" 
              className="w-full px-5 py-4 bg-[#1e1e1e] border border-[#333] text-white placeholder-[#666] rounded focus:outline-none focus:border-[#5CE1E6] transition-colors text-center text-[15px]"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-white text-[#1a1a1a] font-bold py-4 rounded hover:bg-[#eee] transition-colors text-[15px]"
            >
              הצטרפו לנכדים המייסדים
            </button>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-[#2a2a2a] text-[13px] text-[#555]">
          © 2026 תנועת עלינו. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
