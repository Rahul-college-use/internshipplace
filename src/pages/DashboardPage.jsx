import { useState } from 'react';
import Sidebar from '../components/user/dashboard/Sidebar';
import Topbar from '../components/user/dashboard/Topbar'; // <-- 1. Import Topbar
import MainDashboard from '../components/user/dashboard/MainDashboard';

export default function DashboardPage({ setIsAuthenticated }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full h-screen bg-slate-50/50 flex overflow-hidden font-sans text-slate-800 antialiased">
      
      {/* Sidebar Navigation Left Panel Block */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Right Dashboard Container Box stream */}
      <div className="flex-grow flex flex-col h-full overflow-hidden">
        
        {/* COMPONENT: Universal Dashboard Topbar Header row */}
        
        <Topbar setIsAuthenticated={setIsAuthenticated} />
        

    <div className="flex-grow bg-slate-50/40 overflow-hidden">
      {activeTab === 'dashboard' ? (
        <MainDashboard />
      ) : (
        <div className="flex items-center justify-center h-full text-slate-400 font-medium text-sm">
          Section content for tracking path row "{activeTab}" is initializing...
        </div>
      )}
    </div>

      </div>
    </div>
  );
}