"use client";

import { projects, featuredProjects } from "@/data/projects";
import { caseStudies, getFeaturedCaseStudies } from "@/data/case-studies";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useState } from "react";

export function Projects() {
  const [viewMode, setViewMode] = useState<"case-studies" | "projects">("case-studies");
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : featuredProjects;
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-enterprise-blue-50/10 to-success-green-50/10 dark:via-enterprise-blue-950/10 dark:to-success-green-950/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-enterprise-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-success-green-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <GradientText gradient="enterprise">Case Studies & Projects</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade full-stack solutions with detailed case studies showcasing 
            system architecture, technical challenges, and measurable business impact
          </p>
        </AnimatedSection>

        {/* View Mode Toggle */}
        <AnimatedSection animation="slideUp" delay={200} className="flex justify-center mb-16">
          <GlassCard variant="default" intensity="light" className="p-2">
            <div className="flex space-x-1">
              <Button
                variant={viewMode === "case-studies" ? "default" : "ghost"}
                onClick={() => setViewMode("case-studies")}
                className={viewMode === "case-studies" ? "bg-enterprise-blue-600 hover:bg-enterprise-blue-700 text-white" : ""}
              >
                📊 Case Studies
              </Button>
              <Button
                variant={viewMode === "projects" ? "default" : "ghost"}
                onClick={() => setViewMode("projects")}
                className={viewMode === "projects" ? "bg-enterprise-blue-600 hover:bg-enterprise-blue-700 text-white" : ""}
              >
                🚀 Project Gallery
              </Button>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Case Studies View */}
        {viewMode === "case-studies" && (
          <div className="space-y-12">
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="text-center mb-12">
                <Badge className="bg-enterprise-blue-100 text-enterprise-blue-800 border-enterprise-blue-200 dark:bg-enterprise-blue-900 dark:text-enterprise-blue-200 mb-4">
                  📈 Detailed Case Studies
                </Badge>
                <h3 className="text-3xl font-bold mb-4">
                  <GradientText gradient="success">Technical Deep Dives</GradientText>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive analysis of challenges, solutions, and impact with measurable business outcomes
                </p>
              </div>
            </AnimatedSection>

            {/* Featured Case Studies */}
            <div className="space-y-8">
              {featuredCaseStudies.map((caseStudy, index) => (
                <AnimatedSection 
                  key={caseStudy.id}
                  animation="slideUp"
                  delay={600 + index * 200}
                >
                  <CaseStudyCard
                    title={caseStudy.title}
                    description={caseStudy.description}
                    technologies={caseStudy.technologies}
                    challenge={caseStudy.challenge}
                    solution={caseStudy.solution}
                    results={caseStudy.results}
                    metrics={caseStudy.metrics}
                    githubUrl={caseStudy.githubUrl}
                    {...(caseStudy.liveUrl && { liveUrl: caseStudy.liveUrl })}
                    imageUrl={caseStudy.imageUrl}
                    featured={caseStudy.featured}
                  />
                </AnimatedSection>
              ))}
            </div>

            {/* Impact Summary */}
            <AnimatedSection animation="slideUp" delay={1200}>
              <GlassCard variant="enterprise" intensity="medium" className="p-10 text-center">
                <h3 className="text-3xl font-bold mb-6">
                  <GradientText gradient="rainbow">Cumulative Impact</GradientText>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400 mb-2">
                      38+
                    </div>
                    <div className="text-sm text-muted-foreground">Frameworks Supported</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-success-green-600 dark:text-success-green-400 mb-2">
                      5x
                    </div>
                    <div className="text-sm text-muted-foreground">Performance Improvement</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-warning-orange-600 dark:text-warning-orange-400 mb-2">
                      15K+
                    </div>
                    <div className="text-sm text-muted-foreground">Lines of Code</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Enterprise Grade</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        )}

        {/* Projects Gallery View */}
        {viewMode === "projects" && (
          <div className="space-y-12">
            {/* Filter Buttons */}
            <AnimatedSection animation="slideUp" delay={400} className="flex justify-center">
              <div className="flex space-x-4">
                <Button
                  variant={!showAllProjects ? "default" : "outline"}
                  onClick={() => setShowAllProjects(false)}
                  className={!showAllProjects ? "bg-enterprise-blue-600 hover:bg-enterprise-blue-700" : ""}
                >
                  🌟 Featured Projects
                </Button>
                <Button
                  variant={showAllProjects ? "default" : "outline"}
                  onClick={() => setShowAllProjects(true)}
                  className={showAllProjects ? "bg-enterprise-blue-600 hover:bg-enterprise-blue-700" : ""}
                >
                  📁 All Projects ({projects.length})
                </Button>
              </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="slideUp"
                  delay={600 + index * 150}
                >
                  <GlassCard 
                    variant={project.featured ? "enterprise" : "default"}
                    intensity="medium"
                    className="group hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-enterprise-blue-500 to-success-green-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white opacity-90">
                          {project.title.split(" ").map(word => word[0]).join("").toUpperCase()}
                        </div>
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-success-green-500 text-white">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="secondary" className="absolute top-4 left-4 text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-enterprise-blue-600 dark:group-hover:text-enterprise-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs text-muted-foreground">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="mb-4 p-3 bg-gradient-to-r from-enterprise-blue-50/50 to-success-green-50/50 dark:from-enterprise-blue-950/30 dark:to-success-green-950/30 rounded-lg">
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            {project.metrics.performanceImprovement && (
                              <div>
                                <div className="font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                                  {project.metrics.performanceImprovement}
                                </div>
                                <div className="text-muted-foreground">Performance</div>
                              </div>
                            )}
                            {project.metrics.linesOfCode && (
                              <div>
                                <div className="font-bold text-success-green-600 dark:text-success-green-400">
                                  {(project.metrics.linesOfCode / 1000).toFixed(1)}K
                                </div>
                                <div className="text-muted-foreground">Lines</div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="mt-auto flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="flex-1 text-xs"
                        >
                          Code
                        </Button>
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                            className="flex-1 text-xs bg-enterprise-blue-600 hover:bg-enterprise-blue-700"
                          >
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* OpenCode Highlight */}
        <AnimatedSection animation="slideUp" delay={1000}>
          <div className="mt-20">
            <GlassCard variant="enterprise" intensity="strong" className="p-10 bg-gradient-to-br from-enterprise-blue-50 via-white to-success-green-50 dark:from-enterprise-blue-950 dark:via-background dark:to-success-green-950 border-enterprise-blue-200 dark:border-enterprise-blue-800">
              <div className="text-center">
                <Badge className="mb-6 bg-gradient-to-r from-enterprise-blue-600 to-success-green-600 text-white text-sm px-6 py-2">
                  🚀 Flagship Innovation
                </Badge>
                <h3 className="text-4xl font-bold mb-6">
                  <GradientText gradient="rainbow">OpenCode Productivity Suite v3.0</GradientText>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  The world&apos;s most advanced development productivity system, revolutionizing how enterprise teams 
                  build and deploy applications with Zero Defect Programming methodology and intelligent automation.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {[
                    "Zero Defect Programming",
                    "38+ Framework Support", 
                    "Enterprise Architecture",
                    "Kubernetes Ready",
                    "5x Performance Gain"
                  ].map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-white/80 text-enterprise-blue-800 dark:bg-enterprise-blue-900/80 dark:text-enterprise-blue-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    size="lg"
                    onClick={() => window.open("https://github.com/Rene-Kuhm/opencode-productivity-suite", "_blank")}
                    className="bg-gradient-to-r from-enterprise-blue-600 to-enterprise-blue-700 hover:from-enterprise-blue-700 hover:to-enterprise-blue-800 text-white px-8 py-3"
                  >
                    🔍 Explore Architecture
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setViewMode("case-studies")}
                    className="border-2 border-enterprise-blue-300 text-enterprise-blue-700 hover:bg-enterprise-blue-50 dark:border-enterprise-blue-700 dark:text-enterprise-blue-300 dark:hover:bg-enterprise-blue-950 px-8 py-3"
                  >
                    📊 View Case Study
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}