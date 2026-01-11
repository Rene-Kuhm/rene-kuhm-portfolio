"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "enterprise" | "success" | "warning" | "rainbow" | "primary";
}

export function GradientText({
  children,
  className,
  gradient = "enterprise",
}: GradientTextProps) {
  const gradientClasses = {
    enterprise: "bg-gradient-to-r from-enterprise-blue-600 via-enterprise-blue-500 to-enterprise-blue-700",
    success: "bg-gradient-to-r from-success-green-600 via-success-green-500 to-success-green-700",
    warning: "bg-gradient-to-r from-warning-orange-600 via-warning-orange-500 to-warning-orange-700",
    rainbow: "bg-gradient-to-r from-enterprise-blue-600 via-success-green-500 to-warning-orange-600",
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800",
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent font-bold",
        "bg-size-200 bg-pos-0 hover:bg-pos-100",
        "transition-all duration-500 ease-out",
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </span>
  );
}