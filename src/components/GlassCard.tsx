import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className = '', glow = false }: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl 
        backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02]
        border border-white/10
        shadow-2xl
        ${glow ? 'shadow-blue-500/20' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
