"use client";

import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { FloatingElements } from "@/components/ui/floating-elements";
import { MetricCounter } from "@/components/ui/metric-counter";
import { AnimatedSection } from "@/components/ui/animated-section";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-enterprise-blue-50/20 to-success-green-50/20 dark:from-background dark:via-enterprise-blue-950/20 dark:to-success-green-950/20" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <FloatingElements count={8} size="md" opacity="light" />

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-12">
          
          {/* Status Badge with Glow */}
          <AnimatedSection animation="fadeIn" delay={0}>
            <div className="relative inline-block">
              <Badge className="relative z-10 bg-gradient-to-r from-success-green-500 to-enterprise-blue-500 text-white border-none px-6 py-2 text-sm font-medium shadow-lg">
                <span className="animate-pulse mr-2">🚀</span>
                {personalInfo.location} • Available for Enterprise Projects
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-r from-success-green-500 to-enterprise-blue-500 rounded-full blur-md opacity-50 animate-pulse" />
            </div>
          </AnimatedSection>

          {/* Professional Avatar Placeholder */}
          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-enterprise-blue-500 via-enterprise-blue-600 to-success-green-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                    RK
                  </span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-enterprise-blue-500 to-success-green-500 rounded-full opacity-20 blur-xl animate-pulse" />
            </div>
          </AnimatedSection>

          {/* Main Heading with Advanced Typography */}
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                <span className="block">
                  <GradientText gradient="enterprise" className="text-6xl md:text-8xl">
                    {personalInfo.name}
                  </GradientText>
                </span>
                <span className="block text-3xl md:text-5xl mt-4 font-bold text-muted-foreground">
                  {personalInfo.title}
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  {personalInfo.subtitle}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Bio with Glass Effect */}
          <AnimatedSection animation="slideUp" delay={600}>
            <GlassCard variant="enterprise" intensity="medium" className="max-w-5xl mx-auto p-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Interactive Tech Stack */}
          <AnimatedSection animation="slideUp" delay={800}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-muted-foreground">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {[
                  { name: "React & Next.js", icon: "⚛️", color: "enterprise" },
                  { name: "Vue.js & Angular", icon: "🔥", color: "success" },
                  { name: "Node.js & TypeScript", icon: "🚀", color: "warning" },
                  { name: "Enterprise Architecture", icon: "🏗️", color: "enterprise" },
                  { name: "Zero Defect Programming", icon: "💎", color: "success" },
                  { name: "38+ Frameworks", icon: "⚡", color: "warning" },
                ].map((tech, index) => (
                  <GlassCard 
                    key={tech.name} 
                    variant={tech.color as any}
                    intensity="light"
                    className="group hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <div className="px-4 py-3 flex items-center space-x-2">
                      <span className="text-lg group-hover:animate-bounce">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Call to Action */}
          <AnimatedSection animation="slideUp" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={handleScrollToProjects}
                className="group relative overflow-hidden bg-gradient-to-r from-enterprise-blue-600 to-enterprise-blue-700 hover:from-enterprise-blue-700 hover:to-enterprise-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToContact}
                className="group relative overflow-hidden border-2 border-enterprise-blue-300 text-enterprise-blue-700 hover:bg-enterprise-blue-50 dark:border-enterprise-blue-700 dark:text-enterprise-blue-300 dark:hover:bg-enterprise-blue-950 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Animated Metrics */}
          <AnimatedSection animation="slideUp" delay={1200}>
            <GlassCard variant="default" intensity="light" className="max-w-4xl mx-auto p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <MetricCounter 
                  value={personalInfo.yearsOfExperience}
                  suffix="+"
                  label="Years Experience"
                  delay={1400}
                />
                <MetricCounter 
                  value={38}
                  suffix="+"
                  label="Frameworks"
                  delay={1500}
                />
                <MetricCounter 
                  value={15}
                  suffix="K+"
                  label="Lines of Code"
                  delay={1600}
                />
                <MetricCounter 
                  value={5}
                  suffix="x"
                  label="Performance Gain"
                  delay={1700}
                />
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <AnimatedSection animation="fadeIn" delay={2000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-enterprise-blue-400 rounded-full flex justify-center animate-bounce-slow">
              <div className="w-1.5 h-4 bg-gradient-to-b from-enterprise-blue-500 to-success-green-500 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute inset-0 border-2 border-enterprise-blue-400 rounded-full blur-sm opacity-50 animate-ping-slow" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}