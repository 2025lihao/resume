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
          <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-8">About Li Hao</h2>

          <div className="space-y-6 text-lg text-apple-subtext leading-relaxed max-w-3xl">
            <p>
              東京拠点のクラウドインフラエンジニアです。製薬業界で鍛えた厳格なプロセス感覚をベースに、AWS /
              Terraform を使った安全性重視の基盤構築・自動化を担当しています。
            </p>
            <p>
              Cloud infrastructure engineer in Tokyo with a pharma background. I focus on resilient AWS environments,
              delivering IaC, CI/CD, and observability so teams can read the system health at a glance.
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
