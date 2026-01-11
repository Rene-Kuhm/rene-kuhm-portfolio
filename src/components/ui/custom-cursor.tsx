'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Track cursor position
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseout', handleMouseOut);

    // Track hover states for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseout', handleMouseOut);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transition: 'transform 0.1s ease-out',
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Trailing circle */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
            isHovering 
              ? 'border-primary bg-primary/20' 
              : 'border-primary/30'
          }`} 
        />
      </div>

      {/* Particle effect on hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-30"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: Math.cos((i * Math.PI) / 3) * 30,
                top: Math.sin((i * Math.PI) / 3) * 30,
                animationDelay: `${i * 100}ms`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      )}

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}