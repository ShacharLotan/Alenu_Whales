import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getArticle, formatDate } from '../lib/articles';

function initials(name) {
  if (!name) return '';
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0 h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-l from-[#FF6B9E] to-[#5CE1E6] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-black text-[#1a1a1a] mb-4">המאמר לא נמצא</h1>
        <Link to="/#rir" className="text-[#C73E6E] font-bold">→ חזרה למאמרי ה-RIR</Link>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#fafafa]">
      <ReadingProgress />

      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="magazine-wide px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-tight text-[#1a1a1a]">עלינו.</Link>
          <Link to="/#rir" className="group text-[14px] font-bold text-[#666] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            חזרה למאמרים
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="rir-media relative overflow-hidden py-16 md:py-20 px-6 mb-12 minimal-border-b">
        <div className="rir-media-glow" />
        <div className="relative magazine-col text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#888] uppercase">Radical in Residence</span>
            {article.topic && <span className="tag tag-pink">{article.topic}</span>}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Byline */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-[15px] shadow-sm" style={{ background: 'linear-gradient(135deg, #C73E6E, #0090A8)' }}>
              {initials(article.author)}
            </div>
            <div className="text-right">
              <div className="text-[15px] font-bold text-[#1a1a1a] leading-tight">{article.author}</div>
              <div className="text-[13px] text-[#888] leading-tight">
                {formatDate(article.date)}
                <span className="mx-1.5 text-[#ccc]">•</span>
                {article.readingTime} דק׳ קריאה
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="magazine-col px-6 pb-24">
        <div className="article-body">
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e5e5e5] text-center">
          <Link to="/#rir" className="text-[15px] font-bold text-[#C73E6E] inline-flex items-center gap-1">
            → חזרה לכל מאמרי ה-RIR
          </Link>
        </div>
      </article>
    </div>
  );
}
