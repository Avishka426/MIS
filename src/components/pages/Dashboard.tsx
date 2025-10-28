import { DollarSign, Users, CheckCircle, FileText, ClipboardList, TrendingUp } from 'lucide-react';
import { StatCard } from '../StatCard';
import { GlassCard } from '../GlassCard';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 67000 },
];

const jobStatusData = [
  { status: 'Pending', count: 12 },
  { status: 'In Progress', count: 8 },
  { status: 'Quality Check', count: 5 },
  { status: 'Completed', count: 34 },
];

const recentJobs = [
  { id: 'JOB-1034', vehicle: 'Tesla Model S', client: 'John Anderson', status: 'In Progress', progress: 65 },
  { id: 'JOB-1033', vehicle: 'BMW M5', client: 'Sarah Chen', status: 'Quality Check', progress: 90 },
  { id: 'JOB-1032', vehicle: 'Audi RS6', client: 'Mike Johnson', status: 'In Progress', progress: 45 },
  { id: 'JOB-1031', vehicle: 'Porsche 911', client: 'Emma Davis', status: 'Completed', progress: 100 },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-white text-3xl mb-2">Dashboard Overview</h1>
        <p className="text-slate-400">Monitor your business performance in real-time</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          label="Total Sales"
          value="$67,450"
          change="+12.5%"
          positive
        />
        <StatCard
          icon={ClipboardList}
          label="Active Projects"
          value="25"
          change="+8.2%"
          positive
        />
        <StatCard
          icon={Users}
          label="Total Customers"
          value="342"
          change="+15.3%"
          positive
        />
        <StatCard
          icon={CheckCircle}
          label="Completion Rate"
          value="94.2%"
          change="+2.1%"
          positive
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard glow className="p-6">
          <h3 className="text-white text-xl mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#60a5fa' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard glow className="p-6">
          <h3 className="text-white text-xl mb-6">Job Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="status" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Recent Jobs */}
      <GlassCard glow className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl">Real-Time Job Tracking</h3>
          <button className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-400 hover:bg-blue-500/30 transition-all">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-400/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-blue-400">{job.id}</span>
                    <span className="text-white">{job.vehicle}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{job.client}</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30">
                  <span className="text-blue-400 text-sm">{job.status}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-white">{job.progress}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
