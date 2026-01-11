import { ContactInfo, SocialLink } from "@/types";

export const personalInfo = {
  name: "René Kuhm",
  title: "Full-Stack Developer & Enterprise Systems Architect",
  subtitle: "Crafting Zero-Defect Full-Stack Solutions",
  bio: "Passionate full-stack developer specializing in modern frontend frameworks and enterprise backend architecture. Expert in Domain-Driven Design, CQRS, Event Sourcing, and development automation systems. Creator of the OpenCode Productivity Suite and advocate for Zero Defect Programming methodologies.",
  location: "Remote • Global",
  timezone: "GMT-3 (Buenos Aires)",
  yearsOfExperience: 8,
  
  // Professional highlights
  highlights: [
    "Designed and implemented full-stack enterprise systems serving millions of users",
    "Created OpenCode Productivity Suite - revolutionary development automation platform",
    "Expert in modern frontend frameworks (Next.js, React, Vue, Angular) and enterprise backend patterns",
    "Specialized in Zero Defect Programming across the entire technology stack",
    "Built intelligent framework detection systems for 38+ frontend and backend technologies",
    "Architected end-to-end solutions with microservices, Docker, Kubernetes, and modern DevOps"
  ],

  // Core expertise areas
  expertise: [
    "Full-Stack Development (React, Next.js, Vue, Angular, Node.js, NestJS)",
    "Enterprise Architecture (DDD, CQRS, Event Sourcing, Hexagonal Architecture)",
    "Backend Systems (Node.js, NestJS, TypeScript, PostgreSQL, Redis, EventStoreDB)",
    "Frontend Mastery (Modern React, Vue.js, Angular, Tailwind CSS, Component Libraries)",
    "DevOps & Infrastructure (Docker, Kubernetes, GitHub Actions, HashiCorp Vault)",
    "System Automation (PowerShell, CI/CD, Development Productivity Tools)",
    "Quality Engineering (Zero Defect Programming, Ultra-Strict TypeScript)"
  ],

  // Philosophy & approach
  philosophy: "Every line of code should be intentional, every architecture decision should be documented, and every system should be built to last. I believe in Zero Defect Programming across the entire stack - from pixel-perfect frontend components to bulletproof backend services - not as an impossible goal, but as a north star that guides us toward full-stack excellence.",

  // Fun facts
  interests: [
    "Full-Stack Architecture Patterns",
    "Modern Frontend Frameworks",
    "Enterprise Backend Systems",
    "Development Automation",
    "Open Source Contributions", 
    "System Design & Scalability",
    "UI/UX Engineering",
    "DevOps Best Practices",
    "Code Quality & Testing"
  ]
};

export const contactInfo: ContactInfo = {
  email: "rene@kuhm.dev",
  linkedin: "https://linkedin.com/in/rene-kuhm",
  github: "https://github.com/Rene-Kuhm",
  location: "Remote • Global",
  timezone: "GMT-3 (Buenos Aires)",
  availability: "Open to Opportunities"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Rene-Kuhm",
    icon: "github",
    username: "Rene-Kuhm"
  },
  {
    platform: "LinkedIn", 
    url: "https://linkedin.com/in/rene-kuhm",
    icon: "linkedin",
    username: "rene-kuhm"
  },
  {
    platform: "Email",
    url: "mailto:rene@kuhm.dev",
    icon: "mail",
    username: "rene@kuhm.dev"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/rene_kuhm",
    icon: "twitter", 
    username: "@rene_kuhm"
  }
];

// Navigation configuration
export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];