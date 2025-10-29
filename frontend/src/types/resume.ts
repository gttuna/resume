export type ContactMethodType =
  | 'email'
  | 'phone'
  | 'location'
  | 'website'
  | 'linkedin'
  | 'github'
  | 'portfolio'
  | 'custom';

export interface ContactMethod {
  type: ContactMethodType;
  label: string;
  value: string;
  href?: string;
}

export interface ExperienceAchievement {
  title: string;
  description?: string;
  highlights?: string[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  organization: string;
  location?: string;
  start: string;
  end?: string;
  isCurrent?: boolean;
  summary?: string;
  achievements: ExperienceAchievement[];
  tags?: string[];
}

export interface ProjectShowcase {
  id: string;
  name: string;
  description: string;
  impact?: string;
  tags?: string[];
  href?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  location?: string;
  credential: string;
  start?: string;
  end?: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface ResumeData {
  profile: {
    name: string;
    title: string;
    headline: string;
    summary: string[];
    location: string;
    contact: ContactMethod[];
    social?: SocialLink[];
  };
  projects: ProjectShowcase[];
  experience: ExperienceRole[];
  education: EducationEntry[];
  skills: SkillCategory[];
}

