import React from 'react';

const DISCIPLINES = [
  {
    id: 'cloud',
    title: 'Cloud / Infra',
    description: 'AWS を中心に、VPC・マルチアカウント構成・ネットワーク設計などのインフラ基盤を担当しています。',
    image: '/images/discipline-cloud.png',
  },
  {
    id: 'devops',
    title: 'DevOps / Automation',
    description: 'Terraform や AWS CDK を用いた IaC 化、CI/CD パイプライン構築など、自動化による効率化を行っています。',
    image: '/images/discipline-devops.png',
  },
  {
    id: 'runtime',
    title: 'Containers / Runtime',
    description: 'ECS/Fargate などのコンテナ基盤でアプリケーションを安定して動かすための設計・運用を担当しています。',
    image: '/images/discipline-runtime.png',
  },
  {
    id: 'data',
    title: 'Data & Databases',
    description: 'PostgreSQL などのデータベース設計や、ログ・メトリクスを活かした運用改善に関わっています。',
    image: '/images/discipline-data.png',
  },
  {
    id: 'collab',
    title: 'Collaboration & Delivery',
    description: 'Jira・Confluence・Notion などのツールを使いながら、チームとの情報共有やドキュメント整備に力を入れています。',
    image: '/images/discipline-collab.png',
  },
];

const Disciplines: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-apple-text">Disciplines</h2>
        <p className="text-apple-subtext mb-10">
          担当しているクラウドまわりの領域を、シンプルなアイコンでまとめました。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-items-start">
          {DISCIPLINES.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-left gap-3 max-w-[13rem] w-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 md:h-28 md:w-28 object-contain"
                loading="lazy"
              />
              <h3 className="text-base md:text-lg font-semibold text-apple-text">{item.title}</h3>
              <p className="text-xs md:text-sm text-apple-subtext">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
