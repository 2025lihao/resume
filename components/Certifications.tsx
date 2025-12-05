import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

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
          <span className="text-apple-blue font-medium text-sm tracking-widest uppercase mb-4 block">Qualifications</span>
          <h2 className="text-3xl md:text-5xl font-bold text-apple-text mb-6">
            8x AWS Certified
          </h2>
          <p className="text-apple-subtext max-w-2xl mx-auto">
            Architecture, Operations, Developer Tools, Security. All acquired in 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.badgeColor} blur-[60px] opacity-10 group-hover:opacity-25 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.badgeColor} text-white shadow-md shadow-gray-200`}>
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono text-apple-subtext border border-gray-100 px-2 py-1 rounded-full bg-gray-50/50">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-apple-text mb-1 leading-tight">
                  AWS Certified <br/>
                  <span className="text-xl">{cert.name}</span>
                </h3>
                <p className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${cert.badgeColor} mt-auto pt-4`}>
                  {cert.level}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;