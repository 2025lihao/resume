import { 
  TimelineItem, 
  CertificationItem, 
  LanguageItem, 
  AboutFact
} from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    date: '1996.06',
    title: '出生',
    subtitle: '中国・天津',
    description: '中国の天津市にて生まれる。',
    category: 'milestone'
  },
  {
    id: 2,
    date: '2014.09',
    title: '北京外国語大学 入学',
    subtitle: '日本語学科',
    description: '日本語専攻として入学。語学・異文化コミュニケーションを集中して学ぶ。',
    category: 'education'
  },
  {
    id: 3,
    date: '2016.08',
    title: 'JLPT N1 取得',
    subtitle: '日本語能力試験',
    description: '最高レベルであるN1に合格。',
    category: 'milestone',
    tags: ['JLPT N1']
  },
  {
    id: 4,
    date: '2018.06',
    title: '北京外国語大学 卒業',
    subtitle: '文学学士号取得',
    description: '4年間の課程を修了し、卒業。',
    category: 'education'
  },
  {
    id: 5,
    date: '2018.07 - 2022.12',
    title: 'MSD (Merck & Co.) 北京支社',
    subtitle: 'Pharmacovigilance Specialist',
    description: '日英中を用いた安全性情報管理を担当。監査対応やPython自動化で品質改善を推進。',
    category: 'work',
    tags: ['Global Collaboration', 'Python', 'Process Improvement']
  },
  {
    id: 6,
    date: '2023.04',
    title: 'QLITE株式会社 入社',
    subtitle: 'AWS Cloud Engineer (SES)',
    description: 'AWS基盤に集中してキャリア転換。TerraformやIaCの基礎を固める準備期間。',
    category: 'work'
  },
  {
    id: 7,
    date: '2023.10',
    title: '来日',
    subtitle: '東京',
    description: '日本での生活を開始。',
    category: 'migration'
  },
  {
    id: 8,
    date: '2024.01 - 2025.03',
    title: '派遣先：NTT DATA',
    subtitle: '大阪・関西万博向け交通アプリ基盤構築',
    description: '大阪・関西万博アプリのAWS基盤を基本設計から運用まで担当。IaCと監視を整備。',
    category: 'work',
    tags: ['AWS Design', 'Construction', 'IaC', 'Automation', 'Test']
  },
  {
    id: 9,
    date: '2025.04 - 2025.11',
    title: '派遣先：アドソル日進',
    subtitle: '決済システム開発プロジェクト',
    description: '決済システムのAWS設計・DevOpsを担当。CI/CD、ECS運用、監視を一体化。',
    category: 'work',
    tags: ['AWS Design', 'DevOps', 'SRE', 'CI/CD', 'ECS', 'Monitoring']
  },
  {
    id: 10,
    date: '2025.12 - 現在',
    title: '派遣先：富士ソフト',
    subtitle: '公文教育向けシステム基盤プロジェクト',
    description: '公文教育のシステム基盤案件に参画。AWSテストと運用・環境保守を担当し、品質担保を推進。',
    category: 'work',
    tags: ['AWS Testing', 'Operations', 'Quality']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 1, name: 'Solutions Architect', level: 'Professional', date: '2025', badgeColor: 'from-blue-500 to-cyan-400' },
  { id: 2, name: 'DevOps Engineer', level: 'Professional', date: '2025', badgeColor: 'from-blue-500 to-cyan-400' },
  { id: 3, name: 'Security', level: 'Specialty', date: '2025', badgeColor: 'from-red-500 to-pink-500' },
  { id: 4, name: 'SysOps Administrator', level: 'Associate', date: '2025', badgeColor: 'from-teal-500 to-emerald-400' },
  { id: 5, name: 'Developer', level: 'Associate', date: '2025', badgeColor: 'from-teal-500 to-emerald-400' },
  { id: 6, name: 'Solutions Architect', level: 'Associate', date: '2025', badgeColor: 'from-teal-500 to-emerald-400' },
  { id: 7, name: 'AI Practitioner', level: 'Foundational', date: '2025', badgeColor: 'from-gray-500 to-gray-400' },
  { id: 8, name: 'Cloud Practitioner', level: 'Foundational', date: '2025', badgeColor: 'from-gray-500 to-gray-400' },
];

export const LANGUAGES: LanguageItem[] = [
  { 
    language: '日本語', 
    level: 'ビジネスレベル', 
    description: '学習歴10年以上。JLPT N1取得。', 
    color: 'bg-red-50 text-red-600' 
  },
  { 
    language: '中文 (中国語)', 
    level: 'ネイティブ', 
    description: '母語。', 
    color: 'bg-orange-50 text-orange-600' 
  },
  { 
    language: 'English', 
    level: '準ビジネスレベル', 
    description: '米系大手企業での実務経験4年以上。', 
    color: 'bg-blue-50 text-blue-600' 
  },
];

export const ABOUT_FACTS: AboutFact[] = [
  { id: 1, label: 'AWS資格', value: '8', detail: '2025年取得' },
  { id: 2, label: 'Languages', value: 'JP / ZH / EN', detail: 'トリリンガル' },
  { id: 3, label: 'Career', value: 'Pharma → Cloud', detail: '信頼性志向' },
];
