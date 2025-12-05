import React from 'react';

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'education' | 'work' | 'milestone' | 'migration';
  tags?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  icon?: React.ReactNode;
  category: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  description: string;
  color: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  level: 'Professional' | 'Specialty' | 'Associate' | 'Foundational';
  date: string;
  badgeColor: string;
}