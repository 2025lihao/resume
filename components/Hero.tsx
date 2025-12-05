import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      
      {/* Background Bear Illustration (Subtle Decoration & Animation) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-apple-text"
      >
        <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor">
            {/* Simple cute bear silhouette */}
            <circle cx="50" cy="50" r="25" /> 
            <circle cx="150" cy="50" r="25" /> 
            <circle cx="100" cy="100" r="70" /> 
            <circle cx="75" cy="85" r="5" fill="white" /> 
            <circle cx="125" cy="85" r="5" fill="white" /> 
            <ellipse cx="100" cy="110" rx="20" ry="15" fill="white" /> 
            <circle cx="100" cy="105" r="5" fill="currentColor" /> 
        </svg>
      </motion.div>

      {/* Floating Animated Bears */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-[15%] opacity-10 md:opacity-20"
      >
         <svg width="80" height="80" viewBox="0 0 100 100" className="text-apple-blue fill-current">
            <circle cx="25" cy="25" r="15" />
            <circle cx="75" cy="25" r="15" />
            <circle cx="50" cy="55" r="40" />
            <circle cx="35" cy="45" r="4" fill="white" />
            <circle cx="65" cy="45" r="4" fill="white" />
         </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-sm hover:shadow-md transition-all cursor-default text-apple-text"
        >
          <Award size={18} className="text-yellow-500" />
          <span className="text-sm font-medium tracking-wide">8x AWS Certified (2025)</span>
        </motion.div>

        <h2 className="text-apple-blue font-semibold text-lg md:text-xl mb-4 tracking-wide uppercase">
          Cloud Infrastructure Engineer
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-apple-text mb-6">
          李 昊
          <span className="block text-2xl md:text-4xl font-normal text-apple-subtext mt-4 tracking-normal">
            (リ コウ)
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-apple-subtext max-w-2xl mx-auto leading-relaxed px-4">
          Building secure, scalable cloud infrastructure. <br className="hidden md:block"/>
          Global Experience & AWS Expertise.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        whileHover={{ y: 5 }}
      >
        <ChevronDown className="w-8 h-8 text-apple-subtext/50" />
      </motion.div>
    </section>
  );
};

export default Hero;