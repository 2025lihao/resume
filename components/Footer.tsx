import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-apple-text mb-6">Contact</h3>
        <p className="text-apple-subtext mb-8">
          ご興味を持っていただけましたら、ぜひご連絡ください。<br />
          Open to new opportunities in Japan.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:2025lihao@gmail.com" className="flex items-center gap-2 text-apple-text hover:text-apple-blue transition-colors">
            <Mail size={20} />
            <span>2025lihao@gmail.com</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-apple-text hover:text-apple-blue transition-colors">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Li Hao. All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;