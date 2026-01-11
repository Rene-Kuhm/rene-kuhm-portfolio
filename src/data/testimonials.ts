export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companySize: string;
  image: string;
  quote: string;
  impact: string;
  savings: string;
  industry: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "cto-fintech",
    name: "Sarah Chen",
    role: "CTO",
    company: "FinanceFlow",
    companySize: "150 employees",
    image: "/testimonials/sarah-chen.jpg",
    quote: "René eliminated all our deployment failures overnight. His Zero Defect system caught 47 critical bugs before production. The ROI was immediate.",
    impact: "99.9% uptime achieved",
    savings: "$180K/year in prevented downtime",
    industry: "B2B Fintech",
    featured: true
  },
  {
    id: "vp-saas",
    name: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "CloudScale Solutions",
    companySize: "80 employees",
    image: "/testimonials/marcus-rodriguez.jpg",
    quote: "OpenCode Suite transformed our development velocity. We went from 2-week sprints to daily releases without breaking anything. Game changer.",
    impact: "5x faster deployment",
    savings: "$120K/year in developer productivity",
    industry: "Enterprise SaaS",
    featured: true
  },
  {
    id: "founder-startup",
    name: "Elena Vasquez",
    role: "Founder & CEO",
    company: "DataSync Technologies",
    companySize: "25 employees",
    image: "/testimonials/elena-vasquez.jpg",
    quote: "René's architecture expertise saved us $80K in consultant fees and 6 months of refactoring. We scaled from 1K to 100K users seamlessly.",
    impact: "100x user scale achieved",
    savings: "$80K in consultation fees",
    industry: "Data Analytics",
    featured: true
  },
  {
    id: "lead-ecommerce",
    name: "David Kim",
    role: "Tech Lead",
    company: "RetailMax",
    companySize: "200 employees", 
    image: "/testimonials/david-kim.jpg",
    quote: "The performance optimizations René implemented during Black Friday saved our revenue. Zero downtime during our highest traffic ever.",
    impact: "Peak traffic handled flawlessly",
    savings: "$250K in revenue protected",
    industry: "E-commerce",
    featured: false
  },
  {
    id: "cto-healthcare",
    name: "Dr. Amanda Foster",
    role: "CTO",
    company: "MedTech Solutions",
    companySize: "120 employees",
    image: "/testimonials/amanda-foster.jpg",
    quote: "HIPAA compliance and zero downtime are critical for us. René delivered both while reducing our infrastructure costs by 40%.",
    impact: "HIPAA compliant architecture",
    savings: "$95K/year in infrastructure",
    industry: "Healthcare Tech",
    featured: false
  }
];

export const clientMetrics = {
  totalClients: 15,
  averageSavings: 127000,
  totalValueGenerated: 2500000,
  clientRetention: 100,
  averageProjectDuration: "3-8 weeks",
  industries: ["Fintech", "SaaS", "E-commerce", "Healthcare", "Data Analytics"]
};