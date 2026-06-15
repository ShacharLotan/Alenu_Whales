import React from 'react';
import { Link } from 'react-router-dom';
import { articles, formatDate } from '../lib/articles';

export default function RIR() {
  return (
    <section id="rir" className="py-24 px-6 section-light minimal-border-t">
      <div className="magazine-wide">

        {/* Section header */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-[#FF6B9E]"></div>
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#888] uppercase">Radical in Residence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
            RIR — מאמרי אורחים
          </h2>
          <p className="text-lg text-[#666] leading-[1.8] max-w-2xl">
            תוכנית ה־<span className="font-bold text-[#1a1a1a]">RIR (Radical in Residence)</span> מארחת הוגים ואנשי מעשה שכותבים מאמרי עומק על אתגרי היסוד של ישראל. מבט רדיקלי — לא קיצוני, אלא שורשי — על העתיד שאנחנו צריכים לבנות.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to={`/rir/${a.slug}`}
              className="group rir-card whale-card rounded-xl overflow-hidden flex flex-col fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Media */}
              <div className="relative h-48 flex items-center justify-center rir-media overflow-hidden">
                <div className="rir-media-glow" />
                {a.image && (
                  <img src={a.image} alt="" className="relative h-28 object-contain opacity-90 transition-transform duration-500 ease-out group-hover:scale-[1.12]" />
                )}
                {a.topic && (
                  <span className="absolute top-4 right-4 tag tag-pink shadow-sm">{a.topic}</span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-black text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#C73E6E] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[15px] text-[#666] leading-relaxed mb-6 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-[13px] text-[#888] border-t border-[#eee] pt-4">
                  <span className="font-bold text-[#444]">{a.author}</span>
                  <span className="flex items-center gap-1.5">
                    {formatDate(a.date)}
                    <span className="text-[#ddd]">•</span>
                    {a.readingTime} דק׳ קריאה
                  </span>
                </div>
                <span className="text-[13px] font-bold text-[#C73E6E] mt-4 inline-flex items-center gap-1">
                  קראו את המאמר
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
