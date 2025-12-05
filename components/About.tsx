import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-apple-blue font-medium text-sm tracking-widest uppercase mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-6xl font-bold text-apple-text mb-12">
            Adapting to change. <br />
            Building the future.
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-apple-subtext leading-relaxed">
            <p>
              こんにちは、李昊（リ・コウ）と申します。
              中国・北京での4年半にわたるMSD製薬（Merck & Co.）でのキャリアを経て、
              テクノロジーの力でより直接的に課題解決を行いたいという思いから、エンジニアへの転身を決意しました。
            </p>
            <p>
              前職のファーマコビジランス（安全性情報管理）業務では、グローバルな基準（GVP/GPSP）に基づいた
              厳格なプロセス管理とデータ分析を行い、ミスが許されない環境での業務遂行能力を培いました。
              この経験は、現在のインフラエンジニアとしての「安全性」「信頼性」を重視する姿勢に繋がっています。
            </p>
            <p>
              現在はAWSを活用したクラウド基盤の設計・構築に従事しています。
              Terraformを用いたIaC化や、モダンな技術スタックを吸収しながら、
              日々成長を続けています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;