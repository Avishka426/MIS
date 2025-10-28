import { TrendingUp, DollarSign, Users, Package } from 'lucide-react';
import { StatCard } from '../StatCard';
import { GlassCard } from '../GlassCard';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const salesTrend = [
  { month: 'May', revenue: 55000, customers: 42 },
  { month: 'Jun', revenue: 67000, customers: 51 },
  { month: 'Jul', revenue: 72000, customers: 58 },
  { month: 'Aug', revenue: 68000, customers: 53 },
  { month: 'Sep', revenue: 78000, customers: 62 },
  { month: 'Oct', revenue: 85000, customers: 68 },
];

const serviceDistribution = [
  { name: 'Full Wraps', value: 45, color: '#3b82f6' },
  { name: 'Partial Wraps', value: 25, color: '#06b6d4' },
  { name: 'Window Tinting', value: 15, color: '#8b5cf6' },
  { name: 'PPF', value: 10, color: '#10b981' },
  { name: 'Other', value: 5, color: '#6b7280' },
];

const materialUsage = [
  { material: 'Matte Vinyl', used: 450, cost: 18000 },
  { material: 'Gloss Vinyl', used: 380, cost: 15200 },
  { material: 'Chrome', used: 120, cost: 14400 },
  { material: 'Carbon Fiber', used: 200, cost: 17000 },
  { material: 'PPF', used: 150, cost: 12000 },
];

const teamPerformance = [
  { name: 'Alex M.', completed: 24, revenue: 32000 },
  { name: 'Jessica W.', completed: 18, revenue: 28000 },
  { name: 'David K.', completed: 22, revenue: 30000 },
  { name: 'Emily R.', completed: 16, revenue: 25000 },
];

export function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-white text-3xl mb-2">Reports & Analytics</h1>
        <p className="text-slate-400">Comprehensive business intelligence and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          label="Total Revenue (6mo)"
          value="$425K"
          change="+18.5%"
          positive
        />
        <StatCard
          icon={TrendingUp}
          label="Avg Order Value"
          value="$1,247"
          change="+8.3%"
          positive
        />
        <StatCard
          icon={Users}
          label="Customer Acquisition"
          value="334"
          change="+24.7%"
          positive
        />
        <StatCard
          icon={Package}
          label="Material Efficiency"
          value="92%"
          change="+5.2%"
          positive
        />
      </div>

      {/* Revenue & Customer Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard glow className="p-6">
          <h3 className="text-white text-xl mb-6">Revenue & Customer Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis yAxisId="left" stroke="#94a3b8" />
              <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 4 }}
                name="Revenue ($)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="customers"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: '#06b6d4', r: 4 }}
                name="Customers"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard glow className="p-6">
          <h3 className="text-white text-xl mb-6">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Material Usage */}
      <GlassCard glow className="p-6">
        <h3 className="text-white text-xl mb-6">Material Usage & Costs</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={materialUsage}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="material" stroke="#94a3b8" />
            <YAxis yAxisId="left" stroke="#94a3b8" />
            <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="used" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Sq Ft Used" />
            <Bar yAxisId="right" dataKey="cost" fill="#06b6d4" radius={[8, 8, 0, 0]} name="Cost ($)" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Team Performance */}
      <GlassCard glow className="p-6">
        <h3 className="text-white text-xl mb-6">Team Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamPerformance.map((member, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-500/50">
                {member.name.charAt(0)}
              </div>
              <h4 className="text-white mb-3">{member.name}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Completed</span>
                  <span className="text-blue-400">{member.completed} jobs</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Revenue</span>
                  <span className="text-green-400">${member.revenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
