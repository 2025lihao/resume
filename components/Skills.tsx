import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-transparent border-t border-gray-200/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Languages Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <span className="text-apple-blue font-medium text-sm tracking-widest uppercase mb-3 block">Global Communication</span>
             <h2 className="text-3xl md:text-4xl font-bold text-apple-text">Languages</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LANGUAGES.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl ${lang.color} bg-opacity-30 backdrop-blur-sm border border-current border-opacity-20 flex flex-col items-center text-center`}
              >
                <h3 className="text-2xl font-bold mb-2">{lang.language}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-sm font-semibold mb-4 shadow-sm">
                  {lang.level}
                </span>
                <p className="text-sm opacity-90 font-medium leading-relaxed">
                  {lang.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
          >
             <span className="text-apple-blue font-medium text-sm tracking-widest uppercase mb-3 block">Expertise</span>
             <h2 className="text-3xl md:text-4xl font-bold text-apple-text">Technical Skills</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight Card for AWS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-md border border-blue-100 p-8 rounded-3xl relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 blur-[80px] rounded-full opacity-50"></div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">Cloud Infrastructure</h3>
              <p className="text-slate-600 relative z-10 mb-6 leading-relaxed">
                AWS Cloud Infrastructure Design & Construction. <br />
                Specializing in secure, scalable environments using Terraform.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {['EC2', 'S3', 'VPC', 'Terraform', 'Step Functions'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/80 text-blue-600 rounded-full text-sm font-medium shadow-sm">
                     {tag}
                   </span>
                ))}
              </div>
            </motion.div>

            {SKILLS.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                className="bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-3xl hover:bg-white/80 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <p className="text-xs text-apple-subtext uppercase tracking-widest mb-3 font-semibold">{skill.category}</p>
                  <h3 className="text-lg font-bold text-apple-text leading-tight">{skill.name}</h3>
                </div>
                <div className="mt-4 w-full bg-gray-200/50 h-1.5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${skill.level}%` }}
                     transition={{ duration: 1, delay: 0.5 }}
                     className="bg-apple-blue h-full rounded-full"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;