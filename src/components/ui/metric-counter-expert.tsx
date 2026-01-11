"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCounterExpertProps {
  value: string | number;
  label: string;
  sublabel: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export function MetricCounterExpert({
  value,
  label,
  sublabel,
  prefix = "",
  className,
  delay = 0
}: MetricCounterExpertProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value for animation
    const numericValue = typeof value === "string" 
      ? parseFloat(value.replace(/[^\d.]/g, "")) || 0 
      : value;

    // Get suffix from original value
    const suffix = typeof value === "string" 
      ? value.replace(/[\d.]/g, "") 
      : "";

    if (numericValue === 0) {
      setDisplayValue(value.toString());
      return;
    }

    let currentValue = 0;
    const increment = numericValue / 60; // 60 steps for smooth animation
    const duration = 1500; // 1.5 seconds
    const stepTime = duration / 60;

    const animate = () => {
      currentValue += increment;
      
      if (currentValue >= numericValue) {
        setDisplayValue(prefix + numericValue + suffix);
        return;
      }

      // Format based on value type
      let formatted;
      if (numericValue % 1 === 0) {
        formatted = Math.floor(currentValue).toString();
      } else {
        formatted = currentValue.toFixed(1);
      }
      
      setDisplayValue(prefix + formatted + suffix);
      setTimeout(animate, stepTime);
    };

    animate();
  }, [isVisible, value, prefix]);

  return (
    <div className={cn(
      "group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50",
      className
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent dark:from-slate-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative space-y-2">
        {/* Main metric */}
        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {displayValue}
        </div>
        
        {/* Label */}
        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-tight">
          {label}
        </div>
        
        {/* Sublabel */}
        <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {sublabel}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}