import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import { Briefcase, GraduationCap, Plane, Star, ArrowDown } from 'lucide-react';

const Timeline: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-95%']);

  return (
    <section id="timeline" ref={targetRef} className="relative h-[450vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-16 left-6 md:left-12 z-20">
          <span className="text-amber-600 font-medium text-xs tracking-[0.4em] uppercase mb-2 block">History</span>
          <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-2">Career Journey</h2>
          <div className="flex items-center gap-2 text-apple-subtext mt-4 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm w-fit">
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown size={14} />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-14 pl-6 md:pl-12 pr-32 items-center mt-24 md:mt-28">
          <div className="min-w-[80px]" />
          {TIMELINE_DATA.map((item) => (
            <motion.div
              key={item.id}
              className="relative min-w-[300px] md:min-w-[400px] flex flex-col"
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 border-b border-white/40 pb-3 flex items-baseline gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <span className="text-3xl md:text-4xl font-bold text-apple-text font-mono">
                  {item.date.split('.')[0]}
                  <span className="text-lg text-amber-600/80">.{item.date.split('.')[1] || ''}</span>
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-lg border border-white/60 p-5 rounded-3xl flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-2xl ${
                      item.category === 'work'
                        ? 'bg-sky-100 text-sky-600'
                        : item.category === 'education'
                        ? 'bg-amber-100 text-amber-600'
                        : item.category === 'migration'
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-indigo-100 text-indigo-600'
                    }`}
                  >
                    {item.category === 'work' && <Briefcase size={18} />}
                    {item.category === 'education' && <GraduationCap size={18} />}
                    {item.category === 'migration' && <Plane size={18} />}
                    {item.category === 'milestone' && <Star size={18} />}
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-apple-subtext">{item.category}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-apple-text">{item.title}</h3>
                  {item.subtitle && <p className="text-amber-600 text-sm">{item.subtitle}</p>}
                </div>
                <p className="text-sm text-apple-subtext max-w-md">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/50">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-1 bg-amber-50/60 text-amber-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
