'use client';

interface ProjectImagePlaceholderProps {
  title: string;
  type: 'opencode' | 'backend' | 'detection' | 'component';
  className?: string;
}

export function ProjectImagePlaceholder({ title, type, className = '' }: ProjectImagePlaceholderProps) {
  const designs = {
    opencode: {
      bg: 'bg-gradient-to-br from-enterprise-blue-500 via-enterprise-blue-600 to-success-green-500',
      icon: '🚀',
      pattern: 'OpenCode Suite',
      subtitle: 'AI Automation Platform'
    },
    backend: {
      bg: 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900',
      icon: '🏗️',
      pattern: 'Enterprise Backend',
      subtitle: 'DDD Architecture'
    },
    detection: {
      bg: 'bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600',
      icon: '🎯',
      pattern: 'Smart Detection',
      subtitle: 'AI Recognition'
    },
    component: {
      bg: 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500',
      icon: '🧩',
      pattern: 'Component Library',
      subtitle: 'UI Intelligence'
    }
  };

  const design = designs[type];

  return (
    <div className={`relative w-full h-64 rounded-lg overflow-hidden ${className}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${design.bg}`}>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), 
                              radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white">
          <div className="text-6xl mb-4 opacity-90">{design.icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-center">{design.pattern}</h3>
          <p className="text-lg opacity-75 text-center">{design.subtitle}</p>
          
          {/* Mockup Browser Window */}
          <div className="mt-6 w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/20">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 space-y-2">
              <div className="h-2 bg-white/30 rounded w-3/4"></div>
              <div className="h-2 bg-white/20 rounded w-1/2"></div>
              <div className="h-2 bg-white/25 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}