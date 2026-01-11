'use client';

import { testimonials, clientMetrics } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientText } from '@/components/ui/gradient-text';
import { MetricCounter } from '@/components/ui/metric-counter';
import { Badge } from '@/components/ui/badge';

export function ClientResults() {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Header */}
      <AnimatedSection animation="fadeIn" className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          💼 Client Success Stories
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText gradient="enterprise">
            Real Results, Real ROI
          </GradientText>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          How enterprise clients achieved 10x performance gains and eliminated costly system failures
        </p>
      </AnimatedSection>

      {/* Client Impact Overview */}
      <AnimatedSection animation="slideUp" delay={200}>
        <GlassCard variant="enterprise" intensity="medium" className="max-w-6xl mx-auto p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-enterprise-blue-700 dark:text-enterprise-blue-300 mb-2">
              📊 Aggregate Client Impact (15+ Implementations)
            </h3>
            <p className="text-muted-foreground">Proven track record of delivering measurable business value</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <MetricCounter 
              value={clientMetrics.totalValueGenerated / 1000000}
              suffix="M+"
              prefix="$"
              label="Total Value Generated"
              delay={400}
            />
            <MetricCounter 
              value={clientMetrics.averageSavings / 1000}
              suffix="K/year"
              prefix="$"
              label="Avg Client Savings"
              delay={500}
            />
            <MetricCounter 
              value={clientMetrics.totalClients}
              suffix="+"
              label="Enterprise Clients"
              delay={600}
            />
            <MetricCounter 
              value={clientMetrics.clientRetention}
              suffix="%"
              label="Client Retention"
              delay={700}
            />
            <MetricCounter 
              value={8}
              suffix=" weeks"
              label="Avg Implementation"
              delay={800}
            />
          </div>

          {/* Industries Served */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Industries Served:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {clientMetrics.industries.map((industry) => (
                <Badge key={industry} variant="outline" className="text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* Featured Testimonials */}
      <AnimatedSection animation="slideUp" delay={400}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            What CTOs & Tech Leaders Say
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={testimonial.id}
                animation="slideUp" 
                delay={600 + index * 100}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  companySize={testimonial.companySize}
                  image={testimonial.image}
                  quote={testimonial.quote}
                  impact={testimonial.impact}
                  savings={testimonial.savings}
                  industry={testimonial.industry}
                  featured={testimonial.featured}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-16">
        <GlassCard variant="success" intensity="light" className="max-w-4xl mx-auto p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Get your free 30-minute system audit and ROI projection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-success-green-600 hover:bg-success-green-700 text-white rounded-lg font-semibold transition-colors">
              📞 Schedule Free Audit
            </button>
            <button className="px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-colors">
              📋 View Pricing Packages
            </button>
          </div>
        </GlassCard>
      </AnimatedSection>
    </section>
  );
}