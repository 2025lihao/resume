import React from 'react';
import { motion } from 'framer-motion';

const CERTIFICATIONS = [
  {
    id: 'sap',
    name: 'AWS Certified Solutions Architect – Professional',
    level: 'Professional',
    year: '2025',
    url: 'https://www.credly.com/badges/6bc6be4a-186c-4333-98c0-368fb5637414/public_url',
  },
  {
    id: 'dop',
    name: 'AWS Certified DevOps Engineer – Professional',
    level: 'Professional',
    year: '2025',
    url: 'https://www.credly.com/badges/2a301aba-b654-46f8-8822-e0dc205977ab/public_url',
  },
  {
    id: 'scs',
    name: 'AWS Certified Security – Specialty',
    level: 'Specialty',
    year: '2025',
    url: 'https://www.credly.com/badges/1db5e5d5-89a8-4a72-9374-b77d8da27ef4/public_url',
  },
  {
    id: 'soa',
    name: 'AWS Certified SysOps Administrator – Associate',
    level: 'Associate',
    year: '2025',
    url: 'https://www.credly.com/badges/5678e16f-252d-494f-acda-ff2a896702de/public_url',
  },
  {
    id: 'dva',
    name: 'AWS Certified Developer – Associate',
    level: 'Associate',
    year: '2025',
    url: 'https://www.credly.com/badges/6eff422d-7da5-4028-ae23-b3dbbf897f68/public_url',
  },
  {
    id: 'saa',
    name: 'AWS Certified Solutions Architect – Associate',
    level: 'Associate',
    year: '2025',
    url: 'https://www.credly.com/badges/1f286960-d1ca-4798-898a-6089fe72770d/public_url',
  },
  {
    id: 'aif',
    name: 'AWS Certified AI Practitioner',
    level: 'Foundational',
    year: '2025',
    url: 'https://www.credly.com/badges/b1fe73f8-23e5-4ba1-a8f3-2b47252583b6/public_url',
  },
  {
    id: 'clf',
    name: 'AWS Certified Cloud Practitioner',
    level: 'Foundational',
    year: '2025',
    url: 'https://www.credly.com/badges/19c0e321-ad6e-48e2-99de-cfa08fadf070/public_url',
  },
];

const levelStyles: Record<
  'Professional' | 'Specialty' | 'Associate' | 'Foundational',
  { cardBg: string; accent: string; glow: string; iconBg: string; iconDot: string }
> = {
  Professional: {
    cardBg: 'from-[#f7fbff] via-white to-[#ecf4ff]',
    accent: 'text-[#1a5cff]',
    glow: 'shadow-[0_20px_45px_-30px_rgba(56,149,255,0.9)]',
    iconBg: 'from-[#cfe7ff] to-[#e4f0ff]',
    iconDot: 'bg-[#1a5cff]',
  },
  Specialty: {
    cardBg: 'from-[#fff5f8] via-white to-[#ffeef5]',
    accent: 'text-[#d6336c]',
    glow: 'shadow-[0_20px_45px_-30px_rgba(244,114,182,0.9)]',
    iconBg: 'from-[#ffd6e5] to-[#ffe5f1]',
    iconDot: 'bg-[#d6336c]',
  },
  Associate: {
    cardBg: 'from-[#f2fbf6] via-white to-[#e9f8f0]',
    accent: 'text-[#2f9e44]',
    glow: 'shadow-[0_20px_45px_-30px_rgba(16,185,129,0.8)]',
    iconBg: 'from-[#d7f5e4] to-[#e6f9ed]',
    iconDot: 'bg-[#2f9e44]',
  },
  Foundational: {
    cardBg: 'from-[#f6f7f9] via-white to-[#f1f2f5]',
    accent: 'text-slate-500',
    glow: 'shadow-[0_20px_45px_-30px_rgba(100,116,139,0.6)]',
    iconBg: 'from-[#e4e7ec] to-[#f3f4f6]',
    iconDot: 'bg-slate-500',
  },
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-28 px-6 bg-transparent border-t border-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-apple-blue font-medium text-xs tracking-[0.35em] uppercase mb-3 block">Qualifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-apple-text mb-4">
            8x AWS Certified（2025年取得）
          </h2>
          <p className="text-apple-subtext max-w-3xl mx-auto">
            Architecture / DevOps / Security / Operations — completed within one year to back client delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {CERTIFICATIONS.map((cert, index) => {
            const styles = levelStyles[cert.level as keyof typeof levelStyles];
            return (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`group relative flex flex-col justify-between rounded-[32px] border border-white/70 bg-gradient-to-br ${styles.cardBg} px-6 py-5 ${styles.glow} cursor-pointer
                  transition-transform transition-shadow hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-apple-blue/30`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${styles.iconBg} flex items-center justify-center`}>
                    <span className={`h-3 w-3 rounded-full ${styles.iconDot}`}></span>
                  </div>
                  <span className="text-[11px] font-medium text-apple-text/70 bg-white/80 px-2 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>
                  <h3 className="text-base font-semibold text-apple-text leading-snug">
                    {cert.name}
                  </h3>
                <div className="mt-4 flex items-center justify-between text-xs md:text-sm">
                  <span className={`font-semibold ${styles.accent}`}>{cert.level}</span>
                  <span className="text-[11px] md:text-xs text-apple-blue flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
                    View badge
                    <span>↗</span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
