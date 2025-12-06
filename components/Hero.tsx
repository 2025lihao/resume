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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-14 right-8 hidden md:block"
      >
        <div className="w-20 h-20 rounded-[32px] bg-white/70 border border-white/60 backdrop-blur flex items-center justify-center shadow-lg shadow-amber-100">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="34" r="18" fill="#FFEDD5" />
            <circle cx="22" cy="20" r="8" fill="#FED7AA" />
            <circle cx="42" cy="20" r="8" fill="#FED7AA" />
            <circle cx="26" cy="32" r="3" fill="#1E1E1E" />
            <circle cx="38" cy="32" r="3" fill="#1E1E1E" />
            <path d="M26 40C28 44 36 44 38 40" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="36" r="3" fill="#F97316" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center"
      >
        <h2 className="text-apple-blue font-semibold text-xs md:text-sm mb-4 tracking-[0.4em] uppercase">
          Infra & Reliability Engineer
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-text mb-4">
          李 昊
          <span className="block text-2xl md:text-3xl font-normal text-apple-subtext mt-3">リ コウ</span>
        </h1>
        <p className="text-lg md:text-xl text-apple-subtext max-w-3xl mx-auto leading-relaxed">
          AWS / Terraform を軸に、安全で読めるクラウド基盤を短期間で整えることに集中しています。
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
