export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'AI/ML' | 'Enterprise SaaS' | 'Mobile';
  featured?: boolean;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  demoUrl?: string;
  playStoreCustomerUrl?: string;
  playStoreRestaurantUrl?: string;
  internalPath?: string;
  badge?: string;
  roleContext?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string[];
  technologies: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  fileUrl?: string;
  externalUrl?: string;
}

export type StationId =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact';

export interface StationConfig {
  id: StationId;
  name: string;
  sub: string;
  position: [number, number, number];
  cameraPos: [number, number, number];
  targetPos: [number, number, number];
}
