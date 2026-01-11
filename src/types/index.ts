// Portfolio data types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: "Enterprise" | "Full-Stack" | "Backend" | "Automation" | "Open Source";
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  completedAt: Date;
  highlights: string[];
  metrics?: {
    linesOfCode?: number;
    contributors?: number;
    stars?: number;
    downloads?: number;
    performanceImprovement?: string;
  };
}

export interface Skill {
  name: string;
  category: "Backend" | "Frontend" | "DevOps" | "Architecture" | "Database" | "Language";
  level: "Expert" | "Advanced" | "Intermediate";
  yearsOfExperience: number;
  certification?: string;
  projects?: string[]; // Project IDs where this skill was used
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  timezone: string;
  availability: "Available" | "Open to Opportunities" | "Not Available";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

// Component props types
export interface PortfolioSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedElementProps extends PortfolioSectionProps {
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight";
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}