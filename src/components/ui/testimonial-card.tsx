'use client';

import { GlassCard } from './glass-card';
import { Badge } from './badge';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  companySize: string;
  image: string;
  quote: string;
  impact: string;
  savings: string;
  industry: string;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  role,
  company,
  companySize,
  image,
  quote,
  impact,
  savings,
  industry,
  featured = false
}: TestimonialCardProps) {
  return (
    <GlassCard 
      variant={featured ? "success" : "default"} 
      intensity="medium"
      className="p-6 h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Featured Badge */}
      {featured && (
        <Badge 
          variant="default" 
          className="absolute top-4 right-4 bg-success-green-100 text-success-green-700 dark:bg-success-green-900 dark:text-success-green-300"
        >
          Featured Client
        </Badge>
      )}

      {/* Quote Icon */}
      <Quote className="h-8 w-8 text-primary/30 mb-4" />

      {/* Testimonial Quote */}
      <blockquote className="text-lg leading-relaxed mb-6 relative">
        "{quote}"
      </blockquote>

      {/* Impact Metrics */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="outline" className="text-sm">
          💰 {savings}
        </Badge>
        <Badge variant="outline" className="text-sm">
          📈 {impact}
        </Badge>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
          {/* Placeholder for professional photo */}
          <span className="text-lg font-semibold text-primary">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <span className="font-medium">{company}</span>
            <span>•</span>
            <span>{companySize}</span>
            <span>•</span>
            <Badge variant="secondary" className="text-xs">
              {industry}
            </Badge>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}