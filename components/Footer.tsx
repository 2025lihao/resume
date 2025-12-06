import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-white/40 to-amber-50/40 border-t border-white/60 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_rgba(255,255,255,0.8),_transparent_65%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-apple-text mb-4">
          東京を拠点に、JP / ZH / EN でクラウド基盤を支援しています。
        </h3>
        <p className="text-apple-subtext mb-10">
          プロジェクトの短期支援や長期参画について、お気軽にご連絡ください。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="mailto:2025lihao@gmail.com"
            className="px-6 py-3 rounded-full bg-apple-blue text-white font-semibold flex items-center gap-2 justify-center shadow-lg shadow-blue-200"
          >
            <Mail size={18} />
            2025lihao@gmail.com
          </a>
        </div>

        <button
          className="inline-flex items-center gap-2 text-sm font-semibold text-apple-text/70 hover:text-apple-text transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
          <ArrowUpRight size={16} />
        </button>

        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Li Hao.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
