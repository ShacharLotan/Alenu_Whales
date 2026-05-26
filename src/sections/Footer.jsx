import React from 'react';

export default function Footer() {
  return (
    <footer id="join" className="bg-[#111] text-white py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto fade-in-up">
        <h2 className="text-4xl font-black mb-8 serif">זה עלינו.</h2>
        <p className="text-[#aaa] text-lg leading-relaxed mb-12">
          "ציד לוויתנים" הוא לא מאבק לשם המאבק, אלא נקודת מבחן לאומץ ולעומק הרעיוני והערכי של חברה במשבר. ההזדמנות הנוכחית נובעת מתוך הבנה שישראל יכולה יותר.
        </p>
        
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); alert('תודה על הצטרפותך.'); }}>
          <input 
            type="email" 
            placeholder="הזינו דוא״ל להצטרפות למאמץ" 
            className="w-full px-5 py-4 bg-[#222] border border-[#333] text-white placeholder-[#777] rounded-sm focus:outline-none focus:border-white transition-colors text-center"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-white text-[#111] font-bold py-4 rounded-sm hover:bg-[#eee] transition-colors"
          >
            הצטרפו לנכדים המייסדים
          </button>
        </form>

        <div className="mt-20 text-[13px] text-[#555]">
          © 2026 תנועת עלינו. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
