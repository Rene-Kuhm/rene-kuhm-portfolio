"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MetricCounterExpert } from "@/components/ui/metric-counter-expert";

export function HeroExpert() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_23_42_0.15)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184_0.15)_1px,transparent_0)]" />
      
      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Content */}
          <div className="space-y-8">
            <AnimatedSection animation="slideUp" delay={100}>
              <div className="space-y-4">
                <Badge 
                  variant="secondary" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Disponible para proyectos
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {personalInfo.name}
                  <span className="block text-slate-600 dark:text-slate-400 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2">
                    {personalInfo.title}
                  </span>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={300}>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Transformo ideas en soluciones digitales robustas y escalables. 
                <span className="text-slate-900 dark:text-slate-100 font-medium"> Especializado en arquitecturas enterprise</span> 
                y metodologías de cero defectos que impulsan el crecimiento empresarial.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                >
                  Comenzar proyecto
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="lg" className="px-4">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-4">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-4">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Metrics */}
          <div className="lg:pl-8">
            <AnimatedSection animation="slideUp" delay={700}>
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                <MetricCounterExpert 
                  value="8+"
                  label="Años experiencia"
                  sublabel="Full-stack development"
                />
                <MetricCounterExpert 
                  value="50+"
                  label="Proyectos completados"
                  sublabel="Enterprise & startups"
                />
                <MetricCounterExpert 
                  value="99.9%"
                  label="Uptime logrado"
                  sublabel="Infraestructura crítica"
                />
                <MetricCounterExpert 
                  value="2.5M+"
                  label="Valor generado"
                  sublabel="ROI comprobado"
                  prefix="$"
                />
              </div>
            </AnimatedSection>

            {/* Technologies showcase */}
            <AnimatedSection animation="slideUp" delay={900}>
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  Stack tecnológico principal
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                    <div 
                      key={tech}
                      className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}