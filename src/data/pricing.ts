export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  deliverables: string[];
  guarantee: string;
  popular?: boolean;
  enterprise?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "audit",
    name: "System Audit & Optimization",
    description: "Comprehensive analysis and quick wins implementation",
    price: "$5,000",
    duration: "2-3 weeks",
    features: [
      "Complete system performance audit",
      "Zero Defect configuration setup",
      "Critical bug and security vulnerability detection",
      "Performance optimization recommendations",
      "Implementation roadmap with ROI projections"
    ],
    deliverables: [
      "Detailed audit report with actionable insights",
      "Configured Zero Defect development environment",
      "Performance optimization implementation",
      "2-hour knowledge transfer session"
    ],
    guarantee: "Guaranteed 40% performance improvement or money back"
  },
  {
    id: "transformation",
    name: "Enterprise Transformation",
    description: "Complete system modernization and scaling preparation",
    price: "$12,000",
    duration: "6-8 weeks",
    features: [
      "Full-stack architecture redesign",
      "Microservices migration with CQRS/Event Sourcing",
      "Zero Defect Programming implementation",
      "CI/CD pipeline with automated quality gates",
      "Team training and best practices transfer",
      "6-month ongoing support included"
    ],
    deliverables: [
      "Modernized enterprise-grade architecture",
      "Automated deployment pipeline",
      "Comprehensive documentation and runbooks",
      "Team training materials and workshops",
      "24/7 monitoring and alerting setup"
    ],
    guarantee: "ROI guarantee: 2x investment return within 12 months",
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise Partnership",
    description: "Long-term strategic technology partnership",
    price: "$25,000+",
    duration: "3-6 months",
    features: [
      "Dedicated senior architect (part-time allocation)",
      "Strategic technology roadmap planning",
      "Custom automation and productivity tools",
      "Enterprise integration and scaling solutions",
      "Priority support and emergency response",
      "Ongoing architecture consulting",
      "Team mentoring and knowledge transfer"
    ],
    deliverables: [
      "Strategic technology roadmap (12-24 months)",
      "Custom enterprise automation platform",
      "Scalable architecture for 10x growth",
      "Comprehensive team training program",
      "Ongoing architectural guidance",
      "Emergency support availability"
    ],
    guarantee: "Strategic partnership with guaranteed business impact",
    enterprise: true
  }
];

export const pricingFAQ = [
  {
    question: "How do you guarantee ROI within specific timeframes?",
    answer: "All implementations include measurable KPIs agreed upon upfront. If agreed savings/improvements aren't achieved within the guarantee period, I provide additional work at no cost until targets are met."
  },
  {
    question: "What happens if my team needs additional training?",
    answer: "All packages include comprehensive knowledge transfer. Enterprise Partnership includes ongoing mentoring. Additional training sessions are available at $2,000/day."
  },
  {
    question: "Can packages be customized for specific needs?",
    answer: "Absolutely. These are starting frameworks. I typically create custom proposals after the initial consultation to match your specific requirements and budget."
  },
  {
    question: "What industries do you work with most?",
    answer: "Primary focus on B2B SaaS, Fintech, E-commerce, and Healthcare Tech. Experience with companies from 10 to 200+ developers."
  },
  {
    question: "Do you work remotely or on-site?",
    answer: "Primarily remote with occasional on-site visits for enterprise clients. All implementations include regular video calls and screen-sharing sessions."
  }
];

export const consultationProcess = {
  title: "Free 30-Minute Strategy Session",
  description: "Get a clear roadmap and ROI projection for your specific situation",
  steps: [
    {
      title: "Current State Assessment",
      description: "Quick analysis of your existing systems, team, and pain points"
    },
    {
      title: "ROI Projection",
      description: "Calculate potential savings and improvements specific to your context"
    },
    {
      title: "Implementation Strategy",
      description: "Outline approach, timeline, and success metrics"
    },
    {
      title: "Next Steps",
      description: "Clear recommendation on best package or custom approach"
    }
  ]
};