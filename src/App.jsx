import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Methodology from './sections/Methodology';
import Examples from './sections/Examples';
import PastWhales from './sections/PastWhales';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div dir="rtl" className="bg-[#fafafa] min-h-screen">
      <Navbar />
      <Hero />
      <Methodology />
      <PastWhales />
      <Examples />
      <Footer />
    </div>
  );
}
