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

  return (
    // Responsive structural container: Flex-col on mobile, flex-row on desktop
    <div className="w-full min-h-screen lg:h-screen bg-slate-50/50 flex flex-col lg:flex-row overflow-x-hidden lg:overflow-hidden font-sans text-slate-800 antialiased">
      
      {/* 1. Sidebar Navigation Left Panel (Responsive Track on Mobile) */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Right Side Content Streams (Takes up the remaining screen width) */}
      <div className="flex-grow flex flex-col min-w-0 h-full overflow-x-hidden">
        
        {/* Universal Top Bar (Header/Profile Row) */}
        <Topbar setIsAuthenticated={setIsAuthenticated} />
        
        {/* Dynamic Tab Panel Injector Viewport with mobile scrolling safe fallbacks */}
        <main className="flex-grow p-1 overflow-x-hidden bg-slate-50/40">
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
          {/* Fallback loader placeholder view for incoming future tabs */}
          {!['dashboard', 'profile', 'internship', 'attendance', 'logbook', 'learning', 'viva', 'assessment', 'documents', 'certificates', 'placement', 'announcements', 'support'].includes(activeTab) && (
            <div className="flex items-center justify-center h-64 lg:h-full text-slate-400 font-medium text-sm p-6 text-center">
              Section content for tracking path row "{activeTab}" is initializing...
            </div>
          )}
        </main>

      </div>
    </div>
  );
}