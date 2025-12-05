import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import { Briefcase, GraduationCap, Plane, Star, ArrowDown } from 'lucide-react';

const Timeline: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical page scroll into horizontal timeline movement
  // Extended the scroll range to ensure smoother animation
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

  return (
    // Increased height to 500vh to slow down the scroll speed and ensure sticky duration is sufficient
    <section id="timeline" ref={targetRef} className="relative h-[500vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header - Fixed Position relative to the sticky container */}
        <div className="absolute top-16 left-6 md:left-12 z-20 mix-blend-darken">
          <span className="text-amber-600 font-medium text-sm tracking-widest uppercase mb-2 block">My History</span>
          <h2 className="text-4xl md:text-6xl font-bold text-apple-text mb-2">Career Journey</h2>
          <div className="flex items-center gap-2 text-apple-subtext animate-bounce mt-4 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm w-fit">
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={16} />
          </div>
        </div>

        {/* Added mt-32 to push the cards down, creating space between header and cards */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-6 md:pl-12 pr-48 items-center mt-24 md:mt-32">
          {/* Spacer to push content right initially so it doesn't overlap header too much */}
          <div className="min-w-[50px] md:min-w-[150px]"></div>

          {TIMELINE_DATA.map((item) => (
            <motion.div 
              key={item.id} 
              className="relative group min-w-[320px] md:min-w-[450px] flex flex-col justify-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Year Indicator */}
              <div className="mb-6 border-b border-gray-400/30 pb-4 flex items-baseline gap-3">
                 <div className="w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100 shadow-sm"></div>
                <span className="text-4xl md:text-6xl font-bold text-apple-text font-mono">
                  {item.date.split('.')[0]}
                  <span className="text-xl md:text-2xl text-amber-600/70">.{item.date.split('.')[1] || ''}</span>
                </span>
              </div>

              {/* Card */}
              <div className="bg-white/80 backdrop-blur-lg border border-white/60 p-6 md:p-8 rounded-3xl h-[420px] flex flex-col shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/95 group-hover:border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-2xl ${
                    item.category === 'work' ? 'bg-sky-100 text-sky-600' :
                    item.category === 'education' ? 'bg-amber-100 text-amber-600' :
                    item.category === 'migration' ? 'bg-orange-100 text-orange-600' :
                    'bg-indigo-100 text-indigo-600'
                  }`}>
                    {item.category === 'work' && <Briefcase size={20} />}
                    {item.category === 'education' && <GraduationCap size={20} />}
                    {item.category === 'migration' && <Plane size={20} />}
                    {item.category === 'milestone' && <Star size={20} />}
                  </div>
                  <span className="text-xs font-bold text-apple-subtext uppercase tracking-widest">{item.category}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-apple-text mb-1">{item.title}</h3>
                {item.subtitle && <p className="text-amber-600 font-medium mb-4">{item.subtitle}</p>}
                
                <p className="text-apple-subtext leading-relaxed text-sm md:text-base flex-grow">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100/50">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs bg-amber-50/50 border border-amber-100 px-2.5 py-1 rounded-lg text-amber-700/80 font-medium">
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