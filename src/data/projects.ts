import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "opencode-productivity-suite",
    title: "OpenCode Productivity Suite v3.0",
    description: "Enterprise-grade development automation system with Zero Defect Programming principles and advanced framework detection.",
    longDescription: "A comprehensive productivity suite that revolutionizes software development workflows through intelligent automation, enterprise architecture patterns, and zero-defect programming methodologies. Features include advanced framework detection for 38+ technologies, smart UI library recommendations, Tailwind CSS v4.1+ hacker system, and enterprise backend expert system.",
    technologies: [
      "PowerShell",
      "TypeScript", 
      "Next.js",
      "Node.js",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
      "Tailwind CSS",
      "shadcn/ui"
    ],
    category: "Enterprise",
    featured: true,
    githubUrl: "https://github.com/Rene-Kuhm/opencode-productivity-suite",
    imageUrl: "/projects/opencode-suite.png",
    completedAt: new Date("2025-01-11"),
    highlights: [
      "Zero Defect Programming methodology implementation",
      "38+ framework automatic detection and optimization",
      "Enterprise backend patterns (DDD, CQRS, Event Sourcing)",
      "Smart Tailwind CSS v4.1+ hacker system",
      "Component library intelligence for all major frameworks",
      "Production-ready Docker & Kubernetes configurations"
    ],
    metrics: {
      linesOfCode: 15000,
      contributors: 1,
      performanceImprovement: "5x faster development cycles"
    }
  },
  {
    id: "backend-expert-system",
    title: "Backend Expert System",
    description: "Intelligent backend architecture analysis engine with enterprise pattern recommendations and code generation.",
    longDescription: "An AI-powered system that analyzes codebases and automatically recommends enterprise architecture patterns based on project scale, complexity, and business requirements. Generates production-ready backend implementations with DDD, CQRS, Event Sourcing, and Hexagonal Architecture patterns.",
    technologies: [
      "PowerShell",
      "TypeScript",
      "NestJS",
      "EventStoreDB",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "OpenTelemetry",
      "HashiCorp Vault"
    ],
    category: "Backend",
    featured: true,
    githubUrl: "https://github.com/Rene-Kuhm/backend-expert-system",
    imageUrl: "/projects/backend-expert.png",
    completedAt: new Date("2025-01-10"),
    highlights: [
      "Intelligent project scale detection (Startup → Unicorn)",
      "Enterprise pattern recommendations (DDD, CQRS, Event Sourcing)",
      "Automated code generation for complex business domains",
      "Production deployment configurations",
      "Security and monitoring best practices integration"
    ],
    metrics: {
      linesOfCode: 8500,
      performanceImprovement: "3-4x faster architecture decisions"
    }
  },
  {
    id: "smart-tailwind-detection",
    title: "Smart Tailwind CSS Detection System",
    description: "Revolutionary CSS framework detection and optimization system with v4.1+ hacker-level features.",
    longDescription: "Advanced system that intelligently detects UI vs Backend frameworks and applies Tailwind CSS only where appropriate. Features cutting-edge CSS capabilities including container queries, color-mix(), cascade layers, and glass morphism effects with 5x performance improvements.",
    technologies: [
      "CSS",
      "PostCSS",
      "Tailwind CSS v4.1+",
      "TypeScript",
      "PowerShell",
      "Node.js"
    ],
    category: "Full-Stack",
    featured: false,
    githubUrl: "https://github.com/Rene-Kuhm/smart-tailwind-detection",
    imageUrl: "/projects/tailwind-hacker.png",
    completedAt: new Date("2025-01-09"),
    highlights: [
      "Smart UI/Backend framework classification",
      "Tailwind CSS v4.1+ cutting-edge features",
      "5x faster build performance",
      "Glass morphism and advanced visual effects",
      "Container queries and modern CSS features"
    ],
    metrics: {
      linesOfCode: 3200,
      performanceImprovement: "5x faster CSS builds"
    }
  },
  {
    id: "component-library-intelligence",
    title: "Component Library Intelligence",
    description: "Data-driven UI component library recommendation and auto-installation system for 38+ frameworks.",
    longDescription: "Comprehensive database and recommendation engine for UI component libraries across all major frontend frameworks. Automatically detects frameworks and installs the most suitable UI libraries with confidence scoring and framework-specific integrations.",
    technologies: [
      "JSON",
      "TypeScript",
      "PowerShell",
      "Node.js",
      "React",
      "Vue.js",
      "Angular",
      "Svelte"
    ],
    category: "Full-Stack",
    featured: false,
    githubUrl: "https://github.com/Rene-Kuhm/component-library-intelligence",
    imageUrl: "/projects/component-intelligence.png",
    completedAt: new Date("2025-01-08"),
    highlights: [
      "38+ framework support with confidence scoring",
      "Data-driven component library recommendations",
      "Automatic installation and configuration",
      "Framework-specific integration patterns",
      "Popularity and maintenance scoring"
    ],
    metrics: {
      linesOfCode: 2100,
      contributors: 1
    }
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return projects.filter(project => project.category === category);
};