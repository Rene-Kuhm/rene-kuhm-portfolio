"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCounterProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string;
  delay?: number;
}

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  label,
  delay = 0,
}: MetricCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const numericValue = typeof value === "string" 
    ? parseFloat(value.replace(/[^\d.]/g, "")) || 0 
    : value;

  useEffect(() => {
    // Start animation immediately for visibility
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay + 50);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || numericValue === 0) return;

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3);
      let currentCount = eased * numericValue;
      
      // Round to appropriate decimal places
      if (numericValue % 1 === 0) {
        currentCount = Math.floor(currentCount);
      } else {
        currentCount = Math.round(currentCount * 10) / 10;
      }
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericValue, duration]);

  // Format display value
  const formatValue = (val: number): string => {
    if (typeof value === "string" && value.includes("+") && val === numericValue) {
      return `${val}+`;
    }
    
    // Handle decimal formatting
    if (val % 1 === 0) {
      return val.toString();
    } else {
      return val.toFixed(1);
    }
  };

  const displayValue = formatValue(count);

  return (
    <div className={cn("relative group w-full", className)}>
      {/* Atari-style container with neon glow - Fully responsive */}
      <div className="relative p-3 xs:p-4 sm:p-5 md:p-6 bg-black border border-cyan-400 sm:border-2 rounded-lg overflow-hidden w-full min-h-[120px] xs:min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
        {/* Animated background scanlines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent bg-[length:100%_4px] animate-pulse" />
        </div>
        
        {/* Corner decorations - Responsive sizes */}
        <div className="absolute top-0 left-0 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 border-t border-l xs:border-t-2 xs:border-l-2 border-yellow-400" />
        <div className="absolute top-0 right-0 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 border-t border-r xs:border-t-2 xs:border-r-2 border-yellow-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 border-b border-l xs:border-b-2 xs:border-l-2 border-yellow-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 border-b border-r xs:border-b-2 xs:border-r-2 border-yellow-400" />
        
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-lg sm:blur-xl group-hover:bg-cyan-400/20 transition-all duration-300" />
        
        {/* Content */}
        <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
          {/* Main counter display - Highly responsive text sizes */}
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-wider mb-1 xs:mb-2">
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 animate-pulse leading-none block"
              style={{
                fontFamily: 'monospace',
                textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
                wordBreak: 'keep-all'
              }}
            >
              {prefix}{displayValue}{suffix}
            </span>
          </div>
          
          {/* Label with retro styling - Responsive */}
          {label && (
            <div className="text-xs xs:text-sm sm:text-base md:text-lg text-cyan-300 font-mono uppercase tracking-wide xs:tracking-wider sm:tracking-widest border-t border-cyan-400/30 pt-1 xs:pt-2 px-2 leading-tight">
              <span className="block">{label}</span>
            </div>
          )}
        </div>
        
        {/* Animated border glow */}
        <div className="absolute inset-0 border border-transparent sm:border-2 rounded-lg bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 opacity-75 animate-pulse blur-sm" />
        <div className="absolute inset-[1px] sm:inset-[2px] bg-black rounded-lg" />
      </div>
      
      {/* Outer glow effect - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-pink-400/20 rounded-lg blur-xl sm:blur-2xl animate-pulse -z-10" />
    </div>
  );
}