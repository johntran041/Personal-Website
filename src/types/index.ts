export interface Project {
  title: string;
  tags: string[];
  description: string;
  link: string | null;
  linkLabel: string | null;
  image: string;
  status?: string | null;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  summary: string;
  bullets?: string[];
  tags?: string[];
}

export interface Meta {
  name: string;
  fullName: string;
  title: string;
  location: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
}
