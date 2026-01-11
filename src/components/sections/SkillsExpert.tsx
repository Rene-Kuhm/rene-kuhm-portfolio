"use client";

import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, Globe, Cog } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Interfaces modernas y responsive",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description: "Arquitecturas escalables y seguras", 
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infraestructura moderna y CI/CD",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Monitoring"],
    color: "bg-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Apps nativas y híbridas",
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "App Store"],
    color: "bg-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200 dark:border-amber-800"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Performance y optimización",
    skills: ["Webpack", "Vite", "PWA", "SEO", "Analytics", "Core Web Vitals"],
    color: "bg-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20", 
    borderColor: "border-rose-200 dark:border-rose-800"
  },
  {
    icon: Cog,
    title: "Tools & Methodologies",
    description: "Flujos de trabajo eficientes",
    skills: ["Git", "Agile", "TDD", "Code Review", "Documentation", "Team Leadership"],
    color: "bg-slate-500",
    bgColor: "bg-slate-50 dark:bg-slate-950/20",
    borderColor: "border-slate-200 dark:border-slate-800"
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Microsoft Azure Fundamentals",
  "Certified Kubernetes Administrator"
];

export function SkillsExpert() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Experiencia técnica
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              Stack tecnológico
              <span className="text-emerald-600 dark:text-emerald-400"> completo</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Dominio integral del ecosistema tecnológico moderno, desde frontend hasta 
              infraestructura cloud, con enfoque en soluciones enterprise escalables.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection 
              key={category.title} 
              animation="slideUp" 
              delay={200 + index * 100}
            >
              <div className={`group relative h-full bg-white dark:bg-slate-900 rounded-2xl border ${category.borderColor} p-8 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300`}>
                
                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className={`${category.bgColor} rounded-xl p-3 mr-4`}>
                    <category.icon className={`w-6 h-6 text-current`} style={{color: category.color.replace('bg-', '#')}} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < 4 ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 dark:to-slate-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications & Additional Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <AnimatedSection animation="slideUp" delay={800}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Certificaciones profesionales
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Approach */}
          <AnimatedSection animation="slideUp" delay={900}>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-800/30 p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Mi enfoque tecnológico
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Arquitectura primero
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Diseño sistemas pensando en escalabilidad y mantenibilidad desde el primer día.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Calidad del código
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Testing exhaustivo, code reviews y documentación como parte integral del proceso.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Innovación continua
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Adopción temprana de tecnologías emergentes con evaluación rigurosa de ROI.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}