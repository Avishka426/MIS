import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/pages/Dashboard';
import { POS } from './components/pages/POS';
import { CRM } from './components/pages/CRM';
import { ERM } from './components/pages/ERM';
import { JobManagement } from './components/pages/JobManagement';
import { Analytics } from './components/pages/Analytics';
import { Settings } from './components/pages/Settings';
import { Invoice } from './components/pages/Invoice';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/erm" element={<ERM />} />
            <Route path="/jobs" element={<JobManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
