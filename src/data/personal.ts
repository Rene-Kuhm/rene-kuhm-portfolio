import { ContactInfo, SocialLink } from "@/types";

export const personalInfo = {
  name: "René Kuhm",
  title: "Enterprise Performance Optimization Specialist",
  subtitle: "I help B2B SaaS companies eliminate downtime and scale 10x without breaking",
  bio: "Zero Defect Systems Architect with 8+ years scaling enterprise platforms from 1K to 1M+ users. Creator of OpenCode Productivity Suite that saves development teams $170K/year. Expert in eliminating performance bottlenecks and preventing costly system failures.",
  location: "Remote • Global",
  timezone: "GMT-3 (Buenos Aires)",
  yearsOfExperience: 8,
  
  // Professional highlights with ROI metrics
  highlights: [
    "💰 Average Client Saves: $127K/year in prevented system failures and downtime",
    "🚀 OpenCode Suite: Saves development teams 200+ hours/month (85% task reduction)",
    "⚡ 3-Week Implementation, 2-Year ROI Guarantee on performance optimizations",
    "📈 Scaled systems from 1K to 1M+ users without breaking (99.9% uptime achieved)",
    "🛡️ Zero Defect Deployment Systems - 90% reduction in post-deployment bugs",
    "🏆 $2.5M+ total value generated across 15+ enterprise implementations"
  ],

  // Client impact metrics
  clientMetrics: {
    totalValueGenerated: "$2.5M+",
    averageClientSavings: "$127K/year",
    uptimeAchieved: "99.9%",
    bugReduction: "90%",
    implementationTime: "3 weeks",
    clientRetention: "100%",
    hourseSaved: "200+/month"
  },

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
  email: "renekuhm2@gmail.com",
  phone: "+54 2334 409838",
  linkedin: "https://www.linkedin.com/in/rene-kuhm-fullstack/",
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
    url: "https://www.linkedin.com/in/rene-kuhm-fullstack/",
    icon: "linkedin",
    username: "rene-kuhm-fullstack"
  },
  {
    platform: "Email",
    url: "mailto:renekuhm2@gmail.com",
    icon: "mail",
    username: "renekuhm2@gmail.com"
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