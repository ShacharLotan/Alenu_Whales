import React, { useState } from 'react';

export default function ExpandableSection({ title, content, theme = 'light' }) {
  const [isOpen, setIsOpen] = useState(false);

  const btnColor = theme === 'dark' ? 'text-[#5CE1E6] hover:text-[#4bbbc0]' : 'text-[#FF6B9E] hover:text-[#D84A7F]';
  const bgColor = theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#fff5f8]';
  const borderColor = theme === 'dark' ? 'border-[#5CE1E6]' : 'border-[#FF6B9E]';
  const textColor = theme === 'dark' ? 'text-[#ccc]' : 'text-[#444]';
  const titleColor = theme === 'dark' ? 'text-[#fff]' : 'text-[#1a1a1a]';
  const dividerColor = theme === 'dark' ? 'border-[#333]' : 'border-[#eee]';

  return (
    <div className={`mt-6 pt-4 border-t ${dividerColor}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-[14px] font-bold transition-colors cursor-pointer ${btnColor}`}
      >
        <span>{isOpen ? 'סגור העמקה' : 'קראו עוד (העמקה)'}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className={`${bgColor} border-r-4 ${borderColor} p-5 rounded-l-md`}>
            {title && <h4 className={`text-[15px] font-black mb-2 ${titleColor}`}>{title}</h4>}
            <p className={`text-[15px] leading-relaxed m-0 ${textColor}`}>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
