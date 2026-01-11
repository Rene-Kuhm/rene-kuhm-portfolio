"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ContactExpert() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Hablemos de tu proyecto
            </Badge>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              Transformemos tu 
              <span className="text-emerald-600 dark:text-emerald-400"> visión en realidad</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              ¿Listo para llevar tu proyecto al siguiente nivel? Contactemos y 
              exploremos cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Contact Methods */}
          <div className="space-y-8">
            
            {/* Primary Contact */}
            <AnimatedSection animation="slideUp" delay={300}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-xl p-3">
                      <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Email profesional
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        rene.kuhm@example.com
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                        Respuesta garantizada en 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Teléfono/WhatsApp
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        +54 11 1234-5678
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                        Disponible 9:00 - 18:00 ART
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-3">
                      <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Ubicación
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {personalInfo.location}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                        Trabajo remoto global
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-800/30 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Sígueme en redes
                </h3>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="flex-1"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Project Discussion */}
          <div>
            <AnimatedSection animation="slideUp" delay={500}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Inicia tu proyecto
                </h3>
                
                <div className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ¿Tienes un proyecto en mente? Me encantaría conocer los detalles 
                    y ayudarte a convertir tu idea en una solución tecnológica exitosa.
                  </p>

                  {/* Process steps */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                          Conversación inicial
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Discutimos tus objetivos, timeline y requerimientos técnicos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                          Análisis y propuesta
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Elaboro una estrategia técnica con roadmap y estimaciones
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                          Desarrollo e iteración
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Entregas incrementales con feedback continuo y ajustes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <Button 
                      size="lg" 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white group"
                    >
                      Enviar email ahora
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                      Consulta inicial gratuita • Sin compromiso
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* FAQ Section */}
        <AnimatedSection animation="slideUp" delay={600}>
          <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-12">
              Preguntas frecuentes
            </h3>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    ¿Cuánto tiempo toma un proyecto típico?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Entre 6-12 semanas para proyectos completos, con entregas incrementales 
                    cada 2 semanas para mantener visibilidad del progreso.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    ¿Trabajas con equipos existentes?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Sí, me integro perfectamente con equipos técnicos existentes, 
                    aportando expertise sin interrumpir flujos de trabajo establecidos.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    ¿Qué incluye el mantenimiento post-lanzamiento?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Soporte técnico, actualizaciones de seguridad, optimizaciones 
                    de performance y mejoras evolutivas según necesidades del negocio.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    ¿Manejas proyectos internacionales?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Absolutamente. Trabajo con clientes en múltiples zonas horarias 
                    usando metodologías ágiles adaptadas para colaboración remota efectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}