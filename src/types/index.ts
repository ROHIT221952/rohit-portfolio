export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  description: string;
  longDescription: string;
  points: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  badge?: string;
  previewType: 'ai-story' | 'ecommerce' | 'vpn-guide';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  isCurrent: boolean;
  description: string;
  points: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  location: string;
  year: string;
  description: string;
  skillsCovered: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cms_seo';
  level: string;
  iconName: string;
  glowColor: string;
}

export interface StatItem {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}
