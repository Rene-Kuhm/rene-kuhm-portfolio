"use client";

import { projects, featuredProjects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectCardProps {
  project: typeof projects[0];
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? "ring-2 ring-enterprise-blue-200 dark:ring-enterprise-blue-800" : ""
    }`}>
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-enterprise-blue-500 to-enterprise-blue-700 flex items-center justify-center">
        <div className="text-4xl font-bold text-white opacity-90">
          {project.title.split(" ").map(word => word[0]).join("").toUpperCase()}
        </div>
        {featured && (
          <Badge className="absolute top-4 right-4 bg-success-green-500 text-white">
            Featured
          </Badge>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        {/* Project Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-enterprise-blue-600 dark:group-hover:text-enterprise-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Expanded Description */}
        {isExpanded && project.longDescription && (
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 6).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 6 && (
              <Badge variant="outline" className="text-xs text-muted-foreground">
                +{project.technologies.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Highlights</h4>
          <ul className="space-y-1">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-enterprise-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 p-3 bg-gradient-to-r from-success-green-50 to-enterprise-blue-50 dark:from-success-green-950 dark:to-enterprise-blue-950 rounded-lg">
            <div className="grid grid-cols-2 gap-2 text-center">
              {project.metrics.linesOfCode && (
                <div>
                  <div className="text-sm font-bold text-success-green-700 dark:text-success-green-400">
                    {(project.metrics.linesOfCode / 1000).toFixed(1)}K
                  </div>
                  <div className="text-xs text-muted-foreground">Lines of Code</div>
                </div>
              )}
              {project.metrics.performanceImprovement && (
                <div>
                  <div className="text-sm font-bold text-enterprise-blue-700 dark:text-enterprise-blue-400">
                    {project.metrics.performanceImprovement}
                  </div>
                  <div className="text-xs text-muted-foreground">Performance</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="text-xs"
            >
              View Code
            </Button>
            {project.liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="text-xs"
              >
                Live Demo
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-muted-foreground"
          >
            {isExpanded ? "Less" : "More"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : featuredProjects;

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack enterprise solutions showcasing modern frontend frameworks, 
            backend architecture patterns, automation systems, and development productivity innovations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="flex space-x-4">
            <Button
              variant={!showAllProjects ? "default" : "outline"}
              onClick={() => setShowAllProjects(false)}
            >
              Featured Projects
            </Button>
            <Button
              variant={showAllProjects ? "default" : "outline"}
              onClick={() => setShowAllProjects(true)}
            >
              All Projects ({projects.length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectCard 
                project={project} 
                featured={!showAllProjects && project.featured}
              />
            </div>
          ))}
        </div>

        {/* OpenCode Productivity Suite Highlight */}
        {!showAllProjects && (
          <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Card className="p-8 bg-gradient-to-br from-enterprise-blue-50 via-white to-success-green-50 dark:from-enterprise-blue-950 dark:via-background dark:to-success-green-950 border-enterprise-blue-200 dark:border-enterprise-blue-800">
              <div className="text-center">
                <Badge className="mb-4 bg-enterprise-blue-600 text-white">
                  🚀 Flagship Project
                </Badge>
                <h3 className="text-2xl font-bold mb-4 text-enterprise-blue-700 dark:text-enterprise-blue-300">
                  OpenCode Productivity Suite v3.0
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  The world&apos;s most advanced development productivity system, featuring Zero Defect Programming, 
                  enterprise architecture patterns, and intelligent automation for 38+ frameworks.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {[
                    "Zero Defect Programming",
                    "Enterprise Architecture",
                    "38+ Framework Support",
                    "Smart Automation",
                    "Kubernetes Ready"
                  ].map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-enterprise-blue-100 text-enterprise-blue-800 dark:bg-enterprise-blue-900 dark:text-enterprise-blue-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={() => window.open("https://github.com/Rene-Kuhm/opencode-productivity-suite", "_blank")}
                    className="bg-enterprise-blue-600 hover:bg-enterprise-blue-700"
                  >
                    Explore Repository
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAllProjects(true)}
                    className="border-enterprise-blue-300 text-enterprise-blue-700 hover:bg-enterprise-blue-50 dark:border-enterprise-blue-700 dark:text-enterprise-blue-300 dark:hover:bg-enterprise-blue-950"
                  >
                    View All Projects
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}