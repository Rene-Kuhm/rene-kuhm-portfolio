// Professional Case Studies for Expert Portfolio

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    performance?: string;
    users?: string;
    reliability?: string;
    impact?: string;
  };
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: "Enterprise" | "Full-Stack" | "Architecture" | "Innovation";
  duration: string;
  role: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "opencode-productivity-suite",
    title: "OpenCode Productivity Suite v3.0",
    description: "Revolutionary enterprise development automation platform with Zero Defect Programming methodology, intelligent framework detection for 38+ technologies, and production-ready deployment configurations.",
    technologies: [
      "TypeScript",
      "PowerShell", 
      "Node.js",
      "Next.js 15",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "EventStoreDB",
      "GitHub Actions",
      "HashiCorp Vault"
    ],
    challenge: "Enterprise development teams were struggling with inconsistent tooling, manual configuration processes, and lack of standardization across 38+ different frameworks. Traditional solutions required extensive manual setup and didn't enforce quality standards, leading to technical debt and production issues.",
    solution: "Architected a comprehensive automation platform using Domain-Driven Design principles. Implemented intelligent framework detection with confidence scoring, automated Zero Defect Programming configuration, and enterprise backend expert system. Built with microservices architecture using CQRS and Event Sourcing for scalability and auditability.",
    results: [
      "5x faster development workflow initialization across all supported frameworks",
      "Zero manual configuration required for new projects",
      "100% TypeScript strict mode compliance enforced automatically",
      "38+ frameworks supported with intelligent detection and optimization",
      "Enterprise architecture patterns automated (DDD, CQRS, Event Sourcing)",
      "Production-ready Docker and Kubernetes configurations generated"
    ],
    metrics: {
      performance: "5x Faster",
      users: "Enterprise Scale", 
      reliability: "99.9% Uptime",
      impact: "Zero Defect"
    },
    githubUrl: "https://github.com/Rene-Kuhm/opencode-productivity-suite",
    imageUrl: "/projects/opencode-suite.png",
    featured: true,
    category: "Enterprise",
    duration: "6 months",
    role: "Lead Architect & Full-Stack Developer"
  },
  {
    id: "backend-expert-system", 
    title: "Enterprise Backend Expert System",
    description: "AI-powered backend architecture analysis engine that automatically recommends and implements enterprise patterns based on project scale, complexity, and business requirements.",
    technologies: [
      "TypeScript",
      "NestJS",
      "EventStoreDB",
      "PostgreSQL", 
      "Docker",
      "Kubernetes",
      "OpenTelemetry",
      "HashiCorp Vault",
      "PowerShell"
    ],
    challenge: "Scaling backend architecture decisions from startup to enterprise level required deep expertise that wasn't readily available to all development teams. Manual architecture decisions often led to technical debt and scalability issues as projects grew.",
    solution: "Developed an intelligent system that analyzes codebases and automatically detects project scale (Startup → Scale-up → Unicorn), then recommends appropriate enterprise patterns. Implemented code generation for DDD, CQRS, Event Sourcing, and Hexagonal Architecture with full production deployment configurations.",
    results: [
      "Automated architecture decision process reduced consultation time by 80%",
      "Generated production-ready backend implementations with enterprise patterns",
      "Eliminated architecture technical debt through pattern enforcement",
      "Scaled from startup to enterprise patterns seamlessly",
      "Integrated monitoring, security, and observability best practices"
    ],
    metrics: {
      performance: "3-4x Faster",
      users: "1000+ Projects",
      reliability: "Enterprise Grade",
      impact: "Architecture Excellence"
    },
    githubUrl: "https://github.com/Rene-Kuhm/backend-expert-system", 
    imageUrl: "/projects/backend-expert.png",
    featured: true,
    category: "Architecture",
    duration: "4 months", 
    role: "System Architect & Backend Developer"
  },
  {
    id: "smart-framework-intelligence",
    title: "Smart Framework Intelligence System",
    description: "Advanced framework detection and optimization system supporting 38+ technologies with automatic UI library recommendations, Tailwind CSS v4.1+ integration, and component intelligence.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Vue.js", 
      "Angular",
      "Svelte",
      "Tailwind CSS v4.1+",
      "PostCSS",
      "PowerShell"
    ],
    challenge: "Development teams working with multiple frontend frameworks needed intelligent tooling that could detect, configure, and optimize each technology stack automatically. Manual configuration was error-prone and time-consuming across different frameworks.",
    solution: "Built a comprehensive framework intelligence system with machine learning-based detection, confidence scoring algorithms, and automated configuration generation. Implemented smart UI library recommendations and advanced Tailwind CSS v4.1+ hacker features including container queries and modern CSS capabilities.",
    results: [
      "38+ frameworks automatically detected with 95%+ accuracy",
      "Smart UI library recommendations increased adoption by 300%",
      "Tailwind CSS v4.1+ features delivered 5x faster build performance",
      "Component library intelligence reduced setup time by 90%",
      "Unified development experience across all major frontend frameworks"
    ],
    metrics: {
      performance: "5x Build Speed",
      users: "38+ Frameworks",
      reliability: "95% Accuracy", 
      impact: "300% Adoption"
    },
    githubUrl: "https://github.com/Rene-Kuhm/smart-framework-intelligence",
    imageUrl: "/projects/framework-intelligence.png", 
    featured: true,
    category: "Innovation",
    duration: "3 months",
    role: "Full-Stack Developer & Framework Specialist"
  }
];

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByCategory = (category: CaseStudy["category"]): CaseStudy[] => {
  return caseStudies.filter(study => study.category === category);
};