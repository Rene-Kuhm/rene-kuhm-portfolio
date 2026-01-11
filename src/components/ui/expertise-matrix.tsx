"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ExpertiseItem {
  category: string;
  technologies: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient";
    years: number;
    projects?: number;
  }[];
}

interface ExpertiseMatrixProps {
  className?: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    category: "Frontend Mastery",
    technologies: [
      { name: "React", level: "Expert", years: 7, projects: 15 },
      { name: "Next.js", level: "Expert", years: 5, projects: 12 },
      { name: "Vue.js", level: "Expert", years: 5, projects: 8 },
      { name: "Angular", level: "Advanced", years: 4, projects: 6 },
      { name: "Svelte", level: "Advanced", years: 3, projects: 4 },
      { name: "TypeScript", level: "Expert", years: 6, projects: 20 },
    ]
  },
  {
    category: "Backend Excellence",
    technologies: [
      { name: "Node.js", level: "Expert", years: 7, projects: 18 },
      { name: "NestJS", level: "Expert", years: 4, projects: 10 },
      { name: "Express.js", level: "Expert", years: 6, projects: 15 },
      { name: "PostgreSQL", level: "Advanced", years: 6, projects: 12 },
      { name: "Redis", level: "Advanced", years: 5, projects: 8 },
      { name: "EventStoreDB", level: "Advanced", years: 3, projects: 5 },
    ]
  },
  {
    category: "Architecture Patterns",
    technologies: [
      { name: "Domain-Driven Design", level: "Expert", years: 5, projects: 8 },
      { name: "CQRS + Event Sourcing", level: "Expert", years: 4, projects: 6 },
      { name: "Microservices", level: "Expert", years: 6, projects: 10 },
      { name: "Hexagonal Architecture", level: "Expert", years: 4, projects: 7 },
      { name: "Clean Architecture", level: "Advanced", years: 5, projects: 9 },
      { name: "Zero Defect Programming", level: "Expert", years: 3, projects: 12 },
    ]
  },
  {
    category: "DevOps & Infrastructure", 
    technologies: [
      { name: "Docker", level: "Expert", years: 5, projects: 15 },
      { name: "Kubernetes", level: "Advanced", years: 4, projects: 8 },
      { name: "GitHub Actions", level: "Expert", years: 5, projects: 20 },
      { name: "HashiCorp Vault", level: "Advanced", years: 3, projects: 5 },
      { name: "OpenTelemetry", level: "Advanced", years: 2, projects: 4 },
      { name: "PowerShell", level: "Expert", years: 6, projects: 25 },
    ]
  }
];

export function ExpertiseMatrix({ className }: ExpertiseMatrixProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-success-green-100 text-success-green-800 border-success-green-200 dark:bg-success-green-900 dark:text-success-green-200";
      case "Advanced": 
        return "bg-enterprise-blue-100 text-enterprise-blue-800 border-enterprise-blue-200 dark:bg-enterprise-blue-900 dark:text-enterprise-blue-200";
      case "Proficient":
        return "bg-warning-orange-100 text-warning-orange-800 border-warning-orange-200 dark:bg-warning-orange-900 dark:text-warning-orange-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert": return "🏆";
      case "Advanced": return "🎯"; 
      case "Proficient": return "⭐";
      default: return "📍";
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">
          <GradientText gradient="enterprise">Technical Expertise Matrix</GradientText>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive full-stack capabilities across modern technologies and enterprise patterns
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {expertiseData.map((category, categoryIndex) => (
          <GlassCard 
            key={category.category}
            variant="default"
            intensity="medium"
            className="p-6 hover:shadow-xl transition-all duration-500"
          >
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">
                <GradientText 
                  gradient={categoryIndex % 2 === 0 ? "enterprise" : "success"}
                >
                  {category.category}
                </GradientText>
              </h4>
              <div className="h-1 w-16 bg-gradient-to-r from-enterprise-blue-500 to-success-green-500 rounded-full" />
            </div>

            <div className="space-y-4">
              {category.technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {getLevelIcon(tech.level)}
                    </span>
                    <div>
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {tech.years} years • {tech.projects || 0} projects
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={cn(
                      "text-xs font-medium",
                      getLevelColor(tech.level)
                    )}
                  >
                    {tech.level}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Category Summary */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Technologies: {category.technologies.length}</span>
                <span>
                  Expert Level: {category.technologies.filter(t => t.level === "Expert").length}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Overall Stats */}
      <GlassCard variant="enterprise" intensity="medium" className="p-8">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold mb-2">
            <GradientText gradient="rainbow">Expertise Overview</GradientText>
          </h4>
          <p className="text-muted-foreground">
            Quantified technical proficiency across the full technology stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success-green-600 dark:text-success-green-400 mb-2">
              {expertiseData.reduce((acc, cat) => acc + cat.technologies.filter(t => t.level === "Expert").length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Expert Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400 mb-2">
              {expertiseData.reduce((acc, cat) => acc + cat.technologies.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning-orange-600 dark:text-warning-orange-400 mb-2">
              {Math.round(expertiseData.reduce((acc, cat) => acc + cat.technologies.reduce((sum, t) => sum + t.years, 0), 0) / expertiseData.reduce((acc, cat) => acc + cat.technologies.length, 0))}+
            </div>
            <div className="text-sm text-muted-foreground">Avg Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {expertiseData.reduce((acc, cat) => acc + cat.technologies.reduce((sum, t) => sum + (t.projects || 0), 0), 0)}+
            </div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}