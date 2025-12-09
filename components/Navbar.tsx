import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(newProgress);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-bold tracking-tight cursor-pointer transition-colors ${isScrolled ? 'text-apple-text' : 'text-apple-text'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          李 昊
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-apple-subtext">
          {['Profile', 'Certifications', 'History', 'Skills'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === 'profile' ? 'about' : item.toLowerCase() === 'history' ? 'timeline' : item.toLowerCase())}
              className="hover:text-apple-blue transition-colors relative group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apple-blue transition-all group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* Mobile navigation toggle */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-apple-text"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-300 via-orange-400 to-apple-blue origin-left"
        style={{ scaleX: Math.max(progress, 0.02) }}
      />

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-14 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 md:hidden flex flex-col space-y-4 shadow-lg overflow-hidden"
          >
            {['Profile', 'Certifications', 'History', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase() === 'profile' ? 'about' : item.toLowerCase() === 'history' ? 'timeline' : item.toLowerCase())} 
                className="text-left text-lg font-medium text-apple-text active:text-apple-blue"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
