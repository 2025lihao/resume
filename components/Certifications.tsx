import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

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

const levelThemes: Record<
  'Professional' | 'Specialty' | 'Associate' | 'Foundational',
  { badgeGradient: string }
> = {
  Professional: {
    badgeGradient: 'from-blue-500 to-cyan-400',
  },
  Specialty: {
    badgeGradient: 'from-red-500 to-pink-500',
  },
  Associate: {
    badgeGradient: 'from-teal-500 to-emerald-400',
  },
  Foundational: {
    badgeGradient: 'from-gray-500 to-gray-400',
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-32 px-6 bg-transparent border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-apple-blue font-medium text-sm tracking-widest uppercase mb-4 block">
            Qualifications
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-apple-text mb-6">
            8x AWS Certified
          </h2>
          <p className="text-apple-subtext max-w-2xl mx-auto">
            Architecture, Operations, Developer Tools, Security. All acquired in 2025.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CERTIFICATIONS.map((cert) => {
            const theme = levelThemes[cert.level as keyof typeof levelThemes];
            return (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-gradient-to-br from-white via-white/95 to-[#f5f8ff] backdrop-blur-md border border-white/60 p-6 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-apple-blue/30 min-h-[225px]"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white/85 to-white/40" />
                  <div className={`absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br ${theme.badgeGradient} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-25`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_70%)] opacity-80" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${theme.badgeGradient} text-white shadow-md shadow-gray-200`}>
                      <Award size={24} />
                    </div>
                    <span className="text-xs font-mono text-apple-subtext border border-gray-100 px-2 py-1 rounded-full bg-gray-50/50">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-apple-text mb-1 leading-tight">{cert.name}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                    <p className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${theme.badgeGradient}`}>
                      {cert.level}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r ${theme.badgeGradient}`}
                    >
                      View badge
                      <span aria-hidden>↗</span>
                    </span>
                  </div>
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
