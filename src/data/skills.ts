import { Skill } from "@/types";

export const skills: Skill[] = [
  // Backend Expert Level
  {
    name: "Domain-Driven Design (DDD)",
    category: "Architecture",
    level: "Expert",
    yearsOfExperience: 5,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "CQRS + Event Sourcing",
    category: "Architecture", 
    level: "Expert",
    yearsOfExperience: 4,
    projects: ["backend-expert-system"]
  },
  {
    name: "Microservices Architecture",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 6,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "Hexagonal Architecture",
    category: "Architecture",
    level: "Expert",
    yearsOfExperience: 4,
    projects: ["backend-expert-system"]
  },
  
  // Backend Technologies
  {
    name: "Node.js",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 7,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Expert",
    yearsOfExperience: 6,
    projects: ["opencode-productivity-suite", "backend-expert-system", "smart-tailwind-detection", "component-library-intelligence"]
  },
  {
    name: "NestJS",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 4,
    projects: ["backend-expert-system"]
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Advanced",
    yearsOfExperience: 6,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "Redis",
    category: "Database", 
    level: "Advanced",
    yearsOfExperience: 5,
    projects: ["opencode-productivity-suite"]
  },
  {
    name: "EventStoreDB",
    category: "Database",
    level: "Advanced",
    yearsOfExperience: 3,
    projects: ["backend-expert-system"]
  },

  // Frontend Technologies
  {
    name: "Next.js",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 5,
    projects: ["opencode-productivity-suite"]
  },
  {
    name: "React",
    category: "Frontend",
    level: "Expert", 
    yearsOfExperience: 7,
    projects: ["opencode-productivity-suite", "component-library-intelligence"]
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 4,
    projects: ["opencode-productivity-suite", "smart-tailwind-detection"]
  },
  {
    name: "CSS Architecture",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 8,
    projects: ["smart-tailwind-detection"]
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    category: "DevOps",
    level: "Expert",
    yearsOfExperience: 5,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    level: "Advanced",
    yearsOfExperience: 4,
    projects: ["opencode-productivity-suite", "backend-expert-system"]
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    level: "Expert",
    yearsOfExperience: 5,
    projects: ["opencode-productivity-suite"]
  },
  {
    name: "HashiCorp Vault",
    category: "DevOps",
    level: "Advanced",
    yearsOfExperience: 3,
    projects: ["backend-expert-system"]
  },

  // Languages & Scripts
  {
    name: "PowerShell",
    category: "Language",
    level: "Expert",
    yearsOfExperience: 6,
    projects: ["opencode-productivity-suite", "backend-expert-system", "smart-tailwind-detection", "component-library-intelligence"]
  },
  {
    name: "JavaScript",
    category: "Language",
    level: "Expert",
    yearsOfExperience: 9,
    projects: ["opencode-productivity-suite", "component-library-intelligence"]
  },
  {
    name: "Python",
    category: "Language",
    level: "Advanced",
    yearsOfExperience: 5
  },
  {
    name: "C#",
    category: "Language",
    level: "Advanced",
    yearsOfExperience: 6
  },

  // Architecture & Patterns
  {
    name: "Clean Architecture",
    category: "Architecture",
    level: "Expert",
    yearsOfExperience: 5,
    projects: ["backend-expert-system"]
  },
  {
    name: "Zero Defect Programming",
    category: "Architecture",
    level: "Expert",
    yearsOfExperience: 3,
    projects: ["opencode-productivity-suite"]
  },
  {
    name: "Enterprise Integration Patterns",
    category: "Architecture",
    level: "Advanced",
    yearsOfExperience: 4,
    projects: ["backend-expert-system"]
  }
];

export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getExpertSkills = (): Skill[] => {
  return skills.filter(skill => skill.level === "Expert");
};

export const getSkillsForProject = (projectId: string): Skill[] => {
  return skills.filter(skill => 
    skill.projects?.includes(projectId)
  );
};