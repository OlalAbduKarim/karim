
export interface Skill {
  name: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  image: string;
  title: string;
  description: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
}
