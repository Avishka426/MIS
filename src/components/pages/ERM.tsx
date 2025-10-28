import { Users, Trophy, Clock, CheckCircle } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { StatCard } from '../StatCard';
import { Progress } from '../ui/progress';

const employees = [
  {
    id: 1,
    name: 'Alex Martinez',
    role: 'Lead Installer',
    avatar: 'AM',
    status: 'active',
    performance: 96,
    projects: 12,
    completedToday: 3,
    attendance: 98,
  },
  {
    id: 2,
    name: 'Jessica Wong',
    role: 'Senior Designer',
    avatar: 'JW',
    status: 'active',
    performance: 94,
    projects: 8,
    completedToday: 2,
    attendance: 100,
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Installation Specialist',
    avatar: 'DK',
    status: 'active',
    performance: 92,
    projects: 10,
    completedToday: 4,
    attendance: 95,
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Quality Inspector',
    avatar: 'ER',
    status: 'break',
    performance: 98,
    projects: 6,
    completedToday: 1,
    attendance: 97,
  },
];

const assignedProjects = [
  { employee: 'Alex Martinez', vehicle: 'Tesla Model S', task: 'Matte Black Wrap', progress: 75 },
  { employee: 'David Kim', vehicle: 'BMW M5', task: 'Chrome Delete', progress: 45 },
  { employee: 'Jessica Wong', vehicle: 'Audi RS6', task: 'Custom Graphics', progress: 60 },
  { employee: 'Alex Martinez', vehicle: 'Porsche 911', task: 'Paint Protection', progress: 90 },
];

export function ERM() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-white text-3xl mb-2">Employee & Resource Management</h1>
        <p className="text-slate-400">Monitor team performance and resource allocation</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Active Employees"
          value="12"
          change="+2"
          positive
        />
        <StatCard
          icon={Trophy}
          label="Avg Performance"
          value="95%"
          change="+3.2%"
          positive
        />
        <StatCard
          icon={CheckCircle}
          label="Tasks Completed Today"
          value="18"
          change="+5"
          positive
        />
        <StatCard
          icon={Clock}
          label="Avg Attendance"
          value="97.5%"
          change="+1.5%"
          positive
        />
      </div>

      {/* Employee Grid */}
      <div>
        <h2 className="text-white text-xl mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {employees.map((employee) => (
            <GlassCard key={employee.id} glow className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl mb-3 shadow-lg shadow-blue-500/50">
                  {employee.avatar}
                </div>
                <h3 className="text-white mb-1">{employee.name}</h3>
                <p className="text-slate-400 text-sm mb-2">{employee.role}</p>
                <div className={`px-3 py-1 rounded-full text-xs ${
                  employee.status === 'active'
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                }`}>
                  {employee.status === 'active' ? 'Active' : 'On Break'}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-400">Performance</span>
                    <span className="text-white">{employee.performance}%</span>
                  </div>
                  <Progress value={employee.performance} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Active Projects</p>
                    <p className="text-white text-xl">{employee.projects}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Today</p>
                    <p className="text-white text-xl">{employee.completedToday}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Attendance</span>
                    <span className="text-green-400">{employee.attendance}%</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Project Assignments */}
      <GlassCard glow className="p-6">
        <h2 className="text-white text-xl mb-6">Current Project Assignments</h2>
        <div className="space-y-4">
          {assignedProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-white mb-1">{project.vehicle}</h4>
                  <p className="text-slate-400 text-sm">{project.task}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 text-sm mb-1">{project.employee}</p>
                  <p className="text-white">{project.progress}%</p>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
