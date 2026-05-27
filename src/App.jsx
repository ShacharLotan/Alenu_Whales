import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Methodology from './sections/Methodology';
import Examples from './sections/Examples';
import PastWhales from './sections/PastWhales';
import Footer from './sections/Footer';
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <div dir="rtl" className="bg-[#fafafa] min-h-screen relative">
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
      <Footer />
    </div>
  );
}
