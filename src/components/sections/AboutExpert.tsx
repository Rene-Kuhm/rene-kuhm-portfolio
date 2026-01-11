"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Target, Zap } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutExpert() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Sobre mi experiencia
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              Transformando visiones en 
              <span className="text-emerald-600 dark:text-emerald-400"> realidades digitales</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Con más de 8 años especializándome en arquitecturas enterprise, 
              he ayudado a empresas a escalar sus operaciones digitales y optimizar sus procesos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <AnimatedSection animation="slideUp" delay={300}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Mi enfoque en desarrollo
                </h3>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Mi metodología se centra en la programación de <strong>cero defectos</strong>, 
                    implementando sistemas robustos que minimizan errores y maximizan la eficiencia operacional.
                  </p>
                </div>

                {/* Key values */}
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-3">
                      <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Precisión</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Código limpio y mantenible</p>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-3">
                      <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Performance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Optimización constante</p>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl mb-3">
                      <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Colaboración</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Trabajo en equipo efectivo</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={500}>
              <Button 
                size="lg" 
                className="group bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
              >
                Ver mi trabajo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedSection>
          </div>

          {/* Right: Expertise & Achievements */}
          <div className="space-y-8">
            
            {/* Expertise */}
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Especialidades técnicas
                </h3>
                <div className="space-y-4">
                  {personalInfo.expertise.slice(0, 6).map((skill, index) => (
                    <div key={skill} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Philosophy */}
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Mi filosofía de trabajo
                </h3>
                <blockquote className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{personalInfo.philosophy}"
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Quick stats */}
            <AnimatedSection animation="slideUp" delay={700}>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {personalInfo.yearsOfExperience}+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">años</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">38+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">frameworks</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">500K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">líneas</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}