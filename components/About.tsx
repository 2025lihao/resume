import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_FACTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-apple-blue font-medium text-xs tracking-[0.4em] uppercase mb-4 block">Profile</span>
          <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-apple-subtext leading-relaxed max-w-3xl">
            <p>
              東京を拠点に活動するクラウドインフラエンジニアです。<br />
              製薬業界で培った正確性・再現性への意識を基盤に、信頼性・セキュリティ重視のクラウド基盤設計や自動化を担当しています。
            </p>
            <p>
              I’m a cloud infrastructure engineer based in Tokyo.<br />
              With a background in the pharmaceutical industry, I value precision and reproducibility,<br />
              and focus on designing secure, reliable cloud foundations and driving automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {ABOUT_FACTS.map((fact, index) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/60 bg-white/55 backdrop-blur px-5 py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-apple-subtext mb-2">{fact.label}</p>
                <p className="text-xl font-semibold text-apple-text">{fact.value}</p>
                <p className="text-sm text-apple-subtext">{fact.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
