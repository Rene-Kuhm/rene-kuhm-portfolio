import { ContactInfo, SocialLink } from "@/types";

export const personalInfo = {
  name: "René Kuhm",
  title: "Backend Architect & Enterprise Systems Engineer",
  subtitle: "Crafting Zero-Defect Enterprise Solutions",
  bio: "Passionate backend architect specializing in Domain-Driven Design, CQRS, Event Sourcing, and enterprise-grade automation systems. Creator of the OpenCode Productivity Suite and advocate for Zero Defect Programming methodologies.",
  location: "Remote • Global",
  timezone: "GMT-3 (Buenos Aires)",
  yearsOfExperience: 8,
  
  // Professional highlights
  highlights: [
    "Designed and implemented enterprise backend systems serving millions of users",
    "Created OpenCode Productivity Suite - revolutionary development automation platform",
    "Expert in Domain-Driven Design, CQRS, and Event Sourcing patterns",
    "Specialized in Zero Defect Programming and ultra-strict quality standards",
    "Built intelligent framework detection systems for 38+ technologies",
    "Architected microservices with Docker, Kubernetes, and modern DevOps practices"
  ],

  // Core expertise areas
  expertise: [
    "Enterprise Architecture (DDD, CQRS, Event Sourcing, Hexagonal Architecture)",
    "Backend Systems (Node.js, NestJS, TypeScript, PostgreSQL, Redis)",
    "DevOps & Infrastructure (Docker, Kubernetes, GitHub Actions, HashiCorp Vault)",
    "System Automation (PowerShell, CI/CD, Development Productivity Tools)",
    "Frontend Integration (Next.js, React, Tailwind CSS, Modern UI Libraries)",
    "Quality Engineering (Zero Defect Programming, Ultra-Strict TypeScript)"
  ],

  // Philosophy & approach
  philosophy: "Every line of code should be intentional, every architecture decision should be documented, and every system should be built to last. I believe in Zero Defect Programming - not as an impossible goal, but as a north star that guides us toward excellence.",

  // Fun facts
  interests: [
    "Enterprise Architecture Patterns",
    "Development Automation",
    "Open Source Contributions", 
    "System Design & Scalability",
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