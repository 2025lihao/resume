import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Mail, Route } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.45),_transparent_55%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,rgba(248,250,252,0)_70%)]"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center"
      >
        <h2 className="text-apple-blue font-semibold text-xs md:text-sm mb-4 tracking-[0.4em] uppercase">
          Cloud Infra Engineer
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-text mb-4">
          李 昊
          <span className="block text-2xl md:text-3xl font-normal text-apple-subtext mt-3">リ  コウ</span>
        </h1>
        <p className="text-lg md:text-xl text-apple-subtext max-w-3xl mx-auto leading-relaxed">
          AWSを中心に、環境構築・監視・運用改善など幅広く携わり、<br />
          サービスを安心して使える基盤づくりに取り組んでいます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full bg-apple-blue text-white font-semibold shadow-lg shadow-blue-200 flex items-center gap-2"
            onClick={() => window.open('mailto:2025lihao@gmail.com')}
          >
            <Mail size={18} />
            Contact
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full border border-apple-text/20 bg-white/70 text-apple-text font-semibold flex items-center gap-2 backdrop-blur"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Route size={18} />
            View Resume
          </motion.button>
        </div>
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
