import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Briefcase, 
  ClipboardList, 
  BarChart3, 
  Settings, 
  FileText
} from 'lucide-react';
import logo from 'figma:asset/158115e16fe0c7bf410ec86c97d2aebf7c9cad61.png';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: ShoppingCart, label: 'POS', path: '/pos' },
  { icon: Users, label: 'CRM', path: '/crm' },
  { icon: Briefcase, label: 'ERM', path: '/erm' },
  { icon: ClipboardList, label: 'Job Orders', path: '/jobs' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileText, label: 'Invoices', path: '/invoice' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 p-6 backdrop-blur-2xl bg-gradient-to-b from-slate-900/40 to-blue-950/40 border-r border-white/10 shadow-2xl">
      <div className="mb-12">
        <div className="flex flex-col items-center px-4">
          <img 
            src={logo} 
            alt="E&H Decals" 
            className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          />
          <p className="text-xs text-slate-400 mt-2 text-center">E&H Wrap Studio</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/20'
                  : 'hover:bg-white/5 border border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse" />
                )}
                <item.icon
                  className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                    isActive
                      ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span
                  className={`relative z-10 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-xl">
        <p className="text-xs text-slate-400">System Status</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse" />
          <span className="text-sm text-white">All Systems Online</span>
        </div>
      </div>
    </aside>
  );
}
