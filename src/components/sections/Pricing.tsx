'use client';

import { pricingPackages, pricingFAQ, consultationProcess } from '@/data/pricing';
import { AnimatedSection } from '@/components/ui/animated-section';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientText } from '@/components/ui/gradient-text';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield, Clock, ArrowRight } from 'lucide-react';

export function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Header */}
      <AnimatedSection animation="fadeIn" className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          💰 Investment Packages
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText gradient="enterprise">
            Value-Based Pricing
          </GradientText>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the package that matches your growth stage. All options include ROI guarantees and measurable results.
        </p>
      </AnimatedSection>

      {/* Pricing Cards */}
      <AnimatedSection animation="slideUp" delay={200}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg, index) => (
            <AnimatedSection 
              key={pkg.id}
              animation="slideUp" 
              delay={300 + index * 100}
            >
              <GlassCard 
                variant={pkg.popular ? "success" : pkg.enterprise ? "enterprise" : "default"}
                intensity="medium"
                className={`p-8 h-full relative ${pkg.popular ? 'ring-2 ring-success-green-400 scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-success-green-500 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                {/* Enterprise Badge */}
                {pkg.enterprise && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-enterprise-blue-500 text-white">
                    <Shield className="w-4 h-4 mr-1" />
                    Enterprise
                  </Badge>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-success-green-50 dark:bg-success-green-900/20 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-sm text-success-green-700 dark:text-success-green-300">
                      <Shield className="w-4 h-4" />
                      <span className="font-medium">{pkg.guarantee}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-success-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular 
                      ? 'bg-success-green-600 hover:bg-success-green-700 text-white' 
                      : pkg.enterprise
                        ? 'bg-enterprise-blue-600 hover:bg-enterprise-blue-700 text-white'
                        : 'border border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {pkg.enterprise ? 'Schedule Strategic Call' : 'Start Free Consultation'}
                </button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Free Consultation Process */}
      <AnimatedSection animation="slideUp" delay={800}>
        <GlassCard variant="enterprise" intensity="light" className="max-w-5xl mx-auto p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{consultationProcess.title}</h3>
            <p className="text-lg text-muted-foreground">{consultationProcess.description}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {consultationProcess.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-enterprise-blue-100 dark:bg-enterprise-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-enterprise-blue-600 dark:text-enterprise-blue-400">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-4 bg-enterprise-blue-600 hover:bg-enterprise-blue-700 text-white rounded-lg font-semibold text-lg transition-colors">
              📅 Book Your Free 30-Min Session
            </button>
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fadeIn" delay={1000}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid gap-6">
            {pricingFAQ.map((faq, index) => (
              <GlassCard key={index} variant="default" intensity="light" className="p-6">
                <h4 className="font-semibold mb-3">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}