"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementsProps {
  className?: string;
  count?: number;
  size?: "sm" | "md" | "lg";
  opacity?: "light" | "medium" | "strong";
}

export function FloatingElements({
  className,
  count = 6,
  size = "md",
  opacity = "light",
}: FloatingElementsProps) {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2", 
    lg: "w-3 h-3",
  };

  const opacityClasses = {
    light: "opacity-20",
    medium: "opacity-30",
    strong: "opacity-50",
  };

  // Generate stable positions that won't change between server and client
  const elements = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      // Use deterministic positions based on index to avoid hydration mismatch
      const seed = i * 12345; // Simple seed based on index
      const left = ((seed % 73) / 73) * 100; // Deterministic "random" left position
      const top = (((seed * 7) % 89) / 89) * 100; // Deterministic "random" top position
      const delay = (i * 0.5) % 3; // Staggered delay based on index
      const duration = 3 + (i % 4); // Duration between 3-6s based on index
      
      positions.push({
        left,
        top,
        delay,
        duration,
      });
    }
    return positions;
  }, [count]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {elements.map((element, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full",
            "bg-gradient-to-br from-enterprise-blue-400 to-success-green-400",
            sizeClasses[size],
            opacityClasses[opacity],
            "animate-float"
          )}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        />
      ))}
    </div>
  );
}