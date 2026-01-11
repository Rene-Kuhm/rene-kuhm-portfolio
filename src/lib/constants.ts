// Enterprise Design System Constants
export const DESIGN_TOKENS = {
  // Spacing System
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem", 
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
  },

  // Animation Timing
  animation: {
    fast: "0.15s",
    normal: "0.3s",
    slow: "0.5s",
    slower: "0.8s",
  },

  // Easing Functions
  easing: {
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  // Shadows
  shadows: {
    soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
    medium: "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 25px -5px rgba(0, 0, 0, 0.08)",
    large: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 30px -8px rgba(0, 0, 0, 0.12)",
    enterprise: "0 32px 64px -12px rgba(59, 130, 246, 0.15), 0 18px 36px -8px rgba(59, 130, 246, 0.08)",
  },

  // Gradients
  gradients: {
    primary: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%)",
    success: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(22, 163, 74) 100%)",
    warning: "linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(234, 88, 12) 100%)",
    enterprise: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(34, 197, 94) 50%, rgb(249, 115, 22) 100%)",
    glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  },

  // Glass Morphism
  glass: {
    backdrop: "backdrop-blur(16px)",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  },
} as const;

// Professional Color Palette
export const ENTERPRISE_COLORS = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe", 
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0", 
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  warning: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74", 
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
} as const;

// Animation Presets
export const ANIMATION_PRESETS = {
  fadeIn: "animate-in fade-in duration-700 ease-out",
  slideUp: "animate-in slide-in-from-bottom-4 duration-700 ease-out",
  slideLeft: "animate-in slide-in-from-right-4 duration-700 ease-out",
  slideRight: "animate-in slide-in-from-left-4 duration-700 ease-out",
  scaleIn: "animate-in zoom-in-95 duration-500 ease-out",
  stagger: {
    1: "animation-delay-100",
    2: "animation-delay-200", 
    3: "animation-delay-300",
    4: "animation-delay-400",
    5: "animation-delay-500",
  },
} as const;

// Enterprise Metrics
export const PORTFOLIO_METRICS = {
  experience: {
    totalYears: 8,
    frameworksSupported: 38,
    linesOfCode: "15K+",
    performanceGain: "5x",
    projectsCompleted: 15,
    clientsSatisfied: "100%",
  },
  technologies: {
    frontend: 12,
    backend: 8,
    devops: 6,
    databases: 4,
    architectures: 5,
  },
  certifications: [
    "Enterprise Architecture",
    "Zero Defect Programming",
    "Full-Stack Excellence",
  ],
} as const;