"use client";

import { personalInfo } from "@/data/personal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building full-stack enterprise solutions with passion, precision, and purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Bio */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-enterprise-blue-700 dark:text-enterprise-blue-400">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.philosophy}
              </p>
            </Card>

            {/* Core Principles */}
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-enterprise-blue-700 dark:text-enterprise-blue-400">
                Core Principles
              </h3>
              <ul className="space-y-3">
                {[
                  "Zero Defect Programming across the entire technology stack",
                  "Modern frontend frameworks with enterprise backend patterns",
                  "Full-stack automation-first approach to development workflows",
                  "Documentation and testing as first-class citizens",
                  "Continuous learning and knowledge sharing across technologies"
                ].map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-enterprise-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Professional Highlights */}
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-enterprise-blue-700 dark:text-enterprise-blue-400">
                Professional Highlights
              </h3>
              <div className="space-y-4">
                {personalInfo.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-success-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Expertise Areas */}
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-enterprise-blue-700 dark:text-enterprise-blue-400">
                Core Expertise
              </h3>
              <div className="space-y-4">
                {personalInfo.expertise.map((area, index) => (
                  <div key={index} className="group">
                    <Badge 
                      variant="secondary" 
                      className="w-full justify-start p-3 h-auto text-left hover:bg-enterprise-blue-50 hover:text-enterprise-blue-700 dark:hover:bg-enterprise-blue-950 dark:hover:text-enterprise-blue-300 transition-colors cursor-default"
                    >
                      <span className="text-xs font-medium leading-relaxed">
                        {area}
                      </span>
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Personal Interests */}
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-enterprise-blue-700 dark:text-enterprise-blue-400">
                Technical Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="hover:bg-enterprise-blue-50 hover:border-enterprise-blue-200 dark:hover:bg-enterprise-blue-950 dark:hover:border-enterprise-blue-800 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Card className="p-8 border-none shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                  {personalInfo.yearsOfExperience}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success-green-600 dark:text-success-green-400">
                  38+
                </div>
                <div className="text-sm text-muted-foreground">Frameworks Supported</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning-orange-600 dark:text-warning-orange-400">
                  15K+
                </div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                  5x
                </div>
                <div className="text-sm text-muted-foreground">Performance Gains</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}