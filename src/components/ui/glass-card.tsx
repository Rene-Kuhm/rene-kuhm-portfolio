"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "enterprise" | "success" | "warning";
  intensity?: "light" | "medium" | "strong";
}

export function GlassCard({
  children,
  className,
  variant = "default",
  intensity = "medium",
}: GlassCardProps) {
  const intensityClasses = {
    light: "backdrop-blur-sm bg-white/5 border-white/10",
    medium: "backdrop-blur-md bg-white/10 border-white/20",
    strong: "backdrop-blur-lg bg-white/15 border-white/30",
  };

  const variantClasses = {
    default: "",
    enterprise: "border-moure-purple-500/30 bg-moure-purple-500/5",
    success: "border-moure-green-500/30 bg-moure-green-500/5",
    warning: "border-moure-orange-500/30 bg-moure-orange-500/5",
  };

  const shadowClasses = {
    default: "shadow-lg shadow-black/5",
    enterprise: "shadow-xl shadow-moure-purple-500/10",
    success: "shadow-xl shadow-moure-green-500/10", 
    warning: "shadow-xl shadow-moure-orange-500/10",
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:rounded-lg",
        "before:bg-gradient-to-br before:from-white/10 before:to-white/5",
        "before:opacity-50 before:pointer-events-none",
        intensityClasses[intensity],
        variantClasses[variant],
        shadowClasses[variant],
        "hover:shadow-2xl hover:shadow-black/10 transition-all duration-500",
        "border border-solid",
        className
      )}
    >
      {children}
    </Card>
  );
}