import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Workflow, ShieldCheck, Database } from 'lucide-react';

const DISCIPLINES = [
  {
    id: 'infra',
    title: 'Cloud / Infra',
    description: 'AWSを中心に、クラウド基盤の設計・構築・運用全般に携わっています。',
    icon: Cloud,
    iconClass: 'text-sky-500',
    bgClass: 'from-sky-50/70 via-white/40 to-white/30',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'CI/CDパイプラインの設計、障害対応、運用効率化などに向けた仕組みづくりを担当しています。',
    icon: Workflow,
    iconClass: 'text-violet-500',
    bgClass: 'from-violet-50/70 via-white/40 to-white/30',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'クラウド環境のセキュリティ設計・運用に関わっています。',
    icon: ShieldCheck,
    iconClass: 'text-cyan-500',
    bgClass: 'from-cyan-50/70 via-white/40 to-white/30',
  },
  {
    id: 'data',
    title: 'Database',
    description: 'PostgreSQLなどのデータベース設計や、ログ・メトリクスを活かした運用改善に関わっています。',
    icon: Database,
    iconClass: 'text-emerald-500',
    bgClass: 'from-emerald-50/70 via-white/40 to-white/30',
  },
];

const Disciplines: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-amber-50/30 to-sky-50/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-10 w-48 h-48 bg-white/60 blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100/50 blur-[120px]" />
      </div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-apple-text">Disciplines</h2>
        <p className="text-apple-subtext mb-10">
          担当している主な技術領域をまとめています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 items-start justify-items-center max-w-7xl mx-auto">
          {DISCIPLINES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={`group relative flex flex-col items-center text-center p-8 md:p-9 w-full min-h-[360px] rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_18px_48px_rgba(15,23,42,0.10)] hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 transition-all duration-300 bg-gradient-to-b ${item.bgClass}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_60%)]" />
                <div className="relative z-10 flex flex-col items-center text-center flex-1">
                  <Icon className={`h-20 w-20 md:h-24 md:w-24 mb-5 transition-transform duration-300 ${item.iconClass} group-hover:scale-105`} strokeWidth={2.2} />
                  <h3 className="mt-1 text-lg md:text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-apple-subtext">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
