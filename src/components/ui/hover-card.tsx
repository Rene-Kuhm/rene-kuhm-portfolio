'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'tilt';
}

export function HoverCard({ 
  children, 
  className = '', 
  hoverEffect = 'lift' 
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const effects = {
    lift: {
      initial: { y: 0, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
      hover: { 
        y: -8, 
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }
    },
    glow: {
      initial: { boxShadow: '0 0 0 0 rgb(59 130 246 / 0)' },
      hover: { 
        boxShadow: '0 0 20px 4px rgb(59 130 246 / 0.3)',
        transition: { duration: 0.3 }
      }
    },
    scale: {
      initial: { scale: 1 },
      hover: { 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }
    },
    tilt: {
      initial: { rotateX: 0, rotateY: 0 },
      hover: { 
        rotateX: 5, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      className={`cursor-hover ${className}`}
      initial={effects[hoverEffect].initial}
      whileHover={effects[hoverEffect].hover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      {children}
      
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}