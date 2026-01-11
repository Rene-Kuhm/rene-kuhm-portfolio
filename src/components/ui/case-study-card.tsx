"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { ProjectImagePlaceholder } from "@/components/ui/project-image-placeholder";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  metrics?: {
    performance?: string;
    users?: string;
    reliability?: string;
    impact?: string;
  };
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  className?: string;
}

export function CaseStudyCard({
  title,
  description,
  technologies,
  challenge,
  solution,
  results,
  metrics,
  githubUrl,
  liveUrl,
  imageUrl,
  featured = false,
  className,
}: CaseStudyCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "challenge" | "solution" | "results">("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
  ] as const;

  return (
    <GlassCard 
      variant={featured ? "enterprise" : "default"}
      intensity="medium"
      className={cn(
        "group overflow-hidden hover:shadow-2xl transition-all duration-500",
        featured && "ring-2 ring-enterprise-blue-200 dark:ring-enterprise-blue-800",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <ProjectImagePlaceholder 
          title={title}
          type={
            title.includes('OpenCode') ? 'opencode' :
            title.includes('Backend') ? 'backend' :
            title.includes('Detection') ? 'detection' :
            'component'
          }
          className="absolute inset-0"
        />
        {featured && (
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              ⭐ Featured Case Study
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-black/20 text-white border-white/30">
            Full-Stack
          </Badge>
        </div>
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-enterprise-blue-600 dark:group-hover:text-enterprise-blue-400 transition-colors">
            <GradientText gradient="enterprise">{title}</GradientText>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 6).map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs hover:bg-enterprise-blue-50 hover:border-enterprise-blue-200 dark:hover:bg-enterprise-blue-950 dark:hover:border-enterprise-blue-800 transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 6 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{technologies.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Case Study Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 mb-4 bg-muted/50 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-800 text-enterprise-blue-600 dark:text-enterprise-blue-400 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[120px]">
            {activeTab === "overview" && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                {metrics && (
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "challenge" && (
              <div className="space-y-3">
                <h5 className="font-semibold text-warning-orange-600 dark:text-warning-orange-400">
                  Technical Challenge
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge}
                </p>
              </div>
            )}

            {activeTab === "solution" && (
              <div className="space-y-3">
                <h5 className="font-semibold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                  Architecture & Implementation
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution}
                </p>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-3">
                <h5 className="font-semibold text-success-green-600 dark:text-success-green-400">
                  Impact & Outcomes
                </h5>
                <ul className="space-y-2">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-success-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, "_blank")}
              className="text-xs hover:bg-enterprise-blue-50 hover:border-enterprise-blue-200 dark:hover:bg-enterprise-blue-950"
            >
              View Source
            </Button>
            {liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(liveUrl, "_blank")}
                className="text-xs bg-enterprise-blue-600 hover:bg-enterprise-blue-700"
              >
                Live Demo
              </Button>
            )}
          </div>
          <Badge variant="outline" className="text-xs">
            Case Study
          </Badge>
        </div>
      </div>
    </GlassCard>
  );
}