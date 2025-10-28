import { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  positive?: boolean;
}

export function StatCard({ icon: Icon, label, value, change, positive }: StatCardProps) {
  return (
    <GlassCard glow className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-slate-400 text-sm mb-2">{label}</p>
          <p className="text-white text-3xl mb-2">{value}</p>
          {change && (
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  positive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {change}
              </span>
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        </div>
      </div>
    </GlassCard>
  );
}
