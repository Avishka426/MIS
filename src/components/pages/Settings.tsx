import { Bell, Shield, Users, Palette, Database, Lock } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const userRoles = [
  { id: 1, name: 'Alex Martinez', email: 'alex.m@luxesticker.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jessica Wong', email: 'jessica.w@luxesticker.com', role: 'Manager', status: 'active' },
  { id: 3, name: 'David Kim', email: 'david.k@luxesticker.com', role: 'Staff', status: 'active' },
  { id: 4, name: 'Emily Rodriguez', email: 'emily.r@luxesticker.com', role: 'Staff', status: 'active' },
];

export function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-white text-3xl mb-2">Settings & Configuration</h1>
        <p className="text-slate-400">Manage system preferences and user permissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <GlassCard glow className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white text-xl">Notifications</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Email Notifications</p>
                <p className="text-slate-400 text-sm">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Job Status Alerts</p>
                <p className="text-slate-400 text-sm">Get notified on job completions</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Customer Messages</p>
                <p className="text-slate-400 text-sm">Alerts for new messages</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Low Inventory Alerts</p>
                <p className="text-slate-400 text-sm">Material stock warnings</p>
              </div>
              <Switch />
            </div>
          </div>
        </GlassCard>

        {/* Security */}
        <GlassCard glow className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white text-xl">Security</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Two-Factor Authentication</p>
                <p className="text-slate-400 text-sm">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Session Timeout</p>
                <p className="text-slate-400 text-sm">Auto logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <Label className="text-white">Password Requirements</Label>
              <Select defaultValue="strong">
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="strong">Strong</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
              <Lock className="w-4 h-4 mr-2" />
              Change Password
            </Button>
          </div>
        </GlassCard>

        {/* Theme */}
        <GlassCard glow className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Palette className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white text-xl">Appearance</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <Label className="text-white">Theme Mode</Label>
              <Select defaultValue="dark">
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark (Current)</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <Label className="text-white">Accent Color</Label>
              <div className="grid grid-cols-5 gap-2">
                {['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'].map((color) => (
                  <button
                    key={color}
                    className="w-full h-10 rounded-lg border-2 border-white/20 hover:border-white/50 transition-all"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-white mb-1">Compact Mode</p>
                <p className="text-slate-400 text-sm">Reduce spacing and padding</p>
              </div>
              <Switch />
            </div>
          </div>
        </GlassCard>

        {/* System */}
        <GlassCard glow className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white text-xl">System</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Database Status</span>
                <span className="text-green-400">Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-slate-400 text-sm">Last backup: 2 hours ago</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <Label className="text-white">Data Retention</Label>
              <Select defaultValue="1year">
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                  <SelectItem value="forever">Forever</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
              Backup Database Now
            </Button>

            <Button variant="outline" className="w-full border-red-400/30 text-red-400 hover:bg-red-500/10">
              Clear Cache
            </Button>
          </div>
        </GlassCard>
      </div>

      {/* User Management */}
      <GlassCard glow className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white text-xl">User Roles & Permissions</h3>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
            Add User
          </Button>
        </div>

        <div className="space-y-3">
          {userRoles.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white mb-1">{user.name}</h4>
                  <p className="text-slate-400 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30">
                  <span className="text-blue-400 text-sm">{user.role}</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-400/30">
                  <span className="text-green-400 text-sm">{user.status}</span>
                </div>
                <Button variant="outline" size="sm" className="border-white/10 text-slate-400 hover:text-white hover:border-white/20">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
