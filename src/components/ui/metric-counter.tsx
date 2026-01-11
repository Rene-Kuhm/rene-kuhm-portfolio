"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue = typeof value === "string" 
    ? parseInt(value.replace(/[^\d]/g, "")) || 0 
    : value;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, isMounted]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * numericValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration]);

  const displayValue = typeof value === "string" && value.includes("+") && count === numericValue
    ? `${count}+`
    : count.toString();

  // Prevent hydration mismatch by showing 0 until mounted
  if (!isMounted) {
    return (
      <div
        ref={ref}
        className={cn("text-center space-y-2", className)}
      >
        <div className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-enterprise-blue-600 to-enterprise-blue-800 bg-clip-text text-transparent">
            {prefix}0{suffix}
          </span>
        </div>
        {label && (
          <div className="text-sm text-muted-foreground font-medium">
            {label}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("text-center space-y-2", className)}
    >
      <div className="text-3xl md:text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-enterprise-blue-600 to-enterprise-blue-800 bg-clip-text text-transparent">
          {prefix}{displayValue}{suffix}
        </span>
      </div>
      {label && (
        <div className="text-sm text-muted-foreground font-medium">
          {label}
        </div>
      )}
    </div>
  );
}