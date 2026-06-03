import React from 'react';

export default function InlineForm() {
  return (
    <section id="join-inline" className="py-20 px-6 bg-[#FF6B9E] text-white">
      <div className="magazine-col text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">מוכנים לצוד לוויתן?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-lg mx-auto">
          אם הגעתם עד לפה, כנראה שאתם מבינים שאי אפשר להמשיך עם הסטטוס-קוו. השאירו פרטים ונצרף אתכם למאמץ הלאומי לשינוי יסודי.
        </p>
        <form 
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => { e.preventDefault(); alert("תודה על ההצטרפות! ניצור קשר בקרוב."); }}
        >
          <input 
            type="email" 
            placeholder="הכנס כתובת אימייל..." 
            required 
            className="flex-1 px-4 py-3 rounded text-[#1a1a1a] border-none outline-none focus:ring-2 focus:ring-[#1a1a1a]"
          />
          <button 
            type="submit"
            className="bg-[#1a1a1a] text-white font-bold px-8 py-3 rounded hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            הצטרפו עכשיו
          </button>
        </form>
      </div>
    </section>
  );
}
