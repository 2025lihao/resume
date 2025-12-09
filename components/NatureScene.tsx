import React from 'react';
import { motion } from 'framer-motion';

const birdRoutes = [
  { id: 'bird-one', top: '18%', delay: 0 },
  { id: 'bird-two', top: '28%', delay: 4 },
  { id: 'bird-three', top: '38%', delay: 8 },
];

const NatureScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* River glow */}
      <motion.div
        className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[90vw] h-[30vh]"
        animate={{ opacity: [0.85, 0.95, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200/70 via-blue-200/70 to-sky-100/70 rounded-[50%] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/60 to-sky-50/40 opacity-70 rounded-[45%] blur-3xl mix-blend-lighten" />
      </motion.div>

      {/* Soft canopy bloom */}
      <motion.div
        className="absolute top-[-15%] left-[5%] w-[30vw] h-[30vw] rounded-[40%] bg-gradient-to-br from-emerald-200/50 to-green-400/30 blur-[90px]"
        animate={{ scale: [1, 1.03, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[5%] right-[10%] w-[28vw] h-[28vw] rounded-[43%] bg-gradient-to-br from-lime-200/60 to-emerald-300/40 blur-[120px]"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -4, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Lily pads */}
      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={`pad-${idx}`}
          className="absolute w-32 h-32 rounded-[45%] bg-gradient-to-br from-green-200/70 to-emerald-300/50 backdrop-blur"
          style={{
            bottom: `${5 + idx * 6}%`,
            left: `${20 + idx * 18}%`,
          }}
          animate={{ y: [0, -6, 0], rotate: [0, 3, -1] }}
          transition={{ duration: 10 + idx * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Passing birds */}
      {birdRoutes.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute"
          style={{ top: bird.top }}
          initial={{ x: '-15vw', y: 0 }}
          animate={{ x: '115vw', y: [-15, 5, -10] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear', delay: bird.delay }}
        >
          <svg width="90" height="40" viewBox="0 0 120 60" className="text-sky-500">
            <path
              d="M5 40 Q35 5 65 35 Q85 15 115 35"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default NatureScene;
