"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Calendar, Users } from "lucide-react";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

export function ProjectsExpert() {
  // Feature the top 6 projects
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Proyectos destacados
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              Soluciones que generan
              <span className="text-emerald-600 dark:text-emerald-400"> impacto real</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Una selección de proyectos que demuestran mi capacidad para entregar 
              soluciones escalables, eficientes y alineadas con objetivos empresariales.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="slideUp" 
              delay={200 + index * 100}
            >
              <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/50">
                
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                        {project.title[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="default"
                        className="text-xs bg-emerald-600 text-white"
                      >
                        Destacado
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          2024
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Enterprise
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Key Results */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Resultados clave:
                    </h4>
                    <ul className="space-y-1">
                      <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        Mejora significativa en performance
                      </li>
                      <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        Implementación exitosa en producción
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                      >
                        Ver proyecto
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="px-3">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Projects CTA */}
        <AnimatedSection animation="slideUp" delay={800}>
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="group"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}