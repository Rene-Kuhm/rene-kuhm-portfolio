"use client";

import { personalInfo } from "@/data/personal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MetricCounter } from "@/components/ui/metric-counter";

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/20 via-background to-enterprise-blue-50/20 dark:to-enterprise-blue-950/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-enterprise-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-success-green-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <GradientText gradient="enterprise">About Me</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building full-stack enterprise solutions with passion, precision, and purpose
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Bio */}
          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="space-y-8">
              <GlassCard variant="enterprise" intensity="medium" className="p-10 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold mb-6">
                  <GradientText gradient="enterprise">My Journey</GradientText>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {personalInfo.bio}
                </p>
                <div className="relative p-6 bg-gradient-to-br from-enterprise-blue-50/50 to-success-green-50/50 dark:from-enterprise-blue-950/30 dark:to-success-green-950/30 rounded-xl border border-enterprise-blue-200/50 dark:border-enterprise-blue-800/50">
                  <p className="text-muted-foreground leading-relaxed italic">
                    {personalInfo.philosophy}
                  </p>
                </div>
              </GlassCard>

              {/* Core Principles */}
              <GlassCard variant="success" intensity="medium" className="p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText gradient="success">Core Principles</GradientText>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Zero Defect Programming across the entire technology stack",
                    "Modern frontend frameworks with enterprise backend patterns",
                    "Full-stack automation-first approach to development workflows",
                    "Documentation and testing as first-class citizens",
                    "Continuous learning and knowledge sharing across technologies"
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-success-green-500 to-enterprise-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse" />
                      <span className="text-muted-foreground leading-relaxed">{principle}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </AnimatedSection>

          {/* Skills & Experience */}
          <AnimatedSection animation="slideRight" delay={400}>
            <div className="space-y-8">
              {/* Professional Highlights */}
              <GlassCard variant="warning" intensity="medium" className="p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText gradient="warning">Professional Highlights</GradientText>
                </h3>
                <div className="space-y-4">
                  {personalInfo.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-warning-orange-500 to-enterprise-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Expertise Areas */}
              <GlassCard variant="enterprise" intensity="medium" className="p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText gradient="enterprise">Core Expertise</GradientText>
                </h3>
                <div className="space-y-3">
                  {personalInfo.expertise.map((area, index) => (
                    <div key={index} className="group">
                      <Badge 
                        variant="secondary" 
                        className="w-full justify-start p-3 h-auto text-left hover:bg-enterprise-blue-50 hover:text-enterprise-blue-700 dark:hover:bg-enterprise-blue-950 dark:hover:text-enterprise-blue-300 transition-colors cursor-default group-hover:scale-105 transition-transform duration-200"
                      >
                        <span className="text-xs font-medium leading-relaxed">
                          {area}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Personal Interests */}
              <GlassCard variant="success" intensity="light" className="p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText gradient="success">Technical Interests</GradientText>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="hover:bg-success-green-50 hover:border-success-green-200 dark:hover:bg-success-green-950 dark:hover:border-success-green-800 transition-colors hover:scale-105 transition-transform duration-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced Stats Section */}
        <AnimatedSection animation="slideUp" delay={600}>
          <div className="mt-20">
            <GlassCard variant="enterprise" intensity="medium" className="p-10 hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <GradientText gradient="rainbow">Portfolio Metrics</GradientText>
                </h3>
                <p className="text-muted-foreground">
                  Quantifying excellence across the full technology stack
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <MetricCounter 
                  value={personalInfo.yearsOfExperience}
                  suffix="+"
                  label="Years Experience"
                  delay={800}
                />
                <MetricCounter 
                  value={38}
                  suffix="+"
                  label="Frameworks Supported"
                  delay={900}
                />
                <MetricCounter 
                  value={15}
                  suffix="K+"
                  label="Lines of Code"
                  delay={1000}
                />
                <MetricCounter 
                  value={5}
                  suffix="x"
                  label="Performance Gains"
                  delay={1100}
                />
              </div>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}