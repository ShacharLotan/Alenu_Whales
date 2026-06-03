import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide mobile CTA if we are near the inline form or footer
      const inlineForm = document.getElementById('join-inline');
      const footer = document.getElementById('footer');
      
      let hide = false;
      const scrollY = window.scrollY + window.innerHeight;

      if (inlineForm && scrollY > inlineForm.offsetTop && scrollY < inlineForm.offsetTop + inlineForm.offsetHeight + window.innerHeight) {
        hide = true;
      }
      if (footer && scrollY > footer.offsetTop) {
        hide = true;
      }
      
      setShowMobileCTA(!hide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'עלינו - ציד לוויתנים',
        text: 'קריאה לשינויי עומק ברגע מכונן. הגיע הזמן לצוד לוויתנים.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק בהצלחה!');
    }
  };

  return (
    <>
      {/* Global Share Button (Desktop & Mobile) */}
      <button 
        onClick={handleShare}
        className="fixed bottom-6 left-6 z-40 bg-white border border-[#e5e5e5] w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#fafafa] hover:text-[#FF6B9E] hover:border-[#FF6B9E] transition-all group"
        aria-label="שתף את האתר"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {/* Mobile Sticky CTA */}
      <div 
        className={`fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur border-t border-[#e5e5e5] z-30 xl:hidden transition-transform duration-300 ease-in-out ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a 
          href="#join"
          className="block w-full py-3.5 bg-[#FF6B9E] text-white text-center font-bold text-[15px] rounded-lg shadow-sm"
        >
          הצטרפו למאמץ
        </a>
      </div>
    </>
  );
}
