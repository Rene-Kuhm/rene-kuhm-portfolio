"use client";

import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-enterprise-blue-50/30 dark:to-enterprise-blue-950/20 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Status Badge */}
          <div className="animate-fade-in">
            <Badge className="bg-success-green-100 text-success-green-800 border-success-green-200 dark:bg-success-green-900 dark:text-success-green-200 dark:border-success-green-800">
              🚀 {personalInfo.location} • Open to Opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">
                {personalInfo.name}
              </span>
              <span className="block text-enterprise-blue-600 dark:text-enterprise-blue-400 text-3xl md:text-4xl mt-2">
                {personalInfo.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Bio */}
          <div className="animate-slide-up max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Domain-Driven Design",
                "CQRS + Event Sourcing", 
                "Zero Defect Programming",
                "Enterprise Architecture",
                "38+ Framework Support"
              ].map((highlight) => (
                <Badge
                  key={highlight}
                  variant="secondary"
                  className="bg-enterprise-blue-50 text-enterprise-blue-700 border-enterprise-blue-200 dark:bg-enterprise-blue-950 dark:text-enterprise-blue-300 dark:border-enterprise-blue-800 hover:bg-enterprise-blue-100 dark:hover:bg-enterprise-blue-900 transition-colors"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="bg-enterprise-blue-600 hover:bg-enterprise-blue-700 text-white px-8 py-4 text-lg"
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToContact}
              className="border-enterprise-blue-300 text-enterprise-blue-700 hover:bg-enterprise-blue-50 dark:border-enterprise-blue-700 dark:text-enterprise-blue-300 dark:hover:bg-enterprise-blue-950 px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                {personalInfo.yearsOfExperience}+
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green-600 dark:text-success-green-400">
                38+
              </div>
              <div className="text-sm text-muted-foreground">Frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-orange-600 dark:text-warning-orange-400">
                15K+
              </div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                5x
              </div>
              <div className="text-sm text-muted-foreground">Performance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}