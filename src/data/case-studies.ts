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
    challenge: "Development teams at B2B SaaS companies (50-200 developers) were losing $200K/year to manual setup tasks, inconsistent tooling, and production bugs from poor configuration standards. CTOs reported 40% of sprint capacity wasted on repetitive infrastructure work.",
    solution: "Architected AI-powered automation platform that eliminates manual dev setup entirely. Implemented intelligent framework detection with 95%+ accuracy, automated Zero Defect Programming enforcement, and enterprise-grade deployment pipelines. Built using microservices with CQRS/Event Sourcing for enterprise scalability.",
    results: [
      "💰 $170K/year average savings per client through 85% task automation",
      "⚡ 200+ hours/month recovered for feature development (vs infrastructure)",
      "🛡️ 90% reduction in production bugs through enforced quality gates",
      "📈 5x faster time-to-market for new features and products", 
      "🎯 100% TypeScript strict compliance across all 38+ supported frameworks",
      "🚀 Zero-downtime deployments with automated Kubernetes orchestration"
    ],
    metrics: {
      performance: "$170K/year Savings",
      users: "200+ hrs/month", 
      reliability: "90% Bug Reduction",
      impact: "2-Year ROI: 850%"
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
    challenge: "Growing startups (10-100 developers) faced $50K-80K/year in architecture consultation costs and 3-6 month delays scaling from MVP to enterprise. Technical debt accumulation was costing companies $120K+ in refactoring when hitting scale-up phase (1M+ users).",
    solution: "Built AI-powered architecture analyzer that detects project scale automatically and generates enterprise-grade backend patterns. Implements DDD, CQRS, Event Sourcing with production deployments. Eliminates need for expensive architecture consultants while ensuring scalability from day one.",
    results: [
      "💰 $75K/year average savings on architecture consultation fees",
      "🚀 3-6 month faster time-to-enterprise-scale (vs manual refactoring)",
      "📈 Zero technical debt accumulation - enterprise patterns from start",
      "⚡ Automated generation of production-ready microservices architecture",
      "🛡️ Built-in monitoring, security, and observability (saves $30K+ setup)",
      "🎯 Seamless scaling from 1K to 1M+ users without architectural rewrites"
    ],
    metrics: {
      performance: "$75K/year Saved",
      users: "1K → 1M+ Scale",
      reliability: "Zero Tech Debt",
      impact: "6-month faster TTM"
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