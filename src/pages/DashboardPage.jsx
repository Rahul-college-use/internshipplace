import { useState } from 'react';
import Sidebar from '../components/user/dashboard/Sidebar';
import Topbar from '../components/user/dashboard/Topbar';
import MainDashboard from '../components/user/dashboard/MainDashboard';
import Attendance from '../components/user/dashboard/Attendance';
import MyProfile from '../components/user/dashboard/MyProfile';
import MyInternship from '../components/user/dashboard/MyInternship';
import DailyLogBook from '../components/user/dashboard/DailyLogBook';
import LearningCenter from '../components/user/dashboard/LearningCenter';
import VivaQuestions from '../components/user/dashboard/VivaQuestions';
import Assessment from '../components/user/dashboard/Assessment';
import Documents from '../components/user/dashboard/Documents';
import Certificates from '../components/user/dashboard/Certificates';
import PlacementCell from '../components/user/dashboard/PlacementCell';
import Announcements from '../components/user/dashboard/Announcements';
import Support from '../components/user/dashboard/Support';

export default function DashboardPage({ setIsAuthenticated }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  // On small devices, this acts as the slide-in state for the mobile drawer
  const [sidebarExpanded, setSidebarExpanded] = useState(false); 

  return (
    <div className="w-full h-screen bg-slate-50/50 flex overflow-hidden font-sans text-slate-800 antialiased relative">
      
      {/* Mobile Dark Overlay Backdrop - Closes the drawer when clicked outside */}
      {sidebarExpanded && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSidebarExpanded(false)}
        />
      )}

      {/* 1. Sidebar Panel (Drawer wrapper for Mobile, collapsing panel for Desktop) */}
      <div className={`
        fixed inset-y-0 left-0 z-50 lg:z-auto lg:static h-full shrink-0
        transition-transform duration-300 ease-in-out
        ${sidebarExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSidebarExpanded(false); // Auto-close drawer on mobile selection
          }} 
          isExpanded={true} // Force true for clean rendering inside drawer viewports
          setIsExpanded={setSidebarExpanded} 
        />
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="flex-grow flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Universal Top Bar (Triggers the mobile drawer menu via the three lines button) */}
        <Topbar 
          setIsAuthenticated={setIsAuthenticated} 
          onToggleSidebar={() => setSidebarExpanded(!sidebarExpanded)} 
          sidebarExpanded={sidebarExpanded} 
        />
        
        {/* Dynamic Tab Content Injector */}
        <main className="flex-grow p-4 sm:p-6 overflow-y-auto bg-slate-50/40 custom-scrollbar">
          {activeTab === 'dashboard' && <MainDashboard />}
          {activeTab === 'profile' && <MyProfile />}
          {activeTab === 'internship' && <MyInternship />}
          {activeTab === 'attendance' && <Attendance />}
          {activeTab === 'logbook' && <DailyLogBook />}
          {activeTab === 'learning' && <LearningCenter />}
          {activeTab === 'viva' && <VivaQuestions />}
          {activeTab === 'assessment' && <Assessment />}
          {activeTab === 'documents' && <Documents />}
          {activeTab === 'certificates' && <Certificates />}
          {activeTab === 'placement' && <PlacementCell />}
          {activeTab === 'announcements' && <Announcements />}
          {activeTab === 'support' && <Support />}
          
          {!['dashboard', 'profile', 'internship', 'attendance', 'logbook', 'learning', 'viva', 'assessment', 'documents', 'certificates', 'placement', 'announcements', 'support'].includes(activeTab) && (
            <div className="flex items-center justify-center h-full text-slate-400 font-medium text-sm p-6 text-center">
              Section content for tracking path row "{activeTab}" is initializing...
            </div>
          )}
        </main>

      </div>
    </div>
  );
}