"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, isMounted]);

  const animationClasses = {
    fadeIn: isVisible && isMounted
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4",
    slideUp: isVisible && isMounted
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    slideLeft: isVisible && isMounted
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    slideRight: isVisible && isMounted
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    scaleIn: isVisible && isMounted
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  // Prevent hydration mismatch by showing initial state until mounted
  if (!isMounted) {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          "opacity-0 translate-y-4", // Always start hidden
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
}