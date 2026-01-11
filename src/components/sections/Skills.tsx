"use client";

import { skills, getSkillsByCategory, getExpertSkills } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const getLevelColor = (level: Skill["level"]) => {
    switch (level) {
      case "Expert":
        return "bg-success-green-500 text-white";
      case "Advanced":
        return "bg-enterprise-blue-500 text-white";
      case "Intermediate":
        return "bg-warning-orange-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: Skill["category"]) => {
    switch (category) {
      case "Architecture":
        return "border-l-enterprise-blue-500 bg-enterprise-blue-50 dark:bg-enterprise-blue-950";
      case "Backend":
        return "border-l-success-green-500 bg-success-green-50 dark:bg-success-green-950";
      case "Frontend":
        return "border-l-warning-orange-500 bg-warning-orange-50 dark:bg-warning-orange-950";
      case "DevOps":
        return "border-l-purple-500 bg-purple-50 dark:bg-purple-950";
      case "Database":
        return "border-l-blue-500 bg-blue-50 dark:bg-blue-950";
      case "Language":
        return "border-l-indigo-500 bg-indigo-50 dark:bg-indigo-950";
      default:
        return "border-l-gray-500 bg-gray-50 dark:bg-gray-950";
    }
  };

  return (
    <Card className={`p-4 border-l-4 hover:shadow-lg transition-all duration-300 ${getCategoryColor(skill.category)}`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-sm">{skill.name}</h4>
        <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
          {skill.level}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{skill.category}</span>
          <span>{skill.yearsOfExperience}+ years</span>
        </div>
        
        {skill.projects && skill.projects.length > 0 && (
          <div className="text-xs">
            <span className="text-muted-foreground">Used in: </span>
            <span className="text-enterprise-blue-600 dark:text-enterprise-blue-400">
              {skill.projects.length} project{skill.projects.length > 1 ? "s" : ""}
            </span>
          </div>
        )}

        {skill.certification && (
          <Badge variant="outline" className="text-xs">
            {skill.certification}
          </Badge>
        )}
      </div>
    </Card>
  );
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Skill["category"] | "All" | "Expert">("Expert");
  
  const categories: (Skill["category"] | "All" | "Expert")[] = [
    "Expert",
    "All", 
    "Architecture", 
    "Backend", 
    "Frontend", 
    "DevOps", 
    "Database", 
    "Language"
  ];

  const getFilteredSkills = () => {
    switch (selectedCategory) {
      case "Expert":
        return getExpertSkills();
      case "All":
        return skills;
      default:
        return getSkillsByCategory(selectedCategory as Skill["category"]);
    }
  };

  const filteredSkills = getFilteredSkills();

  const getCategoryStats = () => {
    const expertCount = getExpertSkills().length;
    const totalYears = skills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0);
    const avgYears = Math.round(totalYears / skills.length);
    
    return { expertCount, totalYears, avgYears };
  };

  const { expertCount, avgYears } = getCategoryStats();

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise in enterprise architecture patterns, modern backend technologies, 
            and development automation systems
          </p>
        </div>

        {/* Skills Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-up">
          <Card className="p-6 text-center bg-gradient-to-br from-enterprise-blue-50 to-enterprise-blue-100 dark:from-enterprise-blue-950 dark:to-enterprise-blue-900 border-enterprise-blue-200 dark:border-enterprise-blue-800">
            <div className="text-3xl font-bold text-enterprise-blue-700 dark:text-enterprise-blue-300 mb-2">
              {expertCount}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level Skills</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-success-green-50 to-success-green-100 dark:from-success-green-950 dark:to-success-green-900 border-success-green-200 dark:border-success-green-800">
            <div className="text-3xl font-bold text-success-green-700 dark:text-success-green-300 mb-2">
              {avgYears}+
            </div>
            <div className="text-sm text-muted-foreground">Avg Years Experience</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-warning-orange-50 to-warning-orange-100 dark:from-warning-orange-950 dark:to-warning-orange-900 border-warning-orange-200 dark:border-warning-orange-800">
            <div className="text-3xl font-bold text-warning-orange-700 dark:text-warning-orange-300 mb-2">
              6
            </div>
            <div className="text-sm text-muted-foreground">Technology Categories</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">
              {skills.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Technologies</div>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-enterprise-blue-600 hover:bg-enterprise-blue-700" : ""}
            >
              {category} {category === "Expert" && `(${expertCount})`}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Enterprise Architecture Highlight */}
        {selectedCategory === "Expert" && (
          <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Card className="p-8 bg-gradient-to-r from-enterprise-blue-50 via-white to-success-green-50 dark:from-enterprise-blue-950 dark:via-background dark:to-success-green-950 border-enterprise-blue-200 dark:border-enterprise-blue-800">
              <div className="text-center">
                <Badge className="mb-4 bg-enterprise-blue-600 text-white">
                  🏗️ Architecture Expertise
                </Badge>
                <h3 className="text-2xl font-bold mb-4 text-enterprise-blue-700 dark:text-enterprise-blue-300">
                  Enterprise Architecture Patterns
                </h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Specialized in Domain-Driven Design (DDD), Command Query Responsibility Segregation (CQRS), 
                  Event Sourcing, and Hexagonal Architecture for building scalable enterprise systems.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400 mb-2">
                      Domain-Driven Design
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Complex business domain modeling and bounded context design
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-success-green-600 dark:text-success-green-400 mb-2">
                      CQRS + Event Sourcing
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Scalable command and query separation with event-driven architecture
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-warning-orange-600 dark:text-warning-orange-400 mb-2">
                      Hexagonal Architecture
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Clean, testable architecture with dependency inversion
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Zero Defect Programming Highlight */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <Card className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700">
            <div className="text-center">
              <h4 className="text-lg font-bold mb-3 text-gray-700 dark:text-gray-300">
                💯 Zero Defect Programming Philosophy
              </h4>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Every technology and pattern is applied with Ultra-Strict TypeScript configuration, 
                comprehensive testing, and enterprise-grade quality gates to achieve zero-defect code.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}