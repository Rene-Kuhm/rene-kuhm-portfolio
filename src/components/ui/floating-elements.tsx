"use client";

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

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
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
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}