import React from 'react';
import { motion } from 'framer-motion';

const basePath = import.meta.env.BASE_URL ?? '/';

const SKILLS = [
  { id: 'aws', name: 'AWS', description: 'マルチアカウント構成やネットワーク設計などを担当。', image: `${basePath}images/skill-aws.png` },
  { id: 'networking', name: 'Networking', description: 'VPC、サブネット、ルーティングなどクラウドネットワーク。', image: `${basePath}images/skill-networking.png` },
  { id: 'linux', name: 'Linux', description: 'サーバ運用やトラブルシューティングで利用。', image: `${basePath}images/skill-linux.png` },
  { id: 'containers', name: 'Containers', description: 'Docker / ECS Fargate でのコンテナ運用。', image: `${basePath}images/skill-containers.png` },
  { id: 'git', name: 'Git', description: 'チーム開発でのブランチ戦略・コードレビュー。', image: `${basePath}images/skill-git.png` },
  { id: 'github', name: 'GitHub', description: 'リポジトリ運用やレビューのプラットフォーム。', image: `${basePath}images/skill-github.png` },
  { id: 'python', name: 'Python', description: '自動化スクリプトやデータ処理に使用。', image: `${basePath}images/skill-python.png` },
  { id: 'bash', name: 'Bash', description: '日常的な運用・検証作業の効率化。', image: `${basePath}images/skill-bash.png` },
  { id: 'yaml', name: 'YAML', description: 'IaC や設定ファイルの記述で利用。', image: `${basePath}images/skill-yaml.png` },
  { id: 'terraform', name: 'Terraform', description: 'インフラのコード化と再利用可能なモジュール設計。', image: `${basePath}images/skill-terraform.png` },
  { id: 'aws-cdk', name: 'AWS CDK', description: 'TypeScript/Python でのクラウドリソース定義。', image: `${basePath}images/skill-aws-cdk.png` },
  { id: 'postgresql', name: 'PostgreSQL', description: 'アプリケーションのデータストアとして利用。', image: `${basePath}images/skill-postgresql.png` },
  { id: 'vscode', name: 'VS Code', description: '普段の開発や IaC 設計のメインエディタ。', image: `${basePath}images/skill-vscode.png` },
  { id: 'notion', name: 'Notion', description: '個人メモや情報整理・ナレッジ共有に利用。', image: `${basePath}images/skill-notion.png` },
  { id: 'jira', name: 'Jira', description: 'タスク管理やスプリント計画の管理。', image: `${basePath}images/skill-jira.png` },
  { id: 'confluence', name: 'Confluence', description: '設計書や運用ドキュメントの整理。', image: `${basePath}images/skill-confluence.png` },
  { id: 'github-actions', name: 'GitHub Actions', description: 'CI/CD パイプラインや自動化ワークフロー。', image: `${basePath}images/skill-github-actions.png` },
  { id: 'slack', name: 'Slack', description: 'チームコミュニケーションとアラート連携。', image: `${basePath}images/skill-slack.png` },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-white border-t border-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-apple-blue font-medium text-xs tracking-[0.35em] uppercase mb-3 block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-apple-text">Toolset</h2>
          <p className="text-apple-subtext mt-4 max-w-3xl mx-auto">
            日常的に使っているツールや技術を、シンプルなアイコンで一覧化しました。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-20 w-20 md:h-24 md:w-24 object-contain"
                loading="lazy"
              />
              <h3 className="text-sm md:text-base font-semibold text-apple-text">{skill.name}</h3>
              <p className="text-xs text-apple-subtext max-w-[9rem]">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
