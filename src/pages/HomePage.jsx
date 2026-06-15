import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Methodology from '../sections/Methodology';
import PastWhales from '../sections/PastWhales';
import Examples from '../sections/Examples';
import Geopolitics from '../sections/Geopolitics';
import HebrewSovereignty from '../sections/HebrewSovereignty';
import SiliconDome from '../sections/SiliconDome';
import RIR from '../sections/RIR';
import Footer from '../sections/Footer';
import ProgressBar from '../components/ProgressBar';
import InlineForm from '../components/InlineForm';
import FloatingActions from '../components/FloatingActions';

export default function HomePage() {
  const location = useLocation();

  // When arriving with a hash (e.g. /#rir from an article page), scroll to it.
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // Wait a tick so sections are mounted before scrolling.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
      }
    }
  }, [location.hash]);

  return (
    <div dir="rtl" className="bg-[#fafafa] min-h-screen relative pb-16 xl:pb-0">
      <ProgressBar />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="methodology">
        <Methodology />
      </div>
      <div id="past-whales">
        <PastWhales />
      </div>
      <div id="examples">
        <Examples />
      </div>

      {/* Inline CTA to catch users at peak motivation */}
      <InlineForm />

      <div id="geopolitics">
        <Geopolitics />
      </div>
      <div id="hebrew-sovereignty">
        <HebrewSovereignty />
      </div>
      <div id="silicon-dome">
        <SiliconDome />
      </div>

      {/* Guest articles — Radical in Residence */}
      <RIR />

      {/* Floating UX elements */}
      <FloatingActions />

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
