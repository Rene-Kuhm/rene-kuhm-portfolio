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
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center border-2 border-white/20">
          {/* Professional avatar with gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-lg font-bold text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {/* Professional badge indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
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