import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getArticle, formatDate } from '../lib/articles';

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
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="magazine-wide px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-tight text-[#1a1a1a]">עלינו.</Link>
          <Link to="/#rir" className="text-[14px] font-bold text-[#666] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1">
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            חזרה למאמרים
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="rir-media py-16 px-6 mb-12 minimal-border-b">
        <div className="magazine-col text-center">
          {article.topic && (
            <span className="tag tag-pink mb-5 inline-block">{article.topic}</span>
          )}
          <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-[14px] text-[#777]">
            <span className="font-bold text-[#444]">{article.author}</span>
            {article.date && <span className="text-[#bbb]">•</span>}
            <span>{formatDate(article.date)}</span>
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
