import { useState } from 'react';
import { Car, Clock, User, Filter, Plus } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const jobs = [
  {
    id: 'JOB-1034',
    vehicle: 'Tesla Model S',
    client: 'John Anderson',
    service: 'Full Body Wrap - Matte Black',
    status: 'in-progress',
    progress: 65,
    assignedTo: 'Alex Martinez',
    deadline: '2025-11-02',
    priority: 'high',
  },
  {
    id: 'JOB-1033',
    vehicle: 'BMW M5',
    client: 'Sarah Chen',
    service: 'Chrome Delete Package',
    status: 'quality-check',
    progress: 90,
    assignedTo: 'David Kim',
    deadline: '2025-10-30',
    priority: 'medium',
  },
  {
    id: 'JOB-1032',
    vehicle: 'Audi RS6',
    client: 'Mike Johnson',
    service: 'Custom Racing Stripes',
    status: 'in-progress',
    progress: 45,
    assignedTo: 'Jessica Wong',
    deadline: '2025-11-05',
    priority: 'medium',
  },
  {
    id: 'JOB-1031',
    vehicle: 'Porsche 911',
    client: 'Emma Davis',
    service: 'Paint Protection Film',
    status: 'completed',
    progress: 100,
    assignedTo: 'Alex Martinez',
    deadline: '2025-10-28',
    priority: 'high',
  },
  {
    id: 'JOB-1030',
    vehicle: 'Mercedes AMG GT',
    client: 'Robert Lee',
    service: 'Window Tinting',
    status: 'pending',
    progress: 0,
    assignedTo: 'Unassigned',
    deadline: '2025-11-10',
    priority: 'low',
  },
];

const statusColors = {
  'pending': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
  'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
  'quality-check': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
  'completed': 'bg-green-500/20 text-green-400 border-green-400/30',
};

const priorityColors = {
  'low': 'text-slate-400',
  'medium': 'text-yellow-400',
  'high': 'text-red-400',
};

export function JobManagement() {
  const [filter, setFilter] = useState<string>('all');

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-3xl mb-2">Job Management</h1>
          <p className="text-slate-400">Track and manage vehicle sticker projects</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
          <Plus className="w-4 h-4 mr-2" />
          New Job Order
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassCard className="p-4">
          <p className="text-slate-400 text-sm mb-1">Total Jobs</p>
          <p className="text-white text-2xl">{jobs.length}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-slate-400 text-sm mb-1">In Progress</p>
          <p className="text-blue-400 text-2xl">{jobs.filter(j => j.status === 'in-progress').length}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-slate-400 text-sm mb-1">Quality Check</p>
          <p className="text-purple-400 text-2xl">{jobs.filter(j => j.status === 'quality-check').length}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-slate-400 text-sm mb-1">Completed</p>
          <p className="text-green-400 text-2xl">{jobs.filter(j => j.status === 'completed').length}</p>
        </GlassCard>
      </div>

      {/* Tabs Filter */}
      <Tabs value={filter} onValueChange={setFilter} className="w-full">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="quality-check">Quality Check</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredJobs.map((job) => (
              <GlassCard key={job.id} glow className="p-6 hover:border-blue-400/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                      <Car className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{job.vehicle}</h3>
                      <p className="text-slate-400 text-sm">{job.id}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs border ${statusColors[job.status as keyof typeof statusColors]}`}>
                    {job.status.replace('-', ' ')}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Service:</span>
                    <span className="text-white">{job.service}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Client:</span>
                    <span className="text-white">{job.client}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Assigned to:</span>
                    <span className="text-blue-400">{job.assignedTo}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Deadline:</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Priority:</span>
                    <span className={priorityColors[job.priority as keyof typeof priorityColors]}>
                      {job.priority.toUpperCase()}
                    </span>
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

                <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                  <Button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                    Update Status
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
