import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    // REMOVED 'overflow-hidden' from here to fix the sticky position in Timeline
    <div className="relative min-h-screen text-apple-text selection:bg-amber-400 selection:text-white">
      
      {/* Sunny/Sunshine Theme Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#fffefc]">
        {/* Base Gradient: Warm sunshine to soft sky */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-50/80 via-orange-50/40 to-sky-50/30" />
        
        {/* Animated Sunny Blobs */}
        {/* The Sun (Bright Warm Yellow) - Top Right */}
        <div className="absolute top-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-yellow-200 blur-[120px] opacity-50 mix-blend-multiply animate-blob" />
        
        {/* Warmth (Soft Orange) - Bottom Left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-200 blur-[120px] opacity-40 mix-blend-multiply animate-blob animation-delay-2000" />
        
        {/* Day Sky (Light Blue) - Center/Top */}
        <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-sky-100 blur-[120px] opacity-40 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <Navbar />
      <main>
        <Hero />
        {/* Components with semi-transparent backgrounds to let the sunny theme shine through */}
        <div className="bg-white/30 backdrop-blur-xl">
          <About />
        </div>
        <div className="bg-white/20 backdrop-blur-lg">
          <Certifications />
        </div>
        {/* Timeline container */}
        <div className="bg-gradient-to-b from-white/30 to-amber-50/20 backdrop-blur-xl">
          <Timeline />
        </div>
        <div className="bg-white/40 backdrop-blur-xl">
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;