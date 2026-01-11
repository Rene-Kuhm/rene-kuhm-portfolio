'use client';

interface TechLogo {
  name: string;
  icon: string;
  color: string;
}

const techLogos: TechLogo[] = [
  { name: 'Next.js', icon: '▲', color: 'text-gray-800 dark:text-white' },
  { name: 'React', icon: '⚛️', color: 'text-blue-400' },
  { name: 'TypeScript', icon: 'TS', color: 'text-blue-600' },
  { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
  { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
  { name: 'Kubernetes', icon: '☸️', color: 'text-blue-600' },
  { name: 'AWS', icon: '☁️', color: 'text-orange-500' },
  { name: 'GitHub', icon: '🐙', color: 'text-gray-800 dark:text-white' },
  { name: 'VS Code', icon: '📘', color: 'text-blue-500' }
];

export function TechLogoGrid() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-10 gap-6 items-center justify-items-center opacity-60 dark:opacity-40">
      {techLogos.map((tech, index) => (
        <div 
          key={tech.name}
          className="group flex flex-col items-center gap-2 transition-all duration-300 hover:opacity-100 hover:scale-110"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`text-2xl ${tech.color} group-hover:drop-shadow-lg transition-all duration-300`}>
            {tech.icon}
          </div>
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}