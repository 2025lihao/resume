import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Mail, Route, Clock4 } from 'lucide-react';

const quickFacts = [
  { label: 'Primary Stack', value: 'AWS + Terraform' },
  { label: '最近の成果', value: 'Zero-downtime CI/CD' },
  { label: 'Languages', value: 'JP · ZH · EN' },
];

const Hero: React.FC = () => {
  const [tokyoTime, setTokyoTime] = useState(() =>
    new Intl.DateTimeFormat('ja-JP', { hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTokyoTime(
        new Intl.DateTimeFormat('ja-JP', { hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date())
      );
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-16 right-8 bg-white/70 border border-white/50 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.2em] text-apple-subtext hidden md:flex items-center gap-2"
      >
        <Clock4 size={14} className="text-apple-blue" />
        {tokyoTime}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-white/50 text-apple-text"
        >
          <Award size={16} className="text-amber-500" />
          <span className="text-sm font-medium tracking-wide">8x AWS Certified（2025）</span>
        </motion.div>

        <h2 className="text-apple-blue font-semibold text-xs md:text-sm mb-4 tracking-[0.4em] uppercase">
          Infra & Reliability Engineer
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-text mb-4">
          李 昊
          <span className="block text-2xl md:text-3xl font-normal text-apple-subtext mt-3">Li Hao</span>
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

        <div className="flex flex-col md:flex-row gap-4 mt-12 max-w-3xl">
          {quickFacts.map((fact) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 rounded-3xl border border-white/50 bg-white/60 backdrop-blur px-4 py-3 text-left"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-apple-subtext mb-1">{fact.label}</p>
              <p className="text-base font-semibold text-apple-text">{fact.value}</p>
            </motion.div>
          ))}
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
