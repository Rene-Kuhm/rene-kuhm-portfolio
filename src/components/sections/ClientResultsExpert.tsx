"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { clientMetrics } from "@/data/testimonials";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MetricCounterExpert } from "@/components/ui/metric-counter-expert";

export function ClientResultsExpert() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Resultados comprobados
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              Impacto medible en
              <span className="text-emerald-600 dark:text-emerald-400"> cada proyecto</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Mis soluciones no solo funcionan, generan valor empresarial tangible. 
              Estas métricas reflejan el ROI real que entrego a mis clientes.
            </p>
          </div>
        </AnimatedSection>

        {/* Primary Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          <AnimatedSection animation="slideUp" delay={200}>
            <MetricCounterExpert
              value="2.5M+"
              label="Valor total generado"
              sublabel="ROI comprobado en proyectos"
              prefix="$"
            />
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={300}>
            <MetricCounterExpert
              value="127K/año"
              label="Ahorro promedio anual"
              sublabel="Por optimización de procesos"
              prefix="$"
            />
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={400}>
            <MetricCounterExpert
              value="99.9%"
              label="Uptime logrado"
              sublabel="En sistemas críticos"
            />
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={500}>
            <MetricCounterExpert
              value="85%"
              label="Reducción de errores"
              sublabel="Mediante programación defensiva"
            />
          </AnimatedSection>
        </div>

        {/* Secondary Metrics */}
        <AnimatedSection animation="slideUp" delay={600}>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  5x
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Mejora en performance
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  Optimización integral
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  15+
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Clientes enterprise
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  Retención del 100%
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-4">
                  <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  8 semanas
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Implementación promedio
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  50% más rápido que competencia
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  1,200h+
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Horas ahorradas
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  Automatización inteligente
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          <AnimatedSection animation="slideUp" delay={700}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-emerald-600 dark:text-emerald-400 text-4xl font-bold mb-4">
                85%
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                Reducción de bugs en producción
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Implementación de metodología Zero Defect Programming en startup fintech, 
                resultando en mayor confiabilidad del sistema de pagos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={800}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl font-bold mb-4">
                3x
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                Mejora en tiempo de carga
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Optimización integral de plataforma e-commerce enterprise, 
                mejorando la conversión y experiencia del usuario significativamente.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={900}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-4">
                $2M+
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                Ahorro en infraestructura
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Migración a arquitectura serverless y optimización de recursos cloud, 
                reduciendo costos operativos sin comprometer performance.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection animation="slideUp" delay={1000}>
          <div className="text-center">
            <Button 
              size="lg" 
              className="group bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              Discutir tu proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Análisis gratuito de tu situación actual
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}